const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const path = require('path');
const PORT = process.env.PORT || 8080;

const createController = require('./controller/createController.js')
const joinController = require('./controller/joinController.js')
const lobbyController = require('./controller/lobbyController.js')
const gameController = require('./controller/gameController.js')
const leaveController = require('./controller/leaveController.js')

app.use(express.static(path.join(__dirname,'..', 'client', 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})

io.on('connection', (socket)=> {
  createController.res(socket)
  joinController.res(io,socket)
  lobbyController.res(io,socket)
  gameController.res(io,socket)
  leaveController.res(io,socket)
})
