let slideIndex = 0;
let colors = ['#e40011', '#ffffff', '#e7e7e7'];
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  document.querySelector('.adv').style.background = colors[slideIndex-1];
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
