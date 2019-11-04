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
	
var temp = ["575979975321059338", "575980093453631488", "575980132569972736", "575980163465216000", "575980190984044545", "575980222202249237", "575980271271149568", "575980303949234176", "575980337390157824", "606416829212131330", "633644980094763011"];
 var strTemp =""; 
    
    for(let i=0; i<temp.length; i++){
    if(guildMember.roles.has(temp[i])){
        strTemp = strTemp + message.guild.roles.get(temp[i]) + " \n";
    }
}
	
var noti = ["633639077530435597", "633639339091427329"];
 var strNoti =""; 
    
    for(let i=0; i<noti.length; i++){
    if(guildMember.roles.has(noti[i])){
        strNoti = strNoti + message.guild.roles.get(noti[i]) + " \n";
    }
}	
	
	
 	if (!strMedallas) {
strMedallas = "Ninguna";
}
	
if (!strEventos) {
strEventos = "Ninguno";
}
if (!strTemp) {
strTemp = "Ninguna";
}
	
if (!strNoti) {
strNoti = "Ninguno";
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
		name: "🔻 Temporadas",
		value: `${strTemp}`,
		inline:true 
		},
		{
		name: "❗ Notificaciones",
		value: `${strNoti}`,
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
