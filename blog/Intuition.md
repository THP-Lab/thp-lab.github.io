---
slug: Introduction-to-Intuition
title: Introduction to Intuition
authors: [Zealr, Mcdp]
tags: [intuition, thp-lab]
---

# Introduction 🚀

### About us 👨‍💻👩‍💻

We’re a team of 5 developers in training from **The Hacking Project**, a Bootcamp school in France. The team is composed of **Sacha Godel**, **Thibault Lenormand**, **Alexandre Tedesco**, and **Thomas Bobichon**.  
This project is important to us, as it is the final project of our training which will validate our diploma! 🎓  
With us, there’s **Jeremie**, aka **Zet**, who’s advising us, as he is really familiar with Web3 and cryptocurrencies. ✨

We contacted the team working on **Intuition**, who are building a platform where you can create information on the **RDF model**, which you can find [here](https://www.w3.org/RDF/).  
On Intuition, you create an **Atom** in which you can stock any piece of information. For example, I can create an identity for myself and use it to make claims about me. When you link Atoms together by using one as the subject, a predicate, and an object, you get a **Triple**.

A simple example would be:  
_(Elon Musk) – (is CEO of) – (Tesla)_.  
With this, you can create claims and a real network of information. 🌐

**Intuition** uses the **Base Blockchain**, which guarantees that every piece of information is immutable and accessible to everyone, thanks to the history of transactions.

---

# Objectives 🎯

We’ve got two main objectives for this project:

1. **Make Triplets related to each other** 🔗  
   For example: _(Sacha – has completed –(Fullstack (spring- 2024 – session) (of- THP- Bootcamp))_  
   You can see that several Triplets are linked, creating deeper connections and richer information starting from one Atom.

2. **See it happen on a graph** 📊  
   When you have a list of Atoms, you can apply a filter and see your main subject in the middle with its relations around it. This way, you can access a vast network of information starting from a single point.

---

# Delivery 📦

This project is **Open Source** 👐, so anyone is free to contribute. Once completed, we hope anyone can use this platform to create their own data.

One application we’d like to implement is for our school:

- A way to deliver attestations to students validating their skills.
- Other students or collaborators can **validate claims**, giving them even more credibility. 🛠️

---

# Roadmap 🛣️

## Step 1: Experiments and improvements 🔍

- Use a mock list of students managed by a Rails API.
- Push this data to a decentralized graph app to start testing Triplets.

## Step 2: Bulk Atom creation 📑

- Convert the mock data into a CSV file.
- Use Intuition’s **Data Populator** to massively create Atoms of our students.
- Explore possibilities for creating Triplets instead of Atoms using the Data Populator.

## Step 3: Subgraph implementation 🖇️

- Create the **subgraph** and integrate it, allowing data to display in the DApp.

## Step 4: Real data integration 🧑‍🎓

- Integrate real THP student data into Intuition.

---

# Components 🛠️

### 1. Mock Rails API 🛡️

This component will be the basis for initial tests.  
Features:

- **Database seeds** to bootstrap data for a school, its students, and their relations.
- API to show a graph and visualize data.
- CSV file generation for Intuition’s Data Populator.
- Add a **console** to create new Triplets directly for faster testing.

### 2. Data Populator ⚙️

We aim to enhance the **Data Populator** by enabling it to create **Triples**, not just Atoms.

### 3. Visualization Graph (React) 📈

This graph will help visualize **Intuition data**, connected either to the Rails API or Intuition’s SubGraph.

- Experiment by changing the main node to explore complex relationships.
- Support 2D, 3D views, lists, and more.

---

# Assistant 🤖

### User who wants a recommendation:

1. Fill out a text field with details about the recommendation or attestation.
2. Create the attestation and send it to others for validation.

### User who wants to give a recommendation:

1. Validate another user’s request.
2. Deliver the recommendation.

Our backend will involve an **AI assistant** to create meaningful recommendations by finding the best ways to combine Triples. Other students can validate these claims to enhance credibility. 🌟
