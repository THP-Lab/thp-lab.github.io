# Display top 10 members Leaderboard (admin only)
`/leaderboard` command

The `leaderboard` command displays the top 10 contributors of a Discord server based on their point balance.

***What is the difference from the `public_leaderboard` command?***

- `public_leaderboard` is visible to everyone, shows avatars but does not tag users.
- `leaderboard` is visible only to the user who executed the command, does not show avatars but tags users.

## Description

This command uses Prisma to interact with a database and retrieve the top 10 users with the highest point balance. The results are displayed in a Discord embed with information about each user. A footer button provides a link to view more details on the web.

## Usage

```ts
/leaderboard
```

## Features

![Points Bot in Discord Leaderboard](/img/points_bot_discord/bot_point_leaderboard.png)

- Displays the top 10 contributors with their point balance.
- Sorts users by descending point balance, breaking ties by Discord username.
- Displays a message if no users are found in the database.
- Uses emojis for the top three users.
- Includes a button for viewing more details on the web.

## Example Output
A Discord embed with the following information:

- Title: Leaderboard
- Description: Top 10 contributors:
- User List: Includes their position, Discord mention, and point balance.
- Button: Link to the web dashboard for more details.

## Notes
- Ensure the database is properly configured and users have point balances.
- The command uses interactive components from Discord.js to display the results and the button.