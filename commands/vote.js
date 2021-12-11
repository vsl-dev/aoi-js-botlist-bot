module.exports = ({
  name: "vote",
  code:`
 

$channelSendMessage[$channelID;**Successful**]

$onlyIf[$message!=;**Error! Please try again - \`$getServerVar[prefix]vote (@bot)\` ]

$onlyIf[$isBot[$mentioned[1]]!=false;**Tag a Bot to Show Its Information** ]

$setUserVar[vote;$sum[$getUserVar[vote;$mentioned[1]];1];$mentioned[1]] 

$useChannel[$getServerVar[bot_log_channel]]

$color[1;$random[0;9999]]

$description[1; **User <@$authorID> voted to <@$mentioned[1]> bot! **]

$cooldown[6h;**You Can Vote Every 6 Hours** ]

$onlyIf[$message[2]!=;\`\`\`
Error! \`$getServerVar[prefix]vote @Bot
              ^^^^
Mising arguments! 
\`\`\`]

$onlyForServers[$getServerVar[server_id];This command only for my server!!]
`
  })