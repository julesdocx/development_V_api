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
  // makeArrayOfQuery: async (snapshot) => {
  //   let mappedArray = [];
  //   await snapshot.forEach(doc => {
  //     mappedArray.push({activity: doc.data()});
  //   });
  //   return mappedArray;
  // }
}

module.exports = Helpers
