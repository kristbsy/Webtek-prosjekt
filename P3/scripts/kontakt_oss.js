form_kontaktOss.onsubmit = function(evt){
    evt.preventDefault();
    let info = document.getElementById("form_kontaktOss");
    let henvendelse = document.getElementById("inp_henvendelse");
    let email = document.getElementById("inp_email");

    info.innerHTML = "Takk for din innsending gjeldende " + henvendelse.value +  ". Vi vil sjekke ut dette snarest og gi deg en tilbakemelding så fort som mulig på din email, " + email.value;
}
