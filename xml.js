const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log('GG1')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
ناقصنا لمبات :(
https://discord.gg/HxPDpbA
الدعووة خاصة لك يا  [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
   return channel.send(` 
**ناقصنا لمبات :(
https://discord.gg/HxPDpbA
الدعووة خاصة لك يا  [ ${member}  ]
**`) 
}).catch(console.error)

})

 client.on('message', message => {
  if (message.content === '!تعالو') {   
      if (message.author.id !== '447179855898083338')
 return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '!برا') {   
      if (message.author.id !== '447179855898083338')
 return message.react('🤦🏻‍♂️')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});




client.login(process.env.BOT_TOKEN);
