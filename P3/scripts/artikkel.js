const artikkel = [{
    artikkelTitel: '1',
    artikkelTekst: 'afafafaafa',
    artikkelBilde: 'img'
    },
                {
    artikkelTitel: '2',
    artikkelTekst: '<b>bfbfbfbfbf</b> onafoinafion <h3>hello</h3>',
    artikkelBilde: 'img'
    },
                {
    artikkelTitel: '3',
    artikkelTekst: 'cfcfcfcfcfc',
    artikkelBilde: 'img'
    },
                {
    artikkelTitel: '4',
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

function MakeList(task){ //Function to make the listed elemetns show in the correct order.
    for (let i = 0; i < artikkel.length; i++) {
        let list = document.getElementById("listeArtikkler")
        let node = document.createElement("li");

        node.id = 'artikkelNr'+i;
        node.setAttribute('onclick', 'artikkelBytte('+i+')');

        let textnode = document.createTextNode(artikkel[i].artikkelTitel); //Defines what will be writen in one of the other elements.
        node.appendChild(textnode); //Inserts the text into the li element.
        list.appendChild(node);
    }
}

MakeList()