/* Interbridge Nbg e.V. — Projektseite: Lightbox + Mobile-Menü */

/* ---------- Lightbox ---------- */
const links = [...document.querySelectorAll("#gallery a")];
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCount = document.getElementById("lbCount");
let current = 0;

function show(i) {
  current = (i + links.length) % links.length;
  lbImg.src = links[current].href;
  lbCount.textContent = (current + 1) + " / " + links.length;
}
function openLb(i) {
  show(i);
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
}
function closeLb() {
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
}

links.forEach((a, i) => a.addEventListener("click", e => { e.preventDefault(); openLb(i); }));

if (links.length) {
  document.getElementById("lbClose").addEventListener("click", closeLb);
  document.getElementById("lbPrev").addEventListener("click", () => show(current - 1));
  document.getElementById("lbNext").addEventListener("click", () => show(current + 1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener("keydown", e => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  /* Swipe-Navigation */
  let touchX = null;
  lightbox.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 45) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });
}

/* ---------- Mobile-Menü ---------- */
const burger = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  const open = mobileMenu.hidden;
  mobileMenu.hidden = !open;
  burger.setAttribute("aria-expanded", String(open));
});
