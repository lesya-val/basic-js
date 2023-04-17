const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
	const number = String(n);
	let max = 0;
	for (let i = 0; i < number.length; i++) {
		const newNumber = Number(number.slice(0, i) + number.slice(i + 1));
		if (newNumber > max) {
			max = newNumber;
		}
	}
	return max;
}

module.exports = {
  deleteDigit
};
