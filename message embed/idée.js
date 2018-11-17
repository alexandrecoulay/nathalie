const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix = ("!");
bot.on('ready', function () {
    console.log("idée")
  });

function couleur()  {
    return  "#" + Math.floor(Math.random()*16777215).toString(16);
}

bot.on('message', function(msg) {

const args = msg.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

if(command === 'bi'){
    if (!args.length) return msg.channel.send(`Mettre une idée, ${message.author}!`);

    var roleEmbed = new Discord.RichEmbed()            
    .setAuthor(`Nouvelle idée : `)
    .setDescription(args.join(' '))
    .setFooter('Par ' + msg.author.tag, msg.author.avatarURL)
    .setColor(couleur());
    msg.guild.channels.get("513309531204222976").send(roleEmbed);
    msg.delete();
}

});


bot.login(cfg);
