<?php
$login = false;
$showError = false;
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    include './dbconnect.php';
    $email = $_POST["email"];
    $password = $_POST["password"];

    // $sql = "Select * from users where email='$email' AND password='$password'";
    $sql = "Select * from users where email='$email'";
        $result = mysqli_query($conn, $sql);
        $num = mysqli_num_rows($result);
        if($num == 1){
            while($row = mysqli_fetch_assoc($result)){
                if (password_verify($password, $row['password'])){ 
                    $login = true;
                    session_start();
                    $_SESSION['loggedin'] = true;
                    $_SESSION['$email'] = $email;
                    header("location: index.php");
                }
                else{
                    $showError = "Invalid cridentials. Please, try again.";
                }
            }  
        }
        else{
            $showError = "Invalid cridentials.";
        }
  }
  
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>Log In</title>
</head>

<body>

    <!-- <?php
    if($login){
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong>You are now logged in.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>';}

if($showError){
    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> '.$showError.'
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>';}
     ?> -->




    <div class="wrapper">
        <div class="login">
            <form action="./login.php" method="post">
                <h1>LOG IN</h1>
                <div class="top">
                    <span>Don't have an account ?<a href="./signup.php">Sign Up</a></span>
                </div>
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" id="email" name="email" required>
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" id="password" name="password" required>
                <button type="submit" class="submit" name="register">Sign In</button>
            </form>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous">
    </script>
</body>

</html>