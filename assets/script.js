const slides = [
   {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
   },
   {
      image: "slide2.jpg",
      tagLine:
         "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
   },
   {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
   },
   {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
   },
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerP = document.querySelector("#banner p");
const bulletPoints = document.querySelector(".dots");
let index = 0;

createBulletPoints();
clickRightArrow();
clickLeftArrow();

function createBulletPoints() {
   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      bulletPoints.appendChild(dot);
      if (i == index) {
         dot.classList.add("dot_selected");
      }
   }
}

function clickRightArrow() {
   rightArrow.addEventListener("click", () => {
      const dots = document.querySelectorAll(".dots .dot");
      dots[index].classList.remove("dot_selected");
      index++;
      if (index > slides.length - 1) {
         index = 0;
      }
      dots[index].classList.add("dot_selected");
      bannerImg.src = "assets/images/slideshow/" + slides[index].image;
      bannerP.innerHTML = slides[index].tagLine;
   });
}

function clickLeftArrow() {
   leftArrow.addEventListener("click", () => {
      const dots = document.querySelectorAll(".dots .dot");
      dots[index].classList.remove("dot_selected");
      index--;
      if (index < 0) {
         index = slides.length - 1;
      }
      dots[index].classList.add("dot_selected");
      bannerImg.src = "assets/images/slideshow/" + slides[index].image;
      bannerP.innerHTML = slides[index].tagLine;
   });
}
