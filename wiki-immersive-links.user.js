// ==UserScript==
// @name         Wiki Immersive Links
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2026-01-17
// @description  Makes Wikipedia links more immersive: no underline (only on hover) with custom colors, removes red links
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/wiki-immersive-links.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/wiki-immersive-links.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Add custom styles for links
    const style = document.createElement('style');
    style.textContent = `
        #mw-content-text a {
            text-decoration: underline;
            text-decoration-color: transparent;
            transition: color 0.2s ease, text-decoration-color 0.2s ease;
        }
        #mw-content-text a:hover {
            text-decoration-color: currentColor;
        }
        #mw-content-text a {
            color: #000070 !important;
        }
        #mw-content-text a:hover {
            color: #0000e0 !important;
        }
    `;
    document.head.appendChild(style);

    // Remove red links (links to non-existent pages)
    function removeRedLinks() {
        const content = document.querySelector('div#mw-content-text');
        if (!content) return;

        content.querySelectorAll('a.new').forEach(link => {
            // Create text node with link's text content
            const textNode = document.createTextNode(link.textContent);
            // Replace link with text node
            link.parentNode.replaceChild(textNode, link);
        });
    }

    // Initial cleanup
    removeRedLinks();

    // Observe for dynamically loaded content
    const content = document.querySelector('div#mw-content-text');
    if (content) {
        const observer = new MutationObserver(() => {
            removeRedLinks();
        });

        observer.observe(content, {
            childList: true,
            subtree: true
        });
    }
})();
