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
- Copy the code from index.html file and paste it in your code
```
<div class="placeholders">
        <div class="chat-bots">
            <div id="placeholder2" class="placeholder"></div>
            <div class="model-name">Model: ChatOpenAI</div>
        </div>
        <div class="chat-bots">
            <div id="placeholder1" class="placeholder"></div>
            <div class="model-name">Model: GPT4ALL</div>
        </div>
    </div>
    <script src="http://localhost:8080/bundle.js"></script>
    <script type="text/javascript">
        (() => {
            new DocAiAssist(document.getElementById('placeholder1'), { model_type: "GPT4All" });
            new DocAiAssist(document.getElementById('placeholder2'), { model_type: "ChatOpenAI" })
            //DocAiAssist.init(document.getElementById('placeholder'));
        })();

    </script>
```
- Make sure to update the src attribute of the <script> tag to point to the correct location of your bundled bundle.js file if it's hosted on a different server.
