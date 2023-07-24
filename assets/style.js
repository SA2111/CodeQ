// variable for questions
const qs = [
    // question 1
    {
        q: "In Python, strings consist of what?"
        a:[
            {text: "snakes", correct:false}
            {text: "colors", correct:false}
            {text: "charecters", correct:true}
            {text: "food", correct:false}
        ]
    }
    // question 2
    {
        q: "What does Regex stand for?"
        a:[
            {text: "Regular Expression", correct:true}
            {text: "Regular Egg", correct:false}
            {text: "Robot Express", correct:false}
            {text: "None of the above", correct:false}
        ]
    }
    // question 3
    {
        q: "What is the comment command in html?"
        a:[
            {text: "//", correct:false}
            {text: "?", correct:false}
            {text: "<! --  -->", correct:true}
            {text: "<>", correct:false}
        ]
    }
    // question 4
    {
        q: "What is the comment command in Javascript?"
        a:[
            {text: "!", correct:false}
            {text: "//", correct:true}
            {text: "/", correct:false}
            {text: "<! --  -->", correct:false}
        ]
    }
];

const quelement = document.getElementById("quest");
const ansClick = document.getElementById("ans-btns");
const nxtClick = document.getElementById("next");

let now = 0;
let total = 0;

Function begin(){
    currentQuest = 0;
    total = 0;
    next.innerHTML = "next"

}
