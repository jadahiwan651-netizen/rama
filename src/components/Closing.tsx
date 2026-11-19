import { useEffect, useRef } from "react";
import { asset } from "../lib/asset";
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
            src={asset("nsx-blue.webp")}
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
            <div className="cta-actions">
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
              <Reveal variant="up" delay={0.24}>
                <a
                  className="btn btn--outline"
                  href="https://wa.me/6285281896335"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat WhatsApp +62 852 8189 6335"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.88 9.9Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.12-.28-.2-.57-.35Z" />
                  </svg>
                  WhatsApp
                </a>
              </Reveal>
            </div>

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
          <div className="f-links">
            <a href="tel:+6285281896335">+62 852 8189 6335</a>
            <a
              href="https://www.instagram.com/ramanyatidur_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ramanyatidur_
            </a>
          </div>
          <span className="f-note">The Art of Performance</span>
        </div>
      </footer>
    </>
  );
}
