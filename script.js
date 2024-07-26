function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const sr = ScrollReveal({
  distance: "55px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".section__text", { delay: 150, origin: "top" });
sr.reveal(".profile", { delay: 600, origin: "right" });
sr.reveal(".title", { delay: 150, origin: "top" });
sr.reveal(".about-containers", { delay: 150, origin: "top" });
sr.reveal(".about-pic", { delay: 600, origin: "right" });
sr.reveal("p", { delay: 100, origin: "top" });
sr.reveal("#desktop-nav", { delay: 100, origin: "top" });
