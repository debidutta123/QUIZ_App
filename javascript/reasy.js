const questions = [
  {
    question:
      "If all cats have tails, and Felix is a cat, what can you conclude?",
    options: [
      "Felix has a tail",
      "Felix is black",
      "Felix is a dog",
      "Felix can fly",
    ],
    answer: 0,
  },
  {
    question:
      "If some birds can swim and all ducks are birds, what can you infer about ducks?",
    options: [
      "Ducks can fly",
      "Ducks can swim",
      "Ducks are mammals",
      "Ducks are reptiles",
    ],
    answer: 1,
  },
  {
    question:
      "All roses are flowers. Some flowers fade quickly. What can you conclude about roses?",
    options: [
      "Roses are colorful",
      "Roses do not fade quickly",
      "Roses may fade quickly",
      "Roses are not flowers",
    ],
    answer: 2,
  },
  {
    question:
      "If all rectangles have four sides and all squares are rectangles, what can be said about squares?",
    options: [
      "Squares have three sides",
      "Squares are rectangles",
      "Squares are circles",
      "Squares are hexagons",
    ],
    answer: 1,
  },
  {
    question:
      "If all dogs bark and Max barks, what can you conclude about Max?",
    options: [
      "Max is a cat",
      "Max is a dog",
      "Max does not bark",
      "Max is a bird",
    ],
    answer: 1,
  },
  {
    question:
      "Some swans are black and all swans have feathers. What can you conclude about all swans?",
    options: [
      "All swans are black",
      "All swans are white",
      "All swans have feathers",
      "All swans do not have feathers",
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
