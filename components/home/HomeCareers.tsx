"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import ArrowLink from "@/components/ui/ArrowLink";

/** 浮かんでいる写真の配置（位置%・大きさ・傾き・スクロール時の動く速さ） */
const PHOTOS = [
  { src: "/images/v2/life-desk.jpg", alt: "窓際のデスクで分析画面を開いたノートパソコン", x: "4%", y: "6%", w: "clamp(120px,12vw,190px)", rot: -6, speed: 0.9 },
  { src: "/images/v2/life-notes.jpg", alt: "壁に付せんを貼って企画を整理している手元", x: "78%", y: "2%", w: "clamp(110px,11vw,170px)", rot: 5, speed: 1.3 },
  { src: "/images/v2/life-camera.jpg", alt: "SNS用の撮影準備をしたカメラとスマートフォン", x: "86%", y: "36%", w: "clamp(120px,12.5vw,200px)", rot: -4, speed: 0.7 },
  { src: "/images/v2/life-map.jpg", alt: "地図アプリを開いたスマートフォンを持つ手", x: "-2%", y: "44%", w: "clamp(130px,13vw,210px)", rot: 4, speed: 1.15 },
  { src: "/images/v2/life-meeting.jpg", alt: "タブレットのサイト設計を指さして打ち合わせる様子", x: "14%", y: "76%", w: "clamp(110px,11vw,170px)", rot: -5, speed: 1.4 },
  { src: "/images/v2/life-street.jpg", alt: "朝の東京の下町の通り", x: "70%", y: "72%", w: "clamp(120px,12vw,190px)", rot: 7, speed: 0.85 },
];

/** 採用（濃紺の帯）。周りに働く風景の写真がばらばらの速さで漂う */
export default function HomeCareers() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} aria-labelledby="home-careers-title" className="relative overflow-hidden text-white" style={{ background: "var(--v2-navy)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[url('/images/v2/contour.svg')] bg-cover bg-center" />
      <div className="relative mx-auto max-w-[1440px] sm:min-h-[110svh]">
        {PHOTOS.map((p) => (
          <FloatingPhoto key={p.src} photo={p} progress={scrollYProgress} />
        ))}
        <div className="relative z-10 flex flex-col items-center justify-center px-[var(--v2-gutter)] py-28 text-center sm:min-h-[110svh] sm:py-32">
          <p className="v2-display text-[clamp(20px,1.6vw,24px)]">Careers</p>
          <h2 id="home-careers-title" className="mt-6 text-[clamp(26px,3vw,44px)] font-bold leading-[1.5] tracking-[0.03em]">
            地域の会社の「選ばれる」を、
            <br />
            一緒につくりませんか
          </h2>
          <p className="mt-7 max-w-[36em] text-[13px] font-semibold leading-[2.1] opacity-85 md:text-[14px]">
            現在、地域の会社にWeb集客を提案する「Webマーケティング営業（正社員）」を募集しています。
            未経験でも、入社研修で MEO・SEO・AIO の基礎から学べます。
          </p>
          <div className="mt-10">
            <ArrowLink href="/recruit" variant="white">
              採用情報を見る
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingPhoto({ photo, progress }: { photo: (typeof PHOTOS)[number]; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [140 * photo.speed, -140 * photo.speed]);
  const rotate = useTransform(progress, [0, 1], [photo.rot - 3, photo.rot + 3]);
  return (
    <motion.div
      className="absolute hidden aspect-[5/6] overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:block"
      style={{ left: photo.x, top: photo.y, width: photo.w, y, rotate }}
    >
      <Image src={photo.src} alt={photo.alt} fill sizes="200px" className="object-cover" />
    </motion.div>
  );
}
