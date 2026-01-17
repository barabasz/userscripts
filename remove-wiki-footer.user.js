// ==UserScript==
// @name         Remove Wiki Footer
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2026-01-17
// @description  Removes the wiki-footer element from Wikipedia pages
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/remove-wiki-footer.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/remove-wiki-footer.user.js
// ==/UserScript==

(function() {
    'use strict';
    const footer = document.querySelector('div.wiki-footer');
    if (footer) {
        footer.remove();
    }
})();
