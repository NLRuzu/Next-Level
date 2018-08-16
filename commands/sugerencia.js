const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var comunicado = message.content.replace("+sugerencia ", "");  
	  var embebido = {
							"embed": {
                                color: 0xff0000,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVA SUGERENCIA**",
				url: "http://gamedev.es/",				
								
				description: comunicado,
				timestamp: message.createdAt,								
                            }
					};

				message.channel.send(embebido);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "sugerencia"
}

