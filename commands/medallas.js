const Discord = require("discord.js");

module.exports.run = async (bot, message, args, guildMember) => {

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
			strComunidad = strComunidad + "<@&"+message.guild.roles.cache.get(comunidad[i])+"> \n";
		}
	}

	var rogue = [""];
	var strRogue = "";

	for (let a = 0; a < rogue.length; a++) {
		if (guildMember.roles.cache.get(rogue[a])) {
			strRogue = strRogue + "<@&"+message.guild.roles.cache.get(rogue[a])+"> \n";
		}
	}

	var fortnite = ["", "", ""];
	var strFortnite = "";

	for (let u = 0; u < fortnite.length; u++) {
		if (guildMember.roles.cache.get(fortnite[u])) {
			strFortnite = strFortnite + "<@&"+message.guild.roles.cache.get(fortnite[u])+"> \n";
		}
	}
	
	var phasmo = [""];
	var strPhasmo = "";

	for (let b = 0; b < phasmo.length; b++) {
		if (guildMember.roles.cache.get(phasmo[b])) {
			strPhasmo = strPhasmo + "<@&"+message.guild.roles.cache.get(phasmo[b])+"> \n";
		}
	}
	
	var rocket = [""];
	var strRocket = "";

	for (let c = 0; c < rocket.length; c++) {
		if (guildMember.roles.cache.get(rocket[c])) {
			strRocket = strRocket + "<@&"+message.guild.roles.cache.get(rocket[c])+"> \n";
		}
	}
	
	var among = [""];
	var strAmong = "";

	for (let d = 0; d < among.length; d++) {
		if (guildMember.roles.cache.get(among[d])) {
			strAmong = strAmong + "<@&"+message.guild.roles.cache.get(among[d])+"> \n";
		}
	}


	if (!strComunidad) {
		strComunidad = "Ninguna";
	}
	
	if (!strRogue) {
		strRogue = "Ninguna";
	}
	
	if (!strPhasmo) {
		strPhasmo = "Ninguna";
	}
	
	if (!strRocket) {
		strRocket = "Ninguna";
	}
	
	if (!strAmong) {
		strAmong = "Ninguna";
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
						name: "**Rogue Company**",
						value: `${strRogue}`,
						inline: false
					},
					
					{
						name: "**Phasmophobia**",
						value: `${strPhasmo}`,
						inline: false
					},
					
					{
						name: "**Rocket League**",
						value: `${strRocket}`,
						inline: false
					},
					
					{
						name: "**Among Us**",
						value: `${strAmong}`,
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
