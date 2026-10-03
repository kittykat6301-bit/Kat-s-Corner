(() => {
  const original = 'https://kats-corner.kittykat6301.chatgpt.site/';
  document.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    const url = new URL(image.currentSrc || image.src, document.baseURI);
    const marker = url.pathname.indexOf('/assets/');
    if (marker < 0 || url.origin !== location.origin) return;
    if (/\/assets\/(?:themes\/(?:mama|hayley|emmy|journey|spencer)-[^/]+|(?:buddies\/|gerald\/gerald-)(?:mama|hayley|emmy|journey|spencer)\.webp)$/.test(url.pathname)) return;
    if (/\/assets\/(?:themes\/(?:fantasy|cozy|memaw|derek)-[^/]+|(?:buddies\/|gerald\/gerald-)(?:fantasy|cozy|memaw|derek)\.webp)$/.test(url.pathname)) return;
    if (url.pathname === "/assets/buddies/midnight.webp") return;
    if (/\/assets\/(?:themes\/(?:alex|midnight)-[^/]+|gerald\/(?:gerald-alex|gerald-midnight)\.webp)$/.test(url.pathname)) return;
    if (/\/assets\/(?:themes\/(?:kat|gerald)-[^/]+|gerald\/(?:gerald-kat|gerald-archive-full)\.webp)$/.test(url.pathname)) return;
    if (/\/assets\/(?:themes\/(?:classic-|game-room)[^/]*|gerald\/gerald-(?:arcade|game-room)\.webp)$/.test(url.pathname)) return;
    // Ma and Dad-owned artwork is included in GitHub; report missing files locally.
    if (/\/assets\/(?:themes\/(?:ma|dad)-[^/]+|gerald\/gerald-(?:ma|dad)\.webp)$/.test(url.pathname)) return;
    image.src = original + url.pathname.slice(marker + 1);
  }, true);
})();
