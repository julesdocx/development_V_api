const {v1: uuidv1 } = require('uuid');

const Helpers = {
  generateUUID: () => {
     const uuid = uuidv1();  
     return uuid;
  },
  checkTitleLength: (title) => {
    if (typeof title !== "string" || title[0].toUpperCase() !== title[0]  || title.length >= 100) {
      return false
    }
    return title
  },
}

module.exports = Helpers