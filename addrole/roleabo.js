const prefix = ("!");

module.exports = class roleabo {
    static match (message) {
        return message.content.startsWith('!roleabo')
    }
    static action (message) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    if (command === "roleabo"){
        let role = message.guild.roles.find("name", "abonné");
        let member = message.mentions.members.first();
        if (!member) return message.reply('Commande Invalide, il faut mettre `!roleabo @User#1234`');
        member.addRole(role).catch(console.error);
        member.removeRole(role).catch(console.error);
        message.guild.channels.get("473493510092357633").send(`Le rôle abonné a bien été modifié pour : ${member.displayName} .`);
        }
    }
}