const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**ASIGNACIÓN DE ROLES**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .addField("**+rollcsgo**", "Te añade el rol de CSGO")
    .addField("**+rollfortnite**", "Te añade el rol de FORTNITE");
    
   


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "roles"
}
