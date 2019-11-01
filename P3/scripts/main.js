function injectHeader() {
  let navEl = document.createElement("nav");
  navEl.innerHTML = '<ul>\
    < li > <a href="home.html" class="mainLink"><img src="img/Logoer/tio_logo_ExtraLarge.png" alt="Tio logo"\
      id="hovedlogo" /></a></li >\
        <li><a href="nettsider/artikler.html">Nyheter</a></li>\
        <li><a href="nettsider/booking.html">Booking</a></li>\
        <li><a href="nettsider/merOmHyttene.html">Hytter</a></li>\
        <li><a href="nettsider/omOss.html">Turlaget</a></li>\
        <li><a href="nettsider/kontaktOss.html">Kontakt oss</a></li>\
</ul > '
}

function injectFooter() {

}

injectHeader();
injectFooter();