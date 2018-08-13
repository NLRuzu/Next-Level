
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const token = process.env.token;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) => { 
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("No se encuentra el comando");
    return
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} cargado`);
    bot.commands.set(props.help.name, props);
  });
 
});
 
 
bot.on("ready", async () => {
  console.log(`${bot.user.username} estÃ¡ online`);
  bot.user.setActivity("+help")
});
 
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} ha entrado al server `);
                 
  let welcomechannel = member.guild.channels.find(`name`, "📑-entrada-y-salida");
  welcomechannel.send({
               embed: {
                        color: 0x04ff00,
                        title: "NUEVO MIEMBRO",
                        description: `Bienvenido ${member} a Next-Level`,
                    }
                });
    member.send({
               embed: {
                        color: 0x04ff00,
                        title: "Esto ya es un embed",
                        description: 'Aqui pones lo que quieras xd',
                    }
                });
 });
 
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📑-entrada-y-salida");
  welcomechannel.send({
               embed: {
                        color: 0x04ff00,
                        title: "HA ABANDONADO",
                        description: `${member} ha abandonado el clan`,
                    }
                });
});
 
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "❎ No verificado");
    member.addRole(role).catch(console.error);
});
 
bot.on("message", (message) => {
  if(message.content.toUpperCase().startsWith("+VERIFICAR")){
        message.delete();
            if(message.member.roles.find("name", "🌟 STAFF NIVEL 3") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") ||message.member.roles.find("name", "🌟 STAFF NIVEL 1")){
                let User = message.mentions.users.first();
                let role = message.guild.roles.find("name", "✅Verificado");
                let role2 = message.guild.roles.find("name", "❎ No verificado");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                miembro.removeRole(role2).catch(console.error);
                User.send({
                    embed: {
                        color: 0x04ff00,
                        title: "HAS SIDO VERIFICADO",
                        description: "**¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor del clan. Para más información accede al canal de texto #info**",
                    }
                });
                message.channel.send({
                    embed: {
                        color: 0x04ff00,
                        title: message.member.nickname,
                        description: "**Ha verificado a **" + User + " **correctamente**",
                    }
                });
            }
        }
 
                    
			if(message.content.startsWith("+buscarf")){
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+buscarf ");
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("458220475957379074");
                        let adminRoleObject = server.roles.find("name", "🤖 Fortnite");
                        message.channel.send(`[<${adminRoleObject}>]`);
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => 
                            message.channel.send({embed: {
                            color: 3447003,
                            author: {
                                name: message.author.tag,
                                icon_url: message.author.avatarURL
                            },
                            title: "Haz click para unirte",
                            url: "https://discord.gg/" + invite.code,
                            description: "Busco **" + 4 - message.member.voiceChannel.members.size + "** soldados en el autobús **" + message.member.voiceChannel.name + "** para luchar.",
                            fields: [{
                                name: "Descripción",
                                value: "*" + desc + "*0"
                            },
                            ],
                            timestamp: new Date(),
                            footer: {
                            icon_url: bot.user.avatarURL,
                            text: "Buscar sala"
                            }
                        }
                        })
                        )
                        .catch(console.error);
                    }
                }
            }
 
  console.log("True");
 
 
               
         
             
 
 
                 
                   
                     
                           
               
           
           
               
 
  if(message.content.toUpperCase().startsWith("+ROLLCSGO")){
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "💣 CSGO");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0x04ff00,
                        description: "**ROL de CSGO asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
  console.log("True");
  
  if(message.content.toUpperCase().startsWith("+SUGERIR")){
      
                let titulo = message.content.toUpperCase().split("+SUGERENCIA")[1];
                let descripcion = message.content.split(titulo)[1];
            
                
                message.author.send("Enhorabuena, tu sugerencia has sido enviada correctamente, agradecemos tu tiempo y aportación");
                message.channel.send({
                    embed: {
                        author: {
                            name: message.author.displayName,
                            icon_url: message.author.avatarURL
                            
                        },
            
                        color: 0x04ff00,
                        title: message.member.nickname,
                        title: titulo,
                        description: descripcion,
                    }
                });
            }
  console.log("True");
  
 
  if(message.content.toUpperCase().startsWith("+ROLLFORTNITE")){
        message.delete();
            if(message.member.roles.find("name", "✅Verificado")){
                let User = message.member;
                let role = message.guild.roles.find("name", "🤖 Fortnite");
                let guild = bot.guilds.get("458220475957379074");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                message.channel.send({
                    embed: {
                        color: 0x04ff00,
                        description: "**ROL de FORTNITE asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
  console.log("True");
 
 
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
 
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 
 
});
 
bot.login(token).catch(err => console.log(err));
