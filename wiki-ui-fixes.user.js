// ==UserScript==
// @name         Wiki UI Fixes
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2026-01-17
// @description  Removes various UI elements from Wikipedia pages (phonos, mboxes, mw-data-after-content, footer)
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/wiki-ui-fixes.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/wiki-ui-fixes.user.js
// ==/UserScript==

(function() {
    'use strict';

    const content = document.querySelector('div#mw-content-text');

    if (content) {
        // Remove phonetic pronunciation elements
        content.querySelectorAll('span.ext-phonos').forEach(el => {
            // Remove trailing space from previous text node
            const prevNode = el.previousSibling;
            if (prevNode && prevNode.nodeType === Node.TEXT_NODE) {
                prevNode.textContent = prevNode.textContent.replace(/\s+$/, '');
            }
            el.remove();
        });

        // Remove metadata notice boxes
        content.querySelectorAll('div.metadata.plainlinks, div.zastrzezenia').forEach(el => el.remove());
    }

    // Remove mw-data-after-content
    const mwData = document.querySelector('div#mw-data-after-content');
    if (mwData) {
        mwData.remove();
    }

    // Remove footer with MutationObserver for dynamically loaded content
    function removeFooter() {
        const footer = document.querySelector('div.wiki-footer');
        if (footer) {
            footer.remove();
            return true;
        }
        return false;
    }

    // Try immediate removal
    if (!removeFooter()) {
        // If not found, observe DOM changes
        const observer = new MutationObserver(() => {
            if (removeFooter()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();
