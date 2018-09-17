const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

module.exports = {

    joinChat: async function (message) {
        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);


        if (cmd === `${prefix}join`) {

            const voice = await message.member.voiceChannel
            voice.join();

        }
    }

}