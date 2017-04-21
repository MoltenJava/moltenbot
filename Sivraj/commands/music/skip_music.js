const commando = require('discord.js-commando');

class skipMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: '!skip will skip the next queued song"'
        });
    }
    
}
module.exports = skipMusic;