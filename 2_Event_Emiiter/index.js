const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//Initialize Object (that we create):
const myEmitter = new MyEmitter();

// add Listener for the Log event
myEmitter.on("log", (msg) => {
  logEvents(msg);
});

setTimeout(() => {
  // Emit Event
  myEmitter.emit("log", "Log Event Emitted!");
}, 2000);
