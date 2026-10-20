import React from "react";
import { Sheet, SectionHead, Fig, Bullets, fa } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { materials, palettes } from "@/data/catalog";

const swatchStyle: Record<string, React.CSSProperties> = {
  "steel-brushed": {
    background:
      "linear-gradient(100deg,#c9cdd2 0%,#e9ecef 14%,#b9bec5 32%,#dde1e6 54%,#b2b8c0 74%,#e5e8ec 92%,#c6cbd1 100%)",
  },
  "steel-mirror": {
    background:
      "linear-gradient(150deg,#eef1f5 0%,#b8c0ca 30%,#dfe4ea 52%,#98a1ad 78%,#e6e9ee 100%)",
  },
  bronze: {
    background:
      "linear-gradient(120deg,#8a6233 0%,#c69a5f 26%,#7a5226 52%,#b68a52 74%,#6f4a22 100%)",
  },
  marble: {
    backgroundImage: "url(/assets/materials/marble-white_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  wood: {
    backgroundImage:
      "repeating-linear-gradient(92deg, rgba(70,50,30,.35) 0 4px, rgba(105,78,48,.25) 4px 8px), linear-gradient(160deg,#a07a49,#5f4529)",
  },
  glass: {
    background:
      "linear-gradient(135deg,rgba(196,214,224,.95),rgba(120,148,166,.55) 45%,rgba(214,228,236,.85) 70%,rgba(96,122,140,.5))",
  },
};

export function MaterialsPage() {
  return (
    <Sheet n={14} id="materials" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="متریال"
          title="انتخاب متریال با معیار نگهداری"
          lede="هر متریال یک مزیت و یک هزینه نگهداری دارد. جدول زیر برای مقایسه سریع است؛ انتخاب نهایی به تردد ساختمان، عادت نظافت و بودجه پروژه بستگی دارد."
        />
        <Reveal>
          <div style={{ borderTop: "1px solid var(--line-2)" }}>
            {materials.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "46px minmax(0,1fr) minmax(0,1.5fr) minmax(0,1.2fr)",
                  gap: "clamp(10px,2vw,20px)",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div
                  className="chip"
                  aria-hidden="true"
                  style={{ height: 44, ...swatchStyle[m.swatch] }}
                />
                <div>
                  <strong style={{ fontWeight: 600, fontSize: "0.95rem" }}>{m.name}</strong>
                  <div className="small" style={{ marginTop: 2 }}>
                    {m.use}
                  </div>
                </div>
                <div className="small">{m.care}</div>
                <div className="small">{m.note}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="split" style={{ marginTop: "clamp(22px, 3vw, 34px)" }}>
          <Reveal>
            <div className="card card--plain">
              <h3 className="h3">نکته درباره روکش‌ها</h3>
              <p className="small" style={{ marginTop: 8 }}>
                روکش PVD روی استیل، رنگ برنز یا طلایی را با مقاومت بیشتر در برابر خط‌خوردگی
                حفظ می‌کند و از تغییر رنگ تدریجی برنج طبیعی جلوگیری می‌کند. در مقابل، برنج
                بدون پوشش با گذشت زمان پتینه می‌شود که برای برخی پروژه‌های تاریخی مطلوب است.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card card--plain">
              <h3 className="h3">سه سؤال قبل از انتخاب</h3>
              <div style={{ marginTop: 8 }}>
                <Bullets
                  items={[
                    "کابین روزانه چند نفر را جابه‌جا می‌کند؟",
                    "نظافت ساختمان با چه مواد و چه دوره‌ای انجام می‌شود؟",
                    "آیا سطح باید بدون لکه بماند یا پتینه طبیعی پذیرفتنی است؟",
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}

export function PalettesPage() {
  return (
    <Sheet n={15} id="palettes" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="پالت‌ها"
          title="چهار ترکیب آماده برای شروع"
          lede="این پالت‌ها نقطه شروع گفتگو هستند، نه نسخه نهایی. هر ترکیب را می‌توان با نور، کف یا یراق دیگری تنظیم کرد."
        />
        <div className="palette-grid g2" style={{ gap: "clamp(14px,2vw,24px)" }}>
          {palettes.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card card--plain" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <h3 className="h3">{p.name}</h3>
                  <span className="small serif">{fa(i + 1)}</span>
                </div>
                <div className="chips" style={{ marginTop: 12 }}>
                  {p.chips.map((c, j) => (
                    <div
                      key={j}
                      className="chip"
                      style={{ background: c, height: 44 }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="small" style={{ marginTop: 10 }}>
                  {p.items.join(" · ")}
                </div>
                <p className="small" style={{ marginTop: 8 }}>
                  {p.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="g2" style={{ marginTop: "clamp(18px,3vw,30px)" }}>
            <Fig
              src="/assets/catalog/elevated-lobby_1920.jpg"
              alt="لابی با درب‌های استیل و سنگ روشن"
              ratio="16 / 10"
              caption="استیل و سنگ روشن؛ ترکیب پایه پالت اول."
            />
            <Fig
              src="/assets/catalog/atnt-long-distance_1920.jpg"
              alt="لابی با درب‌های برنزی و نور گرم"
              ratio="16 / 10"
              caption="برنز و نور گرم؛ ترکیب پایه پالت سوم."
            />
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}
