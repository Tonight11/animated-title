document.addEventListener('DOMContentLoaded', function () {
	const textElement = document.getElementById('typing-text');
	const textToType = 'FirstStep!';

	let index = 0;

	function type() {
		textElement.textContent += textToType[index];
		index++;
		if (index < textToType.length) {
			setTimeout(type, 120);
		}
	}

	type();
});
