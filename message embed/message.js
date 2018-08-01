const prefix = ("!");

module.exports = class messageEmbed {

    static match (message) {
        return message.content.startsWith('!info')
}

    static action (message) {
       if (message.content === prefix + "info"){
            message.channel.send({embed: {
                title: "le site pour les infos",
                color: 0x18A0AE,
                description: "Toute les infos sur le bot sont disponible sur le site. Le lien est : http://alexpgm.tk/nath.html",
            }
        })
       }
    }  
}