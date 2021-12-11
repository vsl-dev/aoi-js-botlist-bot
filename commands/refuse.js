module.exports = ({
  name: "refuse",
  code:`
  <@$message[2]>

$deletecommand

$color[1;FF0000]

$description[1; <@$message[2]>'s bot named \`$username[$message[1]]\` has been rejected!
Reason: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[3];;Reason not specified;1];1;Bot does not have enough servers and user count!;1];2;Commands not working!;1 ];3;Bot is spamming and advertising!;1];4;Bot cannot be added to server!;1];5;Bot is already on server!;1];6;Bot is not active!;1]\`
Rejecting authority - <@$authorID>]

$useChannel[$getServerVar[bot_log_channel]]

$onlyIf[$message[2]!=;\`\`\`
Error! $getServerVar[prefix]refuse <bot id> <user id> [reason code]
                ^^^^^^^^ ^^^^^^^^^
Mising arguments! 
\`\`\`]

$onlyForRoles[$getServerVar[bot_team_role];You do not have sufficient privileges to use this command!]

$onlyForServers[$getServerVar[server_id];This command only for my server!]
`
  })