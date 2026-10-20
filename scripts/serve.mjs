import http from "node:http";
import { createReadStream, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = process.argv[2] || "out";
const PORT = Number(process.argv[3] || 4173);
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".json": "application/json",
  ".txt": "text/plain",
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    let file = join(process.cwd(), ROOT, p);
    if (!existsSync(file) || statSync(file).isDirectory()) {
      if (existsSync(file + ".html") === false) {
        res.writeHead(404).end("nf");
        return;
      }
      file = file + ".html";
    }
    res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
    createReadStream(file).pipe(res);
  })
  .listen(PORT, "127.0.0.1", () => console.log("serving", ROOT, "on", PORT));
