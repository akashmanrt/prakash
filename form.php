<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verify the reCAPTCHA response
    $recaptchaResponse = $_POST["recaptcha"];
    $recaptchaSecret = "your-secret-key-here";
    $recaptchaResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}");
    $recaptchaData = json_decode($recaptchaResponse);

    if ($recaptchaData->success) {
        // Form submission isvalid
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Send the email or perform other actions
    } else {
        // reCAPTCHA verification failed
        echo "reCAPTCHA verification failed.";
    }
}
?>