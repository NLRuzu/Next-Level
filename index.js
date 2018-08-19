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
 
 // ACTIVIDAD DEL BOT (JUGANDO A +HELP) //
bot.on("ready", async () => {
  console.log(`${bot.user.username} estÃ¡ online`);
  bot.user.setActivity("+help")
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
                        title: "**MENSAJE DE BIENVENIDA**",
		       	url: "http://gamedev.es/",
                        description: 'Te damos la bienvenida a Next-Level, en primer lugar si no ves contenido ninguno en el servidor tranquilo, es completamente normal. \n\nForma parte de un sistema de verificación que tenemos implementado en el servidor, para así proteger nuestra intimidad y evaluar el verdadero interés de alguien en entrar a él. \n\nEn segundo lugar, decirte que deberás verificar tu cuenta para tener acceso completo, ingresando en la sala ❎-solicitudes y escribiendo +solicitar. \n\nEn cuanto un STAFF haya verificado tu cuenta, serás notificado de ello mediante mensaje privado y podrás posteriormente tener acceso completo. \n\nUn saludo, el STAFF.',
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

// + VERIFICAR & +BUSCAR PARTIDA
bot.on("message", (message) => {
  if(message.content.toUpperCase().startsWith("+VERIFICAR")){
            message.delete();
      if(message.member.roles.find("name", "🌟 STAFF NIVEL 3") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||message.member.roles.find("name", "🌟 STAFF NIVEL 1")){
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
  if(message.content.startsWith("+buscar")){
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscar ")[1];
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
								"description": "Busco **" + users + "** personas para darle calor en" + message.member.voiceChannel.name + "",
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
	let partidaschannel = message.guild.channels.find(`name`, "💎-buscar-partidas");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");


	message.delete().catch(O_o=>{});
        partidaschannel.send(`[${adminRoleObject}]`, mdb);
						
                           
                        })
                        .catch(console.error);
                    }
                }
            }

 console.log("True");

// +ROLLCSGO //       
  if(message.content.toUpperCase().startsWith("+ROLLCSGO")){
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "💣 CSGO");
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
        console.log("True");

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

 // REACCION EMOJI SALA SUGERENCIAS //
	if (message.channel.id == "475267748868390912" && message.author.bot) {
                    message.react("472146792339734565");
                    message.react("472147160423727105");
                }	
                console.log("True");
 
 // +ROLLFORTNITE //
  if(message.content.toUpperCase().startsWith("+ROLLFORTNITE")){
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
        console.log("True");

//+ACEPTAR SUGERENCIAS
if(message.content.toUpperCase().startsWith("+ACEPTAR")){
      let rUser = message.guild.member(message.mentions.users.first());
      if(!rUser) return message.channel.send("formato incorrecto +aceptar @usuario");

      message.mentions.users.map(async user => {
      const member = message.guild.member(user);
      try { await user.send({
                    embed: {
                      color: 0xFF0000,
                      title: "¡ENHORABUENA!",
                      description: "Enhorabuena, tu sugerencia enviada en Next-Level ha sido aceptada, gracias por aportar",
                  }
                  });
                  }
                  catch (err) { console.log('error'); }
                    });
                message.delete().catch(O_o=>{});  

              }	
              console.log("True");

//+COMUNICAR
if(message.content.toUpperCase().startsWith("+COMUNICAR")){
  var comunicado = message.content.replace("+comunicar ", "");  

  let adminRoleObject = message.guild.roles.find("name", "✅Verificado");
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
	let partidaschannel = message.guild.channels.find(`name`, "📋-comunicados");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");

	message.delete().catch(O_o=>{});
	partidaschannel.send(`[${adminRoleObject}]`, embebido);

    }	

//+FORTNITE
if(message.content.toUpperCase().startsWith("+FORTNITE")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**FORTNITE**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**.link plataforma nickname**", "Vincula tu cuenta de epicgames.")
  .addField("**.wins**", "Asigna las wins a tu nick, hay que actualizar constantemente.")
  .addField("**.kd**", "Asigna tu kd a tu nick, hay que actualizar constantemente.")
  .addField("**.stats**", "Te muestra tus stats generales.")
  .addField("**.reset**", "Os reinicia el nick sin wins ni kd, en caso de bug")
  .addField("**.season5**", "Te muestra tus stats de la temporada 5.");

  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
}
	
//+HELP
if(message.content.toUpperCase().startsWith("+HELP")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("**GENERALES**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**+serverinfo**", "información del servidor")
  .addField("**+fortnite**", "Comandos para uso de Fortnite")
  .addField("**+partidas**", "Comandos para buscar partidas")
  .addField("**+roles**", "Comandos para añadirte roles de juegos")
  .addField("**+sugerencia**", "Comandos para publicar sugerencias solo en sala #sugerencias (+sugerencia desarrollo)");
  
  message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);
  }	
	
//+MUSICA
if(message.content.toUpperCase().startsWith("+MUSICA")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**MÚSICA**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**!play link o nombre**", "Comando para buscar canción.")
  .addField("**!stop**", "Comando para parar la música")

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
      name: "**+buscar descripción**",
      value: "Usar solo en sala #💎-buscar-partidas.\n\n **SIEMPRE** DENTRO DE UNA DE LAS SALAS **SQUAD o DÚOS **"
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
  .setDescription("**ASIGNACIÓN DE ROLES**")
  .setColor("#FE2E2E")
  .setThumbnail(sicon)
  .addField("**+rollcsgo**", "Te añade el rol de CSGO")
  .addField("**+rollfortnite**", "Te añade el rol de FORTNITE");
   
    message.delete().catch(O_o=>{});
    return message.channel.send(serverembed);
    }

// +SERVERINFO
if(message.content.toUpperCase().startsWith("+SERVERINFO")){
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**Información del Servidor**")
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
  .setTitle("NUEVA PETICIÓN DE ACCESO")
  .setColor("#52a255")
  .addField("Solicitante:", `${message.author}`)
  .addField("Fecha:", message.createdAt)

  let reportschannel = message.guild.channels.find(`name`, "❎-solicitudes");
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
  .addField("**+proponer @User Razón**", "Propone a un usuario ascenso de rango por x motivo")
  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #📋-comunicados")
  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
  .addField("**+aceptar @user**", "Aceptamos una sugerencia en el canal #sugerencias y se le envia un MP automático");
  
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
  .addField("**+votar**", "+votar usuario tipo razón")
  .addField("**usuario**", "Escribimos el nombre de la persona sin @")
  .addField("**tipo**", "Toque, expulsión..")
  .addField("**razón**", "Exponer la razón de la votación a sanción");
  
  
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
 
bot.login(token).catch(err => console.log(err));
