---
slug: Introduction-to-Intuition
title: Introduction to Intuition
authors: [Zealr, Mcdp]
tags: [intuition, thp-lab]
---

# Introduction

## About us

We’re a team of 5 developers in training from The Hacking Project, a Bootcamp school in France. The team is composed of:

- **Sacha Godel**
- **Thibault Lenormand**
- **Alexandre Tedesco**
- **Thomas Bobichon**

This project is important to us, as it is the final project of our training which will validate our diploma!

With us there’s **Jeremie**, aka Zet, who’s advising us, as he is really familiar with Web3 and cryptocurrencies.

We contacted the team working on Intuition, who are working on a platform where you can create information on the RDF model, which you can find [here](https://www.w3.org/RDF/).

On Intuition, you create an **Atom** in which you can stock any piece of information. For example, I can create an identity for myself, and use it to make claims about me.

When you link Atoms together, by using one as the subject, a predicate, and an object, you get a **Triple**. An easy example to show this would be:  
_(Elon Musk) – (is CEO of) – (Tesla)_.

With this, you can create claims and build a real network of information.

Intuition is using the Base Blockchain, which guarantees that every piece of information is immutable and accessible to everyone thanks to the history of transactions.

---

# Objectives

We’ve got two objectives in this project:

1. **Make Triplets related to each other**  
   Example:  
   _(Sacha – has completed – (Fullstack (spring-2024 – session) (of – THP – Bootcamp)))_  
   Several Triplets are put into one, linking Sacha to all of these statements, allowing for a deeper level of connections and information, starting from one Atom.

2. **See it happen on a graph**  
   When you’ve got a list of Atoms, you can apply filters and see your main subject in the middle with its relations around it. This allows quick access to a huge list of information starting from a precise point.

---

# Delivery

We’re making this project **Open Source**, so anyone is free to help and/or contribute to this project.

Once done, we hope anyone who wants to create their own data will be able to use it.

One feature we’d like to implement is for our school: a way to deliver attestations to students to validate skills or abilities on demand. These attestations can be validated by other students and collaborators, giving them more credibility.

---

# Roadmap

## Steps to achieve our objectives

### Step 1: Experiments and improvements of existing tools to concatenate Triples

- Use a mock list of students managed by a Rails API.
- Push this data to a decentralized graph app to start testing Triplets.

### Step 2: Mass creation of Atoms

- Convert the mock data into a CSV file.
- Use Intuition’s Data Populator to massively create Atoms of our students.
- Start using the Smart Contract on the Sepolia Blockchain.
- Explore the possibility of creating Triplets instead of just Atoms with the Data Populator.

### Step 3: Switch to our Smart Contract

- Replace the Sepolia Smart Contract with ours.
- Create the subgraph and make it work, allowing data to be shown in the DApp.

### Step 4: Integrate real data from THP students

- Implement actual THP student data into Intuition.
- Create an assistant for recommendations, powered by AI.

---

# Components

## Mock Rails API

This component will be the basis of our tests at the beginning.

### Features:

- **Database Seeds**: Bootstrap data related to a school, its students, and the relations between them.
- **API for Graphs**: Provide an API to show a graph and visualize the data. The return data will mimic Intuition’s return.
- **CSV Export**: Produce CSV files for use with Intuition’s Data Populator.
- **Console for Triplets**: Allow direct creation of new Triples for faster testing.

---

## Data Populator

We aim to improve the Data Populator by adding the ability to create Triplets, similar to how Atoms are currently created in large numbers.

---

## Visualization Graph (React)

The graph helps visualize Intuition data. We plan to connect it to either our Rails API or Intuition’s SubGraph.

### Goals:

- Explore different visualization modes:
  - 2D view
  - 3D view
  - List view
- Experiment by changing the main node to better understand complex relationships.

---

## Assistant

### Users:

#### 1. User requesting a recommendation

- Fill in a text field with as much context as possible.
- The backend will use AI to generate the best way to organize Triplets for a meaningful recommendation.

#### 2. User validating a recommendation

- Validate another user’s request, adding credibility to the recommendation.

The process is simple: once the first user makes the request, the backend generates a recommendation with AI. Other users can validate it to increase its credibility.

---

# Conclusion

This project is an opportunity to explore Web3 and blockchain-related technologies.

We aim to enable students and professionals to create rich, reliable data networks.

Thank you for your interest! 🚀
