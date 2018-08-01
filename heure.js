const prefix = ("!");
module.exports = class heure {
    static match (message) {
        return message.content.startsWith('!time')
}
    static action (message) {
if(message.content === prefix + "time") {
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var heure = currentDate.getHours() + 2
    var min = currentDate.getMinutes()
    var sec = currentDate.getSeconds()
   if ( heure = 22 ){
        heure = 0
    } else {
        if ( heure = 23 ) {
            heure = 1
        }
    }
    message.reply("La date est : " + day + "/" + month + "/" + year + " " + heure + ":" + min + ":" + sec )
        }
    } 
}