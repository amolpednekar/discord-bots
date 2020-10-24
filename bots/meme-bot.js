const Discord = require('discord.js')
const auth = require('../auth.json')
const conditions = require('../constants/meme-bot.json')
const client = new Discord.Client()

function init(){
    // Post a "connected" message when the bot starts
    client.on('ready', () => {
        console.log("Connected as " + client.user.tag)
    })
    
    // Ping-pong test
    client.on('message', receivedMessage => {
        if (receivedMessage.content === 'ping') {
            receivedMessage.reply('Pong!');
        }
    });
    
    // Respond to user's phrases
    client.on('message', receivedMessage => {
        const messages = conditions["received-phrases"]
        const reactions = conditions["positive-reacts"]
        const randomizer = Math.floor(Math.random() * reactions.length); 
        if(messages.includes(receivedMessage.content)){
            receivedMessage.reply(reactions[randomizer])
            receivedMessage.react('❤️')
        }
    
    })
    
    // Reply whenever this bot is tagged
    client.on('message', (receivedMessage) => {
        // Prevent bot from responding to its own messages
        if (receivedMessage.author == client.user) {
            return
        }

        // Check if the bot's user was tagged in the message
        // We need to remove a '!' in the message, which comes if the user has a nickname
        var filteredMessage = receivedMessage.content.replace('<@!', '<@');
        if (filteredMessage.includes(client.user.toString())) {
            // Send acknowledgement message
            receivedMessage.channel.send("What do you want from me, " +
                receivedMessage.author.toString() + "? Do your goddamn work.")
        }
    })
    
    client.login(auth["meme-bot-token"])
}

module.exports = { init }