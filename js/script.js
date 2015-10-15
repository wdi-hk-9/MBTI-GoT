$( function() {

  var quiz = new Quiz();

  var updateProgress = function() {
    $( '.progress-bar' ).attr( "style", "width:" + quiz.questionPercentage() + "%" );
  };

  var nextQuestion = function() {
    var nextQ = quiz.nextQuestion();
    $( '#questions-full' ).html( nextQ.question );
    $( '.questionOutOf' ).html( 'Question ' + quiz.currentQuestion + '/60' );
    updateProgress();
  };

  var reset = function() {
    location.reload();
  }

  var answer = function( event ) {
    var chosenOption = $( event.target ).attr( "option-name" );
    var questionHash = quiz.questions[ quiz.currentQuestion - 1 ];
    var questionType = questionHash[ chosenOption ][ "type" ];
    var questionPoint = questionHash[ chosenOption ][ "point" ];
    quiz.totalScore[ questionType ] += questionPoint;
    console.log( "the points for " + questionType + " is " + quiz.totalScore[ questionType ] );
    nextQuestion();
    resultPage();
  };
  var resultPage = function() {
    if ( quiz.currentQuestion === 61 ) {
      $( '#quiz-1' ).hide();
      $( '#result' ).show();
      var lettersResult = [];
      var h1 = [];
      var extraversion = quiz.totalScore[ "extraversion" ];
      var introversion = quiz.totalScore[ "introversion" ];
      var sensing = quiz.totalScore[ "sensing" ];
      var intuition = quiz.totalScore[ 'intuition' ];
      var thinking = quiz.totalScore[ 'thinking' ];
      var feeling = quiz.totalScore[ 'feeling' ];
      var perceiving = quiz.totalScore[ 'perceiving' ]
      var judging = quiz.totalScore[ 'judging' ];

      if ( introversion > extraversion ) {
        var percent = Math.floor( ( introversion / ( introversion + extraversion ) * 100 ) )
        lettersResult.push( "I" );
        h1.push( "I:" + percent + "% " )
      } else if ( extraversion > introversion ) {
        var percent = Math.floor( ( extraversion / ( extraversion + introversion ) * 100 ) )
        lettersResult.push( "E" );
        h1.push( "E:" + percent + "% " )
      } else {
        lettersResult.push( "E" );
      };

      if ( sensing > intuition ) {
        var percent = Math.floor( ( sensing / ( sensing + intuition ) * 100 ) )
        lettersResult.push( "S" )
        h1.push( "S:" + percent + "% " )
      } else if ( intuition > sensing ) {
        var percent = Math.floor( ( intuition / ( intuition + sensing ) * 100 ) )
        lettersResult.push( "N" )
        h1.push( "N:" + percent + "% " )
      } else {
        lettersResult.push( "S" );
      };

      if ( thinking > feeling ) {
        var percent = Math.floor( ( thinking / ( thinking + feeling ) * 100 ) )
        lettersResult.push( "T" )
        h1.push( "T:" + percent + "% " )
      } else if ( feeling > thinking ) {
        var percent = Math.floor( ( feeling / ( feeling + thinking ) * 100 ) )
        lettersResult.push( "F" )
        h1.push( "F:" + percent + "% " )
      } else {
        lettersResult.push( "F" );
      };

      if ( perceiving > judging ) {
        var percent = Math.floor( ( perceiving / ( perceiving + judging ) * 100 ) )
        lettersResult.push( "P" )
        h1.push( "P:" + percent + "% " )
      } else if ( judging > perceiving ) {
        var percent = Math.floor( ( judging / ( judging + perceiving ) * 100 ) )
        lettersResult.push( "J" )
        h1.push( "J:" + percent + "% " )
      } else {
        lettersResult.push( "J" );
      };

      console.log( quiz.totalScore )
      var h1Input = ""
      h1Input += "<h1>" + "Your MBTI breakdown is: " + "<br>" + h1[ 0 ] + h1[ 1 ] + h1[ 2 ] + h1[ 3 ] + "</h1>"
      $( "h1" ).empty().append( h1Input )

      var typeResult = ""
      typeResult += lettersResult[ 0 ] + lettersResult[ 1 ] + lettersResult[ 2 ] + lettersResult[ 3 ]
        // console.log(html)
      // $( "h1" ).append( html )
      personalityMatch(typeResult);
    };
  }

  var personalityMatch = function(typeResult) {
    $('#result').removeClass('hidden');
    $('#' + typeResult).removeClass('hidden');
    console.log(typeResult);
  }

  var audio = new Audio('./audio/got-song.mp3');


  $( '#btn-reset' ).click( reset );
  $( '.btn-quiz' ).click( answer );
  nextQuestion();
  audio.play();

} );
