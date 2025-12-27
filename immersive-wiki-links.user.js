// ==UserScript==
// @name         Immersive Wiki Links
// @namespace    https://github.com/barabasz
// @author       @barabasz
// @version      2025-12-27
// @description  Makes Wikipedia links more immersive: no underline (only on hover) with custom colors
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://en.wikipedia.org&size=64
// @match        *://*.wikipedia.org/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/barabasz/userscripts
// @supportURL   https://github.com/barabasz/userscripts/issues
// @updateURL    https://github.com/barabasz/userscripts/raw/main/immersive-wiki-links.user.js
// @downloadURL  https://github.com/barabasz/userscripts/raw/main/immersive-wiki-links.user.js
// ==/UserScript==

(function() {
    'use strict';

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
        #mw-content-text a:not(.new) {
            color: #000070;
        }
        #mw-content-text a:not(.new):hover {
            color: #0000e0;
        }
        #mw-content-text a.new {
            color: #700000;
        }
        #mw-content-text a.new:hover {
            color: #e00000;
        }
    `;
    document.head.appendChild(style);
})();
