const form = document.getElementById("loginForm");
const submitBtn = form.querySelector("input[type='submit']");

form.addEventListener("input", () => {
    if (form.checkValidity()) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

function refreshCaptcha() {
    const captchaImg = document.getElementById("captchaImg");
    captchaImg.src = "micro.php?" + new Date().getTime();
}
