const quiz = [
    quiz1 = {
        question: "When was the first time humans went to the moon?",
        a: "July 16, 1969",
        b: "January 16, 1968",
        c: "June 19, 1968",
        d: "July 20, 1969",
        correct: "a",
    },
    quiz2 = {
        question: "Who has the most grammys?",
        a: "Michael Jackson",
        b: "Bruno Mars",
        c: "Kendrick Lamar",
        d: "Beyonce",
        correct: "d",
    },
    quiz3 = {
        question: "What is the name of the creator of this quiz?",
        a: "Gustavo Fernandes",
        b: "Gustavo Diniz",
        c: "Juan Inácio",
        d: "Guilherme Paulo",
        correct: "b",
    },
    quiz4 = {
        question: "Wich of these Sports is most famous?",
        a: "Volleyball",
        b: "Basketball",
        c: "Soccer(Football)",
        d: "Baseball",
        correct: "c",
    }
];
const question = document.getElementById("question");
const label_a = document.getElementById("L_a");
const label_b = document.getElementById("L_b");
const label_c = document.getElementById("L_c");
const label_d = document.getElementById("L_d");
const button = document.getElementById("botao");
const radial = document.getElementsByName("answer");
const placar = document.getElementById("placar");


let quizcount = 0;

loadQuiz();

function loadQuiz(){

    const quizdata = quiz[quizcount];
    
    question.innerText = quizdata.question;
    label_a.innerText = quizdata.a;
    label_b.innerText = quizdata.b;
    label_c.innerText = quizdata.c;
    label_d.innerText = quizdata.d;

    
};
button.addEventListener('click', () => {
    setTimeout(() => {
        if(quizcount < quiz.length){
            quizcount ++;
            loadQuiz()
        }
        else{
            question.innerText = "You have finished the quiz, thanks for playing";
            label_a.innerText = "";
            label_b.innerText = "";
            label_c.innerText = "";
            label_d.innerText = "";
        }
    }, 0500);
});