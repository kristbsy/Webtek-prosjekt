const artikkel = [{
        artikkelTitel: 'Lorem Ipsum',
        artikkelTekst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        artikkelBilde: 'img/vaffelmeme.jpg',
        artikkelTid: Date(2019, 11, 01)
    },
    {
        artikkelTitel: 'Absultaket',
        artikkelTekst: '<b>bfbfbfbfbf</b> onafoinafion <h3>hello</h3>',
        artikkelBilde: 'img/slide1_hytte.jpeg'
    },
    {
        artikkelTitel: 'Absultaket',
        artikkelTekst: '<img src="./img/Logoer/tio_logo_Mediumpng.png" alt="tur_vær" />',
        artikkelBilde: 'img/vaffelmeme.jpg'
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

function artikkelBytte(evt) {
    event.preventDefault();
    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}

//home news creation

function createArtikkel(artObj) {
    let parent = document.createElement("div");
    parent.className = "art_home"

    let img_div = document.createElement("div");
    let img = document.createElement("img");
    img_div.className = "art_img";
    img.src = artObj.artikkelBilde;
    img.alt = artObj.artikkelTitel;
    img_div.appendChild(img);
    parent.appendChild(img_div);

    let titel_div = document.createElement("div");
    let titel = document.createElement("h3");
    titel_div.className = "art_titel";
    titel.innerHTML = artObj.artikkelTitel;
    titel_div.appendChild(titel);
    parent.appendChild(titel_div);

    let tekst_div = document.createElement("div");
    let tekst = document.createElement("p");
    tekst_div.className = "art_tekst";
    tekst.innerHTML = artObj.artikkelTekst;
    tekst_div.appendChild(tekst);
    parent.appendChild(tekst_div);

    let time_div = document.createElement("div");
    let time = document.createElement("p");
    time_div.className = "art_time";
    time.innerHTML = artObj.artikkelTime;
    time_div.appendChild(time);
    parent.appendChild(time_div);

    return parent
}

function artikkelHome() {
    for (let i = 0; i < 3; i++) {
        let art = createArtikkel(artikkel[i]);
        let news = document.getElementById("home_news");
        news.insertBefore(art, news.lastChild);
    }
}


let news = document.getElementById("home_news");
news.onload = artikkelHome();