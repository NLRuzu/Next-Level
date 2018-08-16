const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var comunicado = message.content.replace("+sugerencia ", "");
      var embebido = {
                            "embed": {
                                color: 0x84ff80 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "NUEVA SUGERENCIA",
                url: "http://gamedev.es/",

                description: comunicado,
                timestamp: message.createdAt,
                            }
                    };

                message.channel.send(embebido);
                message.delete().catch(O_o=>{});

                if (message.channel.id == "475267748868390912" && message.author.bot) {
                    message.react("472146792339734565");
                    message.react("472147160423727105");
                }

        }

module.exports.help = {
  name: "sugerencia"
}
