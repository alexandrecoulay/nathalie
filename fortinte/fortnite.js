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
        if (!args.length) return msg.channel.send('**Mettre : `!ftn [ pc | xbox | psn ] <pseudo>` **' );
        const platform = args[0]
        const epic_nickname = args[1]
        msg.channel.send(`https://masterfortnite.com/player/${platform}/${epic_nickname}`);
    }
});









bot.login(token);
