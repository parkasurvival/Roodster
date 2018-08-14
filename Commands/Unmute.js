const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let reports = JSON.parse(fs.readFileSync("./Reports.json", "utf8"))

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ik heb zo'n flauw gevoel dat jij geen Moderator bent!");
  let botbesturing = message.guild.channels.find(`name`, "botbesturing");
  if(!args[0]) return botbesturing.send("Geef een gebruiker op om te unmuten.")
  let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let muterole = message.guild.roles.find(`name`, "Gemute");
  if(message.channel == botbesturing) {
    if(tounmute.roles.exists(`name`, "Gemute")) {
      if(!tounmute) return message.channel.send("Vul een (geldige) gebruiker in. Is de ingevulde gebruiker de server geleavt?");
      if(tounmute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("De bot is incapabel om deze actie te effectueren. Foutcode 4.");

      await(tounmute.removeRole(muterole.id));
      let unmuteEmbedBotbesturing = new Discord.RichEmbed()
      .setDescription("Een gebruiker is handmatig geunmute.")
      .setColor("#1cd81c")
      .setThumbnail("http://www.mediafire.com/convkey/68eb/i9sqlmdze74aakazg.jpg")
      .addField("Gebruiker", `<@${tounmute.id}>`)
      .addField("Moderator", `<@${message.author.id}>`);

      let unmuteEmbedUser = new Discord.RichEmbed()
      .setDescription("Je bent geunmute.")
      .setColor("#1cd81c")
      .setThumbnail("http://www.mediafire.com/convkey/68eb/i9sqlmdze74aakazg.jpg")
      .addField("Gebruiker", `Jij`)
      .addField("Tijd", "N/A (unmute is handmatig verricht)");

      tounmute.send(unmuteEmbedUser);
      botbesturing.send(unmuteEmbedBotbesturing);
    } else {
      message.channel.send(`De bot is incapabel om deze actie te effectueren! Foutcode 5 (<@${tounmute.id}> is niet gemute).`)
    }
  } else {
    message.delete();
    message.author.send("Alleen in botbesturing, jij dikkie!");
  }
}

module.exports.help = {name: "unmute"}
