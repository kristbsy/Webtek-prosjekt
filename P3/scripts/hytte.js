const hyttene = [{
    hytteNavn: 'Absultaket',
    hytteTekst: 'Absultaket er høytliggende og høytstående. Det nyeste innenfor trekonstruksjon så er denne koselige 4-personshytta plassert så høyt vi kunne etter vår egen byggningsevne. Den står store 1,2 meter over bakken ved hjelp av at vi har brukt titalls stylter til å lage stolper. Styltene er konstruert for at et imaginært troll skal kunne bruke dem, og er derfor i stand til å holde flere tonn. <br><br> Innholdet i Absultaket er ikke like omfattende som i noen av våre andre hytter, men er utstyrt med en vedpeis slik at den holder komfortabel varme etter den har fyrt i kjappe 3 timer. <br><br> Med tanke på høyden av bygget er det ikke lagt inn vann, men med framtanke og planlegging kan dette kompenseres for at en tar med egne vannkanner eller bruker et lite beløp (459,95 kr) til å få deres væskebaserte forespørsler kjørt opp med ATV. Strøm er innlagt, men dette er takket være et 1x1 m solsellepanel satt på taket. Spenningen i støpselet er ikke nok til å lade en eventuell mobiltelefon.',
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
    let navn = document.getElementById("hytteNavn")
    let tilbehor = document.getElementById("tilbehørDiv");
    let bilde = document.getElementById("bildeDiv");
    navn.innerHTML = hyttene[evt].hytteNavn;
    info.innerHTML = hyttene[evt].hytteTekst;
    tilbehor.innerHTML = hyttene[evt].hytteTilbehør;
    bilde.src = hyttene[evt].hytteBilde;
}
