const Discord = require("discord.js");

module.exports.run = async (bot, message, args, guildMember) => {

  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "COMANDOS DE AYUDA MEDALLAS",
            description: "Toda la información referente a las medallas obtenidas",
            
		thumbnail: {
            url: "https://i.imgur.com/v2Sm3d6.png",
           },
            
            fields:
	[
	
		
		
		{
                name: "**Para ver toda la información de medallas por secciones de Juegos**",
                value: "```usa +medallas```",  
	inline:false 	
                 },
                 {
                name: "**Para ver los detalles de las medallas**",
                value: "```usa +infomedallas```",  
	inline:false 	
                 }
	
	]
              }
           })
       }

module.exports.help = {
  name: "helpmedallas"
}
