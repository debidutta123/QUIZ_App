<?php
    session_start();

    if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true){
        header("location: login.php");
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mind Blaster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="./css/styles.css">
</head>

<body>
    <div id="na">
        <header class="bg-light p-3 fixed-top" id="bg-light">
            <div class="container d-flex justify-content-between align-items-center">
                <h1 class="logo">Mind Blaster</h1>
                <nav class="d-flex">
                    <a href="#home" class="mx-2">Home</a>
                    <a href="#about" class="mx-2">About</a>
                    <div class="dropdown mx-2">
                        <a class="dropdown-toggle" href="#" role="button" id="topicsDropdown" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Topics
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="topicsDropdown" id="drp">
                            <li id="drp"><a class="dropdown-item" href="partials/reasoning.php">Reasoning</a></li>
                            <li id="drp"><a class="dropdown-item" href="partials/gk.php">General Knowledge</a></li>
                            <li id="drp"><a class="dropdown-item" href="partials/computer.php">Computer</a></li>
                        </ul>
                    </div>
                    <a href="#contact" class="mx-2">Contact</a>
                    <a href="./logout.php" class="mx-2">Logout</a>
                </nav>
            </div>
        </header>

    </div>
    <main>
        <!-- Home Section -->

        <section id="home" class="hero-section text-center" style="padding-top: 100px;">
            <div class="container">
                <h1 class="display-4" id="h">Mind Blaster</h1>
                <p class="lead" id="h1">Unleash Your Brainpower with the Ultimate Quiz Challenge! Are You Ready to Test
                    Your
                    Knowledge?</p>
                <a href="#about" class="btn btn-outline-light">Learn More</a>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section py-5 bg-light">
            <div class="container">
                <h2 class="text-center" id="a1">About</h2>
                <div class="a2">


                    Welcome to our Quiz Website, your ultimate destination for sharpening your knowledge and skills
                    across three main topics: Reasoning, General Knowledge, and Computer Concepts. Our platform is
                    designed to offer an engaging and educational experience for learners of all levels.

                    <ul>
                        <li><strong>Reasoning:</strong><br>
                            Critical Thinking: They enhance critical thinking skills by challenging you to analyze and
                            evaluate information.<br>
                            Problem-Solving: Reasoning quizzes improve problem-solving abilities by requiring logical
                            solutions to complex questions.
                        </li>
                        <li><strong>General Knowledge:</strong><br>
                            Knowledge Reinforcement: They help reinforce and consolidate learned information.<br>
                            Assessment: They provide a way to assess understanding and identify knowledge gaps.
                        </li>
                        <li><strong>Computer:</strong><br>
                            Skill Enhancement: They improve understanding and skills related to computer concepts and
                            technologies.<br>
                            Immediate Feedback: Quizzes provide instant feedback, helping learners correct mistakes
                            quickly.
                        </li>
                        <br>
                        <li><strong>BENEFIT:</strong><br>
                            Enhances Learning and Retention: Active recall through quizzes helps reinforce knowledge and
                            improve long-term retention.<br>
                            Motivates Engagement: The challenge of quizzes can make learning more interactive and
                            engaging, motivating continued participation.
                        </li>
                    </ul>
                    Our quizzes are designed with diverse difficulty levels and timed challenges to ensure a stimulating
                    and rewarding experience. Join us on this journey of knowledge enhancement and skill development.
                    Let's make learning fun and effective!
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact-section py-5">
            <div class="container text-center">
                <h2>Contact Us</h2>
                <p class="mt-4">For any inquiries, please reach out to us at:</p>
                <p>
                    <a href="https://www.linkedin.com/in/debidutta-sahoo-3ba508245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank">
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                        <img src="img/8th.png" alt="linkedin" class="i">
                    </a>
                </p>
            </div>
        </section>
    </main>
</body>

</html>