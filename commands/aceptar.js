const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first();
    if(!rUser) return message.channel.send("formato incorrecto +aceptar @usuario");
    
	var aceptar = {
		"embed": {
			color: 0xff0000 ,
			author: {
			name: message.author.tag,
			icon_url: message.author.avatarURL
			},
			title: "**SUGERENCIA ACEPTADA**",
			url: "http://gamedev.es/",	
		}
	};		
		
	message.mentions.users.map(async user => {
		const member = message.guild.member(user);
		try { await user.send({
			embed: {
			color: 0xFF0000,
			title: "¡ENHORABUENA!",
			description: "**Enhorabuena, tu sugerencia enviada en Next-Level ha sido aceptada, gracias por aportar**",
			}
			});
		}
		catch (err) { console.log('error'); }
	});

	message.delete().catch(O_o=>{});
	reportschannel.send(aceptar);		
				
}	
       
module.exports.help = {
  name: "aceptar"
}
