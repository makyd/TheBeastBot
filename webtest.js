// const https = require("https")
// const Discord = require("discord.js");
// const botconfig = require("./botconfig.json");

// module.exports = {

// testFunction: function (message) {

//     let prefix = botconfig.prefix;
//     let messageArray = message.content.split(" ");
//     let cmd = messageArray[0];
//     let args = messageArray.slice(1);

//     if (cmd === `${prefix}testy`) {
//         //i need to call to the url its called http.get
//         https.get ('https://api.imgflip.com/', (resp) =>  {
//             resp.setEncoding('utf8') //utf8 english standard encoder
//         resp.on ('data',(chunk)=>{ console.log(chunk)
//             var data = JSON.parse(chunk);
//             message.channel.send(data.url);

//         })

//         });

//     }
// }
// }