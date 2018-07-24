const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Lista de Comandos**")
    .setColor("#FE2E2E")
    .setThumbnail(sicon)
    .setImage("https://i.imgur.com/EHZg03H.jpg")


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "help"
}
