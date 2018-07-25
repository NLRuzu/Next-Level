const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**MÚSICA**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**!play link o nombre**", "Comando para buscar canción.")
    .addField("**!stop**", "Comando para parar la música")
    


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "musica"
}
