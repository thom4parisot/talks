import Reveal from 'reveal.js';
global.Reveal = Reveal;

import RandomColors from 'reveal-random-colors';
import RevealMarkdown from '../../vendor/markdown/markdown.js';

const $$ = (selector) => {
  return Array.from(document.querySelectorAll(selector));
};

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

Reveal.registerPlugin('randomColors', RandomColors());
Reveal.registerPlugin('markdown', RevealMarkdown);

Reveal.initialize({
  width: 1024,
  height: 728,

  controls: /(localhost|#live)/.test(location.href) !== true,
  progress: true,
  history: true,
  center: true,
  overview: false,
  rollingLinks: false,

  transition: 'linear'
});

Reveal.addEventListener('ready', function() {
  window.localStorage.setItem('reveal-speaker-layout', 'tall');

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
});
