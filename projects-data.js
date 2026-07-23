/* Interbridge Nbg e.V. — Projektdaten (Startseite + Seitengenerator).
   slug = Seite projekte/<slug>.html und Fotoordner fotos/<slug>/
   Jedes Projekt hat pro Sprache (de/en/uk) eigene Texte unter i18n.<locale>. */
const PROJECTS_DATA = [
  {
    slug: "ukrainehilfe",
    cover: "fotos/ukrainehilfe-1.jpg",
    i18n: {
      de: {
        category: "Nothilfe", date: "Laufend seit 2022", title: "Ukrainehilfe",
        blurb: "Humanitäre Hilfe und Sachspenden für Menschen in der Ukraine.",
        detail: "Unser Kernprojekt: Wir sammeln, beschaffen und liefern humanitäre Güter — von Medizin bis Hilfsgütern des täglichen Bedarfs — und übergeben sie dokumentiert an Partner vor Ort.",
        raised: "Laufend", impact: "Hilfslieferungen in die Ukraine", reach: "1.000+"
      },
      en: {
        category: "Emergency Aid", date: "Ongoing since 2022", title: "Ukraine Relief",
        blurb: "Humanitarian aid and in-kind donations for people in Ukraine.",
        detail: "Our core project: we collect, procure and deliver humanitarian goods — from medicine to everyday essentials — and hand them over to partners on the ground with full documentation.",
        raised: "Ongoing", impact: "Aid deliveries to Ukraine", reach: "1,000+"
      },
      uk: {
        category: "Термінова допомога", date: "Триває з 2022 року", title: "Допомога Україні",
        blurb: "Гуманітарна допомога та речові пожертви для людей в Україні.",
        detail: "Наш основний проєкт: ми збираємо, закуповуємо та доставляємо гуманітарні вантажі — від медикаментів до товарів першої необхідності — і передаємо їх партнерам на місці з повною документацією.",
        raised: "Триває", impact: "Гуманітарні поставки в Україну", reach: "1000+"
      }
    }
  },
  {
    slug: "soli",
    cover: "fotos/soli-1.jpg",
    i18n: {
      de: {
        category: "Öffentlichkeit", date: "Laufend", title: "Solidarität mit der Ukraine",
        blurb: "Kundgebungen und Straßenaktionen in Nürnberg.",
        detail: "Mit Kundgebungen und Straßenaktionen halten wir die Aufmerksamkeit für den Krieg in der Ukraine wach, informieren die Öffentlichkeit und sammeln Spenden für unsere humanitären Projekte.",
        raised: "Regelmäßig", impact: "Kundgebungen & Aktionen", reach: "Öffentlich"
      },
      en: {
        category: "Public Awareness", date: "Ongoing", title: "Solidarity with Ukraine",
        blurb: "Rallies and street campaigns in Nuremberg.",
        detail: "Through rallies and street campaigns we keep public attention on the war in Ukraine, inform the public and raise donations for our humanitarian projects.",
        raised: "Regularly", impact: "Rallies & campaigns", reach: "Public"
      },
      uk: {
        category: "Громадська діяльність", date: "Триває", title: "Солідарність з Україною",
        blurb: "Мітинги та вуличні акції в Нюрнберзі.",
        detail: "За допомогою мітингів та вуличних акцій ми привертаємо увагу громадськості до війни в Україні, інформуємо людей і збираємо кошти для наших гуманітарних проєктів.",
        raised: "Регулярно", impact: "Мітинги та акції", reach: "Публічно"
      }
    }
  },
  {
    slug: "energie",
    cover: "fotos/energie-1.jpg",
    i18n: {
      de: {
        category: "Nothilfe", date: "Winterhilfe", title: "Energie für die Ukraine",
        blurb: "Generatoren und Powerstationen gegen den Blackout.",
        detail: "Nach den Angriffen auf die Energieversorgung haben wir Generatoren und Powerstationen beschafft und in die Ukraine gebracht — Strom und Wärme für Familien und Einrichtungen.",
        raised: "Abgeschlossen", impact: "Generatoren übergeben", reach: "Familien"
      },
      en: {
        category: "Emergency Aid", date: "Winter relief", title: "Power for Ukraine",
        blurb: "Generators and power stations against the blackouts.",
        detail: "After the attacks on the energy grid, we procured generators and power stations and brought them to Ukraine — electricity and warmth for families and institutions.",
        raised: "Completed", impact: "Generators handed over", reach: "Families"
      },
      uk: {
        category: "Термінова допомога", date: "Зимова допомога", title: "Енергія для України",
        blurb: "Генератори та потужні павербанки на випадок блекауту.",
        detail: "Після атак на енергосистему ми закупили генератори та потужні павербанки і доставили їх в Україну — світло й тепло для родин та закладів.",
        raised: "Завершено", impact: "Передані генератори", reach: "Родини"
      }
    }
  },
  {
    slug: "leben",
    cover: "fotos/leben-1.jpg",
    i18n: {
      de: {
        category: "Gesundheit", date: "Abgeschlossen", title: "Leben retten — Rauchgasvergiftung bekämpfen",
        blurb: "Schutzausrüstung gegen Rauchgasvergiftung.",
        detail: "Rauchgasvergiftung ist eine der häufigsten Todesursachen bei Bränden und Beschuss. Wir haben Schutzausrüstung beschafft und an Rettungskräfte und Zivilisten übergeben.",
        raised: "Abgeschlossen", impact: "Ausrüstung übergeben", reach: "Rettungskräfte"
      },
      en: {
        category: "Health", date: "Completed", title: "Saving Lives — Fighting Smoke Inhalation",
        blurb: "Protective equipment against smoke inhalation.",
        detail: "Smoke inhalation is one of the most common causes of death in fires and shelling. We procured protective equipment and handed it over to rescue workers and civilians.",
        raised: "Completed", impact: "Equipment handed over", reach: "Rescue workers"
      },
      uk: {
        category: "Здоров'я", date: "Завершено", title: "Рятуємо життя — боремося з отруєнням чадним газом",
        blurb: "Захисне спорядження від отруєння димом.",
        detail: "Отруєння димом — одна з найпоширеніших причин смерті під час пожеж та обстрілів. Ми закупили захисне спорядження та передали його рятувальникам і цивільним.",
        raised: "Завершено", impact: "Передане спорядження", reach: "Рятувальники"
      }
    }
  },
  {
    slug: "eltern",
    cover: "fotos/eltern-1.jpg",
    i18n: {
      de: {
        category: "Soziales", date: "Laufend", title: "Es gibt keine fremden alten Eltern!",
        blurb: "Unterstützung für ältere Menschen in Not.",
        detail: "Ältere Menschen trifft der Krieg besonders hart. Wir unterstützen Seniorinnen und Senioren mit Lebensmitteln, Medikamenten und persönlicher Zuwendung — niemand soll allein bleiben.",
        raised: "Laufend", impact: "Seniorinnen & Senioren", reach: "Fortlaufend"
      },
      en: {
        category: "Social", date: "Ongoing", title: "No Elderly Parent Is a Stranger!",
        blurb: "Support for elderly people in need.",
        detail: "The war hits elderly people especially hard. We support senior citizens with food, medicine and personal care — no one should be left alone.",
        raised: "Ongoing", impact: "Senior citizens", reach: "Ongoing"
      },
      uk: {
        category: "Соціальна допомога", date: "Триває", title: "Немає чужих літніх батьків!",
        blurb: "Підтримка людей похилого віку в скруті.",
        detail: "Війна особливо тяжко б'є по людях похилого віку. Ми підтримуємо їх продуктами, ліками та особистою турботою — ніхто не повинен залишатися наодинці.",
        raised: "Триває", impact: "Люди похилого віку", reach: "Постійно"
      }
    }
  },
  {
    slug: "erasmus",
    cover: "fotos/hero-c.jpg",
    i18n: {
      de: {
        category: "Bildung", date: "Abgeschlossen", title: "Erasmus+ Jugendmobilität",
        blurb: "Internationale Jugendbegegnung in Europa.",
        detail: "Im Rahmen von Erasmus+ haben wir jungen Menschen internationale Begegnungen ermöglicht — kultureller Austausch, der Brücken zwischen Ländern und Generationen baut.",
        raised: "Gefördert", impact: "Jugendbegegnung", reach: "Jugendliche"
      },
      en: {
        category: "Education", date: "Completed", title: "Erasmus+ Youth Mobility",
        blurb: "International youth exchange in Europe.",
        detail: "As part of Erasmus+, we enabled young people to take part in international encounters — cultural exchange that builds bridges between countries and generations.",
        raised: "Funded", impact: "Youth exchange", reach: "Young people"
      },
      uk: {
        category: "Освіта", date: "Завершено", title: "Молодіжна мобільність Erasmus+",
        blurb: "Міжнародний молодіжний обмін у Європі.",
        detail: "У межах програми Erasmus+ ми дали молодим людям можливість міжнародних зустрічей — культурний обмін, що будує мости між країнами та поколіннями.",
        raised: "Профінансовано", impact: "Молодіжний обмін", reach: "Молодь"
      }
    }
  },
  {
    slug: "peaceful",
    cover: "fotos/peaceful/peaceful-33.jpg",
    i18n: {
      de: {
        category: "Sport", date: "Abgeschlossen", title: "Piece of Peaceful Sky",
        blurb: "Eine Woche Fußball unter ruhigem Himmel für Kinder aus Kyjiw.",
        detail: "28 Kinder des FK „Atlet“ Kyjiw — drei komplette U12-Teams — konnten eine Woche lang in Nürnberg ohne Luftalarm schlafen, trainieren und spielen. Zum Abschluss holten die Jungs beim internationalen interkulturellen Fußballfest in Leipzig Gold — mit einem 2:1-Finalsieg gegen die Gastgeber von BSG Chemie Leipzig.",
        raised: "Abgeschlossen", impact: "Fußballwoche & Turniersieg", reach: "28 Kinder"
      },
      en: {
        category: "Sports", date: "Completed", title: "Piece of Peaceful Sky",
        blurb: "A week of football under a calm sky for children from Kyiv.",
        detail: "28 children from FC \"Atlet\" Kyiv — three full U12 teams — spent a week in Nuremberg sleeping, training and playing without air raid sirens. To top it off, the boys took gold at the international intercultural football festival in Leipzig — winning the final 2:1 against hosts BSG Chemie Leipzig.",
        raised: "Completed", impact: "Football week & tournament win", reach: "28 children"
      },
      uk: {
        category: "Спорт", date: "Завершено", title: "Piece of Peaceful Sky",
        blurb: "Тиждень футболу під мирним небом для дітей з Києва.",
        detail: "28 дітей з ФК «Атлет» Київ — три повні команди U12 — провели тиждень у Нюрнберзі, де могли спати, тренуватися й грати без повітряних тривог. Наостанок хлопці здобули золото на міжнародному міжкультурному футбольному фестивалі в Лейпцигу — з перемогою 2:1 у фіналі над господарями BSG Chemie Leipzig.",
        raised: "Завершено", impact: "Футбольний тиждень і перемога в турнірі", reach: "28 дітей"
      }
    }
  },
];
if (typeof module !== "undefined") module.exports = PROJECTS_DATA;
