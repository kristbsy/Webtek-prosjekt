let liste = [
  {
    href: "artikler.html",
    tekst: "Nyheter"
  },
  {
    href: "booking.html",
    tekst: "Booking"
  },
  {
    href: "mer_om_hyttene.html",
    tekst: "Hytter"
  },
  {
    href: "om_oss.html",
    tekst: "Turlaget"
  },
  {
    href: "kontakt_oss.html",
    tekst: "Kontakt oss"
  }
]


function injectHeader() {
  let hrefPrefix = "";
  let imgPrefix = "";
  let mainPrefix = "";
  if (location.href.split("/").slice(-1)[0] == "home.html") {
    hrefPrefix = "nettsider/";
    imgPrefix = "img/";
    mainPrefix = "./"
  } else {
    hrefPrefix = "./";
    imgPrefix = "../img/"
    mainPrefix = "../"
  }
  let navEl = document.createElement("nav");
  navEl.id = "navbar";
  let listElements = document.createElement("ul");
  listElements.innerHTML += `<li><a href="${mainPrefix}home.html" class="mainLink"><img src="${imgPrefix}Logoer/tio_logo_ExtraLarge.png" alt="Tio logo" id="hovedlogo" /></a></li>`
  if (navEl != null) {
    for (let page of liste) {
      listElements.innerHTML += `<li><a href="${hrefPrefix}${page.href}">${page.tekst}</a></li> `
    }
  }
  navEl.appendChild(listElements);
  document.querySelector("#container").prepend(navEl);
}

function injectFooter() {
  let footer = document.createElement("footer");
  footer.innerHTML = `
  Lokalt kontor: Krokveigen 76, Oppdal
  <br>
  Telefon: 986 45 123
  <br>
  Epost: TiO@turiioodal.no
  <br>
  Åpningstider: Man-Fre: 07:00 - 21:00, Lør-Søn: 09:00 - 21:00
  `
  document.body.append(footer);
}
injectHeader();
injectFooter();
