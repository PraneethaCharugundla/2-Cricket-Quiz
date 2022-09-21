var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "prashanth",
    score: 3,
  },

  {
    name: "shanmukh",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "1. Which player has won the most IPL trophies?",
  answer: "rohit sharma"

},
{
  question: "2. Which player has hit the most fours in IPL?",
  answer: "shikhar dhawan"

},
{
  question: "3. Where was the final of the inaugural IPL season held? ",
  answer: "mumbai"

},
{
  question: "4. Which player has played for only one IPL franchise since the inaugural edition?",
  answer: "virat kohli"

},
{
  question: "5. Who is the first player to feature in 200 IPL games?",
  answer: "dhoni"

}
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to do you know about cricket?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(" You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
