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
  var medallas = ["633653927715274772", "633653848434671616"];
  var strMedallas =""; 
 for(let i=0; i<medallas.length; i++){
    if(guildMember.roles.has(medallas[i])){
        strMedallas = strMedallas + medallas[i] + " ";
    }
}
  
  message.channel.send({
                    embed:
                    {
                        color: #64FF00,
                        description: "Información"
                        fields: [
                            {
                                name:"Roles",
                                value: `${strMedallas}`
                                
                            }
                        ]
                    })

module.exports.help = {
  name: "medallas"
} 
