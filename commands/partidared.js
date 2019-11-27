const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  
  
  if (message.content.startsWith(ft + "partidared")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
			var args = [];
			var texto = message.content;
			try{
				while(texto.includes("\"")){
					texto = texto.substr(texto.indexOf("\"")+1);
					args.push(texto.substring(0,texto.indexOf("\"")));
					texto = texto.substr(texto.indexOf("\"")+1);
				}
			}
			catch(err){
				message.channel.send("+partidared \"Descripción\" \"Día y Hora\"");
				return;
			}
			let server = bot.guilds.get("597732937659842581");
			let adminRoleObject = message.guild.roles.find("name", "Red Dead");
			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0xafff00 ,
					title: "**NUEVA PARTIDA PROGRAMADA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "📜 Descripción",
						value: NickParticipante1,
						},
						{
						name: "📆 Día y Hora",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("649281948191293450").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}







}

module.exports.help = {
  name: "ayudastaffred"
}
