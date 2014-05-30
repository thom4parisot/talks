Reveal.initialize({
  width: 1024,
  height: 728,

  controls: false,
  progress: true,
  history: true,
  center: true,
  overview: true,
  rollingLinks: false,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'linear',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: '../../bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../../bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../../bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

Reveal.addEventListener('ready', function(event) {
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

  [].slice.call(document.querySelectorAll('a > img')).forEach(function(el){
    el.parentNode.classList.add('image');
  });

  [].slice.call(document.querySelectorAll('section[data-background]')).forEach(function(el){
    el.innerHTML = el.innerHTML.trim();
  });

  [].slice.call(document.querySelectorAll('section[data-markdown]')).forEach(function(section){
    if (section.querySelectorAll('pre > code').length){
      section.setAttribute('data-state', 'code');
    }
  });
});

(function(document){
  var tag = document.createElement('link');
  tag.rel = 'stylesheet';
  tag.media = 'print';
  tag.type = 'text/css';
  tag.href = '../../bower_components/reveal.js/css/print/' + (window.location.search.match(/print-pdf/gi) ? 'pdf' : 'paper') + '.css';

  document.head.appendChild(tag);
})(document);
