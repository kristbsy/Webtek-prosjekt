const hytter = [
  {
    id: 0,
    x: 50,
    y: 50,
    attachments: [2, 3],

    info: {
      name: "Absultaket",
      price: 250,
      features: "Pris: 250 <br> Sengeplasser: 4 <br> Innlagt vann: Nei <br> Innlagt strøm: Ja <br>Internett:Nei <br> Annet: Dørene er 1,6m høy",
      text: "",
      longText: "Absultaket er høytliggende og høytstående. Det nyeste innenfor trekonstruksjon så er denne koselige 4-personshytta plassert så høyt vi kunne etter vår egen byggningsevne. Den står store 1,2 meter over bakken ved hjelp av at vi har brukt titalls stylter til å lage stolper. Styltene er konstruert for at et imaginært troll skal kunne bruke dem, og er derfor i stand til å holde flere tonn. <br><br> Innholdet i Absultaket er ikke like omfattende som i noen av våre andre hytter, men er utstyrt med en vedpeis slik at den holder komfortabel varme etter den har fyrt i kjappe 3 timer. <br><br> Med tanke på høyden av bygget er det ikke lagt inn vann, men med framtanke og planlegging kan dette kompenseres for at en tar med egne vannkanner eller bruker et lite beløp (459,95 kr) til å få deres væskebaserte forespørsler kjørt opp med ATV. Strøm er innlagt, men dette er takket være et 1x1 m solsellepanel satt på taket. Spenningen i støpselet er ikke nok til å lade en eventuell mobiltelefon.",
      img: [['hytte1.jpg', 'bilde av kul hytte']]
    },
  },
  {
    id: 1,
    x: 552,
    y: 600,
    attachments: [2, 3],

    info: {
      name: "Bjørnehiet",
      price: 250,
      features: 'Pris:250 <br>Sengeplasser: 8<br>Innlagt vann: Ja<br>Innlagt strøm: Ja <br> Internett: Ja <br> Annet: Ikke egnet for de med høydeskrekk',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nostrum, doloremque consequatur aperiam, dolores nemo quos aspernatur doloribus accusantium ad perferendis in animi? Assumenda totam fugiat praesentium atque id dolorum?",
      longText: 'Bjørnehiet er vår lengste hytte, på hele 20 meter. Dette kompenseres for med at den kun er 5 meter bred og 1.8 meter høyt, men er garantert i å gi deg den gode dvalefølelsen så snart du kryper langt nok inn. <br> <br>Hytta er utstyrt med bjørneskinn på veggene (fuskpels) og er godt isolert for selv de kaldeste kvelder som kan finne sted i oppdal. Innad hytta er det plassert et langbord, som kan romme opp til 16 personer, så hvis en vil ta slektstreffet her så er det en smule lite, med mindre noen skal sitte på border. På bakgrunn av den lave takhøyden er dette en ypperlig hytte for de som har med seg barn og kortvokste som vil ha litt variasjon i hverdagen. Skal poengteres at eventuell skalling i taket og skader deretter ikke er dekket av turlaget. Hvis det viser seg å være et problem anbefales det å investere eller leie hjelm før dere flytter inn.',
      img: ["./hytte2.jpg"]
    },
  },
  {
    id: 2,
    x: 552,
    y: 200,
    attachments: [1, 2],

    info: {
      name: "Einhaugen",
      price: 195,
      features: "Pris: 195 <br>Sengeplasser: 2<br>Innlagt vann: Ja<br>Innlagt strøm: Ja<br>Internett: Ja<br>Annet: Fin platting",
      text: "En eksepsjonelt god brødtekst til hytte 3. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      longText: "Liggende på en enestående hylle i fjellet, like fjernt fra sivilisasjon som de andre hyttene, men på grunn av vinklingen av vinduene og den tette skogen som omringer vekker det en følelse av isolasjon og ro i deg når du sitter ved frokostbordet. <br><br> Dette er vår minste hytte, med kun 2 sengeplasser, så vær forsiktig med hvem du booker med, for her vil dere måtte prate om problemene deres, hvis dere skal ha håp om å overleve oppholdet. Det er heller ikke mye til oppholdsrom, men det er bygget en liten platt, slik at du ikke skal stenges inne i selve hytta. Platten er ikke resistent mot mugg, så hvis det har regnet ute blir den særdeles glatt og utrivelig å gå på. Kan derfor anbefales å besøke denne hytta om vinteren, slik at du sklir på is, ikke mugg.",
      img: "./hytte1.jpg"
    },
  },

  {
    id: 3,
    x: 300,
    y: 400,
    attachments: [4, 5, 6, 7],

    info: {
      name: "Hytte 4",
      price: 10900,
      features: "en<br>to<br>tre",
      text: "En eksepsjonelt god brødtekst til hytte 4. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      img: "./hytte1.jpg"
    },
  },
  {
    id: 4,
    x: 300,
    y: 200,
    attachments: [2, 3, 5],

    info: {
      name: "Hytte 5",
      price: 10900,
      features: "en<br>to<br>tre",
      text: "En eksepsjonelt god brødtekst til hytte 5. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      img: "./hytte1.jpg"
    },
  },
  {
    id: 5,
    x: 400,
    y: 300,
    attachments: [3, 4, 6, 7],

    info: {
      name: "Hytte 6",
      price: 10900,
      features: "en<br>to<br>tre",
      text: "En eksepsjonelt god brødtekst til hytte 6. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      img: "./hytte1.jpg"
    },
  },
  {
    id: 6,
    x: 500,
    y: 400,
    attachments: [2, 5, 3, 7],

    info: {
      name: "Hytte 7",
      price: 10900,
      features: "en<br>to<br>tre",
      text: "En eksepsjonelt god brødtekst til hytte 7. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      img: "./hytte1.jpg"
    },
  },
  {
    id: 7,
    x: 700,
    y: 200,
    attachments: [2, 3, 5, 6],

    info: {
      name: "Hytte 8",
      price: 10900,
      features: "en<br>to<br>tre",
      text: "En eksepsjonelt god brødtekst til hytte 8. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      img: "./hytte1.jpg"
    }
  },
  {
    id: 8,
    x: 700,
    y: 600,
    attachments: [7],

    info: {
      name: "Hytte 9",
      price: 10900,
      features: "en<br>to<br>tre",
      text: "En eksepsjonelt god brødtekst til hytte 9. All informasjonen du noensinne kunne trengt finnes i denne lille boksen. Er det ikke fantastisk?",
      img: "./hytte1.jpg"
    },
  }
];
