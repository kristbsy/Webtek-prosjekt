bestilling.onsubmit = function(evt){
    evt.preventDefault();
    let bestilling = document.getElementById("bestilling");
    let email = document.getElementById("epost");
    let button = document.getElementById('avbrytbestilling');

    button.value = "Tilbake til hjemmeside"
    button.id = "returnerHjem"

    bestilling.innerHTML = "Takk for din bestilling! Vi sender en faktura til " + email.value + " så snart vi har registrert bestillingen.";
}
