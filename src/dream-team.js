const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
   if (!Array.isArray(members)) {
     return false;
   }
  
  const filteredMembers = members.filter((item) => typeof item === 'string');
  const nameLetters = filteredMembers.map((member) => member.trim()[0].toUpperCase())
  return nameLetters.sort().join('');
}

module.exports = {
  createDreamTeam
};
