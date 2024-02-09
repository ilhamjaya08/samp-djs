const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder();

module.exports = {
    name: 'changelog',
    aliases: [],
    description: 'Menampilkan list update fitur Bot',
    run: async (client, message, args) => {
        
        const color = await message.guild?.members.fetch(message.client.user.id).then(color => color.displayHexColor) || '#000000';
        embed.setColor(color);
                embed.setTitle('Changelog');
                embed.setDescription(`Fitur ini sedang dikembangkan`);
                return message.channel.send({ embeds: [embed] });;

        return;
    }
}