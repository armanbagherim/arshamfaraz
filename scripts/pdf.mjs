import puppeteer from "puppeteer-core";
import { spawn } from "node:child_process";
import { mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 4173;

async function withPage(fn, viewport = { width: 1440, height: 1000 }) {
  const server = spawn("node", ["scripts/serve.mjs", "out", String(PORT)], { stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 1100));
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--no-sandbox", "--force-color-profile=srgb", "--font-render-hinting=none"],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: "load", timeout: 120000 });
    await page.addStyleTag({ content: "[data-reveal]{opacity:1!important;transform:none!important}" });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 500));
    return await fn(page);
  } finally {
    await browser.close().catch(() => {});
    server.kill();
  }
}

const mode = process.argv[2] || "shots";

if (mode === "shots") {
  const out = process.argv[3] || "/tmp/shots";
  const w = Number(process.argv[4] || 1440);
  const h = Number(process.argv[5] || 1000);
  mkdirSync(out, { recursive: true });
  await withPage(async (page) => {
    const sections = await page.$$(".sheet");
    console.log("sheets:", sections.length, "viewport:", w);
    for (let i = 0; i < sections.length; i++) {
      await sections[i].screenshot({ path: join(out, `s${String(i + 1).padStart(2, "0")}.png`) });
    }
    await page.screenshot({ path: join(out, "00-fullpage.png"), fullPage: true });
    console.log("done");
  }, { width: w, height: h });
}

if (mode === "printshots") {
  const out = process.argv[3] || "/tmp/print";
  mkdirSync(out, { recursive: true });
  await withPage(async (page) => {
    await page.emulateMediaType("print");
    await new Promise((r) => setTimeout(r, 400));
    const sections = await page.$$(".sheet");
    for (let i = 0; i < sections.length; i++) {
      await sections[i].screenshot({ path: join(out, `p${String(i + 1).padStart(2, "0")}.png`) });
    }
    console.log("print sheets:", sections.length);
  }, { width: 794, height: 1123 });
}

if (mode === "mobile") {
  const out = process.argv[3] || "/tmp/mob";
  mkdirSync(out, { recursive: true });
  await withPage(async (page) => {
    const shots = [1, 2, 5, 11, 16, 20, 24];
    for (const n of shots) {
      const el = (await page.$$(".sheet"))[n - 1];
      await el.scrollIntoView();
      await new Promise((r) => setTimeout(r, 350));
      await el.screenshot({ path: join(out, `m${String(n).padStart(2, "0")}.png`) });
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 300));
    await page.screenshot({ path: join(out, "m00-top.png") });
    await page.click(".menu-toggle");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: join(out, "m09-menu.png") });
    console.log("mobile shots done");
  }, { width: 390, height: 844 });
}

if (mode === "overflow") {
  await withPage(async (page) => {
    await page.emulateMediaType("print");
    const res = await page.evaluate(() => {
      const rows = [];
      document.querySelectorAll(".sheet").forEach((el, i) => {
        const cs = getComputedStyle(el);
        rows.push({
          page: i + 1,
          h: Math.round(el.getBoundingClientRect().height),
          scroll: el.scrollHeight,
          client: el.clientHeight,
          pad: cs.padding,
        });
      });
      return rows;
    });
    const bad = res.filter((r) => r.scroll - r.client > 2);
    console.log(JSON.stringify(bad, null, 1));
    console.log("total overflowing:", bad.length, "of", res.length);
  }, { width: 1200, height: 1000 });
}

if (mode === "pdf") {
  const out = process.argv[3] || "dist/arsham-faraz-catalog.pdf";
  mkdirSync("dist", { recursive: true });
  await withPage(async (page) => {
    await page.emulateMediaType("print");
    await new Promise((r) => setTimeout(r, 500));
    await page.pdf({
      path: out,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    console.log("pdf:", out, statSync(out).size, "bytes");
  }, { width: 1200, height: 1000 });
}

if (mode === "console") {
  await withPage(async (page) => {
    const logs = [];
    page.on("console", (m) => {
      if (m.type() === "error" || m.type() === "warning") logs.push(m.type() + ": " + m.text());
    });
    page.on("pageerror", (e) => logs.push("pageerror: " + e.message));
    page.on("requestfailed", (r) => logs.push("requestfailed: " + r.url()));
    await page.reload({ waitUntil: "load" });
    await new Promise((r) => setTimeout(r, 1200));
    console.log(JSON.stringify(logs, null, 1));
  }, { width: 1280, height: 900 });
}
