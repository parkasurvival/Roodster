const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;

  let botEmbed = new Discord.RichEmbed()
  .setDescription("Wat is deze bot wollah")
  .setColor("#ef8e07")
  .setThumbnail(boticon)
  .addField("Naam", bot.user.username)
  .addField("Geboren op", "2/6/2018 om 13:58")
  .addField("Gewicht bij geboorte", "217 kilobyte")
  .addField("Papa", "Brickconomy (Wouter)")
  .addField("Leeftijd", "v1.2");

  return message.channel.send(botEmbed);
}

module.exports.help = {name: "botinfo"}
