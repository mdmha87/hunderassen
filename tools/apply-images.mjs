// Übernimmt die in tools/auswahl.json ausgewählten Kandidaten: lädt sie in 960 px,
// legt sie unter img/rassen/<id>/ ab und schreibt data/bilder.js (Urheber + Lizenz).
// Danach tools/shrink.ps1 ausführen, um die Bilder auf 800 px zu verkleinern.
import fs from "node:fs";
import path from "node:path";
import { ROOT, UA } from "./lib.mjs";

const candidates = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/out/candidates.json"), "utf8"));
const auswahl = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/auswahl.json"), "utf8"));
const bilderFile = path.join(ROOT, "data/bilder.js");
const sleep = ms => new Promise(r => setTimeout(r, ms));

const bilder = {};
for (const [id, nums] of Object.entries(auswahl)) {
  if (id.startsWith("_")) continue;
  const dir = path.join(ROOT, "img/rassen", id);
  fs.mkdirSync(dir, { recursive: true });
  bilder[id] = [];
  for (const [k, n] of nums.entries()) {
    const c = candidates[id][n - 1];
    const datei = `${k + 1}.jpg`;
    const target = path.join(dir, datei);
    if (!fs.existsSync(target) || fs.statSync(target).size === 0) {
      const url = c.thumb.replace(/\/\d+px-/, "/960px-");
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) throw new Error(`${res.status} ${url}`);
      fs.writeFileSync(target, Buffer.from(await res.arrayBuffer()));
      await sleep(800);
    }
    bilder[id].push({ datei, autor: c.autor.slice(0, 80), lizenz: c.lizenz, quelle: "Wikimedia Commons", url: c.page });
  }
  // Nicht mehr ausgewählte, ältere Dateien entfernen
  for (const f of fs.readdirSync(dir)) {
    if (!bilder[id].some(b => b.datei === f)) fs.unlinkSync(path.join(dir, f));
  }
  console.log(id, nums.length);
}

fs.writeFileSync(bilderFile,
  "// Automatisch erzeugt von tools/apply-images.mjs – nicht von Hand bearbeiten.\n"
  + "window.BILDER = " + JSON.stringify(bilder, null, 1) + ";\n");
