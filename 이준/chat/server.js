const PORT = 3000;
const express = require('express');
const app = express();
const http = require('http');
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);

app.use(express.static('public'));
app.use('/io', express.static('node_modules/socket.io-client/dist'));

io.on('connection', (socket) => {
	socket.on('newUser', ({ nickname }) => {
		socket.name = nickname;
		const payload = {
			type: 'connect',
			nickname
		};
		io.sockets.emit('update', payload);
	});

	socket.on('message', ({ nickname, type, msg }) => {
		io.sockets.emit('update', { nickname, type, msg });
	});

	socket.on('disconnect', () => {
		socket.broadcast.emit('update', { nickname: socket.name, type: 'disconnect' });
	});
});

server.listen(PORT, () => {
	console.log('start node server, port number: ' + PORT);
});