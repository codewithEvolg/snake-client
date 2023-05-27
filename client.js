const net = require("net");
const {IP, PORT, USER } = require('./constant');
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection(
    connectionListener= { 
      host: IP,
      port: PORT// PORT number here
    });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    console.log(`Name: ${USER}`); //user's name
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect: connect};