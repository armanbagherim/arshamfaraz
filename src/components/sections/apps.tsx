import React from "react";
import { Sheet, SectionHead, Fig, Bullets, Tags } from "@/components/ui";
import Reveal from "@/components/Reveal";

export function Residential() {
  return (
    <Sheet n={21} id="applications" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="کاربردها · مسکونی"
          title="آسانسور ساختمان مسکونی"
          lede="در ساختمان مسکونی، آرامش حرکت و سادگی نگهداری مهم‌تر از جزئیات نمایشی است. انتخاب ظرفیت و ابعاد درب باید با حمل اثاثیه و نیاز ساکنان آینده هم‌خوان باشد."
        />
        <Reveal>
          <div className="split split--wide-first" style={{ alignItems: "start" }}>
            <div className="stack">
              <Fig
                src="/assets/catalog/heritage-panel_1920.jpg"
                alt="کابین با پنل‌های چوبی"
                ratio="16 / 10"
                caption="پنل چوبی و دستگیره فلزی؛ ترکیب رایج مسکونی."
              />
              <div className="g2">
                <Fig
                  src="/assets/catalog/vintage-wood-cabin_1920.jpg"
                  alt="کابین چوبی با آینه"
                  ratio="4 / 3"
                />
                <Fig
                  src="/assets/catalog/art-deco-elevator-hotel_1920.jpg"
                  alt="درب آسانسور با قاب چوبی"
                  ratio="4 / 3"
                />
              </div>
            </div>
            <div className="stack">
              <div>
                <h3 className="h3">چه چیزی را باید مشخص کنید</h3>
                <div style={{ marginTop: 8 }}>
                  <Bullets
                    items={[
                      "تعداد طبقات و ارتفاع کل مسیر حرکت",
                      "حداقل ظرفیت مورد نیاز (مثلاً ۶ یا ۸ نفر)",
                      "عرض درب برای حمل مبلمان و ویلچر",
                      "محل موتورخانه یا امکان اجرای MRL",
                      "سطح انتظار از صدا و کیفیت حرکت",
                    ]}
                  />
                </div>
              </div>
              <div>
                <h3 className="h3">پیشنهاد برای مسکونی</h3>
                <div style={{ marginTop: 8 }}>
                  <Tags items={["CB-01 بلوط روشن", "CB-02 گردویی", "CB-05 روشن و کاربردی"]} />
                </div>
                <p className="small" style={{ marginTop: 8 }}>
                  برای بیشتر ساختمان‌های مسکونی، استیل برس‌خورده یا ونیر با کف سنگ/پارکت
                  ترکیب متعادلی از ظاهر و نگهداری است.
                </p>
              </div>
              <div className="card card--plain">
                <h3 className="h3">نکته اجرایی</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  اگر چاه و چاله از ابتدا با ساختمان اجرا شوند، هزینه و محدودیت‌های بعدی
                  کمتر است. ابعاد چاه، عمق چاله و ارتفاع سرگیر باید پیش از اجرای نازک‌کاری نهایی تأیید شوند.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function Commercial() {
  return (
    <Sheet n={22} id="commercial" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="کاربردها · اداری، هتل، درمانی"
          title="تردد بالا، انتخاب متفاوت"
          lede="در ساختمان‌های عمومی، تعداد سفر و دوام سطوح، طراحی را تعیین می‌کند. برای گروه آسانسور، فرمان مقصد و مصالح مقاوم، بازگشت سرمایه بهتری دارد."
        />
        <Reveal>
          <div className="g3" style={{ alignItems: "stretch" }}>
            <div className="card card--plain">
              <div className="eyebrow" style={{ fontSize: "0.66rem" }}>اداری</div>
              <h3 className="h3" style={{ marginTop: 8 }}>ظرفیت و سرعت</h3>
              <p className="small" style={{ marginTop: 6 }}>
                تعداد کارکنان و ساعت اوج تردد، ظرفیت و تعداد آسانسور را مشخص می‌کند. برای
                گروه‌های دو دستگاه و بیشتر، فرمان مقصد صف انتظار را کمتر می‌کند.
              </p>
            </div>
            <div className="card card--plain">
              <div className="eyebrow" style={{ fontSize: "0.66rem" }}>هتل</div>
              <h3 className="h3" style={{ marginTop: 8 }}>ظاهر و دوام</h3>
              <p className="small" style={{ marginTop: 6 }}>
                چوب، برنز و سنگ با اجرای دقیق درزها؛ اما انتخاب سطح باید با نظافت شبانه و
                تردد مهمان هم‌خوان باشد.
              </p>
            </div>
            <div className="card card--plain">
              <div className="eyebrow" style={{ fontSize: "0.66rem" }}>درمانی</div>
              <h3 className="h3" style={{ marginTop: 8 }}>دسترسی و نظافت</h3>
              <p className="small" style={{ marginTop: 6 }}>
                ابعاد کابین برای برانکارد و ویلچر، سطوح قابل شست‌وشو، نور یکنواخت و اعلام
                صوتی طبقه از الزامات اصلی‌اند.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="g2" style={{ marginTop: "clamp(20px,3vw,32px)" }}>
            <Fig
              src="/assets/catalog/atnt-long-distance_1920.jpg"
              alt="لابی اداری با درب‌های برنزی"
              ratio="16 / 10"
              caption="درب برنزی و سنگ در لابی اداری؛ نمونه ترکیب پایدار."
            />
            <Fig
              src="/assets/catalog/art-deco-70-pine-street_1920.jpg"
              alt="بانک آسانسور در ساختمان اداری"
              ratio="16 / 10"
              caption="چیدمان گروه آسانسور در لابی."
            />
          </div>
        </Reveal>
          <div className="split" style={{ marginTop: "clamp(18px,3vw,28px)" }}>
          <p className="small">
            برای فضاهای درمانی و مراکز خرید، الزامات دسترسی‌پذیری و مقاومت سطوح را از
            ابتدا در مشخصات درج کنید؛ اصلاح بعدی معمولاً به تعویض پنل‌ها منتهی می‌شود.
          </p>
          <p className="small">
            در ساختمان‌های با چند آسانسور، چیدمان و کنترل گروه باید کنار هم طراحی شوند؛
            انتخاب درب‌های متفاوت بدون هماهنگی، صف و سردرگمی می‌سازد.
          </p>
        </div>
      </div>
    </Sheet>
  );
}
