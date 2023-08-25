const images = [
  {
    image: "./img/marvel-spider-man-miles-morales-iz.jpg",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "./img/rift-a-part.jpg",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "./img/fortnite.jpg",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/stray.jpg",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/avengers.jpg",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//* Elementi di possibile interesse
const mainContainer = document.getElementsByClassName("front-cont");
const rightContainer = document.getElementById("right-img-cont");
const upArrow = document.getElementById("arrow-up");
const downArrow = document.getElementById("arrow-down");

//* Dichiarare la slide attiva
let activeSlide = 0;

upArrow.addEventListener("click", function () {
  document.querySelector(".front-cont.active").classList.remove("active");

  activeSlide < images.length ? activeSlide-- : (activeSlide = 0);

  mainContainer[activeSlide].classList.add("active");
});

downArrow.addEventListener("click", function () {
  document.querySelector(".front-cont.active").classList.remove("active");

  activeSlide < images.length ? activeSlide++ : (activeSlide = 0);

  mainContainer[activeSlide].classList.add("active");
});

/* togliere l'active dove sta
devo individuare la nuova immagine 
associare active */
/* if (activeSlide < images.length) {
        activeSlide++;
    } else {
        index = 0;
    } */
