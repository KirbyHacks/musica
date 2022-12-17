module.exports = {
TOKEN: "MTA1MzAwNDcwNjIxNTExMjc4Nw.GDLT5P.erKa5EK-s9EMX6X53u8qq8i-X9RKgjgeWGXwJU",
ownerID: "1049302344610873405", //write your discord user id.
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1053004706215112787&permissions=8&scope=bot", //write your discord bot invite.
supportServer: "https://discord.gg/cKX36YhqrY", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://kirbywtf:BKNYwBMb8SApgPRp@cluster0.zyzoo.mongodb.net/Messi?retryWrites=true&w=majority", //write your mongodb url.
status: '',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it
embedColor: "ffa954", //hex color code
errorLog: "1053089079832625162", //write your discord error log channel id.
  
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },
  
   shardManager:{
     shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
   },

    playlistSettings:{
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
