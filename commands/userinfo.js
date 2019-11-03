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

  let embed = new Discord.RichEmbed()
    .setAuthor(user.username)
    .setDescription("Información")
    .setColor("#64FF00")
    .addField("Full Username:", `${user.username}${user.discriminator}`)
    .addField("ID:", user.id)
    .addField("Roles", guildMember.roles.map(r => `${r}`).join('|'));

  message.channel.send(embed);
}

module.exports.help = {
  name: "userinfo"
}
