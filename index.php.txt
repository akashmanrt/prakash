<!DOCTYPE html>
<html>
<head>
    <title>reCAPTCHA Example</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>
    <form action="verify.php" method="post">
        <div class="g-recaptcha" data-sitekey="alam123"></div>
        <br/>
        <input type="submit" value="Submit">
    </form>
</body>
</html>