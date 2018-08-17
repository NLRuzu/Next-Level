const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.member.roles.find("name", "🌟 STAFF NIVEL 3") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||message.member.roles.find("name", "🌟 STAFF NIVEL 1")){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +report @usuario razón");
    let rreason = args.join(" ").slice(22);
   
	var report1 = {
		"embed": {
			color: 0xff0000 ,
			author: {
			name: message.author.tag,
			icon_url: message.author.avatarURL
			},
			title: "**INFORME DEL TOQUE**",
			url: "http://gamedev.es/",				
			fields: [
				{
				name: "Usuario reportado",
				value: `${rUser}`,
				},
				{
				name: "Fecha:",
				value: message.createdAt,
				},
				{
				name: "Razón del toque:",
				value: rreason,
				}
			]
		}
	};
	
	var report2 = {
		"embed": {
			color: 0xff0000 ,
			title: "**[1] TOQUE RECIBIDO**",
			url: "http://gamedev.es/",				
			fields: [
				{
				name: "Usuario reportado",
				value: `${rUser}`,
				},
				{
				name: "Fecha:",
				value: message.createdAt,
				},
				{
				name: "Razón del toque:",
				value: rreason,
				}
			]
		}
	};


	bot.channels.get("471737402017316864").send(report1);
bot.channels.get("472833108727562241").send(report2).then(async function(message){ await message.react("479954428800139264")});
	message.delete().catch(O_o=>{});

	message.mentions.users.map(async user => {
		const member = message.guild.member(user);
		try { await user.send({
			embed: {
			color: 0xFF0000,
			title: "**HAS RECIBIDO UN PRIMER TOQUE**",
			url: "http://gamedev.es/",
			description: "Estimado Usari@ de Next Level, acabas de recibir un primer toque por alguna acción, o actitud que va en contra de nuestras normas.\n\nPor favor visita el canal de #toques para más información.\n\nUn saludo, el STAFF",
			}
			});
		}
		catch (err) { console.log('error'); }
	});

	message.delete().catch(O_o=>{});
	reportschannel.send(reportEmbed);		
				
}	
       
module.exports.help = {
  name: "report1"
}
