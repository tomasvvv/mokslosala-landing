const TRANSLATIONS = {
  "button-tickets": ["Bilietai", "Tickets"],
  "button-contacts": ["Kontaktai", "Contacts"],
  "heading-1": ["O jei žinotume daugiau?", "What if we knew more?"],
  "working-hours": ["<b>Darbo laikas</b><br/>Kasdien 10:00-19:00<br/>Nedirbame pirmadieniais", "<b>Opening hours</b><br/>Daily: 10:00-19:00</br>Closed on Mondays"],
  "december-body": ["", ""],
  "intro-text": [
    "Mokslo sala - tai pirmas mokslo ir inovacijų populiarinimo centras Lietuvoje. Čia lankytojų laukia net 140 objektų talpinanti ilgalaikė ekspozicija, modernus planetariumas, besikuriančios STEAM laboratorijos, įvairios kultūrinės ir edukacinės veiklos.",
    "Science Island is Lithuania's first Science and Innovation Promotion Centre. With a permanent exhibition of 140 interactive installations, a state-of-the-art planetarium, emerging STEAM laboratories, and various cultural and educational activities.",
  ],
  "for-visitors-title": ["Lankytojams:", "Visitor information:"],
  "for-visitors-body": [
    `<b>Darbo laikas</b><br />
          Kasdien 10:00-19:00<br />
          Nedirbame pirmadieniais<br /><br/>
          Dėl didelio lankytojų srauto, rekomenduojama planuoti vizitą iš anksto, įsigyjant bilietus bei atvykstant juose nurodytu metu.<br/>
          <br />
          <b>Administracija</b><br />
          I-V 09:00-18:00<br />
          <a href="mailto:info@mokslosala.lt" style="text-decoration:underline">info@mokslosala.lt</a><br />
          <br />
          Laukiame visų - Karaliaus Mindaugo pr. 50, Kaunas, 44307.
          <br/>
          <br />
          Mokslo salos erdvės pritaikytos visiems: įrengti liftai, specialūs tualetai, patogios ekspozicijų salės.`,
    `
        <b>Opening times</b><br />
          Daily: 10:00-19:00<br />
          Closed on Mondays<br />
          <br/>
          Due to the large flow of visitors, it is recommended to plan your visit in advance, by purchasing tickets and arriving at the time specified in them.<br/>
          <br/>
          <b>Administration</b><br />
          Monday to Friday: 09:00-18:00<br />
          <a href="mailto:info@mokslosala.lt" style="text-decoration:underline">info@mokslosala.lt</a><br />
          <br />
          We welcome everyone at: Karaliaus Mindaugo prospektas 50, Kaunas, 44307.
          <br/>
          <br />
          Science Island spaces are fully accessible for all visitors, featuring elevators, specially designed restrooms, and accessible exhibition space.
    `,
  ],
  "visit-us": ["Aplankykite dabar!", "Visit us now!"],
};

$(function () {
  // translate
  let language = window.localStorage.getItem("ms_temp_landing_lang") || "LT";

  const setImgSrc = () => {
    $(".entrance-image").attr("src", `assets/entrance_${language.toLowerCase()}.jpg`);
  };

  const translate = () => {
    const translationIdx = language === "EN" ? 1 : 0;
    Object.keys(TRANSLATIONS).forEach((key) => {
      $(`[data-translate="${key}"]`).html(TRANSLATIONS[key][translationIdx]);
    });
  };

  const setLanguageLang = () => {
    $(".language").html(language === "EN" ? "LT" : "EN");
  };

  $(".language").on("click", function () {
    window.localStorage.setItem("ms_temp_landing_lang", language === "EN" ? "LT" : "EN");
    language = language === "EN" ? "LT" : "EN";

    setLanguageLang();
    translate();
    setImgSrc();
  });

  translate();
  setImgSrc();
  setLanguageLang();
});
