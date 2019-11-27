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
                 description: '**Asígnate el rol manualmente para ver las salas. Ve a la sala <#585873855676153857> y haz clic en el icono del rol que quieras**',
                
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo usuario ${member} a Next-Level**`, embed)

    member.send({
        embed: {
                color: 0xc6ff00,
                title: "Hola bienvenido a Next Level",
                description: '**Asígnate el rol manualmente para ver las salas. Ve a la sala <#585873855676153857> y haz clic en el icono del rol que quieras**',   
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






	
	
	if (message.channel.id == message.channel.id) { 	// BOT FORTNITE

if (message.content.startsWith(ft + "fortnite")) {         //  BOT FORTNITE
	 let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
			let embed1 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT FORTNITE",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/mL7DyRK.png",
				      "text": "Comunidad NEXT LEVEL"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/nM5N16C.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/KNWIYuk.png"
				    },
				    "fields": [
				      {
					"name": "+link nombreepic",
					"value": "Nos linkea la cuenta de epic games con el discord"
				      },
				      {
					"name": "+kd",
					"value": "Nos muestra el KD de nuestra cuenta."
				      },
				      {
					"name": "+wins",
					"value": "Nos muestra las partidas ganadas de nuestra cuenta."
				      },
				      {
					"name": "+rank",
					"value": "Nos pone las WINS y el KD en el nick*. **Solo podrán usarlos los que tengan el rol ⭐Apoya un Creador **"
				      },
					  {
					"name": "IMPORTANTE",
					"value": "Todos los comandos deben usarse en la sala <#561599847183155200>."
				      },
				{
					"name": "**PARA ACTUALIZAR WINS Y KD**",
					"value": "Debemos usar cualquier comando `+kd` o `+wins` nos actualizará el nick con las WINS y KD actual."
				      }
					
				    ]
					}
				  };			
	bot.channels.get("561599847183155200").send(embed1);
	
	
	
}
} // FIN BOT FORTNITE //
    
	
	 



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
				
			
                bot.channels.get("570620409406423060").send({
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
	
	
	
}
	
	
	
	
if (message.channel.id == message.channel.id) { 	// PARCHES INFORMATIVOS FORTNITE	

	
	
	
}
	
	
	// INICIO SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 1: USO INHADECUADO DE CANALES DE TEXTO
	
	if (message.content.startsWith(ft + "ad1")) {        //  +ad1 @user   =  Advertimos al usuario
		message.delete();
  if(message.member.roles.find("name", "🌟 STAFF")){
			let User = message.mentions.users.first();
			let guild = bot.guilds.get("458220475957379074");
			let miembro = guild.member(User);
			
			User.send({
				embed: {
					color: 0xFF0000,
					title: "**ACABAS DE RECIBIR UNA ADVERTENCIA**",
						  url: "http://gamedev.es/",
					description: "**Acabas de recibir una advertencia por incumplimiento del ART 1: Uso inadecuado de canales de texto \n\nPara evitar mas advertencias de este tipo, accede al canal de texto <#561595483328610304> y mira el uso de cada sala.\n\n**",
				}
			});
			
		
			bot.channels.get("633700114980143104").send({
				embed: {
					author: {
						name: message.author.tag,
						icon_url: message.author.avatarURL
					},
					color: 0xFF0000,
					description: "Ha advertido a **" + User + "**",
					fields: [
						{
						  "name": "por incumplimiento del",
						  "value": "**ART 1: Uso inadecuado de canales de texto**",
						}
					  ]
				
				
				
				
				
				}
			});
		}
  }

// FIN SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 1: USO INADECUADO DE CANALES DE TEXTO

// INICIO SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 2: VOCABULARIO INADECUADO
	
if (message.content.startsWith(ft + "ad2")) {        //  +ad2 @user   =  Advertimos al usuario
	message.delete();
if(message.member.roles.find("name", "🌟 STAFF")){
		let User = message.mentions.users.first();
		let guild = bot.guilds.get("458220475957379074");
		let miembro = guild.member(User);
		
		User.send({
			embed: {
				color: 0xFF0000,
				title: "**ACABAS DE RECIBIR UNA ADVERTENCIA**",
					  url: "http://gamedev.es/",
				description: "**Acabas de recibir una advertencia por incumplimiento del ART 2: Vocabulario inadecuado \n\nPara evitar mas advertencias de este tipo modera las formas o tu lenguaje con los miembros de la comunidad.\n\n**",
			}
		});
		
	
		bot.channels.get("633700114980143104").send({
			embed: {
				author: {
					name: message.author.tag,
					icon_url: message.author.avatarURL
				},
				color: 0xFF0000,
				description: "Ha advertido a **" + User + "**",
				fields: [
					{
					  "name": "por incumplimiento del",
					  "value": "**ART 2: Vocabulario inadecuado**",
					}
				  ]
			
			
			
			
			
			}
		});
	}
}

// FIN SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 2: VOCABULARIO INADECUADO
	
	
	

	
if (message.content.startsWith(ft + "salas")) {         //  3DJUEGOS
	
		   let embed2 = {
   
			   "embed": {
				   "title": "USO ADECUADO DE NUESTRAS SALAS",
				   "description": "A continuación explicamos muy brevemente el uso de cada sala, y así evitar posibles conflictos.",
				   "color": 13041408,
				   "timestamp": "2019-04-29T12:14:55.011Z",
				   "footer": {
					 "icon_url": "https://i.imgur.com/mL7DyRK.png",
					 "text": "Comunidad NEXT LEVEL"
				   },
				   "thumbnail": {
					 "url": "https://i.imgur.com/v2Sm3d6.png"
				   },
				   
				   "fields": [
					 {
				   "name": "💬-chat",
				   "value": "Esta es la sala principal de charla, vale todo respetando siempre las normas."
					 },
					 {
				   "name": "🎼-música",
				   "value": "Sala exclusiva de uso de comandos de música"
					 },
					 {
					"name": "📲-comandos",
				   "value": "Sala exclusiva de uso de comandos, ahí usarás todos los comandos de la comunidad que tengas a tu disposición de uso."  
					 },
					 {
					"name": "🌍-buscar-partidas",
					"value": "Sala exclusiva para BUSCAR gente para jugar Fortnite Salvar el Mundo, no se admite debates, ni charlas del juego SOLO BÚSQUEDA DE GENTE."  
					 }

				   ]
				 }	
		   };	
   message.channel.send(embed2);
   
   
   
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
if(message.content.startsWith("+rd")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+bp ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "Red Dead Redemption 2");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO PARTIDA DE RED DEAD ONLINE",
								"url": "http://gamedev.es/",
								"description": "Busco **" + users + "** compañeros para jugar en **" + message.member.voiceChannel.name + "**",
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
	bot.channels.get("643449055359270932").send(`[${adminRoleObject}]`, mdb);
        
						
                           
                        })
                        .catch(console.error);
                    }
                }
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
