const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("active"));
});

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on("scroll", () => {
  ScrollTrigger.update();
});
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
  ScrollTrigger.update();
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 800,
  delay: 200,
  easing: "ease-in-out",
});

gsap.to("nav", {
  opacity: 1,
  duration: 2,
});

sr.reveal(
  ".hero-headlines h1, .requirements-headlines h1, .about-headlines, .pets-headlines, .testimoials h1",
  { delay: 200 }
);
sr.reveal(
  ".hero-headlines p, .requirements-headlines p, .testimoials h6, .footer-links, .footer-contact-info",
  { delay: 500 }
);
sr.reveal(
  ".hero-headlines-buttons, .r-items-container, .testimony-items, .footer-brand",
  { delay: 1000 }
);
sr.reveal(".copyright", { delay: 600 });

gsap.from(".hero-images img", {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: ".hero-images",
});
