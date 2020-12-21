const Discord = require("discord.js");

module.exports.run = async (bot, message, args, guildMember) => {

    if (message.mentions.members.first()) {
        guildMember = message.mentions.members.first();
    } else {
        guildMember = message.member;
    }


    message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "BIENVENIDO ${guildMember}, A LA SECCIÓN DE WILD RIFT NEXT LEVEL",
            description: "Escríbenos tu nick#tag para añadirte a <#790176071806484490>",
            
		thumbnail: {
            url: "https://i.gyazo.com/fbc29e84a7a992cb70277a8f4194c2fc.png",
        },
            
            fields:
	    [
            {
            name: "**EN PRIMER LUGAR**",
            value: "Diríjete a <#790541015797989376> y asígnate todo lo que tengas ahí",  
            inline:false 	
            },

            {
            name: "**EN SEGUNDO LUGAR**",
            value: "Puedes usar el comando `+cuenta` en la sala <#790561030693584977> para ver tus datos de *Liga que perteneces, Roles que has seleccionado, Eventos participados y medallas obtenidas*",  
            inline:false 	
            }
	    ]
        }
        })
    }

module.exports.help = {
  name: "bienvenidawr"
}
