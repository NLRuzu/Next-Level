const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      
	let verificado1 = new Discord.RichEmbed
	
	.addField("Verificado", `text ${message.mentions.users.first().tag} even more text`);
	 message.mentions.members.first().addRole("✅Verificado")
    .setTitle(message.member.nickname)
    .setColor("#8904B1")

      let partidaschannel = message.guild.channels.find(`name`, "✅-verificados");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");


    message.delete().catch(O_o=>{});
	message.channel.send(verificado1);


}

module.exports.help = {
  name: "verificado"
}

