const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder();

module.exports = {
    name: 'help',
    aliases: [],
    description: 'Menampilkan List Command Bot ini',
    run: async (client, message, args) => {
        
        const color = await message.guild?.members.fetch(message.client.user.id).then(color => color.displayHexColor) || '#000000';
        embed.setColor(color);
                embed.setTitle('List Command Bot Ini');
                embed.setDescription(`help : Menunjukkan List Command dari BOT ini \n ip : Menunjukkan IP Server SA:MP yang telah dikonfigurasi \n server : Menunjukkan informasi terkait Server SA:MP terkait \n players : Menunjukkan List Pemain yang sedang online di server \n changelog : Menampilkan Update terbaru dari bot ini`);
                return message.channel.send({ embeds: [embed] });;

        return;
    }
}