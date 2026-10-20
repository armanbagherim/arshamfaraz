import React from "react";
import { Sheet, SectionHead, Bullets, fa } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { company, processSteps, checklist } from "@/data/catalog";

export function Process() {
  return (
    <Sheet n={23} id="process" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="فرایند همکاری"
          title="از بازدید تا تحویل"
          lede="مسیر پروژه در پنج گام انجام می‌شود. هر گام یک خروجی مشخص دارد تا تصمیم‌ها پیش از ساخت نهایی شوند و تغییرات بعدی به حداقل برسند."
        />
        <Reveal>
          <div className="steps">
            {processSteps.map((s, i) => (
              <div className="step" key={i}>
                <div className="n">{fa(i + 1)}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <div className="out">خروجی: {s.out}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="split" style={{ marginTop: "clamp(24px,4vw,44px)" }}>
            <div>
              <h3 className="h3">زمان‌بندی</h3>
              <p className="p" style={{ marginTop: 8 }}>
                مدت اجرا به ابعاد پروژه، وضعیت چاه و زمان تأمین متریال وابسته است. بازه
                زمانی واقع‌بینانه پس از گام دوم و با مشخصات تأییدشده اعلام می‌شود؛ تعهد
                زمانی بدون نقشه و بازدید، قابل اتکا نیست.
              </p>
            </div>
            <div>
              <h3 className="h3">چه چیزی از ما دریافت می‌کنید</h3>
              <div style={{ marginTop: 8 }}>
                <Bullets
                  items={[
                    "پیشنهاد فنی سیستم و ظرفیت",
                    "طرح و رندر کابین با فهرست متریال",
                    "نقشه جای‌گذاری و ورودی طبقات",
                    "مستندات تحویل و برنامه سرویس",
                  ]}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function ChecklistContact() {
  return (
    <Sheet n={24} id="contact" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="چک‌لیست پروژه"
          title="پیش از درخواست استعلام"
          lede="پاسخ این ده مورد، گفتگو را کوتاه‌تر و پیشنهاد را دقیق‌تر می‌کند. اگر بعضی موارد را نمی‌دانید، لازم نیست حدس بزنید؛ در بازدید بررسی می‌شوند."
        />
        <Reveal>
          <ul className="checklist">
            {checklist.map((c, i) => (
              <li key={i}>
                <span className="box" aria-hidden="true" />
                <span>
                  <span className="serif" style={{ color: "var(--gold)", marginInlineEnd: 8 }}>
                    {fa(i + 1)}
                  </span>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="card"
            style={{
              marginTop: "clamp(22px,3vw,34px)",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
              gap: "clamp(18px,3vw,36px)",
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                قدم بعدی
              </div>
              <h3 className="h2" style={{ fontSize: "clamp(1.3rem,2.2vw,1.7rem)", marginTop: 8 }}>
                درخواست بازدید و استعلام
              </h3>
              <p className="p" style={{ marginTop: 10 }}>
                برای هماهنگی بازدید، نشانی دفتر مرکزی را در نظر بگیرید. بازدید فضا و
                اندازه‌گیری چاه، مبنای پیشنهاد فنی و قیمت است.
              </p>
            </div>
            <div>
              <div className="small">نشانی</div>
              <p className="p" style={{ marginTop: 4, fontWeight: 500, color: "var(--ink)" }}>
                {company.address}
              </p>
              <hr className="hr" style={{ margin: "14px 0" }} />
              <p className="small">
                اطلاعات تماس تکمیلی، پس از تأیید، در نسخه رسمی کاتالوگ درج می‌شود. برای
                هماهنگی حضوری به نشانی بالا مراجعه کنید.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

export function BackCover() {
  return (
    <Sheet n={25} id="back" tone="dark">
      <div className="body-area" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <div className="eyebrow" style={{ color: "var(--gold-2)" }}>
          Arsham Faraz Elevators
        </div>
        <div>
          <h2 className="h1" style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", marginTop: 0 }}>
            آرشام فراز
          </h2>
          <p className="lede" style={{ maxWidth: "52ch" }}>
            طراحی، مونتاژ و فروش آسانسور. برای شروع، بازدید فضا و مشخص‌کردن ظرفیت و
            سیستم کافی است؛ باقی تصمیم‌ها با هم برداشته می‌شوند.
          </p>
          <div style={{ marginTop: "clamp(20px,3vw,32px)", maxWidth: 420 }}>
            <hr className="hr" style={{ background: "var(--line-dark)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 14 }}>
              <span className="small">نشانی</span>
              <span className="small" style={{ textAlign: "left", color: "rgba(247,243,234,.85)" }}>
                {company.address}
              </span>
            </div>
            <hr className="hr" style={{ background: "var(--line-dark)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 14 }}>
              <span className="small">پروانه</span>
              <span className="small" style={{ color: "rgba(247,243,234,.85)" }}>
                واحد طراحی و مونتاژ آسانسور — شماره {company.license.number}
              </span>
            </div>
            <hr className="hr" style={{ background: "var(--line-dark)" }} />
          </div>
        </div>
        <div className="small" style={{ color: "rgba(247,243,234,.55)" }}>
          © ۱۴۰۵ آرشام فراز. تمامی حقوق محفوظ است.
        </div>
      </div>
    </Sheet>
  );
}
