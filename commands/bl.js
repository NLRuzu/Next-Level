const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var bl = message.content.replace("+comunicar ", "");  
	  var bl = {
							"embed": {
                                color: 0xff0000,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVO USUARIO AÑADIDO A LA BLACKLIST**",
				url: "http://gamedev.es/",				
								
				description: bl,
				timestamp: message.createdAt,								
                            }
					};

				message.channel.send(bl);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "bl"
}
