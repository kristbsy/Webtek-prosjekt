function bytt_hytte(evt){
  let info = document.getElementById("infoDiv");
  let navn = document.getElementById("hytteNavn")
  let tilbehor = document.getElementById("tilbehørDiv");
  navn.innerHTML = hytter[evt].info.name;
  info.innerHTML =  hytter[evt].info.longText;
  tilbehor.innerHTML =  hytter[evt].info.features;
  slideshow_hytte_generator(evt);
}


function make_list() { //Function to make the listed elemetns show in the correct order.
let list = document.getElementById("hytter_liste")
for (let i = 0; i < hytter.length; i++) {
  let list = document.getElementById("hytter_liste")
  let node = document.createElement("li");

  node.id = 'hytteNr' + i;
  node.setAttribute('onclick', 'bytt_hytte(' + i + ')')

  let textnode = document.createTextNode(hytter[i].info.name); //Defines what will be writen in one of the other elements.
  node.appendChild(textnode); //Inserts the text into the li element.
  list.appendChild(node);
}
}

make_list()