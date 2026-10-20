import React from "react";
import { Sheet, fa, Bullets, Tags } from "@/components/ui";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { cabins } from "@/data/catalog";

export function CabinSheets() {
  return (
    <>
      {cabins.map((c, i) => (
        <Sheet key={c.code} n={5 + i} id={i === 0 ? "cabins" : `cabin-${i + 1}`} tone={i % 2 ? "sand" : "cream"}>
          <div className="body-area">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline" }}>
              <div className="eyebrow">
                کابین {fa(i + 1)} از {fa(6)} · {c.code}
              </div>
              <div className="small">طرح پیشنهادی · قابل سفارشی‌سازی</div>
            </div>
            <h2 className="h2" style={{ marginBottom: 8 }}>
              {c.name}
            </h2>
            <p className="lede" style={{ marginTop: 0, maxWidth: "70ch" }}>
              {c.summary}
            </p>

            <div className="split split--wide-first" style={{ marginTop: "clamp(20px, 3vw, 36px)" }}>
              <Reveal>
                <Gallery images={c.images} eager={i === 0} />
              </Reveal>
              <Reveal delay={0.06}>
                <div className="stack" style={{ gap: 16 }}>
                  <div>
                    <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                      متریال پیشنهادی
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Bullets items={c.materials} />
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                      مناسب برای
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Tags items={c.bestFor} />
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                      ملاحظات نگهداری
                    </div>
                    <p className="p" style={{ marginTop: 8, fontSize: "0.9rem" }}>
                      {c.care}
                    </p>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                      گزینه‌های قابل تغییر
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <Bullets items={c.options} />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Sheet>
      ))}
    </>
  );
}
