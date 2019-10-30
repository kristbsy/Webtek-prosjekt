const hyttene = [{
    hytteNavn: 'Absultaket',
    hytteTekst: 'afafafaafa',
    hytteTilbehør: 'hahahaha',
    hytteBilde: 'img'
    },
                {
    hytteNavn: 'Absultaket',
    hytteTekst: 'bfbfbfbfbf',
    hytteTilbehør: 'hahahaha',
    hytteBilde: 'img'
    },
                {
    hytteNavn: 'Absultaket',
    hytteTekst: 'cfcfcfcfcfc',
    hytteTilbehør: 'hahahaha',
    hytteBilde: 'img'
    },
                {
    hytteNavn: 'Absultaket',
    hytteTekst: 'dfdfdfdfdfdf',
    hytteTilbehør: 'hahahaha',
    hytteBilde: 'img'
    }
];

function byttHytte(evt){
    event.preventDefault();
    let info = document.getElementById("infoDiv");
    let tilbehor = document.getElementById("tilbehørDiv");
    let bilde = document.getElementById("bildeDiv");
    info.innerHTML = hyttene[evt].hytteTekst;
    tilbehor.innerHTML = hyttene[evt].hytteTilbehør;
    bilde.innerHTML = hyttene[evt].hytteBilde;
}