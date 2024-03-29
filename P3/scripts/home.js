//Funksjon som lager elementer som senere kan blli fylt med informasjonen fra artikklene
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
        news.prepend(art);
    }
}

let news = document.getElementById("home_news");
news.onload = artikkelHome();