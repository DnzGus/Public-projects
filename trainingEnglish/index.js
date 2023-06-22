let words
let life = document.getElementById("life")
let button_html = document.getElementById("button")
let buttonEasy = document.getElementById("buttonEasy")
let buttonMedium = document.getElementById("buttonMedium")
let buttonHard = document.getElementById("buttonHard")
let buttonsAll = document.getElementsByClassName("dif_button")
let word_answer = document.getElementById("word_answer")
let word = document.getElementById("word")
let answerH = document.getElementById("help")
let life_html = document.getElementById("life_html")
let wordcount = []
let randomnum
let words_word
let words_correct
let helper
let lifes = 5
let trys = 0

function easy(){
    words = [
        p1={word: "car",
        correct : "carro"},
        p2={word: "house",
        correct : "casa"},
        p3={word: "cat",
        correct : "gato"},
        p4={word: "apple",
        correct : "maçã"},
        p5={word: "Book",
        correct : "livro"},
        p6={word: "table",
        correct : "mesa"},
        p7={word: "computer",
        correct : "computador"},
        p8={word: "high",
        correct : "alto"},
        p9={word: "low",
        correct : "baixo"},
        p10={word: "door",
        correct : "porta"},
        p11={word: "flower",
        correct : "flor"},
        p12={word: "head",
        correct : "cabeça"},
    ]
    buttonEasy.style.color = "#0080ff"
    buttonEasy.style.backgroundColor = "rgb(224, 223, 220)"
    buttonMedium.removeAttribute("style")
    buttonHard.removeAttribute("style")
    word_answer.style.visibility = "visible"
    button_html.style.visibility = "visible"
    life_html.style.visibility = "visible"
    loadpage()
}
function medium(){
    words = [
        p1={word: "dinner",
        correct : "janta"||"jantar"},
        p2={word: "lunch",
        correct : "almoço"},
        p3={word: "breakfast",
        correct : "café da manhã"},
        p4={word: "straight",
        correct : "reto"},
        p5={word: "left",
        correct : "esquerda"},
        p6={word: "right",
        correct : "direita"},
        p7={word: "garden",
        correct : "jardim"},
        p8={word: "plane",
        correct : "avião"},
        p9={word: "college",
        correct : "faculdade"},
        p10={word: "costume",
        correct : "fantasia"},
        p11={word: "medicine",
        correct : "remédio"},
        p12={word: "hotel",
        correct : "hotel"},
        p13={word: "animal",
        correct : "animal"},
        p14={word: "material",
        correct : "material"},
        p15={word: "jewelry",
        correct : "jóia"||"jóias"},
        p16={word: "object",
        correct : "objeto"},
        p17={word: "regular",
        correct : "regular"},
        p18={word: "simple",
        correct : "simples"},
        p19={word: "video",
        correct : "vídeo"},
        p20={word: "meat",
        correct : "carne"},
        p21={word: "pineapple",
        correct : "abacaxi"},
        p22={word: "casualty",
        correct : "fatalidade"||"morte"},
        p23={word: "grandmother",
        correct : "vó"},
        p24={word: "cousin",
        correct : "primo"},
    ]
    buttonMedium.style.color = "#0080ff"
    buttonMedium.style.backgroundColor = "rgb(224, 223, 220)"
    buttonEasy.removeAttribute("style")
    buttonHard.removeAttribute("style")
    word_answer.style.visibility = "visible"
    button_html.style.visibility = "visible"
    life_html.style.visibility = "visible"
    button_html.style.visibility = "visible"
    loadpage()
}
function hard(){
    words = [
        p1={word: "squirrel",
        correct : "esquilo"},
        p2={word: "race",
        correct : "raça"||"corrida"},
        p3={word: "watermelon",
        correct : "melancia"},
        p4={word: "application",
        correct : "inscrição"},
        p5={word: "anthem",
        correct : "hino"},
        p6={word: "fabric",
        correct : "tecido"},
        p7={word: "parents",
        correct : "pais"},
        p8={word: "record",
        correct : "gravar"},
        p9={word: "pretend",
        correct : "fingir"},
        p10={word: "spyglass",
        correct : "luneta"||"binóculo"},
        p11={word: "understood",
        correct : "entendido"},
        p12={word: "comics",
        correct : "revista em quadrinhos"||"gibi"},
        p13={word: "prejudice",
        correct : "preconceito"},
        p14={word: "push",
        correct : "empurrar"},
        p15={word: "cargo plane",
        correct : "avião de carga"},
        p16={word: "barrack",
        correct : "quartel"},
        p17={word: "cargoship",
        correct : "cargueiro"||"navio de carga"},
        p18={word: "graduate program",
        correct : "programa de graduação"},
        p19={word: "tent",
        correct : "tenda"||"barraca"},
        p20={word: "compliment",
        correct : "elogio"},
        p21={word: "brazilian nuts",
        correct : "castanha de cajú"},
        p22={word: "watter bottle",
        correct : "garrafa de água"},
        p23={word: "dessert",
        correct : "sobremesa"},
        p24={word: "dishes",
        correct : "louças"||"louça"},
        p25={word: "customs",
        correct : "alfândega"||"aduaneiro"||"aduaneira"},
        p26={word: "nonplussed",
        correct : "perplexo"},
        p27={word: "moisturizer",
        correct : "hidratante"},
        p28={word: "overwhelmed",
        correct : "sobrecarregado"},
        p29={word: "wheelchair",
        correct : "cadeira de rodas"},
        p30={word: "environmental reserve",
        correct : "reserva ambiental"},
        p31={word: "unconstitutionally",
        correct : "inconstitucionalmente"},
        p32={word: "deconstitutionalize",
        correct : "desconstitucionalizar"},
        p33={word: "Disproportionately",
        correct : "desproporcionalmente"},
        p34={word: "trapdoor",
        correct : "alçapão"},
        p35={word: "guitar",
        correct : "violão"},
        p36={word: "stork",
        correct : "cegonha"},
    ]
    buttonHard.style.color = "#0080ff"
    buttonHard.style.backgroundColor = "rgb(224, 223, 220)"
    buttonEasy.removeAttribute("style")
    buttonMedium.removeAttribute("style")
    word_answer.style.visibility = "visible"
    button_html.style.visibility = "visible"
    life_html.style.visibility = "visible"
    button_html.style.visibility = "visible"
    loadpage()
}

function loadpage(){
    randomnum = rand()
    if(wordcount.length == words.length){
        return finish()
    }
    if(wordcount.includes(randomnum) && wordcount.length <= 24){
        while(wordcount.includes(randomnum))
            randomnum = rand()
        }
        word.removeAttribute("style")
        words_word = words[randomnum].word.toUpperCase();
        words_correct = words[randomnum].correct
        word.innerHTML = words_word;
        life.innerHTML = lifes;
        console.log(wordcount)
        trys = 0
        answerH.innerHTML = "Help!"
}



word_answer.addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
        button()
    }
})
function button() {
    const answer = document.querySelector("#word_answer").value.toLowerCase();
    const correct = words[randomnum].correct

    if(answer.match(correct)){
        wordcount.push(randomnum)
        correctWrong(answer, correct)
        setTimeout(loadpage, 1200)
        clearbox()
    }
    else{
        correctWrong(answer, correct)
        life.innerHTML = lifes;
        setTimeout(tryagain, 1200)
        clearbox()
    }
}

function help(){
    answerH.innerHTML = ""
    if(trys === 1){
        alert("Você já obteve a ajuda!")
        answerH.innerHTML = helper
    }
    else{
        randomLetter1 = words_correct[randC()]
        randomLetter2 = words_correct[randC()]
        if(randomLetter1 === randomLetter2){
            while(randomLetter1 === randomLetter2){
                randomLetter2 = words_correct[randC()]
            }
        }
        randomIndex1 = words_correct.indexOf(randomLetter1)
        randomIndex2 = words_correct.indexOf(randomLetter2)
        for(let i = 0; i < words_correct.length; i++){
            if(i === randomIndex1){
                answerH.innerHTML += randomLetter1
            }
            else if(i === randomIndex2){
                answerH.innerHTML += randomLetter2
            }
            else{
                answerH.innerHTML += "*"
            }
        }
        helper = answerH.innerHTML
    console.log(randomIndex1)
    console.log(randomIndex2)
    trys += 1
    }
}

function correctWrong(answer, correct){
    const green = "#007168";
    const red = "#cc0000";
    if(answer.match(correct)){
        word.style.color = green;
        word.innerHTML = answer.toUpperCase() +"!"
    }
    else if(lifes <= 1){
        word.style.color = red
        word.innerHTML = "Game Over!".toUpperCase()
        lifes = 5
        wordcount = []
        setTimeout(loadpage, 1200)
        }
    else{
        word.style.color = red;
        word.innerHTML = "Try Again!".toUpperCase();
        lifes -= 1
    }
}

function clearbox(){
    document.getElementById("word_answer").value = ""
}

function tryagain(){
    words_word = words[randomnum].word.toUpperCase();
    word.innerHTML = words_word;
    life.innerHTML = lifes;
    word.removeAttribute("style")
}

function rand(){
    return  Math.floor(Math.random()* words.length)
}
function randC(){
    return Math.floor(Math.random() * words[randomnum].correct.length)
}

function finish(){
    word.innerHTML = `Parabéns, você concluiu todas as frases!`
    word.removeAttribute(`style`)
    word_answer.style.visibility = "hidden";
    button_html.style.visibility = "hidden";
    life_html.style.visibility = "hidden";
}
