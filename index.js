const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

let ft = "+";


// COMMANDS // 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("No se encuentra el comando");
    return
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} cargado`);
    bot.commands.set(props.help.name, props);
  });
 
});
 
// MENSAJE DE BIENVENIDA NUEVOS USUARIOS //
bot.on("guildMemberAdd", async member => {
	  
  console.log(`${member.id} ha entrado al server `);
            
  let welcomechannel = member.guild.channels.find(`name`, "📈-entradas");

  welcomechannel.send({
               embed: {
                        color: 0x04ff00,
                        title: "**NUEVO MIEMBRO**",
		        url: "http://gamedev.es/",
                        description: `Bienvenido ${member} a Next-Level`,
                    }
                });
    member.send({
               embed: {
						
                        color: 0x04ff00,
                        title: "Hola bienvenido a Next Level",
                        description: '**A continuación, te mostramos una breve guía sobre como entrar a nuestro servidor.**',
						fields: [
							{
							name: "Advertencia:",
							value: `:warning: Si no ves contenido ninguno en el servidor, es normal, forma parte de un sistema de verificación, para así proteger nuestra intimidad.`,
							},
							{
							name: "Guía de verificación:",
							value: `:one: Tienes que verificar tu cuenta para tener acceso completo al servidor, ingresando en la sala <#471977292214566912> y escribiendo **+solicitar**  \n:two: Una vez verificado, serás notificado de ello mediante MP y podrás tener acceso completo.  \n:three: ¡Tan solo diviértete y trae a tus amigos para que nos conozcan! Mándales este enlace de invitación: https://discord.gg/czN3fEm`,
							}	
						]
                    }
                });
 });
  

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📉-abandonos");
  welcomechannel.send({
               embed: {
                        color: 0xe52121,
                        title: "**HA ABANDONADO**",
		       	url: "http://gamedev.es/",
                        description: `${member} ha abandonado el clan`,
                    }
                });
});

// ROL DE ENTRADA AL SERVIDOR - NO VERIFICADO //
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "❎ No verificado");
    member.addRole(role).catch(console.error);
});

// LISTA DE COMANDOS
bot.on("message", (message) => {



// +RESTART // SOLO OWNER
if (message.author.id == "298029791708315649") { 	// CREATOR COMMANDS

		if (message.content.startsWith(ft + "restart")) {			// 	[FUNCIONANDO] 		&restart					= Reinicia el proceso el bot por completo (Precaucion)
				message.channel.send(":robot: Reiniciando el bot");
				setTimeout(function(){
					child.kill();
				},1000);
			}

	} // END CREATOR COMMANDS
	
// REACCION EMOJI SALA PROPUESTAS //
if (message.channel.id == "472138215042842626" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
  
// REACCION EMOJI SALA VOTACION DE SANCIÓN //
if (message.channel.id == "480414475904745507" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}

	// REACCION EMOJI SALA CARTELERA //
if (message.channel.id == "499629460916797441" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
	
	// REACCION EMOJI SALA VOTACION //
if (message.channel.id == "499632058881146880" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
	
 // REACCION EMOJI SALA SUGERENCIAS //
if (message.channel.id == "475267748868390912" && message.author.bot) {
                    message.react("472146792339734565");
                    message.react("472147160423727105");
                }	let ed1 = {
                    embed: {
                        color: 0x04ff00,
                        title: "**:warning: LO SENTIMOS**",
                        description: "Tu rol actual no dispone de suficientes privilegios, debes de participar e interactuar más con el clan para ascender a un rol superior. \n\n Para mas información ir al canal: <#485759738164936719> y sección **BENEFICIOS**",
                    }
                };



if (message.channel.id == message.channel.id) { 				    // COMANDOS GENERALES

	if (message.content.startsWith(ft + "presentarse")) {
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
				message.channel.send("+presentarse \"Nombre\" \"Nick de EpicGames\" \"Edad\" \"Ciudad\" \"Plataforma\" \"¿Cómo nos conociste\"");
				return;
			}

			let nombre = args[0];
			let nick = args[1];
			let edad = args[2];
			let ciudad = args[3];
			let plataforma = args[4];
			let conocernos = args[5];
			var presentarse = {
				"embed": {
					color: 0x00d8ff ,
					author: {
						name: message.author.tag,
						icon_url: message.author.avatarURL
					},
					title: "**NUEVA PRESENTACIÓN DE USUARIO**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "Nombre o Apodo:",
						value: nombre,
						},
						{
							name: "Nick de EpicGames:",
							value: nick,
						},
						{
							name: "Edad:",
							value: edad,
						},
						{
							name: "Ciudad:",
							value: ciudad,
						}, 
						{
							name: "Plataforma:",
							value: plataforma,
						}, 
						{
							name: "¿Cómo nos conociste?:",
							value: conocernos,
						} 						
					]
				}
			};


			let presentarsechannel = bot.channels.get("486981605831999489");
			if(!presentarsechannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			presentarsechannel.send(presentarse);
		}
		 
	if (message.content.startsWith(ft + "rolroe")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "🔼 ROE");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xffffff,
                        description: "**ROL de Ring Of Elysium asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
 
	if (message.content.startsWith(ft + "rolfortnite")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "🤖 Fortnite");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de FORTNITE asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
		
	if (message.content.startsWith(ft + "rolsalvar")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "💥Salvar el Mundo");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de Salvar el Mundo asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
		
	if (message.content.startsWith(ft + "help")) {
	  let sicon = message.guild.iconURL;
	  let serverembed = new Discord.RichEmbed()
	  .setTitle("**GENERALES**")
	  .setColor("#FE2E2E")
	  .setThumbnail(sicon)
	  .addField("**+serverinfo**", "información del servidor")
	  .addField("**+fortnite**", "Comandos para uso de Fortnite")
	  .addField("**+roles**", "Comandos para añadirte roles de juegos")
	  .addField("**+presentacion**", "Comandos para presentarse en el servidor")
	  .addField("**+infosalas**", "Información de todas las salas y sus usos.")
	  .addField("**+infoascensos**", "Información referente a cómo ascender")
	  .addField("**+sugerencia**", "Comandos para publicar sugerencias solo en sala #sugerencias (+sugerencia desarrollo)");
	  

	  bot.channels.get("481525340083191809").send(serverembed);
	  }	
	
	if (message.content.startsWith(ft + "musica")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**MÚSICA**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**!play link o nombre**", "Comando para buscar canción.")
		  .addField("**!stop**", "Comando para parar la música")
		  .addField("**!skip**", "Pasar canción")
		  .addField("**!loop**", "Hacer bucle")
		  .addField("**!pause**", "Pausar música")
		  .addField("**!resume**", "volver poner música después de pausa");
		  
		  bot.channels.get("481525340083191809").send(serverembed);
		  }
	
    if (message.content.startsWith(ft + "infoascensos")) {       //  +infoascensos   = Envía toda la información sobre valores para ascender
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN DE COMO ASCENDER EN LA COMUNIDAD',
						url: "http://gamedev.es/",
                        description: '**A Continuación se detallarán una serie de pautas que se tienen en cuenta a la hora de ascender a alguien.**',
						fields: [
							{
							name: "Primero",
							value: `**La actividad**, es decir, la presencia en nuestros canales de voz.`,
							},	
							{
							name: "Segundo",
							value: `**La participación**, es decir, participar en eventos que se organicen, jugar partidas con gente de la comunidad, requerir gente para jugar, etc...`,
							},
							{
							name: "Tercero",
							value: `**La involucración**, es decir, que quieran aportar sugerencias, ideas, proyectos para mejorar la comunidad.`,
							},
							{
							name: "Cuarto",
							value: `**El Interés**, es decir, las ganas de participar en las cosas, las ganas de hablar con otros miembros por los diferentes canales, rellenar encuestas etc...`,
							},
							{
							name: "Quinto",
							value: `**La cantidad de Respetos**, es decir, suponemos que si una persona tiene 20 respetos por ejemplo significa que esa persona ha sido bien valorada por los miembros de la comunidad ya sea por actitudes o acciones que ha realizado la persona a lo largo de su paso por aquí.`,
							},
							{
							name: "Importante",
							value: `No olvidemos que los ascensos no son automáticos, son a propuesta del STAFF, y si no has ascendido es porque no te han propuesto, los ascensos no se regalan, hay que ganarlos. Ya depende de tí si quieres o no.`,
							}
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}
	
	if (message.content.startsWith(ft + "peliculas")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS DE PELÍCULAS**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**+cartelera \"Nombre de la película\" \"Día\"**", "Publicamos en <#499629460916797441> la película ganadora de hoy")
		  .addField("**+votarpelicula \"Nombre de la película\" \"Día\"**", "Publicamos en <#499632058881146880> la película que queramos proponer para votación");
		 
		  
		  message.channel.send(serverembed);
		  }			  
	 
	if (message.content.startsWith(ft + "solicitar")) {
  let rUser = message.guild.member;
  if(!rUser) return message.channel.send("formato incorrecto +solicitar");

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("NUEVA PETICIÓN DE ACCESO")
  .setColor("#52a255")
  .addField("Solicitante:", `${message.author}`)
  .addField("Fecha:", message.createdAt)

  let reportschannel = message.guild.channels.find(`name`, "❎-solicitudes");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
  }  
  
	if (message.content.startsWith(ft + "presentacion")) {  //+presentacion  = Información de como presentarte
    var presentacion = {
		"embed": {
			color: 0xff0000 ,
			title: "**COMANDO DE PRESENTARSE**",
			url: "http://gamedev.es/",				
			fields: [
				{
				name: "**Copia el mensaje de abajo y rellena los huecos con los datos correspondientes**",
				value: "`+presentarse \"Nombre\" \"Nick de EpicGames\" \"Edad\" \"Ciudad\" \"Plataforma\" \"¿Cómo nos conociste?\"`"
				}
			]
		}	
	};
	message.channel.send(presentacion);
     
}
		
	if (message.content.startsWith(ft + "sugerencia")) {
		var comunicado = message.content.replace("+sugerencia ", "");
		var embebido = {
                          "embed": {
                              color: 0x84ff80 ,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "**NUEVA SUGERENCIA**",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };
			 
			  bot.channels.get("475267748868390912").send(embebido);
              message.delete().catch(O_o=>{});
      }	
			
	if (message.content.startsWith(ft + "cartelera")) {  //  +participantes "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+cartelera \"Nombre de la película\" \"Día\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**NUEVA PELÍCULA ELEGIDA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "🎬 Película",
						value: NickParticipante1,
						},
						{
						name: "📆 Día",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("499629460916797441");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(apuntarme);
		}
	
	if (message.content.startsWith(ft + "votarpelicula")) {  //  +participantes "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+votarpelicula \"Nombre de la película\" \"Día\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**NUEVA VOTACIÓN DE PELÍCULA**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "👤 La propone:",
						value: `${message.author}`,
						},
						{
						name: "🎬 Película",
						value: NickParticipante1,
						},
						{
						name: "📆 Día",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("499632058881146880");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(apuntarme);
		}
	
	if (message.content.startsWith(ft + "roles")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**ASIGNACIÓN DE ROLES**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**+rolroe**", "Te añade el rol de ROE y te dará acceso a la sala exclusiva de chat y búsqueda de partidas")
		  .addField("**+rolsalvar**", "Te añade el rol de Salvar el Mundo y te dará acceso a la sala exclusiva de chat y búsqueda de partidas")
		  .addField("**+rolfortnite**", "Te añade el rol de Fortnite y te dará acceso a la sala exclusiva de chat y búsqueda de partidas");
		   
		   
		  return message.channel.send(serverembed);
		  }
			  
} //FIN DE COMANDOS GENERALES
 
if (message.channel.id == message.channel.id) { 				    // COMANDOS TORNEO


	if (message.content.startsWith(ft + "roltorneo")) {   //  +roltorneo     = Te asigna el rol de torneo
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "🏆 Torneo");
                let guild = bot.guilds.get("458220475957379074");
				let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de TORNEO asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }	

	if (message.content.startsWith(ft + "deltorneo")) {   //  +deltorneo     = Te elimina el rol de torneo
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "🏆 Torneo");
				let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.removeRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de TORNEO eliminado a **" + User + " **correctamente**",
                    }
                });
            }
        }

	if (message.content.startsWith(ft + "finalizar")) {  //  +finalizar "Nick1" "Nick2" "Puntos" "Nºtorneo"     = Finalizamos nuestra participación
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
				message.channel.send("+finalizar \"Nick Participante 1\" \"Nick Partipante 2\" \"Total de Kills\" \"Nº de Torneo\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let KillsTotales = args[2];
			let ntorneo = args[3];
			var torneo = {
				"embed": {
					color: 0x7608AA ,
					title: "**🏆 PARTICIPACIÓN FINALIZADA 🏆**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "👤 Nick Participante 1:",
						value: NickParticipante1,
						},
						{
							name: "👤 Nick Partipante 2:",
							value: NickParticipante2,
						},
						{
							name: "⭐ Total de Puntos:",
							value: KillsTotales,
						},
						{
							name: "🏆 Nº de Torneo:",
							value: ntorneo,
						}
						 						
					]
				}
			};


			let torneochannel = bot.channels.get("494103054438760449");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(torneo);
		}
		
	if (message.content.startsWith(ft + "primerganador")) {   //  +primerganador "Nick1" "Nick2" "Puntos" "Nºtorneo"     = Comunicamos primer ganador
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
				message.channel.send("+primerganador \"Nick Participante 1\" \"Nick Partipante 2\" \"Nº de Torneo\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let ntorneo = args[2];
			var torneo = {
				"embed": {
					color: 0x7608AA ,
					title: "**🏆 PRIMER PUESTO TORNEO 🏆**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "🥇 Nick Participante 1:",
						value: NickParticipante1,
						},
						{
							name: "🥇 Nick Partipante 2:",
							value: NickParticipante2,
						},
						{
							name: "🏆 Nº de Torneo:",
							value: ntorneo,
						}
						 						
					]
				}
			};


			let torneochannel = bot.channels.get("494103258168688642");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(torneo);
		}
		
	if (message.content.startsWith(ft + "segundoganador")) {  //  +segundoganador "Nick1" "Nick2" "Puntos" "Nºtorneo"     = Comunicamos segundo ganador
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
				message.channel.send("+segundoganador \"Nick Participante 1\" \"Nick Partipante 2\" \"Nº de Torneo\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let ntorneo = args[2];
			var torneo = {
				"embed": {
					color: 0x7608AA ,
					title: "**🏆 SEGUNDO PUESTO TORNEO 🏆**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "🥈 Nick Participante 1:",
						value: NickParticipante1,
						},
						{
							name: "🥈 Nick Partipante 2:",
							value: NickParticipante2,
						},
						{
							name: "🏆 Nº de Torneo:",
							value: ntorneo,
						}
						 						
					]
				}
			};


			let torneochannel = bot.channels.get("494103258168688642");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(torneo);
		}
		
	if (message.content.startsWith(ft + "hall")) {   //  +hall "Usuario" "Fecha" "Descripción"     = Comunicamos un nuevo usario al HALL DE LA FAMA
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
				message.channel.send("+hall \"Usuario\" \"Fecha\" \"Descripción\"");
				return;
			}

			let NickParticipante1 = args[0];
			let Fecha = args[1];
			let ntorneo = args[2];
			var torneo = {
				"embed": {
					color: 0x7608AA ,
					title: "**🏆 NUEVA ALFOMBRA ROJA 🏆**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "🥇 Usuario:",
						value: NickParticipante1,
						},
						{
							name: "📆 Fecha:",
							value: Fecha,
						},
						{
							name: "🏆 Descripción:",
							value: ntorneo,
						}
						 						
					]
				}
			};


			let torneochannel = bot.channels.get("494103861246558209");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(torneo);
		}

	if (message.content.startsWith(ft + "participantes")) {  //  +participantes "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+participantes \"Nick Participante 1\" \"Nick Partipante 2\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**🏆 NUEVOS PARTICIPANTES 🏆**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "👤 Nick Participante 1:",
						value: NickParticipante1,
						},
						{
							name: "👤 Nick Partipante 2:",
							value: NickParticipante2,
						}
					
						 						
					]
				}
			};


			let torneochannel = bot.channels.get("494593100413534216");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(apuntarme);
		}
		
		if (message.content.startsWith(ft + "candidato")) {  //  +participantes "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+candidato \"¿Por qué te presentas?\" \"¿Qué aportarías?\" \"¿Disponibilidad?\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**NUEVO CANDIDATO**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "👤 Candidato:",
						value: `${message.author}`,
						},
						{
						name: "¿Por qué te presentas?",
						value: NickParticipante1,
						},
						{
						name: "¿Qué aportarías?",
						value: NickParticipante2,
						},
						{
						name: "¿Disponibilidad?",
						value: disponible,
						}
					
						 						
					]
				}
			};


			let torneochannel = bot.channels.get("499239817012314123");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(apuntarme);
		}

	if (message.content.startsWith(ft + "apuntarme")) {  //  +apuntarme    = Nos apuntamos al torneo
  let rUser = message.guild.member;
  if(!rUser) return message.channel.send("formato incorrecto +APUNTARME");

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("NUEVA INSCRIPCIÓN")
  .setColor("#52a255")
  .addField("Participante:", `${message.author}`)



			let torneochannel = bot.channels.get("494101904150888468");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(reportEmbed);
		}

    } // FIN COMANDOS TORNEO

if (message.channel.id == message.channel.id) { 				    // COMANDOS SOLO STAFF


	if (message.content.startsWith(ft + "delrol")) {           //  +delrol @user     = Elimina un rol establecido en por ID
				let rUser = message.guild.member(message.mentions.users.first());
				let role = message.guild.roles.find("id", "458226959907028992");
				rUser.removeRole(role).catch(console.error);
				message.channel.send({
					embed: {
						color: 0xc500ff,
						description: "ROL eliminado a " + rUser + " correctamente",
					}
				});
				message.delete();
		}

	if (message.content.startsWith(ft + "addrol")) {           //  +addrol @user      = Añade un rol establecido en por ID
	
				let rUser = message.guild.member(message.mentions.users.first());
				let role = message.guild.roles.find("id", "458226959907028992");
				let guild = bot.guilds.get("458220475957379074");
				rUser.addRole(role).catch(console.error);
				message.channel.send({
					embed: {
						color: 0xc500ff,
						description: "ROL añadido a " + rUser + " correctamente",
					}
				});
				message.delete();
		}
		
	if (message.content.startsWith(ft + "serverinfo")) {       //  +serverinfo  = Muestra la informaciónd del servidor
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setDescription("**Información del Servidor**")
			  .setColor("#FE2E2E")
			  .setThumbnail(sicon)
			  .addField("**Nombre del Servidor**", message.guild.name)
			  .addField("**Miembros Totales**", message.guild.memberCount);
			  
			  return message.channel.send(serverembed);
			  }			  

    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "✅Verificado");
			var embebido = {
					  "embed": {
										"color":  0x00dcff,
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										title: "**NUEVO COMUNICADO**",
										url: "http://gamedev.es/",				
										footer: {
											  text: message.guild.name
											},
										description: comunicado,
										timestamp: message.createdAt,								
									}
									};
			
			

			message.delete().catch(O_o=>{});
			bot.channels.get("478647696245129216").send(`[${adminRoleObject}]`, embebido);

			}
		}

	if (message.content.startsWith(ft + "donacion")) {         //  +donación mensaje   = Enviamos un mensaje de nueva donación en una sala concreta
		  if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
		   let adminRoleObject = message.guild.roles.find("name", "✅Verificado");
		  var comunicado = message.content.replace("+donacion ", "");  

			var embebido = {
					  "embed": {
										color: 0xff0000,
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										title: "**💰 NUEVA DONACIÓN RECIBIDA 💰**",
				url: "http://gamedev.es/",				
						
				description: comunicado,
				timestamp: message.createdAt,								
									}
				  };
			
			

			message.delete().catch(O_o=>{});
			bot.channels.get("496962307985899521").send(`[${adminRoleObject}]`, embebido);

			}
		}
	
	if (message.content.startsWith(ft + "verificar")) {        //  +verificar @user   = Verificamos a un usuario
            message.delete();
      if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
                let User = message.mentions.users.first();
                let role = message.guild.roles.find("name", "✅Verificado");
                let role2 = message.guild.roles.find("name", "❎ No verificado");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                miembro.removeRole(role2).catch(console.error);
                User.send({
                    embed: {
                        color: 0x04ff00,
                        title: "**HAS SIDO VERIFICADO**",
			                  url: "http://gamedev.es/",
                        description: "**¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. \n\nPara más información accede al canal de texto #info. \n\nNo olvides asignarte         tu rol para recibir las notificaciones de fortnite en sala #comandos escribe +roles y usa el que quieras.**",
                    }
                });
				
			
                bot.channels.get("471979673400770560").send({
                    embed: {
						author: {
							name: message.author.tag,
							icon_url: message.author.avatarURL
						},
                        color: 0x04ff00,
                        description: "**Ha verificado a **" + User + " **correctamente**",
                    }
                });
            }
      }

	if (message.content.startsWith(ft + "reportar")) {         //  +reportar @user razón   = Damos un toque a un usuario por una razón
			if(message.member.roles.find("name", "🌟 STAFF MÁSTER") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 1") ||
				message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
				let rUser = message.guild.member(message.mentions.users.first());
				if(!rUser) return message.channel.send("formato incorrecto +reportar @usuario razón");
				var razonRP = message.content.substr(message.content.indexOf(" ")+1);
				razonRP = razonRP.substr(razonRP.indexOf(" ")+1);

				var report1 = {
					"embed": {
						title: "**INFORME DEL TOQUE**",
						url: "http://gamedev.es/",				
						fields: [
							{
							name: "Usuario reportado",
							value: `${rUser}`,
							},
							{
							name: "Fecha:",
							value: message.createdAt,
							},
							{
							name: "Razón del toque:",
							value: razonRP,
							}
						]
					}
				};
			
				var report2 = {
					"embed": {
						author: {
							name: message.author.tag,
							icon_url: message.author.avatarURL
						},
						title: "**[1] TOQUE RECIBIDO**",
						url: "http://gamedev.es/",				
						fields: [
							{
							name: "Usuario reportado",
							value: `${rUser}`,
							},
							{
							name: "Fecha:",
							value: message.createdAt,
							},
							{
							name: "Razón del toque:",
							value: razonRP,
							}
						]
					}
				};

				var report3 = {
					"embed": {
						
						title: "**HAS RECIBIDO UN TOQUE**",
						url: "http://gamedev.es/",
						description: "Estimado Usari@ de Next Level, acabas de recibir un **primer toque** por alguna acción, o actitud que va en contra de nuestras normas.\n\n Para mas información visita la sala de <#471737402017316864>"
					}
				};
	
				
				rt.table("reportes").filter({sid:message.guild.id, uid:rUser.user.id}).run(connection).then(function(Nreportes) {
					Nreportes.toArray(function(err, reportes) {
						var numReportes=reportes.length;
						rt.table("reportes").insert({sid:message.guild.id, uid:rUser.user.id,razon:razonRP}).run(connection, function(err, exist) {
							
						});
						if (numReportes<=0){
							report1["embed"].title="**INFORME DEL TOQUE**";
							report2["embed"].title="**[1] TOQUE RECIBIDO**";
							report3["embed"].title="**HAS RECIBIDO UN TOQUE**";
							report3["embed"].description="Estimado Usari@ de Next Level, acabas de recibir **un primer toque** por alguna acción, o actitud que va en contra de nuestras normas.\n\n  Para mas información visita la sala de <#471737402017316864>";
		
							report1["embed"].color=0xFFE800;
							report2["embed"].color=0xFFE800;
							report3["embed"].color=0xFFE800;
							
							bot.channels.get("471737402017316864").send(report1);
							bot.channels.get("472833108727562241").send(report2);
							bot.users.get(rUser.user.id).createDM().then(channel => {
								channel.send(report3);
							});
						}
						else if (numReportes==1){
							report1["embed"].title="**INFORME DEL SEGUNDO TOQUE**";
							report2["embed"].title="**[2] TOQUE RECIBIDO**";
							report3["embed"].title="**HAS RECIBIDO EL SEGUNDO TOQUE**";
							report3["embed"].description="Estimado Usari@ de Next Level, acabas de recibir **un segundo toque** por alguna acción, o actitud que va en contra de nuestras normas.\n\n  Para mas información visita la sala de <#471737402017316864>";
							
							report1["embed"].color=0xFF7400;
							report2["embed"].color=0xFF7400;
							report3["embed"].color=0xFF7400;
							
							bot.channels.get("471737402017316864").send(report1);
							bot.channels.get("472833108727562241").send(report2);
							rUser.createDM().then(channel => {
								channel.send(report3);
							});
						}
						else if (numReportes==2){
							report1["embed"].title="**INFORME DEL TERCER TOQUE**";
							report2["embed"].title="**[3] TOQUE RECIBIDO**";
							report3["embed"].title="**HAS SIDO EXPULSADO**";
							report3["embed"].description="Estimado Usari@ de Next Level, acabas de recibir un **tercer toque** por alguna acción, o actitud que va en contra de nuestras normas.\n\nPor lo que has sido expulsado del clan.\n\nUn saludo, el STAFF";

							report1["embed"].color=0xFF0000;
							report2["embed"].color=0xFF0000;
							report3["embed"].color=0xFF0000;
							
							bot.channels.get("471737402017316864").send(report1);
							bot.channels.get("472833108727562241").send(report2);
							rUser.createDM().then(channel => {
								channel.send(report3);
							});
							
							rUser.kick().catch(console.error);
						}
					});
				});

			}
			setTimeout(() => {message.delete();}, 1000);
		}
	
	if (message.content.startsWith(ft + "lreportes")) {       //  +lreportes @user  = Limpiamos todos los reportes de un usuario
			if(message.member.roles.find("name", "🌟 STAFF MÁSTER") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 1") ||
				message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
				let rUser = message.guild.member(message.mentions.users.first());
				if(!rUser) return message.channel.send("formato incorrecto +lreportes @usuario");
				
				rt.table("reportes").filter({sid:message.guild.id, uid:rUser.user.id}).delete().run(connection).then(function(err, datos) {
					var report3s = {
						"embed": {
							color: 0xFF0000,
							title: "**REPORTES DEL USUARIO ELIMINADOS**",
							url: "http://gamedev.es/",
							description: "📋 Se han eliminado todos los toques de este usuario."
						}
					};
				
					message.channel.send(report3s);
				});

			}
		}

	if (message.content.startsWith(ft + "expediente")) {      //  +expediente @user   = Vemos el expediente de un usuario
			if(message.member.roles.find("name", "🌟 STAFF MÁSTER") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 1") ||
				message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
				let rUser = message.guild.member(message.mentions.users.first());
				if(!rUser) return message.channel.send("formato incorrecto +expediente @usuario");
				var report3s = {
					"embed": {
						color: 0xFF0000,
						title: "**EXPEDIENTE DEL USUARIO**",
						url: "http://gamedev.es/",
						description: ""
					}
				};
				
					
				rt.table("reportes").filter({sid:message.guild.id, uid:rUser.user.id}).run(connection).then(function(Nreportes) {
					Nreportes.toArray(function(err, reportes) {
						report3s["embed"].description=report3s["embed"].description+"Reportes: `"+reportes.length+"`\r\n";
						reportes.forEach(function(reporte){
							report3s["embed"].description=report3s["embed"].description+"Reporte `"+reporte.id+"`:\r\nRazon: "+reporte.razon+"\r\n";
						});
						report3s["embed"].description=report3s["embed"].description+"\r\nSi quieres eliminar algun reporte: `+lreporte idReporte`";
						report3s["embed"].description=report3s["embed"].description+"\r\nSi quieres eliminar todos los reportes: `+lreportes @usuario`";
						message.channel.send(report3s);
					});
				});

			}
		}
	
	if (message.content.startsWith(ft + "lreporte")) {        //  +lreporte IDReporte   = Eliminamos un reporte concreto a un usario.
	
			if(message.member.roles.find("name", "🌟 STAFF MÁSTER") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||
				message.member.roles.find("name", "🌟 STAFF NIVEL 1") ||
				message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
				let id = message.content.split(" ")[1];
				if (!id) return message.channel.send("formato incorrecto +lreporte idReporte");

				rt.table("reportes").get(id).getField('uid').run(connection).then(function(user) {
					if (user !=null){
						var rUser = message.guild.member(user);
						var report3s = {
							"embed": {
								color: 0xFF0000,
								title: "**TOQUE ELIMINADO**",
								url: "http://gamedev.es/",
								description: "Debido a su comportamiento se le ha eliminado un toque a "+rUser.nickname,
							}
						};
						rUser.createDM().then(channel => {
							channel.send({
								"embed": {
									color: 0xFF0000,
									title: "**TOQUE ELIMINADO**",
									url: "http://gamedev.es/",
									description: "Se te ha eliminado un toque."
								}
							});
						});
						rt.table("reportes").get(id).delete().run(connection).then(function(Nreportes) {
							bot.channels.get("487299897339543562").send(report3s);
							message.channel.send(report3s);
						}).catch(console.error);
					}
				}).catch(function(){message.channel.send("Formato o id incorrecto +lreporte idReporte");});
				
			}
		}

	if (message.content.startsWith(ft + "staff")) {            //  +staff   = Información de todos los comandos de STAFF
		if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#00dcff")
		  .setThumbnail(sicon)
		  .addField("**+report**", "Abrimos la lista de comandos para los toques")
		  .addField("**+verificar @User**", "Asigna rol Verificado para acceder al contenido del discord")
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+proponer @User Razón**", "Propone a un usuario ascenso de rango por x motivo")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #📋-comunicados")
		  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
		  .addField("**+torneo**", "Lista de comandos para la gestión de los torneos")
		  .addField("**+inforep**", "Lista de comandos para el sistema de reputación")
		  .addField("**+infomedallas**", "Lista de comandos para la gestión de las medallas");
		  
		  
		  
		  return message.channel.send(serverembed);
		  }
		}
		
	if (message.content.startsWith(ft + "torneo")) {           //  +torneo   = Muestra la lista de comandos de TORNEO
		if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setDescription("**COMANDOS TORNEO**")
			  .setColor("#00dcff")
			  .setThumbnail(sicon)
			  .addField("Para anunciar participantes al torneo", "`+participantes \"Nick Participante 1\" \"Nick Partipante 2\"`")
			  .addField("Finalizamos nuestra participación en el torneo", "`+finalizar \"Nick Participante 1\" \"Nick Partipante 2\" \"Total de Puntos\" \"Nº de Torneo\"`")
			  .addField("Anunciamos primer ganador del torneo", "`+primerganador \"Nick Participante 1\" \"Nick Partipante 2\" \"Nº de Torneo\"`")
			  .addField("Anunciamos segundo ganador del torneo", "`+segundoganador \"Nick Participante 1\" \"Nick Partipante 2\" \"Nº de Torneo\"`")
			  .addField("Nos inscribimos como participante", "`+apuntarme` en la sala #inscribirse")
			  .addField("Anuncia los enfrentamientos de equipos", "`+vs \"Nick1\" \"Nick2\" \"Nick3\" \"Nick4\"`")
			  .addField("Vemos la tabla de puntuaciones", "`+puntos`")
			  .addField("Vemos las normas y notas importantes del torneo", "`+normastorneo`")
			  .addField("Anunciamos un nuevo usuario al hall de la fama", "`+hall \"Usuario\" \"Fecha\" \"Descripción\"`");
			   
			  
			  message.delete().catch(O_o=>{});
			  return message.channel.send(serverembed);
			  }
			}
	if (message.content.startsWith(ft + "infosalas")) {           //  +infosalas   = Muestra la información de uso de salas
		
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setTitle ("INFORMACIÓN DE USO DE SALAS")
			  
			  .setColor("#00dcff")
			  .setThumbnail(sicon)
			  .addField("Todo lo relacionado con información de la comunidad, normas,roles, beneficios etc..", "Usar la sala <#485759738164936719>")
			  .addField("Puedes darte a conocer en la comunidad presentándote", "Usar la sala <#486981605831999489>")
			  .addField("Para todo lo relacionado con chat general", "Usar la sala <#458221661867606016>")
			  .addField("Para buscar exclusivamente partida de Fortnite BR, SOLO BUSCAR PARTIDAS", "Usar la sala <#468716667506130944>")
			  .addField("Para buscar exclusivamente partida de Ring Of Elysium BR, SOLO BUSCAR PARTIDAS", "Usar la sala <#515621718136717325>")
			  .addField("Para hablar todo lo relacionado con Salvar el Mundo y buscar partidas del mismo SOLO EXCLUSIVAMENTE Salvar el Mundo", "Usar la sala <#508223204939005965>")
			  .addField("Para consultas de dudas, preguntas, problemas", "Usar la sala <#501107883774181415>")
			  .addField("Nota Importante:", "Para poder ver salas de juegos deberás asignarte manualmente el rol del juego en cuestión para más información usa el comando `+roles` en la sala <#481525340083191809>");
			  
			  message.delete().catch(O_o=>{});
			  return message.channel.send(serverembed);
			  }
			

	if (message.content.startsWith(ft + "puntos")) {           //  +puntos   = Muestra la lista de puntuaciones del torneo
			if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setDescription("**TABLA DE PUNTACIONES**")
			  .setColor("#00dcff")
			  .setThumbnail(sicon)
			  .addField("0.50 puntos", "Cada kill")
			  .addField("0.10 puntos", "Puesto 60-55 (ámbos inclusive)")
			  .addField("0.20 puntos", "Puesto 54-45(ámbos inclusive)")
			  .addField("0.30 puntos", "Puesto 44-35(ámbos inclusive)")
			  .addField("0.40 puntos", "Puesto 34-25(ámbos inclusive)")
			  .addField("0.50 puntos", "Puesto 24-15(ámbos inclusive)")
			  .addField("0.60 puntos", "Puesto 14-10(ámbos inclusive)")
			  .addField("0.70 puntos", "Puesto 9-6(ámbos inclusive)")
			  .addField("0.80 puntos", "Puesto 5-2(ámbos inclusive)")
			  .addField("3 puntos", "Victoria");

			  message.delete().catch(O_o=>{});
			  return message.channel.send(serverembed);
			  }
			}

	if (message.content.startsWith(ft + "normastorneo")) {     //  +normastorneo   = Muestra la lista de normas del torneo
			if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
			  let sicon = message.guild.iconURL;
			  let embed1 = new Discord.RichEmbed()
				  .setDescription("**NORMAS DEL TORNEO**")
				  .setColor("#00dcff")
				  .setThumbnail(sicon)
				  .addField("Norma 1:", "Se celebrará por medio de 3 PARTIDAS DE DÚOS.")
				  .addField("Norma 2:", "Las partidas serán continuas no se permiten pausas.")
				  .addField("Norma 3:", "Las parejas serán Seleccionados de forma aleatoria.")
				  .addField("Norma 4:", "Al finalizar, las 3 partidas cada miembro de la pareja deberá de pasar una captura de la sección grabaciones de fortnite en la sala de #📌stats")
				  .addField("Norma 5:", "Cada DÚO deberá anotar la totalidad de puntos mediante la tabla de puntuaciones.")
				  .addField("Norma 6:", "Deberán usar el comando `+finalizar \"Nick Participante 1\" \"Nick Partipante 2\" \"Total de Puntos\" \"Nº de Torneo\"` en la sala de #📓finalizar ");
				 
				let embed2 = new Discord.RichEmbed()
				  .setDescription("**NOTAS IMPORTANTES**")
				  .setColor("#00dcff")
				  .setThumbnail(sicon)
				  .addField("Nota 1:", "Cabe destacar que la contabilidad tanto de puntos como de partidas jugadas serán controladas con rigurosa atención.")
				  .addField("Nota 2:", "En caso de encontrar alguna anomalía o irregularidad en alguna de las participaciones, dicho equipo será expulsado del torneo y sancionado en el clan.")
				  .addField("Nota 3:", "Las normas no obstante se explicarán el día del torneo en una sala a todos los participantes para que no quede ninguna duda")
				  .addField("Norma 4:", "Los premios están aun barajándose ya que es nuestro primer torneo organizado");

				 bot.channels.get("494267127113711618").send(embed1);
				 bot.channels.get("494267127113711618").send(embed2);	 
			  message.delete().catch(O_o=>{});
			  
			  }
			}

	if (message.content.startsWith(ft + "infomedallas")) {     //  +infomedallas   = Lista de comandos de medallas STAFF
		if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
	  let sicon = message.guild.iconURL;
	  let embed1 = new Discord.RichEmbed()
		  .setDescription("**COMANDOS MEDALLAS**")
		  .setColor("#00dcff")
		  .setThumbnail(sicon)
		  .addField("Ver todas las placas del servidor.", "`+vermedallas`")
		  .addField("Añadir una placa al servidor, limite 45 medallas.", "`+addmedalla \"ID Icono\" \"VIP\" \"Placa VIP Especial\"`")
		  .addField("Borrar una placa del servidor.", "`+borrarmedalla \"VIP\"`")
		  .addField("Da una placa a un usuario, limite 20 medallas por usuario.", "`+darmedalla @usuario \"VIP\" \"Motivo\"`")
		  .addField("Quitar una placa a un usuario.", "`+quitarmedalla @usuario \"VIP\"`")
		  .addField("Ver las placas de un usuario o ver tus medallas sin mención", "`+medallas @usuario`")
		  .addField("Da permiso para subir, editar, dar, quitar o borrar las placas.", "`+editormedallas @usuario`")
		  .addField("Quita el permiso para subir, editar, dar quitar o borrar las placas.", "`+quitareditor @usuario`");
		 

		 message.channel.send(embed1);
		 message.delete()
	  
	  }
		}

	if (message.content.startsWith(ft + "infonormas")) {       //  +infonormas   = Envía toda la información sobre las normas canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE LA NORMATIVA',
						url: "http://gamedev.es/",
                        description: '**A Continuación habrá una serie de reglas que todo usuario que se una a este Discord deberá seguir.**',
						fields: [
							{
							name: ":one:",
							value: `╚> No hacer spam de tu canal de Youtube/Twitch/Discord o cualquier web. También incluye spam de mensajes o emojis. (Si necesitas de hacerlo deberás solicitar previo rol  Streamer).`,
							},	
							{
							name: ":two:",
							value: `╚> No faltar el respeto o ser una persona tóxica hacia el resto los usuarios de la comunidad, si te calientas en una partida es mejor desconectar un rato y despejarse. r links de webs o contenido +18.`,
							},
							{
							name: ":three:",
							value: `╚> No se permite el flood o spam en ningún canal.s de advertencia.`,
							},
							{
							name: ":four:",
							value: `╚> No se permite poner links de webs o contenido +18.`,
							},
							{
							name: ":five:",
							value: `╚> No utilizar chetos,ni hacer team killing.`,
							},
							{
							name: ":six:",
							value: `╚> No discriminar a nadie en base a su raza, origen étnico, nacionalidad, género o posición económica. y mucho menos nivel de juego. Todos empezamos alguna vez, recuérdalo.`,
							},
							{
							name: ":seven:",
							value: `╚> Todos los comandos se escriben en la sala <#481525340083191809>, excepto los de **+respeto** que será en <#495990509609943071> y música que será en su sala <#469985496974622755>.`,
							},
							{
							name: ":eight:",
							value: `╚> Es obligatorio mandar solicitud de verificación si entras por primera vez.`,
							},
							{
							name: ":nine:",
							value: `╚> Obligatorio participar, es decir, si vas a jugar pide gente del clan antes que gente externa, da señales de vida, en caso de no hacerlo se te darán toques de advertencia.`,
							},
							{
							name: ":keycap_ten:",
							value: `╚> Se dará prioridad **ABSOLUTA** a miembros del clan para guardar huecos en partida que a gente externa al clan.`,
							}
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}

	if (message.content.startsWith(ft + "inforoles")) {        //  +inforoles   = Envía toda la información sobre roles canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE ROLES',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explican el uso y descripción de cada rol del servidor.**',
						fields: [
							{
							name: "❎ No verificado",
							value: `╚> Gente que entra por primera vez al servidor, y no ha realizado o esta a la espera de verificación por parte del STAFF.`,
							},	
							{
							name: "✅Verificado",
							value: `╚> Gente que su cuenta ha sido verificada por el STAFF.`,
							},
							{
							name: "⚜️[NL] Novato",
							value: `╚> Gente que tras llevar un periodo de días, se examina su actividad, participación, nivel de involucración en el clan y actitud en él. **Se consigue por medio de votación del STAFF a modo de propuesta**.`,
							},
							{
							name: "⚜️[NL] Miembro",
							value: `╚> Gente que es algo mas de confianza y lleva un tiempo indeterminado con nosotros donde se examina su actividad, participacion, nivel de involucracion en el clan y actitud en el. **Se consigue por medio de votación del STAFF a modo de propuesta**.`,
							},
							{	
							name: "⚜️[NL] Veterano",
							value: `╚> Gente que se ha ganado estar aquí, a base de actividad, involucrarse, participar, jugar y mucha confianza. **Este rol tiene beneficios y consigue por medio de votacion del STAFF a modo de propuesta**.`,
							},
							{
							name: "💔 Colaborador",
							value: `╚> Gente que se ha ganado estar aquí, a base de actividad, involucrarse, participar, jugar y mucha confianza. **Este rol tiene beneficios y consigue por medio de votacion del STAFF a modo de propuesta** .Si tienes este rol y necesitas cualquier cosa relacionada con diseño gráfico, streaming, etc... se te hará un presupuesto muy económico.`,
							}
							]							
							}
							}
							message.channel.send(embed);	 
							message.delete();
							};	
	
	if (message.content.startsWith(ft + "infotoques")) {       //  +infotoques   = Envía toda la información sobre toques canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE TOQUES',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explicará el sistema de toques.**',
						fields: [
							{
							name: "Guía de toques:",
							value: `:one: Se dará una advertencia, de que si sigue con esa actitud será expulsado. \n:two: Se procederá a una expulsión temporal de 1 día. \n:three: Se procederá a la expulsión.`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}

	if (message.content.startsWith(ft + "infoimportante")) {   //  +infoimportante   = Envía toda la información IMPORTANTE canal IMPORTANTE
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN IMPORTANTE',
						url: "http://gamedev.es/",
						fields: [
							{
							name: "Guía de acceso:",
							value: `:one: Revisa tus Mensajes Privados y mira uno de Next Level. \n\n:two: Entra al canal <#485759738164936719> leete todas y cada una de las normas. \n\n:three: Solo tendrás que esperar a que un STAFF te verifique y te de accesos para ver todo el contenido. \n\n:four: Ve al canal <#486981605831999489> y preséntate sin miedo. \n\n:five: Una vez tengas los permisos ve al canal <#481525340083191809> y escribe **+roles** , asígnate los roles de los juegos que quieras recibir notificaciones.`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}
	

	if (message.content.startsWith(ft + "infobene")) {         //  +infobene   = Envía toda la información sobre beneficios de roles canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE BENEFICIOS DE ROLES',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explican los beneficios que tienen determinados roles de nuestro servidor.**',
						fields: [
							{
							name: "**+respeto @user, +stats, +solo, +escuadron**",
							value: `SOLO podrán usarse si eres ⚜️[NL] Novato para arriba.`,	
							},
							{
							name: "**+update y +apodo true/false**",
							value: `SOLO podran usarse si eres 💔 Colaborador para arriba. \n\n**:clipboard: **NOTA** \nCon esto queremos incentivar la participación de la gente, la colaboración en el mismo, la actividad y que no sea todo entrar por entrar, sino que los roles tomen importancia.`,	
							}
											
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}

	if (message.content.startsWith(ft + "infoperfil")) {       //  +infoperfil  = Envía toda la información sobre perfil canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE SISTEMA DE PERFIL',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explican los comandos para usar el perfil.**',
						fields: [
							{
							name: "**+perfil**",
							value: `Te muestra tu perfil con datos de medallas obtenidas y cantidad de respetos recibidos.`,	
							},
							{
							name: "**+perfil @usuario**",
							value: `Podemos ver el perfil de un usuario concreto. \n\n**:clipboard: NOTA** \nCon esto queremos incentivar la participación de la gente, la colaboración en el mismo, la actividad y que no sea todo entrar por entrar.`,	
							}
											
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}

	if (message.content.startsWith(ft + "informacionmedallas")) {  //  +informacionmedallas   = Envía toda la información sobre medallas canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE MEDALLAS',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explican los comandos para usar las medallas.**',
						fields: [
							{
							name: "**+medallas**",
							value: `Te muestra tus con datos de medallas obtenidas y los motivos de por que las tienes.`,	
							},
							{
							name: "**+medallas @usuario**",
							value: `Podemos ver las medallas de un usuario y sus motivos. \n\nCon esto queremos incentivar la participacion de la gente, la colaboración en el mismo, la actividad y que no sea todo entrar por entrar.`,	
							}
											
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}

	if (message.content.startsWith(ft + "inforeputacion")) {      //  +inforeputacion   = Envía toda la información sobre reputacion canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE SISTEMA DE REPUTACIÓN',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explican los comandos del sistema.**',
						fields: [
							{
							name: "**+respeto @usuario**",
							value: `Le daremos un respeto a un usuario. \n\n\Con esto queremos incentivar la participacion de la gente, la colaboración en el mismo, la actividad y que no sea todo entrar por entrar. \n\n:clipboard: **IMPORTANTE** \n\n● Solo tendremos **3 respetos diarios**, es decir, **a las 24 de haber realizado nuestro primer respeto** tendremos disponible uno nuevo y así con los demás. \n● Los respetos gastarlos a diario, porque para determinados eventos la participación exigirá tener un número determinado de respetos.`,	
							}
											
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}  
 
	if (message.content.startsWith(ft + "infoinvi")) {         //  +infoinvi   = Envía toda la información sobre invitaciones canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE LINK DE INVITACIÓN',
						url: "http://gamedev.es/",
                        description: '**Conoces gente que le pueda interesar nuestro clan o quieres que entren contigo aquí. Invítalos usando el siguiente link**',
						fields: [
							{
							name: "Copia y pega el enlace a un amigo/a",
							value: `:beginner: https://discord.gg/czN3fEm`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}
   

    
    } // FIN COMANDOS STAFF

if (message.content.startsWith(ft + "buscarpartidas")) {         //  +buscarpartidas   = Envía toda la información sobre invitaciones canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'COMANDO PARA BUSCAR PARTIDAS',
						url: "http://gamedev.es/",
                        description: '**DEBERÁS ESTAR EN UNA SALA DE VOZ EN PRIMER LUGAR.**',
						fields: [
							{
							name: "`+buscarfortnite descripción`",
							value: `Para Fortnite BR, escribir el comando en la sala <#468716667506130944>`,		
							},
							{
							name: "+buscarroe descripción",
							value: `Para Ring Of Elysium BR, escribir el comando en la sala <#515621718136717325>`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}	
	
	
	
// +BUSCAR DESCRIPCION // PARTIDAS //    - FUNCIONANDO
if(message.content.startsWith("+buscarfortnite")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscarfortnite ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "🤖 Fortnite");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO PARTIDA DE FORTNITE",
								"url": "http://gamedev.es/",
								"description": "Busco **" + users + "** personas para darle calor en **" + message.member.voiceChannel.name + "**",
								"color": 0xc500ff,
								"timestamp": message.createdAt,
								"author": {
								"name": message.author.tag,
								"icon_url": message.author.avatarURL
								},
								"fields": [
								  {
									"name": "Descripción",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "Únete a mi sala",
									"value": "[Haz click para unirte](https://discord.gg/"+ invitacion +")"
								  }
								]
							  }
							}



	message.delete().catch(O_o=>{});
	bot.channels.get("468716667506130944").send(`[${adminRoleObject}]`, mdb);
        
						
                           
                        })
                        .catch(console.error);
                    }
                }
            }   	
   
// +BUSCAR DESCRIPCION // PARTIDAS //    - FUNCIONANDO
if(message.content.startsWith("+buscarroe")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscarroe ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "🔼 ROE");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO PARTIDA DE RING OF ELYSIUM",
								"url": "http://gamedev.es/",
								"description": "Busco **" + users + "** personas para darle calor en **" + message.member.voiceChannel.name + "**",
								"color": 0xc500ff,
								"timestamp": message.createdAt,
								"author": {
								"name": message.author.tag,
								"icon_url": message.author.avatarURL
								},
								"fields": [
								  {
									"name": "Descripción",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "Únete a mi sala",
									"value": "[Haz click para unirte](https://discord.gg/"+ invitacion +")"
								  }
								]
							  }
							}



	message.delete().catch(O_o=>{});
	bot.channels.get("515621718136717325").send(`[${adminRoleObject}]`, mdb);
        
						
                           
                        })
                        .catch(console.error);
                    }
                }
            } 
			

			


   
// CONFIG BOT 
if(message.channel.type === "dm") return;
		if(message.author.bot) return;
		let prefix = botconfig.prefix;
		let messageArray = message.content.split(" ");
		let cmd = messageArray[0];
		let argsx = messageArray.slice(1);
		let commandfile = bot.commands.get(cmd.slice(prefix.length));
		if(commandfile) commandfile.run(bot,message,argsx);
 

});


		 

 // ACTIVIDAD DEL BOT (JUGANDO A +HELP) //
bot.on("ready", async () => {
	console.log(`${bot.user.username} estÃ¡ online`);
	bot.user.setActivity("+help");
});

bot.login(process.env.BOT_TOKEN);
