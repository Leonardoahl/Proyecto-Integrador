/**
 * 
 */
'use strict';

const usernamePage = document.querySelector("#username-page");
const chatPage = document.querySelector("#chat-page");
const usernameform = document.querySelector("#usernameForm");
const messageForm = document.querySelector("#messageForm");
const messageInput = document.querySelector("#message");
const messageArea = document.querySelector("#messageArea");
const connectingElement = document.querySelector(".connecting");

let stompClient = null;
let username = null;

const colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

function connect(event){
	event.preventDefault();
	username = document.querySelector('#name').value.trim();
	if(username){
		usernamePage.classList.add("hidden");
		chatPage.classList.remove("hidden");
		
		const socket = new SockJS('https://18.117.191.232:8080/ws');
		stompClient = Stomp.over(socket);
		
		stompClient.connect({}, onConnected, onError);	


      
	}
	
}

function onConnected(){
	//subscribe to the public Topic
	stompClient.subscribe("/topic/public", onMessageReceived);
	
	//tell username to the server
	
	stompClient.send("/app/chat.addUser",
					{},
					JSON.stringify({sender: username, type: 'JOIN'})
					);
					
	connectingElement.classList.add('hidden');
	
}

function onError(){
	connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page and try again';
	connectingElement.style.color = 'red';
}

function onMessageReceived(payload){
	const message = JSON.parse(payload.body);
	console.log("hello " + JSON.stringify(message));
	const messageElement = document.createElement('li');
	
	if(message.type === 'JOIN'){
		messageElement.classList.add('event-message');
		message.content = message.sender + " Se unió :D";
	} else if (message.type === 'LEAVE'){
		messageElement.classList.add('event-message');
		message.content = message.sender + ' Se fue :(';
	}else {
		messageElement.classList.add('chat-message');
		
		const avatarElement = document.createElement('i');
		const avatarText = document.createTextNode(message.sender[0]);
		avatarElement.appendChild(avatarText);
		avatarElement.style['background-color'] = getAvatarColor(message.sender);
		
		messageElement.appendChild(avatarElement);
		
		const usernameElement = document.createElement('span');
		const usernameText = document.createTextNode(message.sender);
		usernameElement.appendChild(usernameText);
		messageElement.appendChild(usernameElement);
	}
	
	const textElement = document.createElement('p');
	const messageText = document.createTextNode(message.content);
	textElement.appendChild(messageText);
	
	messageElement.appendChild(textElement);
	
	messageArea.appendChild(messageElement);
	messageArea.scrollTop = messageArea.scrollHeight;	
}

function getAvatarColor(messageSender){
	let hash = 0;
	for(let i = 0; i< messageSender.length; i++){
		hash = 31 * hash + messageSender.charCodeAt(i);
	}
	const index = Math.abs(hash % colors.length);
	return colors[index];
}

function sendMessage(event){
	const messageContent = messageInput.value.trim();
	if(messageContent && stompClient){
		const chatMessage = {
			sender: username,
			content: messageContent,
			type: 'CHAT'
		};
		stompClient.send(
			'/app/chat.sendMessage',
			{},
			JSON.stringify(chatMessage)
		);
		messageInput.value = '';
	}
	event.preventDefault();
}


usernameform.addEventListener("submit", connect, true);
messageForm.addEventListener("submit", sendMessage, true);