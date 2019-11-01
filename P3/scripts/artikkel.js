const artikkel = [{
    artikkelTitel: 'Lorem Ipsum',
    artikkelTekst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    artikkelBilde: 'img/vaffelmeme.jpg',
    artikkelTid: new Date(2019, 11, 0o1)
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

function artikkelBytte(evt) {
    event.preventDefault();
    let titel = document.getElementById("titelArikkel");
    let tekst = document.getElementById("tekstArtikkel");
    let bilde = document.getElementById("bildeArtikkel");
    titel.innerHTML = artikkel[evt].artikkelTitel;
    tekst.innerHTML = artikkel[evt].artikkelTekst;
    bilde.src = artikkel[evt].artikkelBilde;
}

function MakeList(task) { //Function to make the listed elemetns show in the correct order.
    for (let i = 0; i < artikkel.length; i++) {
        let list = document.getElementById("listeArtikkler")
        let node = document.createElement("li");

        node.id = 'artikkelNr' + i;
        node.setAttribute('onclick', 'artikkelBytte(' + i + ')');

        console.log(artikkel[i].artikkelTitel)
        console.log(list)
        let textnode = document.createTextNode(artikkel[i].artikkelTitel); //Defines what will be writen in one of the other elements.
        node.appendChild(textnode); //Inserts the text into the li element.
        list.appendChild(node);
    }
}

MakeList()