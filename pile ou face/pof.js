const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
bot.on('ready', function () {
    console.log("pof")
  }); 


  bot.on('message', function(message) {
const prefix = ("!");
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'flip'){
     const flip = Math.floor(Math.random() * 2) == 0 ? "face" : "pile"
    let gagnant = message.guild.roles.find("name", "gagant");
    let perdant = message.guild.roles.find("name", "perdant");
    if (!args.length) return message.channel.send(`Mettre pile ou face, ${message.author}!`);

    message.channel.send(`Result: **${flip}**!`);
    if (flip == args){
        message.channel.send("gagné\ntu as le role gagnant");
        message.member.addRole(gagnant).catch(console.error);
        message.member.removeRole(perdant).catch(console.error);

    } else {
        message.channel.send("perdu\ntu as le role perdant");
        message.member.addRole(perdant).catch(console.error);
        message.member.removeRole(gagnant).catch(console.error);
    }
    
  }  

});



bot.login(cfg);
