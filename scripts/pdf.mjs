import puppeteer from "puppeteer-core";
import { spawn } from "node:child_process";
import { statSync, existsSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";

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
  const out = process.argv[3] || "public/arsham-faraz-catalog.pdf";
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
    // static export (out/) must ship the same file
    if (out.startsWith("public/")) {
      const target = join(process.cwd(), "out", out.slice("public/".length));
      if (existsSync(dirname(target))) copyFileSync(out, target);
    }
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
