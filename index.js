const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const token = process.env.token;
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


client.on("ready", async () => {
  console.log(`${bot.user.username} estÃ¡ online`);
  bot.user.setActivity("+help")
});

client.on("guildMemberAdd", async member => {
  console.log(`${member.id} ha entrado al server `);

  let welcomechannel = member.guild.channels.find(`name`, "ðŸ“‘-entrada-y-salida");
  welcomechannel.send(`Â¡Bienvenido ${member} a  Next Level Clan** :tada::hugging: !`);
});

client.on("guildMemberRemove", async member => {
  console.log(`${member.id} ha abandonado el server `);

  let welcomechannel = member.guild.channels.find(`name`, "ðŸ“‘-entrada-y-salida");
  welcomechannel.send(`${member} ha abandonado el clan:slight_frown:`);
});

client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "âŽ No verificado");
    member.addRole(role).catch(console.error);
});


client.on("message", (message) => {
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
                message.channel.send({
                    embed: {
                        color: 0x04ff00,
                        title: message.member.nickname,
                        description: "**Ha verificado a **" + User + " **correctamente**",
                    }
                });
            }
        }
  console.log("True");
  
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
                        color: 0x04ff00, 
                        description: "**ROL de CSGO asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
  console.log("True");
  
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

client.login(token).catch(err => console.log(err));
