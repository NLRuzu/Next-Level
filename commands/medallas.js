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
  var medallas = ["633653927715274772", "633653848434671616"];
  var strMedallas =""; 
    
    for(let i=0; i<medallas.length; i++){
    if(guildMember.roles.has(medallas[i])){
        strMedallas = strMedallas + message.guild.roles.get(medallas[i]) + " \n";
    }
}

var eventos = ["633025474808774697", "638002315348934658"];
  var strEventos =""; 
    
    for(let i=0; i<eventos.length; i++){
    if(guildMember.roles.has(eventos[i])){
        strEventos = strEventos + message.guild.roles.get(eventos[i]) + " \n";
    }
}
  
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "Información Perfil",
            description: "Toda la información referente al perfil del usuario",
            
		thumbnail: {
            url: "https://i.imgur.com/v2Sm3d6.png",
           },
            
            fields:
	[
		{
		name: "Perfil de",
		value: `${guildMember}`
		},
		{
                 name: "Eventos Participados",
                 value: `${strEventos}`
		 inline: "true"
                },
                {
                name: "Medallas Obtenidas",
                value: `${strMedallas}`   
                 }]
              }
           })
       }

module.exports.help = {
  name: "medallas"
}
