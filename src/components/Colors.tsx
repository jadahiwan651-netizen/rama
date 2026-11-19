import { useState } from "react";
import type { CSSProperties } from "react";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";

const COLORS = [
  {
    name: "Red",
    desc: "Sporty, berani, dan penuh energi.",
    tint: "#d81b2f",
    opacity: 0.76,
    dot: "#c8102e",
    filter: "grayscale(1) brightness(1.06) contrast(1.03)",
  },
  {
    name: "Black",
    desc: "Elegan, misterius, dan berkelas.",
    tint: "#0b0c0e",
    opacity: 0.8,
    dot: "#15171a",
    filter: "grayscale(1) brightness(0.62) contrast(1.08)",
  },
  {
    name: "White",
    desc: "Bersih, modern, dan mewah.",
    tint: "#ffffff",
    opacity: 0.5,
    dot: "#f4f4f2",
    filter: "grayscale(1) brightness(1.44) contrast(0.97)",
  },
  {
    name: "Blue",
    desc: "Dinamis, unik, dan futuristik.",
    tint: "#1f47c8",
    opacity: 0.76,
    dot: "#1c3f9e",
    filter: "grayscale(1) brightness(1.05) contrast(1.04)",
  },
  {
    name: "Silver",
    desc: "Minimalis dengan kesan premium.",
    tint: "#b9bec3",
    opacity: 0.26,
    dot: "#b7bcc1",
    filter: "grayscale(1) brightness(1.02) contrast(1.03)",
  },
];

export function Colors() {
  const [active, setActive] = useState(0);
  const color = COLORS[active];

  return (
    <section className="section colors" id="warna">
      <div className="container">
        <div className="head">
          <span className="idx">01</span>
          <div className="head-copy">
            <Reveal variant="mask">
              <h2>Pilihan Warna</h2>
            </Reveal>
            <Reveal variant="up" delay={0.08}>
              <p className="lead">
                Honda NSX hadir dengan pilihan warna yang memberikan karakter
                berbeda:
              </p>
            </Reveal>
          </div>
        </div>

        <div className="colors-grid">
          <Reveal variant="scale">
            <div
              className="stage-wrap"
              style={{ boxShadow: `0 44px 100px -70px ${color.tint}` }}
            >
              <img
                src={asset("nsx-silver.webp")}
                alt={`Honda NSX ${color.name}`}
                width={678}
                height={452}
                loading="lazy"
                style={{ filter: color.filter }}
              />
              <div
                className="stage-tint"
                style={{ background: color.tint, opacity: color.opacity }}
                aria-hidden="true"
              />
              <div className="stage-shade" aria-hidden="true" />
              <div className="stage-meta" aria-live="polite">
                <span className="sm-name">
                  <small>Honda NSX</small>
                  <b>{color.name}</b>
                </span>
                <span className="sm-idx">0{active + 1} / 05</span>
              </div>
            </div>
          </Reveal>

          <ul className="swatches">
            {COLORS.map((item, i) => (
              <Reveal as="li" key={item.name} variant="up" delay={i * 0.05}>
                <button
                  type="button"
                  className="swatch"
                  aria-pressed={i === active}
                  aria-label={`${item.name}. ${item.desc}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{ "--c": item.dot } as CSSProperties}
                >
                  <span className="dot" aria-hidden="true" />
                  <span className="sw-name">{item.name}</span>
                  <span className="sw-desc">{item.desc}</span>
                  <span className="sw-bar" aria-hidden="true" />
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
