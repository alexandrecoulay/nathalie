const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
bot.on('ready', function () {
    console.log("help")
  });

function couleur()  {
    return  "#" + Math.floor(Math.random()*16777215).toString(16);
}

bot.on('message', function(msg) {
    if (msg.content.startsWith("!help") ){
        msg.channel.send("<#513309562724679690>");

    }
});

bot.login(cfg);
