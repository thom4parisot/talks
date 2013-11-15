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
    { src: '/bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '/bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '/bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

(function(document){
  var tag = document.createElement('link');
  tag.rel = 'stylesheet';
  tag.media = 'print';
  tag.type = 'text/css';
  tag.href = '/bower_components/reveal.js/css/print/' + (window.location.search.match(/print-pdf/gi) ? 'pdf' : 'paper') + '.css';

  document.head.appendChild(tag);
})(document);
