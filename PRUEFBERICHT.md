# Prüfbericht: Texte, Links und Bilder (Stufe 1, 50 Rassen)

Stand: 18.10.2026

## Vorgehen

1. **Texte:** Für jede Rasse wurde der deutsche Wikipedia-Artikel abgerufen ([tools/wiki-facts.mjs](tools/wiki-facts.mjs)): Einleitung sowie die Infobox-Felder FCI-Gruppe, Herkunft, Patronat, Größe und Gewicht. Diese Angaben wurden mit den Daten in [data/rassen.js](data/rassen.js) abgeglichen: FCI-Gruppe, Herkunftsland, Größenklasse und die vier Infosätze.
2. **Links:** Jeder Link wurde über die Wikipedia-Schnittstelle aufgelöst. Links, die auf Begriffsklärungsseiten oder nicht existierende Artikel zeigten, wurden ersetzt. Links, die nur weiterleiten, zeigen jetzt direkt auf den Zielartikel.
3. **Bilder:** Siehe unten.

## Ergebnis Texte

**FCI-Gruppen:** Alle 50 stimmen mit Wikipedia bzw. FCI überein.

**Korrigiert bzw. präzisiert:**

| Rasse | Vorher | Nachher | Grund |
|---|---|---|---|
| Jack Russell Terrier | Herkunft: Großbritannien | Großbritannien / Australien | Den FCI-Standard betreut Australien, entstanden ist die Rasse in England. Ein Satz dazu wurde ergänzt. |
| Pudel | Herkunft: Frankreich | Frankreich (umstritten: Deutschland) | Die FCI führt Frankreich, viele Quellen nennen Deutschland. |
| Weimaraner | „bernsteinfarbene bis blaugraue Augen“ | „bernsteinfarbene Augen (bei Welpen himmelblau)“ | Blaugraue Augen haben nur Welpen. |
| Magyar Vizsla | „Nase und Krallen in derselben Farbe“ | „Nase, Lefzen und Krallen sind braun und passen farblich zum Fell“ | Genauer, entspricht dem Standard. Name ergänzt um „(Kurzhaar)“, weil es auch einen Drahthaar-Vizsla gibt. |
| Samojede | „Volk der Samojeden (heute Nenzen)“ | „samojedische Völker Sibiriens (z. B. Nenzen)“ | „Samojeden“ ist eine Völkergruppe, nicht ein einzelnes Volk. |
| Hovawart | Satz über Verwechslung mit Mischlingen | „Spätentwickler, erst mit etwa zwei bis drei Jahren ganz erwachsen“ | Der alte Satz war nicht belegbar. |
| Bichon Frisé | „Name bedeutet etwa gelockter Schoßhund“ | „Frisé ist französisch und bedeutet gelockt“ | Nur der zweite Namensteil ist eindeutig belegt. |

**Bewusst so belassen:**
- **Mops:** Die FCI führt ihn als englische Rasse (Patronat Großbritannien). Die App nennt China als Herkunft, weil die Rasse dort entstanden ist.
- **Havaneser:** Die FCI nennt als Herkunft den „westlichen Mittelmeerraum“, entwickelt wurde die Rasse auf Kuba. Die App nennt Kuba.
- **Golden Retriever:** Wikipedia nennt ihn „mittelgroß“. In der App läuft er als „groß“, weil Rüden bis 61 cm erreichen und er so neben Labrador und Hovawart eingeordnet ist.

## Ergebnis Links

| Rasse | Alter Link | Neuer Link | Problem |
|---|---|---|---|
| Dackel | Dachshund | Dackel | Begriffsklärung |
| Beagle | Beagle | Beagle_(Hunderasse) | Begriffsklärung |
| Magyar Vizsla | Magyar_Vizsla | Kurzhaariger_Ungarischer_Vorstehhund | Begriffsklärung |
| Collie | Collie | Collie_(Hunderasse) | Begriffsklärung |
| Whippet | Whippet | Whippet_(Hunderasse) | Begriffsklärung |
| Greyhound | Greyhound | Greyhound_(Hunderasse) | Begriffsklärung |
| Neufundländer | Neufundländer_(Hunderasse) | Neufundländer | Artikel existiert nicht |
| Leonberger | Leonberger_(Hunderasse) | Leonberger | Artikel existiert nicht |
| Mops, Zwergspitz, Weißer Schweizer Schäferhund, Zwergschnauzer, Akita, Shiba | – | direktes Ziel | Weiterleitung |

## Bilder

- **Quelle:** Wikimedia Commons, nur freie Lizenzen (CC BY, CC BY-SA, CC0, gemeinfrei). Urheber und Lizenz stehen in [data/bilder.js](data/bilder.js) und werden in der App nach der Antwort und in der Infobox angezeigt.
- **Auswahl:** Pro Rasse wurden 12–36 Kandidaten gesucht ([tools/commons-candidates.mjs](tools/commons-candidates.mjs)), als nummerierte Übersicht zusammengestellt und einzeln angesehen. Behalten wurden nur Bilder, auf denen eindeutig ein erwachsener Hund der Rasse gut zu erkennen ist. Aussortiert wurden Welpen, Mischlinge, Zeichnungen, Röntgenbilder, Fotos mit Kostüm und Bilder, auf denen der Hund zu klein ist. Die Auswahl steht in [tools/auswahl.json](tools/auswahl.json).
- **Ergebnis:** 199 Bilder für 50 Rassen (4 pro Rasse, beim Malteser 3), zusammen etwa 19 MB. Lizenzen: CC BY-SA (129), CC BY (50), CC0 (11), gemeinfrei (9).
- **Kontrolle:** Das erste Bild jeder Rasse wurde nach dem Verkleinern noch einmal in einer Gesamtübersicht geprüft. Alle zeigen die richtige Rasse.
- **Format:** JPEG, höchstens 800 px breit.

---

# Stufe 2 (Fortgeschritten): 51 weitere Rassen

Stand: 24.10.2026. Die Daten stehen in [data/rassen-2.js](data/rassen-2.js).

## Texte

Geprüft wurde wie bei Stufe 1, also mit Wikipedia-Einleitung und Infobox (`node tools/wiki-facts.mjs 2`).

**FCI-Gruppen:** Alle 51 stimmen.

**Korrigiert:**

| Rasse | Vorher | Nachher | Grund |
|---|---|---|---|
| Basenji | Größe: klein | mittel | Rüden erreichen etwa 43 cm. |
| Puli | „kam vor über 1000 Jahren mit den Magyaren“ | „Vorfahren vermutlich mit den Magyaren“ | Ist nicht sicher belegt. |
| Irischer Wolfshund | „größte Hunderasse der Welt“ | „gehört zu den größten …, Rüden mindestens 79 cm“ | Die absolute Aussage ist umstritten, die Mindestgröße steht im Standard. |
| Afghanischer Windhund | „jagte … Leoparden“ | „Gazellen, Hasen und anderes Wild“ | Nicht belegbar. |
| Bobtail | „bekannt aus der Werbung für Wandfarbe“ | gestrichen | Bezieht sich auf britische Werbung und ist für Deutschland nicht relevant. |
| Basset Hound | „wiegt bis etwa 35 kg“ | ohne Zahl | Der Standard nennt kein Gewicht. |

**Bewusst so belassen:** Bei Groenendael und Malinois ist der Wikipedia-Link derselbe („Belgischer Schäferhund“), weil beide Schläge einer Rasse sind. Dasselbe gilt für Riesen- und Mittelschnauzer („Schnauzer“).

## Links

7 Links wurden korrigiert:
- 3 zeigten auf Begriffsklärungen: Eurasier, Bloodhound und Mastiff, jeweils jetzt „… (Hunderasse)“.
- 4 zeigten auf Weiterleitungen und zeigen jetzt direkt auf den Zielartikel: English Pointer, Dogue de Bordeaux, Pekingese und Grosser Schweizer Sennenhund.

## Bilder

- 204 Bilder, 4 pro Rasse.
- Gesucht wurde zuerst über die Wikidata-Angabe „zeigt diese Rasse“, danach in der Commons-Kategorie.
- Bei Groenendael, Puli, Pointer und Papillon stimmten die ersten Treffer nicht: Malinois-Fotos, ein Bildhauer-Denkmal, Schmetterlinge und Shih Tzus. Für diese vier wurde in der richtigen Kategorie neu gesucht.
- Das erste Bild jeder Rasse wurde nach dem Verkleinern in einer Gesamtübersicht kontrolliert. Alle zeigen die richtige Rasse.

## Ähnliche Rassen

Bei 24 Basis-Rassen wurden die Verwechslungslisten um ähnliche Rassen aus Stufe 2 ergänzt, zum Beispiel Golden Retriever → Nova Scotia Duck Tolling Retriever und Flat Coated Retriever. Sie werden nur abgefragt, wenn der Umfang „Fortgeschritten“ gewählt ist.
