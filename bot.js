const Discord = require('discord.js');

const client = new Discord.Client();
const token = "Njg1MjIwMTU2NTI3NzM4OTA2.XmFiSg.nU45LoaH91unUG6P1lJPUdoDHXc"
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(token);//BOT_TOKEN is the Client Secret
