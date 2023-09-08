import ejs from 'ejs';
import chatBoxTemplate from "./templates/chat-box.ejs.html";
import userMessageTemplate from "./templates/user-message.ejs.html";
import botMessageTemplate from "./templates/bot-message.ejs.html";
import botMessageTemplate2 from "./templates/bot-message2.ejs.html";
import "./css/styles.css";

export default class DocAiAssist {
    constructor(docElement, params) {
        this.params = params || {
            model_type: "GPT4All"
        };
        this.init(docElement)
    }

    init(domElement = document.body) {
        const chatbox = ejs.render(chatBoxTemplate);
        domElement.innerHTML += chatbox;

        const chatbotButton = domElement.querySelector(".chatbot-button");
        const chatbotPopup = domElement.querySelector(".chatbot-popup");
        const chatBox = domElement.querySelector(".chat-box");
        const userInput = domElement.querySelector(".user-input");
        const sendButton = domElement.querySelector(".send-button");
        const errorMessage = domElement.querySelector(".error-message");

        const addUserMessage = (message) => {
            const userMessage = ejs.render(userMessageTemplate, { message });
            chatBox.innerHTML += userMessage;
        };

        const addBotMessage1 = (message1) => {
            const botMessage1 = ejs.render(botMessageTemplate, { message1 });
            chatBox.innerHTML += botMessage1;
        };

        let chatbotOpen = false;

        // Function to toggle chatbot popup
        const toggleChatbotPopup = () => {
            chatbotOpen = !chatbotOpen;
            if (chatbotOpen) {
                chatbotPopup.style.display = "block";
            } else {
                chatbotPopup.style.display = "none";
            }
        };

        chatbotButton.addEventListener("click", () => {
            // Toggle the chatbot popup
            toggleChatbotPopup();
        });

        sendButton.addEventListener("click", async () => {
            const userMessage = userInput.value.trim();
            sendButton.disabled = true;

            if (userMessage !== "") {
                addUserMessage(userMessage);

                // Create the loader element
                const loader = document.createElement('div');
                loader.className = 'loader';
                chatBox.appendChild(loader);

                try {
                    let apiUrl;
                    if (this.params.model_type === "GPT4All") {
                        apiUrl = `http://127.0.0.1:8000/api/web/generate?query=${userMessage}&model_type=GPT4All`;
                    } else if (this.params.model_type === "ChatOpenAI") {
                        apiUrl = `http://127.0.0.1:8000/api/web/generate?query=${userMessage}&model_type=ChatOpenAI`;
                    }

                    const apiResponse = await fetch(apiUrl, {
                        method: 'GET',
                        headers: [],
                    });

                    if (apiResponse.ok) {
                        const responseData = await apiResponse.json();
                        sendButton.disabled = false;
                        const botResponse = responseData.message;

                        // Remove the loader
                        chatBox.removeChild(loader);

                        addBotMessage1(botResponse);
                    } else {
                        console.error('API request failed');
                    }
                } catch (error) {
                    console.error('API request error', error);
                }

                userInput.value = "";
            } else {
                errorMessage.textContent = "Please enter a message.";
            }
        });

        // Event handler for user input
        userInput.addEventListener("input", () => {
            errorMessage.textContent = "";
            sendButton.disabled = userInput.value.trim() === "";
        });

    }
};
