const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var comunicado = message.content.replace("+comunicar ", "");  

	let adminRoleObject = message.guild.roles.find("name", "✅Verificado");
	  var embebido = {
							"embed": {
                                color: 0xff0000,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                description: "[NUEVO COMUNICADO](http://gamedev.es/)",
								"fields": [
				{
									"value": "comunicado",
								},
								]
				
				timestamp: message.createdAt,								
                            }
					};

				message.channel.send(`[${adminRoleObject}]`, embebido);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "comunicar"
}

