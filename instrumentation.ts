/**
 * Node.js v22+ exposes a global `localStorage` (experimental Web Storage).
 * Two problems with it on the server:
 *
 * 1. Accessing the global emits `ExperimentalWarning: localStorage is not
 *    available because --localstorage-file was not provided`.
 * 2. When `--localstorage-file` is missing/invalid it can be a broken proxy
 *    where `getItem` is undefined, causing "localStorage.getItem is not a
 *    function" during SSR.
 *    See https://github.com/nodejs/node/issues/60303
 *
 * Fix: remove the global without ever invoking its getter (invoking it is what
 * triggers the warning). Reading the property descriptor is side-effect free,
 * and the property is configurable, so we can replace it with `undefined`.
 * Code that checks for `localStorage` will then correctly skip it on the server.
 */
if (typeof globalThis !== 'undefined') {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  if (descriptor?.get || descriptor?.set) {
    Object.defineProperty(globalThis, 'localStorage', {
      value: undefined,
      configurable: true,
      writable: true,
      enumerable: false,
    });
  }
}

export async function register() {
  // Next.js requires a register export. Runs once at server startup.
}
