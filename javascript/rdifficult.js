const questions = [
  {
    question: " Which of the following is an example of deductive reasoning?",
    options: [
      "All dogs are mammals. Rex is a dog. Therefore, Rex is a mammal.",
      "Some dogs are friendly. Bella is friendly. Therefore, Bella is a dog.",
      "It rained yesterday. It might rain today.",
      "Birds can fly. Penguins are birds. Therefore, penguins can fly.",
    ],
    answer: 0,
  },
  {
    question: "Which statement best describes inductive reasoning?",
    options: [
      "Drawing a specific conclusion from a general principle.",
      "Drawing a general conclusion from specific observations.",
      "Deriving conclusions from the comparison of two statements.",
      "Making decisions based on emotional response.",
    ],
    answer: 1,
  },
  {
    question: " Which scenario illustrates causal reasoning?",
    options: [
      "The sun rises in the east because the Earth rotates.",
      "All cats have fur; a lion is a cat; therefore, a lion has fur.",
      "Some students study at night; John studies at night; therefore, John is a student.",
      "If it rains, the grass gets wet; the grass is wet, so it rained.",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of using analogical reasoning?",
    options: [
      "To establish a cause-and-effect relationship.",
      "To make a direct comparison between two similar things.",
      "To deduce a conclusion from a general principle.",
      "To predict outcomes based on statistical data.",
    ],
    answer: 1,
  },
  {
    question: " Which of the following is an example of a straw man fallacy?",
    options: [
      "Person A says we should have stricter gun control. Person B says Person A wants to take all guns away from law-abiding citizens.",
      "Person A argues that climate change is real. Person B agrees but changes the topic to pollution instead.",
      "Person A believes in evolution. Person B attacks Person A's character instead of the argument.",
      "Person A presents data on health benefits of exercise. Person B responds by saying exercise isn't the only way to stay healthy.",
    ],
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
