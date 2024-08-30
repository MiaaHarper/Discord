const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log('Le bot est prêt.');
    client.guilds.cache.forEach(guild => {
        console.log(`Bot connecté sur le serveur : ${guild.name} (ID: ${guild.id})`);
        console.log(`Nombre de membres : ${guild.memberCount}`);
    });
});

client.on('guildMemberAdd', member => {
    console.log(member.guild.memberCount);
});

client.on('guildMemberRemove', member => {
    console.log(member.guild.memberCount);
});

client.login(token);


