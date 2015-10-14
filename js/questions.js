var Quiz = function() {
  this.currentQuestion = 0;

  this.totalScore = {
    extraversion: 0,
    introversion: 0,
    sensing: 0,
    intuition: 0,
    thinking: 0,
    feeling: 0,
    judging: 0,
    perceiving: 0,
    none: 0
  };

  this.questions = [
    {
      question: "You are almost never late for your appointments.",
      option1: { type: "judging",  point: 2 },
      option2: { type: "judging",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "perceiving", point: 1 },
      option5: { type: "perceiving", point: 2 }
    },
    {
      question: "You like to be engaged in an active and fast-paced job.",
      option1: { type: "extraversion",  point: 2 },
      option2: { type: "extraversion",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "introversion", point: 1 },
      option5: { type: "introversion", point: 2 }
    },
    {
      question: "You enjoy having a wide circle of acquaintances.",
      option1: { type: "extraversion",  point: 2 },
      option2: { type: "extraversion",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "introversion", point: 1 },
      option5: { type: "introversion", point: 2 }
    },
    {
      question: "You feel involved when watching TV soaps.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
    {
      question: "You are usually the first to react to a sudden event.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
    {
      question: "You feel that the world is founded on compassion.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "You think that everything in the world is relative.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
    {
      question: "Strict observance of established rules prevents achieving a good outcome.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
    {
      question: "It is difficult to get you excited.¯\\_(ツ)_/¯",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "When making a decision, you rely more on your feelings than on analysis.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You often think about humankind and its destiny.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You believe the best decision is one which can be easily changed.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "You often ponder the root cause of problems.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You prefer to act immediately rather than speculate about various options.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You trust reason rather than feelings.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You are inclined to rely more on improvisation than on prior planning.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "You spend your leisure time actively socializing with a group of people.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You usually plan your actions in advance.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "Your actions are frequently influenced by your emotions.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You are a person somewhat reserved and distant in communication.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "You know how to put every minute of your time to good purpose.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You often contemplate the complexity of life.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "After prolonged socializing you feel you need to get away and be alone.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "You often do jobs in a hurry. ٩ʕ•͡×•ʔ۶",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You easily see the general principle behind specific occurrences.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You frequently and easily express your feelings and emotions.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You find it difficult to speak loudly.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "You get bored if you have to read theoretical books.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You tend to sympathize with other people.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You value justice higher than mercy.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You rapidly get involved in the social life of a new workplace.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "The more people you speak to, the better you feel.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You tend to rely on your experience rather than on theoretical alternatives.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "As a rule, you proceed only when you have a clear and detailed plan.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You easily empathize with the concerns of other people.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "Often you prefer to read a book than go to a party.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "In a group, you enjoy being directly involved and at the centre of attention.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You are more inclined to experiment than to follow familiar approaches.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "You are strongly touched by the stories about people's troubles.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "Deadlines seem to you to be of relative rather than absolute importance.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "You prefer to isolate yourself from outside noises.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "It is essential for you to try things with your own hands.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You think that almost everything can be analyzed.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
     {
      question: " For you, no surprises is better than surprises - bad or good ones.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You take pleasure in putting things in order.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You feel at ease in a crowd.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You have good control over your desires and temptations.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You easily understand new theoretical principles.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
     {
      question: "You usually place yourself nearer to the side than in the center of the room.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "You willingly involve yourself in matters which engage your sympathies.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "A thirst for adventure is something close to your heart.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You easily perceive various ways in which events could develop.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "When solving a problem you consider the rational approach to be the best.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You find it difficult to talk about your feelings.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "Your decisions are based on the feeling of a moment than thorough planning.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "It is easy for you to communicate in social situations.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You feel more comfortable sticking to conventional ways.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You are easily affected by strong emotions.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You are always looking for opportunities.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You rarely deviate from your habits.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
      {
      question: "dummy",
      option1: { type: "thinking",       point: 0 },
      option2: { type: "thinking",       point: 0 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 0 },
      option5: { type: "feeling",      point: 0 }
    }
    ];
};

Quiz.prototype.questionPercentage = function(){
  return (this.currentQuestion - 1) / 59 * 100;
};

Quiz.prototype.nextQuestion = function(){
  return this.questions[this.currentQuestion++];
};
//what's prototype
Quiz.prototype.answer = function(){

};