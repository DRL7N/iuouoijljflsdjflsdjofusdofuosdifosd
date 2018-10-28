const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log('G5G11')
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

 client.on('message', message => {
  if (message.content === '1-fa') {   
      if (message.author.id !== '383394687349948426')
 return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '2-fa') {   
      if (message.author.id !== '383394687349948426')
 return message.react('🤦🏻‍♂️')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});




client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
تعال وما بقالي يوم 
  في غيابك يصبرني .. !! 
https://discord.gg/HxPDpbA
الدعووة خاصة لك يا  [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
   return channel.send(` 
**
تعال وما بقالي يوم 
  في غيابك يصبرني .. !! 
https://discord.gg/HxPDpbA
الدعووة خاصة لك يا  [ ${member}  ]
**`) 
}).catch(console.error)

})



client.login(process.env.BOT_TOKEN);
