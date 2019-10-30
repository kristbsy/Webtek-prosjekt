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

for (i in artikkel) {
    let div = document.createElement("div");
    div.innerText = artikkel[i].artikkelTitel;
    
    console.log(artikkel[i].artikkelTitel);
    console.log(artikkel[i].artikkelTekst);
    console.log("--------------------");
}

function artikkelBytte(evt){
    event.preventDefault();
    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}