const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let server = bot.guilds.get("458220475957379074");
     let adminRoleObject = server.roles.find("name", "everyone");
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("formato incorrecto +comunicar @miusuario desarrollo");
      let rreason = args.join(" ").slice(22);
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      
      .setTitle("NUEVO COMUNICADO")
      .setColor("#ff0000")    
      .addField("Comunicado por:", `${rUser}`)       
      .addField("Desarrollo del comunicado:", rreason);


      let partidaschannel = message.guild.channels.find(`name`, "📋-comunicados");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");
      
     

      message.delete().catch(O_o=>{});
      partidaschannel.send(`[${adminRoleObject}]`, reportEmbed);
    


}

module.exports.help = {
  name: "comunicar"
}
