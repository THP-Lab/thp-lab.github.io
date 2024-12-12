# Send points to other
`/send` command

## Description
The `/send` command allows a user to transfer a specified number of points to another user on the Discord server. It also logs the transaction in a dedicated log channel.

## Structure

```ts
/send user:<@user> points:<integer> domain:<string> transaction:<Personelle/THP> description:<string> [link:<string>]
```

## Parameters
- `user` (required): Mentions the user who will receive the points.
- `points` (required): The number of points to send to the specified user.
- `domain` (required): The domain associated with the transaction. If the domain does not exist, the command returns an error with a list of valid domains.
- `transaction` (required): The type of transaction:
  -  `Personal`: For personal use (non-reimbursable).
  -  `THP`: For educational purposes (reimbursable).
- `description` (required): A description of the transaction.
- `link` (optional): An optional link related to the transaction, such as referencing a specific message in a Discord channel.

## Functionality
1. User Validation:

- Checks if both the sender (`sender`) and receiver (`receiver`) exist in the Prisma database. If either does not exist, they are created with an initial balance of `0` points.
- Updates the user's Discord avatar in the database if it differs from the one stored.

2. Domain Validation:

- Ensures the specified domain exists in the database. If not, an error is returned with a list of valid domains (though the list is sourced directly from Prisma, making this error unlikely).

3. Balance Verification:

- Compares the `sender`'s point balance to the points being transferred. If insufficient, an error message is returned.

4. Balance Update:

- If all checks pass, the balances are updated:
  - The `sender`’s balance is decremented.
  - The `receiver`’s balance is incremented.

5. Transaction Logging:

- Creates a new transaction in the Prisma database with the following details:
    - `senderId`, `receiverId`, `points`, `description`, `link` (if provided), `domainId`, and transaction type `usage`.

6. Result Display:

- Transaction Embed: A summary of the transaction is displayed in the channel where the command was issued.
- Balance Update Embed (ephemeral): Sent only to the user executing the command, showing updated balances for both the sender and receiver.
- Logs Embed: A copy of the transaction embed is sent to a dedicated log channel.

## Embeds
1. `tradeEmbed`:

- Visible to all users in the channel where the command is executed.
- Includes details about the `sender`, `receiver`, points transferred, selected domain, transaction description, and any associated link.

2. `updatedBalanceEmbed` (ephemeral):

- Visible only to the user executing the command.
- Displays updated balances for both the sender and receiver.

3. `logsEmbed`:

- A duplicate of the `tradeEmbed`, sent to a specific log channel.

## Error Handling
- **User or Domain Not Found**: If the target user or domain is not found in the database, an error message is sent as an ephemeral response.
- **Insufficient Balance**: If the sender lacks sufficient points, an error message is displayed.
- **Database Issues**: Any database-related errors during record creation or updates result in an error message to the user and a logged error in the console.

## Example Usage
```ts
/send user:@User points:50 domain:Development transaction:Personelle description:"Code Review" link:"https://github.com/owner/repo"
```
This example sends 50 points to the mentioned user under the "Development" domain, with the description "Code Review" and a link to a GitHub repository. The transaction is marked as personal.