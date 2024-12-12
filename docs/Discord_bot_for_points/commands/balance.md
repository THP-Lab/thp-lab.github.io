# Display own balance of points
  `/balance` command

## Table of Contents
1. General Overview
2. Command Functionality
3. Using Prisma
4. Creating and Sending an Embed
5. Error Handling

## 1. General Overview

This command allows a user to check the point balance of a Discord user. If no user is specified, the command returns the balance of the user who executed the command. The bot uses [Prisma](https://www.prisma.io/) to interact with a database, and the `SlashCommandBuilder` method from Discord.js to define the command.

## 2. Command Functionality

**Command**

The `/balance` command displays the point balance.
The user option is optional. If it is not specified, the balance of the user who initiated the command will be displayed.

**Command Execution**

The user specified in the user option is retrieved. If no user is specified, the user executing the command is used.
The username is converted to lowercase to standardize database queries.

## 3. Using Prisma

**Query to Find the User**

findUnique searches for a user in the database based on the Discord username. If the user is not found, the command will create a new entry.

**Creating a New User**

If the user does not exist in the database, Prisma creates one with a default balance of 0.

## 4. Creating and Sending an Embed

**Custom Embed**

An Embed is used to display the balance aesthetically. The username and Discord ID are dynamically inserted to personalize the display.
The embed color is set to 4772300 and the embed author is configured with a logo and a link.

**Interaction Response**

The response is sent as an embed and is set as ephemeral, meaning it will only be visible to the user who executed the command.

## 5. Error Handling

In case of an error while retrieving user data or creating a new user, an error is logged and an ephemeral response is sent to the user to inform them that something went wrong.

# Example Usage

A user can type `/balance` to see their own balance.
A user can also type `/balance user:@username` to see the balance of another Discord user.