const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
      let rreason = args.join(" ").slice(22);
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      .setTitle("Nueva sugerencia")
      .addField("Propuesta por:", `${message.author}`)
      .addField("Desarrollo de la sugerencia:", rreason)
      .addField("Fecha:", message.createdAt)
      .setColor("#8904B1")

      let partidaschannel = message.guild.channels.find(`name`, "sugerencias");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
      partidaschannel.send(reportEmbed);


}

module.exports.help = {
  name: "sugerencia"
}


