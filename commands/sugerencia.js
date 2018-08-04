const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +sugerencia desarrollo de la sugerencia");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Nueva Sugerencia")
    .setColor("#15f153")
    .addField("Realizada por:", `${message.author}`)
    .addField("Fecha:", message.createdAt)
    .addField("Desarrollo:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "sugerencias");
    if(!reportschannel) return message.channel.send("No hemos podido encontrar el canal");
    
    
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "sugerencia"
}
