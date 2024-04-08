const captchaQuestion = document.getElementById('captcha-question');
const userInput = document.getElementById('captcha-input');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

function generateCaptcha() {
	const num1 = Math.floor(Math.random() * 10) + 1;
	const num2 = Math.floor(Math.random() * 10) + 1;
	const operation = Math.random() > 0.5 ? '+' : '-';
	let captchaStr = '';

	if (operation === '+') {
		captchaStr = `${num1} + ${num2} = `;
	} else {
		captchaStr = `${num1} - ${num2} = `;
	}

	captchaQuestion.textContent = captchaStr;
	captchaQuestion.dataset.answer = operation === '+' ? num1 + num2 : num1 - num2;
}

function checkCaptcha() {
	if (parseInt(userInput.value) === parseInt(captchaQuestion.dataset.answer)) {
		successMessage.classList.remove('hidden');
		errorMessage.classList.add('hidden');
	} else {
		errorMessage.classList.remove('hidden');
		successMessage.classList.add('hidden');
	}
}

generateCaptcha();
