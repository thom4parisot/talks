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
