const commando = require('discord.js-commando');
const { RichEmbed } = require("discord.js")
const embed = new RichEmbed();
const bot = new commando.Client();

module.exports = class botStats extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stats',
            group: 'important',
            memberName: 'stats',
            description: '!stats will tell you the bots stats'
        });
    }
    async run(message, args) { 


embed.setColor("#66ff33")
embed.addField("Molten's Stats", "This is a summary of Molten's statistics")
embed.addField("Total Users: ", this.client.users.size)
embed.addField("Total Guilds: ", this.client.guilds.size)
embed.addField("Total Channels: ", this.client.channels.size)
embed.addField("Voice Connections(Server-Wide): ", this.client.voiceConnections.size)
embed.setFooter("Requested by: " + message.author.tag);



message.channel.sendEmbed(embed);
    }
}