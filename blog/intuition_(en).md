---
slug: Introduction-to-Intuition
title: Introduction to Intuition
authors: [Zealr, Mcdp]
tags: [hello, docusaurus]
unlisted: true
---


# Introduction

About us:
We’re a team of 5 developers in training from The Hacking Project, a Bootcamp school in France. The team is composed of Sacha Godel, Thibault Lenormand, Alexandre Tedesco, and Thomas Bobichon.
This project is important to us, as it is the final project of our training which will validate our diploma!
With us there’s Jeremie, aka Zet, who’s advising us, as he is really familiar with Web3 and cryptocurrencies.
We contacted the team working on Intuition, who are working on a platform where you can create information on the RDF model, which you can find [here](https://www.w3.org/RDF/).
On Intuition, you create an Atom in which you can stock any piece of information. For exemple, I can create an identity for myself, and use it to make claims about me. When you link Atoms together, by using one as the subject, a predicate and an object, you get a Triple. An easy example to show this would be (Elon Musk) – (is CEO of) – (Tesla). With this, you can create claims and create a real network of information.
Intuition is using the Base Blockchain, which guarantees that every piece of information is immutable, and accessible to everyone thanks to the history of transactions.
The project

<!-- truncate -->

# Objectives

We’ve got two objectives in this project.

- The first one is that we make Triplets related to each other, and that you can make several statements into one. One good example is this one. Our dev (Sacha – has completed –(Fullstack (spring- 2024 – session) (of- THP- Bootcamp) ), you can see that several Triplets are put into one, linking Sacha to all of these statements, which would allow for a deeper level of connections, and information, just starting from one Atom.
- The second objective is to be able to see it happen on a graph! When you’ve got a list of Atoms, you can put a filter on and see your main subject in the middle, and the relations around it. This way, you can access quickly to a huge list of information starting from a precise point.
  Delivery
  We’re making this project Open Source, so anyone is free to help and/or contribute to this project. When this is done, we’re hoping that anyone who wants to use this to create their own data will be able to do so.
  One thing we want to implement would be a use for our school, and a way to deliver verifiable credentials to the students to validate skills or abilities on demand, so the other students and people they worked with can validate the claims, giving them more validation.
  Roadmap

The project has several steps to achieve our objectives.

# Step 1:
Our first time is to use a mock list of students, that we’ll give to a Rails API to manage it, and push these with a decentralized graph App. This is where we’ll start thinking of our triplets and how to put them together.
# Step 2:
We keep our mock data and change it into a CSV file, and then we’ll use Intuition’s Data Populator to “massively” create Atoms of our students. We’ll begin to use the Smart Contract, and use the Sepolia Blockchain to test everything.
We’ll look into the possibility to create Triplets instead of simply Atoms with the Data Populator.
# Step 3:
Now we can switch the Sepolia Smart contract with ours
We’ll create the subgraph and make it work, effectively making it able to show data in the Dapp.
# Step 4:
We can finally implement actual data from the THP students into Intuition!

# Components
- Mock Rails API:
This component will be the basis of our tests at the beginning. In this API, we’ll use the Faker gem to create a list of students.
With this list, we’ll make a seed of predicates, and finally complete the different Atoms we can include, like courses, different sessions, etc…

- Data Populator

- Visualisation Graph React
