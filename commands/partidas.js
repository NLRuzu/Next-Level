const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**BUSCAR PARTIDAS**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+busco número de personas @rol**", "Usar solo en sala #📲-comandos")


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "partidas"
}
