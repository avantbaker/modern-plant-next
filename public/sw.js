/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
	const singleRequire = (name) => {
		if (name !== 'require') {
			name = name + '.js';
		}
		let promise = Promise.resolve();
		if (!registry[name]) {
			promise = new Promise(async (resolve) => {
				if ('document' in self) {
					const script = document.createElement('script');
					script.src = name;
					document.head.appendChild(script);
					script.onload = resolve;
				} else {
					importScripts(name);
					resolve();
				}
			});
		}
		return promise.then(() => {
			if (!registry[name]) {
				throw new Error(`Module ${name} didn’t register its module`);
			}
			return registry[name];
		});
	};

	const require = (names, resolve) => {
		Promise.all(names.map(singleRequire)).then((modules) =>
			resolve(modules.length === 1 ? modules[0] : modules)
		);
	};

	const registry = {
		require: Promise.resolve(require),
	};

	self.define = (moduleName, depsNames, factory) => {
		if (registry[moduleName]) {
			// Module is already loading or loaded.
			return;
		}
		registry[moduleName] = Promise.resolve().then(() => {
			let exports = {};
			const module = {
				uri: location.origin + moduleName.slice(1),
			};
			return Promise.all(
				depsNames.map((depName) => {
					switch (depName) {
						case 'exports':
							return exports;
						case 'module':
							return module;
						default:
							return singleRequire(depName);
					}
				})
			).then((deps) => {
				const facValue = factory(...deps);
				if (!exports.default) {
					exports.default = facValue;
				}
				return exports;
			});
		});
	};
}
define('./sw.js', ['./workbox-b90066a8'], function (workbox) {
	'use strict';

	/**
	 * Welcome to your Workbox-powered service worker!
	 *
	 * You'll need to register this file in your web app.
	 * See https://goo.gl/nhQhGp
	 *
	 * The rest of the code is auto-generated. Please don't update this file
	 * directly; instead, make changes to your Workbox build configuration
	 * and re-run your build process.
	 * See https://goo.gl/2aRDsh
	 */

  workbox.precacheAndRoute([{
    "url": "/_next/static/runtime/amp.js",
    "revision": "448564b2ecdefde43bd36b481b74be5f"
  }, {
    "url": "/_next/static/runtime/amp.js.map",
    "revision": "151ff324f19c73a7d9934f1e640c6656"
  }, {
    "url": "/_next/static/runtime/main.js",
    "revision": "3c5a6eb6b708e15916854be9e9cf284a"
  }, {
    "url": "/_next/static/runtime/main.js.map",
    "revision": "13cacd9e418debf8008d897b81e981e2"
  }, {
    "url": "/_next/static/runtime/polyfills.js",
    "revision": "cf6f4b12f4634f8f79378d41f3a855a4"
  }, {
    "url": "/_next/static/runtime/polyfills.js.map",
    "revision": "82dca635a629d8ab38c3ad85b2ad65a2"
  }, {
    "url": "/_next/static/runtime/react-refresh.js",
    "revision": "57d6b6dd46444111cc6c2cb191ec72bc"
  }, {
    "url": "/_next/static/runtime/react-refresh.js.map",
    "revision": "3eefcd56d3f5bfcc8b7c33d935f42689"
  }, {
    "url": "/_next/static/runtime/webpack.js",
    "revision": "2bc5037a1f59c248a962afb303cd4c7e"
  }, {
    "url": "/_next/static/runtime/webpack.js.map",
    "revision": "f27e3651e1b846b4de18e6383d6ea787"
  }], {
    "ignoreURLParametersMatching": [/ts/]
  });
  workbox.cleanupOutdatedCaches();

	workbox.precacheAndRoute(
		[
			{
				url: '/_next/static/runtime/amp.js',
				revision: '2402d9faa492321238c6fb742a20fb51',
			},
			{
				url: '/_next/static/runtime/amp.js.map',
				revision: '340448f78a90c6e7903b07bcb0c6956f',
			},
			{
				url: '/_next/static/runtime/main.js',
				revision: '3c5a6eb6b708e15916854be9e9cf284a',
			},
			{
				url: '/_next/static/runtime/main.js.map',
				revision: 'd123fa7d2b46ebc9f458cfe08cffeade',
			},
			{
				url: '/_next/static/runtime/polyfills.js',
				revision: 'cf6f4b12f4634f8f79378d41f3a855a4',
			},
			{
				url: '/_next/static/runtime/polyfills.js.map',
				revision: '82dca635a629d8ab38c3ad85b2ad65a2',
			},
			{
				url: '/_next/static/runtime/react-refresh.js',
				revision: '57d6b6dd46444111cc6c2cb191ec72bc',
			},
			{
				url: '/_next/static/runtime/react-refresh.js.map',
				revision: '3eefcd56d3f5bfcc8b7c33d935f42689',
			},
			{
				url: '/_next/static/runtime/webpack.js',
				revision: 'e06970a12e8e8f20511254c1981013e0',
			},
			{
				url: '/_next/static/runtime/webpack.js.map',
				revision: '15b1195acc738199e7f8c4bcb79d1f70',
			},
		],
		{
			ignoreURLParametersMatching: [/ts/],
		}
	);
	workbox.cleanupOutdatedCaches();
});
//# sourceMappingURL=sw.js.map
