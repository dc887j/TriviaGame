// Declare global variables
var numberCorrect = 0;
var numberWrong = 0;
var questionScreen = 0;
var wq = 0
var time = 10

var questionArray = [{
    ques: "Who has the most rushing yards in Panther history ?",
    ans: [" A. Jonathan Stewart", " B. Cam Newton", "C. DeAngelo Williams", "D. Mike Tolbert"],
    correct: 0
  },
  {
    ques: "What was the year of the Carolina Panthers first season?",
    ans: [" A. 1989", " B. 1995", "C. 1997", "D. 2000"],
    correct: 2

  },
  {
    ques: "What state do the Panthers play in?",
    ans: [" A. Virginia", " B. South Carolina", "C. North Carolina", "D. Texas."],
    correct: 2

  },
  {
    ques: "Who is the Panther's current quarterback?",
    ans: [" A. Cam Newton", " B. Jake Delhomme", "C. Kerry Collins", "D. Chris Weinke"],
    correct: 0

  },
  {
    ques: "Who is the Panther's all time leader in pass receptions?",
    ans: [" A. Muhsin Muhammad", " B. Greg Olsen", "C. Kelvin Benjamin", "D. Steve Smith."],
    correct: 3

  },

];

function timer(){
  setInterval(function () {

    if (time === 0) {
      $("#timer").text(10);
      time = 10
      showQuestion()
    }
    time-= 1;
    $("#timer").text(time);
    //
  
  }, 1000);
}

function drawGame() {
  timer()

 showQuestion()

  // var questionContainer = $("<div class='question'>");
  // questionContainer.append("<h3>" + questionScreen + "</h3>");
  // // questionContainer.append("<h3>Question</h3>");

  // var answerForm = $("<form>");
  // answerForm.append("<input type='radio' value='answer1'>Answer 1</input>");
  // answerForm.append("<input type='radio' value='answer2'>Answer 2</input>");
  // answerForm.append("<input type='radio' value='answer3'>Answer 3</input>");

  // questionContainer.append(answerForm);

  // $("#gamescreen").append(questionContainer);

};



drawGame();




function showQuestion() {
  var qA = questionArray
  if(wq > qA.length - 1){
    $('#question').html('End of Game!')
    clearInterval();
    return
  }
  
  $('#question').html(`
  <div>
    <h2>${qA[wq].ques}</h2>
    <form id='question-form'>
      <input name='mybutton' type='radio' value=${qA[wq].ans[0]}/>${qA[wq].ans[0]}
      <input name='mybutton' type='radio' value=${qA[wq].ans[1]}/>${qA[wq].ans[1]}
      <input name='mybutton' type='radio' value=${qA[wq].ans[2]}/>${qA[wq].ans[2]}
      <input name='mybutton' type='radio' value=${qA[wq].ans[3]}/>${qA[wq].ans[3]}
    </form>
  </div>
  `)

  wq+= 1;


}


// on screen load use jQuery to push start button to screen
// on button click transition from start screen to question screen


// Start drawGame() function 

// Push timer to screen and start countdown

// add click event to start button that removes start button and adds question 1 with radio buttons


// reco


// function flipThatCoin(result) {
//   randomNumber = Math.floor(Math.random() * 2);

//   if (randomNumber === 0) {
//     $("gamescreen").html(
//       "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg'/>"
//     );
//   } else {
//     $("gamescreen").html(
//       "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'/>"
//     );
//   }

//   if (results === randomNumber) {
//     wins++;
//     $("gamescreen").html("<h2>Winner!!!</h2>");
//     $("gamescreen").html("<h3>" + wins + "</h3>");
//   } else {
//     losses++;
//     $("gamescreen").html("<h2>You Lose!!!!</h2>");
//     $("gamescreen").html("<h3>" + losses + "</h3>");
//   }
// }