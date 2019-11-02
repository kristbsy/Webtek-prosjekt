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

  for (let page of liste){
    navbar.innerHTML += `<li><a href=${page.href}>${page.tekst}</a></li>`
  }
}

function injectFooter() {

}

injectHeader();
injectFooter();

