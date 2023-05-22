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

let button = document.getElementById("but")
let frase = document.getElementById("frase")
let wordcount = []
let randomnum = Math.floor(Math.random()* words.length)

loadpage()

function loadpage(){
    let palavra = words[randomnum].word;
    frase.innerHTML = palavra;
    frase.removeAttribute("style")
    console.log(wordcount)
}

function botao() {
    const resposta = document.querySelector("#resp").value.toLowerCase();
    const correto = words[randomnum].correct
    
    if(resposta.match(correto)){
        wordcount.push(randomnum)
        randomnum = Math.floor(Math.random()* words.length)
        answer(resposta, correto)
        setTimeout(loadpage, 1500)
        clearbox()
    }else{
        answer(resposta, correto)
        setTimeout(tryagain, 1500)
        clearbox()
    }
}


function answer(resposta, correto){
    
    const green = "#007168";
    const red = "#cc0000";
    
    if(resposta.match(correto)){
        frase.style.color = green;
        frase.innerHTML = correto +"!"
    }
    else{
        frase.style.color = red;
        frase.innerHTML = "Try Again!";
    }
}

function clearbox(){
    
    document.getElementById("resp").value = ""
}

function tryagain(){
    palavra = words[randomnum].word;
    frase.innerHTML = palavra;
    frase.removeAttribute("style")
}