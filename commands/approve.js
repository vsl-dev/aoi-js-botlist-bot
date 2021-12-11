module.exports = ({
  name: "approve",
  code:`
  <@$message[2]> <@$message[1]>


$deletecommand

$giveRole[$guildID;$message[2];$getServerVar[developer_role]]

$giveRole[$guildID;$message[1];$getServerVar[bot_role]]

$color[1;00FF6A]

$description[1; <@$message[2]> bot named <@$message[1]> has been approved!
Moderator - <@$authorID>]

$useChannel[$getServerVar[bot_log_channel]]

$onlyIf[$message[2]!=;\`\`\`
Error! $getServerVar[prefix]approve <bot id> <user id>
                 ^^^^^^^^ ^^^^^^^^^
Mising arguments! 
\`\`\`]

$onlyForRoles[$getServerVar[bot_team_role];You do not have sufficient privileges to use this command!]

$onlyForServers[$getServerVar[server_id];This command only for my server!]
`
})