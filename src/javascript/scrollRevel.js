import ScrollReveal from "scrollreveal";

// !=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
  // reset: true, // Animation repeat
});

sr.reveal(".home__img, .new__data, .care__img, .contact__content");
sr.reveal(".home__data, .care__list, .contact__img", { delay: 500 });
sr.reveal(".new__card", { delay: 500, interval: 100 });
sr.reveal(".shop__card", { interval: 100 });
