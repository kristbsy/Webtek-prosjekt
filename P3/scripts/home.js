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



function MakeList(task) { //Function to make the listed elemetns show in the correct order.
    for (let i = 0; i < artikkel.length; i++) {
        let list = document.getElementById("home_news")
        let node = document.createElement("li");

        node.id = 'artikkelNr' + i;
        node.setAttribute('onclick', 'artikkelBytte(' + i + ')');

        let textnode = document.createTextNode(artikkel[i].artikkelTitel); //Defines what will be writen in one of the other elements.
        node.appendChild(textnode); //Inserts the text into the li element.
        list.appendChild(node);
    }
}
