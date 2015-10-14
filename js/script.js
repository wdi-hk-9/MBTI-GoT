$(function(){

  var quiz = new Quiz();

  var updateProgress = function(){
    $('.progress-bar').attr("style", "width:" + quiz.questionPercentage() + "%");
  };

  var nextQuestion = function(){
    var nextQ = quiz.nextQuestion();
    $('#questions-full').html(nextQ.question);
    $('.questionOutOf').html('Question ' + quiz.currentQuestion + '/30');
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
  };
  var resultPage = function(){
      if (quiz.currentQuestion === 31) {
      $('#quiz-1').hide();
      $('#result').show();
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
      }
      else if (extraversion > introversion) {
        var percent = Math.floor((extraversion / (extraversion+introversion) * 100))
        lettersResult.push("E");
      }
      else {
          lettersResult.push("E");
        };

      if (sensing > intuition){
        var percent = Math.floor((sensing / (sensing+intuition) * 100))
        lettersResult.push("S")
      }
      else if (intuition > sensing){
        var percent = Math.floor((intuition / (intuition+sensing) * 100))
        lettersResult.push("N")
      }
      else {
        lettersResult.push("S");
      };

      if (thinking > feeling){
        var percent = Math.floor((thinking / (thinking+feeling) * 100))
        lettersResult.push("T")
      }
      else if (feeling > thinking) {
        var percent = Math.floor((feeling / (feeling+thinking) * 100))
        lettersResult.push("F")
      }
      else {
        lettersResult.push("F");
      };

      if (perceiving > judging){
        var percent = Math.floor((perceiving / (perceiving+judging) * 100))
        lettersResult.push("P")
      }
      else if (judging > perceiving) {
        var percent = Math.floor((judging / (judging+perceiving) * 100))
        lettersResult.push("J")
      }
      else {
        lettersResult.push("J");
      };

      console.log(quiz.totalScore)
      var html = ""
      html += "<article>" + lettersResult[0] + lettersResult[1] + lettersResult[2] + lettersResult[3] + "</article>"
      // console.log(html)
      $("#result-string").append(html)
      personalityMatch();
    };
  }

  var personalityMatch = function(){
    var typeResult = $('article').html();
    switch(typeResult) {
      case "ESTJ":
        $('#result-image').html('<img src="./images/ESTJ.jpg" height="400px" width="400px">'), $('article').append(": Robb Stark");
        $('#result-image').append("<br>"+"<br>"+"Keirsey(a psychologist) says ESTJ’s “like to take charge of groups and are comfortable issuing orders. Rank, they believe, has its obligations, but it also has its privileges… Even as children they are industrious, and they usually respect their parents as authority figures… Their industry and perseverance only become more important to them as they grow into adulthood and take on the responsibilities of job and family.” Robb grows from a dutiful son into a confident, focused leader over the course of the season.");
        break;
      case "ISTJ":
        $('#result-image').html('<img src="./images/ISTJ.jpg" height="400px" width="400px">'), $('article').append(": Ned Stark");
        $('#result-image').append("<br>"+"<br>"+"According to Keirsey(a psychologist), ISTJ’s are “are extraordinarily persevering and dutiful… In their quiet way, Inspectors see to it that rules are followed, laws are respected, and standards are upheld… Their words tend to be plain and down-to-earth, not showy or high-flown.” Ned fits the mold of the “inspector” category to a tee, methodically seeking out concrete information about the plot against Robert, and holding strictly to his values. Keirsey’s description even says people of this type are often accused of “having ice in their veins” despite their good intentions.");
        break;
      case "ESFJ":
        $('#result-image').html('<img src="./images/ESFJ.jpg" height="400px" width="400px">'), $('article').append(": Cersei Lannister");
        $('#result-image').append("<br>"+"<br>"+"This type supposedly “are the great nurturers of social institutions such as schools, churches, social clubs, and civic groups… friendly social service is a key to their nature.” Alright, nevermind. There is no one like that in Game of Thrones, so let’s just say that Cersei Lannister is what you get when you mix an ESFJ with a sociopath. She is comfortable in social situations (E), more direct than abstract in her thinking (S), driven by her love for her brother and children and hatred of others (F), and presents the image of a devoted matriarch (J). Too bad we can’t add a (B) for batshit crazy.");
        break;
      case "ISFJ":
        $('#result-image').html('<img src="./images/ISFJ.jpg" height="400px" width="400px">'), $('article').append(": Catelyn Stark");
        $('#result-image').append("<br>"+"<br>"+"Keirsey(a psychologist) refers to ISFJ’s as “protectors”. “Their primary interest is in the safety and security of those they care about… [They] have an extraordinary sense of loyalty and responsibility in their makeup, and seem fulfilled in the degree they can shield others from the dirt and dangers of the world… Their reserve ought really to be seen as an expression of their sincerity and seriousness of purpose.” Catelyn is constantly concerned for her husband and children, trying to keep them safe despite the dangers coming from all directions.");
        break;
      case "ESTP":
        $('#result-image').html('<img src="./images/ESTP.jpg" height="400px" width="400px">'), $('article').append(": Jaime Lannister");
        $('#result-image').append("<br>"+"<br>"+"Keirsey says that ESTP’s “…will take tremendous risks to get what they want, and seem exhilarated by walking close to the edge of disaster… these smooth operators are usually something of a mystery to others. While they live in the moment and lend excitement – and unpredictability – to all their relationships, they rarely let anyone get really close to them.” Jaime is impulsive (throwing Bran out the window) and fearless (taunting Catelyn to kill him). He is handsome and popular, but only one person knows him very well… you know who I mean. Late in the series, Jaime says “There are no men like me… only me.” Well Jaime, according to Keirsey’s stats, about 10% of the population is like you, although hopefully not when it comes to the incest and attempted murder.");
        break;
      case "ISTP":
        $('#result-image').html('<img src="./images/ISTP.jpg" height="400px" width="400px">'), $('article').append(": Arya Stark");
        $('#result-image').append("<br>"+"<br>"+"ISTP’s “love action, and know instinctively that their activities are more enjoyable, and more effective, if done impulsively, spontaneously, subject to no schedules or standards but their own… they can be fiercely insubordinate to those in authority, seeing rules and regulations as unnecessarily confining… [they] want to be free to do their own thing, and they are proud of their ability to do it with an artist’s skill.” Arya certainly wants to learn to use Needle like an artist. She chafes at the strict female role thrust upon her, and wishes to chart her own way in the world, doing what she loves.");
        break;
      case "ESFP":
        $('#result-image').html('<img src="./images/ESFP.jpg" height="400px" width="400px">'), $('article').append(": Tyrion Lannister");
        $('#result-image').append("<br>"+"<br>"+"This category of people is “exciting and full of fun, and their great social interest lies in stimulating those around them to take a break from work and worry, to lighten up and enjoy life… [they] are smooth, talkative, and witty; they always seem to know the latest jokes and stories, and are quick with wisecracks and wordplay–nothing is so serious or sacred that it can’t be made fun of. Performers also like to live in the fast lane…” I don’t know if Westeros has fast lanes (horse drawn carts can’t move very quickly), but the equivalent is probably all the wine and prostitutes Tyrion is fond of.");
        break;
      case "ISFP":
        $('#result-image').html('<img src="./images/ISFP.jpg" height="400px" width="400px">'), $('article').append(": Daenerys Targaryen");
        $('#result-image').append("<br>"+"<br>"+"Keirsey’s description of this personality type largely centers on its tendency toward artisitic pursuits, but he also notes that they “are especially sensitive to the pain and suffering of others, and they sympathize freely with the sufferer.” Daenerys goes to personal risk to free mistreated slaves, and she suffers deeply when Khal Drogo does. She may not be “seized by the act of artistic composition, as if caught up in a whirlwind”, but she does seem to impulsively draw many actions from within herself, such as developing the ritual that hatches her dragon eggs.");
        break;
      case "ENFJ":
        $('#result-image').html('<img src="./images/ENFJ.jpg" height="400px" width="400px">'), $('article').append(": Syrio Forel");
        $('#result-image').append("<br>"+"<br>"+"This one’s easy, as it’s called “the teacher”. ENFJ’s “ability to fire the imagination can amount to a kind of genius which other types find hard to emulate… [they] will voice their passions with dramatic flourish… [they] like things settled and organized.” I have to say, I am totally uncoordinated, but if someone tossed me a sword, said “Next time you will catch it,” then spouted out awesome lines about saying “Not today” to the god of death… I bet I could learn to fight.");
        break;
      case "INFJ":
        $('#result-image').html('<img src="./images/INFJ.jpg" height="400px" width="400px">'), $('article').append(": Varys");
        $('#result-image').append("<br>"+"<br>"+"Keirsey calls INFJ “the counselor”. They “prefer to work intensely with those close to them, especially on a one-to-one basis, quietly exerting their influence behind the scenes. [They] value their integrity a great deal, but they have mysterious, intricately woven personalities which sometimes puzzle even them.” Remember Varys’s conversations with Ned in his cell? He managed to control Ned, to get him to admit his treason through a strong understanding of Ned’s motivations (the safety of his daughter), but he did it for what he considered to be his own sense of honor in valuing the peace of the realm.");
        break;
      case "ENFP":
        $('#result-image').html('<img src="./images/ENFP.jpg" height="400px" width="400px">'), $('article').append(": Robert Baratheon");
        $('#result-image').append("<br>"+"<br>"+"Robert at the beginning of the show has certainly declined, but in his youth he exhibited the best qualities of an ENFP. He saw “life as an exciting drama, pregnant with possibilities for both good and evil” and was “vivacious and inspiring… Fiercely individualistic, [striving] toward a kind of personal authenticity, and this intention always to be [himself was] quite attractive to others.” He certainly inspired an army to rebel in his name, got the devoted loyalty of Ned and others, and commanded the infatuation of plenty of women, until drunkenness and debauchery got to him. So let that be a lesson to you ENFP’s.");
        break;
      case "INFP":
        $('#result-image').html('<img src="./images/INFP.jpg" height="400px" width="400px">'), $('article').append(": Jon Snow");
        $('#result-image').append("<br>"+"<br>"+"These individuals “have a profound sense of idealism that comes from a strong personal sense of right and wrong. They conceive of the world as an ethical, honorable place… Set off from the rest of humanity by their privacy and scarcity, Healers can often feel even more isolated in the purity of their idealism. [they] might well feel a sense of separation because of their often misunderstood childhood… [they] begin to believe they are bad to be so fanciful, so dreamy, and can come to see themselves as ugly ducklings.” Pushed to the side because of his bastard birth, Jon tries to retain his father’s honor, and sees the world in idealistic terms.");
        break;
      case "ENTJ":
        $('#result-image').html('<img src="./images/ENTJ.jpg" height="400px" width="400px">'), $('article').append(": Tywin Lannister");
        $('#result-image').append("<br>"+"<br>"+"According to Keirsey, ENTJ’s “are bound to lead others, and from an early age they can be observed taking command of groups… they have a strong natural urge to give structure and direction wherever they are–to harness people in the field and to direct them to achieve distant goals…more than any other type [they] desire (and generally have the ability) to visualize where the organization is going.” Tywin runs his family and his realm like an organization, trying to guide Jaime and later Tyrion toward his own ends. He takes the long view, hoping that if the Lannisters make the right choices they could “establish a dynasty that lasts a thousand years”.");
        break;
      case "INTJ":
        $('#result-image').html('<img src="./images/INTJ.jpg" height="400px" width="400px">'), $('article').append(": Petyr Baelish");
        $('#result-image').append("<br>"+"<br>"+"Keirsey calls the INTJ “the mastermind”. They “are head and shoulders above all the rest in contingency planning… In their careers, Masterminds usually rise to positions of responsibility, for they work long and hard and are dedicated in their pursuit of goals… Masterminds do not feel bound by established rules and procedures, and traditional authority does not impress them.” Littlefinger, born into a humble family, planned and manipulated his way above so many of the highborn lords around him. He is a rational thinker, but with deeply held public and private ambitions (get power, get Catelyn, respectively).");
        break;
      case "INTP":
        $('#result-image').html('<img src="./images/INTP.jpg" height="400px" width="400px">'), $('article').append(": Samwell Tarly");
        $('#result-image').append("<br>"+"<br>"+"INTP’s “will learn in any manner and degree they can. They will listen to amateurs if their ideas are useful, and will ignore the experts if theirs are not… They are inclined to be shy except with close friends…” No one fit much else about this category, so… congratulations, INTP. You’re Sam.");
        break;
      case "ENTP":
        $('#result-image').html('<img src="./images/ENTP.jpg" height="400px" width="400px">'), $('article').append(": Melisandre");
        $('#result-image').append("<br>"+"<br>"+"The ONE option I wish you couldn't get because I didn't finish a description for her, but generally ENTP folks are: Inventive, enthusiastic, strategic, enterprising, inquisitive, versatile. Enjoy new ideas and challenges, value inspiration.");
        break;

    }
  }

  $('#btn-reset').click(reset);
  $('.btn-quiz').click(answer);
  nextQuestion();

});

