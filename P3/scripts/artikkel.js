const artikkel = [{
    artikkelTitel: 'Absultaket',
    artikkelTekst: 'afafafaafa',
    artikkelBilde: 'img'
    },
                {
    artikkelTitel: 'Absultaket',
    artikkelTekst: 'bfbfbfbfbf',
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
    artikkelBilde: 'img'
    }
];

function artikkelBytte(evt){
    event.preventDefault();
    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}