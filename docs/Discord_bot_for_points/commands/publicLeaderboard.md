# Display top 10 members Leaderboard
`public_leaderboard` command

The `public_leaderboard` command displays the top 10 contributors of a Discord server based on their point balance.

***What is the difference from the `leaderboard` command?***

- `public_leaderboard` is visible to everyone, shows avatars but does not tag users.
- `leaderboard` is visible only to the user who executed the command, does not show avatars but tags users.

## Description

This command uses Prisma to interact with a database and retrieve the top 10 users with the highest point balance. The results are displayed in a series of Discord embeds with information about each user. A footer button provides a link to view more details on the web.

## Usage

```ts
/public_leaderboard
```

## Features

![Points Bot in Discord public Leaderboard](/img/points_bot_discord/bot_point_publicleaderboard.png)

- Displays the top 10 contributors with their point balance.
- Sorts users by descending point balance, breaking ties by Discord username.
- Displays a message if no users are found in the database.
- Uses emojis for the top three users.
- Includes a button for viewing more details on the web.

## Example Output
A series of messages with Discord embeds containing:

- Content: A description of the message content.
- List of Discord embeds:
  - Author Icon: User avatar or a default image.
  - Author: Position - Username - Point Balance with an emoji for the top three users.
- Button: Link to the web dashboard for more details.

## Notes
- Ensure the database is properly configured and users have point balances.
- The command uses interactive components from Discord.js to display the results and the button.
- If no users are found in the database, a message is sent to inform the user.
- In case of an error during contributor retrieval, an error message is sent.