const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("formato incorrecto +proponer @usuario razón de la propuesta");
      user.send({
               embed: {
                        color: 0x04ff00,
                        title: "SUGERENCIA RECIBIDA",
                        description: "Enhorabuena, tu sugerencia ha sido recibida con éxito. \n\nGracias por tu aporte."
                                        }
                });
      let rreason = args.join(" ").slice(22);
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      
      .setTitle("Nueva sugerencia")
      .setColor("#15f153")   
      .addField("Propuesta por:", `${rUser}`)       
      .addField("Desarrollo de la sugerencia:", rreason);


      let partidaschannel = message.guild.channels.find(`name`, "sugerencias");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
      partidaschannel.send(reportEmbed);


}

module.exports.help = {
  name: "sugerencia"
}


