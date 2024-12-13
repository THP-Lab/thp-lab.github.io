---
displayed_sidebar: intuitionSidebar
---

# 🧠 Intuition

Local, reliable, fast and private Audio and IoT gate.

## 🌟 Introduction

Intuition is a project focused on creating a secure and efficient gateway for Audio and IoT devices. It prioritizes local processing, reliability, and user privacy.

## ⚡ Features

### 🔑 01 Decentralized identifiers
Introducing unique, persistent, canonical identifiers for all things - not just people.

### 🔄 02 Traversables attestations
Many-to-one attestations that are uniquely structured to make verifiable data eminently more discoverable and usable.

### 🌐 03 Data Neutrality Framework
Open, transparent standards fostering an ecosystem where data and services can interact without barriers or bias, promoting innovation, competition, fairness, and truth.

### 📊 04 Universal Knowledge Graph
An open, permissionless data lake accessible by all, disrupting the status-quo of application-specific silos.

### 💡 05 Information Markets
Rewards for creating and curating useful information interacted with by others, facilitating engagement and enhancing quality.

## 📚 Key terms 

### ⚛️ Atom
Typically referenced as a combination of an identifier, data describing that identifier, an ETH address/wallet associated with that identifier, and the state of Signal with respect to that Identifier.

### 🔗 Triple
A Semantic Triple, defining the relationship between Atoms, in [Subject] [Predicate] [Object] format - akin to that of a sentence.

### 👤 User
An agent in the system that has performed/is capable of performing on-chain transactions.

### 🏛️ Vault
An ERC-4626-esque vault - Tokenized Vault Standard. The method through which users are able to 'signal' their 'conviction' about 'things'

### 🏦 Multi-Vault
Extension of ERC-4626 Tokenized Vault Standard, wherein many Vaults can be managed by a singular contract (instead of needing a new contract for each vault).

### 📈 Stake (AKA 'Attesting')
The process by which a user signals their conviction in an Atom or Triple. "Staking" involves depositing tokens into a [Triple]'s [Vault]. "Signaling" of a "thing" may be arbitrarily observed as the amount of stake an entity is presently staking on that thing

### 📉 Counter-Stake
Staking on the Negative Vault of a [Triple]. All Triples have two [Vaults] - one for the "affirmative" of the Triple's statement, and one for the "negative" / "inverse". Counter-Staking involves staking on the "negative" / "inverse" Vault of a Triple.

Example: the Triple [Billy] [is] [Trustworthy] has 2 vaults; if a user wishes to signal that this Triple is false, they would Counter-Stake on the [Triple], by Staking on the Negative Vault of the [Triple].

### 📊 Atom Shares
Atom Shares denote the Signal a user is presently expressing about an Atom, and grants users a proportional share of all Atom Fees paid to the [Atom]. Atom Shares are shares of the Atom's [Vault].

### 📈 Triple Shares
Triple Shares denote the Signal a user is presently expressing about a Triple, and grants users a proportional share of all Triple Fees paid to the [Triple]. Triple Shares are shares of the Triple's [Vault].

### 🌐 Protocol Shares
Protocol Shares grant users a proportional share of all Protocol Fees paid to the Protocol. Protocol Shares are shares of the Protocol's [Vault].

### 💰 Fee Rewards
The proportion of the fee that is paid to Shareholders of the respective object.

### 🆔 Identity
Decentralized identifiers for all people, places, and things - from words to products to arbitrary concepts.

### ✍️ Claim
Statements, composed of Identities, in RDF/Semantic Triple format.

### 📊 Stake
The weighted state of each Claim in the knowledge graph, representing 'who is attesting to what'.

## 🔧 Core Concepts 

### 📝 Smart Contracts
Intuition's architecture provides a flexible and secure framework for managing and upgrading smart contracts, with a particular focus on the ability to scale and govern changes in a controlled manner. The use of multi-signature authentication is core to Intuition's smart contract architecture to avoid single points of failure or abuse of power in the decentralized system.

There are two main contracts which contain the logic that is executed when the proxy contracts delegate calls to them. These contracts can be upgraded, but changes must pass through a time lock controller.

### 🏦 EthMultiVault
The primary contract in this framework, referred to as the EthMultiVault contract, blends and advances the ERC-4626 and ERC-1155 standards. This contract is a pivotal element of the Intuition protocol, facilitating a wide range of functionalities and providing a robust foundation for the decentralized knowledge graph.

Attributes of the EthMultiVault include:

- Contract uses a TransparentUpgradeableProxy.
- This setup allows the EthMultiVault to be upgraded by interacting with a ProxyAdmin, which serves as an intermediary to facilitate upgrades. This separation of concerns allows for a more secure upgrade process, as the upgrade action is isolated from the proxy that interacts with the end users.
- Has the capability to deploy new BeaconProxy contracts. When deployed, these BeaconProxy contracts follow the beacon proxy pattern by referencing the AtomWallet implementation through the UpgradeableBeacon. This allows for a scalable deployment of new proxy instances without the need to redeploy the AtomWallet logic.
- The multisig admin also controls key contract parameters (such as the admin's address and various fees that are present in the protocol, etc.) of the EthMultiVault. These parameters can be adjusted, but changes must pass through the timelock process present in the EthMultiVault implementation contract, which introduces a delay between when an action is proposed and when it can be executed, giving stakeholders time to react to proposed changes if they wish to do so.

### 👛 AtomWallet
Aside from EthMultiVault, the AtomWallet contract is a foundational element of the Intuition protocol, acting as an abstract account (wallet) linked to a specific atom. It leverages account abstraction standard (ERC-4337) to enable advanced transaction execution and management capabilities for atom-associated operations within the blockchain environment.

Attributes of the AtomWallet include:

Linked to an UpgradeableBeacon. This beacon contract holds the address of the current AtomWallet implementation and can be upgraded by the multisig admin.
Proxy contracts, known as BeaconProxy, use the beacon to reference the implementation, allowing multiple instances to be automatically updated when the beacon's implementation address changes.

## 🚀 Getting Started

Documentation coming soon...
