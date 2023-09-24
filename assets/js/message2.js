// html references 
const chatTab = document.querySelector('#chats-display-btn');
const chatSelector = document.querySelector('#chat-selector');
const chatSelectorList = document.querySelector('#chat-selector-list');
const chatDisplay = document.querySelector('#chat-display');
const chat = document.querySelector('#chat');
const chatBox = document.querySelector('#chat-box');
const mediaQueryMin = window.matchMedia('(min-width: 766px)');
const mediaQueryMax = window.matchMedia('(max-width: 766px)');

// css functionality --------------------------------------------

chatTab.addEventListener('click', ()=>{

    if(chatBox.classList.contains('hidden')){
        chatBox.classList.remove('hidden');
        chatSelector.classList.add('hidden');
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }else{
        chatBox.classList.add('hidden');
        chatSelector.classList.remove('hidden');
        chatSelectorList.scrollTo({top:0, behavior:'smooth'});
    }
    
    
});

const handleChatDisplayWidth = (e)=>{
    if(e.matches){
        console.log('opening at 766px');
        chatBox.classList.remove('hidden');
        chatSelector.classList.remove('hidden'); 
    
    }
   
}

const handleChatSelectorDisplayWidth = (e) =>{
    if(e.matches){
        console.log('closing at 766px');
        chatSelector.classList.add('hidden');
    }
}

mediaQueryMin.addListener(handleChatDisplayWidth);
mediaQueryMax.addListener(handleChatSelectorDisplayWidth);

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

