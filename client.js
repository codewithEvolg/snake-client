const net = require("net");
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection(
    connectionListener= { 
      host: '10.0.2.15',
      port: '50541'// PORT number here
    });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log('Hello');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect: connect};