const botReady = require('./botReady');
const botReply = require('./botReply');
const gStats = require('./gStats')

module.exports = client => {
	client.on('ready', () => { botReady(client)
	});
	//message listener
	client.on('message', message => { botReply(message)
	});
	client.on('message', message => { gStats(stats)
	});
 };
