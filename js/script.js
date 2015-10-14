$(function(){

  var quiz = new Quiz();

  var updateProgress = function(){
    $('.progress-bar').attr("style", "width:" + quiz.questionPercentage() + "%");
  };

  var nextQuestion = function(){
    var nextQ = quiz.nextQuestion();
    $('#questions-full').html(nextQ.question);
    $('.questionOutOf').html('Progress ' + quiz.currentQuestion + '/30');
    // if ($('.questionOutOf').html("Progress 5/30")) {
    //   $('.quiz-1').hide();
    // }
    // else {
    //   $('.quiz-1').show();
    // }
    updateProgress();
  };

  var reset = function(){
    location.reload();
  }

  var answer = function(event){
    var chosenOption = $(event.target).attr("option-name");
    var questionHash = quiz.questions[quiz.currentQuestion - 1];
    var questionType = questionHash[chosenOption]["type"];
    var questionPoint = questionHash[chosenOption]["point"];
    quiz.totalScore[questionType] += questionPoint;
    console.log("the points for " + questionType + " is " + quiz.totalScore[questionType]);
    nextQuestion();
    if (quiz.currentQuestion === 31) {
      console.log("working")
      console.log(quiz.currentQuestion)
      $('#quiz-1').hide();
      $('#result').show();

      var letters = [ "I", "E", "J"]

      var html = ""

      html += "<h2>" + letters[0] + letters[1] + letters[2] + "</h2>"
      console.log(html)
      $("#result").append(html)
    };
  };




  $('#btn-reset').click(reset);
  $('.btn-quiz').click(answer);
  nextQuestion();
  // stopQuiz();

});
