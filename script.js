const captcha = document.getElementById('captcha');
const ctx = captcha.getContext("2d");
const userInput = document.getElementById('captcha-input');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const nextPage = document.getElementById('next-page');

const alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generateCaptcha() {
	let captchaStr = "";
	for (let i = 1; i <= 7; i++) {
		captchaStr += alphaNums[Math.floor(Math.random() * alphaNums.length)];
	}
	captchaStr = captchaStr.split('').join(' ');
	ctx.clearRect(0, 0, captcha.width, captcha.height);
	ctx.font = "30px Roboto";
	ctx.fillStyle = "#08e5ff";
	ctx.fillText(captchaStr, captcha.width/4, captcha.height/2);
}

function checkCaptcha() {
	if (userInput.value === captcha.textContent.trim()) {
		errorMessage.classList.add('hidden');
		nextPage.classList.remove('hidden');
	} else {
		errorMessage.classList.remove('hidden');
		nextPage.classList.add('hidden');
	}
}

generateCaptcha();
