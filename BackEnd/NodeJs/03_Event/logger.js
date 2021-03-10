const Emitter = require("events");
const uuid = require("uuid");
//console.log(uuid.v4());

class Logger extends Emitter {
  log(issue, type) {
    if (type == "tech-error") {
      this.emit("wrong", {
        id: uuid.v4(),
        details: issue,
      });
    } else {
      this.emit("success", {
        d: uuid.v4(),
        details: issue,
      });
    }
  }
}

module.exports = Logger;

// let login = new Logger();
// login.on("wrong", (data) => console.log(data));
// login.on("success", (data) => console.log(data));

// login.log("Email is not found", "tech-error");
// login.log("Email resetted", "tech-recover");
