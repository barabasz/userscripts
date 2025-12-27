// ==UserScript==
// @name         Remove Wiki References
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2025-12-27
// @description  Removes reference markers (superscript citations) from Wikipedia pages
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/remove-wiki-references.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/remove-wiki-references.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('sup.reference').forEach(el => el.remove());
})();
