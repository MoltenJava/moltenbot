const commando = require('discord.js-commando');

class showQueue extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'queue',
            group: 'music',
            memberName: 'queue',
            description: '!queue will show the songs in the queue'
        });
    }
    
}
module.exports = showQueue;