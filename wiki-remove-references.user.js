// ==UserScript==
// @name         Wiki Remove References
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2026-01-17
// @description  Removes reference markers (superscript citations) from Wikipedia pages
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/wiki-remove-references.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/wiki-remove-references.user.js
// ==/UserScript==

(function() {
    'use strict';
    const content = document.querySelector('div#mw-content-text');
    if (content) {
        // Remove reference markers
        document.querySelectorAll('sup.reference').forEach(el => el.remove());

        // Remove references section and its heading
        let refSection = content.querySelector('div.refsection, div.mw-references-wrap, div.reflist');
        if (refSection) {
            const prevElement = refSection.previousElementSibling;
            if (prevElement && prevElement.classList.contains('mw-heading') &&
                prevElement.classList.contains('mw-heading2')) {
                prevElement.remove();
            }
            refSection.remove();
        }
    }
})();
