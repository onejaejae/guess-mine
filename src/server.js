import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import morgan from "morgan";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});

const handleListening = () => {
  console.log(`✔ Server running : http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

// socket을 접속한 한명의 유저라고 생각
io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotify", {
      message,
      nickname: socket.nickname || "Anno",
    });
  });

  socket.on("setNickname", ({ nickname }) => {
    // eslint-disable-next-line no-param-reassign
    socket.nickname = nickname;
  });
});
