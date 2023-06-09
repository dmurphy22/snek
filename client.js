const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DLM");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },300);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },600);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },900);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },1200);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },1500);

    
  });



  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  

  return conn;
};

module.exports = {
  connect
};