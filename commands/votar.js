const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let nombre = args[0];
      let tipo = args[1];
      let razon = args.slice(2).join(" ");
    var votar = {
							"embed": {
                                color: 0xffef52 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVA PROPUESTA**",
								url: "http://gamedev.es/",				
								
						fields: [{
								name: "Usuario propuesto",
								value: nombre,
						},
						{
								name: "Tipo de Sanción:",
								value: tipo,
						},
                       {                                        name: "Razón de la propuesta:",
								value: razon,
								
						},
						{
							name: "Fecha:",
						        value: message.createdAt,
								
						}
						]

				
				
                            }
					};

				
       let partidaschannel = message.guild.channels.find(`name`, "❌-votar-sanciones");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
      partidaschannel.send(votar);

		}	

module.exports.help = {
  name: "votar"
}



