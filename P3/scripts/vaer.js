
//Funksjon som genererer et værvarsel. Henter en værklasse med noen bestemte trekk, og noen frø for videre generering av unik egenskap, feks temperatur
function generer_vaer(seed) {
    let vaers = [{
        "iko": "🌞", // her brukes enten en unicodekarakter eller en komplett bildetag
        "desk": "Sol og deilig vær!",
        "tips": "Gå gjerne tur hvor som helst, bare husk solkremen",
        "vekt": 70, //sannsynlighetsvekt. høyere tall betyr mer sannsynlig
        "temp": [15, 10] // [start_temp, temp_range]
    }, {
        "iko": "⛅",
        "desk": "Delvis overskyet",
        "tips": "Ikke noe problem å gå på tur i dette været, men husk jakka.",
        "vekt": 40,
        "temp": [10, 17]
    }, {
        "iko": "🌧",
        "desk": "Regn type Bergen",
        "tips": "Ta med paraply eller sydvest så er du good ;)",
        "vekt": 70,
        "temp": [5, 11]
    }, {
        "iko": "☁",
        "desk": "Overskyet",
        "tips": "Ikke like koselig, men om du liker å gå, så gå",
        "vekt": 50,
        "temp": [7, 8]
    }, {
        "iko": "🌪",
        "desk": "Storm",
        "tips": "Hold deg hjemme",
        "vekt": 1,
        "temp": [-50, 500]
    }];
    console.log('vaers',vaers)
    let summen = 0;
    for (let i in vaers) {
        summen += vaers[i].vekt;
    }

    for (let i in vaers) {
        console.log(`sum:${summen}|   floor(seed*sum): ${Math.floor(seed * summen)}|   vaervekt:${vaers[i].vekt}`)
        if (summen - Math.floor(seed * summen) <= vaers[i].vekt) {
            vaers[i].temp = Math.floor(seed * (vaers[i].temp[1]) + vaers[i].temp[0])
            return vaers[i];
        }
        summen -= vaers[i].vekt;
    }
}


// Funksjon for å injesere tre værmeldinger i nettsiden
function load_vaer() {
    let home_vaer = document.getElementById("home_weather");
    let varsel = ["morra", "nesteuke", "nesteneste"]
    for (let i = 0; i < 3; i++) {
        
        let naa = new Date();
        let seed = Math.abs(Math.sin(naa.getUTCDate() + naa.getUTCMonth()*10 + naa.getUTCFullYear()*1000+i))/*Math.random()*/;
        let arr = generer_vaer(seed);
        console.log(seed, arr);
        let vaer_tag =
            '<div class="weather_prediction"><div class="wea_time"><strong>' +
            varsel[i] +
            '</strong></div><div class="wea_ico"><h1>' +
            arr.iko +
            '</h1></div><div class="wea_summary">' +
            arr.desk +
            '</div><div class="wea_tips">' +
            arr.tips +
            '</div><div class="wea_temp">' +
            arr.temp + "℃"
        '</div></div>';
        home_vaer.innerHTML += vaer_tag;
    }
}

let vaeret = document.getElementById("home_weather");
vaeret.onload = load_vaer();