const socket = io();
const message = one('#message'); // message
const nickname = one('#nickname'); // input
const sendBtn = one('#sendBtn'); // button
const chat = one('#chat'); // chat field

// 접속헀을 때
socket.on('connect', () => {
	// 알림.
	socket.emit('newUser', {type: 'connect', nickname: nickname.value });
});

// 데이터가 넘어올 때 (message)
socket.on('update', (data) => {
	const { nickname, msg, type } = data;
	
	const node = document.createElement('LI');
	let _msg = "";

	if (type === 'connect') {
		_msg = `${nickname}님이 접속했습니다`;
	} else if (type === 'message') {
		_msg = `${nickname} : ${msg}`;
	} else if (type === 'disconnect') {
		_msg = `${nickname}님이 접속을 종료했습니다..`;
	}

	const textNode = document.createTextNode(_msg);
	node.appendChild(textNode);
	chat.appendChild(node);
});

sendBtn.addEventListener('click', send);

function send() {
	const msg = message.value;
	message.value = "";
	socket.emit('message', { nickname: nickname.value, type: 'message', msg })
}

function appendChild(element, str) {
	chat.innerHTML = str;
	while (chat.children.length > 0) {
		element.appendChild(chat.children[0]);
	}
}

function one (element) {
	return document.querySelector(element);
}