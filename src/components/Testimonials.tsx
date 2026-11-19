import { Reveal } from "./Reveal";

const QUOTES = [
  "Honda NSX bukan sekadar mobil sport, tetapi perpaduan antara seni desain, teknologi, dan performa yang luar biasa.",
  "Desainnya sangat menarik dan pengalaman berkendaranya memberikan sensasi tersendiri.",
];

export function Testimonials() {
  return (
    <section className="section" id="testimoni">
      <div className="container">
        <div className="head">
          <span className="idx">04</span>
          <div className="head-copy">
            <Reveal variant="mask">
              <h2>Testimoni Penggemar</h2>
            </Reveal>
          </div>
        </div>

        <div className="quotes">
          {QUOTES.map((quote, i) => (
            <Reveal
              as="div"
              className="qcell"
              key={quote}
              variant="up"
              delay={i * 0.1}
            >
              <article className="quote">
                <span className="q-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>
                  <p>{quote}</p>
                </blockquote>
                <div className="q-foot">
                  <span className="dot" aria-hidden="true" />
                  <span>
                    {i === 0 ? "01" : "02"} &middot; Penggemar
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
