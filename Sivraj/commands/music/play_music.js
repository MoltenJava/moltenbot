const commando = require('discord.js-commando');

class playMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: '!play "url" OR !play "Search terms to find song"'
        });
    }
    
}
module.exports = playMusic;