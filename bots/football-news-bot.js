const Discord = require('discord.js')
const auth = require('../auth.json')
const conditions = require('../constants/footy-bot.json')
const client = new Discord.Client()

function init() {
    client.on('ready', () => {
        console.log("Connected as " + client.user.tag)
    })

    client.on('message', msg => {
        if (msg.content === 'Football') {
            msg.reply('Bloody Hell!');
        }
    });

    // Respond to user's phrases
    client.on('message', receivedMessage => {
        const messages = conditions["user-phrase"]
        const reactions = conditions["positive-reacts"]
        const randomizer = Math.floor(Math.random() * reactions.length);
        if (messages.includes(receivedMessage.content)) {
            receivedMessage.reply(reactions[randomizer])
            receivedMessage.react('❤️')
        }

    })

    client.login(auth["football-news-token"])
}

module.exports = { init }
