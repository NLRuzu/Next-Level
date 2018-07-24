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
    let role = member.guild.roles.find("name", "🔰 Visitante");
    member.addRole(role).catch(console.error);
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


 // server info comando
  //if(cmd === `${prefix}serverinfo`){

  //  let sicon = message.guild.iconURL;
    //let serverembed = new Discord.RichEmbed()
  //  .setDescription("Información del Servidor")
  //  .setColor("#FE2E2E")
    //.setThumbnail(sicon)
  //  .addField("Nombre del Servidor", message.guild.name)
  //  .addField("Miembros Totales", message.guild.memberCount);

  //  return message.channel.send(serverembed);
//
// lista de comandos
 //if(cmd === `${prefix}help`){

  // let sicon = message.guild.iconURL;
   //let serverembed = new Discord.RichEmbed()
  // .setDescription("Lista de Comandos")
  // .setColor("#FE2E2E")
  // .setThumbnail(sicon)
  // .addField("Miembros Totales", message.guild.memberCount)
  // .addField("!serverinfo", "INFORMACIÓN DEL SERVIDOR");


//   return message.channel.send(serverembed);
//}


//if(cmd === `${prefix}busco`){

    //busco gente fortnite
    //let cantidad = args[0];
    //let juego = args[1];
    //let sicon = message.guild.iconURL;
    //let reportEmbed = new Discord.RichEmbed()
    //.setTitle(message.member.nickname)
    //.setDescription("Busca **"+ cantidad+"** personas para jugar "+juego)
    //.setColor("#8904B1")
    //.addField("En la sala", message.member.voiceChannel);

    //let partidaschannel = message.guild.channels.find(`name`, "💎buscar-partidas");
    //if(!partidaschannel) return message.channel.send("No se encuentran partidas en este momento");


    //message.delete().catch(O_o=>{});
    //partidaschannel.send(reportEmbed);

  //  return;
//}



});

bot.login(tokenfile.token);
