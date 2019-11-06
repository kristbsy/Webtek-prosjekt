let prefix = ".";
if (location.href.split("/").slice(-1)[0] !== "home.html") {
    prefix += ".";
}

const artikler = [{
        artikel_titel: 'Vinterferie uke 8',
        artikel_tekst: 'Skiløypene vil bli kjørt opp hver formiddag hele vinterferien! På skisporet.no finner du en oversikt over alle løypene. I skrivende stund er skiføret nydelig, og langtidsvarselet virker lovende for en flott vinterferie i skisporet! <br><br> Husk; det er ingen skam med en kvikk-lunsj i solveggen på ei hytte heller.',
        artikel_bilde: '/img/Artikler/art_skispor.jpg',
        artikel_tid: new Date(2018, 2, 10),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Kajakk til utlån',
        artikel_tekst: 'I naustet ved Langevatn ligger det kajakker som kan lånes for en rimelig penge. Betaling kan gjøres via Vipps eller ved å legge kontanter i kassen. <br><br> Vi anbefaler våttkort før man legger ut på tur, og alltid bruk redningsvest! Det ligger redningsvester i ulike barne- og voksenstørrelser i naustet. Husk også å registrere navn på alle padlere i boka. <br><br> Fra Elvskinnet og Klebbstuggu er det fine turer til Langevatn. I sørenden av vatnet ligger også en idyllisk bålplass. ',
        artikel_bilde: '/img/artikler/art_kajakk.jpg',
        artikel_tid: new Date(2018, 7, 8),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Tid for blåbær!',
        artikel_tekst: 'Nå er fjellet fullt av blåbær! Vi anbefaler å ta turen opp mot Storheia med armene fulle av bærplukkere og bøtter! Langs stien rundt Blåvatnet er det også mye blåbær, og dette er en fin tur å ta med små barn på.',
        artikel_bilde: '/img/artikler/art_blabar.jpg',
        artikel_tid: new Date(2018, 8, 2),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Tid for blåbær!',
        artikel_tekst: 'Nå er fjellet fullt av blåbær! Vi anbefaler å ta turen opp mot Storheia med armene fulle av bærplukkere og bøtter! Langs stien rundt Blåvatnet er det også mye blåbær, og dette er en fin tur å ta med små barn på.',
        artikel_bilde: '/img/artikler/art_blabar.jpg',
        artikel_tid: new Date(2018, 0, 1),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Vei-dugnad',
        artikel_tekst: 'Tusen takk til alle som bidro på dugnad for å sette i stand grusveien opp til Nuddustruddu! Alle hull er nå fylt igjen, og vi fikk forsterket veien der fjorårets høstregn hadde gjort sitt. ',
        artikel_bilde: '/img/artikler/art_vei.jpg',
        artikel_tid: new Date(2018, 9, 15),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Fjell-jul',
        artikel_tekst: 'Drømmer du om en hvit jul? Hyttene våre er tilgjengelige for leie også i julehøytiden, og flere hytter er fremdeles ledige. Det er mulig å bestille scootertransport til og fra flere av hyttene, så man slipper å bære både ribbe og julegaver på ryggen. Ta kontakt med oss, så ordner vi dette. <br><br> Vi garanterer en hvit og stemningsfull julefeiring for hele familien!',
        artikkelBilde: '/img/artikler/art_jul.jpg',
        artikel_tid: new Date(2018, 11, 11),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Påskeskirenn og påskeeggjakt!',
        artikel_tekst: 'På Påskeaften arrangerer vi i tradisjonen tro påskeskirenn og påskeeggjakt for barna på Høtta! Det vil også bli grilling av pølser på bål og hjemmelaget kakao, og selvfølgelig en snørrete adjektivhistorie! <br><br> Skirennet starter kl 13, og vi setter i gang jakten på påskeeggene etter pølsestekingen.',
        artikel_bilde: '/img/artikler/art_paske.jpg',
        artikel_tid: new Date(2019, 4, 1),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Fiske',
        artikel_tekst: 'Lyse sommernetter er perfekte for å fiske. Vi anbefaler å ta med fiskestang til Svartsjøen, her er det mye ørret. Er du glad i røye, anbefaler vi en fisketur på Isvatnet. På Flåbånnhytta finnes også et lite røykeri perfekt for å røyke fisk. Husk i så fall og ta med rikelig med salt til forberedelsene. <br><br> Om du ønsker å fiske må du også huske å kjøpe fiskekort! Dette kan kjøpes på inatur.no eller på bensinstasjonen i sentrum.',
        artikel_bilde: '/img/artikler/art_fiske.jpg',
        artikel_tid: new Date(2019, 6, 29),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    },
    {
        artikel_titel: 'Veden er klar! ',
        artikel_tekst: 'De første snøfnuggene har meldt sin ankomst, men nå er det stablet ved på alle hyttene, så vinteren kan bare komme! Tusen takk til alle som bidro på vedhogst-dugnader i sommer!',
        artikel_bilde: '/img/artikler/art_ved.jpg',
        artikel_tid: new Date(2019, 10, 22),
        artikel_forfatter: "bjørn",
        artikel_bilde_alt: 'bilde av ...'
    }
];

let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

let articleEl = [];

function switch_to_article(article) {
    document.querySelector("#artikkelen").replaceWith(generate_article(article));
}

function generate_article(article) {
    let main_el = document.createElement("div")
    main_el.id = "artikkelen";

    let title_el = document.createElement("h2");
    title_el.innerText = article.artikel_titel;

    let img_el = document.createElement("img");
    img_el.src = prefix + article.artikel_bilde;

    let paragraph_el = document.createElement("p");
    paragraph_el.innerHTML = article.artikel_tekst;

    let info_el = document.createElement("sub");
    let tid_objekt = article.artikel_tid;
    let tid = tid_objekt.getDate() + ". " + months[tid_objekt.getMonth() + 1] + " " + (Number(tid_objekt.getYear()) + 1900);
    info_el.innerText = "Skrevet av " + article.artikel_forfatter + ", " + tid /*article.artikel_tid*/ ;

    main_el.appendChild(img_el);
    main_el.appendChild(title_el);

    main_el.appendChild(paragraph_el);
    main_el.appendChild(info_el);
    return main_el;
}

artikler.forEach(article => articleEl.push(generate_article(article)));


function get_ordered_object(articles) {
    //sorterer artiklene inn i et objekt, der nøklene er året og deretter måneden
    let years = []
    articles.forEach(el => years.push(el.artikel_tid.getYear() + 1900));
    const unique_years = Array.from(new Set(years));
    //console.log(uniqueYears);
    const ordered = {};
    const shallow_ordered = {}
    unique_years.forEach(el => {
        ordered[el] = {};
        shallow_ordered[el] = []
    });

    unique_years.forEach(year => {
        shallow_ordered[year] = articles.filter(article => article.artikel_tid.getYear() + 1900 == year)
    })

    Object.keys(shallow_ordered).forEach(key => {
        let unique_months = []
        shallow_ordered[key].forEach(article => unique_months.push(article.artikel_tid.getMonth()))
        unique_months = [...new Set(unique_months)]
        unique_months.forEach(month => {
            ordered[key][month + 1] = articles.filter(article => article.artikel_tid.getMonth() == month)
        })
    })

    return ordered;
}

function switch_display(event) {
    const child = event.target.children[1];
    const chevron = event.target.children[0];
    if (typeof (child) !== "undefined" && event.target.nodeName == "LI") {
        child.style.display = child.style.display == "none" ? "" : "none";
    }
    if (typeof (chevron) !== "undefined" && chevron.classList.contains("chevron")) {
        if (chevron.classList.contains("right")) {

            chevron.classList.replace("right", "bottom")
        } else {
            chevron.classList.replace("bottom", "right");
        }
    }
}

function generate_list(ordered_articles) {
    let main_el = document.createElement("ul")
    Object.keys(ordered_articles).forEach(outer_key => {
        let outer_list_el = document.createElement("li");
        outer_list_el.innerText = outer_key;
        let chevron_el = document.createElement("span");
        chevron_el.classList.add("chevron", "right")

        outer_list_el.addEventListener("click", switch_display)
        main_el.prepend(outer_list_el);
        outer_list_el.appendChild(chevron_el)


        let middle_list_el = document.createElement("ul");
        middle_list_el.style.display = "none";
        outer_list_el.appendChild(middle_list_el);

        Object.keys(ordered_articles[outer_key]).forEach(inner_key => {
            let inner_list_el = document.createElement("li");
            //innerListEl.addEventListener("click", switchDisplay)
            middle_list_el.prepend(inner_list_el)
            inner_list_el.innerText = months[inner_key - 1];


            let chevron_el = document.createElement("span");
            chevron_el.classList.add("chevron", "right");
            inner_list_el.appendChild(chevron_el);

            let last_uli_swear = document.createElement("ul");
            last_uli_swear.style.display = "none";
            inner_list_el.appendChild(last_uli_swear);
            ordered_articles[outer_key][inner_key].forEach(article => {
                let inner_most_li = document.createElement("li");
                inner_most_li.innerText = article.artikel_titel;
                inner_most_li.addEventListener("click", () => {
                    switch_to_article(article)
                });
                last_uli_swear.appendChild(inner_most_li);
            })
        })
    })
    return main_el;
}

let news = document.getElementById("home_news");
if (news == null) {
    document.querySelector("#listeArtikkler").replaceWith(generate_list(get_ordered_object(artikler)));
}

function make_list_home( /*task*/ ) { //Function to make the listed elemetns show in the correct order.
    let news = document.getElementById("home_news");
    if (news != null) {
        for (let i = 0; i < 3; i++) {
            let titel = document.getElementById('titelArikkel' + i);
            let tekst = document.getElementById("tekstArtikkel" + i);
            let bilde = document.getElementById("bildeArtikkel" + i);
            titel.innerHTML = artikler[i].artikel_titel;
            tekst.innerHTML = artikler[i].artikel_tekst;
            bilde.src = prefix + artikler[i].artikel_bilde;
            bilde.alt = artikler[i].artikel_bilde_alt;
        }
    }
}
make_list_home();