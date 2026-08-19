import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';

const pages = [
  [
    'English',
    new URL('../build/getting-started/installation/index.html', import.meta.url),
  ],
  [
    'Simplified Chinese',
    new URL(
      '../build/zh-Hans/getting-started/installation/index.html',
      import.meta.url,
    ),
  ],
];

const getNavbarLogoAnchor = (html) => {
  // Read the rendered anchor so the test covers the SSR contract, not source shape.
  const anchor = html.match(
    /<a\b[^>]*\bclass="[^"]*\bnavbar__brand\b[^"]*"[^>]*>/,
  )?.[0];

  assert.ok(anchor, 'SSR output must contain the navbar logo anchor');

  return anchor;
};

const getAttribute = (element, attribute) => {
  const escapedAttribute = attribute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const value = element.match(
    new RegExp(`(?:^|\\s)${escapedAttribute}="([^"]+)"`),
  )?.[1];

  return value;
};

for (const [locale, page] of pages) {
  test(`${locale} SSR navbar logo links to the current origin root`, async () => {
    const html = await readFile(page, 'utf8');
    const anchor = getNavbarLogoAnchor(html);
    const href = getAttribute(anchor, 'href');
    assert.ok(href, 'SSR navbar logo anchor must have an href');

    assert.equal(href, '/');
  });

  test(`${locale} navbar logo uses the current browsing context`, async () => {
    const html = await readFile(page, 'utf8');
    const anchor = getNavbarLogoAnchor(html);
    const target = getAttribute(anchor, 'target');

    assert.ok(target === undefined || target === '_self');
  });
}
