const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let acceso = args[0];
      let user = args[1];
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      .setTitle(message.member.nickname)
      .setDescription("**"+acceso"** está solicitando **"+ user+"**);
      .setColor("#8904B1")
      .addField("**En la sala**", message.member.voiceChannel);

      let partidaschannel = message.guild.channels.find(`name`, "💹-solicitudes");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
      partidaschannel.send(reportEmbed);


}

module.exports.help = {
  name: "solicitar"
}

