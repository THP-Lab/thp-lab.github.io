---
slug: Introduction-à-Intuition
title: Introduction à Intuition
# authors: Zealr
tags: [intuition, thp]
---

# Introduction

Dans ce blog, on va parler d’un projet qui va sûrement faire parler de lui ! Notre dernière formation Développeurs a commencé à réaliser son projet final, et c’est plutôt ambitieux.

<!-- truncate -->

Tout d’abord, présentons l’équipe. 
Nos 5 développeurs sont :
- Sacha Godel 
- Alexandre Tedesco 
- Thibault Lenormand 
- Maxime Lodato 
- Thomas Bobichon 


Ils ont suivi le parcours classique THP en commençant par le bloc d'introduction, puis la formation Fullstack et finalement Dev++.  
Pour ce projet, ils sont accompagnés par Jeremie Olivier, alias Zet, qui leur a proposé ce projet révolutionnaire pour le monde du Web3, et qui sera utile aussi pour THP.
Pour aborder ce projet, il y a plusieurs thématiques à comprendre et la plus importante, c’est celle de "Verifiable Credentials". **Kézako** ?  
Il s’agit d’attestations sécurisées qui certifient des compétences, certifications ou des diplômes via son réseau professionnel, plutôt que via un titre générique décerné par une structure. Ces attestations sont déliverées selon les normes W3C que vous pourrez retrouver [ici](https://www.w3.org/TR/vc-data-model-2.0/).  

Ce projet serait réalisé en collaboration avec les développeurs à l'origine du projet Intuition, dont le but est de mettre en place un réseau de données sur la Blockchain en suivant la base du modèle RDF.  
Ce modèle permet de saisir des données de tout types permettant de représenter des connaissances.   
Pour ceci un Atome doit être crée. Ce petit composant va contenir une information : par exemple sur une personne (ou un concept) avec son nom et prénom.  
Pour créer un Atome, on réalise une transaction sur la blockchain Base, ce qui le rend immuable. Ensuite, en liant trois Atomes entre eux, on crée un Triplet avec un sujet, un prédicat, et un objet ! Exemple : On prend (Elon Musk) – (a créé) – (Tesla) !


Du coup, quel est le projet de notre équipe de devs, et comment l’appliquer avec Intuition ?

# Présentation du projet

Nos étudiants ont donc plusieurs objectifs dans ce projet : 

- Le premier, c’est de permettre de rassembler des Triplets et les imbriquer entre eux pour créer des relations plus complexes. Un exemple concret : Si Mickey => a complété => [Fullstack (session –printemps - 2024) – (THP – is - Bootcamp) ], on a en réalité deux Triplets qui sont liés dans un seul.  
On a donc accès à des informations supplémentaires juste en partant de notre étudiant Sacha. C’est un des objectifs principaux de ce projet, qui permet de créer des relations plus profondes et fournies.

- Le second objectif serait de représenter ces informations sur un graphique, et donc visualiser les relations entre nos différents Triplets. En cliquant sur Sacha, on pourrait avoir accès à toutes les relations, et voir par exemple les différents cursus qu’il a pu suivre, et les autres étudiants qui étaient avec lui. On sait, ça peut faire beaucoup.

Nos Devs ont pour objectif que leur projet soit Open Source, et qu’il puisse être mis en place par de multiples structures. En utilisant la Blockchain, le projet devient d'utilité publique, et les informations sont immuables, mais aussi vérifiables grâce à l’historique des transactions.  
Tout ceci permet de délivrer de façon fiable des VC, puisque plusieurs personnes validerons la même chose.

Comment est-ce qu’on pourrait utiliser ceci par la suite ?

# Vision future / Utilisation dans THP

Ça parait simple, mais les utilisations peuvent être multiples. Imaginez, vous êtes un étudiant THP fraîchement sorti de formation, et vous souhaitez vous lancer sur le marché du travail.  
C’est parfois complexe pour un Junior comme vous. Mais si vous avez un système de recommandation qui permettrait de dire : « Jean-Michel maîtrise React » ou bien « Jacqueline travaille très bien en équipe », ça peut faire la différence !
Maintenant, ce que nos devs en formation souhaitent apporter à ce projet, c’est une implémentation avec THP pour permettre aux étudiants d’appliquer ce système de recommandations.  
Ceci donnerait à n’importe qui l’opportunité de faire valider ses compétences par ses pairs, consolider son profil et booster son employabilité. L’idée étant à terme de faire en sorte que ce code puisse être repris et utilisé par d’autres structures et relié à Intuition.
Du pain sur la planche, donc !

Si vous souhaitez en savoir un peu plus sur les détails du projet, vous pouvez vous rendre sur le [GitHub](https://github.com/THP-Lab), vous y trouverez un article plus poussé sur les fonctionnalités !
