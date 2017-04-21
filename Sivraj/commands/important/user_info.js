const commando = require('discord.js-commando');
const { RichEmbed } = require("discord.js")
const embed = new RichEmbed();

module.exports = class userInfo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'important',
            memberName: 'userinfo',
            description: '!userinfo will give you the users info'
        });
    }
    async run(message) {

embed.setAuthor(message.author.username, message.author.avatarURL)
embed.setColor("#66ff33")
embed.addField("USER DETAILS", "Details about " + message.author.username + "'s User Information")
embed.addField("Joined Discord on ", message.author.createdAt)
embed.addField("Alias: ", message.author.username)
embed.addField("Game: ", message.member.presence.game.name)
embed.addField("MEMBER DETAILS", "Details about " + message.author.username + "'s Guild Information")
embed.addField("\nJoined " + message.guild.name + " at", message.guild.joinedAt)
embed.addField("Nicknames: ", message.member.nickname)
embed.setFooter("Requested by " + message.author.tag);



message.embed(embed)
    }
}