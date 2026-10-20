import React from "react";

export function fa(n: number | string): string {
  return String(n).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
}

export const TOTAL_PAGES = 25;

export function Sheet({
  n,
  id,
  tone = "cream",
  className = "",
  children,
}: {
  n: number;
  id?: string;
  tone?: "cream" | "sand" | "dark";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`sheet sheet--${tone} ${className}`}
      data-page={n}
      aria-label={`صفحه ${fa(n)}`}
    >
      <div className="sheet-inner">
        <div className="body-area">{children}</div>
        <div className="printfoot">
          <span>آرشام فراز · کاتالوگ طراحی و ساخت آسانسور</span>
          <span className="serif">
            {fa(n)} / {fa(TOTAL_PAGES)}
          </span>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  as = "h2",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <header className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <Tag className={as === "h1" ? "h1" : "h2"}>{title}</Tag>
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  );
}

export function Fig({
  src,
  alt,
  caption,
  ratio = "4 / 3",
  eager,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <figure className={`fig ${className}`}>
      <div className="figframe ratio" style={{ "--ar": ratio } as React.CSSProperties}>
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      </div>
      {caption ? <figcaption className="figcaption">{caption}</figcaption> : null}
    </figure>
  );
}

export function Specs({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="spec-list">
      {rows.map(([k, v], i) => (
        <div className="spec-row" key={i}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="bullets">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((t, i) => (
        <span className="tag" key={i}>
          {t}
        </span>
      ))}
    </div>
  );
}
