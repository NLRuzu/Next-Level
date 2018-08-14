const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("**GENERALES**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+serverinfo**", "información del servidor")
    .addField("**+fortnite**", "Comandos para uso de Fortnite")
    .addField("**+partidas**", "Comandos para buscar partidas")
    .addField("**+roles**", "Comandos para añadirte roles de juegos")
    .addField("**+sugerencia**", "Comandos para publicar sugerencias (+sugerencia @nuestrouser desarrollo)");


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "help"
}
