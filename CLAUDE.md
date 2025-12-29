# Instructions for Claude

## Project Structure

This is a userscripts repository containing browser scripts for Tampermonkey/Violentmonkey.

## When Adding a New Script

After creating a new userscript (`.user.js` file), you MUST:

1. **Update README.md** - Add a new row to the scripts table with:
   - Script filename (linked)
   - Description
   - Install link in format: `https://github.com/barabasz/userscripts/raw/main/FILENAME.user.js`

2. **Userscript metadata** - Ensure the new script includes all required metadata:
   - `@name` - Script name
   - `@namespace` - `https://github.com/barabasz`
   - `@author` - `@barabasz`
   - `@version` - Date in format `YYYY-MM-DD`
   - `@description` - Brief description
   - `@icon` - Appropriate favicon
   - `@match` - URL patterns where script runs
   - `@grant` - Permissions (use `none` if no special permissions needed)
   - `@license` - `MIT`
   - `@homepageURL` - `https://github.com/barabasz/userscripts`
   - `@supportURL` - `https://github.com/barabasz/userscripts/issues`
   - `@updateURL` - `https://github.com/barabasz/userscripts/raw/main/FILENAME.user.js`
   - `@downloadURL` - `https://github.com/barabasz/userscripts/raw/main/FILENAME.user.js`

## Code Style

- Use IIFE pattern: `(function() { 'use strict'; ... })();`
- Keep scripts simple and focused on single purpose
- Follow existing scripts as templates
