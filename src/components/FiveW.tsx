import { Reveal } from "./Reveal";

const ITEMS = [
  {
    key: "What (Apa)",
    text: "Honda NSX adalah mobil sport berperforma tinggi yang menggabungkan teknologi canggih dengan desain eksklusif.",
  },
  {
    key: "Who (Siapa)",
    text: "Mobil ini cocok untuk pecinta otomotif dan penggemar mobil sport yang mengutamakan performa serta kenyamanan.",
  },
  {
    key: "When (Kapan)",
    text: "Honda NSX pertama kali diperkenalkan pada tahun 1990 dan terus berkembang melalui generasi berikutnya.",
  },
  {
    key: "Where (Di mana)",
    text: "Honda NSX dikembangkan oleh Honda dengan proses produksi yang mengutamakan kualitas dan teknologi otomotif.",
  },
  {
    key: "Why (Mengapa)",
    text: "Karena Honda NSX menawarkan kombinasi performa, desain aerodinamis, teknologi modern, dan pengalaman berkendara yang istimewa.",
  },
  {
    key: "How (Bagaimana)",
    text: "Honda NSX menggabungkan mesin bertenaga dan teknologi canggih untuk menghasilkan performa berkendara yang responsif.",
  },
];

export function FiveW() {
  return (
    <section className="section fivew" id="mengenal">
      <div className="container">
        <div className="head">
          <span className="idx">02</span>
          <div className="head-copy">
            <Reveal variant="mask">
              <h2>Mengenal Honda NSX (5W+1H)</h2>
            </Reveal>
          </div>
        </div>

        <div className="wgrid">
          {ITEMS.map((item, i) => (
            <Reveal
              as="div"
              className="wcell"
              key={item.key}
              variant="up"
              delay={i * 0.06}
            >
              <article className="wcard">
                <span className="w-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{item.key}</h3>
                <p>{item.text}</p>
                <span className="w-line" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
