const toggleMenuBtn = document.querySelector(".toggle-menu-btn img");
const menu = document.getElementById("navLinks");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle-btn");
let firstPrice = document.querySelector("#first");
let secondPrice = document.querySelector("#Second");
let thirdPrice = document.querySelector("#third");
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let nums = document.querySelectorAll("#num");
let serviceYearSection = document.getElementById("service-year");

toggleMenuBtn.addEventListener("click", () => {
  toggleMenuBtn.src = toggleMenuBtn.src.includes("images/menu.svg") 
    ? "images/close-icon.svg" 
    : "images/menu.svg";
    menu.classList.toggle("flex");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleMenuBtn.src = "images/menu.svg";
    document.body.style.overflow = "auto";
  });
}) 

toggleBtn.addEventListener("click", () => {
  const newFirstPrice = firstPrice.textContent === "$99" ? "$199" : "$99";
  firstPrice.textContent = newFirstPrice;
  const newSecondPrice = secondPrice.textContent === "$200" ? "$250" : "$200";
  secondPrice.textContent = newSecondPrice;
  const newThirdPrice = thirdPrice.textContent === "$399" ? "$500" : "$399";
  thirdPrice.textContent = newThirdPrice;
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active-filter-btn");
    });
    button.classList.add("active-filter-btn");
    const filterValue = button.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.add("hidden");
      if(filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      }
    })
  });
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.right-btn',
    prevEl: '.left-btn',
  },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
  autoplay: {
  delay: 3000,
  disableOnInteraction: false,
  },
});