//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
      quote: "The best way to find yourself is to lose yourself in the service of others",
      person: "Mahatma Gandhi",
    },
    {
      quote: "My soul is consumed with longing for your laws at all times",
      person: "Psalm 119:20",
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      person: "Robert Frost",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs",
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela",
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      person: "Franklin D. Roosevelt",
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      person: "Confucius",
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt",
    },
  ];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  //practic variabila random se calculeaza asa:
  // am o functie de math.random care e un random intre 0 si 1
  // quotes.length e lungimea acestui array
  //practic se face un random din lungimea acestui array
  //math.floor asigura ca asta e un nr si imi va da al catelea element din array sa-mi afiseze dupa click event

  quote.innerText = quotes[random].quote; //functia de innertext imi permite sa schimb textul in functie de variabila random generata de quotes.lengh*math.random
  //basically quotes[random] reprezinta al *random*-lea element din array, selectat pt variabila quote din text
  person.innerText = quotes[random].person;
  //functia de innertext aici imi permite sa selectez al *random*-lea element de tip person din arrayul quotes
});
