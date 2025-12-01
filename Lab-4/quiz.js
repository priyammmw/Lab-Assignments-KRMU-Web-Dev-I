const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "How many states are there in India?", answer: "28" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "What is 5+2?", answer: "7" },
    { question: "How many continents are there on Earth?", answer: "7" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        let cleanedAnswer = userAnswer.toLowerCase().trim();

        if (cleanedAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Your final score is: " + score + " out of " + quizQuestions.length);
}

runQuiz();
