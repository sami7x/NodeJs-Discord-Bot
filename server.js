// importing the modules
const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if(message.content.startsWith("create"))
  {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short ID for" +url,
    });
  }
  message.reply({
    content: "Hello from Bot",
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Created!!!");
  });

client.login(process.env.TOKEN);
