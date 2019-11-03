const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let member;
if (message.mentions.users > 0) {
    member = message.mentions.user.size()
} else {
    member = message.author
}
let user;
if (message.mentions.users > 0) {
    user = message.mentions.user.size()
} else {
    user = message.author
}
	
const user = message.mentions.users.first() || message.author;
const member = message.mentions.members.first() || message.member;
if(!member) return message.channel.send('This command can only be run in a guild!')	
	
let embed = new Discord.RichEmbed()
    .setAuthor(user.tag)
    .setDescription("Users Info", true)
    .setColor("#64FF00", true)
    .addField("Full Username:", user.tag , true)
    .addField("ID:", user.id, true)
    .addField("Created at:", user.createdAt, true)
    .addField("Status:", user.presence.status , true)
    .addField("Game:", user.presence.game ? user.presence.game : 'none' , true)
    .addField("Roles", member.roles.map(r => `${r}`).join(' | '), true);
 message.channel.send(embed);			



};


      message.delete().catch(O_o=>{});
		}	

module.exports.help = {
  name: "userinfo"
}
