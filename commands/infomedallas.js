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
		name: "❕ Acceso Beta [Rogue Comany]",
		value: "*Obtenida a aquellos/as jugadores/as que llevan jugando desde el Acceso Beta al Rogue Company.*",
		inline:false 
		},
		{
		name: "🎩 Sombrero Dorado [Red Dead Online]",
		value: "*Obtenida a aquellos/as jugadores/as que se han incorporado al Modo Online en las fechas de preoferta de separación de Modo Online y Modo Historia. Son auténticos cow boys que saben aprovechar el momento adecuado.*",
		inline:false 
		}
    
    
    
    
    
    
		
		
		    
                
		
	
	]
              }
           })
       }

module.exports.help = {
  name: "infomedallas"
}
