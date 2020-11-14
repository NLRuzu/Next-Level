const Discord = require("discord.js");

module.exports.run = async (bot, message, args, guildMember) => {

	// function getRolName(id, role) {
	// 	role = message.guild.roles.cache.get(id);
	// 	return role.name;
	// }


	if (message.mentions.members.first()) {
		guildMember = message.mentions.members.first();
	} else {
		guildMember = message.member;
	}

	// We need the User object aswell for different properties

	var comunidad = ["633653927715274772"];
	var strComunidad = "";

	for (let i = 0; i < comunidad.length; i++) {
		if (guildMember.roles.cache.get(comunidad[i])) {
			console.log(guildMember);
			var id = message.guild.roles.cache.get(comunidad[i]);
			// strComunidad = strComunidad + getRolName(id) + " \n";
			strComunidad = strComunidad + "<#"+id+"> \n";
		}
	}

	var reddead = ["648991811494477843"];
	var strReddead = "";

	for (let i = 0; i < reddead.length; i++) {
		if (guildMember.roles.cache.get(reddead[i])) {
			var id = message.guild.roles.cache.get(reddead[i]);
			strReddead = strReddead + "<#"+id+"> \n";
		}
	}


	var fortnite = ["633653848434671616", "633653772660244491", "641189390793703435"];
	var strFortnite = "";

	for (let i = 0; i < fortnite.length; i++) {
		if (guildMember.roles.cache.get(fortnite[i])) {
			// strFortnite = strFortnite + getRolName(message.guild.roles.cache.get(fortnite[i])) + " \n";
			strFortnite = strFortnite + "<#"+id+"> \n";
		}
	}


	if (!strComunidad) {
		strComunidad = "Ninguna";
	}

	if (!strReddead) {
		strReddead = "Ninguno";
	}

	if (!strFortnite) {
		strFortnite = "Ninguno";
	}




	message.channel.send({
		"embed": {

			color: 0xc6ff00,
			title: "INFORMACIÓN MEDALLAS",
			description: "Toda la información referente a las medallas obtenidas",

			thumbnail: {
				url: "https://i.imgur.com/v2Sm3d6.png",
			},

			fields:
				[
					{
						name: "🔗 Perfil de",
						value: `${guildMember}`,
						inline: false
					},
					{
						name: "**Fortnite**",
						value: `${strFortnite}`,
						inline: false
					},

					{
						name: "**Red Dead**",
						value: `${strReddead}`,
						inline: false
					},
					{
						name: "**Comunidad**",
						value: `${strComunidad}`,
						inline: false
					},
					{
						name: "**Para ver toda la información de medallas**",
						value: "```usa +infomedallas```",
						inline: false
					}

				]
		}
	})
}

module.exports.help = {
	name: "medallas"
}
