<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        .form-container {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }
        .form-field {
            margin-bottom: 10px;
        }
        .form-field label {
            display: block;
            margin-bottom: 5px;
        }
        .form-field input, .form-field textarea {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        .form-field button {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .form-field button:hover {
            background-color: #0069d9;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Contact Us</h2>
        <form method="POST" action="contact-form.php">
            <div class="form-field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="form-field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5" required></textarea>
            </div>
            <div class="form-field">
                <label for="recaptcha">reCAPTCHA</label>
                <div class="g-recaptcha" data-sitekey="your-site-key-here"></div>
                <input type="hidden" name="recaptcha" id="recaptcha">
            </div>
            <div class="form-field">
                <button type="submit">Send</button>
            </div>
        </form>
    </div>
    <script src="https://www.google.com/recaptcha/api.js"></script>
</body>
</html>
