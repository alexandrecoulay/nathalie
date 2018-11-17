const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix  = ("!");
bot.on('ready', function () {
	console.log("Count !!!")
  });

bot.on('message', message => {
let roledev = message.guild.roles.find("name", "dev-bot-discord").members.size;
let roleabo = message.guild.roles.find("name", "abonné").members.size;
if (message.content === prefix + "member"){
	message.channel.send(`Nombre de membre :  **${message.guild.memberCount}**`, true)
	message.channel.send(`Nombre de membre avec le role dev-bot-discord :  **${roledev}**`, true)
	message.channel.send(`Nombre d'abonné' :  **${roleabo}**`, true)
	}
});



//bot.login(cfg);
