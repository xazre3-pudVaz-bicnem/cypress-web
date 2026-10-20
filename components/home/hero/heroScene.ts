import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

/**
 * トップページのヒーローに使う 3D シーン。
 * 青いやわらかな形（口コミの星・地図ピン・吹き出し・きらめき など Web 集客にちなんだ形）を
 * 画面いっぱいに敷き詰め、中央にサイプレスのひし形マークを暖色で光らせる。
 * React から切り離した素の three.js で書き、動的 import で初回表示を重くしない。
 */

export interface HeroSceneOptions {
  /** high: デスクトップ（影を高解像度に・形を多めに） / low: モバイルや非力な端末 */
  quality: "high" | "low";
  /** 描画サイズ（CSS px）と画素密度。Web Worker では DOM が無いので外から渡す */
  width: number;
  height: number;
  dpr: number;
}

export interface HeroScene {
  /** 1フレーム描画（停止中に見た目だけ更新したいとき用） */
  renderOnce(): void;
  start(): void;
  stop(): void;
  /** マウス位置（-1〜1）。形が少しよけ、カメラがわずかに追従する */
  setPointer(x: number, y: number): void;
  /** 0〜1。読み込み直後に形が中央から順に膨らんで現れる演出の進み具合 */
  setIntro(t: number): void;
  /** delay ミリ秒後に「膨らんで現れる」演出を自分で再生する（Worker から時間を刻むため） */
  playIntro(delay: number): void;
  resize(width: number, height: number): void;
  dispose(): void;
}

// Web Worker（OffscreenCanvas）でも動くよう、描画タイミングの関数を環境に合わせて選ぶ
const nextFrame: (cb: (t: number) => void) => number =
  typeof requestAnimationFrame === "function" ? (cb) => requestAnimationFrame(cb) : (cb) => setTimeout(() => cb(performance.now()), 16) as unknown as number;
const cancelFrame: (id: number) => void =
  typeof cancelAnimationFrame === "function" ? (id) => cancelAnimationFrame(id) : (id) => clearTimeout(id);

const BLUE = new THREE.Color("#2263a8");
const BG = new THREE.Color("#0a4c8f");
const CORAL = new THREE.Color("#ff8d78");

// ─── 形のもと ───────────────────────────────────────────────────────────
// 球を極座標の関数で引き伸ばし、厚みをつぶすことで、風船のように膨らんだ星・花・ピンなどを作る。
// 押し出し（Extrude）より表面がなめらかで、中央まで丸みが続く。

function inflated(radius: (a: number) => number, thickness = 0.62, detail: [number, number] = [72, 44]) {
  const g = new THREE.SphereGeometry(1, detail[0], detail[1]);
  const pos = g.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    // SphereGeometry は y 軸が極なので、正面（z）から見た輪郭になるよう y と z を入れ替えて扱う
    const x = v.x;
    const y = v.z;
    const z = v.y;
    const a = Math.atan2(y, x);
    const r = radius(a);
    pos.setXYZ(i, x * r, y * r, z * thickness);
  }
  g.computeVertexNormals();
  return g;
}

/** なめらかな星形の半径関数。points: 角の数, inner: くぼみの深さ, sharp: 角の鋭さ */
const starR = (points: number, inner: number, sharp: number, turn = Math.PI / 2) => (a: number) =>
  inner + (1 - inner) * Math.pow(0.5 + 0.5 * Math.cos(points * (a - turn)), sharp);

/** 花びら状（丸い山が並ぶ） */
const flowerR = (petals: number, depth: number) => (a: number) => 1 - depth + depth * Math.pow(Math.abs(Math.cos((petals / 2) * a)), 0.55);

/** 地図ピン（下に向かって尖る） */
const pinR = (a: number) => 0.78 + 0.62 * Math.pow(Math.max(0, -Math.sin(a)), 7);

/** 吹き出し（横長の丸に、左下の小さなしっぽ） */
const bubbleR = (a: number) => {
  const ex = 1;
  const ey = 0.74;
  const base = (ex * ey) / Math.sqrt(Math.pow(ey * Math.cos(a), 2) + Math.pow(ex * Math.sin(a), 2));
  const t = -2.2;
  const d = Math.atan2(Math.sin(a - t), Math.cos(a - t));
  return base + 0.42 * Math.exp(-Math.pow(d / 0.16, 2));
};

/**
 * サイプレスのマーク（ひし形を2つの山括弧に分けた形）。
 * |x|+|y|=R のひし形の周上を、上の頂点から反時計回りに 0〜4 で表した区間を帯にして押し出す。
 */
export function diamondPiece(from: number, to: number, R = 1, width = 0.3) {
  const inner = R - width * Math.SQRT2;
  const corners = (rad: number) => [
    new THREE.Vector2(0, rad),
    new THREE.Vector2(-rad, 0),
    new THREE.Vector2(0, -rad),
    new THREE.Vector2(rad, 0),
  ];
  const at = (rad: number, t: number) => {
    const c = corners(rad);
    const i = Math.floor(t) % 4;
    const f = t - Math.floor(t);
    return c[i].clone().lerp(c[(i + 1) % 4], f);
  };
  const path = (rad: number) => {
    const pts = [at(rad, from)];
    for (let k = Math.floor(from) + 1; k < to; k++) pts.push(corners(rad)[k % 4]);
    pts.push(at(rad, to));
    return pts;
  };
  const outerPts = path(R);
  const innerPts = path(inner).reverse();
  const s = new THREE.Shape();
  outerPts.forEach((p, i) => (i === 0 ? s.moveTo(p.x, p.y) : s.lineTo(p.x, p.y)));
  innerPts.forEach((p) => s.lineTo(p.x, p.y));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, {
    depth: 0.12,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.1,
    bevelSegments: 8,
    curveSegments: 4,
  });
  g.translate(0, 0, -0.06);
  g.computeVertexNormals();
  return g;
}

/** 中央のマークの後ろに置く、やわらかな光のにじみ */
function glowTexture() {
  const c: HTMLCanvasElement | OffscreenCanvas =
    typeof document !== "undefined" ? Object.assign(document.createElement("canvas"), { width: 256, height: 256 }) : new OffscreenCanvas(256, 256);
  const ctx = c.getContext("2d") as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, "rgba(255,150,128,0.55)");
  g.addColorStop(0.3, "rgba(255,128,110,0.32)");
  g.addColorStop(0.65, "rgba(255,110,100,0.1)");
  g.addColorStop(1, "rgba(255,110,100,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// 再現性のある乱数（毎回同じ配置にして、ポスター画像と見た目をそろえる）
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Piece {
  mesh: THREE.Mesh;
  base: THREE.Vector3;
  offset: THREE.Vector3;
  scale: number;
  spin: THREE.Vector3;
  phase: number;
  delay: number;
}

export function createHeroScene(canvas: HTMLCanvasElement | OffscreenCanvas, { quality, width, height, dpr }: HeroSceneOptions): HeroScene {
  const high = quality === "high";
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(dpr || 1, high ? 1.5 : 1.25));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  scene.background = BG.clone();
  scene.fog = new THREE.Fog(BG.clone(), 14, 26);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;

  const FOV = 30;
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 60);
  const CAM_Z = 16;
  camera.position.set(0, 0, CAM_Z);

  scene.add(new THREE.HemisphereLight(0xeef3ff, 0x052453, 0.42));
  const key = new THREE.DirectionalLight(0xffffff, 2.6);
  key.position.set(-9, 11, 7);
  {
    key.castShadow = true;
    key.shadow.mapSize.set(high ? 2048 : 1024, high ? 2048 : 1024);
    key.shadow.camera.left = -14;
    key.shadow.camera.right = 14;
    key.shadow.camera.top = 10;
    key.shadow.camera.bottom = -10;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 40;
    key.shadow.radius = 6;
    key.shadow.bias = -0.0006;
    key.shadow.normalBias = 0.03;
  }
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xc9dcff, 0.55);
  rim.position.set(8, -4, 6);
  scene.add(rim);

  // 中央のマーク（暖色で発光し、周りの形もほんのり染める）
  const markGroup = new THREE.Group();
  markGroup.position.set(0, 0.15, 1.6);
  const markMatA = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#ffb3a1"),
    emissive: new THREE.Color("#ff6d55"),
    emissiveIntensity: 0.75,
    roughness: 0.32,
    clearcoat: 0.6,
    clearcoatRoughness: 0.25,
  });
  const markMatB = markMatA.clone();
  markMatB.color = new THREE.Color("#ffd0c2");
  markMatB.emissive = new THREE.Color("#ff8a70");
  markMatB.emissiveIntensity = 0.4;
  const markL = new THREE.Mesh(diamondPiece(0, 2.45), markMatA);
  const markR = new THREE.Mesh(diamondPiece(2.56, 3.87), markMatB);
  markGroup.add(markL, markR);
  markGroup.scale.setScalar(1.05);
  scene.add(markGroup);

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })
  );
  glow.position.set(0, 0.15, 1.2);
  glow.scale.setScalar(6.5);
  scene.add(glow);

  const warm = new THREE.PointLight(CORAL, high ? 40 : 30, 6.5, 1.6);
  warm.position.set(0, 0.15, 2.4);
  scene.add(warm);

  // 敷き詰める形
  const geos: { g: THREE.BufferGeometry; size: number; weight: number }[] = [
    { g: new THREE.SphereGeometry(1, 48, 32), size: 1, weight: 5 },
    { g: inflated(starR(5, 0.52, 1.5), 0.68), size: 1, weight: 3 },
    { g: inflated(starR(9, 0.86, 1), 0.7), size: 1, weight: 2 },
    { g: inflated(flowerR(6, 0.18), 0.72), size: 1, weight: 2 },
    { g: inflated(pinR, 0.72), size: 1.1, weight: 2 },
    { g: inflated(bubbleR, 0.66), size: 1.05, weight: 2 },
    { g: inflated(starR(4, 0.34, 2.6), 0.55), size: 1, weight: 2 },
    { g: inflated(flowerR(4, 0.3), 0.74), size: 1, weight: 2 },
    { g: new THREE.CapsuleGeometry(0.55, 0.9, 12, 32), size: 1.05, weight: 1 },
  ];
  const bag: number[] = [];
  geos.forEach((g, i) => {
    for (let k = 0; k < g.weight; k++) bag.push(i);
  });

  const mats = [0, 1, 2].map(
    (i) =>
      new THREE.MeshStandardMaterial({
        color: BLUE.clone().offsetHSL(0, i === 2 ? -0.05 : 0, (i - 1) * 0.035),
        roughness: 0.78,
        metalness: 0,
        envMapIntensity: 0.26,
      })
  );

  const field = new THREE.Group();
  scene.add(field);
  const pieces: Piece[] = [];

  /**
   * 形を並べる。配置は画面比によらず固定（横 2.4:1 までをカバー）し、
   * 縦の画角を一定にして中央を切り取るので、ポスター画像を cover で切り抜いた見た目と一致する。
   */
  function layout() {
    const rand = rng(20261020);
    const visH = 2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * CAM_Z;
    const halfW = (visH * 2.4) / 2 + 1.2;
    const halfH = visH / 2 + 1.2;
    const placed: { p: THREE.Vector3; r: number }[] = [{ p: new THREE.Vector3(0, 0.15, 1.1), r: 1.45 }];
    const target = Math.round(((halfW * halfH * 4) / 1.05) * (high ? 1 : 0.8));
    let tries = 0;
    while (placed.length - 1 < target && tries < target * 80) {
      tries++;
      // 手前ほど大きく、奥ほど小さく
      const z = -2.2 + rand() * 2.6;
      const r = 0.66 + rand() * 0.8 + z * 0.06;
      const p = new THREE.Vector3((rand() * 2 - 1) * halfW, (rand() * 2 - 1) * halfH, z);
      // 少し重なりを許して、山積みになったような密度にする
      const ok = placed.every((q) => q.p.distanceTo(p) > (q.r + r) * 0.84);
      if (!ok) continue;
      placed.push({ p, r });
      const gi = bag[Math.floor(rand() * bag.length)];
      const { g, size } = geos[gi];
      const mesh = new THREE.Mesh(g, mats[Math.floor(rand() * mats.length)]);
      const scale = r / size;
      mesh.position.copy(p);
      mesh.scale.setScalar(scale);
      mesh.rotation.set((rand() - 0.5) * 0.5, (rand() - 0.5) * 0.5, rand() * Math.PI * 2);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      field.add(mesh);
      pieces.push({
        mesh,
        base: p.clone(),
        offset: new THREE.Vector3(),
        scale,
        spin: new THREE.Vector3((rand() - 0.5) * 0.12, (rand() - 0.5) * 0.12, (rand() - 0.5) * 0.18),
        phase: rand() * Math.PI * 2,
        delay: Math.min(1, Math.hypot(p.x, p.y) / 8),
      });
    }
    const step = 1.9;
    for (let x = -halfW - 1; x <= halfW + 1; x += step) {
      for (let y = -halfH - 1; y <= halfH + 1; y += step) {
        const p = new THREE.Vector3(x + (rand() - 0.5) * 0.9, y + (rand() - 0.5) * 0.9, -4 + rand() * 0.8);
        const r = 1.1 + rand() * 0.5;
        const gi = bag[Math.floor(rand() * bag.length)];
        const { g, size } = geos[gi];
        const mesh = new THREE.Mesh(g, mats[0]);
        const scale = r / size;
        mesh.position.copy(p);
        mesh.scale.setScalar(scale);
        mesh.rotation.set((rand() - 0.5) * 0.6, (rand() - 0.5) * 0.6, rand() * Math.PI * 2);
        mesh.receiveShadow = true;
        field.add(mesh);
        pieces.push({ mesh, base: p.clone(), offset: new THREE.Vector3(), scale, spin: new THREE.Vector3(0, 0, (rand() - 0.5) * 0.06), phase: rand() * Math.PI * 2, delay: 1 });
      }
    }
  }

  const pointer = new THREE.Vector2(0, 0);
  const pointerSmooth = new THREE.Vector2(0, 0);
  const pointerWorld = new THREE.Vector3(999, 999, 0);
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const ray = new THREE.Raycaster();
  let pointerActive = false;
  let intro = 1;
  /** playIntro で自走させるときの開始時刻（performance.now 基準）。null なら外から setIntro で指定 */
  let introStart: number | null = null;
  let running = false;
  let raf = 0;
  let last = 0;
  let elapsed = 0;
  /** 中央の光のにじみの大きさ。縦長の画面では見える幅に合わせて小さくし、全体が白っぽくならないようにする */
  let glowBase = 6;

  function resize(w: number, h: number) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    // 影を落とす範囲を、いま見えている範囲に合わせて小さくする
    const visH = 2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * CAM_Z;
    const halfW = (visH * camera.aspect) / 2 + 2;
    glowBase = Math.min(6, visH * camera.aspect * 0.55);
    key.shadow.camera.left = -halfW - 2;
    key.shadow.camera.right = halfW + 2;
    key.shadow.camera.updateProjectionMatrix();
  }

  const easeOutBack = (t: number) => {
    const c1 = 1.5;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  function update(dt: number) {
    elapsed += dt;
    if (introStart !== null) intro = Math.min(1, Math.max(0, (performance.now() - introStart) / 1800));
    pointerSmooth.lerp(pointer, 1 - Math.pow(0.001, dt));
    camera.position.x = pointerSmooth.x * 0.55;
    camera.position.y = pointerSmooth.y * 0.35;
    camera.lookAt(0, 0, 0);

    if (pointerActive) {
      ray.setFromCamera(pointer, camera);
      ray.ray.intersectPlane(plane, pointerWorld);
    }

    const push = new THREE.Vector3();
    for (const p of pieces) {
      // 読み込み時は中央から外側へ順に膨らんで現れる
      const local = THREE.MathUtils.clamp((intro - p.delay * 0.55) / 0.45, 0, 1);
      const s = p.scale * (local <= 0 ? 0.0001 : easeOutBack(local));
      p.mesh.scale.setScalar(s);

      push.set(0, 0, 0);
      if (pointerActive) {
        const dx = p.base.x - pointerWorld.x;
        const dy = p.base.y - pointerWorld.y;
        const d = Math.hypot(dx, dy);
        const R = 2.6;
        if (d < R) {
          const f = Math.pow(1 - d / R, 2) * 0.85;
          push.set((dx / (d || 1)) * f, (dy / (d || 1)) * f, f * 0.5);
        }
      }
      p.offset.lerp(push, 1 - Math.pow(0.02, dt));
      p.mesh.position.set(
        p.base.x + p.offset.x,
        p.base.y + p.offset.y + Math.sin(elapsed * 0.6 + p.phase) * 0.06,
        p.base.z + p.offset.z
      );
      p.mesh.rotation.x += p.spin.x * dt;
      p.mesh.rotation.y += p.spin.y * dt;
      p.mesh.rotation.z += p.spin.z * dt;
    }

    const markIn = THREE.MathUtils.clamp(intro / 0.35, 0, 1);
    const pulse = 0.5 + 0.5 * Math.sin(elapsed * 1.6);
    markGroup.scale.setScalar(1.05 * (markIn <= 0 ? 0.0001 : easeOutBack(markIn)));
    markGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.35 + pointerSmooth.x * 0.25;
    markGroup.rotation.x = -pointerSmooth.y * 0.2;
    markGroup.position.y = 0.15 + Math.sin(elapsed * 0.9) * 0.06;
    markMatA.emissiveIntensity = 0.45 + pulse * 0.25;
    glow.scale.setScalar(glowBase * (1 + pulse * 0.2) * markIn);
    const near = camera.aspect < 1 ? 0.4 : 1;
    warm.intensity = ((high ? 34 : 26) + pulse * 14) * near;
  }

  function frame(now: number) {
    raf = nextFrame(frame);
    const dt = Math.min((now - last) / 1000, 1 / 20);
    last = now;
    update(dt);
    renderer.render(scene, camera);
  }

  layout();
  resize(width, height);

  return {
    renderOnce() {
      update(0);
      renderer.render(scene, camera);
    },
    start() {
      if (running) return;
      running = true;
      last = performance.now();
      raf = nextFrame(frame);
    },
    stop() {
      running = false;
      cancelFrame(raf);
    },
    setPointer(x, y) {
      pointer.set(x, y);
      pointerActive = true;
    },
    setIntro(t) {
      introStart = null;
      intro = t;
    },
    playIntro(delay) {
      introStart = performance.now() + delay;
      intro = 0;
    },
    resize,
    dispose() {
      cancelFrame(raf);
      geos.forEach(({ g }) => g.dispose());
      mats.forEach((m) => m.dispose());
      markL.geometry.dispose();
      markR.geometry.dispose();
      markMatA.dispose();
      markMatB.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
    },
  };
}
