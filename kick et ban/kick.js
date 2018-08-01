const prefix = ("!");

module.exports = class kick {

  static match (message) {
    return message.content.startsWith('!kick')
  }
          
  static action (message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "kick"){
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('tu n\'est pas admin . ');
        const member = message.mentions.members.first();
      if (!member) return message.reply('Commande Invalide, il faut mettre `!kick @User#1234`');
        member.kick();
    }
  }
} 