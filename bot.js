const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Njg1MjIwMTU2NTI3NzM4OTA2.XmFiSg.nU45LoaH91unUG6P1lJPUdoDHXc);//BOT_TOKEN is the Client Secret
