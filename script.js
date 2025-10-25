const slider = document.querySelector(".image-comparison .slider");
const beforeimage = document.querySelector(".image-comparison .before-image");
const sliderline = document.querySelector(".image-comparison .slider-line");
const slidericon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", (e) => {
  let slidervalue = e.target.value + "%";

  beforeimage.style.width = slidervalue;
  sliderline.style.left = slidervalue;
  slidericon.style.left = slidervalue;
});
