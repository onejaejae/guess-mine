// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("hello", () => console.log("Somebody said hello"));

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

function handleMessageNotify(data) {
  const { message, nickname } = data;
  console.log(`${nickname} : said ${message}`);
}

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`you : ${message}`);
}

socket.on("messageNotify", handleMessageNotify);
