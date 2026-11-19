import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Variant = "up" | "down" | "left" | "right" | "scale" | "mask" | "fade";

type RevealProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-v={variant}
      className={`rv${inView ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type SplitTextProps = {
  text: string;
  highlights?: string[];
  delay?: number;
  step?: number;
  className?: string;
};

export function SplitText({
  text,
  highlights = [],
  delay = 0,
  step = 0.045,
  className = "",
}: SplitTextProps) {
  const { ref, inView } = useReveal<HTMLSpanElement>(0.1);
  const words = text.split(" ");
  const hl = highlights.map((word) => word.toLowerCase());

  return (
    <span
      ref={ref}
      className={`split${inView ? " is-in" : ""}${className ? ` ${className}` : ""}`}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        const isHl = hl.includes(clean);

        return (
          <span className="sw" key={`${word}-${i}`}>
            <span
              className="si"
              style={{ transitionDelay: `${delay + i * step}s` }}
            >
              {isHl ? <span className="hl">{word}</span> : word}
            </span>
          </span>
        );
      })}
    </span>
  );
}
