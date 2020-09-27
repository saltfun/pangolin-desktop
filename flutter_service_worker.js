'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "439728b8f91d45cf2c8a1c2c04100522",
"main.dart.js": "bcb96fb9f077bc0eb8b532436aeae940",
"assets/NOTICES": "677477e4bfe32e98fd57580035e53473",
"assets/FontManifest.json": "aa27ae11eb5e69d6fbff03ffbf634d42",
"assets/lib/localization/languages/en.json": "95a44a2a6d26362906cfbe5a3a061179",
"assets/lib/localization/languages/de.json": "d5a294fd5f26ab16063ce8ccae897a81",
"assets/lib/localization/languages/fr.json": "c3ec24b0930e7100582492a6e30e3f8e",
"assets/lib/localization/languages/nl.json": "81924d5135634c72949131260bdbc66f",
"assets/lib/localization/languages/hr.json": "af726bebc8e23f6f34644272aa9c563f",
"assets/lib/localization/languages/tr.json": "f097479eef605d99a1931031427e8732",
"assets/lib/localization/languages/id.json": "094d57f5687dcedbe1bf7631343b6756",
"assets/lib/localization/languages/pl.json": "75ef133c36488dd9435a0d05ce22735f",
"assets/lib/localization/languages/zh.json": "ae41327d814da2f91e136a47e9079be7",
"assets/lib/localization/languages/pt.json": "b59d5b8de1cdc7ba11fa55931136c08c",
"assets/lib/localization/languages/es.json": "54fac84f0962c511207636646e31cf18",
"assets/lib/localization/languages/sk.json": "1731a62bf85bdd485ee7154a2611dd7f",
"assets/lib/localization/languages/ar.json": "3832125bf3a6be06a0c91ef56a0377b3",
"assets/lib/application.json": "53178a8266c31ff0d06445fb44179eb2",
"assets/fonts/Source_Code_Pro/SourceCodePro-BlackItalic.ttf": "fb68d27992feaf97dab1e5640a6f5812",
"assets/fonts/Source_Code_Pro/SourceCodePro-Medium.ttf": "f621c504d70317ff13774e27d643ba21",
"assets/fonts/Source_Code_Pro/SourceCodePro-BoldItalic.ttf": "c8066b7adaa839e5f0590da2d34723be",
"assets/fonts/Source_Code_Pro/SourceCodePro-LightItalic.ttf": "ac76390ae8518be5c0a0bd1f3b088b4b",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLight.ttf": "cba7ccef6b4071f76245cc0c5e659aa9",
"assets/fonts/Source_Code_Pro/SourceCodePro-Black.ttf": "efa63de0d44af1e7de9e01a4467dd423",
"assets/fonts/Source_Code_Pro/SourceCodePro-MediumItalic.ttf": "0b54cce890a75c2227718eaf473068ba",
"assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBoldItalic.ttf": "6406c55397f0f20723d6b2c2f6515348",
"assets/fonts/Source_Code_Pro/SourceCodePro-Italic.ttf": "c088801620ae4d69924da74e879170a9",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLightItalic.ttf": "b98dab96118c3500d0e8c3f887fcfb26",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf": "a8d6f8bb989fc3c860ad2eeac21f9daa",
"assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Cousine/Cousine-Regular.ttf": "64a889644e439ac4806c8e41bc9d1c83",
"assets/fonts/Cousine/Cousine-BoldItalic.ttf": "1038b5579146b28e9e4dc98c8fc5d1d9",
"assets/fonts/Cousine/Cousine-Italic.ttf": "177a3d2157da07498e805683e8cdaa8d",
"assets/fonts/Cousine/Cousine-Bold.ttf": "06dae6a1a3247bd76125cfe3b3480557",
"assets/fonts/SulphurPoint/SulphurPoint-Light.ttf": "45985fd198cf37666bb19a61e15f429c",
"assets/fonts/SulphurPoint/SulphurPoint-Bold.ttf": "f7c4253323e6d736b886bd813230a5f1",
"assets/fonts/SulphurPoint/SulphurPoint-Regular.ttf": "fe32d30b047837c9d2af053e9f6539f9",
"assets/assets/images/people/subspace.png": "0951d9906bf56e0c894cdb8a6af132f6",
"assets/assets/images/people/vanzh.png": "b010c6f5739d6582e4dd0222ceb82d99",
"assets/assets/images/people/camden.jpeg": "b2deaec16dec8fed29fb9b9ce34ff028",
"assets/assets/images/people/fristover.png": "d77e781c46f9030f9fce4905c851f320",
"assets/assets/images/people/funeoz.jpeg": "d522359a4cebc56c1b010d045841842e",
"assets/assets/images/people/lars.jpeg": "9f6e9c8f4065e27be8610c33cddfaacc",
"assets/assets/images/people/horus.png": "0954704c21a5dd4b9e1c1d3002731d93",
"assets/assets/images/people/haru.jpeg": "8b9b2dc7e5860d2ed1dcbc6caf91e4f8",
"assets/assets/images/people/x7.jpeg": "0a7fb010e70ddeb807a6b0cd45ed89c1",
"assets/assets/images/people/hexa.png": "b1f67aa3920e9932326b941488c389e4",
"assets/assets/images/people/noah.jpeg": "c548542b5b181616bd48d4076e664b58",
"assets/assets/images/people/bleonard.png": "7a774ad7d57b711273cba62eeefb0b5e",
"assets/assets/images/people/faust.png": "85391c85d4fb7379905cd045ab1d5606",
"assets/assets/images/people/nobody.png": "8ac80de1e2063e5db0fdc2f682635a40",
"assets/assets/images/menu.png": "e824461dd4c3e943b4b1da1817290f73",
"assets/assets/images/dahliaOS/Logos/compiled/dahliaOS_logo_with_text.png": "f264be62148b7f8895a8bd261b4ec433",
"assets/assets/images/dahliaOS/Logos/compiled/dahliaOS_logo_whiteout.png": "fc5d033493393879d034a10b273a3325",
"assets/assets/images/dahliaOS/Logos/compiled/dahliaOS_logo.png": "02f1c9f097b0a80bf77544d0a382d990",
"assets/assets/images/dahliaOS/Logos/compiled/dahliaOS_logo_drop_shadow.png": "54676cb1528be16f652e4f86ef31ed52",
"assets/assets/images/dahliaOS/Logos/compiled/dahliaOS_logo_with_text_drop_shadow.png": "0c6120ceef62bf06fe14e7eb22df4019",
"assets/assets/images/Desktop/Wallpapers/Nature/mountain.jpg": "7fca0b04f5582bd15144f8ede952aa17",
"assets/assets/images/Desktop/Wallpapers/dahliaOS/Gradient_logo_wallpaper.png": "cc93d4e28412dbdab2608ff625a4492e",
"assets/assets/images/Desktop/Wallpapers/dahliaOS/Three_bubbles_wallpaper.png": "bc437cfc4c4d2cb8e036b9aaab065198",
"assets/assets/images/Desktop/Wallpapers/dahliaOS/dahliaOS_white_logo_pattern_wallpaper.png": "6493c5cf40d2b4f4edc55202ee94b5a7",
"assets/assets/images/Desktop/Wallpapers/dahliaOS/dahliaOS_white_wallpaper.png": "cb8d99e02029bd75eff508d3fdd56c37",
"assets/assets/images/icons/v2/compiled/social.png": "e0f4fcf882cc23ed646290fbfc859986",
"assets/assets/images/icons/v2/compiled/twitter.png": "4607476796cc93ca75cfeccf2661fd1a",
"assets/assets/images/icons/v2/compiled/debian.png": "527552dd24e4cd27bfb4be63b2c454c4",
"assets/assets/images/icons/v2/compiled/photos.png": "9b2ee870807ea18761ff4bf308897394",
"assets/assets/images/icons/v2/compiled/task.png": "548e313c465c5caf31cad9d574119016",
"assets/assets/images/icons/v2/compiled/software.png": "960cdf38b0daacbf2d3316355c3f78f1",
"assets/assets/images/icons/v2/compiled/reddit.png": "9b1ba56edec14b468ecf4b3913a7794d",
"assets/assets/images/icons/v2/compiled/telegram.png": "36218d3af50dbc1d0240879a5f966fc4",
"assets/assets/images/icons/v2/compiled/android.png": "27a703eacba2bbfed57346b32b7af9b1",
"assets/assets/images/icons/v2/compiled/disks.png": "b8c23e9bf62238d900b958540be4f236",
"assets/assets/images/icons/v2/compiled/logs.png": "e312999c04f678ff5941d66718ef6cbf",
"assets/assets/images/icons/v2/compiled/software-shared.png": "868fe8e3d80b189e934220391a09dfaa",
"assets/assets/images/icons/v2/compiled/discord.png": "103e593c79206b9cd16fef562cc7ac32",
"assets/assets/images/icons/v2/compiled/terminal.png": "524019d8d97ea6c4ccd3db664375e4da",
"assets/assets/images/icons/v2/compiled/notes.png": "5644e3fe7f2f7601a6afdba1f1e17b73",
"assets/assets/images/icons/v2/compiled/ubuntu.png": "dc5596b1ded46cc5b61f74b860e98964",
"assets/assets/images/icons/v2/compiled/grey-drag.png": "af96264233287efd9efbf4ee2954fc67",
"assets/assets/images/icons/v2/compiled/fuchsia.png": "687e3a9bac810885c97028229adf3ac2",
"assets/assets/images/icons/v2/compiled/settings.png": "d5be1c564f8564d8c0a6f86057b01f2a",
"assets/assets/images/icons/v2/compiled/authenticator.png": "35096977d24eb89d0c661b0956567642",
"assets/assets/images/icons/v2/compiled/wallpaper.png": "5d490931a734ec44fd88bdc9b947d9ab",
"assets/assets/images/icons/v2/compiled/credits.png": "8eb3c439b19df88fb7643c395bc983b2",
"assets/assets/images/icons/v2/compiled/note_mobile.png": "5bc75d1575688657c59eeab91631d473",
"assets/assets/images/icons/v2/compiled/root.png": "edb147b20b24112a578f11f4fbdd24f3",
"assets/assets/images/icons/v2/compiled/messages.png": "004c87d98d7fb5ed52f8d79898d88ae6",
"assets/assets/images/icons/v2/compiled/containers.png": "62d3d4953dc39c773e43fe24dd89c65a",
"assets/assets/images/icons/v2/compiled/facebook.png": "d54e509f31d051140eca9e8d7b34ec40",
"assets/assets/images/icons/v2/compiled/macos.png": "2799296e4d4831c96c2b1b205d0ae796",
"assets/assets/images/icons/v2/compiled/files.png": "6c5019286c21611abebc9e9b1086be03",
"assets/assets/images/icons/v2/compiled/phone.png": "de209128b7b3241f65b8b5c117c10190",
"assets/assets/images/icons/v2/compiled/instagram.png": "60ef178e1c7539c232abfad28d2bdaeb",
"assets/assets/images/icons/v2/compiled/help.png": "149ba5f0862946faea4d5744619ba607",
"assets/assets/images/icons/v2/compiled/calculator.png": "b5d2f4da128fd5a0eed0ed52a5ac9147",
"assets/assets/images/icons/v2/compiled/welcome-info.png": "cf9e894cfddbcd39a5efaf9f29186ba9",
"assets/assets/images/icons/v2/compiled/music.png": "91e7695e656f380f48df79ef8616b205",
"assets/assets/images/icons/v2/compiled/web.png": "a26b78a08fe2da40a81e3c837a60cede",
"assets/assets/images/icons/v2/compiled/discord.svg": "f8389ca1a741a115313bede9ac02e2c0",
"assets/assets/images/icons/v2/compiled/developer.png": "14f413a0c0ba35af4fe5bcc04ebf2820",
"assets/assets/images/icons/v2/compiled/github.png": "bd64ef0f18cf6b627dc8390a96aed2bd",
"assets/assets/images/icons/v2/compiled/theme.png": "1b065d813d384c82002793b1b92b0b85",
"assets/assets/images/icons/v2/compiled/clock.png": "81ca934d721ad96518209fd99b627908",
"assets/assets/images/icons/v2/compiled/Gmail-icon.png": "dfcbd586c56f73e343b25b3af12491c1",
"assets/AssetManifest.json": "bfbba6bb6f5f89bd8096e53999f9c87d",
"favicon.png": "02f1c9f097b0a80bf77544d0a382d990",
"index.html": "20f3c13e78780122d4267de27a041f0a",
"/": "20f3c13e78780122d4267de27a041f0a",
"manifest.json": "8ff5fe849411d088c5084cdf099d07cf",
"icons/Icon-512.png": "0bd5aff94e7ef56773d3cb06d74973be",
"icons/Icon-192.png": "16ad25f94af6006cb717fa5552eadcfc"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
