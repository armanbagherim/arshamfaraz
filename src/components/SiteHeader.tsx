"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav } from "@/data/catalog";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header noprint" data-scrolled={scrolled}>
        <div className="bar">
          <a href="#cover" className="wordmark" aria-label="آرشام فراز — آغاز کاتالوگ">
            <b>آرشام فراز</b>
            <span>Arsham Faraz Elevators</span>
          </a>
          <nav className="site-nav" aria-label="فهرست بخش‌ها">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#contact">
            درخواست بازدید
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav noprint"
            aria-label="فهرست موبایل"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a className="header-cta" href="#contact" onClick={() => setOpen(false)}>
              درخواست بازدید
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
