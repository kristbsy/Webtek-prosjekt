let slideshow_hovedside = [{
    kilde: "img/slideshow/slide1.jpg",
    alternativ_tekst: "Bilde av høst trær og fjell"
  },
  {
    kilde: "img/slideshow/slide2.jpg",
    alternativ_tekst: "Bilde av to voksne som går til fjels"
  },
  {
    kilde: "img/slideshow/slide3.jpg",
    alternativ_tekst: "Bilde av snødekte ski fjell"
  },
  {
    kilde: "img/slideshow/slide4.jpg",
    alternativ_tekst: "Bilde av flere tun og fjell"
  },
  {
    kilde: "img/slideshow/slide5.jpg",
    alternativ_tekst: "Bilde av skogens natur"
  },
  {
    kilde: "img/slideshow/slide6.jpg",
    alternativ_tekst: "Bilde av en på ski tur på snø in mot skogen"
  },
  {
    kilde: "img/slideshow/slide7.jpg",
    alternativ_tekst: "Bilde av klatretur på et stort fjell"
  },
  {
    kilde: "img/slideshow/slide8.jpg",
    alternativ_tekst: "Bilde av skogens natur"
  },
  {
    kilde: "img/slideshow/slide9.jpg",
    alternativ_tekst: "Bilde av innsjøen og trær"
  }

]

function slideshow_hytte_generator(slideshowNumber) {
  let slideshow_hytte_container = document.getElementById("slideshow_hytter")
  slideshow_hytte_container.innerHTML = "";
  for (let slide of hytter[slideshowNumber].info.img) {
    let div = document.createElement("div");
    div.className = "mySlides fade";

    let img = document.createElement("img");
    img.setAttribute('src', slide.kilde);
    img.setAttribute('alt', slide.alternativ_tekst);

    div.appendChild(img);
    slideshow_hytte_container.appendChild(div);
    div.style.display = "none";

    let buttons = document.getElementById("slideshow_buttons");
    buttons.innerHTML = "";
    for (let i = 1; i < hytter[slideshowNumber].info.img.length + 1; i++) {
      let span = document.createElement("span");
      span.className = "dot";

      span.setAttribute('onclick', 'currentSlide(' + i + ')');
      buttons.appendChild(span);
    }
    showSlides(0);
  }
}

function slideshow_home_generator() {
  let slideshow_home = document.getElementById("slideShowImageContainer")
  if (slideshow_home != null) {
    for (let slide of slideshow_hovedside) {
      let div = document.createElement("div");
      div.className = "mySlides fade";

      let img = document.createElement("img");
      img.setAttribute('src', `${slide.kilde}`);
      img.setAttribute('alt', `${slide.alternativ_tekst}`);

      div.appendChild(img);
      slideshow_home.appendChild(div);
    }

    let buttons = document.getElementById("slideshow_buttons");

    for (let i = 1; i < slideshow_hovedside.length + 1; i++) {
      let span = document.createElement("span");
      span.className = "dot";

      span.setAttribute('onclick', 'currentSlide(' + i + ')');

      buttons.appendChild(span);
    }
  }
}

slideshow_home_generator();

///////////////////////////     Slideshow.js     //////////////////////////

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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
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