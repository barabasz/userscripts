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

    function removeReferences() {
        const content = document.querySelector('div#mw-content-text');
        if (!content) return;

        // Remove reference markers
        document.querySelectorAll('sup.reference').forEach(el => el.remove());

        // Find and remove References heading by h2 id
        const refHeadings = content.querySelectorAll('h2#References, h2#Przypisy, h2#Notes');
        refHeadings.forEach(h2 => {
            // Remove the parent mw-heading div
            const headingDiv = h2.closest('div.mw-heading');
            if (headingDiv) {
                headingDiv.remove();
            }
        });

        // Remove references section content
        content.querySelectorAll('div.refsection, div.mw-references-wrap, div.reflist').forEach(el => el.remove());
    }

    // Initial cleanup
    removeReferences();

    // Observe for dynamically loaded content
    const content = document.querySelector('div#mw-content-text');
    if (content) {
        const observer = new MutationObserver(() => {
            removeReferences();
        });

        observer.observe(content, {
            childList: true,
            subtree: true
        });
    }
})();
