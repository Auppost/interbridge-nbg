/* Seitengenerator: node generate-projekte.js
   Liest projects-data.js + fotos/<slug>/ und schreibt projekte/<slug>.html.
   Nach dem Hinzufügen/Entfernen von Fotos erneut ausführen. */
const fs = require("fs");
const path = require("path");
const PROJECTS = require("./projects-data.js");

const root = __dirname;
const outDir = path.join(root, "projekte");
fs.mkdirSync(outDir, { recursive: true });

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const page = (p, photos) => {
  const cover = p.cover ? "../" + p.cover : (photos[0] ? "../fotos/" + p.slug + "/" + photos[0] : "");
  const galleryItems = photos.map((f, i) => {
    const full = "../fotos/" + p.slug + "/" + f;
    const thumb = "../fotos/" + p.slug + "/thumbs/" + f;
    return `      <a class="ph-frame" href="${full}" data-index="${i}"><img src="${thumb}" alt="${esc(p.title)} — Foto ${i + 1}" loading="lazy"></a>`;
  }).join("\n");

  const gallery = photos.length
    ? `    <div class="pp-gallery-h">Bilder aus dem Projekt · ${photos.length} Fotos</div>
    <div class="pp-gallery" id="gallery">
${galleryItems}
    </div>`
    : `    <div class="pp-gallery-h">Bilder aus dem Projekt</div>
    <div class="pp-empty">Fotos zu diesem Projekt folgen in Kürze.</div>`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} — Interbridge Nbg e.V.</title>
<meta name="description" content="${esc(p.blurb)} Projekt der gemeinnützigen Organisation Interbridge Nbg e.V. (Nürnberg).">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
</head>
<body>

<header class="site-header">
  <div class="hdr">
    <a href="../index.html" class="logo-link">
      <img src="../interbridge-logo.png" alt="interbridge Nürnberg e.V." class="logo-img">
    </a>
    <nav class="nav-links" aria-label="Hauptnavigation">
      <a href="../index.html#ueber">Über uns</a>
      <a href="../index.html#projekte">Projekte</a>
      <a href="../index.html#spenden">Spenden</a>
      <a href="../index.html#kontakt">Kontakt</a>
    </nav>
    <div class="hdr-right">
      <a href="https://paypal.me/InterbridgeNbg" target="_blank" rel="noopener" class="btn-donate-hdr">Spenden</a>
      <button class="burger" id="burgerBtn" aria-label="Menü" aria-expanded="false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#17123A" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="../index.html#ueber">Über uns</a>
    <a href="../index.html#projekte">Projekte</a>
    <a href="../index.html#spenden">Spenden</a>
    <a href="../index.html#kontakt">Kontakt</a>
  </div>
</header>

${cover ? `<div class="pp-hero">
  <div class="ph-frame pp-cover contain"><img src="${cover}" alt="${esc(p.title)}"></div>
  <span class="pp-badge">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 12l4 4 8-8" stroke="#FF7C3B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Abgeschlossen · ${esc(p.category)}
  </span>
</div>` : ""}

<main class="container pp-head">
  <a class="pp-back" href="../index.html#projekte">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M19 12H5m6 6l-6-6 6-6" stroke="#FF7C3B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Alle Projekte
  </a>
  <div class="pp-date">${esc(p.date)} · ${esc(p.category)}</div>
  <h1>${esc(p.title)}</h1>
  <p class="pp-detail">${esc(p.detail)}</p>
  <div class="pp-stats">
    <div class="mstat"><div class="mstat-num">${esc(p.raised)}</div><div class="mstat-label">gesammelt &amp; eingesetzt</div></div>
    <div class="mstat"><div class="mstat-num">${esc(p.reach)}</div><div class="mstat-label">Menschen erreicht</div></div>
    <div class="mstat"><div class="mstat-num">100&nbsp;%</div><div class="mstat-label">der Mittel verwendet</div></div>
  </div>

${gallery}

  <div class="pp-cta-row">
    <a href="../index.html#spenden" class="btn btn-primary">Ähnliches Projekt unterstützen
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#FF7C3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <a href="../index.html#projekte" class="btn btn-outline">Weitere Projekte</a>
  </div>
</main>

<footer id="kontakt" class="site-footer">
  <div class="container inner" style="padding-top:34px">
    <div class="footer-bottom" style="border-top:none;padding-top:0">
      <span>© 2026 Interbridge Nbg e.V. · <a href="mailto:interbridgenbg@gmail.com" style="color:inherit;text-decoration:none">interbridgenbg@gmail.com</a> · Nürnberg</span>
      <span class="footer-legal"><a href="../index.html#kontakt">Kontakt</a></span>
    </div>
  </div>
</footer>

<div class="lightbox" id="lightbox" hidden>
  <button class="lb-btn lb-close" id="lbClose" aria-label="Schließen"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg></button>
  <button class="lb-btn lb-prev" id="lbPrev" aria-label="Zurück"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  <button class="lb-btn lb-next" id="lbNext" aria-label="Weiter"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  <img id="lbImg" alt="">
  <span class="lb-count" id="lbCount"></span>
</div>

<script src="../projekt.js"></script>
</body>
</html>
`;
};

let total = 0;
for (const p of PROJECTS) {
  const dir = path.join(root, "fotos", p.slug);
  let photos = [];
  if (fs.existsSync(dir)) {
    photos = fs.readdirSync(dir).filter(f => /\.jpe?g$/i.test(f)).sort();
  }
  fs.writeFileSync(path.join(outDir, p.slug + ".html"), page(p, photos));
  console.log(`projekte/${p.slug}.html — ${photos.length} Fotos`);
  total += photos.length;
}
console.log(`OK: ${PROJECTS.length} Seiten, ${total} Fotos`);
