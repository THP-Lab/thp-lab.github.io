Introduction
About us:
 We’re a team of 5 developers in training from The Hacking Project, a Bootcamp school in France. The team is composed of Sacha Godel, Thibault Lenormand, Alexandre Tedesco, and Thomas Bobichon.
This project is important to us, as it is the final project of our training which will validate our diploma!
With us there’s Jeremie, aka Zet, who’s advising us, as he is really familiar with Web3 and cryptocurrencies.
We contacted the team working on Intuition, who are working on a platform where you can create information on the RDF model, which you can find [here]( https://www.w3.org/RDF/).
On Intuition, you create an Atom in which you can stock any piece of information. For exemple, I can create an identity for myself, and use it to make claims about me. When you link Atoms together, by using one as the subject, a predicate and an object, you get a Triple. An easy example to show this would be (Elon Musk) – (is CEO of) – (Tesla). With this, you can create claims and create a real network of information. 
Intuition is using the Base Blockchain, which guarantees that every piece of information is immutable, and accessible to everyone thanks to the history of transactions. 
The project

<!-- truncate -->

Objectives

We’ve got two objectives in this project.
The first one is that we make Triplets related to each other, and that you can make several statements into one. One good example is this one. Our dev (Sacha – has completed –(Fullstack (spring- 2024 – session) (of- THP- Bootcamp) ), you can see that several Triplets are put into one, linking Sacha to all of these statements, which would allow for a deeper level of connections, and information, just starting from one Atom.
The second objective is to be able to see it happen on a graph! When you’ve got a list of Atoms, you can put a filter on and see your main subject in the middle, and the relations around it. This way, you can access quickly to a huge list of information starting from a precise point.
Delivery
We’re making this project Open Source, so anyone is free to help and/or contribute to this project. When this is done, we’re hoping that anyone who wants to use this to create their own data will be able to do so. 
One thing we want to implement would be a use for our school, and a way to deliver attestations to the students to validate skills or abilities on demand, so the other students and people they worked with can validate the claims, giving them more validation.
Roadmap

The project has several steps to achieve our objectives.

Experiments and improvements of existing tools to concatenate Triples
Step 1:
Our first time is to use a mock list of students, that we’ll give to a Rails API to manage it, and push these with a decentralized graph App. This is where we’ll start thinking of our triplets and how to put them together.
Step 2:
We keep our mock data and change it into a CSV file, and then we’ll use Intuition’s Data Populator to “massively” create Atoms of our students. We’ll begin to use the Smart Contract, and use the Sepolia Blockchain to test everything. 
We’ll look into the possibility to create Triplets instead of simply Atoms with the Data Populator.

Step 3:
Now we can switch the Sepolia Smart contract with ours
We’ll create the subgraph and make it work, effectively making it able to show data in the Dapp. 

Step 4:
We can finally implement actual data from the THP students into Intuition!
Create an assistant for recommendations
The ultimate goal for us it to create a way for our students to ask for recommendations and use AI to find the best way to put the Triples together and improve the semantic.
Components

Experiments
Mock Rails API: 
This component will be the basis of our tests at the beginning. In this API, we’ll use the Faker gem to create a list of students. The goal of this API is to quickly produce a huge mass of Atoms, and then Triples. 
We picked Rails because of its ability to bootstrap an API quickly, and how easy it is to copy the data model of Intuition. For example, the polymorphic relationship between Atoms and Triples, which is natively supported by Rails.

GRAPH DE SACHA


Features: 
Database Seeds to bootstrap data related to a school, its students and the relations between students
It can be used as an API to show a graph and visualize the data. The return data will be mapped on Intuition’s return.
Produce CSV files to be used with Intuition’s Data Populator to make for quicker testing.
We want to add a kind of console where you can directly create new Triples, instead of doing it on Intuition. This will allow a faster way to test and try our app.

Data Populator
We want to improve the Data Populator by adding the feature of creating Triples, just like one can create Atoms in large numbers right now.

Visualisation Graph React

The graph is here to help you visualize Intuition data. We want to connect it either to our Rails API, or Intuition’s SubGraph. It’s supposed to be a playground to visualize Triples and complex relationships between them. We want to experiment with different modes by changing the main node. This would include 2D view, 3D view, lists and more.

Assistant
User who wants to get a recommendation:
As a user who doesn’t know Intuition, I want to get a recommendation or attestation. I’ll fill in a text field to give as much information as possible on the context and which kind I’m looking for. 
One person can create their own attestation, and send it to others for validation of course.

User who wants to give a recommendation:
I can validate the request of another user, and deliver the recommendation.

The process is simple: once the first user makes the request, our backend will give it to an AI who’ll try to find the best way to put Triples together and give the most meaningful recommendation. Of course, other students will be able to validate the claim and give the recommendation more credit once it’s done.