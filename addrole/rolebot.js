const prefix = ("!");

module.exports = class rolebot {
    static match (message) {
        return message.content.startsWith('!rolebot')
    }
    static action (message) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    if (command === "rolebot"){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('tu n\'est pas admin . ')
        let role = message.guild.roles.find("name", "bot");
        let member = message.mentions.members.first();
        if (!member) return message.reply('Commande Invalide, il faut mettre `!rolebot @User#1234`');
        member.addRole(role).catch(console.error);
        member.removeRoles(role).catch(console.error);
        message.reply(`Le rôle abonné a bien été modifié pour : ${member.displayName} .`)
        }
    }
}