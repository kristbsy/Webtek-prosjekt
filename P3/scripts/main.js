let liste = [{
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
    tekst: "Kontakt"
  }
]


function inject_header() {
  let href_prefix = "nettsider/";
  let img_prefix = "img/";
  let main_prefix = "";
  // if (location.href.split("/").slice(-1)[0] == "home.html") {
  //   href_prefix = "nettsider/";
  //   img_prefix = "img/";
  //   main_prefix = "./"
  // } else {
  //   href_prefix = "./";
  //   img_prefix = "/img/"
  //   main_prefix = "/"
  // }
  let nav_el = document.createElement("nav");
  nav_el.id = "navbar";
  let list_elements = document.createElement("ul");
  list_elements.innerHTML += `<li><a href="${main_prefix}home.html" class="mainLink"><img src="${img_prefix}Logoer/tio_logo_ExtraLarge.png" alt="Tio logo" id="hovedlogo" /></a></li>`
  if (nav_el != null) {
    for (let page of liste) {
      list_elements.innerHTML += `<li><a href="${href_prefix}${page.href}">${page.tekst}</a></li> `
    }
  }
  nav_el.appendChild(list_elements);
  document.querySelector("#container").prepend(nav_el);
}

function inject_footer() {
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

inject_header();
inject_footer();