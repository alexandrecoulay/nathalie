const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('../index.json');
const prefix  = ("!");
bot.on('ready', function () {
	console.log("Count !!!")
  });
  

function couleur()  {
	return  "#" + Math.floor(Math.random()*16777215).toString(16);
  }


bot.on('message', message => {

if (message.content === prefix + "member"){
	message.channel.send(`Nombre de membre :  **${message.guild.memberCount}**`, true);
	}
});



bot.login(cfg.token);