'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3af6cf8b8ff10fa1f1bb21ab8bcef906",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/afcbfccb3f5ea83b7ad624067b93e1c897d16d": "a22589b32201395488fd6753a59ca41b",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/1fc03a8c3323d875d8524d35bc3a09a708bf47": "1477b2bf36f2f43d34c2e46ec0128f05",
".git/objects/23/4804f8c9b1522afbfb42d0ca4068c45dde4709": "6f61614c90c5bd5e02b487cbeb3bcc7b",
".git/objects/25/c41d6f7f4503f8a09166d005da6d28f119ecf0": "d8b32f81dd3b3a62c0b2d55ec769957b",
".git/objects/28/efc429e716e77bc6001f7e9babaa6d4d50de41": "d33867bdf6b910069f3d4e70b95bd0cf",
".git/objects/2c/12d1e3fb42686ad6ddddcc24aea2f95b2e3d69": "c3c0eee838f9472fdf54f07474b5fcd0",
".git/objects/2d/985c08f1a6a1e35df1dce0bb2a10e9a52ab3db": "efae478f66d7c8ada40b1f28eb36a9a0",
".git/objects/30/b290e2a06915d5e27f270789f1069435f4245c": "31591e2859b5132677fa35b40f1885cd",
".git/objects/33/2b730bd4de520c4fe8d257ac62c15bc5708466": "55bc3781b14fa144ff3e4e4f27ac7ddd",
".git/objects/33/df39caa9cc1f5a4cf6c81bd83defaec1006b68": "d298a5188c69eb3836371a75532227b3",
".git/objects/35/3f0a23c15691991e23131e2523b9f3bb76cd59": "d23df49de07844469ea1d6227cf701be",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/43/d4fce133ed9f25c689e9dda94fa50dffea1d16": "b4091913ab491527bd4f702853c4a9db",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/da7d2e25b0c5576363bc90ee04314240f95dd5": "5178d9346f44b81a132bfd55305e92a6",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/e3bf3355dd312adb30424f514583de44209585": "35c2e460c3b409f46679d7a45d4312a5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/583a7d939564686e5ed8aaf2319cbbbfe5dcf9": "3db9468c3c337b7767b4f4cb981a8098",
".git/objects/6d/d556399b1097cdc7cdada71680bb1753c58e34": "b1d85914e25541e567f0f8d3a9aa2e5e",
".git/objects/6e/c1895d2c0a84c6046a5681d284561ac7793094": "58e2394a4f94bb6c58829254261397d6",
".git/objects/72/acc6c664600796e11c6714d2d6a145fddac891": "1bca7947871a07ad370a14d2e109d197",
".git/objects/73/cf9513fe428d04deca3652c508c47dfd40b494": "92ff41d4368fbbb4cd53a7504e1f4e46",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/70d753b7ba6257b7cddb525d0e68700cbde3de": "d00e0603d5dcb952f42e600111e2d6b5",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/9def33075137f7be4e529fa129b372cb7a8c21": "238c359049afa51806786cced42e2861",
".git/objects/a0/84e1bf24f0a5ae14e8318ff266705a514e125a": "208740f07e1ff3bf4e494bda532e2793",
".git/objects/af/2e2e4eaca81ffa60f9d0e5d302ff4c3d7dbddc": "ea546a29b7be3dc915db6f566cf9fcc3",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/09f1b76657dc8aecde31c17b9281454fc691e7": "c0ac103bdb0017e5de3737ac7893ab85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/3ca5343d34828c2fad828373126247de8c4631": "f050fe56db03f17904b6562455ce0738",
".git/objects/c1/92c87ef71ce2f913d2d3756ae6b2f018796107": "b49667a40a66f7ecebdd3b95cf472ea7",
".git/objects/d3/c106f0c1a94a3ea3de7b996e6c9fdd1e882f21": "495b0ad9d102aeacb5d52184fe284c35",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ea/9d3b00e0ebaafa4f17f98b35aa724bf7be1502": "42482e3baa8a0d51227f20f1eaa7c3d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/d87264e88ef2e49ecaa51ae48522c3aa2209c8": "5a3907fd681146b9444e378a72d28fcc",
".git/objects/fd/0f540093fb6b34460403364259e18b6fdb3bd9": "f5735c4659d8d2936bf1860f1249e776",
"assets/AssetManifest.json": "ea9495513bc80ce17c420727d6384071",
"assets/AssetManifest.smcbin": "af10759f7108f1bc306b88205940f657",
"assets/assets/images/about.jpg": "79fad53c8383d520ef4853da0c0d8602",
"assets/assets/images/background.jpg": "f50f8336b5a706dab8ca250ee5de37f1",
"assets/assets/images/banner.png": "31fe8d577a54967c9a5e8a5dac21f0da",
"assets/assets/images/banner2.jpg": "c7882cdc5ec6db06cf7e3fd33d270f4c",
"assets/assets/images/basketball.png": "09725f3f5968fac0a4a924effc7e875f",
"assets/assets/images/cafeteria.png": "bec6f8a1f9a38d339ee88671d49209c3",
"assets/assets/images/certificate.jpg": "09161d4e7af0ee0174498c2611bad520",
"assets/assets/images/close.svg": "cb41d4af7d12231015eb5709bcec6159",
"assets/assets/images/library.png": "8edc84870446a918d71defa18143aee7",
"assets/assets/images/logo.png": "62ba0e9c5fe952e50482d3bd1c1eaf1b",
"assets/assets/images/london.png": "79b15e3c40ee8c36fafa4b8f02ec38f5",
"assets/assets/images/man.png": "c90685a6995f906f115e46d0adac80d2",
"assets/assets/images/mandala.jpg": "a4181eed3c2ac1ba7f08d083dcf9884f",
"assets/assets/images/menu.svg": "22d9a319d87fd11c7958b3477558a35c",
"assets/assets/images/newyork.png": "823f8b6c73176caaf13fd478dbd7a565",
"assets/assets/images/search.png": "a47f29230ad11d18f071c59e57e4d859",
"assets/assets/images/star.png": "2e23814e79e1e4d62e6c4fdce80ca555",
"assets/assets/images/user1.jpg": "f0494f677a8d37028946657108f51297",
"assets/assets/images/user2.jpg": "2f24f887a7f63fc9d97e8cb577f06ea2",
"assets/assets/images/washington.png": "8d49d5564dd785bcf728e374ae4ca3a4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "453c017cc2879cda2550a5ea19d77ddc",
"assets/NOTICES": "8eb684f28ac90ac0a3f62977abc14450",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f00f3bbedce09d01f51d857f6e2dab5f",
"/": "f00f3bbedce09d01f51d857f6e2dab5f",
"main.dart.js": "faf5bb406ebe93003928fc946190c4bb",
"manifest.json": "784fd3cbcf0111849e796566f65ab8ff",
"version.json": "c2f3df9119a941bebd65546d6f76d047"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
