import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

const NOTES = [
  "Spesifikasi dapat berbeda berdasarkan generasi dan tahun produksi.",
  "Pilihan warna bergantung pada ketersediaan unit.",
  "Harga mengikuti kondisi dan tahun kendaraan.",
  "Pastikan melakukan pemeriksaan kendaraan sebelum pembelian.",
];

export function Closing() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate3d(${x * 0.16}px, ${y * 0.2}px, 0)`;
    };

    const leave = () => {
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);

    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <section className="section" id="garansi">
        <div className="container">
          <div className="warranty">
            <div>
              <span className="idx">05</span>
              <Reveal variant="mask">
                <h2 className="w-title">Garansi dan Kualitas</h2>
              </Reveal>
            </div>
            <Reveal variant="up" delay={0.08}>
              <p className="w-copy">
                Honda dikenal dengan standar kualitas dan ketelitian dalam
                pengembangan kendaraan. Untuk pembelian Honda NSX, ketentuan
                garansi mengikuti tahun produksi, kondisi kendaraan, serta
                kebijakan dealer atau penjual.
              </p>
            </Reveal>
          </div>

          <div className="nb-wrap" id="nota-bene">
            <div className="nb-head">
              <h3>
                <span className="nb-idx">06</span>Nota Bene
              </h3>
            </div>
            <div className="nb-grid">
              {NOTES.map((note, i) => (
                <Reveal
                  as="div"
                  className="nb-item"
                  key={note}
                  variant="up"
                  delay={i * 0.06}
                >
                  <span className="n">0{i + 1}</span>
                  <span>{note}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="miliki">
        <div className="cta-bg" aria-hidden="true">
          <img
            src="/assets/nsx-blue.webp"
            alt=""
            width={1200}
            height={800}
            loading="lazy"
            data-parallax="0.05"
          />
        </div>

        <div className="container">
          <div className="cta-inner">
            <span className="idx">07</span>
            <Reveal variant="mask">
              <h2>MILIKI PENGALAMAN BERKENDARA YANG BERBEDA!</h2>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <p>
                Honda NSX adalah pilihan bagi mereka yang menghargai kecepatan,
                inovasi, dan kemewahan.
              </p>
            </Reveal>
            <Reveal variant="up" delay={0.18}>
              <a className="btn btn-magnetic" href="#warna" ref={btnRef}>
                Drive Your Passion.
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12 12 4M5.5 4H12v6.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>

            <div className="cta-line">
              <span>HONDA NSX &ndash; BORN TO PERFORM, BUILT TO INSPIRE.</span>
              <span className="legend">
                Drive Your Passion. Experience the Legend.
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="f-brand">Honda NSX</span>
          <span className="f-note">The Art of Performance</span>
        </div>
      </footer>
    </>
  );
}
