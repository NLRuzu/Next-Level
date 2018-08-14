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
  console.log(`${bot.user.username} esta online`);
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
                        description: 'Te damos la bienvenida a Next-Level, en primer lugar si no ves contenido ninguno en el servidor tranquilo, es completamente normal. \n\nForma parte de un sistema de verificación que tenemos implementado en el servidor, para así proteger nuestra intimidad y evaluar el verdadero interés de alguien en entrar a él. \n\nEn segundo lugar, decirte que deberás verificar tu cuenta para tener acceso completo, ingresando en la sala ❎-solicitudes y escribiendo +solicitar. \n\nEn cuanto un STAFF haya verificado tu cuenta, serás notificado de ello mediante mensaje privado y podrás posteriormente tener acceso completo. \n\nUn saludo, el STAFF.',
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
                    let desc = message.content.split("+buscarf ")[1];
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
                            message.channel.send({
                                content: `[<${adminRoleObject}>]`,
                                embed: {
                                color: 3447003,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "Busco " + users + " personas para darle calor en " + message.member.voiceChannel.name + "",  
                                fields: [{
                                    name: "Descripción",
                                    value: "*" + desc + "*",
                                },
                                {
                                    name: "Unete a mi sala",
                                    value: "[Haz click para unirte](https://discord.gg/"+ invitacion +")",
                                },
                                ],
                            }
                            })
                            message.delete();
                        })
                        .catch(console.error);
                    }
                }
            }

  console.log("True");
