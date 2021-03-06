const Discord = require("discord.js");


module.exports.run = async (bot, message, args, guildMember) => {

    if (message.mentions.members.first()) {
        guildMember = message.mentions.members.first();
    } else {
        guildMember = message.member;
    }

    var rango = ["458227404691996673", "485455156247396352", "776881483117363200", "776881900484689940", "484455466102161409", "776881848857002024", "777103249500667916", "776881979672887326", "458227928359239690", "777103663671541760", "777103629647740938", "777103985273339924"];
    var strRango = "";

    for (let d = 0; d < rango.length; d++) {
        if (guildMember.roles.cache.get(rango[d])) {
            strRango = strRango + "<@&" + message.guild.roles.cache.get(rango[d]) + "> \n";
        }
    }

    var juegos = ["464055613484302336", "643448526524776458", "777153619056787467", "777153814553034772", "787784277689368627"];
    var strJuegos = "";

    for (let c = 0; c < juegos.length; c++) {
        if (guildMember.roles.cache.get(juegos[c])) {
            strJuegos = strJuegos + "<@&" + message.guild.roles.cache.get(juegos[c]) + "> \n";
        }
    }

    var medallas = ["633653927715274772", "633653848434671616", "633653772660244491", "641189390793703435", "777281262155071519"];
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
            title: "INFORMACIÓN PERFIL",
            description: "Toda la información referente al perfil del usuario",

            thumbnail: {
                url: "https://i.imgur.com/v2Sm3d6.png",
            },

            fields:
                [
                    {
                        name: "🔗 Perfil de",
                        value: `${guildMember}`,
                        inline: false
                    },
                    {
                        name: "🔰 Rango EXP",
                        value: `${strExp}`,
                        inline: false
                    },

                    {
                        name: "⚜️ Rango Comunidad",
                        value: `${strRango}`,
                        inline: false
                    },

                    {
                        name: "💎 Juegos",
                        value: `${strJuegos}`,
                        inline: false
                    },

                    {
                        name: "💿 Eventos Participados",
                        value: `${strEventos}`,
                        inline: false
                    },
                    {
                        name: "📀 Medallas Obtenidas",
                        value: `${strMedallas}`,
                        inline: false
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
    name: "perfil"
}
