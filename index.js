const express = require("express");
const app = express();
const http = require("http");
app.get("/", (req, res) => {
	res.sendStatus(200);
});
app.listen(process.env.PORT);

const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
	token: "TOKEN",
	prefix: "$getServerVar[prefix]",
	intents: "all",
	mobile: false,
	fetchInvites: false
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './commands/');

//Events

bot.onLeave();
bot.onJoin();
bot.onMessage();
bot.onUserUpdate();
bot.onChannelDelete();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onMessageUpdate();
bot.onMessageDelete();


//Ready Event

bot.readyCommand({
	channel: "",
	code: `
  $log[All systems online!]
  `
})

//Commands

bot.command({
	name: "refuse",
	code: `
$dm[$message[2]]

$color[1;$random[0;9999]]

$description[1;

\`$username[$message[1]]#$discriminator[$message[1]]\` Your bot has been rejected! Moderator <@$authorID>

]

$onlyForServers[$getServerVar[server_id];]

$suppressErrors[]

$onlyIf[$message[1]!=;]

`
})

bot.command({
	name: "approve",
	code: `
  

$dm[$message[2]]

$color[1;$random[0;9999]]

$description[1;

\`$username[$message[1]]#$discriminator[$message[1]]\` Your bot has been approved! Moderator <@$authorID>]

$onlyForServers[$getServerVar[server_id];]

$suppressErrors[]
$onlyIf[$message[1]!=;]
`
})

bot.command({
	name: "leaderboard",
	code: `
  $title[1;**Leaderboard**]
  $description[1;
$userLeaderboard[vote;asc]
]`
})

bot.command({
	name: "add-bot",
	aliases: "bot-add",
	code: `
\`\`\`
$message[1] $authorID
\`\`\`

$deletecommand

$onlyForChannels[$getServerVar[bot_add_channel];You cant add bot in this channel go to here <#$getServerVar[bot_add_channel]> ]

$useChannel[$getServerVar[bot_log_channel]]

$color[1;$random[0;99999]]

$title[1;New bot added]

$description[1;
**Bot ID**:
\`$message[1]\`
**Prefix**:
\`$message[2]\`
**Bot Nick**:
\`$username[$message[1]]#$discriminator[$message[1]]\`
**Owner Nick**:
\`$username#$discriminator[$authorID]\`
**Owner İD**:
\`$authorID\`
 **| [0 perm invite](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&response_type=code&permissions=0&disable_guild_select=true&guild_id=$getServerVar[server_id]) |**]

$onlyForServers[$getServerVar[server_id];This command only work on my server!]

$addTimestamp[1]

$onlyIf[$message[2]!=;\`\`\`
Error! $getServerVar[prefix]add-bot <BotId> <Prefix>
                 ^^^^^^  ^^^^^^
Mising arguments!
\`\`\`]
$suppressErrors[Error!]
`
})

//Status

bot.status({
	text: "$getServerVar[prefix]vote @Bot", 
	type: "PLAYING", 
	status: "online", 
	time: 12
});
bot.status({
	text: "vsldev.tk/github", 
	type: "PLAYING",
	status: "online", 
	time: 12
});
bot.status({
	text: "vsldev.tk", 
	type: "PLAYING", 
	status: "online",
	time: 12
});


//Variables

bot.variables({
	prefix: "!",
	vote: "0",
	server_id: "YOUR SERVERS ID",
	bot_add_channel: "CHANNEL ID",
	bot_log_channel: "CHANNEL ID",
	developer_role: "DEVELOPER ROLE ID",
	bot_role: "BOT ROLE ID",
	bot_team_role: "BOT TEAM ROLE ID"
})
