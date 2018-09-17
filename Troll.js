const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")


module.exports = {


jay: function(message) {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd.toLowerCase() === `${prefix}jay`){
    

        message.delete().catch(o_o=>{});
        message.channel.send({
            file: "C:/Users/makyd/Desktop/thebeastbot/jgay.png"});
    
    
    
        return;
    
    
       }
    },


Drew: function(message) {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
    
        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
    
        if(cmd === `${prefix}Drew`){
        
    
            message.delete().catch(o_o=>{});
            message.channel.send({
                file: "C:/Users/makyd/Desktop/thebeastbot/Drewt.jpg"});
        
        
        
            return;
        
        
           }
        }
}