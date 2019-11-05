let slideshow_hovedside = [
  {
    kilde: "img/slideshow/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av ..."
  },
  {
    kilde: "img/slideshow/JuleBilde2.jpg",
    alternativ_tekst: "Bilde av ..."
  },
  {
    kilde: "img/slideshow/JuleBilde3.jpg",
    alternativ_tekst: "Bilde av ..."
  },
  {
    kilde: "img/slideshow/JuleBilde4.jpg",
    alternativ_tekst: "Bilde av ..."
  }
]

let slideshow_hytte0 = [
  {
    kilde: "../img/hytte/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av 1"
  },
  {
    kilde: "../img/slideshow/JuleBilde2.jpg",
    alternativ_tekst: "Bilde av 2"
  },
  {
    kilde: "../img/slideshow/JuleBilde3.jpg",
    alternativ_tekst: "Bilde av 3"
  },
  {
    kilde: "../img/slideshow/JuleBilde4.jpg",
    alternativ_tekst: "Bilde av 4"
  }
]

let slideshow_hytte1 = [
  {
    kilde: "../img/hytte/JuleBilde4.jpg",
    alternativ_tekst: "Bilde av 4"
  },
  {
    kilde: "../img/slideshow/JuleBilde3.jpg",
    alternativ_tekst: "Bilde av 3"
  },
  {
    kilde: "../img/slideshow/JuleBilde2.jpg",
    alternativ_tekst: "Bilde av 2"
  },
  {
    kilde: "../img/slideshow/JuleBilde1.jpg",
    alternativ_tekst: "Bilde av 1"
  }
]


function injectSlideshow(evt) {
    let slideshow_home = document.getElementById("slideshow_home")
    if (slideshow_home != null){
      for (let slide of slideshow_hovedside){
        let div = document.createElement("div");
        div.className = "mySlides fade";
        
        let img = document.createElement("img");
        img.setAttribute('src', `${slide.kilde}`);
        img.setAttribute('alt', `${slide.alternativ_tekst}`);

        div.appendChild(img);
        slideshow_home.appendChild(div);
      }
    
      let buttons = document.getElementById("slideshow_buttons");

      for (let i = 1; i < slideshow_hovedside.length+1; i++) {
        let span = document.createElement("span");
        span.className = "dot";

        span.setAttribute('onclick', 'currentSlide(' + i + ')');
          
        buttons.appendChild(span);
      }
    }




    let slideshow_hytte = document.getElementById("slideshow_hytter")
    if (slideshow_hytte != null && evt != null){

      slideshow_hytte.innerHTML = "";
      switch (evt) {
        case 0: {
          for (let slide of slideshow_hytte0){
            let div = document.createElement("div");
            div.className = "mySlides fade";
            
            let img = document.createElement("img");
            img.setAttribute('src', slide.kilde);
            img.setAttribute('alt', slide.alternativ_tekst);
    
            div.appendChild(img);
            slideshow_hytte.appendChild(div);

            let buttons = document.getElementById("slideshow_buttons");

            for (let i = 1; i < slideshow_hytte0.length+1; i++) {
            let span = document.createElement("span");
            span.className = "dot";

            span.setAttribute('onclick', 'currentSlide(' + i + ')');
              
            buttons.appendChild(span);
            }
          }
          break;
        }
        case 1: {
          for (let slide of slideshow_hytte1){
            let div = document.createElement("div");
            div.className = "mySlides fade";
            
            let img = document.createElement("img");
            img.setAttribute('src', slide.kilde);
            img.setAttribute('alt', slide.alternativ_tekst);
    
            div.appendChild(img);
            slideshow_hytte.appendChild(div);
          }
        }
        case 2: {
          hytte = slideshow_hytte2;

        }
      }
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





