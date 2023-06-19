const words = [
    p1={word: "Book",
    correct : "livro"},
    p2={word: "Car",
    correct : "carro"},
    p3={word: "Cat", 
    correct : "gato"},
    p4={word: "Chair", 
    correct : "cadeira"},
    p5={word: "Computer",
    correct : "computador"},
    p6={word: "Desk",
    correct : "escrivaninha"},
    p7={word: "Door",
    correct : "porta"},
    p8={word: "Floor",
    correct : "chão"},
    p9={word: "House", 
    correct : "casa"},
    p10={word: "Key",
    correct : "chave"},
    p11={word: "Laptop",
    correct : "laptop"},
    p12={word: "Light",
    correct : "luz"},
    p13={word: "Monitor",
    correct : "monitor"},
    p14={word: "Mouse",
    correct : "rato"},
    p15={word: "Sofa",
    correct : "sofá"},
    p16={word: "Table",
    correct : "mesa"},
    p17={word: "Afternoon",
    correct : "tarde"},
    p18={word: "Age",
    correct : "idade"},
    p19={word: "Beauty",
    correct : "beleza"},
    p20={word: "Bed",
    correct : "cama"},
    p21={word: "Beginning",
    correct : "começo"},
    p22={word: "Bicycle",
    correct : "bicicleta"},
    p23={word: "Birthday",
    correct : "aniversário"},
    p24={word: "Body",
    correct : "corpo",}
]

let life = document.getElementById("life")
let button_html = document.getElementById("button")
let word_answer = document.getElementById("word_answer")
let word = document.getElementById("word")
let answerH = document.getElementById("help")
let life_html = document.getElementById("life_html")
let wordcount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
let randomnum
let words_word
let words_correct
let helper
let lifes = 5
let trys = 0

loadpage()

function loadpage(){
    randomnum = rand()
    if(wordcount.length == 24){
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
        word.innerHTML = correct.toUpperCase() +"!"
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
    word_answer.remove();
    button_html.remove();
    life_html.remove();
}
