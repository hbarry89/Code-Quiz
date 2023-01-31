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
    //THEN clear interval
    //THEN allow user to input initials
    //THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
    //Save data to local storage(setItem, getItem)

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

