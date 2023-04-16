const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const k = 0.693 / HALF_LIFE_PERIOD;

function dateSample(sampleActivity) {
  if (
	(typeof sampleActivity != 'string') ||
	(typeof sampleActivity === 'undefined') ||
	(sampleActivity <= 0) ||
	(isNaN(sampleActivity))
	){
    return false;
  }
  let t = (Math.log(MODERN_ACTIVITY / +(sampleActivity)) / k);
  if (t >= 0) {
	return Math.ceil(t);
  }
  return false
}

module.exports = {
  dateSample
};
