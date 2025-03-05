const questions = [
  {
    question: "Which of the following is NOT a type of computer network?",
    options: ["LAN", "WAN", "MAN", "WLAN"],
    answer: 3,
  },
  {
    question: "What does URL stand for?",
    options: [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Uniform Resource Link",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is an example of an input device?",
    options: ["Printer", "Monitor", "Keyboard", "Speakers"],
    answer: 2,
  },
  {
    question: "What is the purpose of spreadsheet software?",
    options: [
      "To create presentations",
      "To manage databases",
      "To perform calculations and analyze data",
      "To edit images",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the def keyword in Python?",
    options: [
      "To define a variable",
      "To define a function",
      "To define a class",
      "To define a loop",
    ],
    answer: 1,
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
    }, 15000);
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
