const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
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
    let embed = { embed: {
                color: 0x04ff00,
                title: "Hola bienvenido a Next Level",
                 description: '**No olvides asignarte tu rol manualmente del juego que quieras ver las salas. Usando el comando +roles en la sala <#561599847183155200>**',
                
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo usuario ${member} a Next-Level**`, embed)

    member.send({
        embed: {
                color: 0x04ff00,
                title: "Hola bienvenido a Next Level",
                description: '**No olvides asignarte tu rol manualmente del juego que quieras ver las salas. Usando el comando +roles en la sala <#561599847183155200>**',   
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
    let role = member.guild.roles.find("name", "✅Verificado");
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


			let presentarsechannel = bot.channels.get("561599814853460001");
			if(!presentarsechannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			presentarsechannel.send(presentarse);
		}
		 
	if (message.content.startsWith(ft + "rolcsgo")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "🏴 CSGO");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xffffff,
                        description: "**ROL de CSGO asignado a **" + User + " **correctamente**",
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
	  .addField("**+infoascensos**", "Información referente a cómo ascender");
	  
	  

	  bot.channels.get("561599847183155200").send(serverembed);
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
		  
		  bot.channels.get("561599847183155200").send(serverembed);
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
	

	
	if (message.content.startsWith(ft + "roles")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**ASIGNACIÓN DE ROLES**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**+rolcsgo**", "Te añade el rol de CSGO y te dará acceso a la sala exclusiva de chat y búsqueda de partidas")
		  .addField("**+rolsalvar**", "Te añade el rol de Salvar el Mundo y te dará acceso a la sala exclusiva de chat y búsqueda de partidas")
		  .addField("**+rolfortnite**", "Te añade el rol de Fortnite y te dará acceso a la sala exclusiva de chat y búsqueda de partidas");
		   
		   
		  return message.channel.send(serverembed);
		  }
			  
} //FIN DE COMANDOS GENERALES
 


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
			bot.channels.get("561601089460371457").send(`[${adminRoleObject}]`, embebido);

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
                        description: "**¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. \n\nPara más información accede al canal de texto #info. \n\nNo olvides asignarte tu rol para recibir las notificaciones de fortnite en sala #comandos escribe +roles y usa el que quieras.**",
                    }
                });
				
			
                bot.channels.get("561600874053500928").send({
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
		  
		  
		  
		  
		  return message.channel.send(serverembed);
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
							value: `╚> Todos los comandos se escriben en la sala <#561599847183155200> excepto los de música que será en su sala <#561600463963684874>.`,
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
							value: `:one: Revisa tus Mensajes Privados y mira uno de Next Level. \n\n:two: Entra al canal <#561595483328610304> leete todas y cada una de las normas. \n\n:three: Solo tendrás que esperar a que un STAFF te verifique y te de accesos para ver todo el contenido. \n\n:four: Una vez tengas los permisos ve al canal <#561599847183155200> y escribe **+roles** , asígnate los roles de los juegos que quieras recibir notificaciones.`,	
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
	bot.channels.get("561602695656636431").send(`[${adminRoleObject}]`, mdb);
        
						
                           
                        })
                        .catch(console.error);
                    }
                }
            }
	
   
// +BUSCAR DESCRIPCION // PARTIDAS //    - FUNCIONANDO
if(message.content.startsWith("+buscarcsgo")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscarcsgo ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "🏴 CSGO");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO PARTIDA DE CSGO",
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
	bot.channels.get("561607199043092480").send(`[${adminRoleObject}]`, mdb);
        
						
                           
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
