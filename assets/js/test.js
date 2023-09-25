console.log("hello");
const form = document.forms['form'];
const formConnect = document.forms['connect'];
const chat = document.getElementById('chat');
let stompClient = null;
let username = null;
let receiver = null;



const handleConnection = (e) =>{
    e.preventDefault();

    username = formConnect.elements['user'].value;
    receiver = formConnect.elements['receiver'].value;

    // Create a SockJS connection
    const socket = new SockJS('http://127.0.0.1:8080/ws');

    // Create a STOMP client
    stompClient = Stomp.over(socket);

    // Connect to the WebSocket server
    stompClient.connect({}, function (frame) {
        // Handle successful connection
        console.log('Connected to WebSocket');

        stompClient.send("/app/private.addUser",
        {},
        JSON.stringify({sender: username, type: 'JOIN'})
        );        
        // Subscribe to a specific destination (e.g., private chat queue)
        stompClient.subscribe('/user/queue/private', function (message) {
            // Handle incoming messages
            const chatMessage = JSON.parse(message.body);
            // Display the message in your UI
            const text = document.createElement('p');
            text.innerText = chatMessage;
            chat.appendChild(text);
            console.log('Received message:', chatMessage);
        });
    });
}

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form.elements['text'].value);
    console.log(username);
    const text = form.elements['text'].value;
    const message = {
        sender: username,
        content: text,
        receiver: receiver

    }

    stompClient.send('/app/private-chat', {}, JSON.stringify(message));
}


form.addEventListener("submit", handleSubmit);
formConnect.addEventListener("submit", handleConnection);