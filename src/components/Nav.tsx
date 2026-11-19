import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const LINKS = [
  { href: "#warna", label: "Warna", idx: "01" },
  { href: "#mengenal", label: "5W+1H", idx: "02" },
  { href: "#keunggulan", label: "Keunggulan", idx: "03" },
  { href: "#testimoni", label: "Testimoni", idx: "04" },
  { href: "#garansi", label: "Garansi", idx: "05" },
  { href: "#nota-bene", label: "Nota Bene", idx: "06" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
    document.body.classList.toggle("is-locked", open);
    if (open) setHidden(false);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(y > 16);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${
          max > 0 ? Math.min(y / max, 1) : 0
        })`;
      }

      if (!openRef.current) {
        if (y > 280 && y > lastY.current + 2) setHidden(true);
        else if (y < lastY.current - 2 || y <= 280) setHidden(false);
      }

      lastY.current = y;
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

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />

      <header
        className={`nav${scrolled ? " is-scrolled" : ""}${
          hidden ? " is-hidden" : ""
        }`}
      >
        <div className="container nav-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Honda NSX"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span>
              HONDA NSX
              <small>The Art of Performance</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Navigasi utama">
            {LINKS.slice(0, 5).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <a className="nav-cta" href="#miliki">
              Miliki
            </a>
            <button
              type="button"
              className={`burger${open ? " is-open" : ""}`}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="menu-list">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                style={
                  {
                    transitionDelay: open ? `${0.16 + i * 0.055}s` : "0s",
                  } as CSSProperties
                }
              >
                {link.label}
                <span className="m-idx">{link.idx}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <span>
            <span className="dot" />
            The Art of Performance
          </span>
          <span>1990</span>
        </div>
      </div>
    </>
  );
}
