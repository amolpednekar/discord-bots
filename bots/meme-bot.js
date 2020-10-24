const Discord = require('discord.js')
const auth = require('./auth.json')
const conditions = require('./conditions.json')
const client = new Discord.Client()

function init(){
    client.on('ready', () => {
        console.log("Connected as " + client.user.tag)
    })
    
    client.on('message', receivedMessage => {
        if (receivedMessage.content === 'ping') {
            receivedMessage.reply('Pong!');
        }
    });
    
    client.on('message', receivedMessage => {
        const messages = conditions["received-phrases"]
        const reactions = conditions["positive-reacts"]
        const randomizer = Math.floor(Math.random() * reactions.length); 
        if(messages.includes(receivedMessage.content)){
            receivedMessage.reply(reactions[randomizer])
            receivedMessage.react('❤️')
        }
    
    })
    
    client.on('message', (receivedMessage) => {
        // Prevent bot from responding to its own messages
        if (receivedMessage.author == client.user) {
            return
        }
        var filteredMessage = receivedMessage.content.replace('<@!', '<@');
        // Check if the bot's user was tagged in the message
        if (filteredMessage.includes(client.user.toString())) {
            // Send acknowledgement message
            receivedMessage.channel.send("What do you want from me, " +
                receivedMessage.author.toString() + "? Do your goddamn work.")
        }
    })
    
    client.login(auth["meme-bot-token"])
}

module.exports = { init }