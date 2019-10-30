const artikkel = [{
        artikkelTitel: 'Absultaket',
        artikkelTekst: 'afafafaafa',
        artikkelBilde: 'img'
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

<<<<<<< HEAD
for (i in artikkel) {
    console.log(artikkel[i].artikkelTitel);
    console.log(artikkel[i].artikkelTekst);
    console.log("--------------------");
}

function artikkelBytte(evt){
=======
function artikkelBytte(evt) {
>>>>>>> 5bb503ff9bd6b6423097ce7c159d21717f975854
    event.preventDefault();
    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}

function artikkelHome() {
    event.preventDefault();

    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}