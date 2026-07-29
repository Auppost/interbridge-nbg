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
      },
      fr: {
        category: "Aide d'urgence", date: "En cours depuis 2022", title: "Aide à l'Ukraine",
        blurb: "Aide humanitaire et dons en nature pour les personnes en Ukraine.",
        detail: "Notre projet principal : nous collectons, achetons et livrons des biens humanitaires — des médicaments aux produits de première nécessité — et les remettons à nos partenaires sur place avec une documentation complète.",
        raised: "En cours", impact: "Livraisons d'aide vers l'Ukraine", reach: "1 000+"
      },
      ru: {
        category: "Экстренная помощь", date: "Продолжается с 2022 года", title: "Помощь Украине",
        blurb: "Гуманитарная помощь и вещевые пожертвования для людей в Украине.",
        detail: "Наш главный проект: мы собираем, закупаем и доставляем гуманитарные грузы — от медикаментов до товаров первой необходимости — и передаём их партнёрам на месте с полной документацией.",
        raised: "Продолжается", impact: "Гуманитарные поставки в Украину", reach: "1000+"
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
      },
      fr: {
        category: "Sensibilisation", date: "En cours", title: "Solidarité avec l'Ukraine",
        blurb: "Rassemblements et actions de rue à Nuremberg.",
        detail: "Par des rassemblements et des actions de rue, nous maintenons l'attention du public sur la guerre en Ukraine, informons la population et collectons des dons pour nos projets humanitaires.",
        raised: "Régulièrement", impact: "Rassemblements et actions", reach: "Public"
      },
      ru: {
        category: "Общественные акции", date: "Продолжается", title: "Солидарность с Украиной",
        blurb: "Митинги и уличные акции в Нюрнберге.",
        detail: "Митингами и уличными акциями мы не даём обществу забыть о войне в Украине, рассказываем людям о происходящем и собираем средства на наши гуманитарные проекты.",
        raised: "Регулярно", impact: "Митинги и акции", reach: "Публично"
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
      },
      fr: {
        category: "Aide d'urgence", date: "Aide hivernale", title: "De l'énergie pour l'Ukraine",
        blurb: "Générateurs et stations d'énergie contre les coupures de courant.",
        detail: "Après les attaques contre le réseau électrique, nous avons acheté des générateurs et des stations d'énergie et les avons acheminés en Ukraine — de l'électricité et de la chaleur pour les familles et les institutions.",
        raised: "Terminé", impact: "Générateurs remis", reach: "Familles"
      },
      ru: {
        category: "Экстренная помощь", date: "Зимняя помощь", title: "Энергия для Украины",
        blurb: "Генераторы и мощные зарядные станции на случай блэкаута.",
        detail: "После атак на энергосистему мы закупили генераторы и зарядные станции и доставили их в Украину — свет и тепло для семей и учреждений.",
        raised: "Завершено", impact: "Переданы генераторы", reach: "Семьи"
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
      },
      fr: {
        category: "Santé", date: "Terminé", title: "Sauver des vies — lutter contre l'intoxication par la fumée",
        blurb: "Équipements de protection contre l'intoxication par la fumée.",
        detail: "L'intoxication par la fumée est l'une des causes de décès les plus fréquentes lors d'incendies et de bombardements. Nous avons acheté des équipements de protection et les avons remis aux secouristes et aux civils.",
        raised: "Terminé", impact: "Équipements remis", reach: "Secouristes"
      },
      ru: {
        category: "Здоровье", date: "Завершено", title: "Спасаем жизни — боремся с отравлением угарным газом",
        blurb: "Защитное снаряжение от отравления дымом.",
        detail: "Отравление дымом — одна из самых частых причин смерти при пожарах и обстрелах. Мы закупили защитное снаряжение и передали его спасателям и гражданским.",
        raised: "Завершено", impact: "Передано снаряжение", reach: "Спасатели"
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
      },
      fr: {
        category: "Social", date: "En cours", title: "Il n'y a pas de parents âgés étrangers !",
        blurb: "Soutien aux personnes âgées en difficulté.",
        detail: "La guerre frappe particulièrement durement les personnes âgées. Nous soutenons les seniors avec de la nourriture, des médicaments et une attention personnelle — personne ne doit rester seul.",
        raised: "En cours", impact: "Personnes âgées", reach: "En continu"
      },
      ru: {
        category: "Социальная помощь", date: "Продолжается", title: "Чужих пожилых родителей не бывает!",
        blurb: "Поддержка пожилых людей в беде.",
        detail: "Война особенно тяжело бьёт по пожилым людям. Мы поддерживаем их продуктами, лекарствами и личной заботой — никто не должен оставаться один.",
        raised: "Продолжается", impact: "Пожилые люди", reach: "Постоянно"
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
        detail: "У межах програми Erasmus+ ми дали молодим людям можливість брати участь у міжнародних зустрічах — це культурний обмін, що будує мости між країнами та поколіннями.",
        raised: "Профінансовано", impact: "Молодіжний обмін", reach: "Молодь"
      },
      fr: {
        category: "Éducation", date: "Terminé", title: "Mobilité des jeunes Erasmus+",
        blurb: "Échange international de jeunes en Europe.",
        detail: "Dans le cadre d'Erasmus+, nous avons permis à des jeunes de participer à des rencontres internationales — un échange culturel qui construit des ponts entre les pays et les générations.",
        raised: "Financé", impact: "Échange de jeunes", reach: "Jeunes"
      },
      ru: {
        category: "Образование", date: "Завершено", title: "Молодёжная мобильность Erasmus+",
        blurb: "Международный молодёжный обмен в Европе.",
        detail: "В рамках программы Erasmus+ мы дали молодым людям возможность участвовать в международных встречах — это культурный обмен, который строит мосты между странами и поколениями.",
        raised: "Профинансировано", impact: "Молодёжный обмен", reach: "Молодёжь"
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
      },
      fr: {
        category: "Sport", date: "Terminé", title: "Piece of Peaceful Sky",
        blurb: "Une semaine de football sous un ciel paisible pour des enfants de Kyiv.",
        detail: "28 enfants du FC « Atlet » Kyiv — trois équipes U12 complètes — ont passé une semaine à Nuremberg à dormir, s'entraîner et jouer sans alertes aériennes. Pour couronner le tout, les garçons ont remporté l'or au festival international et interculturel de football de Leipzig — avec une victoire 2:1 en finale contre les hôtes du BSG Chemie Leipzig.",
        raised: "Terminé", impact: "Semaine de football et victoire au tournoi", reach: "28 enfants"
      },
      ru: {
        category: "Спорт", date: "Завершено", title: "Piece of Peaceful Sky",
        blurb: "Неделя футбола под мирным небом для детей из Киева.",
        detail: "28 детей из ФК «Атлет» Киев — три полные команды U12 — провели неделю в Нюрнберге, где могли спать, тренироваться и играть без воздушных тревог. В завершение ребята взяли золото на международном межкультурном футбольном фестивале в Лейпциге — с победой 2:1 в финале над хозяевами BSG Chemie Leipzig.",
        raised: "Завершено", impact: "Футбольная неделя и победа в турнире", reach: "28 детей"
      }
    }
  },
];
if (typeof module !== "undefined") module.exports = PROJECTS_DATA;
