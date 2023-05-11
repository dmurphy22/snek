const client = require("./client");
const input = require("./input");

console.log("Connecting ...");
let clnt = client.connect();
input.setupInput(clnt);

