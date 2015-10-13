$(function(){

  var currentQuestion = 1;

  var goQuiz = function(){
    $('#start-quiz').click(function(){
    location = "./quiz.html";
    })
  }

  var questionsPool = fullQuestions["q"+ currentQuestion]["question"];

  var loadQuestions = function(){
    $('#questions-full').html(questionsPool);
  }

  var progress = function(){
    var currentQPercentage = currentQuestion / Object.keys(fullQuestions).length * 100
    $('.progress-bar').attr("style", "width:" + currentQPercentage + "%");
  };

  var nextQuestion = $('.btn-choose').click(function(){
    currentQuestion += 1;
    var nextNum = currentQuestion;
    var nextQ = fullQuestions["q"+nextNum]["question"];
    $('#questions-full').html(nextQ);
    $('.questionOutOf').html('Progress '+ currentQuestion + "/30");
    progress();
  })


  goQuiz();
  loadQuestions();

})
