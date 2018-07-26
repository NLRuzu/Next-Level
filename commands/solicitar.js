const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +solicitar @usuario razón");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Nueva petición de acceso")
    .setColor("#15f153")
    .addField("Solicitante:", `${message.author}`)
    .addField("Fecha:", message.createdAt)
    .addField("Razón:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "❎-solicitudes");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "solicitar"
}
