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
    href: "merOmHyttene.html",
    tekst: "Hytter"
  },
  {
    href: "omOss.html",
    tekst: "Turlaget"
  },
  {
    href: "kontaktOss.html",
    tekst: "Kontakt oss"
  }
]


function injectHeader() {
<<<<<<< HEAD
  let navEl = document.createElement("nav");
  navEl.innerHTML = '<ul>\
    <li><a href="../home.html" class="mainLink"><img src="../img/Logoer/tio_logo_ExtraLarge.png" alt="Tio logo"\
      id="hovedlogo" /></a></li >\
        <li><a href="nettsider/artikler.html">Nyheter</a></li>\
        <li><a href="nettsider/booking.html">Booking</a></li>\
        <li><a href="nettsider/merOmHyttene.html">Hytter</a></li>\
        <li><a href="nettsider/omOss.html">Turlaget</a></li>\
        <li><a href="nettsider/kontaktOss.html">Kontakt oss</a></li>\
</ul > '
  document.querySelector("#container").prepend(navEl);
=======
  let navbar = document.getElementById("navbar")
  if (navbar != null){
    for (let page of liste){
      navbar.innerHTML += `<li><a href=${page.href}>${page.tekst}</a></li> `
    }
  }
>>>>>>> 08b442b9e157a736457c195c9c50a9e858671964
}

function injectFooter() {
  let footer = document.getElementById("footer");
  footer.innerHTML += `
  Lokalt kontor: Krokveigen 76, Oppdal
  <br>
  Telefon: 986 45 123
  <br>
  Epost: TiO@turiioodal.no
  <br>
  Åpningstider: Man-Fre: 07:00 - 21:00, Lør-Søn: 09:00 - 21:00
  `
}

injectHeader();
injectFooter();

