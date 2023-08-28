const images = [
  {
    image: "./img/marvel-spider-man-miles-morales-iz.jpg",
    title: "Marvel's Spiderman Miles Morales",
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
const mainContainer = document.getElementById("front-img-cont");
const rightContainer = document.getElementById("right-img-cont");
const upArrow = document.getElementById("arrow-up");
const downArrow = document.getElementById("arrow-down");

//* Dichiarare la slide attiva
let activeSlide = 0;

//* Per ogni slide ?
images.forEach((slide, index) => {
  //* Nodo html
  const imagesElement = document.createElement("div");
  imagesElement.classList.add("front-cont");

  //* Aggiungere la classe Active.. se è la prima..
  if (index == activeSlide) imagesElement.classList.add("active");

  //* genero html interno
  imagesElement.innerHTML = ` 
  <div class="text-cont">
    <h2>${slide.title}</h2>
    <p>${slide.text}</p>
  </div>
  
  <img class='images' src="${slide.image}" alt="" /> `;

  //* Aggiungo il nodo slideElement all'oggetto slide
  slide.slideNode = imagesElement;

  //* Creo la miniatura
  const thumbElement = document.createElement("div");
  thumbElement.classList.add("slot", "filtered");
  thumbElement.innerHTML = `<img class='images' src="${slide.image}" alt="" />`;
  thumbElement.setAttribute("data-index", index);

  //* aggiungere Active se è la prima
  if (index == activeSlide) thumbElement.classList.add("active");

  //* Gestisco il click sulla miniatura
  thumbElement.addEventListener("click", function () {
    //recupero indice cliccato
    const index = this.getAttribute("data-index");

    //* attivo la slide corrispondente all'indice recuperato
    goToSlide(index);
  });

  //* aggiungo il nodo thumb all'oggetto slide
  slide.thumbNode = thumbElement;

  //* la slide e la miniatura nei relativi container ?
  mainContainer.append(imagesElement);
  rightContainer.append(thumbElement);
});

//* funzioni per up & down arrow..
function goNext() {
  let nextIndex = activeSlide + 1;
  if (nextIndex >= images.length) nextIndex = 0;

  //* slide selezionata
  goToSlide(nextIndex);
}
//* slide precedente
function goPrev() {
  let prevIndex = activeSlide - 1;
  if (prevIndex < 0) prevIndex = images.length - 1;

  // slide selezionata
  goToSlide(prevIndex);
}

//* funzione che attiva la slide dato il suo indice
function goToSlide(index) {
  // rimuovere classe active da slide e miniatura correnti
  const oldSlide = images[activeSlide].slideNode;
  const oldSlideThumb = images[activeSlide].thumbNode;
  oldSlide.classList.remove("active");
  oldSlideThumb.classList.remove("active", "border-active");
  oldSlideThumb.classList.add("filtered");

  //settare la nuova slide attiva
  activeSlide = index;

  // settare le classi active su slide e miniatura correnti
  const newSlide = images[activeSlide].slideNode;
  const newSlideThumb = images[activeSlide].thumbNode;
  newSlide.classList.add("active");
  newSlideThumb.classList.add("active", "border-active");
  newSlideThumb.classList.remove("filtered");
}
// * GESTISCO I CLICK SUI PULSANTI NEXT E PREV
upArrow.addEventListener("click", goPrev);
downArrow.addEventListener("click", goNext);
//*

//! set autoplay..
/* const autoPlay = setInterval(goNext, 2000); */
