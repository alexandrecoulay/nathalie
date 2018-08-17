const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
bot.on('ready', function () {
    console.log("crole")
  });

function couleur()  {
    return  "#" + Math.floor(Math.random()*16777215).toString(16);
}
    bot.on('message', function(message) {
    

const prefix = ("!");
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'crole') {

    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply('tu n\'as pas les permissions requises . ');
    
    if (!args.length) return message.channel.send(`Mettre un nom de rôle, ${message.author}!`);
    
    message.member.guild.createRole({
    name: `${args.}`,
    color: couleur(),
  })
    var roleEmbed = new Discord.RichEmbed()            
    .setAuthor('Nouveau rôle :')
    .setDescription(`Le role **${args}** a bien été ajouté`)
    .setFooter('Par ' + message.author.tag, message.author.avatarURL)
    .setColor(couleur());
    message.guild.channels.get("473493510092357633").send(roleEmbed);
        }
});


bot.login(cfg);
