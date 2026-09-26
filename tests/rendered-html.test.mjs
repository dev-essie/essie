import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

let workerPromise;
async function render(path = '/') {
  workerPromise ??= import(new URL('../dist/server/index.js', import.meta.url).href);
  const { default: worker } = await workerPromise;
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: 'text/html' } }),
    { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} });
}

for (const [path, content] of [['/', 'hero-title'], ['/projects', 'Gofame 360'], ['/about', 'ABOUT'], ['/contact', 'CONTACT']]) {
  test(`renders ${path} with real portfolio content and navigation`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') ?? '', /text\/html/);
    const html = await response.text();
    assert.ok(html.includes(content));
    for (const href of ['/projects', '/about', '/contact']) assert.ok(html.includes(`href="${href}"`));
    assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/);
    assert.doesNotMatch(html, /<html[^>]*class="[^"]*\bdark\b/);
    assert.doesNotMatch(html, /matchMedia\(|localStorage\.getItem/);
  });
}

test('project images resolve to real local files when configured', async () => {
  const response = await render('/projects');
  const html = await response.text();
  for (const match of html.matchAll(/<img[^>]*\bsrc="(\/[^"?]+)[^"]*"/g)) {
    const bytes = await readFile(new URL(`../public${match[1]}`, import.meta.url));
    assert.ok(bytes.length > 0, `Missing image: ${match[1]}`);
  }
});

test('favicon is a valid 256px PNG', async () => {
  const png = await readFile(new URL('../public/favicon.png', import.meta.url));
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 256);
  assert.equal(png.readUInt32BE(20), 256);
});
