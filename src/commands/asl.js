exports.run = (client, message, args) => {
  if(!args || args.length < 3) return message.channel.send(".____.");
  let [age, sex, location] = args;
  message.reply(`Hai kakak ${sex} yang dari ${location},\
    \nciee ngga keliatan ${age} ih umurnyaaaa... netflix n chill yuuuk?`);
}
