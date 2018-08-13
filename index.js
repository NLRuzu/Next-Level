const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const token = process.env.token;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
 
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
 
 
bot.on("ready", async () => {
  console.log(`${bot.user.username} estÃ¡ online`);
  bot.user.setActivity("+help")
});
 
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} ha entrado al server `);
                 
  let welcomechannel = member.guild.channels.find(`name`, "📑-entrada-y-salida");
  welcomechannel.send({
               embed: {
                        color: 0x04ff00,
                        title: "NUEVO MIEMBRO",
                        description: `Bienvenido ${member} a Next-Level`,
                    }
                });
    member.send({
               embed: {
                        color: 0x04ff00,
                        title: "MENSAJE DE BIENVENIDA",
                        description: 'Bienvenido a Next-Level, en primer lugar si no ves nada en el servidor, es totalmente NORMAL. \n\nEs debido a un sistema de verificación implementado en nuestro clan para proteger así nuestra privacidad y evaluar el interés de la persona entrante. \n\nTan solo tendrás que ir al canal de #solicitudes y escribir +solicitar \n\nEn cuanto un STAFF te haya verificado te saldrá una notificación y podrás disfrutarde todo el contenido. \n\nUn saludo, el STAFF.',
                    }
                });
 });
 
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📑-entrada-y-salida");
  welcomechannel.send({
               embed: {
                        color: 0x04ff00,
                        title: "HA ABANDONADO",
                        description: `${member} ha abandonado el clan`,
                    }
                });
});
 
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "❎ No verificado");
    member.addRole(role).catch(console.error);
});
 
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
                        title: "HAS SIDO VERIFICADO",
                        description: "**¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. Para más información accede al canal de texto #info**",
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
 
                    
						if(message.content.startsWith("+buscarf")){
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscarf ");
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "🤖 Fortnite");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.length
                            message.channel.send({embed: {
                                content: `[<${adminRoleObject}>]`,
                                color: 3447003,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "Haz click para unirte",
                                url: "https://discord.gg/" + invitacion,
                                description: "Busco **" + users + "** soldados en el autobús " + message.member.voiceChannel.name + " para luchar.",
                                fields: [{
                                    name: "Descripción",
                                    value: "*" + desc + "*"
                                },
                                ],
                                timestamp: new Date(),
                                footer: {
                                icon_url: bot.user.avatarURL,
                                text: "Buscar sala"
                                }
                            }
                            })
                            message.delete();
                        })
                        .catch(console.error);
                    }
                }
            }
 
  console.log("True");
 
 
               
         
             
 
 
                 
                   
                     
                           
               
           
           
               
 
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
                        color: 0x04ff00,
                        description: "**ROL de CSGO asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
  console.log("True");
  
  if(message.content.toUpperCase().startsWith("+SUGERIR")){
      
                let titulo = message.content.toUpperCase().split("+SUGERENCIA")[1];
                let descripcion = message.content.split(titulo)[1];
            
                
                message.author.send("Enhorabuena, tu sugerencia has sido enviada correctamente, agradecemos tu tiempo y aportación");
                message.channel.send({
                    embed: {
                        author: {
                            name: message.author.displayName,
                            icon_url: message.author.avatarURL
                            
                        },
            
                        color: 0x04ff00,
                        title: message.member.nickname,
                        title: titulo,
                        description: descripcion,
                    }
                });
            }
  console.log("True");
  
 
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
                        color: 0x04ff00,
                        description: "**ROL de FORTNITE asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
  console.log("True");
 
 
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
