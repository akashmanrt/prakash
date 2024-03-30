<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>
<body>
    <?php
    session_start();
    $username = $_POST["username"];
    $password = $_POST["password"];
    $captcha = $_POST["captcha"];
    $correctCaptcha = $_SESSION["captcha"] ?? "";
    session_destroy();

    if (strtolower($captcha) !== strtolower($correctCaptcha)) {
        echo "<h1>Invalid CAPTCHA code</h1>";
    } else {
        // Validate the user's credentials
        if (validateCredentials($username, $password)) {
            echo "<h1>Login successful!</h1>";
        } else {
            echo "<h1>Invalid username or password</h1>";
        }
    }

    function validateCredentials($username, $password) {
        // Replace this with your actual database lookup
        return $username === "user" && $password === "password";
    }
    ?>
</body>
</html>
