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


 
document.addEventListener('DOMContentLoaded', async ()=>{
    //get
    const url="http://127.0.0.1:8080/users"
    const data = await fetch(url);
    const dataxd = await data.json();
    console.log(dataxd);

    //post

    const user =     {
        "username": "alfredogodofredo",
        "firstname": "leonardo",
        "email": "fred99@gmail.com"
    }
    
    console.log(JSON.stringify(user));


/*     try {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://127.0.0.1:8080');


        const res = await fetch(url, {
            mode:"cors",
            method: "POST",
            headers: headers,
            "Content-Type": 'application/json',
            body: JSON.stringify(user)
        })

    
        //const result = await response.json();
        //console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      } */
    
});


const createUserForm = document.forms['testing-post'];

createUserForm.addEventListener("submit", async (e)=>{
    e.preventDefault() 
    

    const user ={
        username: createUserForm.elements['username-post'].value,
        firstname: createUserForm.elements['name-post'].value,
        email: createUserForm.elements['email-post'].value
    }

    const headers = new Headers();
    
    const url="http://127.0.0.1:8080/users"
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://127.0.0.1:8080');

    const res = await fetch(url, {
        mode:"cors",
        method:"POST",
        headers: headers,
        body: JSON.stringify(user)
    });

    const result = await res.json();
    console.log(result);
    
} )