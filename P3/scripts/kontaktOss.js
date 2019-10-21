kontaktOss.onsubmit = function(evt){
    evt.preventDefault();
    let info = document.getElementById("formDiv");
    let henvendelse = document.getElementById("henvendelse");
    let email = document.getElementById("email");

    info.innerHTML = "Takk for din insending gjeldende " + henvendelse.value +  ". Vi vil skjekke dette ut snarest og gi deg en tilbakemelding så fort som mulig på din email, " + email.value;
}