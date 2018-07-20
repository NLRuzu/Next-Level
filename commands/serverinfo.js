const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Información del Servidor**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**Nombre del Servidor**", message.guild.name)
    .addField("**Miembros Totales**", message.guild.memberCount);

    return message.channel.send(serverembed);

  }

module.exports.help = {
  name: "serverinfo"
}
