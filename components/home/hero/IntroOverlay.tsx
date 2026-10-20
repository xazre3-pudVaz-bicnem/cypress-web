import Logo from "@/components/brand/Logo";

/**
 * 初回だけ流すイントロ（青い画面にロゴ → 波紋が広がって 3D が現れる）。PC のみ。
 * スマホは表示の速さを優先して出さない（全面を覆うとヒーロー画像の表示が遅れて計測されるため）。
 * 描画前に走る小さなスクリプトで「このタブで既に見た」「モーションOFF」なら <html> に
 * cy-intro-skip を付け、CSS で非表示にする（表示後に消すとちらつくため）。
 */
const SKIP_SCRIPT = `(function(){var d=document.documentElement;try{var m=localStorage.getItem("cy-motion");var off=m==="off"||(m!=="on"&&matchMedia("(prefers-reduced-motion: reduce)").matches);if(off){d.dataset.motion="off"}if(off||sessionStorage.getItem("cy-intro")||matchMedia("(max-width: 767px)").matches){d.classList.add("cy-intro-skip")}}catch(e){d.classList.add("cy-intro-skip")}})();`;

export default function IntroOverlay() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SCRIPT }} />
      <div className="cy-intro v2" aria-hidden>
        <span className="cy-intro__ring" />
        <span className="cy-intro__ring" />
        <span className="cy-intro__ring" />
        <span className="cy-intro__logo">
          <Logo tone="white" />
        </span>
      </div>
    </>
  );
}
