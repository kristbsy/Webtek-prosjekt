 let xd = [{
    src: "../img/hytte/JuleBilde1.jpg",
    alt: "Bilde av 1"
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
  }]

function createElemement(type) {
    return document.createElement(type)
}

function createSlideShow(slides){
    let div = document.createElement("div");
    div.className = "mySlides fade";
    let img = document.createElement("img");
    for (let attribute of Object.keys(slides)) {
       img.setAttribute(attribute, slides[attribute])
    } 
    div.appendChild(img);
    slideshow_hytte.appendChild(div);
    div.style.display = "none";

    
    let buttons = document.getElementById("slideshow_buttons");
    buttons.innerHTML = "";
    return div
} 

