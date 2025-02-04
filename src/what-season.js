const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (!date) {
    return ('Unable to determine the time of year!');
  } else if (date.toString() === "Invalid Date" || !(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth();
  switch (true) {
    case (month >= 2 && month <= 4) :
      return ('spring');
    case (month >= 5 && month <= 7) :
      return ('summer');
    case (month >= 8 && month <= 10) :
      return ('autumn');
    case (month >= 0 && month <= 1 || month === 11) :
      return ('winter');
    default:
      return false;
  }
}

module.exports = {
  getSeason
};
