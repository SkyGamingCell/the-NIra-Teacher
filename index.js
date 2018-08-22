const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
bot.user.setActivity("pop")

});

bot.on("message",async message =>{
  if(message.author.bot) return;
 if(message.channel.type === "dm") return;

 let prefix = botconfig.prefix;
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 let args = messageArray.slice(1);

 if(message.content == 'כן'){

  message.channel.sendMessage('לאאאאא ' );
}

if(message.content == 'בוקר טוב'){

 message.channel.sendMessage('בוקר טוב גם לך ' + message.author );
}

if(cmd === `${prefix}report`){



let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("Couldn't find user.");
let reason = args.join(" ").slice(22);

let reportEmbed =  new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#4286f4")
.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
.addField("Channel", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", reason);

//.addField("זמן הדיווח", message.createdAt)

let reportschannel = message.guild.channels.find(`name`,"reports");
if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


message.delete().catch(O_o=>{});
reportschannel.send(reportEmbed)

  return;
}

if(message.content == 'איך?'){

 message.channel.sendMessage('רע מאוד ' + message.author );
}

if(cmd === `${prefix}botinfo`){

let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Bot Information")
.setColor("#4286f4")
.setThumbnail(bicon)
.addField("Bot Name", bot.user.username)
.addField("Created On", bot.user.createdAt)
.addField("Created By", "<@461151799924228108>");

return message.channel.send(botembed);
 }

 if(cmd === `${prefix}serverinfo`){
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#75aaff")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("createdAt", message.guild.createdAt)
      .addField("Join Date", message.member.joinedAt)
      .addField("Member Count", message.guild.memberCount);

      return message.channel.send(serverembed);
    }

if(message.content == 'לא'){

 message.channel.sendMessage('כןןןןן ' );
}

if(cmd === `${prefix}ban`){

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Can't find user!");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!")
if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("That person can't be kicked!");

let banEmbed = new Discord.RichEmbed()
.setDescription("~Ban~")
.setColor("#5443ef")
.addField("Banned User", `${bUser} with ID ${bUser.id}`)
.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Banned In", message.channel)
.addField("Time", message.createdAT)
.addField("Reason", bReason);

let incidentChannel = message.guild.channels.find(`name`, "incidents")
if(!incidentChannel) return message.channel.send("Can't find incidents channel")

message.guild.member(bUser).ban(bReason);
incidentchannel.send(banEmbed);
}

if(cmd === `${prefix}kick`){
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!")
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

let kickEmbed = new Discord.RichEmbed()
.setDescription("~kick~")
.setColor("#42f4e8")
.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Kicked In", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", kReason);

let kickChannel = message.guild.channels.find(`name`, "incidents")
if(!kickChannel) return message.channel.send("Can't find incidents channel")

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed)


  return;
}

if(cmd === `${prefix}ban`){

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Can't find user!");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!")
if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("That person can't be kicked!");

let banEmbed = new Discord.RichEmbed()
.setDescription("~Ban~")
.setColor("#5443ef")
.addField("Banned User", `${bUser} with ID ${bUser.id}`)
.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Banned In", message.channel)
.addField("Time", message.createdAT)
.addField("Reason", bReason);

let incidentChannel = message.guild.channels.find(`name`, "incidents")
if(!incidentChannel) return message.channel.send("Can't find incidents channel")

message.guild.member(bUser).ban(bReason);
incidentchannel.send(banEmbed);
}

});

bot.login(process.env.BOT_TOKEN);
