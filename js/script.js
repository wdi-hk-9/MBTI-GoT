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
    // quiz.answer(event. )
    var chosenOption = $(event.target).attr("option-name");

    var questionHash = quiz.questions[quiz.currentQuestion - 1];

    var questionType = questionHash[chosenOption]["type"];

    var questionPoint = questionHash[chosenOption]["point"];

    quiz.totalScore[questionType] += questionPoint;

    console.log("the points for " + questionType + " is " + quiz.totalScore[questionType]);


    nextQuestion();
  };

  $('.btn-quiz').click(answer);
  nextQuestion();

});

