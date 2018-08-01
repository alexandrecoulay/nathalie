module.exports = class rsteam{

    static match (message) {
        return message.content.startsWith('!rsteam')
}

    static action (message) {
       let args = message.content.split(' ')
        args.shift()
        message.reply('https://steamcommunity.com/id/' + args.join('%20') )
    }
    
}