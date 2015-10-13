$(function(){

  var quiz = new Quiz();

  var updateProgress = function(){
    $('.progress-bar').attr("style", "width:" + quiz.questionPercentage() + "%");
  };

  var nextQuestion = function() {
    var nextQ = quiz.nextQuestion();
    $('#questions-full').html(nextQ.question);
    updateProgress();
  };

  var answer = function(event){
    // quiz.answer(event. )
    nextQuestion();
  };

  $('.btn').click(answer);
  nextQuestion();

});
