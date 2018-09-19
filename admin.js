const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs")

function nameFunction(message, bot, nUser, rUser) {


    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd.toLowerCase() === `${prefix}name`) {

        let rName = rUser[Math.floor(Math.random() * rUser.length)]

        message.delete().catch(o_o => { });
        message.guild.member(nUser).setNickname(rName);


        return;
    }
}
async function ogname(message, nUser, oName) {
    message.guild.member(nUser).setNickname(oName);
}


module.exports = {
    kickFunction: function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}Kick`) {

            let kUser = message.guild.member(message.mentions.users.first() || message.guide.members.get(args[0]));
            if (!kUser) return message.channel.send("Can't find user!");
            let kReason = args.join(" ").slice(22);

            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Fuck off you Pleb");
            if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nope!");

            let kickEmbed = new Discord.RichEmbed()
                .setDescription("~Kick~")
                .setColor("#0461f7")
                .addField("kicked User", `${kUser} with ID ${kUser.ID}`)
                .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
                .addField("kicked In", message.channel)
                .addField("Time", message.createdTimestamp)
                .addField("Reason", kReason);

            let adminbotChannel = message.guild.channels.find(`name`, "adminbot");
            if (!adminbotChannel) return message.channel.send("can't find Booted channel.")

            message.guild.member(kUser).kick(kReason);
            adminbotChannel.send(kickEmbed);

            return;
        }
    },

    reportFunction: function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}report`) {

            //!report @makyd this is reason

            let rUser = message.guild.member(message.mentions.users.first() || message.guide.members.get(args[0]));
            if (!rUser) return message.channel.send("couldn't find user.");
            let reason = args.join(" ").slice(22);

            let reportEmbed = new Discord.RichEmbed()
                .setDescription("Reports")
                .setColor("#0461f7")
                .addField("reported user", `${rUser} with Id: ${rUser.id}`)
                .addField("Reported By", `${message.author} with ID: ${message.author.is}`)
                .addField("channel", message.channel)
                .addField("time", message.createdAt)
                .addField("Reason", reason);

            let adminbotchannel = message.guild.channels.find(`name`, "adminbot");
            if (!adminbotchannel) return message.channel.send("couldn't find channel.");

            message.delete().catch(o_o => { });
            adminbotchannel.send(reportEmbed);



            return;


        }
    },

    banFunction: function (message) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd.toLowerCase() === `${prefix}Ban`) {

            let bUser = message.guild.member(message.mentions.users.first() || message.guide.members.get(args[0]));
            if (!bUser) return message.channel.send("Can't find user!");
            let bReason = args.join(" ").slice(22);

            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Fuck off you Pleb");
            if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nope!");

            let banEmbed = new Discord.RichEmbed()
                .setDescription("~Hammer Time~")
                .setColor("#000105")
                .addField("Banned User", `${bUser} with ID ${bUser.ID}`)
                .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
                .addField("Banned In", message.channel)
                .addField("Time", message.createdTimestamp)
                .addField("Reason", bReason);

            let adminbotchannel = message.guild.channels.find(`name`, "adminbot");
            if (!adminbotchannel) return message.channel.send("can't find Booted channel.")

            message.guild.member(bUser).ban(bReason);
            adminbotchannel.send(banEmbed);

            return;
        }
    },

    changeName: async function (message, bot) {

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        if (cmd === `${prefix}name`) {


            let nUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!nUser) return message.channel.send("Can't find user!");
            oName = nUser.displayName
            let rUser = bot.users.map(u => `${u.username}`)


            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Fuck off you Pleb");
            if (nUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Nope!");

            // setInterval(function(){nameFunction(message)}, 2000)  also works

            var startF = setInterval(() => nameFunction(message, bot, nUser, rUser), 3000)
            setTimeout(function () { clearInterval(startF) }, 30000)
            setTimeout(function () { ogname(message, nUser, oName) }, 36000)
        }
    }

}
