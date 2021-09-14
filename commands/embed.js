const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'embed msg',
    async execute(Message, args, Discord, client) {
        const data = await (`${args.join(" ")}`)
        const newEmbed = new MessageEmbed()
        .setDescription(`**${data}**`)
        .setColor('GREY')

        Message.channel.send({ embeds: [newEmbed] });     
    }
}