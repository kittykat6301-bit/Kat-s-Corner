(() => {
  const original = 'https://kats-corner.kittykat6301.chatgpt.site/';
  document.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    const url = new URL(image.currentSrc || image.src, document.baseURI);
    const marker = url.pathname.indexOf('/assets/');
    if (marker < 0 || url.origin !== location.origin) return;
    // Ma and Dad-owned artwork is included in GitHub; report missing files locally.
    if (/\/assets\/(?:themes\/(?:ma|dad)-[^/]+|gerald\/gerald-(?:ma|dad)\.webp)$/.test(url.pathname)) return;
    image.src = original + url.pathname.slice(marker + 1);
  }, true);
})();
