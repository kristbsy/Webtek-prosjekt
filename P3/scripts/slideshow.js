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
    for (let i = 0; i < hytter[slideshowNumber].info.img.length; i++) {
      let span = document.createElement("span");
      span.className = "dot";

      span.setAttribute('onclick', 'current_slide(' + i + ')');
      buttons.appendChild(span);
    }
    show_slides(0);
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
  }
}

slideshow_home_generator();

///////////////////////////     Slideshow.js     //////////////////////////

//5 seconds between each slide:
let slideshow_interval_ID = setInterval(plus_slides, 5000, 1);

let slide_index = 1;
show_slides(slide_index);

function current_slide(n) {
  show_slides(slide_index = n);
}

function plus_slides(n) {
  show_slides(slide_index += n);
}

function show_slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {
    slide_index = 1
  }
  if (n < 1) {
    slide_index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide_index - 1].style.display = "block";

  //Resets the interval
  clearInterval(slideshow_interval_ID)
  slideshow_interval_ID = setInterval(plus_slides, 5000, 1);
}