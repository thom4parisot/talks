Reveal.initialize({
  width: 1024,
  height: 728,

  controls: /(localhost|#live)/.test(location.href) !== true,
  progress: true,
  history: true,
  center: true,
  overview: false,
  rollingLinks: false,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'linear',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: '../../bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../../bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../../bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: '../../bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }

 ]
});

Reveal.addEventListener('ready', function(event) {
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

  var toArray = (function(slice, nodeList){
    return slice.call(nodeList);
  }).bind(null, [].slice);

  toArray(document.querySelectorAll('a > img')).forEach(function(el){
    el.parentNode.classList.add('image');
  });

  toArray(document.querySelectorAll('section[data-background]')).forEach(function(el){
    var isEmpty = toArray(el.children).every(function(child){
      return (typeof child.nodeValue === 'text' && child.nodeValue.trim() === '') || child.classList.contains('notes');
    });

    if (isEmpty){
      el.classList.add('empty');
    }
  });

  toArray(document.querySelectorAll('section[data-markdown] > h2, section[data-markdown] > h3')).forEach(function(el){
    if (el.nextElementSibling && el.nextElementSibling.classList.contains('notes')){
      el.classList.add('last-child');
    }
  });

  toArray(document.querySelectorAll('section[data-markdown]')).forEach(function(section){
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
