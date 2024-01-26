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
console.log(slides);

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const banner = document.querySelector(".banner-img");
const bulletPoints = document.querySelector(".dots");

function createBulletPoints() {
   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      bulletPoints.appendChild(dot);
   }
}

createBulletPoints();
