const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +report @usuario razón");
    let rreason = args.join(" ").slice(22);
    
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Informe de Toques")
    .setColor("#15f153")
    .addField("Usuario reportado:", `${rUser}`)
    .addField("Reportado por:", `${message.author}`)
    .addField("Fecha:", message.createdAt)
    .addField("Razón:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "❗-toques");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
