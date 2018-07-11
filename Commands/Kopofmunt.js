const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  function kopOfMunt() {
      var km = ['Kop', 'Munt'];
      return km[Math.floor(Math.random()*km.length)];
  }
  message.channel.send(`${kopOfMunt()}!`);
}

module.exports.help = {name: "kopofmunt"}
