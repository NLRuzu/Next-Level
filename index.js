const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableMentions: 'everyone' });
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
let ft = "+";


// COMMANDS // 
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() == "js")
    if (jsfile.length <= 0) {
        console.log("No se encuentra el comando");
        return
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} cargado`);
        bot.commands.set(props.help.name, props);
    });

});


// MENSAJE DE BIENVENIDA NUEVOS USUARIOS //
bot.on("guildMemberAdd", (member) => {
    console.log(`${member.id} ha entrado al server `);
    let embed = {
        embed: {
            color: 0xc6ff00,
            title: "Hola bienvenido a Next Level",
            description: '**Para ver las salas de los juegos asígnatelos manualmente. Ve a la sala <#585873855676153857> y haz clic en el icono del rol que quieras**',

        }
    };

    member.guild.channels.cache.get("561602218219012106")
    .send(`**Bienvenido: Nuevo usuario ${member} a Next-Level**`, embed);

    member.send({
        embed: {
            color: 0xc6ff00,
            title: "Hola bienvenido a Next Level",
            description: '**Para ver las salas de los juegos asígnatelos manualmente. Ve a la sala <#585873855676153857> y haz clic en el icono del rol que quieras**',
        }
    });
});

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
    console.log(`${member.nickname} ha abandonado el server `);

    let welcomechannel = member.guild.channels.find(`name`, "📉-abandonos");
    welcomechannel.send({
        embed: {
            color: 0xc6ff00,
            title: "**HA ABANDONADO**",
            url: "http://gamedev.es/",
            description: `${member} ha abandonado la comunidad`,
        }
    });
});

// ROL DE ENTRADA AL SERVIDOR - NO VERIFICADO //
bot.on("guildMemberAdd", function (member) {
    let role = member.guild.roles.find("name", "✅Verificado");
    member.addRole(role).catch(console.error);

});






// LISTA DE COMANDOS
bot.on("message", (message) => {

    // REACCION EMOJI SALA CARTELERA //
    if (message.channel.id == "649325138289885209" && message.author.bot) {
        message.react("472146792339734565");
        message.react("472147160423727105");
    }

    // REACCION EMOJI SALA SUGERENCIAS //
    if (message.channel.id == "570620409406423060" && message.author.bot) {
		message.react('✅');
		message.react('❌');
      
    } 
        
        // COMANDO COMUNICAR GENERAL
        if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
            if (message.member.roles.cache.some(role => role.name === '🌟 ADMINISTRADOR')) {
                var comunicado = message.content.replace("+comunicar ", "");
                var embebido = {
                    "embed": {
                        "color": 0xc6ff00,
                        author: {
                            name: message.author.tag,
                            icon_url: message.author.avatarURL
                        },
                        "image": {

                        },
                        footer: {
                            text: message.guild.name
                        },
                        description: comunicado,
                        timestamp: message.createdAt,
                    }
                };

                message.delete().catch(O_o => { });
                bot.channels.cache.get("777549041268686879").send(embebido);

            }
        }
        // FIN COMUNICADOS GENERALES

        // COMUNICAR NOTICIAS ROGUE COMPANY
        if (message.content.startsWith(ft + "noticiasrogue")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
            
            if (message.member.roles.cache.some(role => role.name === '🌟 ADMINISTRADOR')) {
                var comunicado = message.content.replace("+noticiasrogue ", "");
                var embebido = {
                    "embed": {
                        "color": 0xc6ff00,
                        author: {
                            name: message.author.tag,
                            icon_url: message.author.avatarURL
                        },
                        "image": {
                            "url": "https://i.gyazo.com/30e5409130ec045f666f76aea42cd290.png"
                        },
                        footer: {
                            text: message.guild.name
                        },
                        description: comunicado,
                        timestamp: message.createdAt,
                    }
                };

                message.delete().catch(O_o => { });
                bot.channels.cache.get("776875070642454589").send(embebido);

            }
        }

        //FIN COMUNICADOS NOTICIAS ROGUE

        // COMUNICAR NOTICIAS PHASMOPHOBIA
        if (message.content.startsWith(ft + "noticiasphasmo")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
            
            if (message.member.roles.cache.some(role => role.name === '🔴 JEFE SECCIÓN: PHASMOPHOBIA') || (message.member.roles.cache.some(role => role.name === '🟥 MODERADOR PHASMOPHOBIA'))) {
                var comunicado = message.content.replace("+noticiasphasmo ", "");
                var embebido = {
                    "embed": {
                        "color": 0xc6ff00,
                        author: {
                            name: message.author.tag,
                            icon_url: message.author.avatarURL
                        },
                        "image": {
                            "url": "https://i.gyazo.com/4ab1def65c0b80b4dd71fe226bae2f90.png"
                        },
                        footer: {
                            text: message.guild.name
                        },
                        description: comunicado,
                        timestamp: message.createdAt,
                    }
                };

                message.delete().catch(O_o => { });
                bot.channels.cache.get("776872406404038677").send(embebido);

            }
        }

        //FIN COMUNICADOS NOTICIAS ROGUE

    

        // if (message.content.startsWith(ft + "partidared")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
        //     var args = [];
        //     var texto = message.content;
        //     try {
        //         while (texto.includes("\"")) {
        //             texto = texto.substr(texto.indexOf("\"") + 1);
        //             args.push(texto.substring(0, texto.indexOf("\"")));
        //             texto = texto.substr(texto.indexOf("\"") + 1);
        //         }
        //     }
        //     catch (err) {
        //         message.channel.send("+partidared \"Descripción\" \"Día y Hora\"");
        //         return;
        //     }
        //     let server = bot.guilds.get("597732937659842581");
        //     let adminRoleObject = message.guild.roles.find("name", "Red Dead");
        //     let NickParticipante1 = args[0];
        //     let NickParticipante2 = args[1];
        //     let disponible = args[2];
        //     var apuntarme = {
        //         "embed": {
        //             color: 0xafff00,
        //             title: "**NUEVA PARTIDA PROGRAMADA**",
        //             url: "http://gamedev.es/",

        //             fields: [
        //                 {
        //                     name: "📜 Descripción",
        //                     value: NickParticipante1,
        //                 },
        //                 {
        //                     name: "📆 Día y Hora",
        //                     value: NickParticipante2,
        //                 }

        //             ]
        //         }
        //     };


        //     let torneochannel = bot.channels.get("649325138289885209").send(`[${adminRoleObject}]`, apuntarme);
        //     if (!torneochannel) return message.channel.send("No se encuentra la sala");


        //     message.delete().catch(O_o => { });

        // }

        // fin comunicar general

        // if (message.content.startsWith(ft + "verificar")) {        //  +verificar @user   = Verificamos a un usuario
        //     message.delete();
        //     if (message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")) {
        //         let User = message.mentions.users.first();
        //         let role = message.guild.roles.find("name", "✅Verificado");
        //         let role2 = message.guild.roles.find("name", "❎ No verificado");
        //         let guild = bot.guilds.get("458220475957379074");
        //         let miembro = guild.member(User);
        //         miembro.addRole(role).catch(console.error);
        //         miembro.removeRole(role2).catch(console.error);
        //         User.send({
        //             embed: {
        //                 color: 0x04ff00,
        //                 title: "**HAS SIDO VERIFICADO**",
        //                 url: "http://gamedev.es/",
        //                 description: "**¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. \n\nPara más información accede al canal de texto #info. \n\nNo olvides asignarte tu rol para recibir las notificaciones de fortnite en sala #comandos escribe +roles y usa el que quieras.**",
        //             }
        //         });


        //         bot.channels.get("570620409406423060").send({
        //             embed: {
        //                 author: {
        //                     name: message.author.tag,
        //                     icon_url: message.author.avatarURL
        //                 },
        //                 color: 0x04ff00,
        //                 description: "**Ha verificado a **" + User + " **correctamente**",
        //             }
        //         });
        //     }
        // }


        // if (message.content.startsWith(ft + "staff")) {            //  +staff   = Información de todos los comandos de STAFF
        //     if (message.guild.roles.find("name", "🌟 STAFF")) {
        //         let sicon = message.guild.iconURL;
        //         let serverembed = new Discord.RichEmbed()
        //             .setDescription("**COMANDOS STAFF**")
        //             .setColor("#C6FF00")
        //             .setThumbnail(sicon)
        //             .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
        //             .addField("**+proponer @user @rol**", "Proponemos un ascenso de un usuario")
        //             .addField("**+ascenso @user @rol**", "Redactamos un nuevo ascenso, solo usar en sala <#561601089460371457>")
        //             .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala <#561601089460371457>")
        //             .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")




        //         return message.channel.send(serverembed);
        //     }
        // }

 // PARA QUITAR COMENTARIO PULSAS CONTROL + K + U

        // if (message.content.startsWith(ft + "infoinvi")) {         //  +infoinvi   = Envía toda la información sobre invitaciones canal INFO
        //     let embed = {
        //         "embed": {

        //             color: 0xc6ff00,
        //             footer: {
        //                 "text": message.guild.name
        //             },
        //             title: 'INFORMACIÓN SOBRE LINK DE INVITACIÓN',
        //             url: "http://gamedev.es/",
        //             description: '**Conoces gente que le pueda interesar nuestro clan o quieres que entren contigo aquí. Invítalos usando el siguiente link**',
        //             fields: [
        //                 {
        //                     name: "Copia y pega el enlace a un amigo/a",
        //                     value: `:beginner: https://discord.gg/tztnx2f`,
        //                 }
        //             ]
        //         }
        //     };

        //     message.channel.send(embed);
        //     message.delete();

        // }



    //} // FIN COMANDOS STAFF

    // if (message.content.startsWith(ft + "buscarrogue")) {         //  +buscarpartidas   = Envía toda la información sobre invitaciones canal INFO
    //     let embed = {
    //         "embed": {

    //             color: 0xc6ff00,
    //             footer: {
    //                 "text": message.guild.name
    //             },
    //             title: 'COMANDO PARA BUSCAR PARTIDAS',
    //             url: "http://gamedev.es/",
    //             description: '**DEBERÁS ESTAR EN UNA SALA DE VOZ EN PRIMER LUGAR.**',
    //             fields: [
    //                 {
    //                     name: "`+rogue mensaje`",
    //                     value: `Para Rogue Company, escribir el comando en la sala <#777506899611353098>`,
    //                 }

    //             ]
    //         }
    //     };
    //     message.delete();
    //     bot.channels.cache.get("777506899611353098").send(embed);

    // }
    
    // if (message.channel.id == message.channel.id) { 	// SOLUCIÓN DESAFIOS TEMPORADA 8				



    // }




    // if (message.channel.id == message.channel.id) { 	// PARCHES INFORMATIVOS FORTNITE	




    // }


    // // INICIO SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 1: USO INHADECUADO DE CANALES DE TEXTO

    // if (message.content.startsWith(ft + "ad1")) {        //  +ad1 @user   =  Advertimos al usuario
    //     message.delete();
    //     if (message.member.roles.find("name", "🌟 STAFF")) {
    //         let User = message.mentions.users.first();
    //         let guild = bot.guilds.get("458220475957379074");
    //         let miembro = guild.member(User);

    //         User.send({
    //             embed: {
    //                 color: 0xFF0000,
    //                 title: "**ACABAS DE RECIBIR UNA ADVERTENCIA**",
    //                 url: "http://gamedev.es/",
    //                 description: "**Acabas de recibir una advertencia por incumplimiento del ART 1: Uso inadecuado de canales de texto \n\nPara evitar mas advertencias de este tipo, accede al canal de texto <#561595483328610304> y mira el uso de cada sala.\n\n**",
    //             }
    //         });


    //         bot.channels.get("633700114980143104").send({
    //             embed: {
    //                 author: {
    //                     name: message.author.tag,
    //                     icon_url: message.author.avatarURL
    //                 },
    //                 color: 0xFF0000,
    //                 description: "Ha advertido a **" + User + "**",
    //                 fields: [
    //                     {
    //                         "name": "por incumplimiento del",
    //                         "value": "**ART 1: Uso inadecuado de canales de texto**",
    //                     }
    //                 ]





    //             }
    //         });
    //     }
    // }

    // // FIN SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 1: USO INADECUADO DE CANALES DE TEXTO

    // // INICIO SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 2: VOCABULARIO INADECUADO

    // if (message.content.startsWith(ft + "ad2")) {        //  +ad2 @user   =  Advertimos al usuario
    //     message.delete();
    //     if (message.member.roles.find("name", "🌟 STAFF")) {
    //         let User = message.mentions.users.first();
    //         let guild = bot.guilds.get("458220475957379074");
    //         let miembro = guild.member(User);

    //         User.send({
    //             embed: {
    //                 color: 0xFF0000,
    //                 title: "**ACABAS DE RECIBIR UNA ADVERTENCIA**",
    //                 url: "http://gamedev.es/",
    //                 description: "**Acabas de recibir una advertencia por incumplimiento del ART 2: Vocabulario inadecuado \n\nPara evitar mas advertencias de este tipo modera las formas o tu lenguaje con los miembros de la comunidad.\n\n**",
    //             }
    //         });


    //         bot.channels.get("633700114980143104").send({
    //             embed: {
    //                 author: {
    //                     name: message.author.tag,
    //                     icon_url: message.author.avatarURL
    //                 },
    //                 color: 0xFF0000,
    //                 description: "Ha advertido a **" + User + "**",
    //                 fields: [
    //                     {
    //                         "name": "por incumplimiento del",
    //                         "value": "**ART 2: Vocabulario inadecuado**",
    //                     }
    //                 ]





    //             }
    //         });
    //     }
    // }

    // // FIN SISTEMA DE ADVERTENCIAS USUARIOS // ADVERTENCIA 2: VOCABULARIO INADECUADO





    // if (message.content.startsWith(ft + "salas")) {         //  3DJUEGOS

    //     let embed2 = {

    //         "embed": {
    //             "title": "USO ADECUADO DE NUESTRAS SALAS",
    //             "description": "A continuación explicamos muy brevemente el uso de cada sala, y así evitar posibles conflictos.",
    //             "color": 13041408,
    //             "timestamp": "2019-04-29T12:14:55.011Z",
    //             "footer": {
    //                 "icon_url": "https://i.imgur.com/mL7DyRK.png",
    //                 "text": "Comunidad NEXT LEVEL"
    //             },
    //             "thumbnail": {
    //                 "url": "https://i.imgur.com/v2Sm3d6.png"
    //             },

    //             "fields": [
    //                 {
    //                     "name": "💬-chat",
    //                     "value": "Esta es la sala principal de charla, vale todo respetando siempre las normas."
    //                 },
    //                 {
    //                     "name": "🎼-música",
    //                     "value": "Sala exclusiva de uso de comandos de música"
    //                 },
    //                 {
    //                     "name": "📲-comandos",
    //                     "value": "Sala exclusiva de uso de comandos, ahí usarás todos los comandos de la comunidad que tengas a tu disposición de uso."
    //                 },
    //                 {
    //                     "name": "🌍-buscar-partidas",
    //                     "value": "Sala exclusiva para BUSCAR gente para jugar Fortnite Salvar el Mundo, no se admite debates, ni charlas del juego SOLO BÚSQUEDA DE GENTE."
    //                 }

    //             ]
    //         }
    //     };
    //     message.channel.send(embed2);



    // }



    if (message.channel.id == message.channel.id) { 	// COMANDOS DE MUSICA BOTS

        if (message.content.startsWith(ft + "musica")) {         //  BOT MUSICAS
            let embed1 = {
                "embed": {
                    "title": "LISTA DE COMANDOS BOT MÚSICA",
                    "color": 13041408,
                    "timestamp": "2019-04-29T12:14:55.011Z",
                    "footer": {
                        "icon_url": "https://i.imgur.com/mL7DyRK.png",
                        "text": "Comunidad NEXT LEVEL"
                    },
                    "thumbnail": {
                        "url": "https://i.imgur.com/v2Sm3d6.png"
                    },
                    "image": {
                        "url": "https://i.imgur.com/DIvVkKY.png"
                    },
                    "fields": [
                        {
                            "name": "!play nombre de la canción o link",
                            "value": "Reproduce una canción y si ponemos muchas seguidas se añaden a una lista de reproducción"
                        },
                        {
                            "name": "!pause y !stop",
                            "value": "Para una canción o la deja en pause"
                        },
                        {
                            "name": "!loop",
                            "value": "Ponemos en reprodución en ciclo la lista de reproducción"
                        },
                        {
                            "name": "!leave y !skip",
                            "value": "El primero hace que se marche el bot de nuestra sala y el segundo hace pasar a la siguiente canción"
                        }

                    ]
                }
            };
            let embed2 = {
                "embed": {
                    "title": "LISTA DE COMANDOS BOT MÚSICA 2",
                    "color": 13041408,
                    "timestamp": "2019-04-29T12:14:55.011Z",
                    "footer": {
                        "icon_url": "https://i.imgur.com/mL7DyRK.png",
                        "text": "Comunidad NEXT LEVEL"
                    },
                    "thumbnail": {
                        "url": "https://i.imgur.com/v2Sm3d6.png"
                    },
                    "image": {
                        "url": "https://i.imgur.com/UMST8Lc.png"
                    },
                    "fields": [
                        {
                            "name": "-play nombre de la canción o link",
                            "value": "Reproduce una canción y si ponemos muchas seguidas se añaden a una lista de reproducción"
                        },
                        {
                            "name": "-pause y -stop",
                            "value": "Para una canción o la deja en pause"
                        },
                        {
                            "name": "-loop",
                            "value": "Ponemos en reprodución en ciclo la lista de reproducción"
                        },
                        {
                            "name": "-leave y -next",
                            "value": "El primero hace que se marche el bot de nuestra sala y el segundo hace pasar a la siguiente canción"
                        }

                    ]
                }
            };

            bot.channels.cache.get("561599847183155200").send(embed1);
            bot.channels.cache.get("561599847183155200").send(embed2);
        }
    }

    // // +SUGERENCIA //
     if (message.content.toUpperCase().startsWith("+SUGERENCIA")) {
        
        var comunicado = message.content.replace("+sugerencia ", "");
        var embebido = {
            "embed": {
                color: 0xc6ff00,
                author: {
                    name: message.author.tag,
                    icon_url: message.author.avatarURL
                },
                title: "**NUEVA SUGERENCIA**",
                url: "http://gamedev.es/",

                description: comunicado,
                timestamp: message.createdAt,
            }
         };
         bot.channels.cache.get("570620409406423060").send(embebido);
         
         message.delete().catch(O_o => { });
     }
    // /// FIN SUGERENCIA ///


    // // +BUSCAR DESCRIPCION // PARTIDAS //    - FUNCIONANDO
    // if (message.content.startsWith("+rd")) {
    //     if (message.guild.voiceChannel != null || message.guild.voiceChannel != undefined) {
    //         let desc = message.content.split("+rd ")[1];
    //         if (desc != null) {
    //             let options = {
    //                 maxAge: 3600
    //             }
    //             let server = bot.guilds.cache.get("495734058794483723");
                
    //             message.guild.voiceChannel.createInvite(options)
    //                 .then(invite => {
    //                     let invitacion = invite.code.split("invite/")[0];
    //                     let users = message.guild.voiceChannel.userLimit - message.guild.voiceChannel.members.size;

    //                     var mdb = {
    //                         "embed": {
    //                             "title": "BUSCANDO PARTIDA DE ROGUE COMPANY",
    //                             "url": "http://gamedev.es/",
    //                             "description": "Busco **" + users + "** compañeros para jugar en **" + message.guild.voiceChannel.name + "**",
    //                             "color": 0xc6ff00,
    //                             "timestamp": message.createdAt,
    //                             "author": {
    //                                 "name": message.author.tag,
    //                                 "icon_url": message.author.avatarURL
    //                             },
    //                             "fields": [
    //                                 {
    //                                     "name": "Descripción",
    //                                     "value": "*" + desc + "*",
    //                                 },
    //                                 {
    //                                     "name": "Únete a mi sala",
    //                                     "value": "[Haz click para unirte](https://discord.gg/" + invitacion + ")"
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                     bot.channels.cache.get("777506899611353098").send(mdb);
    //                 })
    //                 .catch(console.error);
    //         }
    //     }
    // }

   
    // CONFIG BOT 
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let argsx = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, argsx);

});




// ACTIVIDAD DEL BOT (JUGANDO A +HELP) //
bot.on("ready", async () => {
    console.log(`${bot.user.username} LISTO`);
    bot.user.setActivity("+ayuda");
});

bot.login(process.env.BOT_TOKEN);
