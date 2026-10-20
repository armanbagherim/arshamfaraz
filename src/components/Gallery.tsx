"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Img } from "@/data/catalog";

type Props = {
  images: Img[];
  /** hero = large first image + two thumbs, grid = equal tiles */
  layout?: "hero" | "grid";
  eager?: boolean;
};

export default function Gallery({ images, layout = "hero", eager = false }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  const tiles = images.map((img, i) => (
    <button
      type="button"
      key={img.src + i}
      className="figframe zoomable ratio"
      style={{ "--ar": layout === "grid" ? "1 / 1" : i === 0 ? "4 / 3" : "4 / 3" } as React.CSSProperties}
      onClick={() => setOpen(i)}
      aria-label={`نمایش بزرگ‌تر: ${img.caption ?? img.alt}`}
    >
      <img src={img.src} alt={img.alt} loading={eager && i === 0 ? "eager" : "lazy"} />
    </button>
  ));

  return (
    <>
      {layout === "hero" ? (
        <div className="stack" style={{ gap: 12 }}>
          <div className="gallery-hero">
            <button
              type="button"
              className="figframe zoomable"
              style={{ aspectRatio: "16 / 10", width: "100%" }}
              onClick={() => setOpen(0)}
              aria-label={`نمایش بزرگ‌تر: ${images[0].caption ?? images[0].alt}`}
            >
              <img src={images[0].src} alt={images[0].alt} loading={eager ? "eager" : "lazy"} />
            </button>
            {images[0].caption ? <p className="figcaption">{images[0].caption}</p> : null}
          </div>
          <div className="gallery-thumbs">
            {images.slice(1, 3).map((img, i) => (
              <button
                type="button"
                key={img.src + i}
                className="figframe zoomable"
                style={{ aspectRatio: "4 / 3" }}
                onClick={() => setOpen(i + 1)}
                aria-label={`نمایش بزرگ‌تر: ${img.caption ?? img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="gallery-grid">{tiles}</div>
      )}

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="نمایش تصویر"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button className="lb-close" onClick={close} aria-label="بستن">
              ×
            </button>
            <motion.figure
              key={open}
              initial={reduce ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={images[open].src} alt={images[open].alt} />
              <figcaption>
                <span>{images[open].caption ?? images[open].alt}</span>
                <span className="lb-navs">
                  <button className="lb-nav" onClick={prev} aria-label="تصویر قبلی">
                    ›
                  </button>
                  <button className="lb-nav" onClick={next} aria-label="تصویر بعدی">
                    ‹
                  </button>
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
