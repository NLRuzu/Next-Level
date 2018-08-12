const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let cantidad = args[0];
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      .addField("Usuario:", `${message.author}`)
      .setDescription("Se requiere **"+ cantidad+"** personas en", message.member.voiceChannel)
      .setColor("#8904B1");

      let partidaschannel = message.guild.channels.find(`name`, "💎buscar-partidas");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
      partidaschannel.send(reportEmbed);


}

module.exports.help = {
  name: "busco"
}
