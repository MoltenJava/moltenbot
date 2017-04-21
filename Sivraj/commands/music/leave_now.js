const commando = require('discord.js-commando');

class leaveChat extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: '!leave will clear the queue and will remove me from the voice chat"'
        });
    }
    
}
module.exports = leaveChat;