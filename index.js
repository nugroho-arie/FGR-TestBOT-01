const Discord = require('discord.js');
const client = new Discord.Client();
let a = 0;

client.once('ready', () => {
	console.log('Ready!');
});
// THIS  MUST  BE  THIS  WAY

client.login('Njk1NTI1Nzg3MjAxNDM3NzU3.XobdBA.KRW81mx3PplS0Rfpa-daUNilhSI');//BOT_TOKEN is the Client Secret

//message listener
client.on('message', message => {
    if (message.content.includes("bot")) {
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
	  case 5:
	    message.channel.send('paan dah');
	    break;
	  case 6:
	    message.channel.send('??????');
	    break;
	  case 8:
	    message.channel.send('Iya iya kak, udah kenal sama Mar kan?');
	    break;
	  case 10:
	    message.channel.send('y');
	    break;
	  case 11:
	    message.channel.send('._.');
	    break;
	  case 12:
	    message.channel.send('iya kak, iyaa');
	    break;
	  case 15:
	    message.channel.send('emangnya aku bolot kaya icangg??');
	    break;
	  case 16:
	    message.channel.send('sekali lagi dapet..........');
	    break;
	  case 20:
	    message.channel.send('hufttttt');
	    break;
          case 25:
            a = 0;
	    break;
            }
    }
})
