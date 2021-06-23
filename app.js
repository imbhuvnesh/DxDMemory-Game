document.addEventListener("DOMContentLoaded", () => {
  const IMAGES = [
    {
      Name: "Rias Gremory",
      img: "./images/Riasg.jpg",
    },
    {
      Name: "Rias Gremory",
      img: "./images/Riasg.jpg",
    },
    {
      Name: "Akeno Himejima",
      img: "./images/akeno.jpg",
    },
    {
      Name: "Akeno Himejima",
      img: "./images/akeno.jpg",
    },
    {
      Name: "Koneko Toujou",
      img: "./images/koneko.jpg",
    },
    {
      Name: "Koneko Toujou",
      img: "./images/koneko.jpg",
    },
    {
      Name: "Xenovia",
      img: "./images/xenovia.jpg",
    },
    {
      Name: "Xenovia",
      img: "./images/xenovia.jpg",
    },
    {
      Name: "Asia Argento",
      img: "./images/aisa.png",
    },
    {
      Name: "Asia Argento",
      img: "./images/aisa.png",
    },
    {
      Name: "Irina Shidou",
      img: "./images/irina.jpg",
    },
    {
      Name: "Irina Shidou",
      img: "./images/irina.jpg",
    },
  ];

  IMAGES.sort(() => 0.5 - Math.random());
  let chosenCards = [];
  let chosenCardID = [];
  counter = 0;

  const grid = document.querySelector(".grid");

  function showItems() {
    for (let i = 0; i < IMAGES.length; i++) {
      let card = document.createElement("img");
      card.style.height = "150px";
      card.style.width = "200px";
      card.style.border = "1px solid white";
      card.style.margin = "0px";

      card.setAttribute("src", "./images/logo.png");
      card.setAttribute("data-id", i + 1);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkMatch() {
    let cards = document.querySelectorAll("img");
    let c1 = chosenCardID[0];
    let c2 = chosenCardID[1];

    if (c1 === c2) {
      cards[c1].setAttribute("src", "./images/logo.png");
      cards[c2].setAttribute("src", "./images/logo.png");

      alert("You have clicked the same image twice!");
    } else if (chosenCards[0] === chosenCards[1]) {
      alert("MATCH");
      cards[c1].removeEventListener("click", flipCard);
      cards[c2].removeEventListener("click", flipCard);
    } else {
      cards[c1].setAttribute("src", "./images/logo.png");
      cards[c2].setAttribute("src", "./images/logo.png");
      alert("Sorry, try again...");
    }
    chosenCardID = [];
    chosenCards = [];
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    console.log(document.querySelectorAll("img"));
    chosenCards.push(IMAGES[cardId-1].Name);
    chosenCardID.push(cardId);
    this.setAttribute("src", IMAGES[cardId-1].img);
    if (chosenCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
  showItems();
});
