/**
 * 
 */
const connectForm = document.forms['connect'];
const sendForm = document.forms['send'];
let username = null;






 let stompClient = null;
 
 function connect(event){
	 event.preventDefault();
	 username = connectForm.elements['username'].value;
	 const socket = new SockJS('http://127.0.0.1:8080/ws');
	 stompClient = Stomp.over(socket);
	 stompClient.connect({username: username},  ()=>{
		console.log("websocket is connected");
		stompClient.subscribe('/users/queue/messages', onMessagerecevied);
	 });
 }
 
 function onMessagerecevied(payload){
	 
	console.log("message: " +  payload);
 }
 
 function sendMessage(event){
	 event.preventDefault();
	 const name = sendForm.elements['name'].value;
	 const text = sendForm.elements['message'].value;
	 
	 const message={
		 content: text,
         sender: username,
         receiver: name,
         type: "CHAT"
	 }
	 
	 
	 
	 stompClient.send("/app/chat.sendPrivate",{}, JSON.stringify(message));
	 
 }
 
connectForm.addEventListener("submit", connect); 
sendForm.addEventListener("submit", sendMessage);

 
 
 