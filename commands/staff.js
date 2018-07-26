const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**COMANDOS STAFF**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+toque @user Razón**", "Damos un toque a un usuario")
    .addField("**+verificado @User**", "Tras asignarle el rol de Verificado, ponemos el mensaje en #verificados")


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "staff"
}
