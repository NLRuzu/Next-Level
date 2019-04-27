const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +proponer @usuario razón de la propuesta");
    let rreason = args.join(" ").slice(22);

    var ascenso = {
							"embed": {
                                color: 0xc6ff00 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVO ASCENSO**",
						"image": {
						"url": "https://i.imgur.com/cFQ6z3q.png"
								},
								
						fields: [{
								name: "Usuario",
								value: `${rUser}`,
						},
						{
								name: "Fecha:",
								value: message.createdAt,
						},
						{
								name: "Rol Conseguido:",
								value: rreason,
						}
						]

				
				
                            }
					};
let partidaschannel = message.guild.channels.find(`name`, "📋-comunicados");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
partidaschannel.send(ascenso);

		}	

module.exports.help = {
  name: "ascenso"
}
