const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**GENERALES**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+serverinfo**", "información del servidor")
    .addField("**+fortnite**", "Comandos para uso de Fortnite")
    .addField("**+partidas**", "Comandos para buscar partidas")


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "help"
}
