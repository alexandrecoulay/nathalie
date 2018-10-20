const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const prefix = ("!");
bot.on('ready', function () {
    console.log("ftn")
  });

bot.on('message', function(msg) {
    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'ftn'){
        msg.channel.send(`commande en maintenance`);
    }
});









bot.login(token);
