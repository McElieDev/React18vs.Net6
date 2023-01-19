const server = require("http").createServer();
const io = require("socket.io")(server);
io.on("connection", (client) => {
  client.on("event", (data) => {
    /* … */
    console.log(data, "server updated");
  });
  client.on("disconnect", () => {
    /* … */
    console.log("server disconnected");
  });
});
server.listen(3000);
