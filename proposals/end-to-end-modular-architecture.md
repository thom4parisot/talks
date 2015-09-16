# An end to end modular architecture at the BBC

What is the difference between a UI component, an npm package, a Docker image and a machine server? Well, *none* really: we want them to be resilient, stateless and composable.

At BBC R&D, we have taken this route at many stages:
- we do not have a mobile app: we compose an application with **autonomous React** components;
- we do not have a data processing application: we have a **distributed event loop** where the data flow between several Docker containers;
- we do not have a three-tier admin application: we have an admin interface which is stores meaningful **relationships between metadata entities**.

This approach has proven to be useful and efficient for prototyping, with quick and explicit iterations. But it goes beyond the sole purpose of engineering: the **feedback loop** with designers has been improved and part of our platform is **reusable by other** BBC teams.

This talk is a technical and a functional journey to the key concepts of our modular architecture, how we ensure its quality and scalability, amongst humans and machines.

## Targeted Audience

- Deciders
- Developers

# Duration

- 45 min
- 20 min

----

# Design d'architecture modulaire à la BBC

Quelle est la différence entre un composant visuel, un *package* npm, une image Docker et une machine, physique ou virtuelle ? À vrai dire, *aucune* : on attend d'eux résilience, composition et fiabilité.

Dans notre équipe de BBC R&D, nous avons pris le chemin de la modularité à plusieurs niveaux :

- nous n'avons pas de WebApp : nous avons une application consomant des **composants React** ;
- nous n'avons pas de génération séquentielle de métadonnées : nous avons une **boucle événementielle distribuée** faisant appel à une flotille de **conteneurs Docker** ;
- nous n'avons pas d'architecture 3-tiers : nous avons des **conteneurs Docker** reliés entre eux et exposant des ports.

Cette approche s'est révélée être utile et efficace pour prototyper rapidement en quelques itérations. Car au-delà des principes d'ingéniérie, elle a permis de **réduire la boucle de feedback** avec d'autres corps de métiers et de **faciliter la réutilisation** de notre code par d'autres équipes de la BBC.

Cette présentation est un voyage technique et fonctionnel autour des concepts des architectures modulaires, de qualité et de résilience, à la fois pour les machines et les êtres humaines que nous sommes.
