const questions = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Power Unit",
      "Computer Power Unit",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a volatile memory?",
    options: ["ROM", "RAM", "Hard Disk", "Cache Memory"],
    answer: 1,
  },
  {
    question: "What is the function of an operating system?",
    options: [
      "To format hard drives",
      "To manage hardware and software resources",
      "To write programs",
      "To browse the internet",
    ],
    answer: 1,
  },
  {
    question:
      "Which programming language is commonly used for creating web pages?",
    options: ["Java", "Python", "HTML", "C++"],
    answer: 2,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "What is the primary purpose of a firewall in computing?",
    options: [
      "To protect against viruses",
      "To improve internet speed",
      "To filter incoming network traffic",
      "To encrypt data",
    ],
    answer: 2,
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
