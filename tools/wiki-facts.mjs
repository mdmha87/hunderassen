// Holt zu jeder Rasse den deutschen Wikipedia-Artikel (Einleitung + Infobox-Felder),
// um Texte und Links zu prüfen. Ausgabe: tools/out/wiki-facts.json
import fs from "node:fs";
import path from "node:path";
import { ROOT, loadRassen, getJson } from "./lib.mjs";

const { rassen } = loadRassen();
const out = [];

for (const r of rassen) {
  const title = decodeURIComponent(r.link.split("/wiki/")[1]);
  const url = "https://de.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=extracts|revisions|pageimages"
    + "&exintro=1&explaintext=1&rvprop=content&rvslots=main&piprop=name&titles=" + encodeURIComponent(title);
  const data = await getJson(url);
  const page = Object.values(data.query.pages)[0];
  const entry = { id: r.id, link: title, redirectTo: data.query.redirects?.[0]?.to || null, missing: "missing" in page };
  if (!entry.missing) {
    const wt = page.revisions[0].slots.main["*"];
    const fields = {};
    for (const key of ["FCI-Gruppe", "FCI-Sektion", "Ursprung", "Herkunft", "Patronat", "Widerristhöhe", "Gewicht", "Name"]) {
      const m = wt.match(new RegExp("\\|\\s*" + key + "\\s*=\\s*([^\\n]*)"));
      if (m) fields[key] = m[1].replace(/<ref[^>]*>.*?<\/ref>|<ref[^>]*\/>/g, "").trim();
    }
    entry.title = page.title;
    entry.fields = fields;
    entry.intro = page.extract.slice(0, 1500);
  }
  out.push(entry);
  await new Promise(r => setTimeout(r, 1200));
}

fs.mkdirSync(path.join(ROOT, "tools/out"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "tools/out/wiki-facts.json"), JSON.stringify(out, null, 1));
for (const e of out) console.log(e.missing ? "FEHLT " : e.redirectTo ? "REDIR " : "ok    ", e.id, e.redirectTo ? "-> " + e.redirectTo : "");
