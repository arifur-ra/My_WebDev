const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "..", "model", "users.json");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(usersPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Process the Data

        const dataMap = JSON.parse(data).users.map((item) => {
          return {
            id: item.id,
            name: item.name,
            age: item.email,
            hobbies: item.hobbies,
          };
        });
        resolve(dataMap);
      }
    });
  });
};
module.exports = {
  getUsers,
};
