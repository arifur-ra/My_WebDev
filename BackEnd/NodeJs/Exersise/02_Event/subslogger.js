const Emitter = require("events").EventEmitter;
const uuid = require("uuid");

class SubscribeLogger extends Emitter {
  sub(subCount) {
    if (subCount > 100) {
      this.emit("wrong", {
        message: "Too many Subscriber",
      });
    } else {
      this.emit("success", {
        message: "subscribe Successfully",
        ticket: uuid.v4(),
      });
    }
  }
}
module.exports = SubscribeLogger;
