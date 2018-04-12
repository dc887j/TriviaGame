// Declare global variables
$("#start-button").on("click", function() {
  $("#start-button").remove();
  game.loadQuestion();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

var questions = [
  {
    question: "Who has the most rushing yards in Panther history ?",
    answers: [
      " A. Jonathan Stewart",
      " B. Cam Newton",
      "C. DeAngelo Williams",
      "D. Mike Tolbert"
    ],
    correctAnswer: "Jonathan Stewart",
    image: "assets/images/pantherImages/camNewton1.jpg"
  },
  {
    question: "What was the year of the Carolina Panthers first season?",
    answers: [" A. 1989", " B. 1995", "C. 1997", "D. 2000"],
    correctAnswer: "1995",
    image: "assets/images/pantherImages/charlottePic1.jpg"
  },
  {
    question: "What state do the Panthers play in?",
    answers: [
      " A. Virginia",
      " B. South Carolina",
      "C. North Carolina",
      "D. Texas."
    ],
    correctAnswer: "North Carolina",
    image: "assets/images/pantherImages/camNewton1.jpg"
  },
  {
    question: "Who is the Panther's current quarterback?",
    answers: [
      " A. Cam Newton",
      " B. Jake Delhomme",
      "C. Kerry Collins",
      "D. Chris Weinke"
    ],
    correctAnswer: "Cam Newton",
    image: "assets/images/pantherImages/charlottePic1.jpg"
  },
  {
    question: "Who is the Panther's all time leader in pass receptions?",
    answers: [
      " A. Muhsin Muhammad",
      " B. Greg Olsen",
      "C. Kelvin Benjamin",
      "D. Steve Smith."
    ],
    correctAnswer: "Steve Smith",
    image: "assets/images/pantherImages/camNewton1.jpg"
  }
];

var game = {
  questions: questions,
  currentQuestion: 0,
  counter: 10,
  correct: 0,
  incorrect: 0,
  unanswered: 0,

  countdown: function() {
    game.counter--;
    $("#timer").html(game.counter);
    if (game.counter <= 0) {
      console.log("TIME UP!");
      game.timeUp();
    }
  },

  loadQuestion: function() {
    timer = setInterval(game.countdown, 1000);
    $("#question").html(
      "<h2>" + questions[game.currentQuestion].question + "</h2>"
    );
    for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $("#question").append(
        '<button class = "answer-button" id="button-' +
          i +
          '" data-name= "' +
          questions[game.currentQuestion].answers[i] +
          '">' +
          questions[game.currentQuestion].answers[i] +
          "</button>");
    }
  },
  nextQuestion: function() {
    game.counter - 10;
    $("#counter").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {
    clearInterval(timer);
    game.unanswered++;
    $("#question").html("<h2>OUT OF TIME!</h2>");
    $("#question").html(
      "<h3>The Correct Answer Was: " +
        quesions[game.currentQuestion].correctAnswer +
        "</h3>"
    );
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 1 * 1000);
    } else {
      setTimeout(game.nextQuestion, 1 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);
    $("#question").html("<h2>ALL DONE!</h2>");
    $("#question").append("<h3>Correct: " + game.correct + "</h3>");
    $("#question").append("<h3>Incorrect: " + game.incorrect + "</h3>");
    $("#question").append("<h3>Unanswered: " + game.unanswered + "</h3>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if (
      $(e.target).data("name") == questions[game.currentQuestion].correctAnswer
    ) {
      game.answeredCorrectly();
    } else {
      game.answeredIncorrectly();
    }
  },

  answeredCorrectly: function() {
    console.log("YES!!!! You Got IT!!!!");
    clearInterval(timer);
    game.correct++;
    $("#question").html("<h2>YOU GOT IT RIGHT!</h2>");
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 1 * 1000);
    } else {
      setTimeout(game.nextQuestion, 1 * 1000);
    }
  },

  answeredIncorrectly: function() {
    console.log("WRONG");
    clearInterval(timer);
    game.incorrect++;
    $("#question").html("<h2>YOU GOT IT WRONG!</h2>");
    $("#question").html(
      "<h3>The Correct Answer Was: " +
        quesions[game.currentQuestion].correctAnswer +
        "</h3>"
    );
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 1 * 1000);
    } else {
      setTimeout(game.nextQuestion, 1 * 1000);
    }
  },
  reset: function() {}
};

// var wordQuest = 0
// var time = 10

// function timer() {
//   var interval = setInterval(function () {

//     if (time === 0) {
//       $("#timer").text(10);
//       time = 10
//       showQuestion()
//     }
//     time -= 1;
//     $("#timer").text(time);
//     //

//   }, 1000);
//   if (time <= 0) {
//     clearInterval(time);
//     return;
//   }

// }

// function drawGame() {
//   timer()

//   showQuestion()

// var questionContainer = $("<div class='question'>");
// questionContainer.append("<h3>" + questionScreen + "</h3>");
// // questionContainer.append("<h3>Question</h3>");

// var answerForm = $("<form>");
// answerForm.append("<input type='radio' value='answer1'>Answer 1</input>");
// answerForm.append("<input type='radio' value='answer2'>Answer 2</input>");
// answerForm.append("<input type='radio' value='answer3'>Answer 3</input>");

// questionContainer.append(answerForm);

// $("#gamescreen").append(questionContainer);

// };

// drawGame();

// function showQuestion() {
//   if (wordQuest > questions.length - 1) {
//     $('#question').html('End of Game!')

//     return
//   }

// My tutor helped me with the code below. He showed me this method.

// $('#question').html(`
// <div>
//   <h2>${questions[wordQuest].ques}</h2>
//   <form id='question-form'>
//     <input name='mybutton' type='radio' value=${questions[wordQuest].ans[0]}/>${questions[wordQuest].ans[0]}
//     <input name='mybutton' type='radio' value=${questions[wordQuest].ans[1]}/>${questions[wordQuest].ans[1]}
//     <input name='mybutton' type='radio' value=${questions[wordQuest].ans[2]}/>${questions[wordQuest].ans[2]}
//     <input name='mybutton' type='radio' value=${questions[wordQuest].ans[3]}/>${questions[wordQuest].ans[3]}
//   </form>
// </div>
// `)

//   wordQuest += 1;

// }
