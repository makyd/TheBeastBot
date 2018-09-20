const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")


module.exports = {

    // !fbm
    feelsBad: function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}fbm`) {


            message.delete().catch(o_o => { });
            message.channel.send({
                file: "../phill.jpg"
            });



            return;


        }
    }
}