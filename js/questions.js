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
  };

  this.questions = [
    {
      question: "You are almost never late for your appointments",
      option1: { type: "feeling",  point: 2 },
      option2: { type: "feeling",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "thinking", point: 1 },
      option5: { type: "thinking", point: 2 }
    },
    {
      question: "You like to be engaged in an active and fast-paced job.",
      option1: { type: "feeling",  point: 2 },
      option2: { type: "feeling",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "thinking", point: 1 },
      option5: { type: "thinking", point: 2 }
    },
    {
      question: "You enjoy having a wide circle of acquaintances.",
      option1: { type: "feeling",  point: 2 },
      option2: { type: "feeling",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "thinking", point: 1 },
      option5: { type: "thinking", point: 2 }
    },
    {
      question: "You feel involved when watching TV soaps",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "You are usually the first to react to a sudden event",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "You feel that the world is founded on compassion",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "You think that everything in the world is relative",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "Strict observance of the established rules is likely to prevent attaining a good outcome",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "It is difficult to get you excited",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "When making a decision, you rely more on your feelings than on analysis of the situation",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You often think about humankind and its destiny",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You believe the best decision is one which can be easily changed",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You often ponder the root cause of phenomena and things",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You prefer to act immediately rather than speculate about various options",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You trust reason rather than feelings",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You are inclined to rely more on improvisation than on prior planning",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You spend your leisure time actively socializing with a group of people, attending parties, shopping, etc.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You usually plan your actions in advance",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "Your actions are frequently influenced by your emotions",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You are a person somewhat reserved and distant in communication",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You know how to put every minute of your time to good purpose",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You often contemplate the complexity of life",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "After prolonged socializing you feel you need to get away and be alone",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You often do jobs in a hurry",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You easily see the general principle behind specific occurrences",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You frequently and easily express your feelings and emotions",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You find it difficult to speak loudly",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You get bored if you have to read theoretical books",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You tend to sympathize with other people",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You value justice higher than mercy",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    }
    ];
};

Quiz.prototype.questionPercentage = function(){
  return (this.currentQuestion - 1) / 29 * 100;
};

Quiz.prototype.nextQuestion = function() {
  return this.questions[this.currentQuestion++];
};