const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var comunicado = message.content.replace(ad + "+comunicar ", "");  

	let adminRoleObject = server.roles.find("name", "✅Verificado");
	  var embebido = {
							"embed": {
                                color: 0xc500ff,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "NUEVO COMUNICADO",
                                fields: [{
                                    name: "Desarrollo del comunicado:",
                                    value: comunicado,
                                }
                                ],
                            }
			
		  message.delete().catch(O_o=>{});			
			message.guild.channels.get("478647696245129216").send([${adminRoleObject}], embebido);
                
}

module.exports.help = {
  name: "comunicar"
}
