const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let cantidad = args[0];
      let sicon = message.guild.iconURL;
      message.channel.send({
               embed: {
                        color: 0x04ff00,
                        content: "@🤖 Fortnite",
                        title: message.member.nickname,
                        description: "Busco **"+ cantidad+"** personas", 
                });




      let partidaschannel = message.guild.channels.find(`name`, "💎buscar-partidas");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
     


}

module.exports.help = {
  name: "busco"
}
