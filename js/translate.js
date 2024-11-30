// Translation dictionary for the sections
const translations = {
    en: {
        "who-we-are": {
            title1: "Embrace the Adventure",
            subtitle1: "عش المغامرة",
            content1: "Discover the thrill of adventure in Marrakech with our unforgettable quad and camel riding experiences! Embark on a journey through breathtaking desert landscapes, where you'll ride powerful quads across rugged trails and enjoy the timeless charm of camel trekking. Whether you're seeking adrenaline or a peaceful connection with nature, this unique combination promises stunning views, authentic cultural encounters, and memories to last a lifetime.",
            title2: "Who We Are?",
            subtitle2: "من نحن؟",
            content2: "Discover the thrill of adventure in Marrakech with our unforgettable quad and camel riding experiences! Embark on a journey through breathtaking desert landscapes, where you'll ride powerful quads.",
            button1: "La société",
            button2: "Nos métiers"
        },
        "our-services": {
            title: "Our Adventures",
            subtitle: "مغامراتنا",
            content: "Discover the thrill of adventure in Marrakech with our unforgettable quad and camel riding experiences! Embark on a journey through breathtaking desert landscapes, where you'll ride powerful quads across rugged trails and enjoy the timeless charm of camel.",
            carouselTitle: "Camel Riding!",
            carouselContent: "Discover the thrill of adventure in Marrakech with our unforgettable quad and camel riding experiences! Embark on a journey through breathtaking desert landscapes, where you'll ride powerful quads across rugged trails.",
            button1: "La société",
            button2: "Nos métiers"
        },
        "our-history": {
            title1: "Our History",
            subtitle1: "تاريخنا",
            content1: "Discover the thrill of adventure in Marrakech with our unforgettable quad and camel riding experiences! Embark on a journey through breathtaking desert landscapes, where you'll ride powerful quads across rugged trails and enjoy the timeless charm of camel.",           
            
        }
    },
    fr: {
        "who-we-are": {
            title1: "Vivez l'Aventure",
            subtitle1: "عش المغامرة",
            content1: "Découvrez le frisson de l'aventure à Marrakech avec nos expériences inoubliables de quad et de balade à dos de chameau ! Partez pour un voyage à travers des paysages désertiques époustouflants, où vous conduirez de puissants quads sur des sentiers accidentés tout en profitant du charme intemporel des balades à dos de chameau.",
            title2: "Qui sommes-nous ?",
            subtitle2: "من نحن؟",
            content2: "Découvrez le frisson de l'aventure à Marrakech avec nos expériences inoubliables de quad et de balade à dos de chameau ! Partez pour un voyage à travers des paysages désertiques époustouflants.",
            button1: "La société",
            button2: "Nos métiers"
        },
        "our-services": {
            title: "Nos Aventures",
            subtitle: "مغامراتنا",
            content: "Découvrez le frisson de l'aventure à Marrakech avec nos expériences inoubliables de quad et de balade à dos de chameau ! Partez pour un voyage à travers des paysages désertiques époustouflants, où vous conduirez de puissants quads sur des sentiers accidentés tout en profitant du charme intemporel des balades à dos de chameau.",
            carouselTitle: "Balade à dos de chameau !",
            carouselContent: "Découvrez le frisson de l'aventure à Marrakech avec nos expériences inoubliables de quad et de balade à dos de chameau ! Partez pour un voyage à travers des paysages désertiques époustouflants, où vous conduirez de puissants quads.",
            button1: "La société",
            button2: "Nos métiers"
        }
    }
};

// Function to translate the "Embrace the Adventure" section
function translateWhoWeAre(language) {
    const section = document.getElementById("who-we-are");
    const translation = translations[language]["who-we-are"];

    section.querySelector("h2:nth-of-type(1)").innerHTML = `${translation.title1}<br><small>${translation.subtitle1}</small>`;
    section.querySelector("p:nth-of-type(1)").textContent = translation.content1;

    section.querySelector("h2:nth-of-type(2)").innerHTML = `${translation.title2}<br><small>${translation.subtitle2}</small>`;
    section.querySelector("p:nth-of-type(2)").textContent = translation.content2;

    const buttons = section.querySelectorAll(".buttons a");
    buttons[0].textContent = translation.button1;
    buttons[1].textContent = translation.button2;
}

// Function to translate the "Our Adventures" section
function translateOurServices(language) {
    const section = document.getElementById("our-services");
    const translation = translations[language]["our-services"];

    section.querySelector("h2").textContent = translation.title;
    section.querySelector("small").textContent = translation.subtitle;
    section.querySelector("p").textContent = translation.content;

    const carouselOverlay = section.querySelector(".carousel-overlay");
    carouselOverlay.querySelector("h3").textContent = translation.carouselTitle;
    carouselOverlay.querySelector("p").textContent = translation.carouselContent;

    const buttons = carouselOverlay.querySelectorAll(".carousel-buttons a");
    buttons[0].textContent = translation.button1;
    buttons[1].textContent = translation.button2;
}

// Function to translate all sections
function translatePage(language) {
    translateWhoWeAre(language);
    translateOurServices(language);
}

// Event listeners for language selection
document.getElementById("french-flag").addEventListener("click", () => {
    translatePage("fr");
});

document.getElementById("english-flag").addEventListener("click", () => {
    translatePage("en");
});
