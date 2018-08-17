const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +bl @usuario razón");
    let rreason = args.join(" ").slice(22);

    var bl = {
							"embed": {
				color: 0x0e0e0e ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVO USUARIO AÑADIDO A LA BLACKLIST**",
								url: "http://gamedev.es/",				
								
						fields: [{
								
								name: "Fecha:",
								value: message.createdAt,
						},
						{
								name: "Usuario:",
								value: rreason,
						}
						]

				
				
                            }
					};

				message.channel.send(bl);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "bl"
}
