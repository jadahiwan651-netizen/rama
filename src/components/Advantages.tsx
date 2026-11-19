import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";

const ITEMS = [
  "Desain eksterior sporty dan aerodinamis.",
  "Performa mesin yang mengesankan.",
  "Teknologi hybrid pada generasi kedua.",
  "Interior mewah dan ergonomis.",
  "Handling presisi dan responsif.",
  "Identitas mobil sport legendaris.",
];

export function Advantages() {
  return (
    <section className="section adv" id="keunggulan">
      <div className="container">
        <div className="head">
          <span className="idx">03</span>
          <div className="head-copy">
            <Reveal variant="mask">
              <h2>Keunggulan Honda NSX</h2>
            </Reveal>
          </div>
        </div>

        <div className="adv-grid">
          <Reveal variant="scale" className="adv-media-col">
            <div className="adv-media">
              <img
                src={asset("nsx-white.webp")}
                srcSet={`${asset("nsx-white-sm.webp")} 800w, ${asset("nsx-white.webp")} 1400w`}
                sizes="(max-width: 900px) 100vw, 48vw"
                alt="Honda NSX putih dari samping"
                width={1400}
                height={877}
                loading="lazy"
              />
              <span className="am-tag">Honda NSX</span>
            </div>
          </Reveal>

          <ol className="adv-list">
            {ITEMS.map((item, i) => (
              <Reveal as="li" key={item} variant="left" delay={i * 0.055}>
                <div className="adv-item">
                  <span className="a-n">0{i + 1}</span>
                  <span className="a-t">{item}</span>
                  <span className="a-arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 12 12 4M5.5 4H12v6.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
