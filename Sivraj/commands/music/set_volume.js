const commando = require('discord.js-commando');

class setVolume extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'volume',
            group: 'music',
            memberName: 'volume',
            description: '!volume [1-200]  will change the volume of the music playing"'
        });
    }
    
}
module.exports = setVolume;