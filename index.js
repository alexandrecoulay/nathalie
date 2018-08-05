const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix = ("!");
bot.on('ready', function () {
  console.log("c'est partie !!!")
  bot.user.setActivity('manger des chips').catch(console.error)
});
function couleur()  {
  return  "#" + Math.floor(Math.random()*16777215).toString(16);
}

const Google = require('./google');
const kick = require('./kick et ban/kick');
const ban = require('./kick et ban/ban');
const heure = require('./heure');
const roleabo = require('./addrole/roleabo');
const rolebot = require('./addrole/rolebot');
const messageEmbed = require('./message embed/message');
const rsteam = require('./steam recherche');
const purge = require('./purge');
require('./addrole/rolecreate');
require('./message embed/idée');
require('./fortinte/fortnite');
require('./pile ou face/pof');

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur de ***Alexpgm*** ' + member.displayName)
    console.log(`${member.displayName} à rejoint le serveur !!!!`)
  }).catch(console.error)
    var roleEmbed = new Discord.RichEmbed()            
    .setAuthor(`Nouveau membre : `)
    .setDescription('Bienvenue sur le serveur ' + member.displayName)
    .setColor(couleur());
    member.guild.channels.get("473447001892192256").send(roleEmbed);
  });
bot.on('guildMemberRemove', member => {
    member.guild.channels.get("473447103960580104").send(member.displayName + " à quitté le serveur")
});

bot.on('message', function (message){
  if (roleabo.match(message)){
    return roleabo.action(message)
  }
  if (rolebot.match(message)){
    return rolebot.action(message)
  }
  if (ban.match(message)){
    return ban.action(message)
  }
  if (purge.match(message)){
    return purge.action(message)
  }
  if (rsteam.match(message)){
    return rsteam.action(message)
  }
  if (messageEmbed.match(message)){
    return messageEmbed.action(message)
  }
  
  
  if (heure.match(message)){
    return heure.action(message)
  }
  if (Google.match(message)){
    return Google.action(message)
  }
  if (kick.match(message)){
    return kick.action(message)
  }
});

bot
  .on('guildCreate', console.log)
  .on('guildDelete', console.log);
  //Kick et ban
  bot.on('message', msg => {
  if (msg.content === prefix  + "bot"){
    bot.generateInvite(['ADMINISTRATOR'])
    .then(invite => {
      console.log(`Géneration du lien d'invitation de Nathalie : ${invite}`)
      msg.channel.send(`Le lien pour avoir Nathalie sur son serveur : ${invite}`)
    });
  };

if (msg.content === prefix + "co"){
msg.channel.send("Disponible :grinning: !")
}
if (msg.content === prefix + "alexpgm"){
    msg.channel.send("Mon créateur")
}
if (msg.content === prefix + "kristen"){
    msg.channel.send("Non, il s'appel le shlag !")
}
if (msg.content === prefix + "cle"){
    msg.channel.send("Le logiciel est disponible (en bêta) : https://alexpgm.000webhostapp.com/Keygen.html")
}
if (msg.content === prefix + "chaine"){
    msg.channel.send("Tu peux retrouvé la chaîne youtube ici : https://www.youtube.com/c/alexpgm")
}
if (msg.content === prefix + "site"){
    msg.channel.send("Voici le site officiel de alexpgm : http://alexpgm.tk")
} 
if (msg.content === prefix + "steam"){
    msg.channel.send("Voici la page steam de alexpgm : https://steamcommunity.com/id/alexpgmyt")
}

// extra
  if (msg.content.match(/bing/i)) {
    msg.reply('bang ! \n BOOOOOOOOOOOOOOOOOOOOOOOM')
    }
    if (msg.content.match(/je suis beau/i)) {
         msg.reply('Pas d\'accord avec toi.')
    }
    if (msg.content.match(/merde/i)){
      msg.reply(':poop:')
      msg.react('💩')
  }
  if (msg.content.match(/fist bump/i)){
      msg.channel.send(":punch:")
      msg.react('👊')
  }
  }); 
    

bot.login(cfg);
