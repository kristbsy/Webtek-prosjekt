let slideshow_hovedside = [
  {
    kilde: "img/slideshow/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av ..."
  },
  {
    kilde: "img/slideshow/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av ..."
  },
  {
    kilde: "img/slideshow/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av ..."
  },
  {
    kilde: "img/slideshow/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av ..."
  }
]


function injectSlideshow() {
    let slideshow = document.getElementById("slideshow_home")

    for (let slide of slideshow_hovedside){
        let div = document.createElement("div");
        div.className = "mySlides fade";
      
        let img = document.createElement("img");
        img.setAttribute('src', `${slide.kilde}`);
        img.setAttribute('alt', `${slide.alternativ_tekst}`);

        div.appendChild(img);
        slideshow.appendChild(div);
  }

  let buttons = document.getElementById("slideshow_buttons");

  for (let i = 1; i < slideshow_hovedside.length+1; i++) {
      let span = document.createElement("span");
      span.className = "dot";

      span.setAttribute('onclick', 'currentSlide(' + i + ')');
      
      buttons.appendChild(span);
  }
}

injectSlideshow();

//////////////////////////     Slideshow.js     //////////////////////////

//5 seconds between each slide:
let SlideshowIntervalID = setInterval(plusSlides, 5000, 1);

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    //Resets the interval
    clearInterval(SlideshowIntervalID)
    SlideshowIntervalID = setInterval(plusSlides, 5000, 1);
}





