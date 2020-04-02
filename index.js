const Discord = require('discord.js');
const client = new Discord.Client();
let a = 0;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

//message listener
client.on('message', message => {
    if (message.content.includes("bot?")) {
        a++;
        console.log(a);
        switch (a) {
          case 1:
            message.channel.send('Hehe iyaa.. hai kakak namaku Mar! aku marBOT sekre fiagra yaaa. tolong jangan buang sampah sembarangan ya :((');
            break;
          case 2:
            message.channel.send('loh iya?');
            break;
          case 3:
            message.channel.send('kok ngeyeeel');
            break;
          case 9:
            a = 0;
			break;
            }
    }
})

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
