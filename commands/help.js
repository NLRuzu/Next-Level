const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Lista de Comandos**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+serverinfo**", "INFORMACIÓN DEL SERVIDOR")
    .addField("**+clear**", "ELIMINAR MENSAJES DE UN CANAL DE TEXTO. **Ej +clear cantidad (!clear 10) eliminará 10 mensajes**")
    .addField("**+busco número de personas rol de juego**", "PARA BUSCAR GENTE PARA PARTIDAS. **Ej !busco 2 @fortnite**");


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "help"
}
