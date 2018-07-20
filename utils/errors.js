const Discord = require ("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("Error")
  .setColor("#FE2E2E")
  .addField("No tienes suficientes permisos para usar este comando", perm);

  message.channel.send(embed).then(m => m.delete(5000));
}
