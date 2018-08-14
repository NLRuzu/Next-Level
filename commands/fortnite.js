const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**FORTNITE**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**.ign plataforma nickname**", "Vincula tu cuenta de epicgames.")
    .addField("**.wins**", "Asigna las wins a tu nick, hay que actualizar constantemente.")
    .addField("**.kd**", "Asigna tu kd a tu nick, hay que actualizar constantemente.")
    .addField("**.stats**", "Te muestra tus stats generales.")
    .addField("**.season5**", "Te muestra tus stats de la temporada 5.");

    message.delete().catch(O_o=>{});
    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "fortnite"
}
