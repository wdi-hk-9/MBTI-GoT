$(function(){

  var goQuiz = function(){
    $('#start-quiz').click(function(){
    window.location = "./quiz.html";
    })
  }

  var goQuestions = fullQuestions["q1"]["question"]

  var loadQuestions = function(){
    $('#questions-full').html(goQuestions)
  }

  goQuiz();
  loadQuestions();

})
