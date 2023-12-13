class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    (this.questions = questions),
      (this.timeLimit = timeLimit),
      (this.timeRemaining = timeRemaining),
      (this.correctAnswers = 0),
      (this.currentQuestionIndex = 0);
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
    return this.questions;
  }

  checkAnswer(answer) {
    // Shuffle questions
    // this.shuffleQuestions()
    // Good answer
    console.log(answer);
    console.log(this.questions[this.currentQuestionIndex].answer);

    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
    }
    // Bad answer ==> nothing happens
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) return false;
    if (this.currentQuestionIndex >= this.questions.length) return true;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    } else {
    }
  }

  averageDifficulty() {
    const sumDifficulty = this.questions.reduce(
      (total, question) => total + question.difficulty,
      0
    );
    const average = sumDifficulty / this.questions.length;

    return average;
  }
}

const testQuestions = [
  { text: "Question 1", choices: ["a", "b", "c"], answer: "a", difficulty: 1 },
  { text: "Question 2", choices: ["d", "e", "f"], answer: "e", difficulty: 2 },
  { text: "Question 3", choices: ["x", "y", "z"], answer: "z", difficulty: 2 },
  { text: "Question 4", choices: ["w", "x", "y"], answer: "w", difficulty: 3 },
];

const quiz1 = new Quiz(testQuestions, 60, 60);
quiz1.checkAnswer("a");

quiz1.filterQuestionsByDifficulty(2);
console.log(quiz1.questions);

const average = quiz1.averageDifficulty();
console.log(average);
