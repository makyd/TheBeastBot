const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const admin = require("./admin")
const games = require("./games")
const infoRequest = require("./infoRequest")
const tempmute = require("./tempmute")
const Troll = require("./Troll")
const vChat = require("./voice")
const Commands = require("./Commands")
const webtest = require("./webtest")

bot.on("ready", () => {
    var member = bot.users.map(u => `${u.username}`)

    var Rname = member[Math.floor(Math.random() * member.length)]
    console.log(Rname)
})




// bot.on('ready', () => {
//     // List servers the bot is connected to
//     console.log("Servers:")
//     bot.guilds.forEach((guild) => {
//         console.log(" - " + guild.name + guild.id)

//         // List all channels
//         guild.channels.forEach((channel) => {
//             console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
//         })
//     })
// })




// {
//     "op"= 4,
//     "d" {
//         "guild.id"("488967175613186058")
//         "channel.id"("488967175613186061")
//         "self.mute"(false),
//         "self.deaf"(false)
//     }
// }

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity('You all while you sleep', { type: "WATCHING" });
});

bot.on('message', message => {
    admin.kickFunction(message);
    admin.reportFunction(message);
    admin.banFunction(message);
    admin.changeName(message, bot);
    games.coinFlip(message);
    infoRequest.serverInfo(message);
    infoRequest.botInfo(message, bot);
    Troll.jay(message);
    Troll.Drew(message);
    vChat.joinChat(message);
    Commands.feelsBad(message);
    // webtest.testFunction(message)
});

// bot.on('message', message => admin.kickFunction(message));
// bot.on('message', message => admin.reportFunction(message));
// bot.on('message', message => admin.banFunction(message));
// bot.on('message', message => admin.changeName(message));
// bot.on('message', message => games.coinFlip(message));
// bot.on('message', message => infoRequest.serverInfo(message));
// bot.on('message', message => infoRequest.botInfo(message, bot));
// bot.on('message', message => Troll.jay(message));
// bot.on('message', message => Troll.Drew(message));

// bot.on('message', async message => vChat.joinChat(message));






bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


});

bot.login(botconfig.token);
