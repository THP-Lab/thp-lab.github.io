---
sidebar_position: 1
displayed_sidebar: discordBotSidebar
---

# Commands Overview

Application commands provide users a native way to invoke an app in Discord. They often map to an app's core features or functionality.

When an app creates a command it can choose the command's type, which determines where it appears in the Discord client and the metadata the app will receive when the command is invoked.

One of Discord commands that we use in this bot is **Slash command** : it is the most common type of command and are accessed by typing `/` in the chat input, or by opening the command picker.

![Discord commands](/img/points_bot_discord/discord_commands.png)

<small>Here you can find more details on [Discord commands](https://discord.com/developers/docs/interactions/overview)</small>

## Table of Contents
1. `/balance` Command
2. `/generate` Command
3. `/leaderboard` Command
4. `/send` Command
5. `/help` Command
6. `/public_leaderboard` Command

## 1. `/balance` Command

The `/balance` command allows a user to check their own point balance or the balance of another user. If no user is specified, the command returns the balance of the user who executed the command. The bot uses Prisma to interact with the database and Discord.js to define the command.

## 2. `/generate` Command

The `/generate` command allows an administrator or delegate to generate points and send them to another user in a specific domain. The command verifies the existence of users and the domain, updates relevant information, creates a transaction, and logs the details in a specific channel. A confirmation of the transaction is sent to the user along with an update of their point balance.

## 3. `/leaderboard` Command

The `/leaderboard` command displays the top 10 contributors of a Discord server based on their point balance. This command is visible only to the user who executed it, does not show avatars but tags users. It uses Prisma to retrieve the top 10 users and displays the results in a Discord embed.

## 4. `/send` Command

The `/send` command allows a user to transfer a specified number of points to another user on the Discord server. It validates users and domains, checks the sender's balance, updates the balances, logs the transaction, and provides feedback to the user through embeds.

## 5. `/help` Command

The `/help` command displays detailed assistance for using the various commands of the Discord bot. It also provides a link to the project's GitHub repository for more information or contributions. The help message is sent as an ephemeral response, visible only to the user who issued the command.

## 6. `/public_leaderboard` Command

The `/public_leaderboard` command displays the top 10 contributors of a Discord server based on their point balance. This command is visible to everyone, shows avatars but does not tag users. It uses Prisma to retrieve the top 10 users and displays the results in a series of Discord embeds.

## Summary

These commands provide a comprehensive set of interactions for managing and viewing point balances within a Discord server. They leverage Prisma for database interactions and Discord.js for command definitions and responses. Each command is designed to provide clear feedback to the user and ensure accurate and secure transactions.