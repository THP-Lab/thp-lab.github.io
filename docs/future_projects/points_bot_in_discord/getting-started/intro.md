---
sidebar_position: 1
---

# Introduction

Let's discover **Points Bot in Discord in less than 10 minutes**.

![Points Bot in Discord](/img/points_bot_discord/discordBotPoint_500x500.png)

## Welcome to Points Bot in Discord

This is the documentation for PBotD, an open-source bot that enables you to transfer points on your own terms. Select your contributor and send them points that they merit for their contribution to the community.

And on our website, you will be able to see all movements and then distribute points to members.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [Typescript](https://www.typescriptlang.org/download/) 
- [Discord](https://discord.com/download) 

## What can the bot do ?

![Points Bot in Discord exemple](/img/points_bot_discord/discord_bot_points_500x500.png)

### 1. Generate and send points by admin 🪙
  Admin can generate points and send them to members that contribute the most to the community.

### 2. Send points between members 🪙
  Members can send **their own points** to others to thank them for their helps.

### 3. Display balance 🧮
  Members can display **their own balance of points**.

### 4. Display top 10 members Leaderboard for admin and public 📈📊
  Admin can display **in private** a top 10 members leaderboard with members details.
  Member can display **in private** a top 10 members leaderboard without members details.

### 5. Store points in a server 💾
  Members points are saved in a server.

### 6. Store all movement in a Discord logs room 
  Every transaction will be saved in you Discord server logs room.


## Where is it installed ? 💿

Following [Discord documentations](https://discord.com/developers/docs/quick-start/overview-of-apps#where-are-apps-installed), Discord apps can be installed in two different contexts:

1. Apps installed to a server (called a guild throughout the API) by a user with the Manage Server (MANAGE_GUILD) permission. Apps installed to a server can only be used within that server and DMs with the app's bot user, and are visible to all server members.
2. Apps installed to a user account. Apps installed to a user are visible only to that user, across all of their servers, DMs, and Group DMs by default.

The installation contexts that an app supports can be limited by the developer when setting up the app. Details about installation contexts are in the Application resource documentation.