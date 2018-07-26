const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let cantidad = args[0];
      let juego = args[1];
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      .setTitle(message.member.nickname)
      .setDescription("**El usuario **"+ cantidad+"** ha sido verificado correctamente.**")
      .setColor("#8904B1")
      
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
      partidaschannel.send(reportEmbed);


}

module.exports.help = {
  name: "verificado"
}
