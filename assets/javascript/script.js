var startScreen = document.querySelector('.start');
var questionsScreen = document.querySelector('.questions');
var scoreScreen = document.querySelector('.score');
var startButton = document.querySelector('#startbtn');
var headerContainer = document.querySelector('.header'); //not sure if i need this
var question = document.querySelector('question');
var answerButtons = document.getElementById("answers");
var nextBtn = document.querySelector('next'); // i think i can delete this one
var submitButton = document.querySelector("#submit-button");
var questionHeader = document.getElementById('question-header');
var scoreHeader = document.getElementById('score-header');
var score = document.querySelector("#score");
var currentQuestionIndex = 1 // changed from 0 to 1 now it works
var answer = document.querySelector("#correct-answer");
var userInitials = document.querySelector("#initials");
var highScores = document.querySelector("#high-scores");
var checkAnswer = document.querySelector("#check-answer");
var questions = [
    {
        question: 'Which HTML tag does not require a closing tag?',
        options: ['A. section', 'B. div', 'C. br', 'D. body'],
        correctAnswer: [2] //added square brackets to see if would fix code nothing changed
    },
    {
        question: "Which of the following data types is called a compound data type?",
        options: ["A. String", "B. Symbol", "C. Boolean", "D. Array"],
        correctAnswer: [4]
    },
    {
        question: "Which keyword declares a local variable, meaning the variable can only be accessed within the block of code where it is declared ?",
        options: ["A. let", "B. const", "C. var", "D. HTML"],
        correctAnswer: [0]
    },
    {
        question: "How do you inset a copyright symbol in HTML?",
        options: ["A. @copy", "B. & #167", "C. C/2023", "D. & #169"], //put space in B and D-othwise they gen a symbol
        correctAnswer: [3]
    },
    {
        question: "Which of the following is not a positioning property in CSS?",
        options: ["A. Fixed", "B. Straight", "C. Sticky", "D. Absolute"],
        correctAnswer: [1]
    }
    // I need to give the correct answers points
];

function showStart() {
    questionHeader.style.display = "none"; //all screens hidden from the start page
    startScreen.style.display = null;
    questionsScreen.style.display = "none";
    scoreScreen.style.display = "none";
    scoreHeader.style.display = "none";
};
// //event listener to proceed to the questions
// startButton.addEventListener('click', function (event) {
//     if (event.target.matches('button'));
//     showQuestions();
//     showQuestion(0);
// });

function showQuestions() {
    questionHeader.style.display = null; // all screens hidden from the questions paage, still show start header
    startScreen.style.display = "none";
    questionsScreen.style.display = null; //do I need to do this for the questions themselves?
    scoreScreen.style.display = "none";
    scoreHeader.style.display = "none";
}

function setNextQuestion() {
    showQuestion(currentQuestionIndex); // show a question from the question index
    currentQuestionIndex++; //current question plus 1
    if (currentQuestionIndex === 6) { // questions 12345 -not weighted like the index ie 3. if mak 6 i see all 5
        currentQuestionIndex = 0; //loop back after all questions answered - No longer works
        showScore(); //call the score. Don't have point system yet
    };
};

function showQuestion(currentQuestionIndex) { //current question index now equals 0 -but why if its 1 now when i fixed
    // console.log("is this working?") 
    var questionP = document.createElement("p");
    questionP.innerHTML = questions[currentQuestionIndex].question; //dont have to touch bttn to get nxt, how fix?
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answer1.innerHTML = questions[currentQuestionIndex].options[0];
    answer2.innerHTML = questions[currentQuestionIndex].options[1];
    answer3.innerHTML = questions[currentQuestionIndex].options[2];
    answer4.innerHTML = questions[currentQuestionIndex].options[3];
    questionsScreen.append(questionP, answer1, answer2, answer3, answer4); // append questions and answers
};

//event listener to proceed to the score
questionsScreen.addEventListener('click', function (event) {
    if (event.target.matches('button')); //what is the word button referencing no class, just strtbttn class
    //console.log('the button was hit')    -this was to test the button, which worked
    setNextQuestion();
});

function checkAnswer(currentQuestionIndex)  //why is check answer red???  changed event to say currentquestionindex
answerButtons.innerHTML = ""; //removes answer buttons from HTML
//var buttons = document.getElementsByTagName('button');
var userAnswer = event.target.value;  //retrieving the value of target
var correctAnswer = questionsList[currentQuestion].answer; //pull from questionList the correctAnswer for the current question to complete if/else
if (userAnswer == correctAnswer) {     // if true display correct
    answer.textContent = "correct";
}

else {
    answer.textContent = "wrong";      //if false display wrong 
    timeLeft--;
};



function showScore() {
    questionHeader.style.display = "none"; // all screens hidden from the score paage, still show start header
    startScreen.style.display = "none";
    questionsScreen.style.display = "none";
    scoreScreen.style.display = null; //why is style white. double checked all poss
    scoreHeader.style.display = null;
};

function init() {
    showStart();
};
//save user section
// submitButton.addEventListener("click", function (event)) {  // need to fix this
//     event.preventDefault();

//     submitButton.setAttribute("disabled", "");  //disabled submit button 

//event listener to proceed to the questions
startButton.addEventListener('click', function (event) {
    if (event.target.matches('button'));
    showQuestions();
    showQuestion(0);

    //user initials
    var userScore = {
        initials: userInitials.value.trim(),
        score: timeLeft
    }
    userInitials.value = "";

    highScores = JSON.parse(localStorage.getItem("initials"));  //load highscores
    if (highScores == null) {
        highScores = [];
    }

    highScores.push(userScore); //add user to highscores

    localStorage.setItem("initials", JSON.stringify(highScores)); //save to local storage
    loadHighScores();
});
