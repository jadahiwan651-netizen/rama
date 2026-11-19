import { useEffect, useRef } from "react";

function YearCounter() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = "1990";
      return;
    }

    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const target = 1990;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <span ref={ref}>1990</span>;
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/assets/nsx-hero.webp"
          srcSet="/assets/nsx-hero-sm.webp 900w, /assets/nsx-hero.webp 1600w"
          sizes="100vw"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
        />
      </div>

      <div className="hero-inner">
        <div className="hero-top">
          <span className="eyebrow">Honda NSX</span>
          <span className="hero-year">
            <YearCounter />
          </span>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="l">
              <span>THE ART</span>
            </span>
            <span className="l">
              <span>
                <em className="of">OF</em>{" "}
                <span className="accent">PERFORMANCE</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="hero-foot">
          <p className="hero-sub">
            Rasakan Perpaduan Sempurna antara Kecepatan, Teknologi, dan
            Kemewahan.
          </p>
          <a className="hero-cue" href="#perkenalan">
            <span>Scroll</span>
            <span className="ring" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2v11M3.5 8.5 8 13l4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
