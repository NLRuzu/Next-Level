const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let guildMember;

  if (message.mentions.members.first()) {
    guildMember = message.mentions.members.first();
  } else {
    guildMember = message.member;
  }

  // We need the User object aswell for different properties
  const user = guildMember.user;
  var comunidad = ["633653927715274772"];
  var strComunidad =""; 
    
    for(let i=0; i<comunidad.length; i++){
    if(guildMember.roles.has(comunidad[i])){
        strComunidad = strComunidad + message.guild.roles.get(comunidad[i]) + " \n";
    }
}


	
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
		name: "🔪 Cazador Sombrío [Fortnite]",
		value: "*Obtenida tras demostrar vuestro compromiso y participación en el Evento de HalloWeen 2019 de la comunidad. Haber asistido a la totalidad de eventos realizados.*",
		inline:false 
		},
    {
		name: "💉 Vampiro Sangriento [Fortnite]",
		value: "*Obtenida tras demostrar vuestro compromiso y participación en el Evento de HalloWeen 2019 de la comunidad. Haber asistido casi a la totalidad de eventos realizados.*",
		inline:false 
		},
    {
		name: "⭐ Apoyando a Next Level [Fortnite]",
		value: "*Obtenida tras demostrar vuestro compromiso e involucraciónn con la comunidad usando el código NL-RUZU en apoya a un creador de la tienda*",
		inline:false 
		},
    {
		name: "💛 Compañero Fiel [Red Dead]",
		value: "*Obtenida tras demostrar vuestro compromiso e involucración con tus compañeros de cuadrilla Red Dead*",
		inline:false 
		}
    
    
    
    
		
		
		    
                
		
	
	]
              }
           })
       }

module.exports.help = {
  name: "infomedallas"
}
