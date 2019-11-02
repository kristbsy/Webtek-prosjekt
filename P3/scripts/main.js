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
  let navbar = document.getElementById("navbar")
  if (navbar != null){
    for (let page of liste){
      navbar.innerHTML += `<li><a href=${page.href}>${page.tekst}</a></li> `
    }
  }
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

