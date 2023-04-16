const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
	const count = matrix.reduce((acc, row) => {
		return acc + row.reduce((acc, cell) => {
			return cell === '^^' ? acc + 1 : acc;
		}, 0)
	}, 0);
	return count;
}

module.exports = {
  countCats
};
