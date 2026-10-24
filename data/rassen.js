// Rassendaten. Wird als Skript geladen (nicht per fetch), damit die App auch direkt als Datei läuft.
// stufe: 1 = Basis, 2 = Fortgeschritten, 3 = Experte
// fci: FCI-Gruppe (1–10), groesse: klein | mittel | gross | sehr-gross
// auch: alternative Namen/Kurzbezeichnungen; sprache: "en" = Name wird mit englischer Stimme vorgelesen;
// aussprache: Lautschrift für die deutsche Stimme, falls der Name sonst falsch vorgelesen wird
// Bilder stehen in data/bilder.js (erzeugt von tools/apply-images.mjs)

window.FCI_GRUPPEN = {
  1: "Hüte- und Treibhunde",
  2: "Pinscher, Schnauzer, Molosser, Schweizer Sennenhunde",
  3: "Terrier",
  4: "Dachshunde",
  5: "Spitze und Hunde vom Urtyp",
  6: "Laufhunde, Schweißhunde und verwandte Rassen",
  7: "Vorstehhunde",
  8: "Apportier-, Stöber- und Wasserhunde",
  9: "Gesellschafts- und Begleithunde",
  10: "Windhunde"
};

window.RASSEN = [
  {
    id: "deutscher-schaeferhund",
    name: "Deutscher Schäferhund",
    auch: ["Schäferhund","DSH"],
    stufe: 1, fci: 1, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Ende des 19. Jahrhunderts von Max von Stephanitz als vielseitiger Hüte- und Gebrauchshund gezüchtet.",
      "Gilt als intelligent, lernfreudig und belastbar und wird bis heute als Polizei-, Rettungs- und Blindenführhund eingesetzt.",
      "Erkennbar an den aufrechten Stehohren, dem leicht abfallenden Rücken und der typischen schwarz-braunen Färbung mit dunklem Sattel.",
      "Neben dem Stockhaar gibt es auch eine langstockhaarige Variante."
    ],
    verwechslung: ["malinois", "weisser-schweizer-schaeferhund"],
    link: "https://de.wikipedia.org/wiki/Deutscher_Schäferhund",
    bilder: []
  },
  {
    id: "labrador-retriever",
    name: "Labrador Retriever",
    auch: ["Labrador","Labbi"], sprache: "en",
    stufe: 1, fci: 8, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Seine Vorfahren stammen aus Neufundland, die eigentliche Rasse wurde im 19. Jahrhundert in England zum Apportieren von Wild gezüchtet.",
      "Freundlich, verspielt und sehr menschenbezogen – einer der beliebtesten Familienhunde weltweit.",
      "Erkennbar am kurzen, dichten Fell, dem breiten Kopf und dem kräftigen, an der Basis dicken „Otterschwanz“.",
      "Es gibt ihn in drei Farben: Schwarz, Gelb und Braun (Schokolade)."
    ],
    verwechslung: ["golden-retriever", "rhodesian-ridgeback"],
    link: "https://de.wikipedia.org/wiki/Labrador_Retriever",
    bilder: []
  },
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    auch: ["Golden"], sprache: "en",
    stufe: 1, fci: 8, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Im 19. Jahrhundert in Schottland als Apportierhund für die Jagd auf Wasserwild gezüchtet.",
      "Sanftmütig, geduldig und lernwillig – häufig als Familien-, Therapie- und Assistenzhund eingesetzt.",
      "Erkennbar am mittellangen, gewellten oder glatten Fell in Creme- bis Goldtönen mit Befederung an Brust, Beinen und Rute.",
      "Im Unterschied zum Labrador hat er deutlich längeres Fell und eine buschige Rute."
    ],
    verwechslung: ["labrador-retriever", "leonberger", "hovawart"],
    link: "https://de.wikipedia.org/wiki/Golden_Retriever",
    bilder: []
  },
  {
    id: "dackel",
    name: "Dackel",
    auch: ["Dachshund","Teckel"],
    stufe: 1, fci: 4, herkunft: "Deutschland", groesse: "klein",
    info: [
      "Ursprünglich für die Jagd unter der Erde gezüchtet, vor allem auf Dachs und Fuchs – daher der Name Dachshund.",
      "Mutig, selbstbewusst und manchmal eigensinnig; bildet als einzige Rasse eine eigene FCI-Gruppe.",
      "Erkennbar am langen Körper auf sehr kurzen Beinen und den hängenden Ohren.",
      "Es gibt ihn in drei Größen (Standard, Zwerg, Kaninchen) und drei Haararten: Kurzhaar, Rauhaar und Langhaar."
    ],
    verwechslung: ["welsh-corgi-pembroke", "beagle"],
    link: "https://de.wikipedia.org/wiki/Dackel",
    bilder: []
  },
  {
    id: "franzoesische-bulldogge",
    name: "Französische Bulldogge",
    auch: ["Frenchie","Bully"],
    stufe: 1, fci: 9, herkunft: "Frankreich", groesse: "klein",
    info: [
      "Im 19. Jahrhundert in Paris aus kleinen englischen Bulldoggen entstanden und schnell als Begleithund beliebt geworden.",
      "Verspielt, anhänglich und ruhig; braucht wenig Auslauf, verträgt aber Hitze schlecht.",
      "Erkennbar an den großen, aufrechten „Fledermausohren“, dem kompakten muskulösen Körper und der kurzen Schnauze.",
      "Die stark verkürzte Nase kann zu Atemproblemen führen, worauf bei der Zucht zunehmend geachtet wird."
    ],
    verwechslung: ["mops", "englische-bulldogge", "boxer"],
    link: "https://de.wikipedia.org/wiki/Französische_Bulldogge",
    bilder: []
  },
  {
    id: "border-collie",
    name: "Border Collie",
    auch: ["Border"], sprache: "en",
    stufe: 1, fci: 1, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Stammt aus dem Grenzgebiet zwischen Schottland und England und wurde rein auf Hüteleistung bei Schafen gezüchtet.",
      "Gilt als eine der intelligentesten Hunderassen und braucht sehr viel geistige und körperliche Beschäftigung.",
      "Erkennbar am schlanken, wendigen Körper, meist schwarz-weißem Fell und dem typischen geduckten, fixierenden Hüteblick.",
      "Beim Hüten arbeitet er mit dem „Eye“: Er kontrolliert die Herde mit starrem Blick statt mit Bellen."
    ],
    verwechslung: ["australian-shepherd", "collie-langhaar", "shetland-sheepdog"],
    link: "https://de.wikipedia.org/wiki/Border_Collie",
    bilder: []
  },
  {
    id: "australian-shepherd",
    name: "Australian Shepherd",
    auch: ["Aussie"], sprache: "en",
    stufe: 1, fci: 1, herkunft: "USA", groesse: "mittel",
    info: [
      "Trotz des Namens wurde er in den USA als Hütehund auf Ranches entwickelt.",
      "Arbeitsfreudig, ausdauernd und sehr menschenbezogen; ohne Aufgabe wird er schnell unausgelastet.",
      "Erkennbar an der häufigen Merle-Färbung (blau- oder rot-marmoriert), oft hellen oder zweifarbigen Augen und mittellangem Fell.",
      "Viele Aussies werden mit natürlicher Stummelrute geboren."
    ],
    verwechslung: ["border-collie", "shetland-sheepdog"],
    link: "https://de.wikipedia.org/wiki/Australian_Shepherd",
    bilder: []
  },
  {
    id: "chihuahua",
    name: "Chihuahua",
    auch: ["Chi"], aussprache: "Tschiwawa",
    stufe: 1, fci: 9, herkunft: "Mexiko", groesse: "klein",
    info: [
      "Benannt nach dem mexikanischen Bundesstaat Chihuahua und gilt als kleinste Hunderasse der Welt.",
      "Wachsam, selbstbewusst und stark auf seine Bezugsperson fixiert.",
      "Erkennbar am apfelförmigen Kopf, den großen aufrechten Ohren und den großen runden Augen.",
      "Es gibt eine Kurzhaar- und eine Langhaar-Variante."
    ],
    verwechslung: ["zwergspitz", "yorkshire-terrier"],
    link: "https://de.wikipedia.org/wiki/Chihuahua_(Hunderasse)",
    bilder: []
  },
  {
    id: "jack-russell-terrier",
    name: "Jack Russell Terrier",
    auch: ["Jack Russell","JRT"], sprache: "en",
    stufe: 1, fci: 3, herkunft: "Großbritannien / Australien", groesse: "klein",
    info: [
      "Benannt nach dem englischen Pfarrer John „Jack“ Russell, der im 19. Jahrhundert Terrier für die Fuchsjagd züchtete.",
      "Energiegeladen, furchtlos und mit ausgeprägtem Jagdtrieb – kein Hund für Couch-Liebhaber.",
      "Erkennbar am überwiegend weißen Fell mit braunen oder schwarzen Abzeichen und den nach vorn kippenden Ohren.",
      "Die Rasse entstand in England, den heutigen FCI-Standard betreut jedoch Australien. Das Fell kann glatt, rau oder eine Mischform („broken“) sein."
    ],
    verwechslung: ["west-highland-white-terrier", "bullterrier"],
    link: "https://de.wikipedia.org/wiki/Jack_Russell_Terrier",
    bilder: []
  },
  {
    id: "yorkshire-terrier",
    name: "Yorkshire Terrier",
    auch: ["Yorkie"], sprache: "en",
    stufe: 1, fci: 3, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Im 19. Jahrhundert in Nordengland (Yorkshire) ursprünglich zur Rattenjagd gezüchtet.",
      "Trotz seiner geringen Größe ein echter Terrier: mutig, lebhaft und wachsam.",
      "Erkennbar am langen, seidigen, glatt herabfallenden Fell in Stahlblau mit lohfarbenem (goldbraunem) Kopf und Brust.",
      "Das Fell wächst ähnlich wie Menschenhaar und haart kaum, braucht aber viel Pflege."
    ],
    verwechslung: ["shih-tzu", "malteser", "chihuahua"],
    link: "https://de.wikipedia.org/wiki/Yorkshire_Terrier",
    bilder: []
  },
  {
    id: "mops",
    name: "Mops",
    auch: ["Pug"],
    stufe: 1, fci: 9, herkunft: "China", groesse: "klein",
    info: [
      "Eine sehr alte Rasse aus China, die über holländische Händler im 16. Jahrhundert nach Europa kam.",
      "Charmant, gelassen und verschmust – ein klassischer Begleithund.",
      "Erkennbar am faltigen, runden Kopf mit sehr kurzer Schnauze, dunkler Maske und der doppelt geringelten Rute.",
      "Typische Farben sind Beige (Silber oder Apricot) mit schwarzer Maske oder ganz Schwarz."
    ],
    verwechslung: ["franzoesische-bulldogge", "englische-bulldogge"],
    link: "https://de.wikipedia.org/wiki/Mops",
    bilder: []
  },
  {
    id: "berner-sennenhund",
    name: "Berner Sennenhund",
    auch: ["Berner"],
    stufe: 1, fci: 2, herkunft: "Schweiz", groesse: "gross",
    info: [
      "Stammt aus dem Kanton Bern, wo er als Hof-, Wach- und Zughund (z. B. für Milchkarren) eingesetzt wurde.",
      "Gutmütig, ruhig und kinderlieb, dabei aufmerksam gegenüber Fremden.",
      "Erkennbar am langen, dreifarbigen Fell: Schwarz mit rotbraunen Abzeichen und weißer Brust sowie weißer Blesse.",
      "Er ist der einzige langhaarige der vier Schweizer Sennenhunde."
    ],
    verwechslung: ["bernhardiner", "hovawart"],
    link: "https://de.wikipedia.org/wiki/Berner_Sennenhund",
    bilder: []
  },
  {
    id: "boxer",
    name: "Boxer",
    auch: ["Deutscher Boxer"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Ende des 19. Jahrhunderts in München aus dem Bullenbeißer und englischen Bulldoggen gezüchtet.",
      "Verspielt, temperamentvoll und kinderlieb, dabei ein aufmerksamer Wachhund.",
      "Erkennbar am kantigen Kopf mit kurzer, breiter Schnauze, leichtem Vorbiss und dem athletischen, quadratischen Körperbau.",
      "Das kurze Fell ist gelb oder gestromt, oft mit weißen Abzeichen und schwarzer Maske."
    ],
    verwechslung: ["englische-bulldogge", "deutsche-dogge", "rhodesian-ridgeback"],
    link: "https://de.wikipedia.org/wiki/Deutscher_Boxer",
    bilder: []
  },
  {
    id: "rottweiler",
    name: "Rottweiler",
    auch: ["Rotti"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Benannt nach der Stadt Rottweil, wo er von Metzgern als Treib- und Schutzhund für Viehherden genutzt wurde.",
      "Selbstsicher, ruhig und schutzbereit; braucht eine konsequente, erfahrene Führung.",
      "Erkennbar am kräftigen, muskulösen Körper und dem schwarzen Kurzhaar mit klar abgegrenzten rotbraunen Abzeichen an Wangen, Brust und Beinen.",
      "Heute wird er vor allem als Dienst-, Schutz- und Familienhund gehalten."
    ],
    verwechslung: ["dobermann", "berner-sennenhund"],
    link: "https://de.wikipedia.org/wiki/Rottweiler",
    bilder: []
  },
  {
    id: "dobermann",
    name: "Dobermann",
    auch: ["Dobi"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Benannt nach Friedrich Louis Dobermann aus Apolda (Thüringen), der um 1880 einen wehrhaften Begleithund züchtete.",
      "Aufmerksam, intelligent und sehr bindungsstark – bekannt als Schutz- und Polizeihund.",
      "Erkennbar am eleganten, schlanken und muskulösen Körper und dem kurzen schwarzen oder braunen Fell mit rostroten Abzeichen.",
      "Im Vergleich zum Rottweiler ist er deutlich schlanker und hochbeiniger."
    ],
    verwechslung: ["rottweiler", "deutsche-dogge"],
    link: "https://de.wikipedia.org/wiki/Dobermann",
    bilder: []
  },
  {
    id: "siberian-husky",
    name: "Siberian Husky",
    auch: ["Husky"], sprache: "en",
    stufe: 1, fci: 5, herkunft: "USA", groesse: "mittel",
    info: [
      "Geht auf die Schlittenhunde der Tschuktschen in Sibirien zurück; als Rasse wurde er in den USA (Alaska) weiterentwickelt.",
      "Freundlich, ausdauernd und freiheitsliebend; braucht viel Bewegung und neigt zum Streunen.",
      "Erkennbar an der maskenartigen Gesichtszeichnung, den aufrechten dreieckigen Ohren und oft eisblauen oder verschiedenfarbigen Augen.",
      "Er ist leichter und schneller gebaut als der kräftigere Alaskan Malamute."
    ],
    verwechslung: ["alaskan-malamute", "samojede", "akita-inu"],
    link: "https://de.wikipedia.org/wiki/Siberian_Husky",
    bilder: []
  },
  {
    id: "beagle",
    name: "Beagle",
    auch: [], sprache: "en",
    stufe: 1, fci: 6, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "In England als Meutehund für die Jagd auf Hasen und Kaninchen gezüchtet.",
      "Fröhlich, verträglich und neugierig, aber mit starkem Jagdtrieb und feiner Nase.",
      "Erkennbar an den langen Schlappohren, dem dreifarbigen Kurzhaar (Weiß, Schwarz, Braun) und der stets weißen Rutenspitze.",
      "Seine Stimme ist ein typisches, lautes Geläut."
    ],
    verwechslung: ["jack-russell-terrier", "dackel"],
    link: "https://de.wikipedia.org/wiki/Beagle_(Hunderasse)",
    bilder: []
  },
  {
    id: "pudel",
    name: "Pudel",
    auch: ["Caniche"],
    stufe: 1, fci: 9, herkunft: "Frankreich (umstritten: Deutschland)", groesse: "mittel",
    info: [
      "Ursprünglich ein Wasser- und Apportierhund; der Name kommt vom alten Wort „pudeln“ für im Wasser plantschen.",
      "Sehr intelligent, lernfreudig und gelehrig – lange beliebt bei Zirkus und Hundesport.",
      "Erkennbar am dichten, krausen Lockenfell, das nicht haart, und dem langen schmalen Kopf.",
      "Es gibt ihn in vier Größen: Groß-, Klein-, Zwerg- und Toypudel."
    ],
    verwechslung: ["bichon-frise", "malteser"],
    link: "https://de.wikipedia.org/wiki/Pudel",
    bilder: []
  },
  {
    id: "malteser",
    name: "Malteser",
    auch: ["Bichon Maltais"],
    stufe: 1, fci: 9, herkunft: "Mittelmeerraum (Italien)", groesse: "klein",
    info: [
      "Einer der ältesten europäischen Schoßhunde, schon in der Antike im Mittelmeerraum bekannt.",
      "Verspielt, anhänglich und lebhaft – ein typischer Begleithund.",
      "Erkennbar am langen, seidigen, reinweißen Fell ohne Unterwolle und den dunklen Augen und Nase.",
      "Im Unterschied zum Bichon Frisé ist das Fell glatt statt lockig."
    ],
    verwechslung: ["bichon-frise", "havaneser", "shih-tzu"],
    link: "https://de.wikipedia.org/wiki/Malteser_(Hunderasse)",
    bilder: []
  },
  {
    id: "havaneser",
    name: "Havaneser",
    auch: ["Bichon Havanais"],
    stufe: 1, fci: 9, herkunft: "Kuba", groesse: "klein",
    info: [
      "Benannt nach Havanna; die Rasse wurde in Kuba als Begleithund der Oberschicht entwickelt.",
      "Fröhlich, verspielt und anpassungsfähig – ein unkomplizierter Familienhund.",
      "Erkennbar am langen, weichen und leicht gewellten Fell, das in vielen Farben vorkommt, und der über den Rücken getragenen Rute.",
      "Gehört zur Familie der Bichons, wie Malteser und Bichon Frisé."
    ],
    verwechslung: ["malteser", "bichon-frise", "shih-tzu"],
    link: "https://de.wikipedia.org/wiki/Havaneser",
    bilder: []
  },
  {
    id: "shih-tzu",
    name: "Shih Tzu",
    auch: ["Löwenhund"], aussprache: "Schitzu",
    stufe: 1, fci: 9, herkunft: "Tibet / China", groesse: "klein",
    info: [
      "Stammt aus Tibet und war ein beliebter Palasthund am chinesischen Kaiserhof; der Name bedeutet „Löwenhund“.",
      "Freundlich, selbstbewusst und ruhig.",
      "Erkennbar am sehr langen, dichten Fell, das im Gesicht wie eine Chrysantheme wächst, und der kurzen Schnauze.",
      "Oft wird das Kopfhaar zu einem Zopf hochgebunden."
    ],
    verwechslung: ["havaneser", "malteser", "yorkshire-terrier"],
    link: "https://de.wikipedia.org/wiki/Shih_Tzu",
    bilder: []
  },
  {
    id: "cavalier-king-charles-spaniel",
    name: "Cavalier King Charles Spaniel",
    auch: ["Cavalier"], sprache: "en",
    stufe: 1, fci: 9, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Benannt nach König Karl II. von England, der kleine Spaniels liebte.",
      "Sanft, freundlich und anpassungsfähig – ein klassischer Familien- und Begleithund.",
      "Erkennbar an den langen, gefederten Schlappohren, den großen runden Augen und dem seidigen Fell.",
      "Es gibt vier Farben: Blenheim (Weiß-Rot), Tricolour, Black and Tan und Ruby (Rot)."
    ],
    verwechslung: ["cocker-spaniel", "havaneser"],
    link: "https://de.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel",
    bilder: []
  },
  {
    id: "zwergspitz",
    name: "Zwergspitz",
    auch: ["Pomeranian","Pom"],
    stufe: 1, fci: 5, herkunft: "Deutschland", groesse: "klein",
    info: [
      "Die kleinste Variante des Deutschen Spitzes; der englische Name Pomeranian verweist auf die Region Pommern.",
      "Lebhaft, wachsam und gelehrig, dabei durchaus bellfreudig.",
      "Erkennbar am üppigen, abstehenden Fell mit Halskrause, den kleinen spitzen Ohren und der über den Rücken gerollten Rute.",
      "Durch das Fell wirkt er wie ein kleiner Fellball."
    ],
    verwechslung: ["chihuahua", "samojede"],
    link: "https://de.wikipedia.org/wiki/Deutsche_Spitze",
    bilder: []
  },
  {
    id: "deutsch-drahthaar",
    name: "Deutsch Drahthaar",
    auch: ["DD","Drahthaar"],
    stufe: 1, fci: 7, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Ende des 19. Jahrhunderts als vielseitiger Jagdgebrauchshund für Feld, Wald und Wasser gezüchtet.",
      "Ausdauernd, robust und arbeitsfreudig; wird fast ausschließlich von Jägern geführt.",
      "Erkennbar am harten, drahtigen Fell mit ausgeprägtem Bart und buschigen Augenbrauen, meist braun-schimmel.",
      "Das wetterfeste Fell schützt ihn bei der Arbeit im Dickicht und im kalten Wasser."
    ],
    verwechslung: ["magyar-vizsla", "weimaraner"],
    link: "https://de.wikipedia.org/wiki/Deutsch_Drahthaar",
    bilder: []
  },
  {
    id: "weimaraner",
    name: "Weimaraner",
    auch: ["Weimi"],
    stufe: 1, fci: 7, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Am Hof von Weimar als Jagdhund gezüchtet und eine der ältesten deutschen Vorstehhunderassen.",
      "Temperamentvoll, sehr bindungsstark und jagdlich passioniert.",
      "Erkennbar am einfarbig silber-, reh- oder mausgrauen Fell und den hellen, bernsteinfarbenen Augen (bei Welpen himmelblau).",
      "Neben dem verbreiteten Kurzhaar gibt es auch eine Langhaar-Variante."
    ],
    verwechslung: ["magyar-vizsla", "dobermann", "deutsche-dogge"],
    link: "https://de.wikipedia.org/wiki/Weimaraner",
    bilder: []
  },
  {
    id: "magyar-vizsla",
    name: "Magyar Vizsla",
    auch: ["Vizsla","Kurzhaariger Ungarischer Vorstehhund"], aussprache: "Madjar Wischla",
    stufe: 1, fci: 7, herkunft: "Ungarn", groesse: "gross",
    info: [
      "Der ungarische Vorstehhund wurde für die Jagd in der Steppe Ungarns gezüchtet.",
      "Sehr anhänglich und sensibel, gleichzeitig ausdauernd und bewegungsfreudig.",
      "Erkennbar am kurzen, semmelgelben bis rotgoldenen Fell; Nase, Lefzen und Krallen sind braun und passen farblich zum Fell.",
      "Es gibt auch einen drahthaarigen Vizsla."
    ],
    verwechslung: ["weimaraner", "rhodesian-ridgeback", "labrador-retriever"],
    link: "https://de.wikipedia.org/wiki/Kurzhaariger_Ungarischer_Vorstehhund",
    bilder: []
  },
  {
    id: "englische-bulldogge",
    name: "Englische Bulldogge",
    auch: ["English Bulldog","Bulldog"],
    stufe: 1, fci: 2, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Ursprünglich für das grausame Bullbaiting (Kämpfe gegen Bullen) gezüchtet, das 1835 in England verboten wurde.",
      "Heute ein gutmütiger, ruhiger und eher gemütlicher Begleithund.",
      "Erkennbar am breiten, massigen Körper, dem großen Kopf mit vielen Falten, der sehr kurzen Schnauze und dem ausgeprägten Unterbiss.",
      "Sie gilt als Nationalsymbol Großbritanniens."
    ],
    verwechslung: ["franzoesische-bulldogge", "mops", "boxer"],
    link: "https://de.wikipedia.org/wiki/Englische_Bulldogge",
    bilder: []
  },
  {
    id: "cocker-spaniel",
    name: "English Cocker Spaniel",
    auch: ["Cocker","Englischer Cockerspaniel"], sprache: "en",
    stufe: 1, fci: 8, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "In England als Stöberhund für die Jagd auf Waldschnepfen (englisch „woodcock“) gezüchtet.",
      "Fröhlich, lebhaft und anhänglich, mit sprichwörtlich wedelnder Rute.",
      "Erkennbar an den langen, tief angesetzten und stark befederten Schlappohren und dem seidigen Fell.",
      "Häufige Farben sind Rot, Schwarz und verschiedene Schimmel."
    ],
    verwechslung: ["cavalier-king-charles-spaniel", "golden-retriever"],
    link: "https://de.wikipedia.org/wiki/English_Cocker_Spaniel",
    bilder: []
  },
  {
    id: "west-highland-white-terrier",
    name: "West Highland White Terrier",
    auch: ["Westie"], sprache: "en",
    stufe: 1, fci: 3, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Stammt aus dem schottischen Hochland und wurde für die Jagd auf Fuchs und Dachs gezüchtet.",
      "Selbstbewusst, fröhlich und mutig – ein echter Terrier im kleinen Format.",
      "Erkennbar am reinweißen, harten Fell, dem rundlich getrimmten Kopf und den kleinen spitzen Stehohren.",
      "Das weiße Fell sollte verhindern, dass er bei der Jagd mit dem Fuchs verwechselt wird."
    ],
    verwechslung: ["malteser", "bichon-frise", "jack-russell-terrier"],
    link: "https://de.wikipedia.org/wiki/West_Highland_White_Terrier",
    bilder: []
  },
  {
    id: "dalmatiner",
    name: "Dalmatiner",
    auch: ["Dalmatian"],
    stufe: 1, fci: 6, herkunft: "Kroatien", groesse: "gross",
    info: [
      "Benannt nach der Region Dalmatien in Kroatien; in England begleitete er früher Kutschen als Laufhund.",
      "Ausdauernd, lebhaft und freundlich mit hohem Bewegungsbedarf.",
      "Unverwechselbar durch das weiße Kurzhaarfell mit schwarzen oder braunen Tupfen.",
      "Welpen kommen fast rein weiß zur Welt, die Punkte bilden sich erst in den ersten Wochen."
    ],
    verwechslung: ["deutsche-dogge", "bullterrier"],
    link: "https://de.wikipedia.org/wiki/Dalmatiner",
    bilder: []
  },
  {
    id: "weisser-schweizer-schaeferhund",
    name: "Weißer Schweizer Schäferhund",
    auch: ["Berger Blanc Suisse","Weißer Schäferhund"],
    stufe: 1, fci: 1, herkunft: "Schweiz", groesse: "gross",
    info: [
      "Geht auf weiße Schäferhunde aus Deutschland, den USA und Kanada zurück; die Rasse wurde in der Schweiz anerkannt.",
      "Sanft, aufmerksam und lernfreudig – sensibler als viele Gebrauchshunde.",
      "Erkennbar am reinweißen Fell und der schäferhundtypischen Gestalt mit großen Stehohren.",
      "Im Gegensatz zum Deutschen Schäferhund hat er einen geraden Rücken."
    ],
    verwechslung: ["deutscher-schaeferhund", "samojede"],
    link: "https://de.wikipedia.org/wiki/Berger_Blanc_Suisse",
    bilder: []
  },
  {
    id: "malinois",
    name: "Malinois",
    auch: ["Belgischer Schäferhund","Mali"], aussprache: "Malinoa",
    stufe: 1, fci: 1, herkunft: "Belgien", groesse: "gross",
    info: [
      "Benannt nach der belgischen Stadt Mechelen (französisch Malines); einer von vier Schlägen des Belgischen Schäferhundes.",
      "Extrem arbeitsfreudig, schnell und reaktionsstark – weltweit als Polizei- und Militärhund gefragt.",
      "Erkennbar am kurzen, falbfarbenen (rehbraunen) Fell mit schwarzer Maske und schwarzen Ohren.",
      "Er ist leichter und quadratischer gebaut als der Deutsche Schäferhund."
    ],
    verwechslung: ["deutscher-schaeferhund"],
    link: "https://de.wikipedia.org/wiki/Belgischer_Schäferhund",
    bilder: []
  },
  {
    id: "bernhardiner",
    name: "Bernhardiner",
    auch: ["St. Bernhardshund"],
    stufe: 1, fci: 2, herkunft: "Schweiz", groesse: "sehr-gross",
    info: [
      "Benannt nach dem Hospiz am Großen Sankt Bernhard, wo Mönche ihn zur Rettung von Reisenden im Schnee einsetzten.",
      "Gutmütig, ruhig und freundlich – ein sanfter Riese.",
      "Erkennbar am mächtigen Körper, dem massigen Kopf und dem weißen Fell mit roten bis rotbraunen Platten.",
      "Der berühmteste Bernhardiner, „Barry“, soll über 40 Menschen das Leben gerettet haben."
    ],
    verwechslung: ["berner-sennenhund", "neufundlaender", "leonberger"],
    link: "https://de.wikipedia.org/wiki/Bernhardiner",
    bilder: []
  },
  {
    id: "neufundlaender",
    name: "Neufundländer",
    auch: ["Neufi","Newfie"],
    stufe: 1, fci: 2, herkunft: "Kanada", groesse: "sehr-gross",
    info: [
      "Stammt von der kanadischen Insel Neufundland, wo er Fischern beim Ziehen von Netzen half.",
      "Sanftmütig, geduldig und ein hervorragender Schwimmer – wird als Wasserrettungshund ausgebildet.",
      "Erkennbar am massigen Körper und dem dichten, wasserabweisenden Fell, meist schwarz, seltener braun oder schwarz-weiß.",
      "Zwischen den Zehen hat er Schwimmhäute."
    ],
    verwechslung: ["leonberger", "bernhardiner", "hovawart"],
    link: "https://de.wikipedia.org/wiki/Neufundländer",
    bilder: []
  },
  {
    id: "deutsche-dogge",
    name: "Deutsche Dogge",
    auch: ["Dogge","Great Dane"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "sehr-gross",
    info: [
      "Geht auf große Hatz- und Saupacker zurück, die früher zur Wildschweinjagd eingesetzt wurden.",
      "Freundlich, anhänglich und ruhig – trotz ihrer Größe sensibel.",
      "Erkennbar an der enormen Größe, dem eleganten Körperbau und dem langen, kantigen Kopf.",
      "Farben sind unter anderem Gelb, Gestromt, Schwarz, Blau und Gefleckt (Harlekin)."
    ],
    verwechslung: ["boxer", "dobermann", "dalmatiner"],
    link: "https://de.wikipedia.org/wiki/Deutsche_Dogge",
    bilder: []
  },
  {
    id: "hovawart",
    name: "Hovawart",
    auch: ["Hovi"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Der Name bedeutet „Hofwächter“; die Rasse wurde im 20. Jahrhundert nach mittelalterlichen Vorbildern neu aufgebaut.",
      "Wachsam, selbstbewusst und loyal mit natürlichem Schutztrieb.",
      "Erkennbar am langen, leicht gewellten Fell in den Farben Schwarz, Schwarzmarken (Schwarz mit Blond) oder Blond.",
      "Er gilt als Spätentwickler und ist erst mit etwa zwei bis drei Jahren ganz erwachsen."
    ],
    verwechslung: ["golden-retriever", "berner-sennenhund", "leonberger"],
    link: "https://de.wikipedia.org/wiki/Hovawart",
    bilder: []
  },
  {
    id: "leonberger",
    name: "Leonberger",
    auch: ["Leo"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "sehr-gross",
    info: [
      "Um 1840 in Leonberg bei Stuttgart gezüchtet – angeblich sollte er dem Löwen im Stadtwappen ähneln.",
      "Ausgeglichen, freundlich und familienfreundlich.",
      "Erkennbar an der Größe, der löwenähnlichen Mähne und dem gelb- bis rotbraunen Fell mit schwarzer Maske.",
      "Er schwimmt gern und wird teils als Wasserrettungshund eingesetzt."
    ],
    verwechslung: ["neufundlaender", "hovawart", "bernhardiner"],
    link: "https://de.wikipedia.org/wiki/Leonberger",
    bilder: []
  },
  {
    id: "collie-langhaar",
    name: "Collie (Langhaar)",
    auch: ["Langhaarcollie","Rough Collie","„Lassie-Hund“"],
    stufe: 1, fci: 1, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Stammt aus dem schottischen Hochland und wurde als Hütehund für Schafe eingesetzt.",
      "Weltberühmt durch die Filme und Serien um „Lassie“; gilt als sanft, sensibel und intelligent.",
      "Erkennbar am langen, üppigen Fell mit großer Halskrause, dem schmalen keilförmigen Kopf und den halb aufgerichteten Kippohren.",
      "Er sieht aus wie eine große Version des Shetland Sheepdogs, ist aber eine eigene Rasse."
    ],
    verwechslung: ["shetland-sheepdog", "border-collie"],
    link: "https://de.wikipedia.org/wiki/Collie_(Hunderasse)",
    bilder: []
  },
  {
    id: "shetland-sheepdog",
    name: "Shetland Sheepdog",
    auch: ["Sheltie"], sprache: "en",
    stufe: 1, fci: 1, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Stammt von den Shetlandinseln, wo er kleine Schafe und Ponys hütete.",
      "Aufmerksam, sanft und sehr gelehrig – im Agility-Sport sehr erfolgreich.",
      "Erkennbar am langen Fell mit Mähne, dem feinen Kopf und den Kippohren; er wirkt wie ein Collie im Kleinformat.",
      "Typische Farben sind Zobel, Tricolour und Blue Merle."
    ],
    verwechslung: ["collie-langhaar", "border-collie", "australian-shepherd"],
    link: "https://de.wikipedia.org/wiki/Shetland_Sheepdog",
    bilder: []
  },
  {
    id: "welsh-corgi-pembroke",
    name: "Welsh Corgi Pembroke",
    auch: ["Corgi"], sprache: "en",
    stufe: 1, fci: 1, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Stammt aus Pembrokeshire in Wales und trieb Rinder, indem er ihnen in die Fersen zwickte.",
      "Fröhlich, aktiv und selbstbewusst; berühmt als Lieblingsrasse von Königin Elisabeth II.",
      "Erkennbar am langen Körper auf kurzen Beinen, dem fuchsähnlichen Kopf mit großen Stehohren und oft kurzer Rute.",
      "Der verwandte Cardigan Corgi hat im Unterschied dazu eine lange Rute."
    ],
    verwechslung: ["dackel", "shiba-inu"],
    link: "https://de.wikipedia.org/wiki/Welsh_Corgi_Pembroke",
    bilder: []
  },
  {
    id: "bichon-frise",
    name: "Bichon Frisé",
    auch: ["Bichon"], aussprache: "Bischong Frisee",
    stufe: 1, fci: 9, herkunft: "Belgien / Frankreich", groesse: "klein",
    info: [
      "Ein Abkömmling alter Mittelmeer-Schoßhunde, der im 16. Jahrhundert an französischen Höfen beliebt war.",
      "Fröhlich, verspielt und sehr menschenfreundlich.",
      "Erkennbar am weißen, lockigen und flauschigen Fell, das oft rund wie eine Wattewolke geschnitten wird.",
      "„Frisé“ ist französisch und bedeutet „gelockt“."
    ],
    verwechslung: ["malteser", "pudel", "havaneser"],
    link: "https://de.wikipedia.org/wiki/Bichon_Frisé",
    bilder: []
  },
  {
    id: "zwergschnauzer",
    name: "Zwergschnauzer",
    auch: ["Schnauzer"],
    stufe: 1, fci: 2, herkunft: "Deutschland", groesse: "klein",
    info: [
      "Die kleinste der drei Schnauzer-Rassen, ursprünglich als Rattenfänger auf Bauernhöfen gehalten.",
      "Wachsam, lebhaft und robust – ein vielseitiger Familienhund.",
      "Erkennbar am kantigen Kopf mit Bart und buschigen Augenbrauen und dem harten, drahtigen Fell.",
      "Farben sind Pfeffer-Salz, Schwarz, Schwarz-Silber und Weiß."
    ],
    verwechslung: ["west-highland-white-terrier", "yorkshire-terrier"],
    link: "https://de.wikipedia.org/wiki/Schnauzer",
    bilder: []
  },
  {
    id: "akita-inu",
    name: "Akita Inu",
    auch: ["Akita"],
    stufe: 1, fci: 5, herkunft: "Japan", groesse: "gross",
    info: [
      "Stammt aus der Präfektur Akita in Japan und wurde dort als Jagd- und Wachhund gehalten.",
      "Würdevoll, ruhig und eigenständig mit großer Treue zu seiner Familie.",
      "Erkennbar am kräftigen Körper, dem breiten Kopf mit kleinen dreieckigen Stehohren und der über den Rücken geringelten Rute.",
      "Berühmt ist der Akita Hachikō, der jahrelang am Bahnhof auf sein verstorbenes Herrchen wartete."
    ],
    verwechslung: ["shiba-inu", "siberian-husky"],
    link: "https://de.wikipedia.org/wiki/Akita_(Hunderasse)",
    bilder: []
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    auch: ["Shiba"],
    stufe: 1, fci: 5, herkunft: "Japan", groesse: "klein",
    info: [
      "Die kleinste und älteste der japanischen Hunderassen, ursprünglich zur Jagd in bergigem Gelände eingesetzt.",
      "Unabhängig, reinlich und eigensinnig – oft als „katzenähnlich“ beschrieben.",
      "Erkennbar am fuchsartigen Aussehen mit meist rotem Fell, hellen Abzeichen (Urajiro) und der geringelten Rute.",
      "Er sieht aus wie eine kleine Ausgabe des Akita Inu."
    ],
    verwechslung: ["akita-inu", "welsh-corgi-pembroke"],
    link: "https://de.wikipedia.org/wiki/Shiba",
    bilder: []
  },
  {
    id: "samojede",
    name: "Samojede",
    auch: ["Samoyed","Sammy"],
    stufe: 1, fci: 5, herkunft: "Russland (Sibirien)", groesse: "mittel",
    info: [
      "Benannt nach den samojedischen Völkern Sibiriens (z. B. den Nenzen), die ihn zum Hüten von Rentieren und als Zughund nutzten.",
      "Freundlich, gesellig und kommunikativ – als Wachhund eher ungeeignet.",
      "Erkennbar am dichten, reinweißen bis cremefarbenen Fell und dem typischen „Samojeden-Lächeln“ mit hochgezogenen Mundwinkeln.",
      "Die Rute trägt er über den Rücken gerollt."
    ],
    verwechslung: ["weisser-schweizer-schaeferhund", "zwergspitz", "siberian-husky"],
    link: "https://de.wikipedia.org/wiki/Samojede_(Hunderasse)",
    bilder: []
  },
  {
    id: "alaskan-malamute",
    name: "Alaskan Malamute",
    auch: ["Malamute"], sprache: "en",
    stufe: 1, fci: 5, herkunft: "USA (Alaska)", groesse: "gross",
    info: [
      "Benannt nach dem Inuit-Volk der Mahlemiut in Alaska, die ihn als Lastschlittenhund nutzten.",
      "Freundlich, kraftvoll und eigenständig; für schwere Lasten statt für Geschwindigkeit gezüchtet.",
      "Erkennbar am massigen Körper, dem dichten grau-, schwarz- oder rot-weißen Fell und der buschigen, über den Rücken getragenen Rute.",
      "Seine Augen sind immer braun – blaue Augen deuten eher auf einen Husky hin."
    ],
    verwechslung: ["siberian-husky", "samojede"],
    link: "https://de.wikipedia.org/wiki/Alaskan_Malamute",
    bilder: []
  },
  {
    id: "whippet",
    name: "Whippet",
    auch: [], sprache: "en",
    stufe: 1, fci: 10, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Im 19. Jahrhundert in Nordengland für Hunderennen und die Kaninchenjagd gezüchtet.",
      "Im Haus sanft und ruhig, draußen ein blitzschneller Sprinter.",
      "Erkennbar am schlanken, muskulösen Körper mit tiefer Brust, schmaler Taille und dem kurzen, feinen Fell.",
      "Er sieht aus wie ein kleiner Greyhound."
    ],
    verwechslung: ["greyhound"],
    link: "https://de.wikipedia.org/wiki/Whippet_(Hunderasse)",
    bilder: []
  },
  {
    id: "greyhound",
    name: "Greyhound",
    auch: ["Englischer Windhund"], sprache: "en",
    stufe: 1, fci: 10, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Eine der ältesten Windhundrassen, in England für die Hetzjagd und später für Hunderennen gezüchtet.",
      "Mit bis zu rund 70 km/h einer der schnellsten Hunde der Welt, im Alltag aber ruhig und anhänglich.",
      "Erkennbar am hohen, sehr schlanken Körper mit tiefer Brust, langem schmalem Kopf und zurückgelegten Rosenohren.",
      "Ausgemusterte Rennhunde werden oft über Tierschutzvereine vermittelt."
    ],
    verwechslung: ["whippet", "dobermann"],
    link: "https://de.wikipedia.org/wiki/Greyhound_(Hunderasse)",
    bilder: []
  },
  {
    id: "rhodesian-ridgeback",
    name: "Rhodesian Ridgeback",
    auch: ["Ridgeback","RR"], sprache: "en",
    stufe: 1, fci: 6, herkunft: "Südliches Afrika", groesse: "gross",
    info: [
      "Im südlichen Afrika (ehemals Rhodesien, heute Simbabwe) als Jagd- und Wachhund gezüchtet.",
      "Selbstbewusst, ruhig und sensibel, dabei unabhängig im Charakter.",
      "Erkennbar am „Ridge“: einem Haarkamm auf dem Rücken, bei dem das Fell entgegen der übrigen Wuchsrichtung wächst.",
      "Das kurze Fell ist weizenfarben, von hell bis rotweizen."
    ],
    verwechslung: ["magyar-vizsla", "labrador-retriever", "boxer"],
    link: "https://de.wikipedia.org/wiki/Rhodesian_Ridgeback",
    bilder: []
  },
  {
    id: "bullterrier",
    name: "Bullterrier",
    auch: ["Bull Terrier","English Bull Terrier"],
    stufe: 1, fci: 3, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Im 19. Jahrhundert in England aus Bulldoggen und Terriern gezüchtet.",
      "Verspielt, mutig und anhänglich, dabei ziemlich dickköpfig.",
      "Unverwechselbar durch den eiförmigen Kopf ohne Stirnabsatz und die kleinen, dreieckigen Augen.",
      "Häufig ist er weiß, es gibt ihn aber auch farbig; zusätzlich gibt es eine Miniatur-Variante."
    ],
    verwechslung: ["dalmatiner", "jack-russell-terrier", "boxer"],
    link: "https://de.wikipedia.org/wiki/Bullterrier",
    bilder: []
  }
];
