const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Siap kak!");
});

client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  }
  if (command === "asl") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  if (command === "kick") {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason);
  }
  if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
});

client.login(config.token);
