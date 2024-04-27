import Reveal from 'reveal.js'

import RandomColors from 'reveal-random-colors'
import RevealMarkdown from 'reveal.js/plugin/markdown/plugin.js'
import RevealNotes from 'reveal.js/plugin/notes/plugin.js'
import { createDirectives } from 'marked-directive'

const $$ = (selector) => {
  return Array.from(document.querySelectorAll(selector));
};

const markdown = RevealMarkdown()
markdown.marked.use(createDirectives())

Reveal.initialize({
  plugins: [
    markdown,
    RevealNotes,
    RandomColors
  ],
  width: 1024,
  height: 728,

  controls: true,
  scrollProgress: true,
  progress: true,
  history: true,
  center: true,
  overview: false,
});

Reveal.on('ready', function() {
  window.localStorage.setItem('reveal-speaker-layout', 'tall')

  $$('a > img').forEach(function(el){
    el.parentNode.classList.add('image');
  });

  $$('section[data-background]').forEach(function(el){
    var isEmpty = Array.from(el.children).every(function(child){
      return (typeof child.nodeValue === 'text' && child.nodeValue.trim() === '') || child.classList.contains('notes');
    });

    if (isEmpty){
      el.classList.add('empty');
    }
  });

  $$('section[data-markdown] > h1, section[data-markdown] > h2, section[data-markdown] > h3').forEach(function(el){
    if (el.nextElementSibling && el.nextElementSibling.classList.contains('notes')){
      el.classList.add('last-child');
    }
  });

  $$('section[data-markdown]').forEach(function(section){
    if (section.querySelectorAll('pre > code').length){
      section.setAttribute('data-state', 'code');
    }
  });
})

Reveal.on('pdf-ready', function() {
  $$('.pdf-page').forEach(el => {
    el.style.minHeight = el.style.height
    el.style.height = ""

    const speakerNotes = el.querySelector('.speaker-notes')
    if (speakerNotes) {
      speakerNotes.style.marginTop = el.style.minHeight
    }
  })
})
