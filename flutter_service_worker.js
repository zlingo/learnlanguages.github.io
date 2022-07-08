'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "64f7d4976c32df22b2373f88df0523b0",
"index.html": "b17fa7f668d681e511c39b19075906ac",
"/": "b17fa7f668d681e511c39b19075906ac",
"main.dart.js": "61050f5a3a154ca91ac8b6ca9f70c881",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d0e4c9b43b2defbc082fb84e9a5219ab",
"assets/AssetManifest.json": "8bae329a09def5fdd8a0632207c7c9ac",
"assets/NOTICES": "76748be17302acac56bc0a5442c9d701",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/63.jpg": "d0dd85218c8f44a3589ef5fb433e68bc",
"assets/assets/images/77.jpg": "42ecfba92727450b581440835c2429ff",
"assets/assets/images/88.jpg": "f495a42b52d93c1ab270928b42537145",
"assets/assets/images/89.jpg": "ea6e6accf8bf802175471a7ad02fff09",
"assets/assets/images/76.jpg": "af0122a5b6fe4a89b515b084fa5e04a8",
"assets/assets/images/62.jpg": "2f41ca92a40f59f9bae07d572ddee9c3",
"assets/assets/images/74.jpg": "fc8403638e8f7b071a566dfe6d0540dc",
"assets/assets/images/60.jpg": "f12d02a0e4d99f8b0f4b1a6fe5d00e44",
"assets/assets/images/48.jpg": "c7675651750d5fd71799a694b96f86f1",
"assets/assets/images/49.jpg": "fc56681e8f07657277faa7b6713549f7",
"assets/assets/images/61.jpg": "2d636308dba8af0becdf27689b001c56",
"assets/assets/images/75.jpg": "1d167e912ae220e8a6759e6108d24219",
"assets/assets/images/59.jpg": "88eadcd8b747558496d8109b0986e07c",
"assets/assets/images/71.jpg": "bacc6b18b629ee8c7369f4e1528e110d",
"assets/assets/images/65.jpg": "9e82ce25495b11ca77f43e273440e498",
"assets/assets/images/64.jpg": "1aa26c39a4d344b196d02f671b9983a7",
"assets/assets/images/70.jpg": "2f04985b85182f4663d8b64e6ced36f3",
"assets/assets/images/58.jpg": "b8d4b72ee1955c67fe489dd5df620a96",
"assets/assets/images/8.jpg": "9ebd4c507b0b6ec6000d8c7c276d3e0c",
"assets/assets/images/66.jpg": "2ef2140ac3a7c7cb6434466b03ddc35d",
"assets/assets/images/72.jpg": "42e160ef9057fa103e5bdd2180d71c50",
"assets/assets/images/99.jpg": "dc2b1cfffbe1ba069c322e51ffb79ed4",
"assets/assets/images/98.jpg": "07c598ae6b1e2d42201ada7d9ced9390",
"assets/assets/images/73.jpg": "c7b7d7323785ee19a4438613f29409a2",
"assets/assets/images/67.jpg": "ae8716d381f5443e52de3cdf2d163789",
"assets/assets/images/9.jpg": "9ebd4c507b0b6ec6000d8c7c276d3e0c",
"assets/assets/images/14.jpg": "8293fd946b4089260e667d73ce426b9a",
"assets/assets/images/28.jpg": "e9a67e0b623b12630a6d1fff2dda0d7f",
"assets/assets/images/101.jpg": "92734687951c80db7c45b58bb63c76e9",
"assets/assets/images/100.jpg": "583df0ac00eb782585d8a8f01e2b5f65",
"assets/assets/images/29.jpg": "fcd902084390c5ef9f97b21d05271a4d",
"assets/assets/images/15.jpg": "1e2feb22f0f2cd453c727e78b1033816",
"assets/assets/images/17.jpg": "257670a6d50135e2a52bfa71b7081bcf",
"assets/assets/images/102.jpg": "2473c2686348d0c1ed4a40bf6210b31f",
"assets/assets/images/103.jpg": "746fd7b5cb2e43180c74201b5de2e8cc",
"assets/assets/images/16.jpg": "9b1cec1605b021a1c369032dc496dc11",
"assets/assets/images/12.jpg": "cfad92cb6e06e6a9cd9059ae6cc9ff96",
"assets/assets/images/13.jpg": "9973db0ab2946bf5c63a33d1ac363f7d",
"assets/assets/images/39.jpg": "74b9df7f7a6764847192e6547b171980",
"assets/assets/images/11.jpg": "4b250c0181190592b4c72b70f013d01c",
"assets/assets/images/104.jpg": "7a6fb3d09ed8a599021b3d7a44c95457",
"assets/assets/images/background.jpg": "61892c71b2994551c271dce86cb358c2",
"assets/assets/images/10.jpg": "ab43e5799cbae1ad4edef5b759285b42",
"assets/assets/images/38.jpg": "92316dd95bec8bea38061496a79ccbd6",
"assets/assets/images/21.jpg": "358afb22fe1d1b7f8348e2a20655bf6d",
"assets/assets/images/35.jpg": "bf38a203dadde6136a5c67756fe56cf6",
"assets/assets/images/34.jpg": "3782c7040561fac3a46ab55f9958239d",
"assets/assets/images/20.jpg": "646d5a5f688d49559d424a5c548a17ac",
"assets/assets/images/36.jpg": "3db88d7a3fb249d7ebff960ad017bbf1",
"assets/assets/images/22.jpg": "8570fcc96fc0c00d12185b07394c7822",
"assets/assets/images/23.jpg": "7304a47cfab03f1c2fa8b45130d29213",
"assets/assets/images/37.jpg": "af0122a5b6fe4a89b515b084fa5e04a8",
"assets/assets/images/33.jpg": "5febce72fa551ce7564d4231e15596fc",
"assets/assets/images/27.jpg": "e9a67e0b623b12630a6d1fff2dda0d7f",
"assets/assets/images/26.jpg": "58394a54abddebe392e845774a1e9a95",
"assets/assets/images/32.jpg": "522ab8f0e08e15383dfe4d69dfcd1c46",
"assets/assets/images/18.jpg": "2f49756ea7de30f5f443ec518672301b",
"assets/assets/images/24.jpg": "1aa26c39a4d344b196d02f671b9983a7",
"assets/assets/images/30.jpg": "8570d77c747a4e7b3a45113ecc2f8f59",
"assets/assets/images/31.jpg": "6352edcaa00aa4eab8a263d8ec6d7512",
"assets/assets/images/25.jpg": "f88dfb52f777c8e38b74084193e1c84a",
"assets/assets/images/19.jpg": "e20915a1f6f3b1429ec273889dddcb93",
"assets/assets/images/42.jpg": "cd5d92bd99589e9a2383df6cbdcdb61b",
"assets/assets/images/4.jpg": "d76ffd7c38dc180d1b92856c39af0a6b",
"assets/assets/images/56.jpg": "21799a3a8455a7132ae0dbb7617c12e3",
"assets/assets/images/81.jpg": "3782c7040561fac3a46ab55f9958239d",
"assets/assets/images/95.jpg": "4e6f06d92892338279db2148afe73d83",
"assets/assets/images/94.jpg": "27f34f1e95381071d10431beb8b2a535",
"assets/assets/images/80.jpg": "bf38a203dadde6136a5c67756fe56cf6",
"assets/assets/images/5.jpg": "87f70cb60f6b520bb9f5987c394c4f1d",
"assets/assets/images/57.jpg": "6a58042e3e553881b69d7edc7ea3cc8c",
"assets/assets/images/43.jpg": "87f87efbbd91dcad930e3b7709ecafd6",
"assets/assets/images/55.jpg": "16df526c5633edca13c7a51fd4fcf458",
"assets/assets/images/7.jpg": "ace359ce22d0530cc54b9e52776541dd",
"assets/assets/images/41.jpg": "65f712307986fc6ce46a7210b21d5c16",
"assets/assets/images/69.jpg": "2f04985b85182f4663d8b64e6ced36f3",
"assets/assets/images/96.jpg": "556129b6d9bc5e5a1a66b25dd95d0c85",
"assets/assets/images/82.jpg": "7a81d3c5c102d89ab132d6a721f9e98c",
"assets/assets/images/83.jpg": "c9274dbf27dccb4feda49808cb1f9c63",
"assets/assets/images/97.jpg": "0101984ab0b26494f90e2125f6e5c3d1",
"assets/assets/images/68.jpg": "49334c89dec5eb7c3007be33eb1a9b8a",
"assets/assets/images/40.jpg": "aca5b281bb0575388aeff969972f6b03",
"assets/assets/images/54.jpg": "1e2feb22f0f2cd453c727e78b1033816",
"assets/assets/images/6.jpg": "1806581bb7f53d27b5b7bd2b1c6443b9",
"assets/assets/images/78.jpg": "64528609ab23af12f9df9ec7a0b49cc4",
"assets/assets/images/2.jpg": "7e098672000befe62d54c97f40072974",
"assets/assets/images/50.jpg": "d62a92c3c1c561b8ee514c0b80a5fb71",
"assets/assets/images/44.jpg": "aaf269a73b7465f643ea04ef6154d0b5",
"assets/assets/images/93.jpg": "93dba56b3c25921b53d704a9b2e34cee",
"assets/assets/images/87.jpg": "21583ae6c7aab889df315f7ee49358f3",
"assets/assets/images/86.jpg": "fdcfe54cbc8a280defa335eeeb0a758c",
"assets/assets/images/92.jpg": "c164d61583074fb3d438ce8050b4bd0d",
"assets/assets/images/45.jpg": "d412c06f7fed36e5e05eec94886395a8",
"assets/assets/images/3.jpg": "e99368acebf8f91c47c8b92ab9f1c23c",
"assets/assets/images/51.jpg": "5779774747de52fed0417e7a4b6e20be",
"assets/assets/images/79.jpg": "f2afe1ec6665cf60f7245ff7fe21a41b",
"assets/assets/images/47.jpg": "353b25fbe735da66077ce692cf0e7268",
"assets/assets/images/53.jpg": "0c6d302bb3d247f6d4f51f1ad78f2bb8",
"assets/assets/images/1.jpg": "179656b89ba3344e64e2075ea450d8c6",
"assets/assets/images/84.jpg": "7b5b5929db8e093c6c6cc93d02fc774f",
"assets/assets/images/90.jpg": "53f88c79c9584f7dc95be38ebf84d40a",
"assets/assets/images/91.jpg": "4cfc57a050be5a51974fa3f228dce428",
"assets/assets/images/85.jpg": "25f19814371e7f8093d6d938812ca042",
"assets/assets/images/52.jpg": "93d77b613bed16d78c9e353080a32815",
"assets/assets/images/46.jpg": "59042d3aa8a5115401683e8f40d9900c",
"assets/assets/icons/instagram.png": "ede1570fa4c88ee2226d5fe1d0daef59",
"assets/assets/icons/facebook.png": "6e7c91b6ab2d185c312886aa9f68a20e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
