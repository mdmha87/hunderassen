// Stufe 2 (Fortgeschritten): 50 weitere Rassen. Aufbau wie in data/rassen.js.

window.RASSEN.push(
  {
    id: "parson-russell-terrier",
    name: "Parson Russell Terrier",
    auch: ["Parson"], sprache: "en",
    stufe: 2, fci: 3, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Geht wie der Jack Russell auf die Terrier des Pfarrers John Russell zurück, die Pferden bei der Fuchsjagd folgen konnten.",
      "Lebhaft, ausdauernd und mutig, mit starkem Jagdtrieb.",
      "Erkennbar am überwiegend weißen Fell mit Abzeichen und dem quadratischen, hochläufigen Körperbau.",
      "Im Unterschied zum Jack Russell Terrier hat er längere Beine: Körper und Beine wirken etwa gleich lang."
    ],
    verwechslung: ["jack-russell-terrier", "border-terrier"],
    link: "https://de.wikipedia.org/wiki/Parson_Russell_Terrier",
    bilder: []
  },
  {
    id: "staffordshire-bullterrier",
    name: "Staffordshire Bullterrier",
    auch: ["Staffy", "Staffie"],
    stufe: 2, fci: 3, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Im 19. Jahrhundert in der englischen Grafschaft Staffordshire aus Bulldoggen und Terriern entstanden.",
      "Gilt als sehr menschenfreundlich, verspielt und kinderlieb; in Großbritannien ein verbreiteter Familienhund.",
      "Erkennbar am kompakten, sehr muskulösen Körper, dem breiten Kopf mit ausgeprägten Wangenmuskeln und den kleinen Rosenohren.",
      "Er ist deutlich kleiner und leichter als der American Staffordshire Terrier."
    ],
    verwechslung: ["american-staffordshire-terrier", "boxer", "bullterrier"],
    link: "https://de.wikipedia.org/wiki/Staffordshire_Bullterrier",
    bilder: []
  },
  {
    id: "american-staffordshire-terrier",
    name: "American Staffordshire Terrier",
    auch: ["AmStaff"], sprache: "en",
    stufe: 2, fci: 3, herkunft: "USA", groesse: "mittel",
    info: [
      "In den USA aus Bulldoggen-Terrier-Kreuzungen gezüchtet, die mit Auswanderern aus England kamen.",
      "Selbstsicher, menschenbezogen und kraftvoll; in mehreren deutschen Bundesländern als Listenhund eingestuft.",
      "Erkennbar am sehr muskulösen, kräftigen Körper, dem breiten Schädel und dem kurzen, glatten Fell in vielen Farben.",
      "Er ist größer und schwerer als der Staffordshire Bullterrier."
    ],
    verwechslung: ["staffordshire-bullterrier", "boxer"],
    link: "https://de.wikipedia.org/wiki/American_Staffordshire_Terrier",
    bilder: []
  },
  {
    id: "airedale-terrier",
    name: "Airedale Terrier",
    auch: ["Airedale", "König der Terrier"], sprache: "en",
    stufe: 2, fci: 3, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Stammt aus dem Tal des Flusses Aire in Yorkshire und wurde für die Jagd auf Otter und Ratten gezüchtet.",
      "Der größte Terrier wird „König der Terrier“ genannt und war früher auch Polizei- und Sanitätshund.",
      "Erkennbar am drahtigen Fell mit schwarzem oder grauem Sattel und lohfarbenem Kopf und Beinen sowie dem langen Kopf mit Bart.",
      "Er wirkt wie eine große Ausgabe des Welsh Terriers."
    ],
    verwechslung: ["riesenschnauzer", "deutsch-drahthaar"],
    link: "https://de.wikipedia.org/wiki/Airedale_Terrier",
    bilder: []
  },
  {
    id: "scottish-terrier",
    name: "Scottish Terrier",
    auch: ["Scottie"], sprache: "en",
    stufe: 2, fci: 3, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Stammt aus dem schottischen Hochland und wurde für die Jagd auf Fuchs und Dachs im Bau gezüchtet.",
      "Selbstbewusst, eigenständig und würdevoll – gilt als eher reserviert gegenüber Fremden.",
      "Erkennbar am kurzbeinigen, kompakten Körper, dem langen Kopf mit Bart und Augenbrauen und meist schwarzem, hartem Fell.",
      "Er ist das Maskottchen eines bekannten schottischen Whiskys, zusammen mit einem Westie."
    ],
    verwechslung: ["cairn-terrier", "zwergschnauzer", "west-highland-white-terrier"],
    link: "https://de.wikipedia.org/wiki/Scottish_Terrier",
    bilder: []
  },
  {
    id: "cairn-terrier",
    name: "Cairn Terrier",
    auch: ["Cairn"], sprache: "en",
    stufe: 2, fci: 3, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Benannt nach den schottischen „Cairns“, Steinhaufen, in denen er Füchse und Ratten aufspürte.",
      "Fröhlich, neugierig und robust, mit typischem Terrier-Mut.",
      "Erkennbar am zerzausten, wetterfesten Fell in Creme-, Rot-, Grau- oder Gestromt-Tönen, dem kurzen Kopf und kleinen Stehohren.",
      "Berühmt ist die Hündin „Toto“ aus dem Film „Der Zauberer von Oz“."
    ],
    verwechslung: ["west-highland-white-terrier", "border-terrier", "scottish-terrier"],
    link: "https://de.wikipedia.org/wiki/Cairn_Terrier",
    bilder: []
  },
  {
    id: "border-terrier",
    name: "Border Terrier",
    auch: [], sprache: "en",
    stufe: 2, fci: 3, herkunft: "Großbritannien", groesse: "klein",
    info: [
      "Stammt aus dem Grenzgebiet zwischen England und Schottland und lief bei der Fuchsjagd mit den Pferden mit.",
      "Freundlich, unkompliziert und anpassungsfähig – einer der verträglichsten Terrier.",
      "Erkennbar am „Otterkopf“: breiter Schädel mit kurzer Schnauze, kleine Kippohren und drahtiges Fell in Rot, Weizen oder Grau mit Loh.",
      "Er wirkt schlichter und naturbelassener als die meisten anderen Terrier."
    ],
    verwechslung: ["cairn-terrier", "parson-russell-terrier"],
    link: "https://de.wikipedia.org/wiki/Border_Terrier",
    bilder: []
  },
  {
    id: "boston-terrier",
    name: "Boston Terrier",
    auch: ["Boston"], sprache: "en",
    stufe: 2, fci: 9, herkunft: "USA", groesse: "klein",
    info: [
      "Ende des 19. Jahrhunderts in Boston aus Bulldoggen und Terriern entstanden; trotz des Namens ein Begleithund.",
      "Freundlich, lebhaft und anhänglich – in den USA „American Gentleman“ genannt.",
      "Erkennbar am schwarz-weißen „Smoking“-Fell, dem quadratischen Kopf mit kurzer Schnauze und großen, aufrechten Ohren.",
      "Im Unterschied zur Französischen Bulldogge ist er schlanker, hochbeiniger und immer weiß gezeichnet."
    ],
    verwechslung: ["franzoesische-bulldogge", "mops"],
    link: "https://de.wikipedia.org/wiki/Boston_Terrier",
    bilder: []
  },
  {
    id: "riesenschnauzer",
    name: "Riesenschnauzer",
    auch: ["Riese"],
    stufe: 2, fci: 2, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Die größte der drei Schnauzer-Rassen; er wurde in Süddeutschland als Treib- und Hofhund für Viehherden eingesetzt.",
      "Wachsam, ausdauernd und arbeitsfreudig; wird bis heute als Diensthund ausgebildet.",
      "Erkennbar am kräftigen, quadratischen Körper, dem Bart und den buschigen Augenbrauen und dem harten, drahtigen Fell.",
      "Er kommt in Schwarz oder Pfeffer-Salz vor."
    ],
    verwechslung: ["mittelschnauzer", "airedale-terrier", "bouvier"],
    link: "https://de.wikipedia.org/wiki/Schnauzer",
    bilder: []
  },
  {
    id: "mittelschnauzer",
    name: "Mittelschnauzer",
    auch: ["Schnauzer", "Standard-Schnauzer"],
    stufe: 2, fci: 2, herkunft: "Deutschland", groesse: "mittel",
    info: [
      "Die Ursprungsform der Schnauzer; früher als „Rattler“ auf Höfen und in Pferdeställen gegen Ratten gehalten.",
      "Lebhaft, wachsam und gelehrig, dabei ein ausgeglichener Familienhund.",
      "Erkennbar am kantigen Kopf mit kräftigem Bart und buschigen Augenbrauen und dem harten Fell in Pfeffer-Salz oder Schwarz.",
      "Er liegt in der Größe zwischen Zwerg- und Riesenschnauzer."
    ],
    verwechslung: ["zwergschnauzer", "riesenschnauzer"],
    link: "https://de.wikipedia.org/wiki/Schnauzer",
    bilder: []
  },
  {
    id: "zwergpinscher",
    name: "Zwergpinscher",
    auch: ["Rehpinscher", "Min Pin"],
    stufe: 2, fci: 2, herkunft: "Deutschland", groesse: "klein",
    info: [
      "Die verkleinerte Form des Deutschen Pinschers; ursprünglich ein Rattenfänger in Ställen.",
      "Temperamentvoll, wachsam und selbstbewusst – ein großer Hund im kleinen Körper.",
      "Erkennbar am zierlichen, quadratischen Körper, dem glatten Kurzhaar in Rot („Rehpinscher“) oder Schwarz-Rot und dem stolzen Gang.",
      "Er sieht aus wie ein Dobermann im Miniaturformat, ist aber älter als dieser."
    ],
    verwechslung: ["deutscher-pinscher", "chihuahua", "italienisches-windspiel"],
    link: "https://de.wikipedia.org/wiki/Zwergpinscher",
    bilder: []
  },
  {
    id: "deutscher-pinscher",
    name: "Deutscher Pinscher",
    auch: ["Pinscher"],
    stufe: 2, fci: 2, herkunft: "Deutschland", groesse: "mittel",
    info: [
      "Eine alte deutsche Rasse, aus der unter anderem Dobermann und Zwergpinscher hervorgegangen sind.",
      "Aufmerksam, lebhaft und lernfreudig; war zeitweise fast ausgestorben.",
      "Erkennbar am mittelgroßen, eleganten und muskulösen Körper und dem kurzen, glänzenden Fell in Schwarz-Rot oder Rotbraun.",
      "Er ist kleiner und kompakter als der Dobermann."
    ],
    verwechslung: ["dobermann", "zwergpinscher"],
    link: "https://de.wikipedia.org/wiki/Deutscher_Pinscher",
    bilder: []
  },
  {
    id: "cane-corso",
    name: "Cane Corso",
    auch: ["Cane Corso Italiano", "Italienischer Molosser"], aussprache: "Kane Korso",
    stufe: 2, fci: 2, herkunft: "Italien", groesse: "gross",
    info: [
      "Ein italienischer Molosser, der früher als Hof-, Vieh- und Jagdhund für Großwild eingesetzt wurde.",
      "Ruhig, wachsam und schutzbereit; braucht eine erfahrene, konsequente Führung.",
      "Erkennbar am großen, muskulösen und athletischen Körper, dem breiten Kopf und dem kurzen Fell in Schwarz, Grau, Falb oder Gestromt.",
      "Er ist sportlicher und weniger faltig als der Mastino Napoletano."
    ],
    verwechslung: ["bordeauxdogge", "mastiff", "boxer"],
    link: "https://de.wikipedia.org/wiki/Cane_Corso_Italiano",
    bilder: []
  },
  {
    id: "bordeauxdogge",
    name: "Bordeauxdogge",
    auch: ["Dogue de Bordeaux"], aussprache: "Bordo-Dogge",
    stufe: 2, fci: 2, herkunft: "Frankreich", groesse: "gross",
    info: [
      "Eine alte französische Molosserrasse aus der Region um Bordeaux, früher Wach- und Jagdhund.",
      "Gutmütig gegenüber der Familie, ruhig und wachsam.",
      "Erkennbar am riesigen, faltigen Kopf mit kurzer Schnauze, dem einfarbig mahagoni- bis isabellfarbenen Fell und oft roter Maske.",
      "Bekannt wurde sie durch den Film „Scott & Huutsch“ mit Tom Hanks."
    ],
    verwechslung: ["mastiff", "bullmastiff", "cane-corso"],
    link: "https://de.wikipedia.org/wiki/Dogue_de_Bordeaux",
    bilder: []
  },
  {
    id: "mastiff",
    name: "Mastiff",
    auch: ["Englischer Mastiff", "Old English Mastiff"], sprache: "en",
    stufe: 2, fci: 2, herkunft: "Großbritannien", groesse: "sehr-gross",
    info: [
      "Einer der ältesten britischen Hunde; Vorfahren dienten schon als Kriegs- und Wachhunde.",
      "Trotz seiner Masse sanft, ruhig und würdevoll.",
      "Erkennbar an der enormen, massigen Gestalt, dem breiten Kopf mit schwarzer Maske und dem kurzen Fell in Apricot, Falb oder Gestromt.",
      "Er zählt zu den schwersten Hunderassen der Welt."
    ],
    verwechslung: ["bullmastiff", "bordeauxdogge", "deutsche-dogge"],
    link: "https://de.wikipedia.org/wiki/Mastiff_(Hunderasse)",
    bilder: []
  },
  {
    id: "bullmastiff",
    name: "Bullmastiff",
    auch: [], sprache: "en",
    stufe: 2, fci: 2, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Im 19. Jahrhundert aus Mastiff und Bulldogge gezüchtet, um Wilderer auf englischen Landgütern zu stellen.",
      "Ruhig, loyal und schutzbereit, im Haus eher gemütlich.",
      "Erkennbar am kräftigen, kompakten Körper, dem breiten Kopf mit dunkler Maske und dem kurzen Fell in Rot, Falb oder Gestromt.",
      "Er ist kleiner und beweglicher als der Mastiff."
    ],
    verwechslung: ["mastiff", "bordeauxdogge", "boxer"],
    link: "https://de.wikipedia.org/wiki/Bullmastiff",
    bilder: []
  },
  {
    id: "grosser-schweizer-sennenhund",
    name: "Großer Schweizer Sennenhund",
    auch: ["Swissy"],
    stufe: 2, fci: 2, herkunft: "Schweiz", groesse: "sehr-gross",
    info: [
      "Der größte der vier Schweizer Sennenhunde; früher Zug-, Treib- und Wachhund für Metzger und Bauern.",
      "Ruhig, gutmütig und wachsam, braucht aber Platz.",
      "Erkennbar am dreifarbigen Kurzhaar (Schwarz, Rotbraun, Weiß) und dem kräftigen, großen Körper.",
      "Im Unterschied zum Berner Sennenhund ist sein Fell kurz."
    ],
    verwechslung: ["berner-sennenhund", "appenzeller-sennenhund", "entlebucher-sennenhund"],
    link: "https://de.wikipedia.org/wiki/Grosser_Schweizer_Sennenhund",
    bilder: []
  },
  {
    id: "entlebucher-sennenhund",
    name: "Entlebucher Sennenhund",
    auch: ["Entlebucher"],
    stufe: 2, fci: 2, herkunft: "Schweiz", groesse: "mittel",
    info: [
      "Der kleinste der Schweizer Sennenhunde, benannt nach dem Entlebuch im Kanton Luzern, wo er Vieh trieb.",
      "Lebhaft, arbeitsfreudig und wachsam – ein echter Hütehund.",
      "Erkennbar an der dreifarbigen Kurzhaar-Zeichnung, dem gedrungenen, länglichen Körper und oft angeborener Stummelrute.",
      "Er ist deutlich kleiner als der Große Schweizer Sennenhund."
    ],
    verwechslung: ["appenzeller-sennenhund", "grosser-schweizer-sennenhund", "berner-sennenhund"],
    link: "https://de.wikipedia.org/wiki/Entlebucher_Sennenhund",
    bilder: []
  },
  {
    id: "appenzeller-sennenhund",
    name: "Appenzeller Sennenhund",
    auch: ["Appenzeller"],
    stufe: 2, fci: 2, herkunft: "Schweiz", groesse: "mittel",
    info: [
      "Stammt aus dem Appenzellerland in der Ostschweiz und wurde als Treib- und Hofhund gehalten.",
      "Temperamentvoll, wachsam und bellfreudig; braucht viel Beschäftigung.",
      "Erkennbar an der dreifarbigen Kurzhaar-Zeichnung und der typischen, eng über den Rücken geringelten „Posthornrute“.",
      "Er ist mittelgroß, zwischen Entlebucher und Großem Schweizer Sennenhund."
    ],
    verwechslung: ["entlebucher-sennenhund", "grosser-schweizer-sennenhund"],
    link: "https://de.wikipedia.org/wiki/Appenzeller_Sennenhund",
    bilder: []
  },
  {
    id: "bearded-collie",
    name: "Bearded Collie",
    auch: ["Beardie"], sprache: "en",
    stufe: 2, fci: 1, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Ein alter schottischer Hütehund, der Schafe und Rinder im Hochland trieb.",
      "Fröhlich, lebhaft und selbstständig, mit viel Bewegungsdrang.",
      "Erkennbar am langen, zotteligen Fell, dem namensgebenden Bart und dem schlanken, länglichen Körper mit langer Rute.",
      "Im Unterschied zum Bobtail hat er eine lange Rute und einen schlankeren Körperbau."
    ],
    verwechslung: ["bobtail", "tibet-terrier", "puli"],
    link: "https://de.wikipedia.org/wiki/Bearded_Collie",
    bilder: []
  },
  {
    id: "bobtail",
    name: "Bobtail",
    auch: ["Old English Sheepdog"], sprache: "en",
    stufe: 2, fci: 1, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Ein englischer Hüte- und Treibhund; der Name bezieht sich auf die oft kurze Rute.",
      "Freundlich, ausgeglichen und verspielt, mit einer oft clownesken Art.",
      "Erkennbar am üppigen, zotteligen Fell in Grau oder Blau mit Weiß, das oft über die Augen fällt, und dem birnenförmigen, kräftigen Körper.",
      "Er wirkt durch das Fell sehr massig und hat einen typisch wiegenden Gang."
    ],
    verwechslung: ["bearded-collie", "puli"],
    link: "https://de.wikipedia.org/wiki/Bobtail",
    bilder: []
  },
  {
    id: "puli",
    name: "Puli",
    auch: ["Ungarischer Hirtenhund"],
    stufe: 2, fci: 1, herkunft: "Ungarn", groesse: "mittel",
    info: [
      "Ein alter ungarischer Hütehund, dessen Vorfahren vermutlich mit den Magyaren nach Ungarn kamen.",
      "Lebhaft, wachsam und eng an seine Familie gebunden.",
      "Unverwechselbar durch das Fell, das von selbst zu langen Schnüren verfilzt („Dreadlocks“), meist in Schwarz.",
      "Durch die Schnüre wirkt er wie ein wandelnder Wischmopp."
    ],
    verwechslung: ["bobtail", "bearded-collie", "pudel"],
    link: "https://de.wikipedia.org/wiki/Puli",
    bilder: []
  },
  {
    id: "australian-cattle-dog",
    name: "Australian Cattle Dog",
    auch: ["Heeler", "Blue Heeler"], sprache: "en",
    stufe: 2, fci: 1, herkunft: "Australien", groesse: "mittel",
    info: [
      "Im 19. Jahrhundert in Australien gezüchtet, um Rinder über weite Strecken zu treiben; Dingos sind unter seinen Vorfahren.",
      "Ausdauernd, wachsam und extrem arbeitswillig – braucht eine Aufgabe.",
      "Erkennbar am kompakten, muskulösen Körper und dem blau- oder rotgesprenkelten Kurzhaar mit dunklen Abzeichen am Kopf.",
      "Welpen werden weiß geboren; die Farbe entwickelt sich erst später."
    ],
    verwechslung: ["australian-shepherd", "border-collie"],
    link: "https://de.wikipedia.org/wiki/Australian_Cattle_Dog",
    bilder: []
  },
  {
    id: "groenendael",
    name: "Groenendael",
    auch: ["Belgischer Schäferhund (Groenendael)"], aussprache: "Chrunendahl",
    stufe: 2, fci: 1, herkunft: "Belgien", groesse: "gross",
    info: [
      "Der schwarze, langhaarige Schlag des Belgischen Schäferhundes, benannt nach einem Ort bei Brüssel.",
      "Aufmerksam, sensibel und arbeitsfreudig, mit ausgeprägtem Schutztrieb.",
      "Erkennbar am ganz schwarzen, langen Fell mit Halskrause und dem eleganten, mittelschweren Körperbau mit Stehohren.",
      "Er ist dieselbe Rasse wie der Malinois – nur Fellart und Farbe unterscheiden die Schläge."
    ],
    verwechslung: ["malinois", "deutscher-schaeferhund"],
    link: "https://de.wikipedia.org/wiki/Belgischer_Schäferhund",
    bilder: []
  },
  {
    id: "flat-coated-retriever",
    name: "Flat Coated Retriever",
    auch: ["Flat", "Flatcoat"], sprache: "en",
    stufe: 2, fci: 8, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Im 19. Jahrhundert in England als Apportierhund für die Jagd gezüchtet; war vor dem Labrador sehr beliebt.",
      "Fröhlich, verspielt und lange „jugendlich“ – gilt als Peter Pan unter den Retrievern.",
      "Erkennbar am glatt anliegenden, glänzenden Fell in Schwarz oder Leberbraun mit Befederung und dem langen, schmalen Kopf.",
      "Er wirkt wie ein schwarzer Golden Retriever, ist aber schlanker."
    ],
    verwechslung: ["labrador-retriever", "golden-retriever", "groenendael"],
    link: "https://de.wikipedia.org/wiki/Flat_Coated_Retriever",
    bilder: []
  },
  {
    id: "nova-scotia-duck-tolling-retriever",
    name: "Nova Scotia Duck Tolling Retriever",
    auch: ["Toller"], sprache: "en",
    stufe: 2, fci: 8, herkunft: "Kanada", groesse: "mittel",
    info: [
      "Der kleinste Retriever stammt aus Nova Scotia in Kanada.",
      "Er lockt („tolling“) Enten durch Spielen am Ufer an, damit der Jäger sie erreicht.",
      "Erkennbar am rotgoldenen bis kupferfarbenen Fell mit weißen Abzeichen an Brust, Pfoten, Rutenspitze oder Blesse.",
      "Er sieht aus wie ein kleiner, fuchsfarbener Golden Retriever."
    ],
    verwechslung: ["golden-retriever", "cocker-spaniel", "springer-spaniel"],
    link: "https://de.wikipedia.org/wiki/Nova_Scotia_Duck_Tolling_Retriever",
    bilder: []
  },
  {
    id: "lagotto-romagnolo",
    name: "Lagotto Romagnolo",
    auch: ["Lagotto", "Trüffelhund"], aussprache: "Lagotto Romanjolo",
    stufe: 2, fci: 8, herkunft: "Italien", groesse: "mittel",
    info: [
      "Ursprünglich ein Wasserapportierhund aus der Romagna; heute vor allem als Trüffelsucher bekannt.",
      "Freundlich, lernfreudig und mit hervorragender Nase.",
      "Erkennbar am dichten, wolligen Lockenfell in Weiß, Braun, Orange oder gefleckt und dem runden Kopf mit Bart.",
      "Im Unterschied zum Pudel wird sein Fell natürlich und gleichmäßig kurz getragen."
    ],
    verwechslung: ["pudel", "puli", "bichon-frise"],
    link: "https://de.wikipedia.org/wiki/Lagotto_Romagnolo",
    bilder: []
  },
  {
    id: "springer-spaniel",
    name: "English Springer Spaniel",
    auch: ["Springer"], sprache: "en",
    stufe: 2, fci: 8, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Ein englischer Stöberhund; der Name kommt davon, dass er Wild aufscheucht („springen“ lässt).",
      "Fröhlich, ausdauernd und arbeitsfreudig – auch als Spürhund bei Zoll und Polizei beliebt.",
      "Erkennbar an den langen Schlappohren, dem mittellangen Fell in Leberbraun-Weiß oder Schwarz-Weiß und den längeren Beinen.",
      "Er ist größer und hochläufiger als der English Cocker Spaniel."
    ],
    verwechslung: ["cocker-spaniel", "kleiner-muensterlaender", "english-setter"],
    link: "https://de.wikipedia.org/wiki/English_Springer_Spaniel",
    bilder: []
  },
  {
    id: "deutscher-wachtelhund",
    name: "Deutscher Wachtelhund",
    auch: ["Wachtel"],
    stufe: 2, fci: 8, herkunft: "Deutschland", groesse: "mittel",
    info: [
      "Ein deutscher Stöberhund, der vor allem im Wald Wild aufspürt und laut verfolgt.",
      "Ausdauernd, jagdpassioniert und wird fast nur an Jäger abgegeben.",
      "Erkennbar am kräftigen, langgestreckten Körper, dem welligen, mittellangen Fell in Braun oder Braunschimmel und den Hängeohren.",
      "Er ist deutlich kräftiger als die englischen Spaniels."
    ],
    verwechslung: ["kleiner-muensterlaender", "springer-spaniel"],
    link: "https://de.wikipedia.org/wiki/Deutscher_Wachtelhund",
    bilder: []
  },
  {
    id: "deutsch-kurzhaar",
    name: "Deutsch Kurzhaar",
    auch: ["DK", "Kurzhaar"],
    stufe: 2, fci: 7, herkunft: "Deutschland", groesse: "gross",
    info: [
      "Ein vielseitiger deutscher Vorstehhund für die Arbeit in Feld, Wald und Wasser.",
      "Ausdauernd, lernfreudig und energiegeladen – einer der verbreitetsten Jagdhunde in Deutschland.",
      "Erkennbar am kurzen, harten Fell in Braun, Braunschimmel oder Schwarz, oft mit Platten, und dem edlen Kopf mit leichter Ramsnase.",
      "Er ist die kurzhaarige Schwesterrasse des Deutsch Drahthaar."
    ],
    verwechslung: ["deutsch-drahthaar", "pointer", "weimaraner"],
    link: "https://de.wikipedia.org/wiki/Deutsch_Kurzhaar",
    bilder: []
  },
  {
    id: "irish-setter",
    name: "Irish Red Setter",
    auch: ["Irish Setter", "Irischer Setter"], sprache: "en",
    stufe: 2, fci: 7, herkunft: "Irland", groesse: "gross",
    info: [
      "Ein irischer Vorstehhund, der bei der Jagd auf Federwild vor dem Wild „setzt“, also sich duckt.",
      "Temperamentvoll, freundlich und verspielt, mit großem Bewegungsbedarf.",
      "Unverwechselbar durch das seidige, tief mahagonirote Fell mit Befederung an Ohren, Beinen und Rute.",
      "Es gibt auch den seltenen Irish Red and White Setter mit weiß-rotem Fell."
    ],
    verwechslung: ["english-setter", "golden-retriever", "nova-scotia-duck-tolling-retriever"],
    link: "https://de.wikipedia.org/wiki/Irish_Red_Setter",
    bilder: []
  },
  {
    id: "english-setter",
    name: "English Setter",
    auch: ["Englischer Setter"], sprache: "en",
    stufe: 2, fci: 7, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Ein englischer Vorstehhund, der seit Jahrhunderten für die Jagd auf Federwild gezüchtet wird.",
      "Sanft, freundlich und anhänglich.",
      "Erkennbar am weißen, seidigen Fell mit feinen Sprenkeln („Belton“) in Blau, Orange oder Braun und der langen Befederung.",
      "Die gesprenkelte Zeichnung unterscheidet ihn von den anderen Setter-Rassen."
    ],
    verwechslung: ["irish-setter", "springer-spaniel", "kleiner-muensterlaender"],
    link: "https://de.wikipedia.org/wiki/English_Setter",
    bilder: []
  },
  {
    id: "pointer",
    name: "Pointer",
    auch: ["English Pointer"], sprache: "en",
    stufe: 2, fci: 7, herkunft: "Großbritannien", groesse: "gross",
    info: [
      "Ein englischer Vorstehhund, der Wild mit erhobener Pfote und gestrecktem Körper „anzeigt“ (to point).",
      "Ausdauernd, schnell und sanftmütig; im Haus eher ruhig.",
      "Erkennbar am athletischen Körper, dem kurzen Fell in Weiß mit Zitronen-, Orange-, Leber- oder Schwarzplatten und der leicht konkaven Schnauze.",
      "Typisch ist die Vorstehhaltung mit erhobenem Vorderlauf."
    ],
    verwechslung: ["deutsch-kurzhaar", "dalmatiner"],
    link: "https://de.wikipedia.org/wiki/English_Pointer",
    bilder: []
  },
  {
    id: "kleiner-muensterlaender",
    name: "Kleiner Münsterländer",
    auch: ["KlM", "Heidewachtel"],
    stufe: 2, fci: 7, herkunft: "Deutschland", groesse: "mittel",
    info: [
      "Ein deutscher Vorstehhund aus dem Münsterland, der aus alten Wachtelhunden entstand.",
      "Freundlich, lernfreudig und vielseitig – auch als Familienhund beliebt.",
      "Erkennbar am mittellangen, leicht gewellten Fell in Braun-Weiß oder Braunschimmel mit brauner Kopffarbe und Befederung.",
      "Er ist kleiner und zierlicher als der Große Münsterländer, der schwarz-weiß ist."
    ],
    verwechslung: ["springer-spaniel", "deutscher-wachtelhund", "english-setter"],
    link: "https://de.wikipedia.org/wiki/Kleiner_Münsterländer",
    bilder: []
  },
  {
    id: "basset-hound",
    name: "Basset Hound",
    auch: ["Basset"], sprache: "en",
    stufe: 2, fci: 6, herkunft: "Großbritannien", groesse: "mittel",
    info: [
      "Geht auf französische Bassets zurück und wurde in England als Meutehund für die Hasenjagd gezüchtet.",
      "Gutmütig, gelassen und eigensinnig, mit hervorragender Nase.",
      "Erkennbar an den sehr kurzen Beinen, dem langen, schweren Körper, den extrem langen Ohren und den hängenden Lidern.",
      "Trotz der kurzen Beine ist er schwer und knochig gebaut; typisch ist sein traurig wirkender Gesichtsausdruck."
    ],
    verwechslung: ["beagle", "bloodhound", "dackel"],
    link: "https://de.wikipedia.org/wiki/Basset_Hound",
    bilder: []
  },
  {
    id: "bloodhound",
    name: "Bloodhound",
    auch: ["Bluthund", "Chien de Saint-Hubert"], sprache: "en",
    stufe: 2, fci: 6, herkunft: "Belgien", groesse: "gross",
    info: [
      "Geht auf Hunde der Mönche im Kloster Saint-Hubert in den Ardennen zurück.",
      "Er gilt als der Hund mit der besten Nase und wird zur Personensuche eingesetzt.",
      "Erkennbar an der stark faltigen Haut an Kopf und Hals, den sehr langen Ohren und dem Fell in Schwarz-Loh, Leber-Loh oder Rot.",
      "Der Name bezieht sich auf „reines Blut“, also seine Abstammung, nicht auf Blutspuren."
    ],
    verwechslung: ["basset-hound", "bordeauxdogge"],
    link: "https://de.wikipedia.org/wiki/Bloodhound_(Hunderasse)",
    bilder: []
  },
  {
    id: "eurasier",
    name: "Eurasier",
    auch: [],
    stufe: 2, fci: 5, herkunft: "Deutschland", groesse: "mittel",
    info: [
      "In den 1960er-Jahren in Deutschland aus Wolfsspitz, Chow-Chow und später Samojede als Familienhund gezüchtet.",
      "Ausgeglichen, ruhig und eng an die Familie gebunden; gegenüber Fremden zurückhaltend.",
      "Erkennbar am dichten, mittellangen Fell in vielen Farben (oft Rot, Wolfsgrau oder Schwarz), dem Spitzkopf und der über den Rücken getragenen Rute.",
      "Manche Eurasier haben eine blaue oder gefleckte Zunge – ein Erbe des Chow-Chow."
    ],
    verwechslung: ["chow-chow", "akita-inu", "samojede"],
    link: "https://de.wikipedia.org/wiki/Eurasier_(Hunderasse)",
    bilder: []
  },
  {
    id: "chow-chow",
    name: "Chow-Chow",
    auch: ["Chow"], aussprache: "Tschau Tschau",
    stufe: 2, fci: 5, herkunft: "China", groesse: "mittel",
    info: [
      "Eine sehr alte chinesische Rasse, früher Wach-, Jagd- und Zughund.",
      "Unabhängig, würdevoll und reserviert – sehr eigenständig im Wesen.",
      "Erkennbar an der löwenähnlichen Mähne, der blauschwarzen Zunge und dem stelzenartigen Gang mit fast geraden Hinterbeinen.",
      "Es gibt eine Langhaar- und eine Kurzhaar-Variante."
    ],
    verwechslung: ["eurasier", "zwergspitz", "akita-inu"],
    link: "https://de.wikipedia.org/wiki/Chow-Chow",
    bilder: []
  },
  {
    id: "basenji",
    name: "Basenji",
    auch: ["Kongo-Terrier"], aussprache: "Basendschi",
    stufe: 2, fci: 5, herkunft: "Zentralafrika", groesse: "mittel",
    info: [
      "Eine alte Rasse aus dem Kongobecken, wo sie Jägern half, Wild in Netze zu treiben.",
      "Er bellt nicht, sondern gibt jodelnde Laute von sich; dazu ist er sehr reinlich, fast wie eine Katze.",
      "Erkennbar an der gerunzelten Stirn, den großen Stehohren, der eng geringelten Rute und dem kurzen, feinen Fell.",
      "Häufige Farben sind Rot-Weiß, Schwarz-Weiß und Dreifarbig."
    ],
    verwechslung: ["shiba-inu", "zwergpinscher", "whippet"],
    link: "https://de.wikipedia.org/wiki/Basenji",
    bilder: []
  },
  {
    id: "shar-pei",
    name: "Shar-Pei",
    auch: ["Chinesischer Faltenhund"], aussprache: "Schar Pei",
    stufe: 2, fci: 2, herkunft: "China", groesse: "mittel",
    info: [
      "Eine alte chinesische Rasse aus der Provinz Guangdong, früher Wach- und Kampfhund.",
      "Ruhig, unabhängig und seiner Familie treu, gegenüber Fremden zurückhaltend.",
      "Unverwechselbar durch die vielen Hautfalten, den breiten „Nilpferdkopf“, die kleinen Ohren und die blauschwarze Zunge.",
      "Der Name bedeutet „Sandhaut“ und beschreibt das raue, kurze Fell."
    ],
    verwechslung: ["chow-chow", "bordeauxdogge"],
    link: "https://de.wikipedia.org/wiki/Shar-Pei",
    bilder: []
  },
  {
    id: "irischer-wolfshund",
    name: "Irischer Wolfshund",
    auch: ["Irish Wolfhound"],
    stufe: 2, fci: 10, herkunft: "Irland", groesse: "sehr-gross",
    info: [
      "Ein uralter irischer Windhund, der zur Jagd auf Wölfe und Hirsche eingesetzt wurde.",
      "Trotz seiner Größe sanft, ruhig und freundlich – „sanfter Riese“.",
      "Erkennbar an der enormen Größe, dem rauen, drahtigen Fell meist in Grau, und dem langen Kopf mit Bart.",
      "Er gehört zu den größten Hunderassen der Welt; Rüden messen mindestens 79 cm Schulterhöhe."
    ],
    verwechslung: ["deutsche-dogge", "barsoi", "riesenschnauzer"],
    link: "https://de.wikipedia.org/wiki/Irischer_Wolfshund",
    bilder: []
  },
  {
    id: "saluki",
    name: "Saluki",
    auch: ["Persischer Windhund"],
    stufe: 2, fci: 10, herkunft: "Naher Osten", groesse: "gross",
    info: [
      "Einer der ältesten Windhunde, schon im alten Ägypten und bei arabischen Beduinen zur Gazellenjagd gehalten.",
      "Sanft, zurückhaltend und unabhängig, im Freien ein ausdauernder Läufer.",
      "Erkennbar am sehr schlanken, eleganten Körper und den seidig befederten Ohren und Rute bei sonst glattem Fell.",
      "Es gibt auch eine glatthaarige Variante ganz ohne Befederung."
    ],
    verwechslung: ["afghanischer-windhund", "greyhound", "barsoi"],
    link: "https://de.wikipedia.org/wiki/Saluki",
    bilder: []
  },
  {
    id: "afghanischer-windhund",
    name: "Afghanischer Windhund",
    auch: ["Afghane", "Afghan Hound"],
    stufe: 2, fci: 10, herkunft: "Afghanistan", groesse: "gross",
    info: [
      "Stammt aus den Bergregionen Afghanistans, wo er zur Jagd auf Gazellen, Hasen und anderes Wild eingesetzt wurde.",
      "Würdevoll, unabhängig und eigenwillig, aber anhänglich zur Familie.",
      "Unverwechselbar durch das sehr lange, seidige Fell, den Haarschopf auf dem Kopf und die am Ende geringelte Rute.",
      "Das Fell braucht viel Pflege und ist am Rücken oft kürzer („Sattel“)."
    ],
    verwechslung: ["saluki", "barsoi"],
    link: "https://de.wikipedia.org/wiki/Afghanischer_Windhund",
    bilder: []
  },
  {
    id: "barsoi",
    name: "Barsoi",
    auch: ["Russischer Windhund", "Borzoi"],
    stufe: 2, fci: 10, herkunft: "Russland", groesse: "gross",
    info: [
      "Der russische Windhund wurde vom Adel zur Wolfs- und Hasenjagd gehalten.",
      "Ruhig, sanft und zurückhaltend, aber im Freien blitzschnell.",
      "Erkennbar am sehr langen, schmalen Kopf, dem gebogenen Rücken und dem seidigen, gewellten Fell, meist weiß mit Platten.",
      "Der Name bedeutet auf Russisch „schnell“."
    ],
    verwechslung: ["afghanischer-windhund", "saluki", "collie-langhaar"],
    link: "https://de.wikipedia.org/wiki/Barsoi",
    bilder: []
  },
  {
    id: "italienisches-windspiel",
    name: "Italienisches Windspiel",
    auch: ["Piccolo Levriero Italiano", "Italian Greyhound"],
    stufe: 2, fci: 10, herkunft: "Italien", groesse: "klein",
    info: [
      "Der kleinste Windhund war schon in der Antike und an Fürstenhöfen der Renaissance ein beliebter Begleithund.",
      "Sanft, anhänglich und verspielt, dabei sensibel und kälteempfindlich.",
      "Erkennbar am sehr zierlichen, schlanken Körper mit tiefer Brust, den feinen Beinen und dem kurzen, glatten Fell.",
      "Er wirkt wie ein Greyhound in Miniatur und ist deutlich kleiner als der Whippet."
    ],
    verwechslung: ["whippet", "zwergpinscher", "greyhound"],
    link: "https://de.wikipedia.org/wiki/Italienisches_Windspiel",
    bilder: []
  },
  {
    id: "papillon",
    name: "Papillon",
    auch: ["Kontinentaler Zwergspaniel", "Schmetterlingshund"], aussprache: "Papijong",
    stufe: 2, fci: 9, herkunft: "Belgien / Frankreich", groesse: "klein",
    info: [
      "Ein kleiner Begleithund, der auf vielen Gemälden der Renaissance an europäischen Höfen zu sehen ist.",
      "Fröhlich, intelligent und lernfreudig – im Hundesport erstaunlich erfolgreich.",
      "Erkennbar an den großen, aufgestellten und lang befederten Ohren, die an Schmetterlingsflügel erinnern.",
      "Die Variante mit Hängeohren heißt Phalène („Nachtfalter“)."
    ],
    verwechslung: ["zwergspitz", "chihuahua", "cavalier-king-charles-spaniel"],
    link: "https://de.wikipedia.org/wiki/Kontinentaler_Zwergspaniel",
    bilder: []
  },
  {
    id: "pekingese",
    name: "Pekinese",
    auch: ["Pekingese", "Peking-Palasthund"],
    stufe: 2, fci: 9, herkunft: "China", groesse: "klein",
    info: [
      "Am chinesischen Kaiserhof gezüchtet und durfte früher nur von der kaiserlichen Familie gehalten werden.",
      "Würdevoll, selbstbewusst und eigenwillig.",
      "Erkennbar am löwenähnlichen Aussehen mit üppiger Mähne, dem flachen Gesicht und den kurzen, krummen Beinen.",
      "Durch das lange Fell wirkt er fast wie ein Fellwischer mit Gesicht."
    ],
    verwechslung: ["shih-tzu", "lhasa-apso", "mops"],
    link: "https://de.wikipedia.org/wiki/Pekingese",
    bilder: []
  },
  {
    id: "lhasa-apso",
    name: "Lhasa Apso",
    auch: ["Lhasa"], aussprache: "Lasa Apso",
    stufe: 2, fci: 9, herkunft: "Tibet", groesse: "klein",
    info: [
      "Stammt aus Tibet und war in Klöstern ein geschätzter Wachhund, der Besucher mit Bellen meldete.",
      "Selbstbewusst, wachsam und gegenüber Fremden zurückhaltend.",
      "Erkennbar am sehr langen, schweren und glatten Fell, das bis zum Boden fällt, und der über den Rücken gerollten Rute.",
      "Im Unterschied zum Shih Tzu hat er eine etwas längere Schnauze."
    ],
    verwechslung: ["shih-tzu", "tibet-terrier", "pekingese"],
    link: "https://de.wikipedia.org/wiki/Lhasa_Apso",
    bilder: []
  },
  {
    id: "coton-de-tulear",
    name: "Coton de Tuléar",
    auch: ["Coton"], aussprache: "Kotong de Tülear",
    stufe: 2, fci: 9, herkunft: "Madagaskar", groesse: "klein",
    info: [
      "Benannt nach der Hafenstadt Tuléar auf Madagaskar, wo er Begleithund der Oberschicht war.",
      "Fröhlich, verspielt und sehr menschenbezogen.",
      "Erkennbar am weichen, baumwollartigen („coton“) Fell, das überwiegend weiß ist, oft mit hellen Flecken an den Ohren.",
      "Er gehört zur Familie der Bichons, wie Malteser und Havaneser."
    ],
    verwechslung: ["malteser", "bichon-frise", "havaneser"],
    link: "https://de.wikipedia.org/wiki/Coton_de_Tuléar",
    bilder: []
  },
  {
    id: "tibet-terrier",
    name: "Tibet-Terrier",
    auch: ["Tibetan Terrier"],
    stufe: 2, fci: 9, herkunft: "Tibet", groesse: "mittel",
    info: [
      "Stammt aus Tibet, wo er als Begleit- und Hütehund in Klöstern und bei Nomaden lebte; trotz des Namens kein Terrier.",
      "Fröhlich, anhänglich und lebhaft.",
      "Erkennbar am langen, üppigen Fell in vielen Farben, dem quadratischen Körper und den großen, flachen „Schneeschuhpfoten“.",
      "Er ist größer und hochbeiniger als Lhasa Apso und Shih Tzu."
    ],
    verwechslung: ["lhasa-apso", "bearded-collie", "havaneser"],
    link: "https://de.wikipedia.org/wiki/Tibet-Terrier",
    bilder: []
  },
  {
    id: "bouvier",
    name: "Bouvier des Flandres",
    auch: ["Flandrischer Treibhund", "Bouvier"], aussprache: "Buwjee de Flandr",
    stufe: 2, fci: 1, herkunft: "Belgien / Frankreich", groesse: "gross",
    info: [
      "Ein Treibhund aus Flandern, der Rinder trieb und Karren zog.",
      "Ruhig, wachsam und belastbar; heute auch als Schutz- und Familienhund gehalten.",
      "Erkennbar am kompakten, kräftigen Körper, dem rauen, zotteligen Fell meist in Grau oder Schwarz und dem kräftigen Bart.",
      "Er wirkt durch Bart und massigen Kopf sehr bärenhaft."
    ],
    verwechslung: ["riesenschnauzer", "bobtail", "airedale-terrier"],
    link: "https://de.wikipedia.org/wiki/Bouvier_des_Flandres",
    bilder: []
  }
);
