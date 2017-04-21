const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const commando = require('discord.js-commando');


const bot = new commando.Client();

bot.on('ready', () => { console.log('I am ready!'); bot.user.setGame('Molten 1.0 | !help')});
bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('important', 'Important');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
music(bot);
bot.login('MzAzMjE2NDAyOTc2NzM1MjMy.C9U3zg.EdYRR4hHiVp9WBSrDo2oH_119GA');

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err);
});