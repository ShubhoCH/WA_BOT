# WA BOT

Interact with customers via WhatsApp!

## Installation

Clone the project from github then go to project directory, inside the project and type the following command to install all the required dependencies for the project!

```bash
npm i
```

## How to Use:
 
In the app.js File call the function with the requred payload_content and Receiver's Phno.
```bash
Karix.send(<payload_content>, <phno>)
```
## Note:
Make sure you create your own .env file and all the required Credentials:
```bash
URI=<Your_URI>
KARIX_ACCOUNT_TOKEN=<Your_Token>
SENDER_PHNO=<Sender_Phno>
WEB_HOOK_ID=<Tour_WebHookID>
CHANNEL=<Your_Channel>
```