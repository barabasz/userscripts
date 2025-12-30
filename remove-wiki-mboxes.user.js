// ==UserScript==
// @name         Remove Wiki Mboxes
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2025-12-29
// @description  Removes metadata notice boxes from Wikipedia pages
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/remove-wiki-mboxes.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/remove-wiki-mboxes.user.js
// ==/UserScript==

(function() {
    'use strict';
    const content = document.querySelector('div#mw-content-text');
    if (content) {
        content.querySelectorAll('div.metadata.plainlinks, div.zastrzezenia').forEach(el => el.remove());
    }
})();
