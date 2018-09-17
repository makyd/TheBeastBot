// const Discord = require("discord.js");
// const ms = require("ms");

// module.exports = {
//     function nameFunction(message) {
//         if(message.author.bot) return;
//     if(message.channel.type === "dm") return;

    
//     let prefix = botconfig.prefix;
//     let messageArray = message.content.split(" ");
//     let cmd = messageArray[0];
//     let args = messageArray.slice(1);

//     if(cmd === `${prefix}name`){

//         let nUser = message.guild.member(message.mentions.users.first() || message.guide.members.get(args[0]));
//         if(!nUser) return message.channel.send("Can't find user!");
//         let nReason = args.join(" ").slice(22);

//         if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Fuck off you Pleb");
//         if(nUser.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Nope!");

//         let nameEmbed = new Discord.RichEmbed()
//             .setDescription("Trollol")
//             .setColor("#000105")
//             .addField("Changed User", `${nUser} with ID ${nUser.ID}`)
//             .addField("Changed by By", `<@${message.author.id}> with ID ${message.author.id}`)
//             .addField("Named", nReason);

//             let adminbotchannel = message.guild.channels.find(`name`, "adminbot");
//             if(!adminbotchannel) return message.channel.send("can't find Booted channel.")

//             message.delete().catch(o_o=>{});
//             message.guild.member(nUser).setNickname(nReason);
//             adminbotchannel.send(nameEmbed);

//             return;


//     }

// }
