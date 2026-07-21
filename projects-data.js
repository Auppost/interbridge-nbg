/* Interbridge Nbg e.V. — Projektdaten (Startseite + Seitengenerator).
   slug = Seite projekte/<slug>.html und Fotoordner fotos/<slug>/ */
const PROJECTS_DATA = [
  {
    slug: "ukrainehilfe",
    cover: "fotos/ukrainehilfe-1.jpg",
    category: "Nothilfe", date: "Laufend seit 2022", title: "Ukrainehilfe",
    blurb: "Humanitäre Hilfe und Sachspenden für Menschen in der Ukraine.",
    detail: "Unser Kernprojekt: Wir sammeln, beschaffen und liefern humanitäre Güter — von Medizin bis Hilfsgütern des täglichen Bedarfs — und übergeben sie dokumentiert an Partner vor Ort.",
    raised: "Laufend", impact: "Hilfslieferungen in die Ukraine", reach: "1.000+"
  },
  {
    slug: "soli",
    cover: "fotos/soli-1.jpg",
    category: "Öffentlichkeit", date: "Laufend", title: "Solidarität mit der Ukraine",
    blurb: "Kundgebungen und Straßenaktionen in Nürnberg.",
    detail: "Mit Kundgebungen und Straßenaktionen halten wir die Aufmerksamkeit für den Krieg in der Ukraine wach, informieren die Öffentlichkeit und sammeln Spenden für unsere humanitären Projekte.",
    raised: "Regelmäßig", impact: "Kundgebungen & Aktionen", reach: "Öffentlich"
  },
  {
    slug: "energie",
    cover: "fotos/energie-1.jpg",
    category: "Nothilfe", date: "Winterhilfe", title: "Energie für die Ukraine",
    blurb: "Generatoren und Powerstationen gegen den Blackout.",
    detail: "Nach den Angriffen auf die Energieversorgung haben wir Generatoren und Powerstationen beschafft und in die Ukraine gebracht — Strom und Wärme für Familien und Einrichtungen.",
    raised: "Abgeschlossen", impact: "Generatoren übergeben", reach: "Familien"
  },
  {
    slug: "leben",
    cover: "fotos/leben-1.jpg",
    category: "Gesundheit", date: "Abgeschlossen", title: "Leben retten — Rauchgasvergiftung bekämpfen",
    blurb: "Schutzausrüstung gegen Rauchgasvergiftung.",
    detail: "Rauchgasvergiftung ist eine der häufigsten Todesursachen bei Bränden und Beschuss. Wir haben Schutzausrüstung beschafft und an Rettungskräfte und Zivilisten übergeben.",
    raised: "Abgeschlossen", impact: "Ausrüstung übergeben", reach: "Rettungskräfte"
  },
  {
    slug: "eltern",
    cover: "fotos/eltern-1.jpg",
    category: "Soziales", date: "Laufend", title: "Es gibt keine fremden alten Eltern!",
    blurb: "Unterstützung für ältere Menschen in Not.",
    detail: "Ältere Menschen trifft der Krieg besonders hart. Wir unterstützen Seniorinnen und Senioren mit Lebensmitteln, Medikamenten und persönlicher Zuwendung — niemand soll allein bleiben.",
    raised: "Laufend", impact: "Seniorinnen & Senioren", reach: "Fortlaufend"
  },
  {
    slug: "erasmus",
    cover: "fotos/hero-c.jpg",
    category: "Bildung", date: "Abgeschlossen", title: "Erasmus+ Jugendmobilität",
    blurb: "Internationale Jugendbegegnung in Europa.",
    detail: "Im Rahmen von Erasmus+ haben wir jungen Menschen internationale Begegnungen ermöglicht — kultureller Austausch, der Brücken zwischen Ländern und Generationen baut.",
    raised: "Gefördert", impact: "Jugendbegegnung", reach: "Jugendliche"
  },
  {
    slug: "peaceful",
    cover: "fotos/peaceful/peaceful-33.jpg",
    category: "Sport", date: "Abgeschlossen", title: "Piece of Peaceful Sky",
    blurb: "Eine Woche Fußball unter ruhigem Himmel für Kinder aus Kyjiw.",
    detail: "28 Kinder des FK „Atlet“ Kyjiw — drei komplette U12-Teams — konnten eine Woche lang in Nürnberg ohne Luftalarm schlafen, trainieren und spielen. Zum Abschluss holten die Jungs beim internationalen interkulturellen Fußballfest in Leipzig Gold — mit einem 2:1-Finalsieg gegen die Gastgeber von BSG Chemie Leipzig.",
    raised: "Abgeschlossen", impact: "Fußballwoche & Turniersieg", reach: "28 Kinder"
  },
];
if (typeof module !== "undefined") module.exports = PROJECTS_DATA;
