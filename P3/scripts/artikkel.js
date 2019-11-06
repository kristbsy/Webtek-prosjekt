let prefix = ".";
if (location.href.split("/").slice(-1)[0] !== "home.html") {
    prefix += ".";
}

const artikler = [{
        artikkelTitel: 'Vinterferie uke 8',
        artikkelTekst: 'Skiløypene vil bli kjørt opp hver formiddag hele vinterferien! På skisporet.no finner du en oversikt over alle løypene. I skrivende stund er skiføret nydelig, og langtidsvarselet virker lovende for en flott vinterferie i skisporet! <br><br> Husk; det er ingen skam med en kvikk-lunsj i solveggen på ei hytte heller.',
        artikkelBilde: '/img/Artikler/art_skispor.jpg',
        artikkelTid: new Date(2018, 2, 10),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Kajakk til utlån',
        artikkelTekst: 'I naustet ved Langevatn ligger det kajakker som kan lånes for en rimelig penge. Betaling kan gjøres via Vipps eller ved å legge kontanter i kassen. <br><br> Vi anbefaler våttkort før man legger ut på tur, og alltid bruk redningsvest! Det ligger redningsvester i ulike barne- og voksenstørrelser i naustet. Husk også å registrere navn på alle padlere i boka. <br><br> Fra Elvskinnet og Klebbstuggu er det fine turer til Langevatn. I sørenden av vatnet ligger også en idyllisk bålplass. ',
        artikkelBilde: '/img/artikler/art_kajakk.jpg',
        artikkelTid: new Date(2018, 7, 8),
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Tid for blåbær!',
        artikkelTekst: 'Nå er fjellet fullt av blåbær! Vi anbefaler å ta turen opp mot Storheia med armene fulle av bærplukkere og bøtter! Langs stien rundt Blåvatnet er det også mye blåbær, og dette er en fin tur å ta med små barn på.',
        artikkelBilde: '/img/artikler/art_blabar.jpg',
        artikkelTid: new Date(2018, 8, 2),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Tid for blåbær!',
        artikkelTekst: 'Nå er fjellet fullt av blåbær! Vi anbefaler å ta turen opp mot Storheia med armene fulle av bærplukkere og bøtter! Langs stien rundt Blåvatnet er det også mye blåbær, og dette er en fin tur å ta med små barn på.',
        artikkelBilde: '/img/artikler/art_blabar.jpg',
        artikkelTid: new Date(2018, 0, 1),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Vei-dugnad',
        artikkelTekst: 'Tusen takk til alle som bidro på dugnad for å sette i stand grusveien opp til Nuddustruddu! Alle hull er nå fylt igjen, og vi fikk forsterket veien der fjorårets høstregn hadde gjort sitt. ',
        artikkelBilde: '/img/artikler/art_vei.jpg',
        artikkelTid: new Date(2018, 9, 15),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Fjell-jul',
        artikkelTekst: 'Drømmer du om en hvit jul? Hyttene våre er tilgjengelige for leie også i julehøytiden, og flere hytter er fremdeles ledige. Det er mulig å bestille scootertransport til og fra flere av hyttene, så man slipper å bære både ribbe og julegaver på ryggen. Ta kontakt med oss, så ordner vi dette. <br><br> Vi garanterer en hvit og stemningsfull julefeiring for hele familien!',
        artikkelBilde: '/img/artikler/art_jul.jpg',
        artikkelTid: new Date(2018, 11, 11),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Påskeskirenn og påskeeggjakt!',
        artikkelTekst: 'På Påskeaften arrangerer vi i tradisjonen tro påskeskirenn og påskeeggjakt for barna på Høtta! Det vil også bli grilling av pølser på bål og hjemmelaget kakao, og selvfølgelig en snørrete adjektivhistorie! <br><br> Skirennet starter kl 13, og vi setter i gang jakten på påskeeggene etter pølsestekingen.',
        artikkelBilde: '/img/artikler/art_paske.jpg',
        artikkelTid: new Date(2019, 4, 1),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Fiske',
        artikkelTekst: 'Lyse sommernetter er perfekte for å fiske. Vi anbefaler å ta med fiskestang til Svartsjøen, her er det mye ørret. Er du glad i røye, anbefaler vi en fisketur på Isvatnet. På Flåbånnhytta finnes også et lite røykeri perfekt for å røyke fisk. Husk i så fall og ta med rikelig med salt til forberedelsene. <br><br> Om du ønsker å fiske må du også huske å kjøpe fiskekort! Dette kan kjøpes på inatur.no eller på bensinstasjonen i sentrum.',
        artikkelBilde: '/img/artikler/art_fiske.jpg',
        artikkelTid: new Date(2019, 6, 29),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    },
    {
        artikkelTitel: 'Veden er klar! ',
        artikkelTekst: 'De første snøfnuggene har meldt sin ankomst, men nå er det stablet ved på alle hyttene, så vinteren kan bare komme! Tusen takk til alle som bidro på vedhogst-dugnader i sommer!',
        artikkelBilde: '/img/artikler/art_ved.jpg',
        artikkelTid: new Date(2019, 10, 22),
        artikkelForfatter: "bjørn",
        artikkelBildeAlt: 'bilde av ...'
    }
];

let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

let articleEl = [];

function switchToArticle(article) {
    document.querySelector("#artikkelen").replaceWith(generateArticle(article));
}

function generateArticle(article) {
    let mainEl = document.createElement("div")
    mainEl.id = "artikkelen";

    let titleEl = document.createElement("h2");
    titleEl.innerText = article.artikkelTitel;

    let imgEl = document.createElement("img");
    imgEl.src = prefix + article.artikkelBilde;

    let paragraphEl = document.createElement("p");
    paragraphEl.innerHTML = article.artikkelTekst;

    let infoEl = document.createElement("sub");
    let tidObjekt = article.artikkelTid;
    let tid = tidObjekt.getDate() + ". " + months[tidObjekt.getMonth + 1] + " " + tidObjekt.getYear + 1900;
    infoEl.innerText = "Skrevet av " + article.artikkelForfatter + ", " + tid /*article.artikkelTid*/ ;

    mainEl.appendChild(imgEl);
    mainEl.appendChild(titleEl);

    mainEl.appendChild(paragraphEl);
    mainEl.appendChild(infoEl);
    return mainEl;
}

artikler.forEach(article => articleEl.push(generateArticle(article)));


function getOrderedObject(articles) {
    //sorterer artiklene inn i et objekt, der nøklene er året og deretter måneden
    let years = []
    articles.forEach(el => years.push(el.artikkelTid.getYear() + 1900));
    const uniqueYears = Array.from(new Set(years));
    //console.log(uniqueYears);
    const ordered = {};
    const shallowOrdered = {}
    uniqueYears.forEach(el => {
        ordered[el] = {};
        shallowOrdered[el] = []
    });

    uniqueYears.forEach(year => {
        shallowOrdered[year] = articles.filter(article => article.artikkelTid.getYear() + 1900 == year)
    })

    Object.keys(shallowOrdered).forEach(key => {
        let uniqueMonths = []
        shallowOrdered[key].forEach(article => uniqueMonths.push(article.artikkelTid.getMonth()))
        uniqueMonths = [...new Set(uniqueMonths)]
        uniqueMonths.forEach(month => {
            ordered[key][month + 1] = articles.filter(article => article.artikkelTid.getMonth() == month)
        })
    })

    return ordered;
}

function switchDisplay(event) {
    const child = event.target.children[1];
    const chevron = event.target.children[0];
    if (typeof (child) !== "undefined" && event.target.nodeName == "LI") {
        child.style.display = child.style.display == "none" ? "" : "none";
    }
    console.log(chevron)
    if (typeof (chevron) !== "undefined" && chevron.classList.contains("chevron")) {
        if (chevron.classList.contains("right")) {

            chevron.classList.replace("right", "bottom")
        } else {
            chevron.classList.replace("bottom", "right");
        }
    }
}

function generateList(orderedArticles) {
    let mainEl = document.createElement("ul")
    Object.keys(orderedArticles).forEach(outerKey => {
        let outerListEl = document.createElement("li");
        outerListEl.innerText = outerKey;
        let chevronEl = document.createElement("span");
        chevronEl.classList.add("chevron", "right")

        outerListEl.addEventListener("click", switchDisplay)
        mainEl.prepend(outerListEl);
        outerListEl.appendChild(chevronEl)
        //console.log(chevronEl)


        let middleListEl = document.createElement("ul");
        middleListEl.style.display = "none";
        outerListEl.appendChild(middleListEl);

        Object.keys(orderedArticles[outerKey]).forEach(innerKey => {
            let innerListEl = document.createElement("li");
            //innerListEl.addEventListener("click", switchDisplay)
            middleListEl.prepend(innerListEl)
            innerListEl.innerText = months[innerKey - 1];


            let chevronEl = document.createElement("span");
            chevronEl.classList.add("chevron", "right");
            innerListEl.appendChild(chevronEl);

            let lastUliSwear = document.createElement("ul");
            lastUliSwear.style.display = "none";
            innerListEl.appendChild(lastUliSwear);
            orderedArticles[outerKey][innerKey].forEach(article => {
                let innerMostLi = document.createElement("li");
                //innerListEl.addEventListener("click", switchDisplay)
                innerMostLi.innerText = article.artikkelTitel;
                innerMostLi.addEventListener("click", () => {
                    switchToArticle(article)
                });
                lastUliSwear.appendChild(innerMostLi);
            })
        })
    })
    return mainEl;
}

let news = document.getElementById("home_news");
if (news == null) {
    document.querySelector("#listeArtikkler").replaceWith(generateList(getOrderedObject(artikler)));
}

function MakeListHome( /*task*/ ) { //Function to make the listed elemetns show in the correct order.
    let news = document.getElementById("home_news");
    if (news != null) {
        for (let i = 0; i < 3; i++) {
            let titel = document.getElementById('titelArikkel' + i);
            let tekst = document.getElementById("tekstArtikkel" + i);
            let bilde = document.getElementById("bildeArtikkel" + i);
            titel.innerHTML = artikler[i].artikkelTitel;
            tekst.innerHTML = artikler[i].artikkelTekst;
            bilde.src = prefix + artikler[i].artikkelBilde;
            bilde.alt = artikler[i].artikkelBildeAlt;
        }
    }
}
MakeListHome();