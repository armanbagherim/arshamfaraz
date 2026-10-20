import React from "react";
import { Sheet, SectionHead, Fig, Specs, Bullets, fa } from "@/components/ui";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";

export function Doors() {
  const types = [
    ["بازشونده از وسط", "دو پنل", "تردد متوسط و بالا؛ رایج‌ترین گزینه مسکونی و اداری"],
    ["بازشونده از پهلو (دو سرعته)", "دو یا چهار پنل", "عرض بازشوی بیشتر با فضای دیوار کمتر"],
    ["تلسکوپی", "دو یا سه پنل هم‌جهت", "فضای کم در پاگرد؛ کابین‌های کوچک و بازسازی"],
  ];
  return (
    <Sheet n={11} id="details" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="جزئیات کابین · درب"
          title="درب؛ بیشترین تماس روزانه"
          lede="درب کابین و درب طبقه پرکارترین بخش آسانسور هستند. نوع بازشو، جنس پنل و آستانه را باید بر اساس عرض پاگرد، تردد و ظاهر لابی انتخاب کرد."
        />
        <Reveal>
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <h3 className="h3">انواع بازشو</h3>
              <div className="spec-list" style={{ marginTop: 10 }}>
                {types.map(([t, p, d], i) => (
                  <div className="spec-row" key={i} style={{ gridTemplateColumns: "1fr" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                        <strong style={{ fontWeight: 600 }}>{t}</strong>
                        <span className="small">{p}</span>
                      </div>
                      <div className="small" style={{ marginTop: 4 }}>
                        {d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <Specs
                  rows={[
                    ["پنل درب", "استیل برس‌خورده، استیل با روکش PVD، پنل چوبی یا شیشه"],
                    ["آستانه", "آلومینیوم شیاردار برای دوام؛ سنگ هم‌جنس کف لابی"],
                    ["ایمنی", "قفل مکانیکی درب طبقه + حسگر نور یا مانع در درب کابین"],
                    ["ملاحظه", "عرض بازشوی مفید باید با ظرفیت و ورود وسایل (برانکارد، ویلچر، اثاثیه) هم‌خوان باشد"],
                  ]}
                />
              </div>
            </div>
            <div className="stack">
              <Gallery
                images={[
                  {
                    src: "/assets/catalog/bronze-heritage-doors_1920.jpg",
                    alt: "درب برنزی با نقش برجسته",
                    caption: "پنل برنزی با نقش برجسته — مناسب بازسازی",
                  },
                  {
                    src: "/assets/catalog/destination-dispatch-doors_1920.jpg",
                    alt: "درب استیل مدرن با پنل فرمان",
                    caption: "استیل برس‌خورده — انتخاب پرتردد",
                  },
                  {
                    src: "/assets/catalog/art-deco-copper_1920.jpg",
                    alt: "درب مسی با طراحی هندسی",
                    caption: "ترکیب مس و شیشه",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function CeilingLight() {
  const options = [
    ["حاشیه مخفی LED", "نور یکنواخت و بدون خیرگی مستقیم", "تمیزکاری ساده، تعویض نوار"],
    ["اسپات سقفی", "تمرکز نور روی پنل‌ها", "سایه و بازتاب بیشتر"],
    ["سقف آینه‌ای", "حس عمق در کابین کوچک", "نیاز به نظافت منظم"],
    ["سقف کشسان", "سطح یکدست و سبک", "مقاومت محدود در برابر ضربه"],
  ];
  return (
    <Sheet n={12} id="ceiling" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="جزئیات کابین · سقف و نور"
          title="نور، جنس فضا را تغییر می‌دهد"
          lede="نور گرم، چوب و برنز را زنده می‌کند؛ نور سفید، استیل و سنگ روشن را تمیزتر نشان می‌دهد. انتخاب دمای رنگ و شدت نور باید با متریال انتخاب‌شده انجام شود، نه بعد از آن."
        />
        <Reveal>
          <div className="split split--wide-second" style={{ alignItems: "start" }}>
            <div className="stack">
              <div className="spec-list">
                {options.map(([t, effect, note], i) => (
                  <div className="spec-row" key={i} style={{ gridTemplateColumns: "1fr" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                      <strong>{t}</strong>
                      <span className="small">{effect}</span>
                    </div>
                    <div className="small" style={{ marginTop: 4 }}>{note}</div>
                  </div>
                ))}
              </div>
              <div className="card card--plain">
                <h3 className="h3">سه نکته عملی</h3>
                <div style={{ marginTop: 10 }}>
                  <Bullets
                    items={[
                      "برای کابین چوبی، نور حدود ۳۰۰۰ تا ۳۵۰۰ کلوین گرم‌تر و طبیعی‌تر است.",
                      "برای کابین استیل و سنگ روشن، نور ۴۰۰۰ کلوین رنگ‌ها را دقیق‌تر نشان می‌دهد.",
                      "منبع نور پنهان بهتر است دسترسی سرویس داشته باشد؛ تعویض آن نباید به بازکردن کل سقف نیاز داشته باشد.",
                    ]}
                  />
                </div>
              </div>
            </div>
            <figure className="fig">
              <div className="figframe" style={{ aspectRatio: "4 / 5" }}>
                <img
                  src="/assets/catalog/elevator-interior-gold_1920.jpg"
                  alt="کابین با سقف روشن و پنل‌های طلایی"
                  loading="lazy"
                />
              </div>
              <figcaption className="figcaption">نور یکنواخت حاشیه‌ای با پنل‌های روشن.</figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function FloorFittings() {
  const floors = [
    ["سنگ طبیعی", "دوام بالا، ظاهر رسمی", "وزن زیاد، نفوذپذیری در بعضی سنگ‌ها"],
    ["پارکت / ونیر", "گرم و هم‌خوان با لابی", "حساس به رطوبت و ضربه"],
    ["PVC ضدلغزش", "نگهداری آسان، مناسب درمانی", "تنوع محدود طرح"],
    ["موکت", "کاهش صدا، حس هتل", "نظافت تخصصی، عمر کمتر در تردد بالا"],
  ];
  return (
    <Sheet n={13} id="floor" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="جزئیات کابین · کف و یراق"
          title="سطوحی که هر روز لمس می‌شوند"
          lede="کف، دستگیره و پنل فرمان مستقیماً در تجربه روزانه مسافر اثر دارند. انتخاب درست آن‌ها بیشتر از یک تزئین، درباره نگهداری و ایمنی است."
        />
        <Reveal>
          <div className="g2" style={{ alignItems: "start" }}>
            <div>
              <h3 className="h3">کف کابین</h3>
              <div className="spec-list" style={{ marginTop: 10 }}>
                {floors.map(([t, plus, minus], i) => (
                  <div className="spec-row" key={i} style={{ gridTemplateColumns: "1fr" }}>
                    <div>
                      <strong>{t}</strong>
                      <div className="small" style={{ marginTop: 3 }}>
                        مزیت: {plus} — ملاحظه: {minus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="stack">
              <figure className="fig">
                <div className="figframe" style={{ aspectRatio: "4 / 3" }}>
                  <img
                    src="/assets/catalog/otis-hydrofit-panel_1920.jpg"
                    alt="پنل فرمان کابین با دکمه‌های فلزی"
                    loading="lazy"
                  />
                </div>
                <figcaption className="figcaption">پنل فرمان؛ محل تماس مکرر دست مسافر.</figcaption>
              </figure>
              <div>
                <h3 className="h3">دستگیره و پنل فرمان</h3>
                <div style={{ marginTop: 8 }}>
                  <Bullets
                    items={[
                      "ارتفاع دستگیره در طرح‌های دسترسی‌پذیر حدود ۹۰۰ میلی‌متر از کف است (EN 81-70).",
                      "دکمه‌ها باید لمس‌پذیر، خوانا و در ارتفاع قابل دسترس ویلچر باشند.",
                      "آینه در دیواره کنار درب، دید عقب را برای ویلچر و کالسکه بهتر می‌کند.",
                      "یراق‌های فلزی با روکش مقاوم، در تماس با مواد شوینده عمر بیشتری دارند.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}
