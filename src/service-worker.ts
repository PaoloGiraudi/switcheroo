/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }

  event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
  }

  event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!(event.request.url.indexOf('http') === 0)) return;

  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    if (ASSETS.includes(url.pathname)) {
      const cachedResponse = await cache.match(url.pathname);
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    try {
      const response = await fetch(event.request);

      if (response.status === 200) {
        cache.put(event.request, response.clone());
      }

      return response;
    } catch {
      const cachedResponse = await cache.match(url.pathname);
      if (cachedResponse) {
        return cachedResponse;
      }
    }
    return new Response('Not found', { status: 404 });
  }

  event.respondWith(respond());
});
