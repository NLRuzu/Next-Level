const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
  if(args[0]) return errors.noPerms(message, "Contacta con un Administrador");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} mensajes eliminados correctamente.`).then(m => m.delete(5000));
});
}

module.exports.help = {
  name: "clear"
}
