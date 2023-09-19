let stompClient = null;


const onWebSocketClose = ()=>{
    if(stompClient != null){
        stompClient.deactivate();
    }
};

const onConnectSocket = ()=>{
    stompClient.subscribe('/topic/messages', (message)=>{
        showMessage(message.body);
    });
};

const connectWS = () =>{
    stompClient = new StompJs.Client({
        webSocketFactory: () => new WebSocket('ws://localhost:8080/ws')
    });
    stompClient.onConnect = onConnectSocket;
    stompClient.onWebSocketClose = onWebSocketClose;
    stompClient.activate();
};

const sendMessage = () => {
    let txtName = document.querySelector('#txtName');
    let txtMessage = document.querySelector('#txtMessage');
    console.log(txtMessage.value);
    stompClient.publish({
        destination: '/app/send',
        body: JSON.stringify({
            name: txtName.value,
            content: txtMessage.value
        })
    });
    console.log(stompClient);
}

const showMessage = (message)=>{
    const body = JSON.parse(message);
    console.log(body);
    const ULMessages = document.querySelector("#ULMessages");
    const messageLi = document.createElement('li');
    messageLi.innerHTML = `<strong> ${body.name}</strong>: ${body.content}`;
    ULMessages.appendChild(messageLi);
};

document.addEventListener('DOMContentLoaded', ()=>{
    const btnSend = document.querySelector('#btnSend');
    btnSend.addEventListener('click', (e)=>{
        e.preventDefault();
        sendMessage();
    })
    connectWS();
});