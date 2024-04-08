const captchaQuestion = document.getElementById('captcha-question');
const userInput = document.getElementById('captcha-input');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const nextPage = document.getElementById('next-page');

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
		errorMessage.classList.add('hidden');
		nextPage.classList.remove('hidden');
	} else {
		errorMessage.classList.remove('hidden');
		nextPage.classList.add('hidden');
	}
}

generateCaptcha();

generateCaptcha();
