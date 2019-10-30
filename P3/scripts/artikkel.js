const artikkel = [{
    artikkelTitel: 'Lorem Ipsum',
    artikkelTekst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    artikkelBilde: 'img/vaffelmeme.jpg'
    },
                {
    artikkelTitel: 'Absultaket',
    artikkelTekst: '<b>bfbfbfbfbf</b> onafoinafion <h3>hello</h3>',
    artikkelBilde: 'img'
    },
                {
    artikkelTitel: 'Absultaket',
    artikkelTekst: 'cfcfcfcfcfc',
    artikkelBilde: 'img'
    },
                {
    artikkelTitel: 'Absultaket',
    artikkelTekst: 'dfdfdfdfdfdf',
    artikkelBilde: '../img/slide1_hytte.jpeg'
    }
];

// for (i in artikkel) {
//     let div = document.createElement("div");
//     div.innerText = artikkel[i].artikkelTitel;
    
//     console.log(artikkel[i].artikkelTitel);
//     console.log(artikkel[i].artikkelTekst);
//     console.log("--------------------");
// }

function artikkelBytte(evt){
    event.preventDefault();
    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}

function makeElement(tag, klass) {
    elem = document.createElement(tag);
    elem.setAttribute("class", klass);
    return elem;
}

function createArtikkel(parent, artObj) {
    console.log(makeElement("div","article_home"))

}

function artikkelHome() {
    for (let i = 0; i < 3; i++) {
        createArtikkel(news, artikkel[i])
    }
    console.log("Hello")
}


let news = document.getElementById("home_news");
news.onload = artikkelHome()
div = document.createElement("div")
console.log(div)
