const words = [
    p1={word: "book",
    correct : "livro"},
    p2={word: "car",
    correct : "carro"},
    p3={word: "cat", 
    correct : "gato"},
    p4={word: "chair", 
    correct : "cadeira"},
    p5={word: "computer",
    correct : "computador"},
    p6={word: "desk",
    correct : "escrivaninha"},
    p7={word: "door",
    correct : "porta"},
    p8={word: "floor",
    correct : "chão"},
    p9={word: "house", 
    correct : "casa"},
    p10={word: "key",
    correct : "chave"},
    p11={word: "laptop",
    correct : "laptop"},
    p12={word: "light",
    correct : "luz"},
    p13={word: "monitor",
    correct : "monitor"},
    p14={word: "mouse",
    correct : "rato"},
    p15={word: "sofa",
    correct : "sofá"},
    p16={word: "table",
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

let button_html = document.getElementById("button")
let word_answer = document.getElementById("word_answer")
let word = document.getElementById("word")
let wordcount = []
let randomnum
let words_word

loadpage()


function loadpage(){
    randomnum = rand()
    if(wordcount.includes(randomnum) && wordcount.length <24){
        while(wordcount.includes(randomnum)){
            randomnum = rand()
        }
    }
    words_word = words[randomnum].word;
    if(wordcount.length >= 24){
        finish()
    }
    word.removeAttribute("style")
    word.innerHTML = words_word;
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
        word.innerHTML = correct +"!"
    }
    else{
        word.style.color = red;
        word.innerHTML = "Try Again!";
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
    words_word = "Parabéns, você concluiu todas as frases"
    word_answer.remove();
    button_html.remove();
}