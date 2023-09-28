// html references 
const chatTab = document.querySelector('#chats-display-btn');
const chatSelector = document.querySelector('#chat-selector');
const chatSelectorList = document.querySelector('#chat-selector-list');
const chatDisplay = document.querySelector('#chat-display');
const chatDisplayPrivate = document.querySelector('#chat-display-private');
const chat = document.querySelector('#chat');
const chatBox = document.querySelector('#chat-box');
const chatBoxPrivate = document.querySelector('#chat-box-private');
const mediaQueryMin = window.matchMedia('(min-width: 766px)');
const mediaQueryMax = window.matchMedia('(max-width: 766px)');
let activeChatView = 'public';

// css functionality --------------------------------------------

chatTab.addEventListener('click', ()=>{

    
    if(chatBox.classList.contains('hidden') && activeChatView ==='public'){
        chatBox.classList.remove('hidden');
        chatBoxPrivate.classList.add('hidden');
        chatSelector.classList.add('hidden');
        console.log('public chat hidden && active public')
        // chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }else if(chatBoxPrivate.classList.contains('hidden') && activeChatView === 'private'){
        chatBoxPrivate.classList.remove('hidden');
        chatBox.classList.add('hidden');
        chatSelector.classList.add('hidden');
        console.log('public private hidden && active private')
    }else if(activeChatView === 'public' || activeChatView === 'private' && chatSelector.classList.contains('hidden') ){
        chatBox.classList.add('hidden');
        chatBoxPrivate.classList.add('hidden');
        chatSelector.classList.remove('hidden');
        chatSelectorList.scrollTo({top:0, behavior:'smooth'});
        console.log('chat selector hidden && active public or private')
    }else{
        chatSelector.classList.add('hidden');
    }
    
    
    /* else{
       
    } */
    
    
});

const handleChatDisplayWidth = (e)=>{
    if(e.matches){
        console.log('opening at 766px');
        chatSelector.classList.remove('hidden');
        
        if(activeChatView === 'public') chatBox.classList.remove('hidden');
        if(activeChatView === 'private') chatBoxPrivate.classList.remove('hidden');
    
    }
   
};

const handleChatSelectorDisplayWidth = (e) =>{
    if(e.matches){
        console.log('closing at 766px');
        chatSelector.classList.add('hidden');
    }
};

mediaQueryMin.addEventListener("change",handleChatDisplayWidth);
mediaQueryMax.addEventListener("change",handleChatSelectorDisplayWidth);

screenWidth = window.innerWidth;
console.log(screenWidth);
if(screenWidth < 766){
    chatBox.classList.add('hidden');
}

// gonna use this to scroll to bottom
chatDisplay.scrollTop = chatDisplay.scrollHeight;
//===============   

//--------------------------------------------------------------------

// message logic 

const inputChat = document.forms["input-chat"];
const inputChatPrivate = document.forms["input-chat-private"];
let stompClient = null;
let username = "Leonardo";
/* let id = "1"; */
console.log("hola" + sessionUser);




const onConnected = ()=>{

    stompClient.subscribe("/topic/public", onMessageReceived);  
    stompClient.subscribe("/users/queue/messages", onPrivateMessageReceived);
    

    stompClient.send("/app/chat.addUser",
					{},
					JSON.stringify({sender: username, type: 'JOIN'})
					);
};

const onError = ()=>{
    console.log("websocket connection failed");
    const alertElement = document.createElement('li');
    alertElement.classList.add('alert');
    alertElement.classList.add('alert-danger');
    const textLi = "La conexión con el servidor a fallado";
    alertElement.innerText = textLi;

    chatDisplay.appendChild(alertElement);
};

const onMessageReceived = (payload)=>{
    const message = JSON.parse(payload.body);
    if(message.type != "CHAT") return
    const messageElement = document.createElement('li');
    messageElement.classList.add("d-flex");
    messageElement.classList.add("justify-content-between");
    messageElement.classList.add("mb-4");

    const imageElement = document.createElement('img');
    imageElement.classList.add("rounded-circle");
    imageElement.classList.add("d-flex");
    imageElement.classList.add("align-self-start");
    imageElement.classList.add("me-3");
    imageElement.classList.add("shadow-1-strong");
    imageElement.width = "60";
    imageElement.src = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp";

    if(message.sender != username){
        messageElement.appendChild(imageElement);
    }

    const cardElement = document.createElement('div');
    cardElement.classList.add("card");
    cardElement.classList.add("mask-custom");
    if(message.sender != username){
        cardElement.classList.add("message-incoming");
    }else{
        cardElement.classList.add("message-sent");
    }
   

    const headerElement = document.createElement('div');
    headerElement.classList.add('card-header');
    headerElement.classList.add('d-flex');
    headerElement.classList.add('justify-content-between');
    headerElement.classList.add('message-header');
    headerElement.style = "border-bottom: 1px solid rgba(255,255,255,.3);";

    const nameElement = document.createElement('p');
    nameElement.classList.add('fw-bold');
    nameElement.classList.add('mb-0');
    nameElement.innerText = message.sender;

    headerElement.appendChild(nameElement);

    const timeElement = document.createElement('p');
    timeElement.classList.add('text-dark');
    timeElement.classList.add('small');
    timeElement.classList.add('mb-0');
    timeElement.innerText = "12 mins ago";  

    headerElement.appendChild(timeElement);
    cardElement.appendChild(headerElement);

    const textElement = document.createElement('div');
    textElement.classList.add("message-body");

    const textMessage = document.createElement('p');
    textMessage.classList.add('mb-0');
    textMessage.innerText = message.content;

    
    textElement.appendChild(textMessage);
    cardElement.appendChild(textElement);
    messageElement.appendChild(cardElement);
    if(message.sender == username){
        messageElement.appendChild(imageElement);
        imageElement.style = "margin-left: 10px";
    }   
    chatDisplay.appendChild(messageElement);

    chatDisplay.scrollTo({top:chatDisplay.scrollHeight, behavior:'smooth'});
};

const onPrivateMessageReceived = (payload)=>{
    const message = JSON.parse(payload.body);
    if(message.type != "CHAT") return
    const messageElement = document.createElement('li');
    messageElement.classList.add("d-flex");
    messageElement.classList.add("justify-content-between");
    messageElement.classList.add("mb-4");

    const imageElement = document.createElement('img');
    imageElement.classList.add("rounded-circle");
    imageElement.classList.add("d-flex");
    imageElement.classList.add("align-self-start");
    imageElement.classList.add("me-3");
    imageElement.classList.add("shadow-1-strong");
    imageElement.width = "60";
    imageElement.src = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp";

    if(message.sender != username){
        messageElement.appendChild(imageElement);
    }

    const cardElement = document.createElement('div');
    cardElement.classList.add("card");
    cardElement.classList.add("mask-custom");
    if(message.sender != username){
        cardElement.classList.add("message-incoming");
    }else{
        cardElement.classList.add("message-sent");
    }
   

    const headerElement = document.createElement('div');
    headerElement.classList.add('card-header');
    headerElement.classList.add('d-flex');
    headerElement.classList.add('justify-content-between');
    headerElement.classList.add('message-header');
    headerElement.style = "border-bottom: 1px solid rgba(255,255,255,.3);";

    const nameElement = document.createElement('p');
    nameElement.classList.add('fw-bold');
    nameElement.classList.add('mb-0');
    nameElement.innerText = message.sender;

    headerElement.appendChild(nameElement);

    const timeElement = document.createElement('p');
    timeElement.classList.add('text-dark');
    timeElement.classList.add('small');
    timeElement.classList.add('mb-0');
    timeElement.innerText = "12 mins ago";  

    headerElement.appendChild(timeElement);
    cardElement.appendChild(headerElement);

    const textElement = document.createElement('div');
    textElement.classList.add("message-body");

    const textMessage = document.createElement('p');
    textMessage.classList.add('mb-0');
    textMessage.innerText = message.content;

    
    textElement.appendChild(textMessage);
    cardElement.appendChild(textElement);
    messageElement.appendChild(cardElement);
    if(message.sender == username){
        messageElement.appendChild(imageElement);
        imageElement.style = "margin-left: 10px";
    }   
    chatDisplayPrivate.appendChild(messageElement);

    chatDisplayPrivate.scrollTo({top:chatDisplayPrivate.scrollHeight, behavior:'smooth'});
};



const sendMessage = (message)=> {
    if(message && stompClient){
        const chatMessage = {
            sender: username,
            content: message,
            type: 'CHAT'
        };
		stompClient.send(
			'/app/chat.sendMessage',
			{},
			JSON.stringify(chatMessage)
		);
        inputChat.elements['message-text'].value = "";
    }
};

const sendPrivateMessage = (message)=>{
    if(message && stompClient){
        const chatMessage = {
            sender:username,
            receiver: "jime",
            content:message,
            type: 'CHAT'
        };
        stompClient.send(
            '/app/chat.sendPrivate',
            {},
            JSON.stringify(chatMessage)
        );
        inputChatPrivate.elements['message-text-private'].value ="";
    }
}

const handleMessageInput = (e)=>{
    e.preventDefault();

    sendMessage(inputChat.elements['message-text'].value);

    
};

const handlePrivateMessage = (e) =>{
    e.preventDefault();
    sendPrivateMessage(inputChatPrivate.elements['message-text-private'].value);
}

const handleSelector = (e)=>{
    const target = e.target.tagName;
    let itemName;
    
    if(target === "P" || target === "IMG"){
        const parentDiv = e.target.parentNode;
        if(parentDiv.tagName === "DIV"){
            const parentLi = parentDiv.parentNode;
            itemName = parentLi.getAttribute('name');
        }
    }
    if(target === "DIV"){
        const parentLi = e.target.parentNode;
        itemName = parentLi.getAttribute('name');
    }

    if(target === "LI") itemName = e.target.getAttribute('name');

    if(itemName){
        console.log(itemName);
    }

    if(itemName !== "public-chat") {
        chatBox.classList.add('hidden');
        chatBoxPrivate.classList.remove('hidden');
        activeChatView = 'private';
        if(window.innerWidth < 766){
            console.log('hide');
            chatSelector.classList.add('hidden');
        }
    }else{
        chatBoxPrivate.classList.add('hidden');
        chatBox.classList.remove('hidden');
        activeChatView = 'public';
        if(window.innerWidth < 766){
            console.log('hide');
            chatSelector.classList.add('hidden');
        }
    }




}

inputChat.addEventListener("submit", handleMessageInput);
inputChatPrivate.addEventListener("submit", handlePrivateMessage);
chatSelectorList.addEventListener("click", handleSelector);


// wait for dom to load 
window.addEventListener('DOMContentLoaded', () => {
    try{
        
        const socket = new SockJS('http://127.0.0.1:8080/ws');
        stompClient = Stomp.over(socket);
    
        stompClient.connect({username:username}, onConnected, onError);
    }catch(e){
        console.log(e);
    }

    const listItems = document.querySelectorAll('li');





});