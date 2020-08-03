'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "b85b5709ba828f3c5928a8415bb65834",
"favicon.png": "0bbb275c3be676f24451e7680147c8a2",
"index.html": "b28a4fa667aecc6a81ce7156a87c6bca",
"/": "b28a4fa667aecc6a81ce7156a87c6bca",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Cousine/Cousine-Regular.ttf": "64a889644e439ac4806c8e41bc9d1c83",
"assets/fonts/Cousine/Cousine-BoldItalic.ttf": "1038b5579146b28e9e4dc98c8fc5d1d9",
"assets/fonts/Cousine/Cousine-Bold.ttf": "06dae6a1a3247bd76125cfe3b3480557",
"assets/fonts/Cousine/Cousine-Italic.ttf": "177a3d2157da07498e805683e8cdaa8d",
"assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf": "a8d6f8bb989fc3c860ad2eeac21f9daa",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLight.ttf": "cba7ccef6b4071f76245cc0c5e659aa9",
"assets/fonts/Source_Code_Pro/SourceCodePro-BlackItalic.ttf": "fb68d27992feaf97dab1e5640a6f5812",
"assets/fonts/Source_Code_Pro/SourceCodePro-Black.ttf": "efa63de0d44af1e7de9e01a4467dd423",
"assets/fonts/Source_Code_Pro/SourceCodePro-BoldItalic.ttf": "c8066b7adaa839e5f0590da2d34723be",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLightItalic.ttf": "b98dab96118c3500d0e8c3f887fcfb26",
"assets/fonts/Source_Code_Pro/SourceCodePro-Italic.ttf": "c088801620ae4d69924da74e879170a9",
"assets/fonts/Source_Code_Pro/SourceCodePro-LightItalic.ttf": "ac76390ae8518be5c0a0bd1f3b088b4b",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBoldItalic.ttf": "6406c55397f0f20723d6b2c2f6515348",
"assets/fonts/Source_Code_Pro/SourceCodePro-Medium.ttf": "f621c504d70317ff13774e27d643ba21",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/fonts/Source_Code_Pro/SourceCodePro-MediumItalic.ttf": "0b54cce890a75c2227718eaf473068ba",
"assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/FontManifest.json": "76e483e1e78790872d879b82f449c673",
"assets/lib/images/def.jpg": "24bc69b19e663f4c8174bb27b88bee87",
"assets/lib/images/zucc.jpg": "80fca56b8121335ef576b10238bdd7eb",
"assets/lib/images/notes.png": "50ce947efebd3bf7d0d87d2de28286cf",
"assets/lib/images/settings.png": "ff6396d14363cf9951455a79b36ae35b",
"assets/lib/images/close.svg": "7ef4ba2fef8ceac03c3960499de3f8bc",
"assets/lib/images/Desktop/Cityscapes/stairs.png": "d4b0a0eaad1f0017fcc9d73e3a922994",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background-1.jpg": "db3112225aaa7aa16dfe2dc5b060465f",
"assets/lib/images/Desktop/Dahlia/forest.jpg": "bb9971fadf446779b9f29204180bcf72",
"assets/lib/images/Desktop/Dahlia/Brick-Wall.jpg": "0b04e08e5ea10b738aa73291c38b24c9",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background.jpg": "eb83b6fae9d42765e4c4446c675d4c11",
"assets/lib/images/Desktop/Dahlia/Sunset.png": "0c90e0b1fd118334e32f7f186813567b",
"assets/lib/images/Desktop/Dahlia/mountain.jpg": "7fca0b04f5582bd15144f8ede952aa17",
"assets/lib/images/preferences-activities.svg": "15717bcbc9d293352bb05ad3bae48cb8",
"assets/lib/images/notes.svg": "bfc3be24a1be5e6bfebe8631e5b5ea59",
"assets/lib/images/dahlia.png": "a588898d0b4be5e5234723478478badc",
"assets/lib/images/Gmail-icon.png": "dfcbd586c56f73e343b25b3af12491c1",
"assets/lib/images/logo-color.png": "6748a20704842170e7a87088d98d2f22",
"assets/lib/images/menu.png": "e824461dd4c3e943b4b1da1817290f73",
"assets/lib/images/google_logo.png": "9b224c9884c2bb081d4ac92b23675c2e",
"assets/lib/images/music.png": "545d9a70d4d7c5f525610b8e1c84801c",
"assets/lib/images/def.png": "4a9154fbf35a6772da8fe15819d76881",
"assets/lib/images/minimize.svg": "02136894edcb5f8ffff640ddda3d0c10",
"assets/lib/images/test.jpg": "57020cf201710a061e4a67ef79bc3ebe",
"assets/lib/images/calc.png": "be34c099a9a4c15b40692c0610873d3f",
"assets/lib/images/wallpaper.png": "5d490931a734ec44fd88bdc9b947d9ab",
"assets/lib/images/maximize.svg": "ba29473f37ab194a01c241d5daf7d550",
"assets/lib/images/gallery.png": "5259483d1365c9b825bd6947cd85c016",
"assets/lib/images/phone.png": "de209128b7b3241f65b8b5c117c10190",
"assets/lib/images/icons/v2/compiled/task.png": "548e313c465c5caf31cad9d574119016",
"assets/lib/images/icons/v2/compiled/calculator.png": "b5d2f4da128fd5a0eed0ed52a5ac9147",
"assets/lib/images/icons/v2/compiled/note_mobile.png": "5bc75d1575688657c59eeab91631d473",
"assets/lib/images/icons/v2/compiled/notes.png": "5644e3fe7f2f7601a6afdba1f1e17b73",
"assets/lib/images/icons/v2/compiled/settings.png": "d5be1c564f8564d8c0a6f86057b01f2a",
"assets/lib/images/icons/v2/compiled/macos.png": "2799296e4d4831c96c2b1b205d0ae796",
"assets/lib/images/icons/v2/compiled/containers.png": "62d3d4953dc39c773e43fe24dd89c65a",
"assets/lib/images/icons/v2/compiled/grey-drag.png": "af96264233287efd9efbf4ee2954fc67",
"assets/lib/images/icons/v2/compiled/theme.png": "1b065d813d384c82002793b1b92b0b85",
"assets/lib/images/icons/v2/compiled/ubuntu.png": "dc5596b1ded46cc5b61f74b860e98964",
"assets/lib/images/icons/v2/compiled/logs.png": "e312999c04f678ff5941d66718ef6cbf",
"assets/lib/images/icons/v2/compiled/help.png": "149ba5f0862946faea4d5744619ba607",
"assets/lib/images/icons/v2/compiled/files.png": "6c5019286c21611abebc9e9b1086be03",
"assets/lib/images/icons/v2/compiled/debian.png": "527552dd24e4cd27bfb4be63b2c454c4",
"assets/lib/images/icons/v2/compiled/root.png": "edb147b20b24112a578f11f4fbdd24f3",
"assets/lib/images/icons/v2/compiled/messages.png": "004c87d98d7fb5ed52f8d79898d88ae6",
"assets/lib/images/icons/v2/compiled/music.png": "91e7695e656f380f48df79ef8616b205",
"assets/lib/images/icons/v2/compiled/developer.png": "14f413a0c0ba35af4fe5bcc04ebf2820",
"assets/lib/images/icons/v2/compiled/disks.png": "b8c23e9bf62238d900b958540be4f236",
"assets/lib/images/icons/v2/compiled/photos.png": "9b2ee870807ea18761ff4bf308897394",
"assets/lib/images/icons/v2/compiled/android.png": "27a703eacba2bbfed57346b32b7af9b1",
"assets/lib/images/icons/v2/compiled/clock.png": "81ca934d721ad96518209fd99b627908",
"assets/lib/images/icons/v2/compiled/terminal.png": "524019d8d97ea6c4ccd3db664375e4da",
"assets/lib/images/icons/v2/notes.svg": "766b05b07affbf7a09079e4023a99823",
"assets/lib/images/clock.png": "d947514d9e25f18c4fbd72e9ad833195",
"assets/lib/application.json": "d77a88179cab3c0105595fdc9dbef771",
"assets/lib/localization/languages/fr-FR.json": "313a3d6c9d81acf9fe509c421e307e54",
"assets/lib/localization/languages/en-US.json": "bfa408fc0b806af35faf823a346ad350",
"assets/lib/localization/languages/de-DE.json": "6b2e2c752741cff0b12c68a13f25dd7c",
"assets/lib/localization/languages/nl-NL.json": "0e9754da3bd3ccf3397e10dd7287872d",
"assets/lib/localization/languages/pl-PL.json": "07f5f805772db0dd17b90eb4500d1af7",
"assets/lib/localization/languages/hr-HR.json": "a6741c65322fec173c5f3b06e6ae12a8",
"assets/lib/localization/languages/nl-BE.json": "24ab8aa388f2f59a73a8421aae1add1c",
"assets/NOTICES": "c80595697291b7137eac421a135fce38",
"assets/AssetManifest.json": "17881d0cbef02f8521a3db4528891fbc",
"manifest.json": "8ff5fe849411d088c5084cdf099d07cf",
"icons/Icon-512.png": "0bbb275c3be676f24451e7680147c8a2",
"icons/Icon-192.png": "0bbb275c3be676f24451e7680147c8a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
