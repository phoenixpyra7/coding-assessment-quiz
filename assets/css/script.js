var startScreen = document.querySelector('.start');
var questionsScreen = document.querySelector('.questions');
var scoreScreen = document.querySelector('.score');


function showStart () {
    startScreen.style.display = null;
    questionsScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQuiz () {
    startScreen.style.display = "none";
    questionsScreen.style.display = null;
    scoreScreen.style.display = "none";
}

function showEnd () {
    startScreen.style.display = "none";
    questionsScreen.style.display = null;
    scoreScreen.style.display = "none";
}

function init () {

}

init(); 



