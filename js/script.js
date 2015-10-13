$(function(){

  var quiz = new Quiz();

  var updateProgress = function(){
    $('.progress-bar').attr("style", "width:" + quiz.questionPercentage() + "%");
  };

  var nextQuestion = function() {
    var nextQ = quiz.nextQuestion();
    $('#questions-full').html(nextQ.question);
    $('.questionOutOf').html('Progress ' + quiz.currentQuestion + '/30')
    updateProgress();
  };

  var answer = function(event){
    // quiz.answer(event. )
    nextQuestion();
  };

  $('#start-quiz').click(function(){
    location.replace("./quiz.html")
  })
  $('.btn-quiz').click(answer);
  nextQuestion();

});
