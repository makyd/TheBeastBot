const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")


module.exports = {


    jay: function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}jay`) {


            //message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/jgay.png"
            });
            return;


        }
    },

    Drew: function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}drew`) {


           // message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/Drewt.jpg"
            });
            return;


        }
    },

    Sam : function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}sam`) {


            //message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/sam.jpg"
            });
            // message.channel.send({
            //     file: "C:/Users/maky_/Desktop/thebeastbot-master/sam1.jpg"
            // });
            return;


        }
    },

    Naf : function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}naf`) {


            //message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/naf.jpg"
            });
            // message.channel.send({
            //     file: "C:/Users/maky_/Desktop/thebeastbot-master/naf1.jpg"
            // });
            return;


        }
    },

    Kirk : function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}kirk`) {


            //message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/kirk.jpg"
            });
            return;


        }
    },

    May : function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}may`) {


            //message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/mayo.jpg"
            });
            return;


        }
    },

    Tubz : function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}tubbz`) {


            //message.delete().catch(o_o => { });
            // message.channel.send({
            //     file: "C:/Users/maky_/Desktop/thebeastbot-master/tubz.jpg"
            // });

            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/tubz1.jpg"
            });
            return;


        }
    },
    
    Maky : function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}deadly`) {

            message.delete().catch(o_o => { });
            message.channel.send({
                file: "C:/Users/maky_/Desktop/thebeastbot-master/matt3.jpg"
            });
            return;


        }
    }
}