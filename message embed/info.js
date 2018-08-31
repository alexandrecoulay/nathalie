const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('../index.json');
bot.on('ready', function () {
    console.log("info")
  }); 

  bot.on('message', function(message) {
    const prefix = ("!");
if (message.content === prefix + "info"){
    message.channel.send({embed: {
        title: "Voici les informations sur Alexpgm",
        color: 0x18A0AE,
        description: "Le site web : https://alexpgm.000webhostapp.com \n La chaîne youtube : https://www.youtube.com/c/alexpgm \n Le twitter : https://twitter.com/Alexpgm1?lang=fr \n L'application : en cours",
            }
        })
    }


})


bot.login(cfg.token);