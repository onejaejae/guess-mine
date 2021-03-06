import events from "./event";

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);

  socket.on(events.setNickname, ({ nickname }) => {
    // eslint-disable-next-line no-param-reassign
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });

  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });
};

export default socketController;
