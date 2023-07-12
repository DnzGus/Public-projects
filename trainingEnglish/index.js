let words;
let life = document.getElementById("life");
let button_html = document.getElementById("button");
let buttonEasy = document.getElementById("buttonEasy");
let buttonMedium = document.getElementById("buttonMedium");
let buttonHard = document.getElementById("buttonHard");
let buttonsAll = document.getElementsByClassName("dif_button");
let word_answer = document.getElementById("word_answer");
let word = document.getElementById("word");
let helperAnswer = document.getElementById("help");
let life_html = document.getElementById("life_html");
let wordcount = [];
let randomnum;
let words_word;
let words_correct;
let helper;
let lifes = 5;
let getHelp = 0;

function easy() {
  words = [
    { word: "car", correct: "carro" },
    { word: "house", correct: "casa" },
    { word: "cat", correct: "gato" },
    { word: "apple", correct: "maçã" },
    { word: "Book", correct: "livro" },
    { word: "table", correct: "mesa" },
    { word: "computer", correct: "computador" },
    { word: "high", correct: "alto" },
    { word: "low", correct: "baixo" },
    { word: "door", correct: "porta" },
    { word: "flower", correct: "flor" },
    { word: "head", correct: "cabeça" },
  ];
  buttonEasy.style.color = "#0080ff";
  buttonEasy.style.backgroundColor = "rgb(224, 223, 220)";
  buttonMedium.removeAttribute("style");
  buttonHard.removeAttribute("style");
  NewGame();
  resetLife();
  loadpage();
}
function medium() {
  words = [
    { word: "dinner", correct: "janta" || "jantar" },
    { word: "lunch", correct: "almoço" },
    { word: "breakfast", correct: "café da manhã" },
    { word: "straight", correct: "reto" },
    { word: "left", correct: "esquerda" },
    { word: "right", correct: "direita" },
    { word: "garden", correct: "jardim" },
    { word: "plane", correct: "avião" },
    { word: "college", correct: "faculdade" },
    { word: "costume", correct: "fantasia" },
    { word: "medicine", correct: "remédio" },
    { word: "hotel", correct: "hotel" },
    { word: "animal", correct: "animal" },
    { word: "material", correct: "material" },
    { word: "jewelry", correct: "jóia" || "jóias" },
    { word: "object", correct: "objeto" },
    { word: "regular", correct: "regular" },
    { word: "simple", correct: "simples" },
    { word: "video", correct: "vídeo" },
    { word: "meat", correct: "carne" },
    { word: "pineapple", correct: "abacaxi" },
    { word: "casualty", correct: "fatalidade" || "morte" },
    { word: "grandmother", correct: "vó" },
    { word: "cousin", correct: "primo" },
  ];
  buttonMedium.style.color = "#0080ff";
  buttonMedium.style.backgroundColor = "rgb(224, 223, 220)";
  buttonEasy.removeAttribute("style");
  buttonHard.removeAttribute("style");
  NewGame();
  resetLife();
  loadpage();
}
function hard() {
  words = [
    { word: "squirrel", correct: "esquilo" },
    { word: "race", correct: "raça" || "corrida" },
    { word: "watermelon", correct: "melancia" },
    { word: "application", correct: "inscrição" },
    { word: "anthem", correct: "hino" },
    { word: "fabric", correct: "tecido" },
    { word: "parents", correct: "pais" },
    { word: "record", correct: "gravar" },
    { word: "pretend", correct: "fingir" },
    { word: "spyglass", correct: "luneta" || "binóculo" },
    { word: "understood", correct: "entendido" },
    { word: "comics", correct: "revista em quadrinhos" || "gibi" },
    { word: "prejudice", correct: "preconceito" },
    { word: "push", correct: "empurrar" },
    { word: "cargo plane", correct: "avião de carga" },
    { word: "barrack", correct: "quartel" },
    { word: "cargoship", correct: "cargueiro" || "navio de carga" },
    { word: "graduate program", correct: "programa de graduação" },
    { word: "tent", correct: "tenda" || "barraca" },
    { word: "compliment", correct: "elogio" },
    { word: "brazilian nuts", correct: "castanha de cajú" },
    { word: "watter bottle", correct: "garrafa de água" },
    { word: "dessert", correct: "sobremesa" },
    { word: "dishes", correct: "louças" || "louça" },
    {
      word: "customs",
      correct: "alfândega" || "aduaneiro" || "aduaneira",
    },
    { word: "nonplussed", correct: "perplexo" },
    { word: "moisturizer", correct: "hidratante" },
    { word: "overwhelmed", correct: "sobrecarregado" },
    { word: "wheelchair", correct: "cadeira de rodas" },
    { word: "environmental reserve", correct: "reserva ambiental" },
    { word: "unconstitutionally", correct: "inconstitucionalmente" },
    { word: "deconstitutionalize", correct: "desconstitucionalizar" },
    { word: "Disproportionately", correct: "desproporcionalmente" },
    { word: "trapdoor", correct: "alçapão" },
    { word: "guitar", correct: "violão" },
    { word: "stork", correct: "cegonha" },
  ];
  buttonHard.style.color = "#0080ff";
  buttonHard.style.backgroundColor = "rgb(224, 223, 220)";
  buttonEasy.removeAttribute("style");
  buttonMedium.removeAttribute("style");
  NewGame();
  resetLife();
  loadpage();
}

function loadpage() {
  randomnum = rand();
  if (wordcount.length == words.length) {
    return finish();
  }
  if (wordcount.includes(randomnum) && wordcount.length <= 24) {
    while (wordcount.includes(randomnum)) randomnum = rand();
  }
  word.removeAttribute("style");
  words_word = words[randomnum].word.toUpperCase();
  words_correct = words[randomnum].correct;
  word.innerHTML = words_word;
  life.innerHTML = lifes;
  console.log(wordcount);
  getHelp = 0;
  helperAnswer.innerHTML = "Help!";
}

word_answer.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    button();
  }
});
function button() {
  const answer = document.querySelector("#word_answer").value.toLowerCase();
  const correct = words[randomnum].correct;

  if (answer.match(correct)) {
    wordcount.push(randomnum);
    correctWrong(answer, correct);
    setTimeout(loadpage, 1200);
    clearbox();
  } else {
    correctWrong(answer, correct);
    life.innerHTML = lifes;
    setTimeout(tryagain, 1200);
    clearbox();
  }
}

function help() {
  helperAnswer.innerHTML = "";
  if (getHelp === 1) {
    alert("Você já obteve a ajuda!");
    helperAnswer.innerHTML = helper;
  } else {
    randomLetter1 = words_correct[randC()];
    randomLetter2 = words_correct[randC()];
    if (randomLetter1 === randomLetter2) {
      while (randomLetter1 === randomLetter2) {
        randomLetter2 = words_correct[randC()];
      }
    }
    randomIndex1 = words_correct.indexOf(randomLetter1);
    randomIndex2 = words_correct.indexOf(randomLetter2);
    for (let i = 0; i < words_correct.length; i++) {
      if (i === randomIndex1) {
        helperAnswer.innerHTML += randomLetter1;
      } else if (i === randomIndex2) {
        helperAnswer.innerHTML += randomLetter2;
      } else {
        helperAnswer.innerHTML += "*";
      }
    }
    helper = helperAnswer.innerHTML;
    console.log(randomIndex1);
    console.log(randomIndex2);
    getHelp += 1;
  }
}

function correctWrong(answer, correct) {
  const green = "#007168";
  const red = "#cc0000";
  if (answer.match(correct)) {
    word.style.color = green;
    word.innerHTML = answer.toUpperCase() + "!";
  } else if (lifes <= 1) {
    word.style.color = red;
    word.innerHTML = "Game Over!".toUpperCase();
    lifes = 5;
    wordcount = [];
    setTimeout(loadpage, 1200);
  } else {
    word.style.color = red;
    word.innerHTML = "Try Again!".toUpperCase();
    lifes -= 1;
  }
}

function clearbox() {
  document.getElementById("word_answer").value = "";
}

function tryagain() {
  words_word = words[randomnum].word.toUpperCase();
  word.innerHTML = words_word;
  life.innerHTML = lifes;
  word.removeAttribute("style");
}

function rand() {
  return Math.floor(Math.random() * words.length);
}
function randC() {
  return Math.floor(Math.random() * words[randomnum].correct.length);
}

function finish() {
  word.innerHTML = `Parabéns, você concluiu todas as frases!`;
  word.removeAttribute(`style`);
  word_answer.style.visibility = "hidden";
  button_html.style.visibility = "hidden";
  life_html.style.visibility = "hidden";
}
const resetLife = () => {
  if (lifes != 5) {
    lifes = 5;
  }
};
const NewGame = () => {
  word_answer.style.visibility = "visible";
  button_html.style.visibility = "visible";
  life_html.style.visibility = "visible";
};
