const hytte = [{
    hytteNavn: 'Absultaket',
    hytteIntroTekst: 'afafafaafa',
    hytteTilbehør: 'afafafaafa',
    hytteBilde: 'img'
},
{
    hytteNavn: 'Absultaket',
    hytteIntroTekst: 'afafafaafa',
    hytteTilbehør: 'afafafaafa',
    hytteBilde: 'img'
},
{
    hytteNavn: 'Absultaket',
    hytteIntroTekst: 'afafafaafa',
    hytteTilbehør: 'afafafaafa',
    hytteBilde: 'img'
},
{
    hytteNavn: 'Absultaket',
    hytteIntroTekst: 'bfbfbfbfbf',
    hytteTilbehør: 'bfbfbfbf',
    hytteBilde: '../img/slide1_hytte.jpeg'
}
];

let nodeKart = document.getElementById("nodeKart")


nodeKart.onclick = function (event) {
    //Finner x og y koordinatene til musemarkøren:
    let mouse = { x: event.clientX, y: event.clientY }
    console.log(mouse.x, mouse.y)

    ///Sjekker hvor musemarkøren er: (innenfor en firkant rundt hytta. Firkantene overlapper aldri)
    if (mouse.x > 300 && mouse.x < 340 && mouse.y < 300 && mouse.y > 260) {
        console.log("A");
        hytteBytte(0);
    } else if (mouse.x > 90 && mouse.x < 110 && mouse.y < 410 && mouse.y > 385) {
        console.log("B");
        hytteBytte(3);
    }
}

function hytteBytte(evt) {
    event.preventDefault();
    let titel = document.getElementById("hytteTitel");
    let tekst = document.getElementById("hytteIntroTekst");
    let tilbehør = document.getElementById("hytteTilbehør");
    let bilde = document.getElementById("hytteBilde");

    titel.innerHTML = hytte[evt].hytteNavn;
    tekst.innerHTML = hytte[evt].hytteIntroTekst;
    tilbehør.innerHTML = hytte[evt].hytteTilbehør;
    bilde.src = hytte[evt].hytteBilde;
}