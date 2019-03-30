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
            
  let welcomechannel = member.guild.channels.find(`name`, "馃搱-entradas");
    let embed = { embed: {
                color: 0x04ff00,
                title: "Hola bienvenido a Next Level",
                description: '**A continuaci贸n, te mostramos una breve gu铆a sobre como entrar a nuestro servidor.**',
                fields: [
                    {
                    name: "Advertencia:",
                    value: `:warning: Si no ves contenido ninguno en el servidor, es normal, forma parte de un sistema de verificaci贸n, para as铆 proteger nuestra intimidad.`,
                    },
                    {
                    name: "Gu铆a de verificaci贸n:",
                    value: `:one: Tienes que verificar tu cuenta para tener acceso completo al servidor, ingresando en la sala <#471977292214566912> y escribiendo **+solicitar**  \n:two: Una vez verificado, ser谩s notificado de ello mediante MP y podr谩s tener acceso.  \n:three: Ahora solo tendr谩s que ir a <#481525340083191809> y escribir **+roles** y asignarte el del juego que quieras para ver las salas`,
                    }	
                ]
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo usuario ${member} a Next-Level**`, embed)

    member.send({
        embed: {
                color: 0x04ff00,
                title: "Hola bienvenido a Next Level",
                description: '**A continuaci贸n, te mostramos una breve gu铆a sobre como entrar a nuestro servidor.**',
                fields: [
                    {
                    name: "Advertencia:",
                    value: `:warning: Si no ves contenido ninguno en el servidor, es normal, forma parte de un sistema de verificaci贸n, para as铆 proteger nuestra intimidad.`,
                    },
                    {
                    name: "Gu铆a de verificaci贸n:",
                    value: `:one: Tienes que verificar tu cuenta para tener acceso completo al servidor, ingresando en la sala <#471977292214566912> y escribiendo **+solicitar**  \n:two: Una vez verificado, ser谩s notificado de ello mediante MP y podr谩s tener acceso.  \n:three: Ahora solo tendr谩s que ir a <#481525340083191809> y escribir **+roles** y asignarte el del juego que quieras para ver las salas`,
                    }	
                ]
            }
        });
 });

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "馃搲-abandonos");
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
    let role = member.guild.roles.find("name", "鉂?No verificado");
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
  
// REACCION EMOJI SALA VOTACION DE SANCI脫N //
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
                        description: "Tu rol actual no dispone de suficientes privilegios, debes de participar e interactuar m谩s con el clan para ascender a un rol superior. \n\n Para mas informaci贸n ir al canal: <#485759738164936719> y secci贸n **BENEFICIOS**",
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
				message.channel.send("+presentarse \"Nombre\" \"Nick de EpicGames\" \"Edad\" \"Ciudad\" \"Plataforma\" \"驴C贸mo nos conociste\"");
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
					title: "**NUEVA PRESENTACI脫N DE USUARIO**",
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
							name: "驴C贸mo nos conociste?:",
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
		 
	if (message.content.startsWith(ft + "rolcsgo")) {
        message.delete();
            if(message.member.roles.find("name", "鉁匳erificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "馃彺 CSGO");
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
	
	if (message.content.startsWith(ft + "rolapex")) {
        message.delete();
            if(message.member.roles.find("name", "鉁匳erificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "馃叞锔?Apex Legends");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xffffff,
                        description: "**ROL de Apex Legends asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
 
	if (message.content.startsWith(ft + "rolfortnite")) {
        message.delete();
            if(message.member.roles.find("name", "鉁匳erificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "馃 Fortnite");
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
            if(message.member.roles.find("name", "鉁匳erificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "馃挜Salvar el Mundo");
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
	  .addField("**+serverinfo**", "informaci贸n del servidor")
	  .addField("**+fortnite**", "Comandos para uso de Fortnite")
	  .addField("**+roles**", "Comandos para a帽adirte roles de juegos")
	  .addField("**+presentacion**", "Comandos para presentarse en el servidor")
	  .addField("**+infosalas**", "Informaci贸n de todas las salas y sus usos.")
	  .addField("**+infoascensos**", "Informaci贸n referente a c贸mo ascender")
	  .addField("**+sugerencia**", "Comandos para publicar sugerencias solo en sala #sugerencias (+sugerencia desarrollo)");
	  

	  bot.channels.get("481525340083191809").send(serverembed);
	  }	
	
	if (message.content.startsWith(ft + "musica")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**M脷SICA**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**!play link o nombre**", "Comando para buscar canci贸n.")
		  .addField("**!stop**", "Comando para parar la m煤sica")
		  .addField("**!skip**", "Pasar canci贸n")
		  .addField("**!loop**", "Hacer bucle")
		  .addField("**!pause**", "Pausar m煤sica")
		  .addField("**!resume**", "volver poner m煤sica despu茅s de pausa");
		  
		  bot.channels.get("481525340083191809").send(serverembed);
		  }
	
    if (message.content.startsWith(ft + "infoascensos")) {       //  +infoascensos   = Env铆a toda la informaci贸n sobre valores para ascender
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACI脫N DE COMO ASCENDER EN LA COMUNIDAD',
						url: "http://gamedev.es/",
                        description: '**A Continuaci贸n se detallar谩n una serie de pautas que se tienen en cuenta a la hora de ascender a alguien.**',
						fields: [
							{
							name: "Primero",
							value: `**La actividad**, es decir, la presencia en nuestros canales de voz.`,
							},	
							{
							name: "Segundo",
							value: `**La participaci贸n**, es decir, participar en eventos que se organicen, jugar partidas con gente de la comunidad, requerir gente para jugar, etc...`,
							},
							{
							name: "Tercero",
							value: `**La involucraci贸n**, es decir, que quieran aportar sugerencias, ideas, proyectos para mejorar la comunidad.`,
							},
							{
							name: "Cuarto",
							value: `**El Inter茅s**, es decir, las ganas de participar en las cosas, las ganas de hablar con otros miembros por los diferentes canales, rellenar encuestas etc...`,
							},
							{
							name: "Quinto",
							value: `**La cantidad de Respetos**, es decir, suponemos que si una persona tiene 20 respetos por ejemplo significa que esa persona ha sido bien valorada por los miembros de la comunidad ya sea por actitudes o acciones que ha realizado la persona a lo largo de su paso por aqu铆.`,
							},
							{
							name: "Importante",
							value: `No olvidemos que los ascensos no son autom谩ticos, son a propuesta del STAFF, y si no has ascendido es porque no te han propuesto, los ascensos no se regalan, hay que ganarlos. Ya depende de t铆 si quieres o no.`,
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
		  .setDescription("**COMANDOS DE PEL脥CULAS**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**+cartelera \"Nombre de la pel铆cula\" \"D铆a\"**", "Publicamos en <#499629460916797441> la pel铆cula ganadora de hoy")
		  .addField("**+votarpelicula \"Nombre de la pel铆cula\" \"D铆a\"**", "Publicamos en <#499632058881146880> la pel铆cula que queramos proponer para votaci贸n");
		 
		  
		  message.channel.send(serverembed);
		  }			  
	 
	if (message.content.startsWith(ft + "solicitar")) {
  let rUser = message.guild.member;
  if(!rUser) return message.channel.send("formato incorrecto +solicitar");

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("NUEVA PETICI脫N DE ACCESO")
  .setColor("#52a255")
  .addField("Solicitante:", `${message.author}`)
  .addField("Fecha:", message.createdAt)

  let reportschannel = message.guild.channels.find(`name`, "鉂?solicitudes");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
  }  
  
	if (message.content.startsWith(ft + "presentacion")) {  //+presentacion  = Informaci贸n de como presentarte
    var presentacion = {
		"embed": {
			color: 0xff0000 ,
			title: "**COMANDO DE PRESENTARSE**",
			url: "http://gamedev.es/",				
			fields: [
				{
				name: "**Copia el mensaje de abajo y rellena los huecos con los datos correspondientes**",
				value: "`+presentarse \"Nombre\" \"Nick de EpicGames\" \"Edad\" \"Ciudad\" \"Plataforma\" \"驴C贸mo nos conociste?\"`"
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
				message.channel.send("+cartelera \"Nombre de la pel铆cula\" \"D铆a\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**NUEVA PEL脥CULA ELEGIDA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "馃幀 Pel铆cula",
						value: NickParticipante1,
						},
						{
						name: "馃搯 D铆a",
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
				message.channel.send("+votarpelicula \"Nombre de la pel铆cula\" \"D铆a\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**NUEVA VOTACI脫N DE PEL脥CULA**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "馃懁 La propone:",
						value: `${message.author}`,
						},
						{
						name: "馃幀 Pel铆cula",
						value: NickParticipante1,
						},
						{
						name: "馃搯 D铆a",
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
		  .setDescription("**ASIGNACI脫N DE ROLES**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**+rolcsgo**", "Te a帽ade el rol de CSGO y te dar谩 acceso a la sala exclusiva de chat y b煤squeda de partidas")
		  .addField("**+rolapex**", "Te a帽ade el rol de Apex Legends y te dar谩 acceso a la sala exclusiva de chat y b煤squeda de partidas")
		  .addField("**+rolsalvar**", "Te a帽ade el rol de Salvar el Mundo y te dar谩 acceso a la sala exclusiva de chat y b煤squeda de partidas")
		  .addField("**+rolfortnite**", "Te a帽ade el rol de Fortnite y te dar谩 acceso a la sala exclusiva de chat y b煤squeda de partidas");
		   
		   
		  return message.channel.send(serverembed);
		  }
			  
} //FIN DE COMANDOS GENERALES
 
if (message.channel.id == message.channel.id) { 				    // COMANDOS TORNEO


	

	
	if (message.content.startsWith(ft + "hall")) {   //  +hall "Usuario" "Fecha" "Descripci贸n"     = Comunicamos un nuevo usario al HALL DE LA FAMA
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
				message.channel.send("+hall \"Usuario\" \"Fecha\" \"Descripci贸n\"");
				return;
			}

			let NickParticipante1 = args[0];
			let Fecha = args[1];
			let ntorneo = args[2];
			var torneo = {
				"embed": {
					color: 0x7608AA ,
					title: "**馃弳 NUEVA ALFOMBRA ROJA 馃弳**",
					url: "http://gamedev.es/",				

					fields: [{
						name: "馃 Usuario:",
						value: NickParticipante1,
						},
						{
							name: "馃搯 Fecha:",
							value: Fecha,
						},
						{
							name: "馃弳 Descripci贸n:",
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

	

	if (message.content.startsWith(ft + "apuntarme")) {  //  +apuntarme    = Nos apuntamos al torneo
  let rUser = message.guild.member;
  if(!rUser) return message.channel.send("formato incorrecto +APUNTARME");

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("NUEVA INSCRIPCI脫N")
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

	if (message.content.startsWith(ft + "addrol")) {           //  +addrol @user      = A帽ade un rol establecido en por ID
	
				let rUser = message.guild.member(message.mentions.users.first());
				let role = message.guild.roles.find("id", "458226959907028992");
				let guild = bot.guilds.get("458220475957379074");
				rUser.addRole(role).catch(console.error);
				message.channel.send({
					embed: {
						color: 0xc500ff,
						description: "ROL a帽adido a " + rUser + " correctamente",
					}
				});
				message.delete();
		}
		
	if (message.content.startsWith(ft + "serverinfo")) {       //  +serverinfo  = Muestra la informaci贸nd del servidor
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setDescription("**Informaci贸n del Servidor**")
			  .setColor("#FE2E2E")
			  .setThumbnail(sicon)
			  .addField("**Nombre del Servidor**", message.guild.name)
			  .addField("**Miembros Totales**", message.guild.memberCount);
			  
			  return message.channel.send(serverembed);
			  }			  

    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "馃専 STAFF M脕STER") || message.member.roles.find("name", "馃専 STAFF NIVEL 2") || message.member.roles.find("name", "馃専 STAFF NIVEL 1") || message.member.roles.find("name", "馃専 STAFF EN PRUEBAS")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "鉁匳erificado");
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

	if (message.content.startsWith(ft + "donacion")) {         //  +donaci贸n mensaje   = Enviamos un mensaje de nueva donaci贸n en una sala concreta
		  if(message.member.roles.find("name", "馃専 STAFF M脕STER") || message.member.roles.find("name", "馃専 STAFF NIVEL 2") || message.member.roles.find("name", "馃専 STAFF NIVEL 1") || message.member.roles.find("name", "馃専 STAFF EN PRUEBAS")){
		   let adminRoleObject = message.guild.roles.find("name", "鉁匳erificado");
		  var comunicado = message.content.replace("+donacion ", "");  

			var embebido = {
					  "embed": {
										color: 0xff0000,
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										title: "**馃挵 NUEVA DONACI脫N RECIBIDA 馃挵**",
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
      if(message.member.roles.find("name", "馃専 STAFF M脕STER") || message.member.roles.find("name", "馃専 STAFF NIVEL 2") || message.member.roles.find("name", "馃専 STAFF NIVEL 1") || message.member.roles.find("name", "馃専 STAFF EN PRUEBAS")){
                let User = message.mentions.users.first();
                let role = message.guild.roles.find("name", "鉁匳erificado");
                let role2 = message.guild.roles.find("name", "鉂?No verificado");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                miembro.removeRole(role2).catch(console.error);
                User.send({
                    embed: {
                        color: 0x04ff00,
                        title: "**HAS SIDO VERIFICADO**",
			                  url: "http://gamedev.es/",
                        description: "**隆Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. \n\nPara m谩s informaci贸n accede al canal de texto #info. \n\nNo olvides asignarte         tu rol para recibir las notificaciones de fortnite en sala #comandos escribe +roles y usa el que quieras.**",
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

	

	if (message.content.startsWith(ft + "staff")) {            //  +staff   = Informaci贸n de todos los comandos de STAFF
		if(message.member.roles.find("name", "馃専 STAFF M脕STER") || message.member.roles.find("name", "馃専 STAFF NIVEL 2") || message.member.roles.find("name", "馃専 STAFF NIVEL 1") || message.member.roles.find("name", "馃専 STAFF EN PRUEBAS")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#00dcff")
		  .setThumbnail(sicon)
		  .addField("**+report**", "Abrimos la lista de comandos para los toques")
		  .addField("**+verificar @User**", "Asigna rol Verificado para acceder al contenido del discord")
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+proponer @User Raz贸n**", "Propone a un usuario ascenso de rango por x motivo")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #馃搵-comunicados")
		  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
		  
		  
		  
		  
		  return message.channel.send(serverembed);
		  }
		}
		
	
	if (message.content.startsWith(ft + "infosalas")) {           //  +infosalas   = Muestra la informaci贸n de uso de salas
		
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setTitle ("INFORMACI脫N DE USO DE SALAS")
			  
			  .setColor("#00dcff")
			  .setThumbnail(sicon)
			  .addField("Todo lo relacionado con informaci贸n de la comunidad, normas,roles, beneficios etc..", "Usar la sala <#485759738164936719>")
			  .addField("Puedes darte a conocer en la comunidad present谩ndote", "Usar la sala <#486981605831999489>")
			  .addField("Para todo lo relacionado con chat general", "Usar la sala <#458221661867606016>")
			  .addField("Para buscar exclusivamente partida de Fortnite BR, SOLO BUSCAR PARTIDAS", "Usar la sala <#468716667506130944>")
			  .addField("Para buscar exclusivamente partida de Ring Of Elysium BR, SOLO BUSCAR PARTIDAS", "Usar la sala <#515621718136717325>")
			  .addField("Para hablar todo lo relacionado con Salvar el Mundo y buscar partidas del mismo SOLO EXCLUSIVAMENTE Salvar el Mundo", "Usar la sala <#508223204939005965>")
			  .addField("Para consultas de dudas, preguntas, problemas", "Usar la sala <#501107883774181415>")
			  .addField("Nota Importante:", "Para poder ver salas de juegos deber谩s asignarte manualmente el rol del juego en cuesti贸n para m谩s informaci贸n usa el comando `+roles` en la sala <#481525340083191809>");
			  
			  message.delete().catch(O_o=>{});
			  return message.channel.send(serverembed);
			  }
			

	if (message.content.startsWith(ft + "puntos")) {           //  +puntos   = Muestra la lista de puntuaciones del torneo
			if(message.member.roles.find("name", "馃専 STAFF M脕STER") || message.member.roles.find("name", "馃専 STAFF NIVEL 2") || message.member.roles.find("name", "馃専 STAFF NIVEL 1") || message.member.roles.find("name", "馃専 STAFF EN PRUEBAS")){
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setDescription("**TABLA DE PUNTACIONES**")
			  .setColor("#00dcff")
			  .setThumbnail(sicon)
			  .addField("0.50 puntos", "Cada kill")
			  .addField("0.10 puntos", "Puesto 60-55 (谩mbos inclusive)")
			  .addField("0.20 puntos", "Puesto 54-45(谩mbos inclusive)")
			  .addField("0.30 puntos", "Puesto 44-35(谩mbos inclusive)")
			  .addField("0.40 puntos", "Puesto 34-25(谩mbos inclusive)")
			  .addField("0.50 puntos", "Puesto 24-15(谩mbos inclusive)")
			  .addField("0.60 puntos", "Puesto 14-10(谩mbos inclusive)")
			  .addField("0.70 puntos", "Puesto 9-6(谩mbos inclusive)")
			  .addField("0.80 puntos", "Puesto 5-2(谩mbos inclusive)")
			  .addField("3 puntos", "Victoria");

			  message.delete().catch(O_o=>{});
			  return message.channel.send(serverembed);
			  }
			}

	if (message.content.startsWith(ft + "normastorneo")) {     //  +normastorneo   = Muestra la lista de normas del torneo
			if(message.member.roles.find("name", "馃専 STAFF M脕STER") || message.member.roles.find("name", "馃専 STAFF NIVEL 2") || message.member.roles.find("name", "馃専 STAFF NIVEL 1") || message.member.roles.find("name", "馃専 STAFF EN PRUEBAS")){
			  let sicon = message.guild.iconURL;
			  let embed1 = new Discord.RichEmbed()
				  .setDescription("**NORMAS DEL TORNEO**")
				  .setColor("#00dcff")
				  .setThumbnail(sicon)
				  .addField("Norma 1:", "Se celebrar谩 por medio de 3 PARTIDAS DE D脷OS.")
				  .addField("Norma 2:", "Las partidas ser谩n continuas no se permiten pausas.")
				  .addField("Norma 3:", "Las parejas ser谩n Seleccionados de forma aleatoria.")
				  .addField("Norma 4:", "Al finalizar, las 3 partidas cada miembro de la pareja deber谩 de pasar una captura de la secci贸n grabaciones de fortnite en la sala de #馃搶stats")
				  .addField("Norma 5:", "Cada D脷O deber谩 anotar la totalidad de puntos mediante la tabla de puntuaciones.")
				  .addField("Norma 6:", "Deber谩n usar el comando `+finalizar \"Nick Participante 1\" \"Nick Partipante 2\" \"Total de Puntos\" \"N潞 de Torneo\"` en la sala de #馃摀finalizar ");
				 
				let embed2 = new Discord.RichEmbed()
				  .setDescription("**NOTAS IMPORTANTES**")
				  .setColor("#00dcff")
				  .setThumbnail(sicon)
				  .addField("Nota 1:", "Cabe destacar que la contabilidad tanto de puntos como de partidas jugadas ser谩n controladas con rigurosa atenci贸n.")
				  .addField("Nota 2:", "En caso de encontrar alguna anomal铆a o irregularidad en alguna de las participaciones, dicho equipo ser谩 expulsado del torneo y sancionado en el clan.")
				  .addField("Nota 3:", "Las normas no obstante se explicar谩n el d铆a del torneo en una sala a todos los participantes para que no quede ninguna duda")
				  .addField("Norma 4:", "Los premios est谩n aun baraj谩ndose ya que es nuestro primer torneo organizado");

				 bot.channels.get("494267127113711618").send(embed1);
				 bot.channels.get("494267127113711618").send(embed2);	 
			  message.delete().catch(O_o=>{});
			  
			  }
			}

	

	if (message.content.startsWith(ft + "infonormas")) {       //  +infonormas   = Env铆a toda la informaci贸n sobre las normas canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACI脫N SOBRE LA NORMATIVA',
						url: "http://gamedev.es/",
                        description: '**A Continuaci贸n habr谩 una serie de reglas que todo usuario que se una a este Discord deber谩 seguir.**',
						fields: [
							{
							name: ":one:",
							value: `鈺? No hacer spam de tu canal de Youtube/Twitch/Discord o cualquier web. Tambi茅n incluye spam de mensajes o emojis. (Si necesitas de hacerlo deber谩s solicitar previo rol  Streamer).`,
							},	
							{
							name: ":two:",
							value: `鈺? No faltar el respeto o ser una persona t贸xica hacia el resto los usuarios de la comunidad, si te calientas en una partida es mejor desconectar un rato y despejarse. r links de webs o contenido +18.`,
							},
							{
							name: ":three:",
							value: `鈺? No se permite el flood o spam en ning煤n canal.s de advertencia.`,
							},
							{
							name: ":four:",
							value: `鈺? No se permite poner links de webs o contenido +18.`,
							},
							{
							name: ":five:",
							value: `鈺? No utilizar chetos,ni hacer team killing.`,
							},
							{
							name: ":six:",
							value: `鈺? No discriminar a nadie en base a su raza, origen 茅tnico, nacionalidad, g茅nero o posici贸n econ贸mica. y mucho menos nivel de juego. Todos empezamos alguna vez, recu茅rdalo.`,
							},
							{
							name: ":seven:",
							value: `鈺? Todos los comandos se escriben en la sala <#481525340083191809>, excepto los de **+respeto** que ser谩 en <#495990509609943071> y m煤sica que ser谩 en su sala <#469985496974622755>.`,
							},
							{
							name: ":eight:",
							value: `鈺? Es obligatorio mandar solicitud de verificaci贸n si entras por primera vez.`,
							},
							{
							name: ":nine:",
							value: `鈺? Obligatorio participar, es decir, si vas a jugar pide gente del clan antes que gente externa, da se帽ales de vida, en caso de no hacerlo se te dar谩n toques de advertencia.`,
							},
							{
							name: ":keycap_ten:",
							value: `鈺? Se dar谩 prioridad **ABSOLUTA** a miembros del clan para guardar huecos en partida que a gente externa al clan.`,
							}
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}

	if (message.content.startsWith(ft + "inforoles")) {        //  +inforoles   = Env铆a toda la informaci贸n sobre roles canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACI脫N SOBRE ROLES',
						url: "http://gamedev.es/",
                        description: '**A Continuaci贸n se explican el uso y descripci贸n de cada rol del servidor.**',
						fields: [
							{
							name: "鉂?No verificado",
							value: `鈺? Gente que entra por primera vez al servidor, y no ha realizado o esta a la espera de verificaci贸n por parte del STAFF.`,
							},	
							{
							name: "鉁匳erificado",
							value: `鈺? Gente que su cuenta ha sido verificada por el STAFF.`,
							},
							{
							name: "鈿滐笍[NL] Novato",
							value: `鈺? Gente que tras llevar un periodo de d铆as, se examina su actividad, participaci贸n, nivel de involucraci贸n en el clan y actitud en 茅l. **Se consigue por medio de votaci贸n del STAFF a modo de propuesta**.`,
							},
							{
							name: "鈿滐笍[NL] Miembro",
							value: `鈺? Gente que es algo mas de confianza y lleva un tiempo indeterminado con nosotros donde se examina su actividad, participacion, nivel de involucracion en el clan y actitud en el. **Se consigue por medio de votaci贸n del STAFF a modo de propuesta**.`,
							},
							{	
							name: "鈿滐笍[NL] Veterano",
							value: `鈺? Gente que se ha ganado estar aqu铆, a base de actividad, involucrarse, participar, jugar y mucha confianza. **Este rol tiene beneficios y consigue por medio de votacion del STAFF a modo de propuesta**.`,
							},
							{
							name: "馃挃 Colaborador",
							value: `鈺? Gente que se ha ganado estar aqu铆, a base de actividad, involucrarse, participar, jugar y mucha confianza. **Este rol tiene beneficios y consigue por medio de votacion del STAFF a modo de propuesta** .Si tienes este rol y necesitas cualquier cosa relacionada con dise帽o gr谩fico, streaming, etc... se te har谩 un presupuesto muy econ贸mico.`,
							}
							]							
							}
							}
							message.channel.send(embed);	 
							message.delete();
							};	
	
	if (message.content.startsWith(ft + "infotoques")) {       //  +infotoques   = Env铆a toda la informaci贸n sobre toques canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACI脫N SOBRE TOQUES',
						url: "http://gamedev.es/",
                        description: '**A Continuaci贸n se explicar谩 el sistema de toques.**',
						fields: [
							{
							name: "Gu铆a de toques:",
							value: `:one: Se dar谩 una advertencia, de que si sigue con esa actitud ser谩 expulsado. \n:two: Se proceder谩 a una expulsi贸n temporal de 1 d铆a. \n:three: Se proceder谩 a la expulsi贸n.`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}

	if (message.content.startsWith(ft + "infoimportante")) {   //  +infoimportante   = Env铆a toda la informaci贸n IMPORTANTE canal IMPORTANTE
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACI脫N IMPORTANTE',
						url: "http://gamedev.es/",
						fields: [
							{
							name: "Gu铆a de acceso:",
							value: `:one: Revisa tus Mensajes Privados y mira uno de Next Level. \n\n:two: Entra al canal <#485759738164936719> leete todas y cada una de las normas. \n\n:three: Solo tendr谩s que esperar a que un STAFF te verifique y te de accesos para ver todo el contenido. \n\n:four: Ve al canal <#486981605831999489> y pres茅ntate sin miedo. \n\n:five: Una vez tengas los permisos ve al canal <#481525340083191809> y escribe **+roles** , as铆gnate los roles de los juegos que quieras recibir notificaciones.`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}
	

	
 
	if (message.content.startsWith(ft + "infoinvi")) {         //  +infoinvi   = Env铆a toda la informaci贸n sobre invitaciones canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACI脫N SOBRE LINK DE INVITACI脫N',
						url: "http://gamedev.es/",
                        description: '**Conoces gente que le pueda interesar nuestro clan o quieres que entren contigo aqu铆. Inv铆talos usando el siguiente link**',
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

if (message.content.startsWith(ft + "buscarpartidas")) {         //  +buscarpartidas   = Env铆a toda la informaci贸n sobre invitaciones canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'COMANDO PARA BUSCAR PARTIDAS',
						url: "http://gamedev.es/",
                        description: '**DEBER脕S ESTAR EN UNA SALA DE VOZ EN PRIMER LUGAR.**',
						fields: [
							{
							name: "`+buscarfortnite descripci贸n`",
							value: `Para Fortnite BR, escribir el comando en la sala <#468716667506130944>`,		
							},
							{
							name: "+buscarroe descripci贸n",
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
                        let adminRoleObject = server.roles.find("name", "馃 Fortnite");
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
									"name": "Descripci贸n",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "脷nete a mi sala",
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
	
	if(message.content.startsWith("+buscarapex")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscarapex ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "馃叞锔?Apex Legends");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO PARTIDA DE APEX LEGENDS",
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
									"name": "Descripci贸n",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "脷nete a mi sala",
									"value": "[Haz click para unirte](https://discord.gg/"+ invitacion +")"
								  }
								]
							  }
							}



	message.delete().catch(O_o=>{});
	bot.channels.get("542742272337379359").send(`[${adminRoleObject}]`, mdb);
        
						
                           
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
                        let adminRoleObject = server.roles.find("name", "馃彺 CSGO");
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
									"name": "Descripci贸n",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "脷nete a mi sala",
									"value": "[Haz click para unirte](https://discord.gg/"+ invitacion +")"
								  }
								]
							  }
							}



	message.delete().catch(O_o=>{});
	bot.channels.get("537602601835823105").send(`[${adminRoleObject}]`, mdb);
        
						
                           
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
	console.log(`${bot.user.username} est脙隆 online`);
	bot.user.setActivity("+help");
});

bot.login(process.env.BOT_TOKEN);

