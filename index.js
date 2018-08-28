const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const token = process.env.token;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


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
                 
  let welcomechannel = member.guild.channels.find(`name`, "ðŸ“ˆ-entradas");
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
                        title: "**MENSAJE DE BIENVENIDA**",
		       	url: "http://gamedev.es/",
                        description: 'Te damos la bienvenida a Next-Level, en primer lugar si no ves contenido ninguno en el servidor tranquilo, es completamente normal. \n\nForma parte de un sistema de verificaciÃ³n que tenemos implementado en el servidor, para asÃ­ proteger nuestra intimidad y evaluar el verdadero interÃ©s de alguien en entrar a Ã©l. \n\nEn segundo lugar, decirte que deberÃ¡s verificar tu cuenta para tener acceso completo, ingresando en la sala âŽ-solicitudes y escribiendo +solicitar. \n\nEn cuanto un STAFF haya verificado tu cuenta, serÃ¡s notificado de ello mediante mensaje privado y podrÃ¡s posteriormente tener acceso completo. \n\nUn saludo, el STAFF.',
                    }
                });
 });
  
// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "ðŸ“‰-abandonos");
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
    let role = member.guild.roles.find("name", "âŽ No verificado");
    member.addRole(role).catch(console.error);
});

// + VERIFICAR //
bot.on("message", (message) => {
if(message.content.toUpperCase().startsWith("+VERIFICAR")){
            message.delete();
      if(message.member.roles.find("name", "ðŸŒŸ STAFF NIVEL 3") || message.member.roles.find("name", "ðŸŒŸ STAFF NIVEL 2") ||message.member.roles.find("name", "ðŸŒŸ STAFF NIVEL 1")){
                let User = message.mentions.users.first();
                let role = message.guild.roles.find("name", "âœ…Verificado");
                let role2 = message.guild.roles.find("name", "âŽ No verificado");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                miembro.removeRole(role2).catch(console.error);
                User.send({
                    embed: {
                        color: 0x04ff00,
                        title: "**HAS SIDO VERIFICADO**",
			                  url: "http://gamedev.es/",
                        description: "**Â¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. \n\nPara mÃ¡s informaciÃ³n accede al canal de texto #info. \n\nNo olvides asignarte         tu rol para recibir las notificaciones de fortnite en sala #comandos escribe +roles y usa el que quieras.**",
                    }
                });
                message.channel.send({
                    embed: {
                        color: 0x04ff00,
                        title: message.member.nickname,
                        description: "**Ha verificado a **" + User + " **correctamente**",
                    }
                });
            }
      }

 // +BUSCAR PARTIDAS //                 
if(message.content.startsWith("+buscar")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscar ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "ðŸ¤– Fortnite");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO PARTIDA DE FORTNITE",
								"url": "http://gamedev.es/",
								"description": "Busco **" + users + "** personas para darle calor en" + message.member.voiceChannel.name + "",
								"color": 0xc500ff,
								"timestamp": message.createdAt,
								"author": {
								"name": message.author.tag,
								"icon_url": message.author.avatarURL
								},
								"fields": [
								  {
									"name": "DescripciÃ³n",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "Ãšnete a mi sala",
									"value": "[Haz click para unirte](https://discord.gg/"+ invitacion +")"
								  }
								]
							  }
							}
	let partidaschannel = message.guild.channels.find(`name`, "ðŸ’Ž-buscar-partidas");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");


	message.delete().catch(O_o=>{});
        partidaschannel.send(`[${adminRoleObject}]`, mdb);
						
                           
                        })
                        .catch(console.error);
                    }
                }
            }

// +ZONA //
		if (message.content.startsWith("+zona")) { 				//  [FUNCIONANDO]		+zona 						= Escoge una zona random de Fortnite para caer con tus compañeros

			var repliesx = [ // Respuestas ramdom
				'CHIRINGUITO CHATARRA',
				'LOMAS LUGUBRES',
				'PARQUE PLACENTERO',
				'BALSA BOTIN',
				'SOCIEDAD SIBARITA',
				'PISOS PICADOS',
				'RIBERA REPIPI',
				'CASERIO COLESTEROL',
				'TUNELES TORTUOSOS',
				'INDUSTRIAS INODORAS',
				'SOCAVON SOTERRADO',
				'CIUDAD COMERCIO',
				'SENORIO DE LA SAL',
				'LATIFUNDIO LETAL',
				'ATERRIZAJE AFORTUNADO',
				'OASIS OSTENTOSO',
				'SOTO SOLITARIO',
				'ALAMEDA AULLANTE',
				'PUEBLO TOMATE',
				'CARRETES COMPROMETIDOS',
			];
			var iconsx = [   // Iconos ramdom
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11',
				'12',
				'13',
				'14',
				'15',
				'16',
				'17',
				'18',
				'19',
				'20',
			];
			
			let rpl = iconsx[Math.floor(Math.random()*iconsx.length)];
			
			message.channel.send({
			  "embed": {
				"color": 14470873,
				"footer": {
				  "icon_url": "https://media.discordapp.net/attachments/474203533885964288/481510851501752320/fortnite.png",
				  "text": "Fornite Ramdom Location || "+message.guild.name
				},
				"thumbnail": {
				  "url": "https://admin.computechx.eu/plugins/discord/fortnite/"+iconsx[rpl]+".png"
				},
				"fields": [
				  {
					"name": ":oncoming_bus: Puedes intentar caer en:",
					"value": repliesx[rpl]
				  }
				]
			  }
			});
			
		}
			
		
// +ROLLCSGO //       
if(message.content.toUpperCase().startsWith("+ROLLCSGO")){
        message.delete();
            if(message.member.roles.find("name", "âœ…Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "ðŸ’£ CSGO");
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

// REACCION EMOJI SALA PROPUESTAS //
if (message.channel.id == "472138215042842626" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
  
// REACCION EMOJI SALA VOTACION DE SANCIÃ“N //
if (message.channel.id == "480414475904745507" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}

 // REACCION EMOJI SALA SUGERENCIAS //
if (message.channel.id == "475267748868390912" && message.author.bot) {
                    message.react("472146792339734565");
                    message.react("472147160423727105");
                }	
               
 // +ROLLFORTNITE //
if(message.content.toUpperCase().startsWith("+ROLLFORTNITE")){
        message.delete();
            if(message.member.roles.find("name", "âœ…Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "ðŸ¤– Fortnite");
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

//+ACEPTAR SUGERENCIAS
if(message.content.toUpperCase().startsWith("+ACEPTAR")){
      let rUser = message.guild.member(message.mentions.users.first());
      if(!rUser) return message.channel.send("formato incorrecto +aceptar @usuario");

      message.mentions.users.map(async user => {
      const member = message.guild.member(user);
      try { await user.send({
                    embed: {
                      color: 0xFF0000,
                      title: "Â¡ENHORABUENA!",
                      description: "Enhorabuena, tu sugerencia enviada en Next-Level ha sido aceptada, gracias por aportar",
                  }
                  });
                  }
                  catch (err) { console.log('error'); }
                    });
                message.delete().catch(O_o=>{});  

              }	

//+RECHAZAR SUGERENCIAS
if(message.content.toUpperCase().startsWith("+RECHAZAR")){
      let rUser = message.guild.member(message.mentions.users.first());
      if(!rUser) return message.channel.send("formato incorrecto +aceptar @usuario");

      message.mentions.users.map(async user => {
      const member = message.guild.member(user);
      try { await user.send({
                    embed: {
                      color: 0xFF0000,
                      title: "Â¡LO SENTIMOS!",
                      description: "Lo sentimos, tu sugerencia enviada en Next-Level ha sido rechazada, gracias por aportar",
                  }
                  });
                  }
                  catch (err) { console.log('error'); }
                    });
                message.delete().catch(O_o=>{});  

              }	

//+COMUNICAR
if(message.content.toUpperCase().startsWith("+COMUNICAR")){
  var comunicado = message.content.replace("+comunicar ", "");  

  let adminRoleObject = message.guild.roles.find("name", "âœ…Verificado");
    var embebido = {
              "embed": {
                                color: 0xff0000,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVO COMUNICADO**",
        url: "http://gamedev.es/",				
                
        description: comunicado,
        timestamp: message.createdAt,								
                            }
          };
	let partidaschannel = message.guild.channels.find(`name`, "ðŸ“‹-comunicados");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");

	message.delete().catch(O_o=>{});
	partidaschannel.send(`[${adminRoleObject}]`, embebido);

    }	

//+FORTNITE
if(message.content.toUpperCase().startsWith("+FORTNITE")){
  var fortnite = {
  "embed": {
    color: 0xFE2E2E ,
    title: "**En mantenimiento**",
    url: "http://gamedev.es/",				
    fields: [
      {
      name: "**+link plataforma nickname**",
      value: "Linkeamos nuestra cuenta. En plataforma poner pc o xb1 o ps4"
      },
      {
      name: "**+stats**",
      value: "Te muestra tus stats generales. Suma de SOLO + DUO + SQUAD"
      },
      {
      name: "**+solo**",
      value: "Te muestra tus stats en solitario"
      },
      {
      name: "**+duo**",
      value: "Te muestra tus stats en duos"
      },
      {
      name: "**+escuadron**",
      value: "Te muestra tus stats en escuadrones"
      },
      {
      name: "**+zona**",
      value: "Te muestra una zona ramdom para saltar USAR SOLO en la sala #buscar-zona"
      }
    ]
  }
  };
  message.delete().catch(O_o=>{});
   message.channel.send(fortnite);
  }	
	
//+HELP
if(message.content.toUpperCase().startsWith("+HELP")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("**GENERALES**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**+serverinfo**", "informaciÃ³n del servidor")
  .addField("**+fortnite**", "Comandos para uso de Fortnite")
  .addField("**+partidas**", "Comandos para buscar partidas")
  .addField("**+roles**", "Comandos para aÃ±adirte roles de juegos")
  .addField("**+sugerencia**", "Comandos para publicar sugerencias solo en sala #sugerencias (+sugerencia desarrollo)");
  
  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
  }	
	
//+MUSICA
if(message.content.toUpperCase().startsWith("+MUSICA")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**MÃšSICA**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**+play link o nombre**", "Comando para buscar canciÃ³n.")
  .addField("**+stop**", "Comando para parar la mÃºsica")
  .addField("**+skip**", "Pasar canciÃ³n")
  .addField("**+loop**", "Hacer bucle")
  .addField("**+pause**", "Pausar mÃºsica")
  .addField("**+resume**", "volver poner mÃºsica despuÃ©s de pausa");
  
  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
  }	
	
//+PARTIDAS
if(message.content.toUpperCase().startsWith("+PARTIDAS")){
  var partidas = {
  "embed": {
    color: 0xFE2E2E ,
    title: "**BUSCAR PARTIDAS PARA FORTNITE**",
    url: "http://gamedev.es/",				
    fields: [
      {
      name: "**+buscar descripciÃ³n**",
      value: "Usar solo en sala #ðŸ’Ž-buscar-partidas.\n\n **SIEMPRE** DENTRO DE UNA DE LAS SALAS **SQUAD o DÃšOS **"
      },
    ]
  }
  };
  message.delete().catch(O_o=>{});
   message.channel.send(partidas);
  }	

// +ROLES
if(message.content.toUpperCase().startsWith("+ROLES")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**ASIGNACIÃ“N DE ROLES**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**+rollcsgo**", "Te aÃ±ade el rol de CSGO")
  .addField("**+rollfortnite**", "Te aÃ±ade el rol de FORTNITE");
   
    message.delete().catch(O_o=>{});
    return message.channel.send(serverembed);
    }

// +SERVERINFO
if(message.content.toUpperCase().startsWith("+SERVERINFO")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**InformaciÃ³n del Servidor**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**Nombre del Servidor**", message.guild.name)
  .addField("**Miembros Totales**", message.guild.memberCount);
  
  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
  }
  
//+SOLICITAR 
if(message.content.toUpperCase().startsWith("+SOLICITAR")){
  let rUser = message.guild.member;
  if(!rUser) return message.channel.send("formato incorrecto +solicitar @usuario");

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("NUEVA PETICIÃ“N DE ACCESO")
  .setColor("#52a255")
  .addField("Solicitante:", `${message.author}`)
  .addField("Fecha:", message.createdAt)

  let reportschannel = message.guild.channels.find(`name`, "âŽ-solicitudes");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
  }  
  
//+STAFF
if(message.content.toUpperCase().startsWith("+STAFF")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**COMANDOS STAFF**")
  .setColor("#ff006c")
  .setThumbnail(sicon)
  .addField("**+report**", "Abrimos la lista de comandos para los toques")
  .addField("**+verificar @User**", "Asigna rol Verificado para acceder al contenido del discord")
  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
  .addField("**+proponer @User RazÃ³n**", "Propone a un usuario ascenso de rango por x motivo")
  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #ðŸ“‹-comunicados")
  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
  .addField("**+aceptar @user**", "Aceptamos una sugerencia en el canal #sugerencias y se le envia un MP automÃ¡tico")
  .addField("**+rechazar @user**", "Rechazamos una sugerencia en el canal #sugerencias y se le envia un MP automÃ¡tico");
  
  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
  }

//+VOTAR
if(message.content.toUpperCase().startsWith("+VOTARSANCION")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**COMANDOS VOTAR SANCIONES**")
  .setColor("#ff006c")
  .setThumbnail(sicon)
  .addField("**+votar**", "+votar usuario tipo razÃ³n")
  .addField("**usuario**", "Escribimos el nombre de la persona sin @")
  .addField("**tipo**", "Toque, expulsiÃ³n..")
  .addField("**razÃ³n**", "Exponer la razÃ³n de la votaciÃ³n a sanciÃ³n");
  
  
  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
  }
		
//+SUGERENCIA
if(message.content.toUpperCase().startsWith("+SUGERENCIA")){
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

              message.channel.send(embebido);
              message.delete().catch(O_o=>{});
      }	
	
	
	
	
  // CONFIG BOT 
if(message.author.bot) return;
if(message.channel.type === "dm") return;
 
 let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 
});

 // ACTIVIDAD DEL BOT (JUGANDO A +HELP) //
bot.on("ready", async () => {
  console.log(`${bot.user.username} estÃƒÂ¡ online`);
  bot.user.setActivity("+help");
  setInterval(apiFORTNITE,350000);
});

bot.login(token).catch(err => console.log(err));
