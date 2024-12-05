

const carSlide = document.getElementById("car-sli");
const carSliders = document.querySelector("#car-sli .slid");
const carderecho = document.querySelector(".button-next");
const carizquierdo = document.querySelector(".button-prev");
let direccion;

carderecho.onclick = function () {
  carSlide.scrollLeft += 500;  
};

carizquierdo.onclick = function () {
  carSlide.scrollLeft -= 500;
};