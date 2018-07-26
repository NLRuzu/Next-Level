const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
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
  console.log(`${bot.user.username} está online`);
  bot.user.setActivity("+help")
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} ha entrado al server `);

  let welcomechannel = member.guild.channels.find(`name`, "📑-entrada-y-salida");
  welcomechannel.send(`¡Bienvenido ${member} a  Next Level Clan** :tada::hugging: !`);
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} ha abandonado el server `);

  let welcomechannel = member.guild.channels.find(`name`, "📑-entrada-y-salida");
  welcomechannel.send(`${member} ha abandonado el clan:slight_frown:`);
});

bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "❎ No verificado");
    member.addRole(role).catch(console.error);
});


bot.on("message", (message) => {
  if(message.content.toUpperCase().startsWith("+VERIFICADO")){
        message.delete();
            if(message.member.roles.find("name", "💎[NL] Administrador") || message.member.roles.find("name", "💎[NL] Líder") ||message.member.roles.find("name", "💎[NL] Oficial")){
                let User = message.mentions.users.first();
                let role = message.guild.roles.find("name", "✅Verificado");
                let role2 = message.guild.roles.find("name", "❎No verificado");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                miembro.removeRole(role2).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0x800080,
                        title: miembro.displayName,
                        description: "**Ha verificado a **" + User + "**correctamente**",
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

bot.login(tokenfile.token);
