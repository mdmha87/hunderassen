# Konzept: Hunderassen lernen

Eine einfache Lern-App für den persönlichen Gebrauch. Ein Hundebild wird gezeigt, aus vier Vorschlägen wird die richtige Rasse gewählt. Danach gibt es eine kurze Auflösung und optional eine Infobox mit Fakten und Link.

---

## 1. Plattform-Empfehlung

| Option | Aufwand | Vorteile | Nachteile |
|---|---|---|---|
| **Web-App (PWA), statisch gehostet** ✅ | gering | Läuft auf Handy, Tablet und PC. Lässt sich wie eine App auf den Homescreen legen und funktioniert offline. Kostenloses Hosting (GitHub Pages, Netlify, Cloudflare Pages). | Keine Store-App |
| Lokale HTML-Datei | sehr gering | Nichts zu hosten | Auf dem Handy umständlich, kein Offline-Cache |
| Native App (Android/iOS) | hoch | „Echte“ App | Für den Eigenbedarf übertrieben: Store, Signierung, zwei Plattformen |
| App mit Backend/Datenbank | mittel–hoch | Fortschritt geräteübergreifend | Braucht man für eine Person nicht |

**Empfehlung:** Eine **statische Progressive Web App** ohne Backend. Der Lernfortschritt wird im Browser gespeichert (localStorage). Gehostet wird sie kostenlos auf GitHub Pages oder Netlify. Später lässt sie sich bei Bedarf noch erweitern, z. B. um Sync über Supabase.

**Technik:** HTML + CSS + JavaScript (oder TypeScript mit Vite). Kein Framework nötig, die App hat nur 3–4 Bildschirme.

---

## 2. Wie viele Rassen?

Die FCI erkennt rund **350 Rassen** an, praktisch relevant ist aber nur ein Bruchteil. Vorschlag in Stufen, die aufeinander aufbauen:

| Stufe | Rassen gesamt | Inhalt |
|---|---|---|
| **1 – Basis** | 50 | Die häufigsten Rassen in Deutschland (z. B. nach VDH-Welpenstatistik): Labrador, Schäferhund, Golden Retriever, Dackel, Französische Bulldogge, Border Collie … |
| **2 – Fortgeschritten** | 100 (+50) | Bekannte, aber seltenere Rassen: Weimaraner, Shiba Inu, Eurasier, Bearded Collie … |
| **3 – Experte** | 200 (+100) | Seltene Rassen und Verwechslungskandidaten: Kooikerhondje, Lagotto Romagnolo, Hovawart vs. Flat Coated Retriever … |
| *(optional) 4 – Alle FCI* | ~350 | Für Profis |

Für den Start reichen **50 Rassen** völlig. Die Datenstruktur ist so angelegt, dass weitere Rassen nur noch Einträge in einer Datei sind.

---

## 3. Zwei getrennte Regler: Umfang und Schwierigkeit

Den Rassen-Pool und die Schwierigkeit kann man unabhängig voneinander einstellen:

- **Umfang (Pool):** Basis / Fortgeschritten / Experte, also *welche* Rassen abgefragt werden.
- **Schwierigkeit (Antwortvorschläge):**
  - **Leicht:** Die 3 falschen Antworten sehen völlig anders aus (andere FCI-Gruppe, andere Größe). Chihuahua vs. Bernhardiner.
  - **Mittel:** Zufällige Rassen aus dem Pool.
  - **Schwer:** Die falschen Antworten sind ähnliche Rassen (gleiche FCI-Gruppe oder gepflegte „Verwechslungsliste“). Husky vs. Malamute vs. Samojede.

So kann man auch mit nur 50 Rassen schon anspruchsvoll üben.

---

## 4. Spielablauf

```
Start ──► Einstellungen (Pool, Schwierigkeit, Rundenlänge 10/20/∞)
            │
            ▼
        Frage: Bild (ggf. wischen für 2–3 Bilder)
               4 Antwort-Buttons
            │
            ▼
        Auflösung (ca. 1,5 s oder bis Tipp):
          ✅ grün / ❌ rot + richtige Rasse markiert
          [ℹ Info]  [Weiter →]
            │
            ├──► Infobox: 3–5 Sätze + Link
            ▼
        Nächste Frage … ► Rundenergebnis (z. B. 16/20, falsch beantwortete Rassen zum Nachlesen)
```

### Infobox-Inhalt (pro Rasse)
- Herkunftsland, FCI-Gruppe, Größe/Gewicht
- 3–5 Sätze: ursprünglicher Zweck, Wesen, typische Erkennungsmerkmale („woran erkenne ich sie?“)
- Verwechslungsgefahr mit: …
- Link: deutscher Wikipedia-Artikel (optional zusätzlich FCI-Standard als PDF)

---

## 5. Lerneffekt: Wiederholung falscher Rassen

Damit es mehr als ein Zufallsquiz ist, gibt es ein einfaches **Karteikasten-Prinzip (Leitner)**:
- Jede Rasse hat einen Wissensstand von 0–5.
- Richtig: +1, falsch: zurück auf 0.
- Rassen mit niedrigem Stand werden häufiger gezeigt.
- Statistikseite: „gelernt“, „unsicher“, „Problemfälle“.

---

## 6. Bilder: die eigentliche Herausforderung

| Quelle | Bewertung |
|---|---|
| **Dog CEO API** (dog.ceo) | Kostenlos, kein Key, ~120 Rassen. Ideal für einen schnellen Prototyp. Manche Bilder sind falsch zugeordnet oder von schlechter Qualität. |
| **Wikimedia Commons** | Gute, freie Bilder für fast alle Rassen. Lizenzangabe nötig (bei Privatnutzung unkritisch, für eine öffentliche Seite Urheber nennen). |
| **TheDogAPI** | Viele Rassen mit Infos, braucht einen API-Key, Bildqualität schwankt |
| Eigene Fotos | Toll als Ergänzung |

**Empfehlung:** Pro Rasse **3–5 handverlesene Bilder** von Wikimedia Commons lokal in der App ablegen, kleingerechnet auf ca. 800 px als WebP. Das sind rund 50 × 4 × 80 KB ≈ 16 MB für Stufe 1. Die App läuft damit offline und zeigt keine falschen Bilder. Zufällig rotierende Bilder pro Rasse verhindern, dass man nur *ein* Foto auswendig lernt.

---

## 7. Datenmodell (eine JSON-Datei)

```json
{
  "id": "labrador-retriever",
  "name": "Labrador Retriever",
  "stufe": 1,
  "fciGruppe": 8,
  "herkunft": "Großbritannien",
  "groesse": "groß",
  "info": [
    "Ursprünglich zum Apportieren von Wasserwild gezüchtet.",
    "Freundlich, verspielt und sehr menschenbezogen.",
    "Erkennbar am kurzen, dichten Fell und dem kräftigen 'Otterschwanz'.",
    "Farben: schwarz, gelb, braun (schokolade)."
  ],
  "verwechslung": ["golden-retriever", "flat-coated-retriever"],
  "link": "https://de.wikipedia.org/wiki/Labrador_Retriever",
  "bilder": [
    { "datei": "labrador-1.webp", "quelle": "Wikimedia Commons", "lizenz": "CC BY-SA 4.0", "autor": "…" }
  ]
}
```

---

## 8. Umsetzung in Phasen

1. **MVP:** Quiz mit 4 Antworten, Auflösung und Infobox für 50 Rassen. Lokal im Browser testen.
2. **Bilder & Texte:** Kuratierte Bilder aus mehreren Quellen lokal ablegen, Infotexte für alle 50 Rassen schreiben, danach Prüfdurchlauf für Texte und Bilder.
3. **Lernlogik:** Schwierigkeitsstufen (Verwechslungslisten), Leitner-System, Statistik.
4. **PWA & Hosting:** Manifest und Service Worker (offline), Deployment auf GitHub Pages, Icon auf den Homescreen.
5. **Erweiterung:** Stufe 2 und 3 (weitere 50 bzw. 100 Rassen).

### Optionale Ideen für später
- **Umgekehrter Modus:** Rassenname gegeben, 4 Bilder zur Auswahl
- **Echtes Memory:** Bild-Name-Paare aufdecken
- **Filter nach FCI-Gruppe** (z. B. nur Hütehunde üben)
- **Zeitmodus / Highscore**
- **Dark Mode**

---

## 9. Entscheidungen (Stand 18.10.2026)

- **Geräte:** Gespielt wird auf Handy und Tablet, der PC dient nur zum Testen. Das Layout ist mobile-first.
- **Kein Sync:** Der Lernfortschritt bleibt lokal auf dem jeweiligen Gerät.
- **Hosting:** GitHub Pages stellt nur die App-Dateien bereit (Code, Bilder, Rassen-JSON). Beim ersten Öffnen wird alles auf dem Gerät zwischengespeichert, danach läuft die App offline. Der Lernfortschritt verlässt das Gerät nie.
- **Bilder:** Kuratiert aus mehreren freien Quellen, vor allem Wikimedia Commons, ergänzt um Pexels/Unsplash. Jedes Bild wird geprüft: richtige Rasse, ein Hund gut sichtbar, brauchbare Qualität. Die Lizenz wird in der App angezeigt.
- **Infotexte:** Claude schreibt sie. Danach folgt ein **eigener Prüfdurchlauf**: Jeder Text wird gegen Wikipedia bzw. den FCI-Standard abgeglichen (Herkunft, FCI-Gruppe, Größe, Merkmale) und bei Abweichungen korrigiert. Die Prüfergebnisse werden in einer Datei festgehalten.
