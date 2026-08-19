import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Make CozyBot send a message')
        .addStringOption(option =>
            option
                .setName('message')
                .setDescription('What CozyBot should say')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {
        const message = interaction.options.getString('message');

        await interaction.channel.send(message);
        await interaction.reply({
            content: '✅ Message sent!',
            ephemeral: true
        });
    },
};
