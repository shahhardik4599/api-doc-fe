import ejs from 'ejs';

document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.getElementById("chatbot-button");
    const chatWindow = document.getElementById("chatbot-popup");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const errorMessage = document.getElementById("error-message");

    // Function to render an EJS template with dynamic data
    function renderTemplate(templateName, data) {
        const template = require(`./templates/${templateName}.ejs`);
        return ejs.render(template, data);
    }

    // Function to add a message to the chat box
    function addMessage(sender, messageText, messageClass) {
        const data = {
            messageText,
            messageClass,
        };

        const messageHTML = renderTemplate("message", data);
        chatBox.innerHTML += messageHTML;
    }

    // Toggle chat window visibility when the chatbot button is clicked
    chatbotButton.addEventListener("click", function () {
        if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
            chatWindow.style.display = "block";
        } else {
            chatWindow.style.display = "none";
        }
    });

    // Send user message to the chat
    function sendMessage() {
        const userMessage = userInput.value.trim();

        if (userMessage !== "") {
            addMessage("You", userMessage, "user-message");

            // Display the loader
            addMessage("ChatBot", "Loading...", "bot-message");

            // Simulate an API response after a delay (replace with actual API call)
            setTimeout(() => {
                const botResponse = "This is a sample response from the chatbot.";
                addMessage("ChatBot", botResponse, "bot-message");
            }, 1000);

            userInput.value = "";
            sendButton.disabled = true;
            errorMessage.textContent = "";
        }
    }

    // Event listener for sending a message when the send button is clicked
    sendButton.addEventListener("click", function () {
        sendMessage();
    });

    // Event listener for handling user input
    userInput.addEventListener("input", function () {
        const userMessage = userInput.value.trim();

        if (userMessage === "") {
            sendButton.disabled = true;
            errorMessage.textContent = "Message cannot be empty.";
        } else if (/^\s+$/.test(userMessage)) {
            sendButton.disabled = true;
            errorMessage.textContent = "Message cannot contain only whitespace.";
        } else {
            sendButton.disabled = false;
            errorMessage.textContent = "";
        }
    });

    // Event listener for handling user input using the Enter key
    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevent the default form submission
            sendMessage(); // Call sendMessage function when Enter is pressed
        }
    });
});
