const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
    var partidas = {
		"embed": {
			color: 0xFE2E2E ,
			title: "**BUSCAR PARTIDAS PARA FORTNITE**",
			url: "http://gamedev.es/",				
			fields: [
				{
				name: "**+buscar descripción**",
				value: "Usar solo en sala #💎-buscar-partidas.\n\n **SIEMPRE** DENTRO DE UNA DE LAS SALAS **SQUAD o DÚOS **"
				},

			]
		}
	};

	message.delete().catch(O_o=>{});
     message.channel.send(partidas);
    
}

module.exports.help = {
  name: "partidas"
}
