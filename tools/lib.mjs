// Gemeinsame Hilfen für die Pflege-Skripte (nicht Teil der App).
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
export const UA = "HunderassenLernApp/1.0 (private Lern-App; mdmha87 on GitHub)";

export function loadRassen() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data/rassen.js"), "utf8"), ctx);
  return { rassen: ctx.window.RASSEN, gruppen: ctx.window.FCI_GRUPPEN };
}

export async function getJson(url, tries = 6) {
  for (let i = 0; ; i++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.ok) return res.json();
    if (i >= tries || ![429, 500, 502, 503].includes(res.status)) throw new Error(`${res.status} ${url}`);
    const wait = Number(res.headers.get("retry-after")) * 1000 || 5000 * (i + 1);
    await new Promise(r => setTimeout(r, wait));
  }
}
