var currentSlide = 0;
var slides = document.getElementById("slide-show").getElementsByTagName("img");

function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(nextSlide, 3000); // change slide every 3 seconds

window.onscroll = function(){myFunction()};
var navbar = document.getElementById ("navbar")
var sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
