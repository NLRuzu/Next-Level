const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Can't find user!");
    let rreason = args.join(" ").slice(22);
 

    var kick = {
							"embed": {
                                color: 0xc6ff00 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**HAS SIDO KICKEADO**",
								url: "http://gamedev.es/",				
								
						fields: [{
								name: "Usuario Kickeado",
								value: `${rUser}`,
						},
						{
								name: "Fecha:",
								value: message.createdAt,
						},
						{
								name: "Razón:",
								value: rreason,
						}
						]

				
				
                            }
					};
					
					
					var kick2 = {
							"embed": {
                                color: 0xc6ff00 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**USUARIO KICKEADO**",
								url: "http://gamedev.es/",				
								
						fields: [{
								name: "Usuario Kickeado",
								value: `${rUser}`,
						},
						{
								name: "Fecha:",
								value: message.createdAt,
						},
						{
								name: "Razón:",
								value: rreason,
						}
						]

				
				
                            }
					};
	   let partidaschannel = message.guild.channels.find(`name`, "❓-propuestas");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.guild.member(kUser).kick(kReason);
		bot.channels.get("570620409406423060").send(kick);
		bot.channels.get("576115603778175005").send(kick2);

		}	

module.exports.help = {
  name: "kick"
}
