const commando = require('discord.js-commando');

class clearQueue extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'clearqueue',
            group: 'music',
            memberName: 'clearqueue',
            description: '!clearqueue will clear the song queue"'
        });
    }
    
}
module.exports = clearQueue;