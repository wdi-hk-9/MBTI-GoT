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
    // calculate points function in quiz prototype

    console.log(quiz.questions[quiz.currentQuestion][$(event.target).attr("value")]);

    // quiz.answer(event. )
    nextQuestion();
  };

  $('.btn-quiz').click(answer);
  nextQuestion();

});
