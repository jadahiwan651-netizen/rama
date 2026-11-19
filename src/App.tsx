import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Reveal, SplitText } from "./components/Reveal";
import { Colors } from "./components/Colors";
import { FiveW } from "./components/FiveW";
import { Advantages } from "./components/Advantages";
import { Marquee } from "./components/Marquee";
import { Testimonials } from "./components/Testimonials";
import { Closing } from "./components/Closing";

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || narrow) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    if (!elements.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      for (const el of elements) {
        const host = el.parentElement ?? el;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -160 || rect.top > vh + 160) continue;

        const speed = Number.parseFloat(el.dataset.parallax || "0.1");
        const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
        const y = offset * speed * 100;
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.08)`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section className="section intro" id="perkenalan">
          <div className="container">
            <div className="intro-grid">
              <span className="idx">00</span>
              <Reveal variant="up">
                <h2 className="statement">
                  <SplitText
                    text="Rasakan Perpaduan Sempurna antara Kecepatan, Teknologi, dan Kemewahan."
                    highlights={["Kecepatan", "Teknologi", "Kemewahan"]}
                    step={0.035}
                  />
                </h2>
              </Reveal>
            </div>

            <div className="intro-body">
              <Reveal variant="up" delay={0.05}>
                <p>
                  Honda NSX merupakan mobil sport legendaris yang dirancang
                  untuk menghadirkan pengalaman berkendara luar biasa. Dengan
                  desain aerodinamis, performa mesin bertenaga, serta teknologi
                  modern, Honda NSX menjadi simbol inovasi dan kemewahan dalam
                  dunia otomotif.
                </p>
              </Reveal>
              <Reveal variant="up" delay={0.14}>
                <span className="note">
                  Honda NSX
                  <br />
                  The Art of Performance
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-media">
            <img
              src="/assets/nsx-red.webp"
              alt="Honda NSX merah"
              width={675}
              height={379}
              loading="lazy"
              data-parallax="0.16"
            />
          </div>
          <div className="container band-caption">
            <span className="bc-eyebrow">Honda NSX</span>
            <span className="bc-year">The Art of Performance</span>
          </div>
        </section>

        <Colors />
        <FiveW />
        <Advantages />
        <Marquee />
        <Testimonials />
        <Closing />
      </main>
    </>
  );
}
