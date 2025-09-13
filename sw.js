// Root-scoped Service Worker to neutralize old Gatsby SW and redirect
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try { await self.clients.claim(); } catch {}
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    } catch {}
    try { await self.registration.unregister(); } catch {}
    try {
      const clientsList = await self.clients.matchAll({ type: 'window' });
      for (const client of clientsList) {
        client.navigate('https://xmaho.link/');
      }
    } catch {}
  })());
});

self.addEventListener('fetch', (event) => {
  // Redirect navigations to the new domain
  if (event.request.mode === 'navigate') {
    event.respondWith(Response.redirect('https://xmaho.link/', 302));
  }
});

