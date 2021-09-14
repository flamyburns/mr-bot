const Discord = require("discord.js");
const config = require("./config");

const prefix = (config.prefix)

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log("online 💚 ")
});

client.on('messageCreate', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
     const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }
});

client.login(config.token)