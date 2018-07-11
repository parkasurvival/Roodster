const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let reportkanaal = message.guild.channels.find(`name`, "tips");
  let idea = args.join(" ");
  if(!idea) return message.channel.send("Je moet een tip opgeven! Gebruik: '!idee <idee>'.");

  if(!reportkanaal) {
    message.channel.send("Fout: error 1 (kon kanaal niet vinden).");
  } else {

    let tipEmbedUser = new Discord.RichEmbed()
    .setDescription("Je idee is succesvol aan ons verzonden! Helaas kunnen wij niet op iedereen reageren. Toch alvast bedankt, en misschien wordt jouw idee wel uitgewerkt!")
    .setColor("#00ff77")
    .addField("Ingezonden idee:", idea);

    let tipEmbedModerator = new Discord.RichEmbed()
    .setColor("#00ff77")
    .addField("Gebruiker", message.author)
    .addField("Idee", idea);

      message.delete();
      message.author.send(tipEmbedUser);
      reportkanaal.send(tipEmbedModerator);
    }
  }

module.exports.help = {name: "idee"}
