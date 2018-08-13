const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("formato incorrecto +proponer @usuario razón de la propuesta");
      let rreason = args.join(" ").slice(22);
      let sicon = message.guild.iconURL;
      let reportEmbed = new Discord.RichEmbed()
      
      .setTitle("Nueva sugerencia")
      .setColor("#15f153")   
      .addField("Propuesta por:", `${rUser}`)       
      .addField("Desarrollo de la sugerencia:", rreason);


      let partidaschannel = message.guild.channels.find(`name`, "sugerencias");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");
      
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
      partidaschannel.send(reportEmbed);
    


}

module.exports.help = {
  name: "sugerencia"
}


