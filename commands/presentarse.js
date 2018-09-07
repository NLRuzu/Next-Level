const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let nick = args.trim(0);
      let edad = args[1];
      let ciudad = args[2];
      let razon = args.slice(3).join(" ");
      var presentarse = {
			"embed": {
                                color: 0x00d8ff ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                		},
                                		title: "**NUEVA PRESENTACIÓN DE USUARIO**",
						url: "http://gamedev.es/",				
								
						fields: [{
							name: "Nick de EpicGames",
							value: nick,
						},
						{
							name: "Edad:",
							value: edad,
						},
						{
							name: "Ciudad:",
							value: ciudad,
						},
                                                {        name: "¿Cómo nos has conocido?:",
						         value: razon,
								
						}
						]

				
				
                                                }
					        };

				
       let partidaschannel = message.guild.channels.find(`name`, "📜-presentaciones");
       if(!partidaschannel) return message.channel.send("No se encuentra la sala");


      message.delete().catch(O_o=>{});
      partidaschannel.send(presentarse);

		}	

module.exports.help = {
  name: "presentarse"
}



