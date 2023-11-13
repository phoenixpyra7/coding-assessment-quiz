var startScreen = document.querySelector('.start');
var questionsScreen = document.querySelector('.questions');
var scoreScreen = document.querySelector('.score');
var startButton = document.querySelector('#startbtn');
var headerContainer = document.querySelector('.header'); //not sure if i need this
var question = document.querySelector('question');
var nextBtn = document.querySelector('next');


function showStart() {
    startScreen.style.display = null;
    questionsScreen.style.display = "none";
    scoreScreen.style.display = "none";
}
//event listener to proceed to the questions
startButton.addEventListener('click', function (event) {
    if (event.target.matches('button'));
    showQuestions();
});





function showQuestions() {
    startScreen.style.display = "none";
    questionsScreen.style.display = null;
    scoreScreen.style.display = "none";
    currentQuestionIndex = 0;
}
function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion() {
    question.innerHTML = "";


}




//event listener to proceed to the score
questionsScreen.addEventListener('click', function (event) {
    if (event.target.matches('button')); //what is the word button referencing
    //console.log('the button was hit')    -this was to test the button, which worked
    showScore();
});

function showScore() {
    startScreen.style.display = "none";
    questionsScreen.style.display = "none";
    scoreScreen.style.display = null;
}





function init() {
    showStart();
}

init();



