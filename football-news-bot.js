const Discord = require('discord.js')
const auth = require('./auth.json')
const client = new Discord.Client()

function init(){
    client.on('ready', () => {
        console.log("Connected as " + client.user.tag)
    })
    
    client.on('message', msg => {
        if (msg.content === 'Football') {
            msg.reply('Bloody Hell!');
        }
    });
    
    
    client.login(auth["football-news-token"])
}

module.exports = { init }
