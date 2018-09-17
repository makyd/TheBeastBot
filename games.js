const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

module.exports = {
    coinFlip: function(message) {
        if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd === `${prefix}cointoss`){

        message.channel.send(((Math.floor(Math.random()*2)  +1) % 2 == 0) ? "Heads" : "Tails");
        return;
      }
    }
}