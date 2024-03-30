// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lv5og":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "298b2e9aa0e831e4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"8yaV8":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$0606 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$0606.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _constant = require("../Utils/constant");
var _useOnlineStatus = require("../Utils/useOnlineStatus");
var _useOnlineStatusDefault = parcelHelpers.interopDefault(_useOnlineStatus);
var _restaurantCard = require("./RestaurantCard");
var _restaurantCardDefault = parcelHelpers.interopDefault(_restaurantCard);
var _userContext = require("../Utils/userContext");
var _userContextDefault = parcelHelpers.interopDefault(_userContext);
var _shimmerHome = require("../Shimmer/ShimmerHome");
var _shimmerHomeDefault = parcelHelpers.interopDefault(_shimmerHome);
var _s = $RefreshSig$();
const Body = ()=>{
    _s();
    const [listofRestarant, setlistofRestarant] = (0, _react.useState)([]);
    const [searchText, setsearchText] = (0, _react.useState)("");
    const [filterList, setfilterList] = (0, _react.useState)([]);
    const [foodlist, setfoodlist] = (0, _react.useState)([]);
    //console.log(listofRestarant);
    (0, _react.useEffect)(()=>{
        fetchData();
        foodList();
    }, []);
    const fetchData = async ()=>{
        const data = await fetch((0, _constant.REST_URL));
        const json = await data.json();
        console.log(json);
        // console.log(REST_URL);
        setlistofRestarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const foodList = async ()=>{
        const list = await fetch((0, _constant.REST_URL));
        const json1 = await list.json();
        console.log(json1);
        const items = json1?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        // Map over the array of items and create a list of JSX elements
        setfoodlist(items);
    };
    const handleFoodScrollLeft = ()=>{
        const foodCategory = document.querySelector(".food-category");
        foodCategory.scrollLeft -= getScrollAmount();
    };
    const handleFoodScrollRight = ()=>{
        const foodCategory = document.querySelector(".food-category");
        foodCategory.scrollLeft += getScrollAmount();
    };
    const getScrollAmount = ()=>{
        // Define different scroll amounts based on screen size
        if (window.innerWidth < 640) return 100; // For smaller screens, scroll by 100 pixels
        else return 250; // For larger screens, scroll by 250 pixels
    };
    const onlineStatus = (0, _useOnlineStatusDefault.default)();
    if (onlineStatus === false) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
        children: "Looks like you are offline, Check your internet connection"
    }, void 0, false, {
        fileName: "src/components/Body.js",
        lineNumber: 65,
        columnNumber: 10
    }, undefined);
    const { loggedInUser, setuserName } = (0, _react.useContext)((0, _userContextDefault.default));
    return listofRestarant.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerHomeDefault.default), {}, void 0, false, {
        fileName: "src/components/Body.js",
        lineNumber: 69,
        columnNumber: 3
    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                    className: "text-xl text-black font-bold mb-2",
                    children: [
                        "What's on your mind?",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex justify-end",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    onClick: handleFoodScrollRight,
                                    className: "text-5xl text-zinc-500",
                                    children: "\u2192"
                                }, void 0, false, {
                                    fileName: "src/components/Body.js",
                                    lineNumber: 76,
                                    columnNumber: 7
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    onClick: handleFoodScrollLeft,
                                    className: "text-5xl text-zinc-500",
                                    children: "\u2190"
                                }, void 0, false, {
                                    fileName: "src/components/Body.js",
                                    lineNumber: 81,
                                    columnNumber: 7
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Body.js",
                            lineNumber: 75,
                            columnNumber: 6
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Body.js",
                    lineNumber: 73,
                    columnNumber: 5
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Body.js",
                lineNumber: 72,
                columnNumber: 4
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "food-category overflow-x-scroll scroll-smooth  w-[1500px]",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                    className: "flex mt-1",
                    children: foodlist.map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex-shrink-0 w-36 sm:w-48 md:w-56 p-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        className: " text-black",
                                        src: `${(0, _constant.IMG_CAROUSEL)}${item.imageId}`,
                                        alt: item.name
                                    }, void 0, false, {
                                        fileName: "src/components/Body.js",
                                        lineNumber: 94,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "src/components/Body.js",
                                        lineNumber: 99,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Body.js",
                                lineNumber: 93,
                                columnNumber: 8
                            }, undefined)
                        }, item.id, false, {
                            fileName: "src/components/Body.js",
                            lineNumber: 92,
                            columnNumber: 7
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/components/Body.js",
                    lineNumber: 90,
                    columnNumber: 5
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Body.js",
                lineNumber: 89,
                columnNumber: 4
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "filter flex",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "search m-4 p-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                type: "text",
                                className: " border  border-solid border-black ",
                                value: searchText,
                                onChange: (e)=>{
                                    setsearchText(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "src/components/Body.js",
                                lineNumber: 108,
                                columnNumber: 6
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: " bg-lime-600 px-3 py-1.5 rounded-md m-4 text-gray-50",
                                onClick: ()=>{
                                    //filtr and update ui
                                    // console.log(searchText)
                                    const filterList = listofRestarant.filter((rest)=>rest.info.name.toLowerCase().includes(searchText));
                                    setfilterList(filterList);
                                },
                                children: "Search"
                            }, void 0, false, {
                                fileName: "src/components/Body.js",
                                lineNumber: 115,
                                columnNumber: 6
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Body.js",
                        lineNumber: 107,
                        columnNumber: 5
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "search p-4 m-4 flex items-center  ",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "px-3.5 py-2 bg-indigo-900 rounded-lg text-gray-50 ",
                            onClick: ()=>{
                                const filterList = listofRestarant.filter((res)=>res.info.avgRating > 4.2);
                                setlistofRestarant(filterList);
                            },
                            children: "Filter"
                        }, void 0, false, {
                            fileName: "src/components/Body.js",
                            lineNumber: 130,
                            columnNumber: 6
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Body.js",
                        lineNumber: 129,
                        columnNumber: 5
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "search p-4 m-4 flex items-center   ",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                className: "p-1",
                                children: "UserName:"
                            }, void 0, false, {
                                fileName: "src/components/Body.js",
                                lineNumber: 142,
                                columnNumber: 6
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                className: "border border-black p-1",
                                onChange: (e)=>setuserName(e.target.value)
                            }, void 0, false, {
                                fileName: "src/components/Body.js",
                                lineNumber: 143,
                                columnNumber: 6
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Body.js",
                        lineNumber: 141,
                        columnNumber: 5
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Body.js",
                lineNumber: 106,
                columnNumber: 4
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "text-2xl text-black font-bold",
                children: "Top Restaurants in Hyderabad"
            }, void 0, false, {
                fileName: "src/components/Body.js",
                lineNumber: 150,
                columnNumber: 4
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-wrap",
                children: filterList?.map((restaurant)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        className: "no-underline",
                        to: "/restaurant/" + restaurant.info.id,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantCardDefault.default), {
                            resData: restaurant
                        }, void 0, false, {
                            fileName: "src/components/Body.js",
                            lineNumber: 159,
                            columnNumber: 7
                        }, undefined)
                    }, restaurant.info.id, false, {
                        fileName: "src/components/Body.js",
                        lineNumber: 155,
                        columnNumber: 6
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Body.js",
                lineNumber: 153,
                columnNumber: 4
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Body.js",
        lineNumber: 71,
        columnNumber: 3
    }, undefined);
};
_s(Body, "KYCIVipXhEykpX7oOZNv6b0Xp4o=", false, function() {
    return [
        (0, _useOnlineStatusDefault.default)
    ];
});
_c = Body;
exports.default = Body;
var _c;
$RefreshReg$(_c, "Body");

  $parcel$ReactRefreshHelpers$0606.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","../Utils/constant":"Izjah","../Utils/useOnlineStatus":"bxLMZ","./RestaurantCard":"bMboU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","../Utils/userContext":"b31OD","../Shimmer/ShimmerHome":"gf89u"}],"bMboU":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ffb1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ffb1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _constant = require("../Utils/constant");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const RestaurantCard = (props)=>{
    const { resData } = props;
    // Ensure resData is defined
    const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = resData.info;
    const imgsrc = `${(0, _constant.CDN_URL)}${cloudinaryImageId}`;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "m-3 p-3 w-[190px] rounded-lg bg-slate-100 hover:bg-gray-300",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "grid grid-flow-row",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "'w-80 h-56 card relative rounded-xl'",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "rounded-xl w-full h-full object-cover",
                        src: imgsrc,
                        alt: "restaurant image"
                    }, void 0, false, {
                        fileName: "src/components/RestaurantCard.js",
                        lineNumber: 13,
                        columnNumber: 6
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/RestaurantCard.js",
                    lineNumber: 12,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "ml-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "font-semibold text-lg text-black font-serif",
                            children: name
                        }, void 0, false, {
                            fileName: "src/components/RestaurantCard.js",
                            lineNumber: 21,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "font-Bold flex gap-1 text-color-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    width: "20",
                                    height: "22",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    role: "img",
                                    "aria-hidden": "true",
                                    strokecolor: "rgba(2, 6, 12, 0.92)",
                                    fillcolor: "rgba(2, 6, 12, 0.92)",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                            cx: "10",
                                            cy: "10",
                                            r: "9",
                                            fill: "url(#StoreRating20_svg__paint0_linear_32982_71567)"
                                        }, void 0, false, {
                                            fileName: "src/components/RestaurantCard.js",
                                            lineNumber: 34,
                                            columnNumber: 8
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            d: "M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "src/components/RestaurantCard.js",
                                            lineNumber: 39,
                                            columnNumber: 8
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("defs", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("linearGradient", {
                                                id: "StoreRating20_svg__paint0_linear_32982_71567",
                                                x1: "10",
                                                y1: "1",
                                                x2: "10",
                                                y2: "19",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("stop", {
                                                        stopColor: "#21973B"
                                                    }, void 0, false, {
                                                        fileName: "src/components/RestaurantCard.js",
                                                        lineNumber: 50,
                                                        columnNumber: 10
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("stop", {
                                                        offset: "1",
                                                        stopColor: "#128540"
                                                    }, void 0, false, {
                                                        fileName: "src/components/RestaurantCard.js",
                                                        lineNumber: 51,
                                                        columnNumber: 10
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/RestaurantCard.js",
                                                lineNumber: 43,
                                                columnNumber: 9
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/RestaurantCard.js",
                                            lineNumber: 42,
                                            columnNumber: 8
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/RestaurantCard.js",
                                    lineNumber: 25,
                                    columnNumber: 7
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: " text-base text-black",
                                    children: [
                                        avgRating,
                                        " \u2022 "
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/RestaurantCard.js",
                                    lineNumber: 55,
                                    columnNumber: 7
                                }, undefined),
                                sla.slaString
                            ]
                        }, void 0, true, {
                            fileName: "src/components/RestaurantCard.js",
                            lineNumber: 24,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "font-Thin text-gray-500 overflow-x-hidden overflow-y-hidden ",
                            children: cuisines.join(", ")
                        }, void 0, false, {
                            fileName: "src/components/RestaurantCard.js",
                            lineNumber: 58,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "font-GrotThin text-color-4 tracking-tight text-base",
                            children: areaName
                        }, void 0, false, {
                            fileName: "src/components/RestaurantCard.js",
                            lineNumber: 61,
                            columnNumber: 6
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/RestaurantCard.js",
                    lineNumber: 20,
                    columnNumber: 5
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/RestaurantCard.js",
            lineNumber: 11,
            columnNumber: 4
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/RestaurantCard.js",
        lineNumber: 10,
        columnNumber: 3
    }, undefined);
};
_c = RestaurantCard;
exports.default = RestaurantCard;
var _c;
$RefreshReg$(_c, "RestaurantCard");

  $parcel$ReactRefreshHelpers$ffb1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../Utils/constant":"Izjah","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gf89u":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$382c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$382c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _indexCss = require("../../index.css");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ShimmerHome = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "mt-20",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "carousel-loading h-80 flex justify-center flex-col gap-7",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex items-center justify-center relative",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "spinner"
                                }, void 0, false, {
                                    fileName: "src/Shimmer/ShimmerHome.js",
                                    lineNumber: 9,
                                    columnNumber: 7
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    className: "absolute w-10 h-10 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2",
                                    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa",
                                    alt: "carousel"
                                }, void 0, false, {
                                    fileName: "src/Shimmer/ShimmerHome.js",
                                    lineNumber: 10,
                                    columnNumber: 7
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 8,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "sm:text-2xl text-xl font-ProximaNovaThin",
                            children: "Looking for great food near you ..."
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 16,
                            columnNumber: 6
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Shimmer/ShimmerHome.js",
                    lineNumber: 7,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex items-center justify-center md:flex-row flex-col md:justify-between mb-5 pl-10 pr-10 pt-10 container mx-auto gap-6",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "w-[100px] bg-gray-400 h-[50px] rounded-3xl animate"
                                }, void 0, false, {
                                    fileName: "src/Shimmer/ShimmerHome.js",
                                    lineNumber: 23,
                                    columnNumber: 7
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "w-[100px] bg-gray-400 h-[50px] rounded-3xl animate"
                                }, void 0, false, {
                                    fileName: "src/Shimmer/ShimmerHome.js",
                                    lineNumber: 24,
                                    columnNumber: 7
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "w-[100px] bg-gray-400 h-[50px] rounded-3xl animate"
                                }, void 0, false, {
                                    fileName: "src/Shimmer/ShimmerHome.js",
                                    lineNumber: 25,
                                    columnNumber: 7
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 22,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "w-[250px] bg-gray-400 h-[50px] rounded-3xl animate"
                            }, void 0, false, {
                                fileName: "src/Shimmer/ShimmerHome.js",
                                lineNumber: 28,
                                columnNumber: 7
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 27,
                            columnNumber: 6
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Shimmer/ShimmerHome.js",
                    lineNumber: 21,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex flex-wrap justify-center items-center gap-10 mt-10 container mx-auto",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 33,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 34,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 35,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 36,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 37,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 38,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 39,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 40,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 41,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 42,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 43,
                            columnNumber: 6
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[330px] h-[250px] rounded-xl bg-gray-400 animate"
                        }, void 0, false, {
                            fileName: "src/Shimmer/ShimmerHome.js",
                            lineNumber: 44,
                            columnNumber: 6
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Shimmer/ShimmerHome.js",
                    lineNumber: 32,
                    columnNumber: 5
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/Shimmer/ShimmerHome.js",
            lineNumber: 6,
            columnNumber: 4
        }, undefined)
    }, void 0, false);
};
_c = ShimmerHome;
exports.default = ShimmerHome;
var _c;
$RefreshReg$(_c, "ShimmerHome");

  $parcel$ReactRefreshHelpers$382c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../../index.css":"giGSC","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"giGSC":[function() {},{}]},["lv5og","1xC6H"], null, "parcelRequire2f39")

//# sourceMappingURL=Body.a0e831e4.js.map
