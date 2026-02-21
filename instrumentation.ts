/**
 * Node.js v25+ exposes a global `localStorage`. When `--localstorage-file` is
 * missing or invalid, it can be a broken proxy where `getItem` is undefined,
 * causing "localStorage.getItem is not a function" during SSR.
 * See https://github.com/nodejs/node/issues/60303
 *
 * Remove the broken global so code that checks for localStorage will correctly
 * skip using it on the server.
 */
if (typeof globalThis !== 'undefined') {
  const storage = (globalThis as unknown as { localStorage?: unknown }).localStorage;
  if (storage != null && typeof (storage as { getItem?: unknown }).getItem !== 'function') {
    (globalThis as unknown as { localStorage: undefined }).localStorage = undefined;
  }
}

export async function register() {
  // Next.js requires a register export. Runs once at server startup.
}
