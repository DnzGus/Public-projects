//to do: put a scoreboard
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

let pointsCorrect = document.getElementById("pointsC")
let pointsWrong = document.getElementById("pointsW")
let button_html = document.getElementById("button")
let word_answer = document.getElementById("word_answer")
let word = document.getElementById("word")
let wordcount = []
let randomnum
let words_word
let correctP = 0
let wrongsP = 0



loadpage()


function loadpage(){
    randomnum = rand()
    if(wordcount.includes(randomnum) && wordcount.length <24){
        while(wordcount.includes(randomnum)){
            randomnum = rand()
        }
    }
    words_word = words[randomnum].word.toUpperCase();
    if(wordcount.length >= 24){
        finish()
    }
    word.removeAttribute("style")
    word.innerHTML = words_word;
    pointsCorrect.innerHTML = correctP
    pointsWrong.innerHTML = wrongsP
    console.log(wordcount)
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
        CorrectWrong(answer, correct)
        setTimeout(loadpage, 1200)
        clearbox()
    }
    else{
        CorrectWrong(answer, correct)
        setTimeout(tryagain, 1200)
        clearbox()
    }
}


function CorrectWrong(answer, correct){
    
    const green = "#007168";
    const red = "#cc0000";
    
    if(answer.match(correct)){
        word.style.color = green;
        word.innerHTML = correct.toUpperCase() +"!"
        correctP += 1
        pointsCorrect.innerHTML = correctP
    }
    else{
        word.style.color = red;
        word.innerHTML = "Try Again!".toUpperCase();
        wrongsP += 1
        pointsWrong.innerHTML = wrongsP
    }
}

function clearbox(){
    document.getElementById("word_answer").value = ""
}

function tryagain(){
    words_word = words[randomnum].word;
    word.innerHTML = words_word;
    word.removeAttribute("style")
}

function rand(){
    return  Math.floor(Math.random()* words.length)
}

function finish(){
    words_word = `Parabéns, você concluiu todas as frases, com um total de ${correctP+wrongsP} tentativas.`
    word_answer.remove();
    button_html.remove();
}