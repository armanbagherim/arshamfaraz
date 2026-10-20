import React from "react";
import { Sheet, SectionHead, Specs, Bullets, Fig, fa } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { TractionDiagram, HydraulicDiagram } from "@/components/diagrams";
import { systemRows, selectionCriteria, capacities, safetyItems } from "@/data/catalog";

export function SystemChoice() {
  return (
    <Sheet n={16} id="systems" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="سیستم‌ها"
          title="کششی، هیدرولیک یا MRL؟"
          lede="سیستم مناسب، ترکیبی از ارتفاع ساختمان، حجم تردد، فضای موتورخانه و شرایط چاه است. جدول زیر مقایسه کلی می‌دهد؛ انتخاب نهایی پس از بازدید و اندازه‌گیری انجام می‌شود."
        />
        <Reveal>
          <div style={{ overflowX: "auto" }}>
            <table className="datatable" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--gold)" }}>
                  <th style={th()}>ویژگی</th>
                  <th style={th()}>کششی</th>
                  <th style={th()}>هیدرولیک</th>
                  <th style={th()}>MRL (کششی بدون موتورخانه)</th>
                </tr>
              </thead>
              <tbody>
                {systemRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "9px 10px",
                          color: j === 0 ? "var(--gold)" : "var(--ink-2)",
                          fontWeight: j === 0 ? 500 : 400,
                          whiteSpace: j === 0 ? "nowrap" : undefined,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="split" style={{ marginTop: "clamp(22px,3vw,34px)" }}>
          <Reveal>
            <div>
              <h3 className="h3">معیارهای انتخاب</h3>
              <div className="stack" style={{ marginTop: 12, gap: 10 }}>
                {selectionCriteria.map((c, i) => (
                  <div key={i}>
                    <strong style={{ fontSize: "0.92rem" }}>{c.t}</strong>
                    <p className="small" style={{ marginTop: 3 }}>
                      {c.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="stack">
              <div className="card card--plain">
                <h3 className="h3">ظرفیت و تعداد نفر</h3>
                <div style={{ marginTop: 10 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--line-2)" }}>
                        <th style={th()}>ظرفیت (کیلوگرم)</th>
                        <th style={th()}>حدود نفر</th>
                        <th style={th()}>کاربرد معمول</th>
                      </tr>
                    </thead>
                    <tbody>
                      {capacities.map((r, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                          <td style={td()}>{r[0]}</td>
                          <td style={td()}>{r[1]}</td>
                          <td style={td()}>{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="small" style={{ marginTop: 10 }}>
                  محاسبه نفر بر پایه ۷۵ کیلوگرم برای هر نفر است. مساحت مجاز کابین برای هر
                  ظرفیت مطابق EN 81-20 کنترل می‌شود و ممکن است ابعاد چاه را محدود کند.
                </p>
              </div>
              <div className="card card--plain">
                <p className="small">
                  اعداد جدول‌ها «راهنمای عمومی صنعت» هستند؛ مشخصات قطعی پروژه شما در
                  پیشنهاد فنی و بر اساس اندازه‌گیری چاه نوشته می‌شود.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}

export function Traction() {
  return (
    <Sheet n={17} id="traction" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="سیستم‌ها · کششی"
          title="کششی؛ گزینه اصلی برای ارتفاع بیشتر"
          lede="کابین با کابل و وزنه تعادل حرکت می‌کند. این سیستم برای ساختمان‌های متوسط تا بلند و تردد بالا مناسب است و نسخه بدون موتورخانه (MRL) آن فضای مستقل موتورخانه را حذف می‌کند."
        />
        <Reveal>
          <div className="split split--wide-first" style={{ alignItems: "start" }}>
            <div>
              <div style={{ background: "rgba(255,255,255,.45)", padding: "clamp(10px,2vw,20px)", border: "1px solid var(--line)" }}>
                <TractionDiagram />
              </div>
              <p className="figcaption">نمودار ساده از اجزای اصلی سیستم کششی.</p>
            </div>
            <div className="stack">
              <Fig
                src="/assets/technical/elevator-motor_1920.jpg"
                alt="موتور آسانسور در موتورخانه"
                ratio="4 / 3"
                caption="موتور و قرقره رانش در موتورخانه."
              />
              <div>
                <h3 className="h3">اجزای اصلی</h3>
                <div style={{ marginTop: 8 }}>
                  <Bullets
                    items={[
                      "موتور و قرقره رانش؛ گیربکس‌دار یا گیرلس",
                      "کابل فولادی و وزنه تعادل",
                      "کابین، قاب و ریل‌های راهنما",
                      "درایو VVVF برای کنترل نرم سرعت",
                    ]}
                  />
                </div>
              </div>
              <div className="card card--plain">
                <h3 className="h3">MRL چیست؟</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  در سیستم بدون موتورخانه، موتور در بالای چاه نصب می‌شود. فضای موتورخانه حذف
                  می‌شود، اما دسترسی برای سرویس و تهویه چاه باید در طراحی لحاظ شود.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function Hydraulic() {
  return (
    <Sheet n={18} id="hydraulic" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="سیستم‌ها · هیدرولیک"
          title="هیدرولیک؛ ساده و اقتصادی برای کم‌ارتفاع"
          lede="نیروی پمپ، روغن را به جک می‌فرستد و کابین بالا می‌رود. این سیستم برای ساختمان‌های کم‌ارتفاع با تردد متوسط مناسب است و به فضای موتورخانه بزرگ نیاز ندارد."
        />
        <Reveal>
          <div className="split split--wide-first" style={{ alignItems: "start" }}>
            <div>
              <div style={{ background: "rgba(255,255,255,.45)", padding: "clamp(10px,2vw,20px)", border: "1px solid var(--line)" }}>
                <HydraulicDiagram />
              </div>
              <p className="figcaption">نمودار ساده از اجزای اصلی سیستم هیدرولیک.</p>
            </div>
            <div className="stack">
              <Fig
                src="/assets/technical/hydraulic-plant_1920.jpg"
                alt="سازه بالابر هیدرولیک در فضای شهری"
                ratio="4 / 3"
                caption="نمونه اجرای هیدرولیک در فضای شهری."
              />
              <div>
                <h3 className="h3">محدودیت‌ها و ملاحظات</h3>
                <div style={{ marginTop: 8 }}>
                  <Bullets
                    items={[
                      "ارتفاع و تعداد توقف محدود؛ مناسب کم‌ارتفاع",
                      "سرعت متعارف پایین‌تر از کششی (حدود ۱ متر بر ثانیه)",
                      "تعداد استارت در ساعت محدود است؛ برای تردد بسیار بالا مناسب نیست",
                      "بازبینی دوره‌ای روغن، شیرها و آب‌بندی جک لازم است",
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

export function ControlSafety() {
  return (
    <Sheet n={19} id="control" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="سیستم‌ها · کنترل و ایمنی"
          title="از فرمان تا توقف ایمن"
          lede="درایو، کنترلر و زنجیره ایمنی، رفتار آسانسور را تعیین می‌کنند. ایمنی در چند لایه مستقل طراحی می‌شود؛ هیچ جزئیات تزئینی جایگزین آن نیست."
        />
        <Reveal>
          <div className="split" style={{ alignItems: "start" }}>
            <div className="stack">
              <Fig
                src="/assets/technical/elevator-machine-room_1920.jpg"
                alt="تابلو فرمان و تجهیزات موتورخانه"
                ratio="4 / 3"
                caption="تابلو فرمان در موتورخانه."
              />
              <div>
                <h3 className="h3">کنترل حرکت</h3>
                <div style={{ marginTop: 8 }}>
                  <Bullets
                    items={[
                      "درایو VVVF: کنترل ولتاژ و فرکانس برای استارت و توقف نرم",
                      "کنترلر: مدیریت فراخوان‌ها، اولویت‌ها و وضعیت‌های خاص",
                      "فرمان مقصد (اختیاری): مناسب ساختمان‌های پرتردد و گروه آسانسور",
                      "حافظه خطا برای عیب‌یابی سریع‌تر در سرویس",
                    ]}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="h3">لایه‌های ایمنی</h3>
              <div className="spec-list" style={{ marginTop: 10 }}>
                {safetyItems.map(([t, d], i) => (
                  <div className="spec-row" key={i} style={{ gridTemplateColumns: "1fr" }}>
                    <div>
                      <strong style={{ fontSize: "0.9rem" }}>{t}</strong>
                      <div className="small" style={{ marginTop: 3 }}>
                        {d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small" style={{ marginTop: 10 }}>
                الزامات ایمنی و روش‌های آزمون در EN 81-20 و EN 81-50 تعریف شده‌اند؛
                ارتباط اضطراری نیز مطابق EN 81-28 بررسی می‌شود.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function Accessibility() {
  return (
    <Sheet n={20} id="accessibility" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="دسترسی‌پذیری"
          title="الزاماتی که باید از ابتدا در طرح باشند"
          lede="دسترسی‌پذیر بودن کابین، هزینه اضافه نیست؛ اگر از ابتدا در ابعاد و یراق لحاظ نشود، اصلاح آن گران است. اعداد زیر بر پایه EN 81-70 آمده‌اند."
        />
        <Reveal>
          <div className="split split--wide-first" style={{ alignItems: "start" }}>
            <div>
              <Specs
                rows={[
                  ["ارتفاع دستگیره", "حدود ۹۰۰ میلی‌متر از کف (با تلورانس ±۲۵ میلی‌متر)"],
                  ["فاصله دستگیره از دیوار", "حداقل ۳۵ میلی‌متر"],
                  ["ارتفاع ادوات فرمان", "حدود ۹۰۰ تا ۱۱۰۰ میلی‌متر از کف"],
                  ["عرض بازشوی درب", "حداقل ۹۰۰ میلی‌متر برای دسترسی ویلچر (نوع ۲)"],
                  ["ابعاد کابین نوع ۲", "حداقل ۱۱۰۰ × ۱۴۰۰ میلی‌متر"],
                  ["ارتفاع آزاد درب و کابین", "حداقل ۲۱۰۰ میلی‌متر"],
                ]}
              />
              <div style={{ marginTop: 18 }}>
                <Bullets
                  items={[
                    "دکمه‌ها با ارقام برجسته و خوانا؛ در صورت نیاز بریل.",
                    "اعلام صوتی طبقه و جهت حرکت.",
                    "آینه در دیواره مقابل درب برای دید عقب.",
                    "کف ضدلغزش و بدون اختلاف سطح در ورود.",
                    "کنتراست کافی بین دکمه‌ها و پنل.",
                  ]}
                />
              </div>
            </div>
            <div className="stack">
              <Fig
                src="/assets/catalog/interior-modern-branch_1920.jpg"
                alt="کابین روشن با پنل‌های قابل شست‌وشو"
                ratio="4 / 5"
                caption="کابین روشن با سطوح ساده؛ مناسب فضاهای درمانی و عمومی."
              />
              <p className="small">
                ابعاد بالا حداقل‌های استاندارد هستند. ابعاد واقعی کابین تابع ظرفیت، فضای چاه
                و نوع درب است.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

function th(): React.CSSProperties {
  return { textAlign: "right", padding: "10px 10px", fontWeight: 600, fontSize: "0.8rem", color: "var(--ink)" };
}
function td(): React.CSSProperties {
  return { padding: "8px 10px", color: "var(--ink-2)" };
}
