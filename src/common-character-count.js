const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let char of new Set(s1)) {
	let numCharInS1 = s1.split(char).length - 1;
	let numCharInS2 = s2.split(char).length - 1;
	count += Math.min(numCharInS1, numCharInS2);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
