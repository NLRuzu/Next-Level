const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "DETALLES MEDALLAS",
            description: "Todos los detalles de cada medalla",
            
		thumbnail: {
            url: "https://i.imgur.com/v2Sm3d6.png",
           },
            
            fields:
	[
		{
		name: "💛 Fiel a Next Level [Comunidad]",
		value: "*Obtenida tras demostrar vuestra fidelidad, compromiso y actividad a la comunidad. Solo los verdaderos nextleveros la llevan.*",
		inline:false 
		},
		{
		name: "❕ Acceso Beta [Rogue Comany]",
		value: "*Obtenida a aquellos/as jugadores/as que llevan jugando desde el Acceso Beta al Rogue Company.*",
		inline:false 
		},
		{
		name: "❕ Acceso Beta [Phasmophobia]",
		value: "*Obtenida a aquellos/as jugadores/as que llevan jugando desde el Acceso Beta al Phasmophobia.*",
		inline:false 
		}
    
    
    
    
    
    
		
		
		    
                
		
	
	]
              }
           })
       }

module.exports.help = {
  name: "infomedallas"
}
