// Sucht pro Rasse Bildkandidaten auf Wikimedia Commons (nur freie Lizenzen) und lädt kleine
// Vorschaubilder für die Sichtprüfung. Ausgabe: tools/out/candidates.json, tools/out/thumbs/<id>/<n>.jpg
// Aufruf: node tools/commons-candidates.mjs [id ...]
import fs from "node:fs";
import path from "node:path";
import { ROOT, UA, loadRassen, getJson } from "./lib.mjs";

const CATEGORY = {
  "deutscher-schaeferhund": "German Shepherd Dog", "labrador-retriever": "Labrador Retriever",
  "golden-retriever": "Golden Retriever", "dackel": "Dachshund", "franzoesische-bulldogge": "French Bulldog",
  "border-collie": "Border Collie", "australian-shepherd": "Australian Shepherd", "chihuahua": "Chihuahua (dog)",
  "jack-russell-terrier": "Jack Russell Terrier", "yorkshire-terrier": "Yorkshire Terrier", "mops": "Pug",
  "berner-sennenhund": "Bernese Mountain Dog", "boxer": "Boxer (dog)", "rottweiler": "Rottweiler",
  "dobermann": "Dobermann", "siberian-husky": "Siberian Husky", "beagle": "Beagle", "pudel": "Poodle",
  "malteser": "Maltese (dog)", "havaneser": "Havanese", "shih-tzu": "Shih Tzu",
  "cavalier-king-charles-spaniel": "Cavalier King Charles Spaniel", "zwergspitz": "Pomeranian (dog)",
  "deutsch-drahthaar": "Deutsch Drahthaar", "weimaraner": "Weimaraner", "magyar-vizsla": "Vizsla",
  "englische-bulldogge": "Bulldog", "cocker-spaniel": "English Cocker Spaniel",
  "west-highland-white-terrier": "West Highland White Terrier", "dalmatiner": "Dalmatian (dog)",
  "weisser-schweizer-schaeferhund": "Berger Blanc Suisse", "malinois": "Malinois",
  "bernhardiner": "St. Bernard (dog)", "neufundlaender": "Newfoundland (dog)", "deutsche-dogge": "Great Dane",
  "hovawart": "Hovawart", "leonberger": "Leonberger", "collie-langhaar": "Rough Collie",
  "shetland-sheepdog": "Shetland Sheepdog", "welsh-corgi-pembroke": "Pembroke Welsh Corgi",
  "bichon-frise": "Bichon Frisé", "zwergschnauzer": "Miniature Schnauzer", "akita-inu": "Akita Inu",
  "shiba-inu": "Shiba Inu", "samojede": "Samoyed (dog)", "alaskan-malamute": "Alaskan Malamute",
  "whippet": "Whippet", "greyhound": "Greyhound", "rhodesian-ridgeback": "Rhodesian Ridgeback",
  "bullterrier": "Bull Terrier",
  // Stufe 2
  "parson-russell-terrier": "Parson Russell Terrier", "staffordshire-bullterrier": "Staffordshire Bull Terrier",
  "american-staffordshire-terrier": "American Staffordshire Terrier", "airedale-terrier": "Airedale Terrier",
  "scottish-terrier": "Scottish Terrier", "cairn-terrier": "Cairn Terrier", "border-terrier": "Border Terrier",
  "boston-terrier": "Boston Terrier", "riesenschnauzer": "Giant Schnauzer", "mittelschnauzer": "Standard Schnauzer",
  "zwergpinscher": "Miniature Pinscher", "deutscher-pinscher": "German Pinscher", "cane-corso": "Cane Corso",
  "bordeauxdogge": "Dogue de Bordeaux", "mastiff": "English Mastiff", "bullmastiff": "Bullmastiff",
  "grosser-schweizer-sennenhund": "Greater Swiss Mountain Dog", "entlebucher-sennenhund": "Entlebucher Mountain Dog",
  "appenzeller-sennenhund": "Appenzeller Sennenhund", "bearded-collie": "Bearded Collie", "bobtail": "Old English Sheepdog",
  "puli": "Puli dog", "australian-cattle-dog": "Australian Cattle Dog", "groenendael": "Belgian Shepherd Groenendael",
  "flat-coated-retriever": "Flat-Coated Retriever", "nova-scotia-duck-tolling-retriever": "Nova Scotia Duck Tolling Retriever",
  "lagotto-romagnolo": "Lagotto Romagnolo", "springer-spaniel": "English Springer Spaniel",
  "deutscher-wachtelhund": "Deutscher Wachtelhund", "deutsch-kurzhaar": "German Shorthaired Pointer",
  "irish-setter": "Irish Setter", "english-setter": "English Setter", "pointer": "English Pointer",
  "kleiner-muensterlaender": "Small Münsterländer", "basset-hound": "Basset Hound", "bloodhound": "Bloodhound",
  "eurasier": "Eurasier", "chow-chow": "Chow Chow", "basenji": "Basenji", "shar-pei": "Shar Pei",
  "irischer-wolfshund": "Irish Wolfhound", "saluki": "Saluki", "afghanischer-windhund": "Afghan Hound",
  "barsoi": "Borzoi", "italienisches-windspiel": "Italian Greyhound", "papillon": "Papillon dog",
  "pekingese": "Pekingese", "lhasa-apso": "Lhasa Apso", "coton-de-tulear": "Coton de Tuléar",
  "tibet-terrier": "Tibetan Terrier", "bouvier": "Bouvier des Flandres"
};
// Wikidata-IDs der Rassen: Suche nach Bildern mit der Angabe „zeigt“ (P180) = diese Rasse
const DEPICTS = {
  "beagle": "Q21102", "zwergspitz": "Q39579", "malteser": "Q38751", "bernhardiner": "Q38090",
  "malinois": "Q37624", "weisser-schweizer-schaeferhund": "Q37934",
  ...JSON.parse(fs.readFileSync(path.join(ROOT, "tools/qids-stufe2.json"), "utf8"))
};
const PER_BREED = 16;
const FREE = /^(CC[ -]?BY(-SA)?[ -]?[0-9.]*|CC0|Public domain|PD.*)$/i;
const SKIP = /puppy|puppies|welpe|cucciol|chiot|skeleton|skull|stamp|drawing|illustration|painting|statue|sculpture|map|logo|poster|book|cartoon|toy|figurine|mix|cross|x[ _]|_x_|sign|plush|coin/i;

const sleep = ms => new Promise(r => setTimeout(r, ms));
const strip = html => (html || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

// Erst direkte Dateien der Kategorie; liegen die Bilder nur in Unterkategorien, per Suche (deepcat) nachfassen.
async function candidates(cat, forceSearch, qid, combine) {
  if (qid && combine) {
    const list = await query("&generator=search&gsrnamespace=6&gsrlimit=100&gsrsearch="
      + encodeURIComponent(`filetype:bitmap haswbstatement:P180=${qid}`));
    if (list.length >= 20) return list;
    await sleep(3000);
    const more = await query("&generator=categorymembers&gcmtype=file&gcmlimit=200&gcmtitle=" + encodeURIComponent("Category:" + cat));
    return [...list, ...more.filter(m => !list.some(l => l.title === m.title))];
  }
  if (qid) return query("&generator=search&gsrnamespace=6&gsrlimit=100&gsrsearch="
    + encodeURIComponent(`filetype:bitmap haswbstatement:P180=${qid}`));
  let list = forceSearch ? [] : await query("&generator=categorymembers&gcmtype=file&gcmlimit=200&gcmtitle=" + encodeURIComponent("Category:" + cat));
  if (list.length < 15) {
    await sleep(3000);
    const more = await query("&generator=search&gsrnamespace=6&gsrlimit=100&gsrsearch="
      + encodeURIComponent(`filetype:bitmap deepcat:"${cat}"`));
    list = [...list, ...more.filter(m => !list.some(l => l.title === m.title))];
  }
  if (list.length < 15) {
    await sleep(3000);
    const more = await query("&generator=search&gsrnamespace=6&gsrlimit=100&gsrsearch="
      + encodeURIComponent(`filetype:bitmap intitle:"${cat.replace(/ (.*)/, "")}"`));
    list = [...list, ...more.filter(m => !list.some(l => l.title === m.title))];
  }
  return list;
}

async function query(generator) {
  const url = "https://commons.wikimedia.org/w/api.php?action=query&format=json" + generator
    + "&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=500"
    + "&iiextmetadatafilter=Artist|LicenseShortName|LicenseUrl|Categories";
  const data = await getJson(url);
  const pages = Object.values(data.query?.pages || {});
  return pages.map(p => ({ title: p.title, ii: p.imageinfo?.[0] })).filter(({ title, ii }) => {
    if (!ii || ii.mime !== "image/jpeg") return false;
    if (ii.width < 1000 || ii.height < 700) return false;
    const ratio = ii.width / ii.height;
    if (ratio < 0.9 || ratio > 2) return false;
    if (SKIP.test(title)) return false;
    return FREE.test(ii.extmetadata?.LicenseShortName?.value || "");
  }).map(({ title, ii }) => ({
    title,
    page: ii.descriptionurl,
    thumb: ii.thumburl,
    width: ii.width, height: ii.height,
    autor: strip(ii.extmetadata.Artist?.value) || "unbekannt",
    lizenz: ii.extmetadata.LicenseShortName.value
  }));
}

const { rassen } = loadRassen();
const nach = process.argv[2] === "--nach";
const only = process.argv.slice(nach ? 3 : 2);
const outFile = path.join(ROOT, "tools/out/candidates.json");
const all = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, "utf8")) : {};

for (const r of rassen) {
  if (only.length ? !only.includes(r.id) : all[r.id]) continue;
  const old = nach ? (all[r.id] || []) : [];
  const list = (await candidates(CATEGORY[r.id], nach, (nach || r.stufe > 1) && DEPICTS[r.id], r.stufe > 1)).filter(c => !old.some(o => o.title === c.title));
  // Größere Originale bevorzugen, dann gleichmäßig über die Liste streuen statt nur die ersten zu nehmen.
  list.sort((a, b) => b.width * b.height - a.width * a.height);
  const top = list.slice(0, 40);
  const step = Math.max(1, top.length / PER_BREED);
  const chosen = Array.from({ length: Math.min(PER_BREED, top.length) }, (_, i) => top[Math.floor(i * step)]);

  const dir = path.join(ROOT, "tools/out/thumbs", r.id);
  fs.mkdirSync(dir, { recursive: true });
  for (const [i, c] of chosen.entries()) {
    const file = path.join(dir, `${old.length + i + 1}.jpg`);
    const res = await fetch(c.thumb, { headers: { "User-Agent": UA } });
    if (res.ok) fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    else c.fehler = res.status;
    await sleep(700);
  }
  all[r.id] = [...old, ...chosen];
  fs.writeFileSync(outFile, JSON.stringify(all, null, 1));
  console.log(`${r.id}: ${list.length} passend, ${chosen.length} geladen`);
  await sleep(1500);
}
