const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("formato incorrecto +sugerencia @usuario razón de la sugerencia");
      let rreason = args.join(" ").slice(22);
      let sicon = message.guild.iconURL;
      let sugerenciaEmbed = new Discord.RichEmbed()
      
      .setTitle("NUEVA SUGERENCIA ")
      .setColor("#00ffdc")   
      .addField("Propuesta por:", `${rUser}`)       
      .addField("Desarrollo de la sugerencia:", rreason);

		
      let partidaschannel = message.guild.channels.find(`name`, "💌-sugerencias");
      if(!partidaschannel) return message.channel.send("Introduce bien el comando");
      
      message.mentions.users.map(async user => {

        const member = message.guild.member(user);

        try { await user.send({

               embed: {

                        color: 0x00ffdc,

                        title: "SUGERENCIA RECIBIDA",

                        description: "Tu Sugerencia ha sido enviada correctamente, gracias por aportar tu granito de arena.\n\nUn saludo, el STAFF",
                    }

                });

            }

        catch (err) { console.log('error'); }

            });

      message.delete().catch(O_o=>{});
      partidaschannel.send(sugerenciaEmbed);
      
	  let message = await message.channel.send(sugerenciaEmbed);
	  await message.react(":aceptado:472146792339734565");
	  await message.react("noacepto:472147160423727105");
	  
	  const reactions = await message.awaitReactions(reaction => reaction.emoji.name ===":aceptado:472146792339734565" || reaction.emoji.name === "noacepto:472147160423727105", {time: 15000});
	  console.log(reactions);

}

module.exports.help = {
  name: "sugerencia"
}


