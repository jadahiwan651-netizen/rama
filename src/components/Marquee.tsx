const PHRASES = [
  "Honda NSX",
  "The Art of Performance",
  "Born to Perform",
  "Built to Inspire",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((phrase, i) => (
        <span key={`${phrase}-${i}`}>
          {phrase}
          <i className="sep" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-label="Honda NSX — The Art of Performance">
      <div className="marquee-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
