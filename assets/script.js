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

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateSlide() {
  img.src = "assets/images/slideshow/" + slides[index].image;
  text.innerHTML = slides[index].tagLine;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("fa-solid", "dot_selected");
      dot.classList.remove("fa-light");
    } else {
      dot.classList.remove("fa-solid", "dot_selected");
      dot.classList.add("fa-light");
    }
  });
}

// Flèche droite
arrowRight.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
  console.log("→ Slide suivant");
});

// Flèche gauche
arrowLeft.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
  console.log("← Slide précédent");
});

// Initialisation
updateSlide();
