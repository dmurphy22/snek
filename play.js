const client = require("./client");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  switch (key) {
  case "\u0003": // ctrl-c (end of text)
    process.exit();
    break;
  case "w":
    console.log("Move: up");
    break;
  case "a":
    console.log("Move: left");
    break;
  case "s":
    console.log("Move: down");
    break;
  case "d":
    console.log("Move: right");
    break;
  }
};




console.log("Connecting ...");
client.connect();
