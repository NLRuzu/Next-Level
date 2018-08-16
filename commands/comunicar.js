const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var comunicado = message.content.replace("&comunicar ", "");  

	let adminRoleObject = message.guild.roles.find("name", "Test");
	  var embebido = {
							"embed": {
                                color: 0xc500ff,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "NUEVO COMUNICADO",
								description: comunicado,
								timestamp: message.createdAt,								
                            }
					};

				message.channel.send(`[${adminRoleObject}]`, embebido);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "comunicar"
}
