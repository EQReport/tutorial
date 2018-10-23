//Require discord.js
const Discord = require('discord.js');
//Get the discord client
const client = new Discord.Client();
//Get the config.json file
const config = require("./config.json");

//Log in as the bot
client.on('ready', () => {
    //Log the login to the console
    console.log(`Logged in as ${client.user.tag}`);
    //Set a game randomly.
    setInterval(function() {
      var game = ["[1]","[2]","[3]"]
      var eeee = game[Math.floor(Math.random()*game.length)]
      client.user.setPresence({ game: { name: eeee, type: 0 } });
    }, 10000);
    //Set status to online
    client.user.setStatus("online");
  });

  //Check for messages
  client.on('message', msg => {
    //Return if the author is the bot
    if (msg.author == client.user) return;
    //Convert messages to LowerCase
    var msg_content = msg.content.toLowerCase();
    //Multiply a random number between 0 and 1 by 1200 then add 1000
    var delay = (Math.floor(Math.random()*1200+1000))
    //Take a message and slice off the first term ("say hi" --> "hi")
    var arg = msg_content.split(" ").slice(1).join(" ")

    //Test for if a message's content to lower case is "b_ping"
    if (msg_content == 'b_ping') {
        //Show the bot typing
        msg.channel.startTyping()
        //Send the message after a random period of time
        setTimeout(function(){msg.reply("I'm online!")}, delay)
        //Stop showing the bot typing
        msg.channel.stopTyping()
    }
  });

  //Login with this token
  //NEVER EVER EVER PUT YOUR TOKEN INSIDE OF THIS FILE, ESPECIALLY IF YOU HOST IT SOMEWHERE PUBLIC.
  client.login(config.token);
