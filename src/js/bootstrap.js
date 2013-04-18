Reveal.initialize({
  width: 1024,
  height: 728,

  controls: false,
  progress: true,
  history: true,
  center: true,
  overview: false,
  rollingLinks: false,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'linear',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: '../../components/reveal.js/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../../components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../../components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});