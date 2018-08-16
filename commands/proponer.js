const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +proponer @usuario razón de la propuesta");
    let rreason = args.join(" ").slice(22);

    var proponer = {
							"embed": {
                                color: 0xff0000 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVA PROPUESTA**",
								url: "http://gamedev.es/",				
								
						fields: [{
								name: "Usuario propuesto",
								value: `${rUser}`,
						},
						{
								name: "Fecha:",
								value: message.createdAt,
						},
						{
								name: "Razón de la propuesta:",
								value: rreason,
						}
						]

				
				
                            }
					};

				message.channel.send(proponer);
				message.delete().catch(O_o=>{});

		}	

module.exports.help = {
  name: "proponer"
}
