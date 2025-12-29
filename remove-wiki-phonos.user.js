// ==UserScript==
// @name         Remove Wiki Phonos
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2025-12-29
// @description  Removes phonetic pronunciation elements from Wikipedia pages
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/remove-wiki-phonos.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/remove-wiki-phonos.user.js
// ==/UserScript==

(function() {
    'use strict';
    const content = document.querySelector('div#mw-content-text');
    if (content) {
        content.querySelectorAll('span.ext-phonos').forEach(el => {
            // Remove trailing space from previous text node
            const prevNode = el.previousSibling;
            if (prevNode && prevNode.nodeType === Node.TEXT_NODE) {
                prevNode.textContent = prevNode.textContent.replace(/\s+$/, '');
            }
            el.remove();
        });
    }
})();
