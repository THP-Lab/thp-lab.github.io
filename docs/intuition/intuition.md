## Informations 🚀

This project aims to contribute to **Intuition**, a platform for creating and linking information on the **RDF model**.

The team consists of **Sacha Godel**, **Maxime Lodato**, **Thibault Lenormand**, **Alexandre Tedesco**, and **Thomas Bobichon**, they were advised by **Jeremie Olivier (Zet)**

### Key Concepts

Get a deep dive into the Intuition protocol and its core concepts, by listening at this podcast :
<audio controls>

  <source src="/audio/Intuition.wav" type="audio/mp3" />
  Your browser does not support the audio element.
</audio>

#### TL;DR

- **Intuition**: A trust protocol, world’s first open and semantic knowledge graph, decoupling identities, data, and algorithms from the application layer. [Learn more about Intuition](https://tech.docs.intuition.systems/)

- **Atoms**: Basic unit of information in the Intuition protocol.
- **Triples**: Links between Atoms, forming a subject-predicate-object (RDF) relationship.
- **Nested Triples**: Linking Triples to each other to create more complex relationships.
- **RDF model**: A standard for data interchange on the Web.
- **Base Blockchain**: A blockchain used by Intuition for data immutability.

## Our Project: Hacking around Intuition 👨‍💻👩‍💻

- The project involves creating **Atoms**, which are units of information, and linking them using **Triples**.
- A **Triple** consists of a subject, a predicate, and an object, e.g., _(Elon Musk) - (is CEO of) - (Tesla)_.
- **Intuition** uses the **Base Blockchain** for data immutability and accessibility.
- The team focused on **nested Triples** relationships.
  - For example: _(Sacha – has completed –(Fullstack (spring- 2024 – session) (of- THP- Bootcamp))_.
  - This creates deeper connections and carries more semantic information.
- The project also involves creating a **recommendation DApp**.

## Components 🛠

- **1. Mock Rails API 🛡️**
  - Provides database seeds for a school, its students, and their relations.
  - Has an API to show a graph and visualize data.
  - Generates **CSV** files for **Intuition's Data Populator**.
  - Features a console to create new Triples for faster testing.
- **2. Intuition Graph (React) 📈**
  - Visualizes **Intuition data** using either the Rails Mock API or Intuition's SubGraph.
  - Allows experimentation by changing the main node.
  - Supports 2D and 3D views.
- **3. Assistant 🤖**
  - **User seeking recommendation**: Fills a text field with details, creates an attestation, and sends it for validation.
  - **User giving recommendation**: Validates another user's request and delivers the recommendation.
  - Utilizes an **AI assistant** to create meaningful recommendations by combining Triples, with other students validating claims.

## Objectives 🎯

- **Nested Triples Relationships Experimentations**:
  - Make Triples related to each other to create deeper connections.
- **Create a Recommendation DApp**:

  - Allow users to create claims about themselves.
  - Enable users to ask for recommendations based on their interests.
  - Allow users to give recommendations and endorsements.

  - Add a view to the Mock API to quickly add new Triples.
  - Allow the Graph visualization to switch between the Rails API and the Intuition API.
  - Generate a **CSV** file from the mocked data.

### Create a Recommendation DApp

- Develop an easy-to-use DApp for creating claims, asking for recommendations, and making endorsements.

## Project Impact 📦

- All project components are **Open Source** under the **THP Lab GitHub**.
- Aims to help others create and own their data.
- Specific application for **The Hacking Project (THP)**:
  - A way to deliver attestations to students, validating their skills.
  - Other students and collaborators can validate claims.
  - Enhance student profiles and boost their employability.
