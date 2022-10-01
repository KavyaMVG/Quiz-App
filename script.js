const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const question = document.getElementById("question");
const radios = document.querySelectorAll(".answer");
const optionOne = document.getElementById("a_text")
const optionTwo = document.getElementById("b_text")
const optionThree = document.getElementById("c_text")
const optionFour = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let selectedAnswer;

radios.forEach(radio => {
    radio.addEventListener('change', (e)=>{
        selectedAnswer = e.target.id;
        console.log(selectedAnswer)
    })
});
 
submitBtn.addEventListener('click', ()=>{
    evaluateSelectedOption(selectedAnswer, quizData[i]);
});
    

const loadQuestion = (questionData) => {

     question.innerText = questionData.question
     optionOne.innerText = questionData.a
     optionTwo.innerText = questionData.b
     optionThree.innerText = questionData.c
     optionFour.innerText = questionData.d
}

const evaluateSelectedOption = (selected, questionData) => {
    if(selected === questionData.correct && i <= quizData.length - 1){
      handleCorrectAnswer();
    } else if(selected !== questionData.correct)  {
        handleWrongAnswer();
    }
}

const handleCorrectAnswer = () => {
    if (i >= quizData.length - 1) {
        alert(`Your score: ${score}`);
        window.location = "/";
    } else {
        alert("CORRECT!");
        score += 5;
        i += 1;
        loadQuestion(quizData[i])            
    }
}

const handleWrongAnswer = () => {
    if (i >= quizData.length - 1) {
        alert(`Your score: ${score}`);
        window.location = "/";
    } else {
        alert("WRONG!")
        i += 1;
        loadQuestion(quizData[i])            
    }
}
let i = 0;
let score = 0;
window.onload = loadQuestion(quizData[i]); 

