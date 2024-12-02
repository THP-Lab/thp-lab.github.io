# Help command
  `/help` command

## Description
The `/help` command displays detailed assistance for using the various commands of the Discord bot. It also provides a link to the project's GitHub repository for more information or contributions.

## Structure

```bash
/help
```

## Functionality

1. Display a help embed:

When a user executes the `/help` command, an ephemeral message containing an embed is sent. This embed provides an overview of the available commands.
Button linking to the GitHub repo:

2. Along with the embed, a button named "GitHub" is added. This button redirects to the bot's GitHub repository, allowing users to view the source code or contribute to the development.
Ephemeral response:

3. The help message is sent as an ephemeral response, visible only to the user who issued the command.

## Components

- `ButtonBuilder`:
A button named "GitHub" is added to the message. This button uses the `ButtonStyle.Link` style and points to the bot's [GitHub repository URL](https://github.com/discord-bot-points/Points-Discord).

- `ActionRowBuilder`:
The button is wrapped inside an `ActionRowBuilder` to be included in the response message.

## Response Handling
The command uses the `interaction.reply` method to send a response containing:

The help embed (information about the bot and the available commands).
The GitHub button, allowing access to the project's repository.
Ephemeral response, visible only to the user who executed the command.

## Exemple d'utilisation
```bash
/help
```
Lorsque cette commande est utilisée, l'utilisateur reçoit un message éphémère avec un aperçu des commandes disponibles et un bouton pour consulter le repo Github.