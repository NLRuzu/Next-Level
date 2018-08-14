const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member;
    if(!rUser) return message.channel.send("formato incorrecto +solicitar @usuario");
    

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("NUEVA PETICIÓN DE ACCESO")
    .setColor("#52a255")
    .addField("Solicitante:", `${message.author}`)
    .addField("Fecha:", message.createdAt)
    

    let reportschannel = message.guild.channels.find(`name`, "❎-solicitudes");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "solicitar"
}
