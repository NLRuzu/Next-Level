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
	  .setColor("#C6FF00")
	  .setThumbnail(sicon)
	  .addField("**+serverinfo**", "información del servidor")
	  .addField("**+fortnite**", "Comandos para uso de Fortnite")
	  .addField("**+roles**", "Comandos para añadirte roles de juegos");
	  
	  
	  

	  bot.channels.get("561599847183155200").send(serverembed);
	  }	
	
	if (message.content.startsWith(ft + "musica")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**MÚSICA**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**!play link o nombre**", "Comando para buscar canción.")
		  .addField("**!stop**", "Comando para parar la música")
		  .addField("**!skip**", "Pasar canción")
		  .addField("**!loop**", "Hacer bucle")
		  .addField("**!pause**", "Pausar música")
		  .addField("**!resume**", "volver poner música después de pausa");
		  
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
		if(message.member.roles.find("name", "🌟 STAFF")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+proponer @user @rol**", "Proponemos un ascenso de un usuario")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #📋-comunicados")
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
	
	// SOLUCIÓN DESAFIOS TEMPORADA 8
if (message.content.startsWith(ft + "t8s9")) {         //  temporada 8 semana 9
			
			let embed1 = {
			"color": 0xc6ff00,
			"embed": {
					"image": {
					  "url": "https://i.imgur.com/3mKj82c.png"
					},
					
				  }	
		
			};	
			
			let embed2 = {
			"color": 0xc6ff00,
			"embed": {
					"image": {
					  "url": "https://i.imgur.com/ZYgm1MC.jpg"
					},
					
				  }
			
			
			
			
			};
  
		message.channel.send(embed1);	
		message.channel.send(embed2);		
     message.delete();
  
			}
			

	
	
	
	
	
	
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
