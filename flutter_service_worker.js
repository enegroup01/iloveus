'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e7f22703d2bf4b5f3d6a7ff1648c9674",
"index.html": "ec02978f853675e7089fe870477eac4c",
"/": "ec02978f853675e7089fe870477eac4c",
"main.dart.js": "d67f7a7398f3f1b336c9395906ecc318",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"README.md": "27b8e3d456c8b0a9af1ad4f3b36b0f3e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "393930b4d125a494c2eca3b86a1e01a6",
".git/config": "21d9f92dba7536e80325710695a712a7",
".git/objects/0d/9e47b4744c7a893ac9db78e3c30b2e75cf57e1": "d9f01a888c7171873e2fd6a3a3051fe1",
".git/objects/0d/54a8beeeebab2da50ecdbea98b9e74701beab7": "d37d2e36e5b84db3981b56633e804957",
".git/objects/50/16432271ebc498dad4e986531308a0167dd87b": "b6baaa20fed5129e11b3d0419171bf35",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/93/51e0dc0c2482d93c20511fa583e91c9cc20827": "6932ca687b9392d76c1dc6d14d16fbd9",
".git/objects/0e/f9b389cc945880a29744bbb64aee19b87b25d4": "f76b5c259ef71ca26da20b2ccab51c5c",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/5a/ba3bb438284c3186aaf1d59d13fc2413ed61ef": "a7e7092ab0781869350ca806556bcf32",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/a4/2ce31eaceb0655e1b5efc1e3d4d343fb788de9": "8451790c3179bbbb3df6a9821de3fecd",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/d0/69c2076f6905bd03c115e5dfb4af597d8a4c49": "0b9e9edd4b647f1c97cdd58d48259bd7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/c7/438774635fddfdff802380ef8f68d25b0aab70": "918818debb4fd1f1a88f9e84bbd62032",
".git/objects/f2/2991a1d9ffbf3c301e03114ef4d80b6d71d3a7": "75469ef4ab3b3bcc89c59115ae0bded2",
".git/objects/f5/06e62b0ee849090a82197bbd8bb5a514117b2c": "6a8638933498e3fde9b2ec36dfe1c979",
".git/objects/cf/8a58484163cffe77d35acd58d3f80e7a3bc36c": "d5345fa643250ad899a1dde549a17ff1",
".git/objects/ca/0c2a5f8a223ddcfdcef48a99063549176422f6": "21cbc68baa3f416b4440a6c297b2f5d2",
".git/objects/fe/85ab0593d0a5fc4d0f74400a64d9315c5e80a8": "4376ac0e9791d8a068557cf61a05aa4d",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7b/941e92002690101a658a69992d5e3205b56aae": "367e159b5bf5b89c277719b9c99797bd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/e8ca4df33423e2ba70d9269e190b3a54b3af0e": "0e21a9cb52aa906fb01672d90515545d",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/9f/181555878c00ef39189b8a272a617684637854": "5c8cf8001c1b479e8bc22ea4de250183",
".git/objects/38/a9b733b82b006907ec3252682d8c57ea41b914": "a128cd724ed1a25b584dd94f3aac3819",
".git/objects/9a/1964dc9fe6080a24c52a00bde578cc5393bb82": "88bde564fae2c115e48303559cfac35b",
".git/objects/65/4110495e9901c050eafc87719e973ef5736fc0": "cd3c63ca6fbed600dba30e3f55f5e167",
".git/objects/30/da4eafc883561d93302f3bec803bd82bcc3a58": "508867f7d0bd39e13a2fc20f46b6b6fa",
".git/objects/37/81b0ecc07bcd5cc40f01fa27ee1a22dbb3bc78": "1c584dd1f483f4b40373ee55d6de8c2a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/06/afc227cd2465c66f5cf98bd56a300716715a44": "f586b8061b9cd8e8c9e6585f8c5106b8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/bf/e761781adbae678f5081f2305df8df1832094b": "07bae5345b16db395c4f17dfca4efcbf",
".git/objects/a7/01b7df32b7a7660fececf94b767b4f639dc5ed": "51f38ac0465318bfdcca836e6a7b52b1",
".git/objects/b8/abd06ef5f3ff7b88d4ae8d726599e96c20689b": "579979fcb68109e9de3e158d88ee96cc",
".git/objects/b6/28d7f01bab2c56f96388a521448f249ee37e08": "cd4b597b29eface8f14cf3446cd6a233",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/25a1c16c2b33367eed7eb2d74f1c758548514f": "9da29e88643083999286ec62fda78d84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d05aa6f8068abbeb15439d063e4ccb777a2471": "b8a5ebc24e06677ea4dc4c0d9cafa5e2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e5211bd289346b38f389ce721d900820669c86": "81ff5535a911dae9dbec47c64b5f136e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/579107fd11391f41c206d7d929c41a320a6bcb": "6e2b87ad46d06c9143899773e3c36570",
".git/objects/cd/b7dafc9a291b8c184adaddc8cb1fbc4d0797d5": "b2a866de9050897e10c03fd1750ee0ff",
".git/objects/e8/1679ea1ea4a075ac31aee369f239ff4e73f410": "aaeb44d79094a81833b87491e13f9f86",
".git/objects/c2/99d05d930e7bb523af0b6dd590eb644ab1fcbb": "c9b02e792f98172f051d65f64f0aef59",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/f1/f04c9bb937d52cf5b2eba9cd1484cf25519035": "727544b3287767002cbc824d043460f9",
".git/objects/cb/8609bffb5b16f1408727f553fc6c41a30b37af": "aed004c37df44c0c29d1279ffd439ba5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/c8daa7eb3a085d3a98d11155012bff0c3b1f5d": "85f9ed69d15c184b1da54f6ee035eea7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/2f215ac50439f0022ae379cd79f8b96890f225": "ab42c061b874683a93d60fed5bd1b5c4",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/15/a5578e3f9b8dee97fab4a9c064d512aea5519f": "85542fc7358a3cf9dc6335d1db2e7c2d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/1c/a11404a6972ddb84a168a5993d2df290434c37": "bd727ba47f7f040da675e7a879a4e70f",
".git/objects/82/f64206d304db4715c15d33ca42504d64f560f5": "a5c445db8f4c5135c732c488d495bdfb",
".git/objects/40/4ad8b927f8f2329faf4c3612608237182549c7": "60c3e4becc638d976210c7d4382d3875",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/2b/ea9ece05d362d56fc52c02d589ee877810b692": "03092776c6f96205c9833c91b40aac1e",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/8b/f8a124244d03c0839d8dc1874e3386ff26ee3b": "4bb8b0392d8f46a1ccf11c96b37357b0",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/7f/6c8f1a68b9c2d694953dc8176adb0d3ee6eeb2": "29a6c2d8f14ef89b56a6b0bf241b3600",
".git/objects/14/44a6f74abcc6a9687eca1978bf3dad109f2bda": "bca1817e002ccc37d9b9da5caf4df976",
".git/objects/22/06ba07b528e28a89925940b4e0ff73089060a9": "0886c58ce5e2a599fd76d3dd08fee5d2",
".git/objects/25/06f7a5deb7e6287e2e6b172c9c77eb77ab7810": "9bf83b0e114f999099fcc475c92f0870",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca6abcda8b37a19cab04a9f416245179",
".git/logs/refs/heads/main": "cb386723d1356bccaa18ba71ca3843c6",
".git/logs/refs/remotes/origin/main": "66620052fdaf8451082061a6317d1ea3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "afe39f2a25f7342d1900857449138945",
".git/refs/remotes/origin/main": "afe39f2a25f7342d1900857449138945",
".git/index": "6016367fde4bad0ae64bec9e5b160136",
".git/COMMIT_EDITMSG": "41d968afbb66209b51749fe244222760",
"assets/AssetManifest.json": "56a33b720c1ffa31948eb5c92fca873a",
"assets/NOTICES": "e2a9e35758b61c549061957bef0e5667",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
