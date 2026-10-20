import React from "react";
import { Sheet, SectionHead, fa, Specs, Bullets } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { company } from "@/data/catalog";

export function Cover() {
  return (
    <Sheet n={1} id="cover" tone="dark" className="cover-sheet">
      <div className="cover">
        <div className="cover-media" aria-hidden="true">
          <img
            src="/assets/catalog/chrysler_1920.jpg"
            alt=""
            fetchPriority="high"
          />
        </div>
        <div className="cover-content">
          <div className="eyebrow" style={{ color: "var(--gold-2)" }}>
            کاتالوگ طراحی و ساخت آسانسور
          </div>
          <h1>آرشام فراز</h1>
          <p className="lede">
            طراحی کابین، انتخاب سیستم و اجرای آسانسور برای ساختمان‌های مسکونی، اداری و
            تجاری. این کاتالوگ برای انتخاب آگاهانه‌تر تهیه شده است: از جهت‌های طراحی
            کابین تا معیارهای فنی انتخاب سیستم.
          </p>
          <div className="cover-meta">
            <span>طراحی، مونتاژ و فروش آسانسور</span>
            <span>تهران</span>
            <span>نسخه ۱ — مهر ۱۴۰۵</span>
          </div>
        </div>
        <div className="cover-scroll" aria-hidden="true">
          SCROLL ↓
        </div>
      </div>
    </Sheet>
  );
}

export function Company() {
  return (
    <Sheet n={2} id="company" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="شرکت"
          title="آرشام فراز شرق"
          lede="واحد طراحی و مونتاژ آسانسور مستقر در تهران. فعالیت این مجموعه مطابق پروانه صادرشده، در حوزه طراحی، مونتاژ و فروش آسانسور است و طرح‌های کابین به‌صورت سفارشی برای هر پروژه تعریف می‌شوند."
        />

        <Reveal>
          <div className="g2" style={{ alignItems: "start" }}>
            <figure className="fig">
              <div className="figframe" style={{ aspectRatio: "3 / 4", maxHeight: "520px" }}>
                <img
                  src="/assets/brand/design-license.jpg"
                  alt="پروانه واحد طراحی و مونتاژ آسانسور آرشام فراز شرق"
                  loading="lazy"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
              <figcaption className="figcaption">
                پروانه واحد طراحی و مونتاژ آسانسور — {company.license.authority}، شماره{" "}
                {company.license.number}
              </figcaption>
            </figure>
            <figure className="fig">
              <div className="figframe" style={{ aspectRatio: "3 / 4", maxHeight: "520px" }}>
                <img
                  src="/assets/brand/iseei-oath.jpg"
                  alt="سوگندنامه عضویت در سندیکای صنایع آسانسور و پله برقی ایران"
                  loading="lazy"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
              <figcaption className="figcaption">
                سوگندنامه عضویت در {company.syndicate.name}
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="split" style={{ marginTop: "clamp(24px, 4vw, 48px)" }}>
          <Reveal>
            <div>
              <h3 className="h3" style={{ marginBottom: 14 }}>
                اطلاعات پایه
              </h3>
              <Specs
                rows={[
                  ["نام", company.legalName],
                  ["موضوع فعالیت", "طراحی، مونتاژ و فروش آسانسور"],
                  ["نشانی", company.address],
                  ["پروانه", `شماره ${company.license.number} — ${company.license.issued}`],
                  ["عضویت", "سندیکای صنایع آسانسور و پله برقی ایران (ISEEI)"],
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="stack">
              <div className="card card--plain">
                <h3 className="h3">درباره پروانه</h3>
                <p className="small" style={{ marginTop: 8 }}>
                  {company.license.note}
                </p>
              </div>
              <div className="card card--plain">
                <h3 className="h3">چطور کار می‌کنیم</h3>
                <p className="small" style={{ marginTop: 8 }}>
                  ابتدا فضا و محدودیت‌های چاه بررسی می‌شود؛ سپس سیستم، ظرفیت و طرح کابین
                  پیشنهاد و پس از تأیید شما ساخته می‌شود. مشخصات فنی نهایی هر پروژه به
                  بازدید و نقشه‌های همان ساختمان وابسته است.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}

export function Principles() {
  return (
    <Sheet n={3} id="principles" tone="sand">
      <div className="body-area">
        <SectionHead
          eyebrow="اصول طراحی"
          title="چهار تصمیمی که نتیجه کار را تعیین می‌کند"
          lede="در آسانسور، انتخاب متریال زیبا بدون توجه به نگهداری و ایمنی، هزینه آینده است. این چهار اصل، مبنای پیشنهادهای ما در همه پروژه‌ها هستند."
        />
        <div className="split split--wide-second" style={{ alignItems: "start" }}>
          <Reveal>
            <div className="stack">
              {[
                {
                  t: "نگهداری، بخشی از طراحی است",
                  d: "سطحی که هر روز لمس می‌شود باید قابل تمیزکاری باشد. انتخاب استیل برس‌خورده به‌جای آینه در کابین پرتردد یا در نظر گرفتن دسترسی به قطعات، هزینه سال‌های بعد را کم می‌کند.",
                },
                {
                  t: "کابین باید با ساختمان هم‌خوان باشد",
                  d: "رنگ چوب لابی، جنس سنگ و میزان نور طبقه، سه ورودی اصلی انتخاب پالت کابین‌اند. یک کابین خوب در عکس دیده می‌شود؛ یک کابین درست، در ساختمان.",
                },
                {
                  t: "ابعاد و ایمنی، پیش از زیبایی",
                  d: "ظرفیت، ابعاد چاه، عرض بازشوی درب و الزامات دسترسی‌پذیری، محدوده طراحی را تعیین می‌کنند. زیبایی در این محدوده معنا پیدا می‌کند.",
                },
                {
                  t: "شفافیت در اطلاعات",
                  d: "اطلاعات عمومی صنعت را از پیشنهاد مخصوص پروژه شما جدا نگه می‌داریم. هر مشخصه‌ای که در قرارداد می‌آید، قابل اندازه‌گیری و تحویل است.",
                },
              ].map((it, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                    <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                      اصل {fa(i + 1)}
                    </div>
                    <h3 className="h3" style={{ marginTop: 6 }}>
                      {it.t}
                    </h3>
                    <p className="p" style={{ marginTop: 6, fontSize: "0.92rem" }}>
                      {it.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="stack">
              <figure className="fig">
                <div className="figframe" style={{ aspectRatio: "4 / 5" }}>
                  <img
                    src="/assets/catalog/art-deco-elevator_lobby_1920.jpg"
                    alt="لابی با پوشش سنگی و درب آسانسور"
                    loading="lazy"
                  />
                </div>
                <figcaption className="figcaption">
                  هم‌خوانی جنس درب و سنگ لابی، اولین تصمیم طراحی است.
                </figcaption>
              </figure>
              <div className="card card--plain">
                <p className="small">
                  در این کاتالوگ، «اطلاعات عمومی صنعت» با منابع استاندارد در فایل مستندات
                  پروژه نگهداری می‌شود و «پیشنهاد طراحی» برای هر بخش جدا مشخص شده است.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}

const contents = [
  ["شرکت و مدارک", 2],
  ["اصول طراحی", 3],
  ["شش جهت طراحی کابین", 5],
  ["درب، سقف، کف و یراق", 11],
  ["متریال و پالت‌های پیشنهادی", 14],
  ["سیستم‌ها و معیارهای انتخاب", 16],
  ["دسترسی‌پذیری", 20],
  ["کاربردها", 21],
  ["فرایند همکاری", 23],
  ["چک‌لیست و درخواست بازدید", 24],
];

export function Contents() {
  return (
    <Sheet n={4} id="contents" tone="cream">
      <div className="body-area">
        <SectionHead
          eyebrow="فهرست"
          title="در این کاتالوگ چه چیزی پیدا می‌کنید"
          lede="بخش‌های ۵ تا ۱۵ به انتخاب ظاهر و متریال کابین می‌پردازند؛ بخش‌های ۱۶ تا ۲۴ معیارهای فنی، کاربردها و مسیر شروع پروژه را توضیح می‌دهند."
        />
        <div className="split">
          <div>
            {contents.map(([t, p], i) => (
              <Reveal key={i} delay={i * 0.03}>
                <a
                  href={
                    [
                      "#company",
                      "#principles",
                      "#cabins",
                      "#details",
                      "#materials",
                      "#systems",
                      "#accessibility",
                      "#applications",
                      "#process",
                      "#contact",
                    ][i]
                  }
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "13px 0",
                    borderBottom: "1px solid var(--line)",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontSize: "0.98rem" }}>{t}</span>
                  <span className="serif" style={{ color: "var(--gold)", fontSize: "0.95rem" }}>
                    {fa(p as number)}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <div className="stack">
              <figure className="fig">
                <div className="figframe" style={{ aspectRatio: "4 / 3" }}>
                  <img
                    src="/assets/catalog/wooden-elevator-interior_1920.jpg"
                    alt="کابین چوبی روشن"
                    loading="lazy"
                  />
                </div>
                <figcaption className="figcaption">کابین CB-01 — ونیر بلوط و درزهای عمودی</figcaption>
              </figure>
              <div className="card card--plain">
                <h3 className="h3">نحوه استفاده</h3>
                <div style={{ marginTop: 10 }}>
                  <Bullets
                    items={[
                      "برای مقایسه سریع طرح‌ها، صفحات ۵ تا ۱۰ را ببینید.",
                      "برای تصمیم فنی، جدول مقایسه سیستم‌ها در صفحه ۱۶ را بخوانید.",
                      "برای شروع، چک‌لیست صفحه ۲۴ را تکمیل کنید.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}
