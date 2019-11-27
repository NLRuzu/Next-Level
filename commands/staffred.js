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
            title: "LISTA DE COMANDOS STAFF RED",
            description: "Toda la información de los comandos que puedes usar",
            
		thumbnail: {
            url: "https://i.imgur.com/v2Sm3d6.png",
           },
            
            fields:
	[
	
		
		
		            {
                name: "**Para publicar una noticia**",
                value: "```usa +noticiared en la sala 📑-noticias-rdr2```",  
	inline:false 	
                 },
                 {
                name: "**Para publicar un consejo**",
                value: "```usa +consejored en la sala 💰-consejos-rdr2```",  
	inline:false 	
                 }
                
	
	]
              }
           })
       }

module.exports.help = {
  name: "staffred"
}
