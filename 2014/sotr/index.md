---
title: Solid Grunt
language: en-GB
layout: slides/oncletom.hbs
event:
  name: Scotch on the Rocks
  date: 2014-06-06
  url: http://www.sotr.eu/speakers.html#thomasparisot
video:
slides:
  -
    class: contrasted
    file: intro-quotes.md
  -
    file: ../../about-me.md
---

We use Grunt plugins and the `Gruntfile.js` to achieve common and repetitive tasks.

Sometimes, we have to bake our own business logic so we write code. And it works.
How do we test it? By running the code. How do we reuse the code? We don't it's a Grunt task.

I'll explain the story of the BBC News refactoring of Grunt tasks, how it has been simplified and fully tested.
Thanks to that, you will be able to write not only code but **testable features** and **tricks** to optimise your `Gruntfile.js`.