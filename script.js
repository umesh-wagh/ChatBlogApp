const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const sendButton = document.getElementById('send-button');
var arrList=[];
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        appendMessage(message);
        messageInput.value = '';
        arrList.push(message);
        localStorage.setItem("message-list", JSON.stringify(arrList));
    }
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendButton.click();
    }
});

function appendMessage(message) {
    const messageItem = document.createElement('div');
    messageItem.classList.add('message');
    messageItem.textContent = message;
    const timestamp = new Date().toLocaleString();
    messageItem.innerHTML=`<span> <p>${message}</p>
    <small>${timestamp}</small></span>
    
`;
    messageList.appendChild(messageItem);

    
}