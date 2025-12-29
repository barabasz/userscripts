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
        content.querySelectorAll('span.ext-phonos').forEach(el => el.remove());

        // Remove extra spaces before punctuation marks and closing brackets
        const walker = document.createTreeWalker(
            content,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach(node => {
            node.textContent = node.textContent.replace(/\s+([.,;:!?\)\]}])/g, '$1');
        });
    }
})();
