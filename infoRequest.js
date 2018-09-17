const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

module.exports = {
    serverInfo: function(message) {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("server info")
            .setColor("#15f153")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("created on", message.guild.createdAt)
            .addField("you joined", message.member.joinedAt)

            return message.channel.send(serverembed);
        


        return;
    }
},
    botInfo: function(message, bot) {

        if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
    
        .setAuthor(message.author.username)
        .setDescription("Bot Information")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .addField("Who's the beast?", "MakyD")
    
            return message.channel.send(botembed);
        }
    }
}