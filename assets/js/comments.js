let loaded = false;

export function listen (location, options={hash: '#comments'}) {
  if (!loaded && location.hash === options.hash) {
    loadScript();
  }
}

export function loadScript () {
  loaded = true;

  const script = document.createElement('script');
  script.src = '//oncletom.disqus.com/embed.js';
  document.body.appendChild(script);
  document.body.classList.add('comments-enabled');
}
