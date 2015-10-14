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
    resultPage();
    // if (quiz.currentQuestion === 10) {
    //   // console.log("working")
    //   // console.log(quiz.currentQuestion)
    //   $('#quiz-1').hide();
    //   $('#result').show();
    //   // console.log(quiz.totalScore["extraversion"])
    //   // var letters = [ "I", "E", "J"]
    //   var lettersResult = [];
    //   var extraversion = quiz.totalScore["extraversion"];
    //   var introversion = quiz.totalScore["introversion"];
    //   var sensing = quiz.totalScore["sensing"];
    //   var intuition = quiz.totalScore['intuition'];
    //   var thinking = quiz.totalScore['thinking'];
    //   var feeling = quiz.totalScore['feeling'];
    //   var judging = quiz.totalScore['perceiving'];

    //   if (introversion > extraversion){
    //     // var percent = introversion / (introversion+extraversion)
    //     lettersResult.push("I")
    //   } else if (extraversion > introversion) {
    //     // var percent = extraversion / (extraversion+introversion)
    //     lettersResult.push("E")
    //   }

    //   var html = ""

    //   html += "<h2>" + lettersResult[0] + lettersResult[1] + lettersResult[2] + lettersResult[3] + "</h2>"
    //   console.log(html)
    //   $("#result").append(html)
    // };
  };
  var resultPage = function(){
      if (quiz.currentQuestion === 31) {
      // console.log("working")
      // console.log(quiz.currentQuestion)
      $('#quiz-1').hide();
      $('#result').show();
      // console.log(quiz.totalScore["extraversion"])
      // var letters = [ "I", "E", "J"]
      var lettersResult = [];
      var extraversion = quiz.totalScore["extraversion"];
      var introversion = quiz.totalScore["introversion"];
      var sensing = quiz.totalScore["sensing"];
      var intuition = quiz.totalScore['intuition'];
      var thinking = quiz.totalScore['thinking'];
      var feeling = quiz.totalScore['feeling'];
      var perceiving = quiz.totalScore['perceiving']
      var judging = quiz.totalScore['judging'];

      if (introversion > extraversion){
        var percent = Math.floor((introversion / (introversion+extraversion) * 100))
        lettersResult.push("I");
      } else if (extraversion > introversion) {
        var percent = Math.floor((extraversion / (extraversion+introversion) * 100))
        lettersResult.push("E");
      }
        else {
          lettersResult.push("X");
      };

      if (sensing > intuition){
        var percent = Math.floor((sensing / (sensing+intuition) * 100))
        lettersResult.push("S")
      } else if (intuition > sensing){
        var percent = Math.floor((intuition / (intuition+sensing) * 100))
        lettersResult.push("N")
      }
      else {
        lettersResult.push("X");
      };

      if (thinking > feeling){
        var percent = Math.floor((thinking / (thinking+feeling) * 100))
        lettersResult.push("T")
      } else if (feeling > thinking) {
        var percent = Math.floor((feeling / (feeling+thinking) * 100))
        lettersResult.push("F")
      }
      else {
        lettersResult.push("X");
      };

      if (perceiving > judging){
        var percent = Math.floor((perceiving / (perceiving+judging) * 100))
        lettersResult.push("P")
      } else if (judging > perceiving) {
        var percent = Math.floor((judging / (judging+perceiving) * 100))
        lettersResult.push("J")
      }
      else {
        lettersResult.push("X");
      };

      console.log(quiz.totalScore)
      var html = ""
      html += "<h2>" + lettersResult[0] + lettersResult[1] + lettersResult[2] + lettersResult[3] + "</h2>"
      console.log(html)
      $("#result").append(html)
    };
  }

  $('#btn-reset').click(reset);
  $('.btn-quiz').click(answer);
  nextQuestion();

});
