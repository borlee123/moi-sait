let offAnimation = document.querySelector(".page");

let themButton = document.querySelector(".theme-button");
themButton.onclick = function () {
  offAnimation.classList.remove("animation");
  offAnimation.classList.add("animation-color-white");
};
