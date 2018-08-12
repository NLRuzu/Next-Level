const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +report @usuario razón");
    let rreason = args.join(" ").slice(22);
    
    
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("INFORME DEL TOQUE")
    .setColor("#FF0000")
    .addField("Usuario reportado:", `${rUser}`)
    .addField("Reportado por:", `${message.author}`)
    .addField("Fecha:", message.createdAt)
    .addField("Razón:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "❗-toques");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    
    message.mentions.users.map(async user => {
        const member = message.guild.member(user);
        try { await user.send({
               embed: {
                        color: 0xFF0000,
                        title: "HAS RECIBIDO UN TOQUE",
                        description: "Estimado Usari@ de Next Level, acabas de recibir un toque por alguna acción, o actitud que va en contra de nuestras normas.\n\nPor favor visita el canal de #toques para más información.\n\nUn saludo, el STAFF",
                    }
                });
                
            }
        catch (err) { console.log('error'); }
            });

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
  
}

     
module.exports.help = {
  name: "report"
}
