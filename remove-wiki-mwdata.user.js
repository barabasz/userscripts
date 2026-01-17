// ==UserScript==
// @name         Remove Wiki MW Data
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2026-01-17
// @description  Removes the mw-data-after-content element from Wikipedia pages
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/remove-wiki-mwdata.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/remove-wiki-mwdata.user.js
// ==/UserScript==

(function() {
    'use strict';
    const mwData = document.querySelector('div#mw-data-after-content');
    if (mwData) {
        mwData.remove();
    }
})();
