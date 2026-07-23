/* Seitengenerator: node generate-projekte.js
   Liest projects-data.js + fotos/<slug>/ und schreibt für jede Sprache
   (de/en/uk) die Projektseiten sowie sitemap.xml.
   Ausgabe: projekte/<slug>.html (de, Root), en/projekte/<slug>.html, ua/projekte/<slug>.html.
   Nach dem Hinzufügen/Entfernen von Fotos oder Übersetzungen erneut ausführen. */
const fs = require("fs");
const path = require("path");
const PROJECTS = require("./projects-data.js");

const root = __dirname;
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const SITE_ROOT = "https://interbridge.eu/";
const LOCALES = ["de", "en", "uk"];
const URL_PREFIX = { de: "", en: "en/", uk: "ua/" };
const OG_LOCALE = { de: "de_DE", en: "en_US", uk: "uk_UA" };
const LANG_LABEL = { de: "DE", en: "EN", uk: "UA" };

const UI = {
  de: {
    nav: { ueber: "Über uns", projekte: "Projekte", spenden: "Spenden", kontakt: "Kontakt" },
    navAria: "Hauptnavigation", langAria: "Sprache",
    donateBtn: "Spenden", menuLabel: "Menü",
    back: "Alle Projekte",
    galleryHeading: n => `Bilder aus dem Projekt · ${n} Foto${n === 1 ? "" : "s"}`,
    galleryHeadingEmpty: "Bilder aus dem Projekt",
    galleryEmpty: "Fotos zu diesem Projekt folgen in Kürze.",
    statRaised: "gesammelt & eingesetzt", statReach: "Menschen erreicht", statFunds: "der Mittel verwendet",
    ctaPrimary: "Ähnliches Projekt unterstützen", ctaSecondary: "Weitere Projekte",
    footerKontakt: "Kontakt", footerImpressum: "Impressum", footerDatenschutz: "Datenschutz",
    lbClose: "Schließen", lbPrev: "Zurück", lbNext: "Weiter",
    completedBadge: "Abgeschlossen",
    metaSuffix: blurb => `${blurb} Projekt der gemeinnützigen Organisation Interbridge Nbg e.V. (Nürnberg).`,
    photoAlt: (title, i) => `${title} — Foto ${i}`,
  },
  en: {
    nav: { ueber: "About us", projekte: "Projects", spenden: "Donate", kontakt: "Contact" },
    navAria: "Main navigation", langAria: "Language",
    donateBtn: "Donate", menuLabel: "Menu",
    back: "All projects",
    galleryHeading: n => `Photos from the project · ${n} photo${n === 1 ? "" : "s"}`,
    galleryHeadingEmpty: "Photos from the project",
    galleryEmpty: "Photos of this project are coming soon.",
    statRaised: "raised & spent", statReach: "people reached", statFunds: "of funds used",
    ctaPrimary: "Support a similar project", ctaSecondary: "More projects",
    footerKontakt: "Contact", footerImpressum: "Imprint", footerDatenschutz: "Privacy Policy",
    lbClose: "Close", lbPrev: "Previous", lbNext: "Next",
    completedBadge: "Completed",
    metaSuffix: blurb => `${blurb} A project by the non-profit organization Interbridge Nbg e.V. (Nuremberg, Germany).`,
    photoAlt: (title, i) => `${title} — photo ${i}`,
  },
  uk: {
    nav: { ueber: "Про нас", projekte: "Проєкти", spenden: "Пожертвувати", kontakt: "Контакти" },
    navAria: "Головна навігація", langAria: "Мова",
    donateBtn: "Пожертвувати", menuLabel: "Меню",
    back: "Усі проєкти",
    galleryHeading: n => `Фото з проєкту · ${n} фото`,
    galleryHeadingEmpty: "Фото з проєкту",
    galleryEmpty: "Фото цього проєкту з'являться найближчим часом.",
    statRaised: "зібрано й використано", statReach: "людей охоплено", statFunds: "коштів використано",
    ctaPrimary: "Підтримати подібний проєкт", ctaSecondary: "Інші проєкти",
    footerKontakt: "Контакти", footerImpressum: "Вихідні дані", footerDatenschutz: "Політика конфіденційності",
    lbClose: "Закрити", lbPrev: "Назад", lbNext: "Далі",
    completedBadge: "Завершено",
    metaSuffix: blurb => `${blurb} Проєкт громадської організації Interbridge Nbg e.V. (Нюрнберг, Німеччина).`,
    photoAlt: (title, i) => `${title} — фото ${i}`,
  },
};

const upPath = n => "../".repeat(n);
/* Pfad von einer Seite in Sprache/Verzeichnis-Tiefe `from` zur Zieldatei `filename` (relativ zur jeweiligen Sprachwurzel) in Sprache `to`. */
function crossHref(fromLocale, insideProjekte, toLocale, filename) {
  const depth = (fromLocale === "de" ? 0 : 1) + (insideProjekte ? 1 : 0);
  return upPath(depth) + URL_PREFIX[toLocale] + filename;
}

const page = (p, photos, locale) => {
  const t = p.i18n[locale];
  const ui = UI[locale];
  const assetPrefix = locale === "de" ? "../" : "../../"; // zu gemeinsamen Assets (Root)
  const localeBase = SITE_ROOT + URL_PREFIX[locale];
  const cover = p.cover ? assetPrefix + p.cover : (photos[0] ? assetPrefix + "fotos/" + p.slug + "/" + photos[0] : "");
  const pageUrl = localeBase + "projekte/" + p.slug + ".html";
  const ogImage = SITE_ROOT + (p.cover || (photos[0] ? "fotos/" + p.slug + "/" + photos[0] : "interbridge-logo.png"));

  const galleryItems = photos.map((f, i) => {
    const full = assetPrefix + "fotos/" + p.slug + "/" + f;
    const thumb = assetPrefix + "fotos/" + p.slug + "/thumbs/" + f;
    return `      <a class="ph-frame" href="${full}" data-index="${i}"><img src="${thumb}" alt="${esc(ui.photoAlt(t.title, i + 1))}" loading="lazy"></a>`;
  }).join("\n");

  const gallery = photos.length
    ? `    <div class="pp-gallery-h">${esc(ui.galleryHeading(photos.length))}</div>
    <div class="pp-gallery" id="gallery">
${galleryItems}
    </div>`
    : `    <div class="pp-gallery-h">${esc(ui.galleryHeadingEmpty)}</div>
    <div class="pp-empty">${esc(ui.galleryEmpty)}</div>`;

  const hreflangTags = LOCALES.map(l =>
    `<link rel="alternate" hreflang="${l}" href="${SITE_ROOT + URL_PREFIX[l]}projekte/${p.slug}.html">`
  ).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${SITE_ROOT}projekte/${p.slug}.html">`;

  const langSwitcher = LOCALES.map(l => {
    if (l === locale) return `<span class="lang-active">${LANG_LABEL[l]}</span>`;
    return `<a class="lang-idle" href="${crossHref(locale, true, l, "projekte/" + p.slug + ".html")}">${LANG_LABEL[l]}</a>`;
  }).join("\n        ");

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)} — Interbridge Nbg e.V.</title>
<meta name="description" content="${esc(ui.metaSuffix(t.blurb))}">
<link rel="canonical" href="${pageUrl}">
<meta name="robots" content="index, follow">
${hreflangTags}
<meta property="og:site_name" content="Interbridge Nbg e.V.">
<meta property="og:locale" content="${OG_LOCALE[locale]}">
<meta property="og:title" content="${esc(t.title)} — Interbridge Nbg e.V.">
<meta property="og:description" content="${esc(t.blurb)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${pageUrl}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(t.title)} — Interbridge Nbg e.V.">
<meta name="twitter:description" content="${esc(t.blurb)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="${assetPrefix}favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${assetPrefix}styles.css">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Interbridge Nbg e.V.", "item": "${localeBase}"},
    {"@type": "ListItem", "position": 2, "name": "${esc(ui.nav.projekte)}", "item": "${localeBase}#projekte"},
    {"@type": "ListItem", "position": 3, "name": "${esc(t.title)}", "item": "${pageUrl}"}
  ]
}
</script>
</head>
<body>

<header class="site-header">
  <div class="hdr">
    <a href="../index.html" class="logo-link">
      <img src="${assetPrefix}interbridge-logo.png" alt="interbridge Nürnberg e.V." class="logo-img">
    </a>
    <nav class="nav-links" aria-label="${ui.navAria}">
      <a href="../index.html#ueber">${esc(ui.nav.ueber)}</a>
      <a href="../index.html#projekte">${esc(ui.nav.projekte)}</a>
      <a href="../index.html#spenden">${esc(ui.nav.spenden)}</a>
      <a href="../index.html#kontakt">${esc(ui.nav.kontakt)}</a>
    </nav>
    <div class="hdr-right">
      <div class="lang" aria-label="${ui.langAria}">
        ${langSwitcher}
      </div>
      <a href="https://paypal.me/InterbridgeNbg" target="_blank" rel="noopener" class="btn-donate-hdr">${esc(ui.donateBtn)}</a>
      <button class="burger" id="burgerBtn" aria-label="${ui.menuLabel}" aria-expanded="false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#17123A" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="../index.html#ueber">${esc(ui.nav.ueber)}</a>
    <a href="../index.html#projekte">${esc(ui.nav.projekte)}</a>
    <a href="../index.html#spenden">${esc(ui.nav.spenden)}</a>
    <a href="../index.html#kontakt">${esc(ui.nav.kontakt)}</a>
    <div class="lang lang-mobile">
      ${langSwitcher}
    </div>
  </div>
</header>

${cover ? `<div class="pp-hero">
  <div class="ph-frame pp-cover contain"><img src="${cover}" alt="${esc(t.title)}"></div>
  <span class="pp-badge">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 12l4 4 8-8" stroke="#FF7C3B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    ${esc(ui.completedBadge)} · ${esc(t.category)}
  </span>
</div>` : ""}

<main class="container pp-head">
  <a class="pp-back" href="../index.html#projekte">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M19 12H5m6 6l-6-6 6-6" stroke="#FF7C3B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    ${esc(ui.back)}
  </a>
  <div class="pp-date">${esc(t.date)} · ${esc(t.category)}</div>
  <h1>${esc(t.title)}</h1>
  <p class="pp-detail">${esc(t.detail)}</p>
  <div class="pp-stats">
    <div class="mstat"><div class="mstat-num">${esc(t.raised)}</div><div class="mstat-label">${esc(ui.statRaised)}</div></div>
    <div class="mstat"><div class="mstat-num">${esc(t.reach)}</div><div class="mstat-label">${esc(ui.statReach)}</div></div>
    <div class="mstat"><div class="mstat-num">100&nbsp;%</div><div class="mstat-label">${esc(ui.statFunds)}</div></div>
  </div>

${gallery}

  <div class="pp-cta-row">
    <a href="../index.html#spenden" class="btn btn-primary">${esc(ui.ctaPrimary)}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#FF7C3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <a href="../index.html#projekte" class="btn btn-outline">${esc(ui.ctaSecondary)}</a>
  </div>
</main>

<footer id="kontakt" class="site-footer">
  <div class="container inner" style="padding-top:34px">
    <div class="footer-bottom" style="border-top:none;padding-top:0">
      <span>© 2026 Interbridge Nbg e.V. · <a href="mailto:interbridgenbg@gmail.com" style="color:inherit;text-decoration:none">interbridgenbg@gmail.com</a> · Nürnberg</span>
      <span class="footer-legal"><a href="../index.html#kontakt">${esc(ui.footerKontakt)}</a><a href="../impressum.html">${esc(ui.footerImpressum)}</a><a href="../datenschutz.html">${esc(ui.footerDatenschutz)}</a></span>
    </div>
  </div>
</footer>

<div class="lightbox" id="lightbox" hidden>
  <button class="lb-btn lb-close" id="lbClose" aria-label="${ui.lbClose}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg></button>
  <button class="lb-btn lb-prev" id="lbPrev" aria-label="${ui.lbPrev}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  <button class="lb-btn lb-next" id="lbNext" aria-label="${ui.lbNext}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  <img id="lbImg" alt="">
  <span class="lb-count" id="lbCount"></span>
</div>

<script src="${assetPrefix}projekt.js"></script>
</body>
</html>
`;
};

let total = 0;
for (const locale of LOCALES) {
  const outDir = path.join(root, URL_PREFIX[locale], "projekte");
  fs.mkdirSync(outDir, { recursive: true });
  for (const p of PROJECTS) {
    const dir = path.join(root, "fotos", p.slug);
    let photos = [];
    if (fs.existsSync(dir)) {
      photos = fs.readdirSync(dir).filter(f => /\.jpe?g$/i.test(f)).sort();
    }
    fs.writeFileSync(path.join(outDir, p.slug + ".html"), page(p, photos, locale));
    console.log(`${URL_PREFIX[locale]}projekte/${p.slug}.html — ${photos.length} Fotos`);
    if (locale === "de") total += photos.length;
  }
}
console.log(`OK: ${PROJECTS.length} Projekte × ${LOCALES.length} Sprachen, ${total} Fotos`);

/* ---------- sitemap.xml (mit hreflang-Alternates) ---------- */
const pageKeys = ["", "impressum.html", "datenschutz.html", ...PROJECTS.map(p => "projekte/" + p.slug + ".html")];
const sitemapUrls = pageKeys.map(key => {
  const alternates = LOCALES.map(l => `      <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_ROOT}${URL_PREFIX[l]}${key}"/>`).join("\n");
  const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ROOT}${key}"/>`;
  const isHome = key === "";
  const priority = isHome ? "1.0" : key.startsWith("projekte/") ? (key === "projekte/ukrainehilfe.html" ? "0.8" : "0.7") : "0.3";
  const changefreq = isHome ? "weekly" : key.startsWith("projekte/") ? "monthly" : "yearly";
  return LOCALES.map(l => `  <url>
    <loc>${SITE_ROOT}${URL_PREFIX[l]}${key}</loc>
${alternates}
${xDefault}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n");
}).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
console.log("sitemap.xml aktualisiert (mit hreflang, 3 Sprachen)");

module.exports = { UI, LOCALES, URL_PREFIX, SITE_ROOT, OG_LOCALE, LANG_LABEL, crossHref, upPath, esc };
