const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**COMANDOS STAFF**")
    .setColor("#ff006c")
    .setThumbnail(sicon)
    .addField("**+report**", "Abrimos la lista de comandos para los toques")
    .addField("**+verificar @User**", "Asigna rol Verificado para acceder al contenido del discord")
    .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
    .addField("**+proponer @User Razón**", "Propone a un usuario ascenso de rango por x motivo")
    .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #📋-comunicados")
    .addField("**+aceptar @user**", "Aceptamos una sugerencia en el canal #sugerencias y se le envia un MP automático")
    .addField("**+bl @user razón**", "Añadimos una persona nueva a la BlackList en la sala #📌-blacklist");


    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "staff"
}
