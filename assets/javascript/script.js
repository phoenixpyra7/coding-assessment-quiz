var startScreen = document.querySelector('.start');
var questionsScreen = document.querySelector('.questions');
var scoreScreen = document.querySelector('.score');
var startButton = document.querySelector('#startbtn');


function showStart() {
    startScreen.style.display = null;
    questionsScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQuestions() {
    startScreen.style.display = "none";
    questionsScreen.style.display = null;
    scoreScreen.style.display = "none";
}

function showScore() {
    startScreen.style.display = "none";
    questionsScreen.style.display = "none";
    scoreScreen.style.display = null;
}
//event listener to proceed to the questions
startButton.addEventListener('click', function (event) {
    if (event.target.matches('button'));
    showQuestions();
});

//event listener to proceed to the score
questionsScreen.addEventListener('click', function (event) {
    if (event.target.matches('button')); //what is the word button referencing
    //console.log('the button was hit')    -this was to test the button, which worked
    showScore();
});


function init() {
    showStart();
}

init();



