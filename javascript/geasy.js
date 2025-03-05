const questions = [
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Michelangelo",
      "Pablo Picasso",
      "Vincent van Gogh",
    ],
    answer: 0,
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    answer: 1,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: 0,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3,
  },
  {
    question: "Who was the first person to step on the Moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<h4>${q.question}</h4>`;

    q.options.forEach((option, index) => {
      questionElement.innerHTML += `
                <div>
                    <input type="radio" name="option" value="${index}">
                    ${option}
                </div>
            `;
    });

    quizContainer.appendChild(questionElement);

    const nextButton = document.createElement("button");
    nextButton.className = "btn btn-primary mt-3";
    nextButton.innerText = "Next";
    nextButton.onclick = checkAnswer;
    quizContainer.appendChild(nextButton);

    setTimeout(() => {
      if (currentQuestion < questions.length) {
        checkAnswer();
      }
    }, 25000);
  } else {
    showResult();
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (
    selectedOption &&
    parseInt(selectedOption.value) === questions[currentQuestion].answer
  ) {
    score++;
  }

  currentQuestion++;
  showQuestion();
}

function showResult() {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>
                                 <a href="../index.php" class="btn btn-success mt-3">Back to Home</a>`;
}

showQuestion();
