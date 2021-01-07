// Open Account
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Smooth Scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});
// Nav Scrolling Behavior
// const NavLink = document.querySelectorAll(".nav__link");
// NavLink.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     let id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// Nav Scrolling Behavior another way

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabContainers = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Event Delegation

tabContainers.addEventListener("click", function (e) {
  let click = e.target.closest(".operations__tab");

  // Guard clause
  if (!click) return;
  // remove the all active classes
  tabs.forEach((t) => t.classList.remove("operations__tab_active"));
  tabsContent.forEach((tc) =>
    tc.classList.remove("operations__content--active")
  );
  // Active Tabs
  click.classList.add("operations__tab_active");

  // Active content area
  console.log(click.dataset.data);
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation

let nav = document.querySelector(".nav");

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});
// nav.addEventListener("mouseover", handleHover.bind(0.5));
// nav.addEventListener("mouseout", handleHover.bind(1));

//.....Sticky Navigation..............

const initialCoords = section1.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

//............ Reveal section...........
const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (sec) {
  sectionObserver.observe(sec);
  // sec.classList.add("section--hidden");
});

//................ Lazy Loading Images...........

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));



// ..........slider..........................

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

//const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.5) translateX(-700px)";
// slider.style.overflow = "visible";

slides.forEach((sl, index) => {
  sl.style.transform = `translateX(${100 * index}%)`;
});

// go the Next Slide
let currentSlide = 0;
const maxSlide = slides.length;

btnRight.addEventListener("click", function () {
  if (currentSlide == maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides.forEach((sl, index) => {
    sl.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
  // currentSlide1 =:-100% 0% 100% 200%;
});

btnLeft.addEventListener("click", function () {
  if (currentSlide == 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  slides.forEach((sl, index) => {
    sl.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});
