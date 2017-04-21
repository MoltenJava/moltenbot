const commando = require('discord.js-commando');

class pauseMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: '!pause will pause whatever music is playing!"'
        });
    }
    
}
module.exports = pauseMusic;