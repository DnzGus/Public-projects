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
    correct : "Tarde"},
    p18={word: "Age",
    correct : "Idade"},
    p19={word: "Beauty",
    correct : "Beleza"},
    p20={word: "Bed",
    correct : "Cama"},
    p21={word: "Beginning",
    correct : "Começo"},
    p22={word: "Bicycle",
    correct : "Bicicleta"},
    p23={word: "Birthday",
    correct : "Aniversário"},
    p24={word: "Body",
    correct : "Corpo",}
]

const green = "#007168";
const red = "#cc0000";
let frase = document.getElementById("frase")
let wordcount = 0

loadpage()

function loadpage(){
    
    const palavra = words[wordcount];
    frase.innerHTML = palavra.word;
    frase.removeAttribute("style")
}

    function botao() {
        

        const resposta = document.querySelector("#resp").value.toLowerCase();
        const correto = words[wordcount]
        
        if(resposta.match(correto.correct)){
            wordcount++
            frase.style.color = green
            frase.innerHTML = "Correct!"
            setTimeout(loadpage, 1500)
        }else{
            setTimeout(loadpage, 1500)
            frase.style.color = red
            frase.innerHTML = "Try Again!"
        }
    }
