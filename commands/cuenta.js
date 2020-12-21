const Discord = require("discord.js");


module.exports.run = async (bot, message, args, guildMember) => {

    if (message.mentions.members.first()) {
        guildMember = message.mentions.members.first();
    } else {
        guildMember = message.member;
    }

    var rango = ["790204315477213184", "790204315087667233", "790204313464864779", "790204313250955275", "790204311614259210"];
    var strRango = "";

    for (let d = 0; d < rango.length; d++) {
        if (guildMember.roles.cache.get(rango[d])) {
            strRango = strRango + "<@&" + message.guild.roles.cache.get(rango[d]) + "> \n";
        }
    }

    var juegos = ["790204316400222252", "790204317239214090", "790540447658934313", "790540448015581202", "790540449219739668"];
    var strJuegos = "";

    for (let c = 0; c < juegos.length; c++) {
        if (guildMember.roles.cache.get(juegos[c])) {
            strJuegos = strJuegos + "<@&" + message.guild.roles.cache.get(juegos[c]) + "> \n";
        }
    }

    var medallas = ["633653848434671616"];
    var strMedallas = "";

    for (let i = 0; i < medallas.length; i++) {
        if (guildMember.roles.cache.get(medallas[i])) {
            strMedallas = strMedallas + "<@&" + message.guild.roles.cache.get(medallas[i]) + "> \n";
        }
    }

    var eventos = ["633025474808774697", "638002315348934658"];
    var strEventos = "";

    for (let a = 0; a < eventos.length; a++) {
        if (guildMember.roles.cache.get(eventos[a])) {
            strEventos = strEventos + "<@&" + message.guild.roles.cache.get(eventos[a]) + "> \n";
        }
    }


    var exp = ["633959653012668416", "633959800715083787", "634001148180955136", "634001183211520020", "634001209417662485", "634001240950571018", "634001268641366037", "634001297078484993", "634001321250258944", "634001358025916428"];
    var strExp = "";

    for (let b = 0; b < exp.length; b++) {
        if (guildMember.roles.cache.get(exp[b])) {
            strExp = strExp + "<@&" + message.guild.roles.cache.get(exp[b]) + "> \n";
        }
    }

    if (!strJuegos) {
        strJuegos = "Ninguno";
    }

    if (!strRango) {
        strRango = "Ninguno";
    }

    if (!strMedallas) {
        strMedallas = "Ninguna";
    }

    if (!strEventos) {
        strEventos = "Ninguno";
    }

    if (!strExp) {
        strExp = "Ninguno";
    }




    message.channel.send({
        "embed": {

            color: 0xc6ff00,
            title: "INFORMACIÓN CUENTA WILD RIFT",
            description: "Toda la información referente al perfil del usuario",

            thumbnail: {
                url: "https://i.gyazo.com/fbc29e84a7a992cb70277a8f4194c2fc.png",
            },

            fields:
                [
                    {
                        name: "🔗 Perfil de",
                        value: `${guildMember}`,
                        inline: false
                    },
                   
                    {
                        name: "🔰 Liga",
                        value: `${strRango}`,
                        inline: true
                    },

                    {
                        name: "💎 Roles",
                        value: `${strJuegos}`,
                        inline: true
                    },

                    {
                        name: "💿 Eventos Participados",
                        value: `${strEventos}`,
                        inline: true
                    },
                    {
                        name: "📀 Medallas Obtenidas",
                        value: `${strMedallas}`,
                        inline: true
                    },
                    {
                        name: "Para ver todas las medallas por secciones de juegos",
                        value: "```usa +medallas```",
                        inline: false
                    }

                ]
        }
    })
}

module.exports.help = {
    name: "cuenta"
}
