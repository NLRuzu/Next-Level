const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let guildMember;

  if (message.mentions.members.first()) {
    guildMember = message.mentions.members.first();
  } else {
    guildMember = message.member;
  }

  // We need the User object aswell for different properties
  const user = guildMember.user;
  var medallas = ["💛 Fiel a Next Level", "Cazador Sombrío 🔪"];
  var strMedallas =""; 
 for(let i=0; i<medallas.length; i++){
    if(guildMember.roles.has(medallas[i])){
        strMedallas = strMedallas + medallas[i] + " ";
    }
}
  
  let embed = new Discord.RichEmbed()
    .setAuthor(user.username)
    .setDescription("Información")
    .setColor("#64FF00")
    .addField("Roles", `${strMedallas}`);

  message.channel.send(embed);
}

module.exports.help = {
  name: "medallas"
} 
