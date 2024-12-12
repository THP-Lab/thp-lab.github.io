---
sidebar_position: 2
title: Local Development
---

# Local Development

## Prerequisites

- Node.js
- typescript
- Yarn or npm
- Git
- Discord server

## Hardware Requirements

PBotD runs efficiently on minimal hardware. The most resource-intensive process is during the build phase, but once deployed, it operates with low overhead.

## Supported Operating Systems

PBotD is compatible with a wide range of operating systems, as it only requires TypeScript execution. It works well on Windows, Mac, Linux, and BSD. For production environments, we recommend using Linux for optimal performance. Any operating system that supports Node.js should be able to run PBotD effectively.
We use **Prisma** for database maintenance.

:::tip
To ensure optimal performance and compatibility, we highly recommend using Node.js version 18 for your development environment. This version provides the best balance of stability, features, and security for this project. Please make sure to update your Node.js installation if necessary.
:::

## Setup

1. Clone the repository:

  ```bash
  git clone https://github.com/discord-bot-points/Points-Discord.git
  ````

2. Navigate to the project directory:

  ```bash
  cd Points-Discord
  ````

3. Install dependencies:

  ```bash
  npm install
  ````

4. Rename dotenv (.env) file:

   Rename the file .env.exemple to .env file that includes the variables, replacing the example values with your own variables. The base seed handles the creation of 2 users and 3 domains.
   
   **If you want to create more**: 
   1. Add new variables in the .env file.
   2. Copy the existing variables from the .env file and paste the new variables into the **config.ts** file.

5. Create migrations:

  ```bash
  npx prisma migrate dev
  ````
  or
  ```bash
  pnpm dlx prisma migrate dev
  ````

6. Launch the seed for testing (optional):

  ```bash
  pnpm run seed
  ````
7. Launch the server:

  ```bash
  npm run dev
  ````
  or
  ```bash
  pnpm run dev
  ````