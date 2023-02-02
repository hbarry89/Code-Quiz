// -------------------Pseudo Code provided by TA in class-------------------
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
// ---------------------------End of Pseudo Code---------------------------


var questions = [ // Questions in an Array of Objects Variable
    {
        question: "What kind of brackets does a function have?",
        choices: ["1. curly", "2. round", "3. square", "4. angular"],
        answer: "2. round",
    },
    {
        question: "How many equal signs do we need to declare a variable?",
        choices: ["1. one", "2. two", "3 .three", "4. none"],
        answer: "1. one",
    },
    {
        question: "What can we use to loop through an array?",
        choices: ["1. if", "2. var", "3. for", "4. sum"],
        answer: "3. for"
    },
    {
        question: "How do we make a button clickable?",
        choices: ["1. click here", "2. push button", "3. event whisperer", "4. event listener"],
        answer: "4. event listener"
    }
]

// Timer Variables
var secondsLeft = 50;
var timerEl = document.querySelector(".timer");
var secondRemaining = "";
var currentIndex = 0;
var timerInterval;

// Start Button Variable
var startQuizBtn = document.querySelector("#strtq");

// Variables for Intro Page | Questions Page | End Page
var introPage = document.querySelector("#intro-card");
var questionsPage = document.querySelector("#questions-card");
var endPage = document.querySelector("#end-card");

// Show only Intro Page when the webpage loads
introPage.style.display = "block"
questionsPage.style.display = "none"
endPage.style.display = "none"

// Question and Choices Variables
var questionDisplay = document.querySelector("#question-display");

var choice1 = document.querySelector("#btn1");
var choice2 = document.querySelector("#btn2");
var choice3 = document.querySelector("#btn3");
var choice4 = document.querySelector("#btn4");

// New Variable
var questionContainer = document.querySelector("#buttons-container");

//
startQuizBtn.addEventListener("click", function() {
    setTime();
    startQuiz();

    //Show only Question Page when Start Quiz button is clicked
    introPage.style.display = "none"
    questionsPage.style.display = "block"
    endPage.style.display = "none"

  });

//This function starts time omce start quiz button is clicked
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft; //This shows how many seconds left on the webpage
        clearInterval(secondRemaining)
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function
        sendMessage();
      }
  
    }, 1000);

}
//This function starts the quiz and calls the getQuestion function
function startQuiz() {
    getQuestion();
}
//This is the getQuestion function that displays questions along with their choices going through each index
function getQuestion() {
    questionDisplay.textContent = questions[currentIndex].question;

    choice1.textContent = questions[currentIndex].choices[0];
    choice2.textContent = questions[currentIndex].choices[1];
    choice3.textContent = questions[currentIndex].choices[2];
    choice4.textContent = questions[currentIndex].choices[3];

}
//These are evenListeners for each choice button
choice1.addEventListener("click", questionClick);
choice2.addEventListener("click", questionClick);
choice3.addEventListener("click", questionClick);
choice4.addEventListener("click", questionClick);

//This function  is when a choice is clicked and it has conditionals shown in the if statement
function questionClick(e) {
    //If the clicked choice is the correct answer, time is increased by 5 seonds and move to next question
    if (e.target.textContent == questions[currentIndex].answer ) {
        secondsLeft+=5;
        currentIndex++;
         //Quiz keeps going for the length of the questions array of objects which is 4 questions, end quiz once it runs out of questions
        if (currentIndex>=questions.length) {
            endQuiz();
            return;
        }
        //Another question is disblayed
        getQuestion();
    }else{ //If the clicked choice is the wrong answer, time is decreased by 5 seonds
        secondsLeft-=5;
    }

}

//This is the endQuiz function that will clear the interval, it also hides questions page and displays the "All done!" page
function endQuiz() {
    clearInterval(timerInterval);
    //introPage.style.display = "none"
    questionsPage.style.display = "none"
    endPage.style.display = "block"
    document.querySelector("#score").textContent=secondsLeft
}
//This eventlistern button saves the scores
document.querySelector("#sbmtbtn").addEventListener("click", saveScore);

//This is a function to save scors used in event listener above
function saveScore(e) {
    e.preventDefault(); //prevent the default of refreshing the page when user click button
    var userInitials = document.querySelector("initials").value; //Variable for storing user's initials
    var storedInfo = { //Object to store user initials and score
        user: userInitials,
        score: secondsLeft
    }
    //This is to add user initials to local storage
    storedInfo.push(scoreObject) 
    localStorage.setItem('testKey', JSON.stringify(storedInfo))

}