/* Interbridge Nbg e.V. — Startseite (Projektdaten: projects-data.js) */

/* ---------- Sprache ---------- */
const LOCALE = ["en", "uk"].includes(document.documentElement.lang) ? document.documentElement.lang : "de";
const UI_STRINGS = {
  de: { photoSoon: "Foto folgt", completed: "Abgeschlossen", details: "Details" },
  en: { photoSoon: "Photo coming soon", completed: "Completed", details: "Details" },
  uk: { photoSoon: "Фото незабаром", completed: "Завершено", details: "Деталі" },
};
const UI = UI_STRINGS[LOCALE];

/* ---------- Bild mit Platzhalter-Fallback ---------- */
function mountImage(frame, src, alt, contain) {
  frame.innerHTML = "";
  frame.classList.remove("placeholder");
  if (contain) frame.classList.add("contain");
  if (!src) { frame.classList.add("placeholder"); frame.dataset.ph = frame.dataset.ph || UI.photoSoon; return; }
  const img = new Image();
  img.alt = alt || "";
  img.loading = "lazy";
  img.onerror = () => { frame.innerHTML = ""; frame.classList.add("placeholder"); frame.dataset.ph = frame.dataset.ph || UI.photoSoon; };
  img.src = src;
  frame.appendChild(img);
}

/* Hero & Team: deklarative Frames aus dem HTML */
document.querySelectorAll(".ph-frame[data-img]").forEach(f => {
  mountImage(f, f.dataset.img, f.dataset.alt);
});

/* ---------- Projektkarten rendern (Link auf Projektseite) ---------- */
const grid = document.getElementById("projectsGrid");
const checkIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 12l4 4 8-8" stroke="#FF7C3B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const arrowIcon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#FF7C3B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
/* projects-data.js speichert Bildpfade relativ zur Site-Root (z. B. "fotos/x.jpg");
   auf /en/ und /ua/ liegt die Startseite eine Ebene tiefer, daher hier zurück zur Root. */
const assetPrefix = LOCALE === "de" ? "" : "../";

PROJECTS_DATA.forEach(p => {
  const t = p.i18n[LOCALE] || p.i18n.de;
  const card = document.createElement("a");
  card.className = "proj";
  card.href = "projekte/" + p.slug + ".html";
  card.innerHTML = `
    <div class="proj-media">
      <div class="ph-frame contain" data-ph="${UI.photoSoon}"></div>
      <span class="proj-badge">${checkIcon}${UI.completed}</span>
      <span class="proj-cat"></span>
    </div>
    <div class="proj-body">
      <div class="proj-date"></div>
      <h3></h3>
      <p class="proj-blurb"></p>
      <div class="proj-foot">
        <div>
          <div class="proj-raised"></div>
          <div class="proj-impact"></div>
        </div>
        <span class="lnk">${UI.details} ${arrowIcon}</span>
      </div>
    </div>`;
  card.querySelector(".proj-cat").textContent = t.category;
  card.querySelector(".proj-date").textContent = t.date;
  card.querySelector("h3").textContent = t.title;
  card.querySelector(".proj-blurb").textContent = t.blurb;
  card.querySelector(".proj-raised").textContent = t.raised;
  card.querySelector(".proj-impact").textContent = t.impact;
  mountImage(card.querySelector(".ph-frame"), assetPrefix + p.cover, t.title, true);
  grid.appendChild(card);
});

/* ---------- Mobile-Menü ---------- */
const burger = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  const open = mobileMenu.hidden;
  mobileMenu.hidden = !open;
  burger.setAttribute("aria-expanded", String(open));
});
mobileMenu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => { mobileMenu.hidden = true; burger.setAttribute("aria-expanded", "false"); })
);

/* ---------- Spendenbeträge → PayPal-Link ---------- */
const paypalCta = document.getElementById("paypalCta");
const PAYPAL_BASE = "https://paypal.me/InterbridgeNbg";
document.querySelectorAll(".amount-btn, .amount-free").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".amount-btn, .amount-free").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const amt = btn.dataset.amount;
    paypalCta.href = amt ? `${PAYPAL_BASE}/${amt}` : PAYPAL_BASE;
  });
});

/* ---------- IBAN/BIC/Karte per Klick kopieren ---------- */
document.querySelectorAll(".pay-value.copy").forEach(el => {
  el.addEventListener("click", async () => {
    const text = el.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 1600);
  });
});
