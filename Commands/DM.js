const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user) return message.channel.send("Er is geen gebruiker opgegeven/de opgegeven gebruiker is onvindbaar. Gebruik: '!dm <persoon> <bericht>'.");
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send("Je moet een reden opgeven. Gebruik: '!dm <persoon> <bericht>'.");

  user.send("Deze DM is afkomstig van een Moderator. Reageren op dit bericht heeft geen zin! **Bericht:**\n" + reason);
  message.channel.send("DM verzonden.")
  message.delete();
}

module.exports.help = {name: "dm"}
