const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let server = bot.guilds.get("458220475957379074");
      let adminRoleObject = server.roles.find("name", "✅Verificado");
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("formato incorrecto +comunicar @miusuario desarrollo");
      let rreason = args.join(" ").slice(22);
      let sicon = message.guild.iconURL;
     
     message.channel.send({embed: {
    color: ff0000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "NUEVO COMUNICADO",
    
    fields: [{
        name: "Desarrollo del comunicado",
        value: "rreason"
      },


      let partidaschannel = message.guild.channels.find(`name`, "📋-comunicados");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");
      
     

      message.delete().catch(O_o=>{});
      partidaschannel.send(`[${adminRoleObject}]`, reportEmbed);
    


}

module.exports.help = {
  name: "comunicar"
}

