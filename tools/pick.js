// Hilfsskript: node tools/pick.js id=1,2,3 id2=4,5  → trägt Auswahl in tools/auswahl.json ein
const fs = require("fs"), f = __dirname + "/auswahl.json";
const a = JSON.parse(fs.readFileSync(f, "utf8"));
for (const arg of process.argv.slice(2)) { const [id, n] = arg.split("="); a[id] = n.split(",").map(Number); }
fs.writeFileSync(f, JSON.stringify(a, null, 1).replace(/\[\n\s+([\d,\n\s]+?)\n\s+\]/g, (m, x) => "[" + x.replace(/\s+/g, " ") + "]"));
console.log(Object.keys(a).length - 1, "Rassen ausgewählt");
