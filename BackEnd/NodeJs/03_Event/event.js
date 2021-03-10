const Emitter = require("events").EventEmitter;
// Instance from the EventEmitter class

class CustomEmitter extends Emitter {}

const e = new CustomEmitter();

//console.log(Emitter);

e.on("wakeup", () => console.log(`Good Morning!!`));
e.emit("wakeup");
