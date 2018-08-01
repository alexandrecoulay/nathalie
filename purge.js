const Discord = require('discord.js');
const prefix = ("!");
module.exports = class purge {

    static match (message) {
        return message.content.startsWith('!purge')
}

    static action (message) {
        const args = message.content.slice(prefix.length).split(/ +/)
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('tu n\'es pas admin . ');
        if (isNaN(args[1])) return message.channel.send(':warning: `Entrer un nombre valide`');
        if (args[1] > 100) return message.channel.send(':warning: `Entrer un nombre plus petit que 100`');
        message.channel.delete(args[1]);
        var cleanEmbed = new Discord.RichEmbed()            
        .setAuthor('Message supprimé')
        .setDescription(`Supprimé **${args[1]}** messages :white_check_mark:`)
        .setFooter('Par ' + message.author.tag, message.author.avatarURL)
        .setColor('#009900');
        message.channel.send(cleanEmbed);
        }
}