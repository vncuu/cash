const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const prefix = ','; // Set the prefix

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    // Ignore messages from bots or without the prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'lock') {
        if (message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
            const channel = message.channel;
            await channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: false });
            await message.channel.send(`${channel} has been locked.`);
        } else {
            await message.channel.send('You do not have permission to lock channels.');
        }
    }

    if (command === 'unlock') {
        if (message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
            const channel = message.channel;
            await channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: true });
            await message.channel.send(`${channel} has been unlocked.`);
        } else {
            await message.channel.send('You do not have permission to unlock channels.');
        }
    }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');
