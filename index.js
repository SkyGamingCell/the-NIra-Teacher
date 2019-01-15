const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("+help");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split("");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}hello`){
  return message.channel.send("Heys");
}

if(cmd === `${prefix}membercount`){
     let sicon = message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Members:")
     .setColor("#75aaff")
     .addField("Member Count", message.guild.memberCount);

return message.channel.send(serverembed);
}

});

bot.login(botconfig.token);
