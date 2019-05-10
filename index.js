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
                color: 0xc6ff00,
                title: "Hola bienvenido a Next Level",
                 description: '**Si además de Fortnite Battle Royale juegas a Salvar el Mundo asígnate el rol manualmente para ver las salas. Usando el comando +roles en la sala <#561599847183155200>**',
                
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo usuario ${member} a Next-Level**`, embed)

    member.send({
        embed: {
                color: 0xc6ff00,
                title: "Hola bienvenido a Next Level",
                description: '**Si además de Fortnite Battle Royale juegas a Salvar el Mundo asígnate el rol manualmente para ver las salas. Usando el comando +roles en la sala <#561599847183155200>**',   
            }
        });
 });

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📉-abandonos");
  welcomechannel.send({
               embed: {
                        color: 0xc6ff00,
                        title: "**HA ABANDONADO**",
		       	url: "http://gamedev.es/",
                        description: `${member} ha abandonado el clan`,
                    }
                });
});

// ROL DE ENTRADA AL SERVIDOR - NO VERIFICADO //
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "✅Verificado");
    let role2 = member.guild.roles.find("name", "🤖 Fortnite");
    member.addRole(role).catch(console.error);
	member.addRole(role2).catch(console.error);
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
if (message.channel.id == "571607870660018196" && message.author.bot) {
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
if (message.channel.id == "5716078706600181962" && message.author.bot) {
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
	
	
	
	// TEMPORADAS FORTNITE ROLES TEMPORALES //
	
	if (message.content.startsWith(ft + "temporada1")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 1");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 1 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada2")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 2");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 2 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada3")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 3");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 3 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada4")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 4");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 4 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada5")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 5");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 5 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada6")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 6");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 6 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada7")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 7");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 7 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada8")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 8");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 8 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "temporada9")) {
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Temporada 9");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0xc500ff,
                        description: "**ROL de la Temporada 9 asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	// FIN DE TEMPORADAS FORTNITE ROLES TEMPORALES //
		
	if (message.content.startsWith(ft + "help")) {
	  let sicon = message.guild.iconURL;
	  let serverembed = new Discord.RichEmbed()
	  .setTitle("**GENERALES**")
	  .setColor("#C6FF00")
	  .setThumbnail(sicon)
	  .addField("**+serverinfo**", "información del servidor")
	  .addField("**+buscarpartidas**", "Comandos para uso búsqueda de partidas de fortnite")
	  .addField("**+roles**", "Comandos para añadirte roles de juegos")
	  .addField("**+temporadas**", "Comandos para añadirte roles de las temporadas de fortnite");
	  
	  
	  

	  bot.channels.get("561599847183155200").send(serverembed);
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
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+rolsalvar**", "Te añade el rol de Salvar el Mundo y te dará acceso a la sala exclusiva de chat y búsqueda de partidas");
		  
		   
		   
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
			  .setColor("#c6ff00")
			  .setThumbnail(sicon)
			  .addField("**Nombre del Servidor**", message.guild.name)
			  .addField("**Miembros Totales**", message.guild.memberCount);
			  
			  return message.channel.send(serverembed);
			  }			  

    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "🌟 STAFF")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "✅Verificado");
			var embebido = {
					  "embed": {
										"color":  0xc6ff00,
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										"image": {
										"url": "https://i.imgur.com/yToqaIu.png"
										},
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
		if(message.member.roles.find("name", "🌟 STAFF")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+proponer @user @rol**", "Proponemos un ascenso de un usuario")
		  .addField("**+ascenso @user @rol**", "Redactamos un nuevo ascenso, solo usar en sala <#561601089460371457>")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala <#561601089460371457>")
		  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
		  
		  
		  
		  
		  return message.channel.send(serverembed);
		  }
		}
		

	
	
 
	if (message.content.startsWith(ft + "infoinvi")) {         //  +infoinvi   = Envía toda la información sobre invitaciones canal INFO
			let embed = {
			"embed": {
						
                        color:  0xc6ff00,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE LINK DE INVITACIÓN',
						url: "http://gamedev.es/",
                        description: '**Conoces gente que le pueda interesar nuestro clan o quieres que entren contigo aquí. Invítalos usando el siguiente link**',
						fields: [
							{
							name: "Copia y pega el enlace a un amigo/a",
							value: `:beginner: https://discord.gg/tztnx2f`,	
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
						
                        color:  0xc6ff00,
						footer: {
									  "text": message.guild.name
									},
						title: 'COMANDO PARA BUSCAR PARTIDAS',
						url: "http://gamedev.es/",
                        description: '**DEBERÁS ESTAR EN UNA SALA DE VOZ EN PRIMER LUGAR.**',
						fields: [
							{
							name: "`+bp descripción`",
							value: `Para Fortnite Battle Royale, escribir el comando en la sala <#561602695656636431>`,		
							}
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
			}	
if (message.channel.id == message.channel.id) { 	// SOLUCIÓN DESAFIOS TEMPORADA 8				
	
	if (message.content.startsWith(ft + "t8s9")) {         //  temporada 8 semana 9
			
		
		
		
			let embed1 = {
			
			"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/3mKj82c.png"
					},
				  }	
			};	
			
			let embed2 = {
			
			"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/ZYgm1MC.jpg"
					},
				  }
			};
  		bot.channels.get("571395338829824000").send(embed1);
		bot.channels.get("571395338829824000").send(embed2);	
     		
  
			}
	
	if (message.content.startsWith(ft + "t8s10")) {         //  temporada 8 semana 9
			
		
		
		
			let embed1 = {
			
			"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/mJGho9h.png"
					},
				  }	
			};	
			
			let embed2 = {
			
			"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/fKAPDLz.jpg"
					},
				  }
			};
  		bot.channels.get("571395338829824000").send(embed1);
		bot.channels.get("571395338829824000").send(embed2);	
     		
  
			}
if (message.content.startsWith(ft + "t9s1")) {         //  temporada 9 semana 1
			
		
		
		
			let embed1 = {
			
			"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/apPLvUp.png"
					},
				  }	
			};	
			
			let embed2 = {
			
			"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/VRaRPEn.jpg"
					},
				  }
			};
  		bot.channels.get("571395338829824000").send(embed1);
		bot.channels.get("571395338829824000").send(embed2);	
     		
  
			}
	
}
	
	
	
	
if (message.channel.id == message.channel.id) { 	// PARCHES INFORMATIVOS FORTNITE	

if (message.content.startsWith(ft + "parche850")) {         //  parche 8.50		
			let embed1 = {
				"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/5L1OZhW.png"
					},
				"author": {
		 			 "name": "CLIC PARA VER LA INFORMACIÓN DEL CONTENIDO DEL PARCHE",
		  			"url": "https://epicgames.com/fortnite/es-ES/patch-notes/v8-50"
					}
				  }	
			};	
	bot.channels.get("571396240802316288").send(embed1);
	
}

if (message.content.startsWith(ft + "parche851")) {         //  parche 8.51		
			let embed1 = {
				"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/A1nTmbH.png"
					},
				"author": {
		 			 "name": "CLIC PARA VER LA INFORMACIÓN DEL CONTENIDO DEL PARCHE",
		  			"url": "https://epicgames.com/fortnite/es-ES/patch-notes/v8-51"
					}
				  }	
			};	
	bot.channels.get("571396240802316288").send(embed1);
	
}
	
if (message.content.startsWith(ft + "parche900")) {         //  parche 9.00		
			let embed1 = {
				"embed": {
				"color": 13041408,
				"image": {
				"url": "https://i.imgur.com/169PiZk.png"
					},
				"author": {
		 			 "name": "CLIC PARA VER LA INFORMACIÓN DEL CONTENIDO DEL PARCHE",
		  			"url": "https://www.epicgames.com/fortnite/es-ES/patch-notes/v9-00"
					}
				  }	
			};	
	bot.channels.get("571396240802316288").send(embed1);
	
}
	
	
	
}
	
	
	
if (message.channel.id == message.channel.id) { 	// COMENTA EN 3DJUEGOS	

if (message.content.startsWith(ft + "3djuegos")) {         //  3DJUEGOS
	 let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
			let embed1 = {
	
				"embed": {
				    "title": "PUEDES AYUDARNOS",
				    "description": "Tan solo debes dejar un comentario con tu opinión de tu experiencia con nosotros, y de tu opinión general de la comunidad. Además deja tu VOTO dándole a la manita arriba.",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/mL7DyRK.png",
				      "text": "Comunidad NEXT LEVEL"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/v2Sm3d6.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/l5fJOYP.png"
				    },
				    "fields": [
				      {
					"name": "FORO PC FORTNITE",
					"value": "https://www.3djuegos.com/foros/tema/50190729/0/next-level/"
				      },
				      {
					"name": "FORO PS4 FORTNITE",
					"value": "https://www.3djuegos.com/niforos/tema/50190752/0/next-level/"
				      },
				      {
					 "name": "FORO XBOX FORTNITE",
					"value": "https://www.3djuegos.com/niforos/tema/50190793/0/next-level/"  
				      }

				    ]
				  }	
			};	
	message.channel.send(`[${adminRoleObject}]`, embed1);
	
	
	
}
}
	
if (message.channel.id == message.channel.id) { 	// COMANDOS DE MUSICA BOTS

if (message.content.startsWith(ft + "musica")) {         //  BOT MUSICAS
	 let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
			let embed1 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT MÚSICA",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/mL7DyRK.png",
				      "text": "Comunidad NEXT LEVEL"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/v2Sm3d6.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/DIvVkKY.png"
				    },
				    "fields": [
				      {
					"name": "!play nombre de la canción o link",
					"value": "Reproduce una canción y si ponemos muchas seguidas se añaden a una lista de reproducción"
				      },
				      {
					"name": "!pause y !stop",
					"value": "Para una canción o la deja en pause"
				      },
				      {
					"name": "!loop",
					"value": "Ponemos en reprodución en ciclo la lista de reproducción"
				      },
				      {
					 "name": "!leave y !skip",
					"value": "El primero hace que se marche el bot de nuestra sala y el segundo hace pasar a la siguiente canción"  
				      }

				    ]
					}
				  };	
				let embed2 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT MÚSICA 2",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/mL7DyRK.png",
				      "text": "Comunidad NEXT LEVEL"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/v2Sm3d6.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/UMST8Lc.png"
				    },
				    "fields": [
				      {
					"name": "-play nombre de la canción o link",
					"value": "Reproduce una canción y si ponemos muchas seguidas se añaden a una lista de reproducción"
				      },
				      {
					"name": "-pause y -stop",
					"value": "Para una canción o la deja en pause"
				      },
				      {
					"name": "-loop",
					"value": "Ponemos en reprodución en ciclo la lista de reproducción"
				      },
				      {
					 "name": "-leave y -next",
					"value": "El primero hace que se marche el bot de nuestra sala y el segundo hace pasar a la siguiente canción"  
				      }

				    ]
					}
				  };	
				
	message.channel.send(`[${adminRoleObject}]`, embed1);
	message.channel.send(embed2);
	
	
	
}
}
	
	
	
if (message.channel.id == message.channel.id) { 	// NUEVOS ROLES TEMPORADAS TEMPORALES

if (message.content.startsWith(ft + "temporadas")) {         //  ROLES TEMPORALES
			let temporales = {
				"embed": {
				    "title": "LISTA DE COMANDOS DE ROLES POR TIEMPO LIMITADO",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/mL7DyRK.png",
				      "text": "Comunidad NEXT LEVEL"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/v2Sm3d6.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/Cj3q5QS.png"
				    },
				    "fields": [
				      {
					"name": "+temporada1",
					"value": "Te añade este rol, si juegas desde la temporada 1"
				      },
				      {
					"name": "+temporada2",
					"value": "Te añade este rol, si juegas desde la temporada 2"
				      },
				      {
					"name": "+temporada3",
					"value": "Te añade este rol, si juegas desde la temporada 3"
				      },
				      {
					"name": "+temporada4",
					"value": "Te añade este rol, si juegas desde la temporada 4"
				      },
					  {
					"name": "+temporada5",
					"value": "Te añade este rol, si juegas desde la temporada 5"
				      },
					  {
					"name": "+temporada6",
					"value": "Te añade este rol, si juegas desde la temporada 6"
				      },
					  {
					"name": "+temporada7",
					"value": "Te añade este rol, si juegas desde la temporada 7"
				      },
					  {
					"name": "+temporada8",
					"value": "Te añade este rol, si juegas desde la temporada 8"
				      },
					  {
					"name": "+temporada9",
					"value": "Te añade este rol, si juegas desde la temporada 9"
				      }

				    ]
					}
				  };			
	message.channel.send(temporales);
	
	
	
}
}
	
	
// +SUGERENCIA //
if(message.content.toUpperCase().startsWith("+SUGERENCIA")){
let adminRoleObject = message.guild.roles.find("name", "🌟 STAFF");	
  var comunicado = message.content.replace("+sugerencia ", "");
    var embebido = {
                          "embed": {
                              color: 0xc6ff00,
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

              bot.channels.get("571607870660018196").send(`[${adminRoleObject}]`, embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN SUGERENCIA ///
	
			

	
	
	
	
	
	
// +BUSCAR DESCRIPCION // PARTIDAS //    - FUNCIONANDO
if(message.content.startsWith("+bp")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+bp ")[1];
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
