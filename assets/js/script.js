//click button to start
    //event listener
    //a timer will start
//user is presented with a question
//user selects one multiple choice question
    //IF answer is wrong, decrement the timer
        //Display that the user choice was incorrect, then move to next question
    //IF answer is correct
        //Display that the user choice was correct(textContent)
        //Increment the score++
    //FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
7

//startQuiz() function changes content
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
//getQuestion() function get current question object from questions array
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer

// Questions in an Array of Objects Variable
var questions = [
    {
        question: "What kind of brackets does a fuction have?",
        choices: ["curly", "round", "square", "angular"],
        answer: "round",
    },
    {
        question: "How many equal signs do we need to declare a variable?",
        choices: ["one", "two", "three", "none"],
        answer: "one",
    },
    {
        question: "What can we use to loop through an array?",
        choices: ["if", "var", "for", "sum"],
        answer: "for"
    },
    {
        question: "How do we make a button clickable?",
        choices: ["click here", "push button", "event whisperer", "event listener"],
        answer: "event listener"
    }
]

// Timer Variables
var secondsLeft = 10;
var timerEl = document.querySelector(".timer");
var secondRemaining = "";

// Declared Variables
var startQuizBtn = document.querySelector("#strtq");

// Variables for Intro Page | Questions Page | End Page
var introPage = document.querySelector("intro-card");
var questionsPage = document.querySelector("questions-card");
var endPage = document.querySelector("end-card");


startQuizBtn.addEventListener("click", function() {
    setTime();
    startQuiz();

  });

function setTime() {
// Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
        clearInterval(secondRemaining)
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);

}

function startQuiz() {

    introPage.style.display = "none"
    questionsPage.style.display = "block"
    end.style.display = "none"
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
    getQuestion();
}

function getQuestion() {
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
}

function questionClick() {
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer
}