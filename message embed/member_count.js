const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix  = ("!");
bot.on('ready', function () {
	console.log("Count !!!")
  });

bot.on('message', message => {

if (message.content === prefix + "member"){
	message.channel.send(`Nombre de membre :  **${message.guild.memberCount}**`, true);
	}
});



bot.login(cfg);
