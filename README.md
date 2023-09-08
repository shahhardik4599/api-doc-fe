# api-doc-fe
This repository contains code for a chatbot interface. To set up your environment and run the code locally, follow these steps:

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed. You can download it from the official website.

## Installation

Install the required Node.js packages using npm:

```npm install```

# To Build
```npx webpack```

# To start a local development server, use:
```npx webpack-dev-server```
You can see chatbot preview on http://localhost:8080/

# To run this chatbot on other website
- Copy the script inside index.html file and paste it in your code

- Make sure to update the src attribute of the <script> tag to point to the correct location of your bundled bundle.js file if it's hosted on a different server.

# `DocAiAssist` Constructor

The `DocAiAssist` class is the core component of this chatbot implementation. It is used to create and initialize an instance of the chatbot within your web application. Below, you'll find information about the constructor parameters and how to use it.

### Constructor Parameters

- `docElement` (HTMLElement): The HTML element where the chatbot interface will be embedded. You should provide the HTML element where you want the chatbot to appear on your web page.

- `params` (Object, optional): An optional parameter object that allows you to customize the chatbot's behavior. It can include configuration options such as the chatbot's model type.

### Example Usage

```javascript
// Import the DocAiAssist class
import DocAiAssist from './DocAiAssist';

// Specify the HTML element where you want the chatbot to appear
const chatbotContainer = document.getElementById('chatbot-container');

// Optional configuration parameters (you can omit this if not needed)
const chatbotParams = {
    model_type: "GPT4All"
};

// Create an instance of the DocAiAssist chatbot in index.html
const chatbot = new DocAiAssist(chatbotContainer, chatbotParams);
