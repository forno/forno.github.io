# forno.github.io

Minimal static redirect to https://xmaho.link/.

- Files: `index.html`, `sw.js`
- Purpose: retire the old Gatsby site and ensure visitors are redirected without needing a hard refresh, even if a previous service worker is installed.

How it works
- `index.html` issues a meta refresh and JavaScript `location.replace` to `https://xmaho.link/`, and registers the service worker for one-time cleanup for returning visitors.
- `sw.js` takes control, clears old caches, unregisters itself, and redirects navigations to the new domain.

No build step is required; GitHub Pages serves the files from the repository root.
