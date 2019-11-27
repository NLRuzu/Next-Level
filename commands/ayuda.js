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
  


	
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "LISTA DE COMANDOS DISPONIBLES PARA USAR",
            description: "Toda la información de los comandos que puedes usar",
            
		thumbnail: {
            url: "https://i.imgur.com/v2Sm3d6.png",
           },
            
            fields:
	[
	
		
		
		            {
                name: "**Para ver los comandos de medallas**",
                value: "```usa +helpmedallas en la sala <#561599847183155200>```",  
	inline:false 	
                 },
                 {
                name: "**Para ver los comandos de los bots de música**",
                value: "```usa +musica en la sala <#561599847183155200>```",  
	inline:false 	
                 },
                 {
                name: "**Para ver información de tu perfil de comunidad**",
                value: "```usa +perfil en la sala <#561599847183155200> ```",  
	inline:false 	
                 },
                 {
                name: "**Para ver información de comandos del bot fortnite**",
                value: "```usa +fortnite en la sala``` <#561599847183155200>`",  
	inline:false 	
                 },
                 {
                name: "**Para buscar gente para jugar a red dead online**",
                value: "```usa +rd mensaje (estando en una sala de voz previamente y escribiéndolo en la sala <#643449055359270932>```",  
	inline:false 	
                 }
	
	]
              }
           })
       }

module.exports.help = {
  name: "ayuda"
}
