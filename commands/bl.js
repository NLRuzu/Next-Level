const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var comunicado = message.content.replace("+bl ", ""); 
	var comunicado2 = message.content.replace("+bl ", "", "");  

	
	  var embebido = {
							"embed": {
                                color: 0xff0000,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVO USUARIO AÑADIDO A LA BLACKLIST**",
				url: "http://gamedev.es/",
				timestamp: message.createdAt,	
				fields: [{
								name: "Usuario añadido",
								value: comunicado,
						},
						{
								name: "Razón",
								value: comunicado2,
						},
											
                            }
					};
					 ]

				message.channel.send(embebido);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "bl"
}

