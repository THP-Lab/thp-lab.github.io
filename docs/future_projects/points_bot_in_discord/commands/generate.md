# Generate points (admin only)
  `/generate` command

## Description

This command allows a user (administrator or delegate) to generate points and send them to another user in a specific domain. The command checks the existence of users and the domain, updates relevant information (such as avatars), creates a transaction, and logs the details in a specific channel. A confirmation of the transaction is sent to the user along with an update of their point balance.

## Structure 
```ts
/generate user:<@user> points:<integer> domain:<string> description:<string> link:<string> reference:<integer>
```
## Parameters
  - `user` (required): The recipient (`receiver`) of the generated points.

  - `points` (required): The number of points to generate for the specified user.

  - `domain` (required): The domain in which the points are generated. This domain must exist in the database.

  - `description` (optional): An optional description to specify the reasons for generating the points.

  - `link` (optional): An optional link to include, which can be used to provide additional information.

  - `reference` (optional): An optional transaction ID that allows linking the new transaction to an existing one.

## Functionality
1. User Verification: When the command is executed, the system checks if the users (`sender` and `receiver`) already exist in the database. If a user does not exist, they are created with an initial points balance of zero.

2. Avatar Verification: User avatars are checked with each command. If the avatar has changed, the database is updated with the new image.

3. Domain Validation: The command checks if the provided `domain` exists in the database. If it does not exist, the command returns an error with the list of valid domains.

4. Transaction Creation: Once the checks are completed, a new transaction is created. This transaction records the following information: `sender`, recipient, domain, points, description, and link.

5. Balance Update: The recipient's balance is updated based on the generated points.

6. Transaction Logs: A detailed message of the transaction is sent to a configured log channel to keep track of operations.

## Embeds
  1. Confirmation Embed (`generateEmbed`): An embed is generated to inform the user of the successful transaction. This embed contains:
      - The transaction domain.
      - The number of points sent.
      - A description, if provided.
      - A link, if present.

  2. Updated Balance Embed (`updatedBalanceEmbed`): This embed shows the user's old balance and their new balance after the points have been added.

  3. Logs Embed (`logsEmbed`): A similar embed to the confirmation embed is sent to a specific channel to log the operation. It contains all the transaction details to ensure tracking in the history.

## Error Handling
- User Not Found: If the target user is not specified or is invalid, an error message is returned indicating "User not found".

- Invalid Domain: If the provided domain does not exist in the database, an error is returned with the list of valid domains.

- Transaction Creation Error: In case of failure to create the transaction, a generic error message is sent, asking the user to check the logs for more details.