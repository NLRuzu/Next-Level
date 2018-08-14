const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +proponer @usuario razón de la propuesta");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("NUEVA PROPUESTA DE ASCENSO")
    .setColor("#13ff00")
    .addField("Usuario propuesto:", `${rUser}`)
    .addField("Propuesto por:", `${message.author}`)
    .addField("Fecha:", message.createdAt)
    .addField("Razón de la propuesta:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "❓-propuestas");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    
    
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "proponer"
}
