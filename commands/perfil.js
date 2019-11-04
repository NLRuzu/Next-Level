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
  var medallas = ["633653927715274772", "633653848434671616", "633653772660244491"];
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
	
var plataforma = ["633637417114402856", "633637857206075392"];
  var strPlataforma =""; 
    
    for(let i=0; i<plataforma.length; i++){
    if(guildMember.roles.has(plataforma[i])){
        strPlataforma = strPlataforma + message.guild.roles.get(plataforma[i]) + " \n";
    }
}
	
var juegos = ["464055613484302336", "490531888063184905"];
  var strJuegos =""; 
    
    for(let i=0; i<juegos.length; i++){
    if(guildMember.roles.has(juegos[i])){
        strJuegos = strJuegos + message.guild.roles.get(juegos[i]) + " \n";
    }
}
	
var exp = ["633959653012668416", "633959800715083787", "634001148180955136", "634001183211520020", "634001209417662485", "634001240950571018", "634001268641366037", "634001297078484993", "634001321250258944", "634001358025916428"];
 var strExp =""; 
    
    for(let i=0; i<exp.length; i++){
    if(guildMember.roles.has(exp[i])){
        strExp = strExp + message.guild.roles.get(exp[i]) + " \n";
    }
}
	
	
if (!strMedallas) {
strMedallas = "Ninguna";
}
	
if (!strEventos) {
strEventos = "Ninguno";
}
	
if (!strExp) {
strExp = "Ninguno";
}
	
if (!strPlataforma) {
strPlataforma = "Ninguna";
}
	
if (!strJuegos) {
strJuegos = "Ninguno";
}

	
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "INFORMACIÓN PERFIL",
            description: "Toda la información referente al perfil del usuario",
            
		thumbnail: {
            url: "https://i.imgur.com/v2Sm3d6.png",
           },
            
            fields:
	[
		{
		name: "🔗 Perfil de",
		value: `${guildMember}`,
		inline:true 
		},
		{
		name: "🔰 Rango EXP",
		value: `${strExp}`,
		inline:true 
		},
		{
		name: "📱 Plataforma",
		value: `${strPlataforma}`,
		inline:true 
		},
		{
		name: "🎲 Juegos",
		value: `${strJuegos}`,
		inline:true 
		},
		
		{   
		name: "💿 Eventos Participados",
      		value: `${strEventos}`,
    		inline:true 
                        },       
                {
                name: "📀 Medallas Obtenidas",
                value: `${strMedallas}`,  
	inline:true 	
                 }]
              }
           })
       }

module.exports.help = {
  name: "perfil"
}
