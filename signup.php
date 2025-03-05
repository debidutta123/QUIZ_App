<?php
    $showAlert = false;
    $showError = false;
    if($_SERVER["REQUEST_METHOD"] == "POST"){
    
        include './dbconnect.php';
        $username = $_POST["username"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        // $exists = false;

        //Check wheather this user is exist or not.
        $existSql = "SELECT * FROM `users` WHERE email = '$email'";
        $result = mysqli_query($conn, $existSql);
        $numExistRows = mysqli_num_rows($result);
        if($numExistRows > 0){
        // $exists = true;

        $showError = "User already exists";
            echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> '.$showError.'
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>';

    }
        else{
            // $exists = false;
            if($exists == false){
                $hash = password_hash($password, PASSWORD_DEFAULT);
                $sql = "INSERT INTO `users` (`username`, `phone`, `email`, `password`) VALUES ('$username', '$phone', '$email', '$hash')";
                $result = mysqli_query($conn, $sql);
                if($result){
                    header("Location:login.php");
                // echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
                // <strong>Success!</strong>Your account is now created. You can now log in.
                // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                // </div>';
            }
        }
        else {
            echo "Invalid cridentials. Please try again.";
            // $showError = "User already exists";
            // echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
            // <strong>Error!</strong>
            // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            // </div>';

        }
    }
}
  
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css" />
    <title>Sign Up</title>
</head>

<body>

    <!-- <?php
        if($showAlert){
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong>Your account is now created. Ypu can now log in.
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
            <form action="./signup.php" method="post">
                <h1>SIGN UP</h1>

                <label>Username</label>
                <input type="text" class="input-field" placeholder="Enter Your Name" id="username" name="username"
                    required />

                <label>Phone</label>
                <input type="text" class="input-field" placeholder="Enter Your Phone Number"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="10" minlength="10"
                    id="phone" name="phone" required />

                <label>Email</label>
                <input type="email" class="input-field" placeholder="Enter Your Email" id="email" name="email"
                    required />

                <label>Password</label>
                <input type="password" class="input-field" placeholder="Enter Your Password" id="password"
                    name="password" required />

                <div class="top">
                    <span>ALready have an account ?<a href="./login.php">Sign In</a></span>
                </div>

                <button type="submit" class="submit" name="register">Sign Up</button>
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