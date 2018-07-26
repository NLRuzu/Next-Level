const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**COMANDOS STAFF**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+report @user Razón**", "Damos un toque a un usuario")
    .addField("**+verificar @User**", "Asigna rol Verificado para acceder al contenido del discord")


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "staff"
}
