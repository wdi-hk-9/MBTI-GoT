$(function(){

  var currentQuestion = 1;

  var goQuiz = function(){
    $('#start-quiz').click(function(){
    window.location = "./quiz.html";
    })
  }

  var questionsPool = fullQuestions["q"+ currentQuestion]["question"];

  var loadQuestions = function(){
    $('#questions-full').html(questionsPool);
  }

  var progress = function(){
    var currentQPercentage = (currentQuestion - 1) / 50 * 100
    $('.progress-bar').attr("style", "width:" + currentQPercentage + "%");
    console.log("changing progress bar");
  };

  var nextQuestion = $('.btn').click(function(){
    currentQuestion += 1;
    var nextNum = currentQuestion;
    var nextQ = fullQuestions["q"+nextNum]["question"];
    $('#questions-full').html(nextQ);
    progress();
  })


  goQuiz();
  loadQuestions();

})
