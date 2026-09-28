---
name: sveltia-i18n
description: Use when adding internationalization to a Svelte or SvelteKit app with the sveltia-i18n library (`@sveltia/i18n`) — a Svelte 5 runes-based i18n library that uses Unicode MessageFormat 2 (MF2) for message syntax instead of ICU MessageFormat 1 or ad hoc placeholder formats. Distinct from [[svelte-programming]] (the framework itself) and [[unicode-messageformat]] (the message syntax it relies on).
---

# Sveltia I18n

[Sveltia I18n](https://github.com/sveltia/sveltia-i18n) (`@sveltia/i18n`) is
an internationalization library for Svelte, positioned as a successor to
the older `svelte-i18n`. Its defining choice: messages are written in
[[unicode-messageformat]] (MF2) syntax rather than ICU MessageFormat 1 or
plain string interpolation — see [[unicode-messageformat]] for the message
syntax itself (plurals, selection, `.match`, functions); this skill covers
wiring that syntax into a Svelte app.

## Install

```sh
pnpm add @sveltia/i18n
```

## Setup: init, register, load

```js
import { init, register, waitLocale } from '@sveltia/i18n';

register('en-US', () =>
  import('./locales/en-US.yaml?raw').then((m) => parseYaml(m.default)),
);
register('fr', () =>
  import('./locales/fr.yaml?raw').then((m) => parseYaml(m.default)),
);

init({
  fallbackLocale: 'en-US',
  formats: {
    number: { EUR: { style: 'currency', currency: 'EUR' } },
  },
});

await waitLocale();
```

`register()` takes a locale code and an async loader — lazy-load message
files per locale instead of bundling every locale up front. `addMessages()`
is the synchronous alternative for messages already in memory (flat
`'field.name'` keys or nested objects both work).

## SvelteKit integration

Detect and set the locale client-side, in a `+layout.js` guarded by
`browser` — not on the server:

```js
import { browser } from '$app/environment';
import { locale, getLocaleFromNavigator, waitLocale } from '@sveltia/i18n';

export const load = async () => {
  if (browser) await locale.set(getLocaleFromNavigator());
  await waitLocale();
};
```

**SSR caveat:** locale state is a module-level singleton. Setting it from
server-side load code in a SvelteKit SSR deployment risks leaking one
request's locale into a concurrent request under load — the library's own
docs call this unsafe in high-traffic environments. Prefer client-side
detection, an `ssr = false` route, or a static adapter over resolving
locale on the server.

Other detection helpers: `getLocaleFromQueryString()`,
`getLocaleFromPathname()`, `getLocaleFromHostname()`, `getLocaleFromHash()`
— chain them (query string, then path, then navigator) for a fallback
strategy rather than relying on just one signal.

## Formatting messages

```js
import { _, t, date, number, locale } from '@sveltia/i18n';

_('greeting', { values: { name: 'Alice' } });   // MF2: 'Hello, {$name}!'
_('notifications', { values: { count: 3 } });   // MF2 .match on $count

date(new Date(), { format: 'long' });
number(1234.5, { format: 'EUR' });              // uses the `EUR` named format from init()

await locale.set('fr');
```

`_` and `t` are aliases for the same message-formatting function. `locale`
is a reactive object — read the active locale as `locale.current`, change
it with `locale.set(value)` — not a store you subscribe to with `$locale`,
since the library uses Svelte 5 runes internally rather than Svelte's
store contract.

`isRTL(localeCode)` reports script direction; the library keeps
`document.documentElement.lang` and `dir` in sync with the active locale
automatically, so don't hand-manage those attributes alongside it.

## Message files are MF2, not plain strings

Every message value is parsed as an [[unicode-messageformat]] message, so
even a message with no placeholders still follows MF2's escaping rules
(literal `{`, `}`, and `\` need escaping), and a message that looks like a
plain string with `{count}` in it is not valid MF2 — variables are
`{$count}`, not `{count}`. A plural message needs `.input`/`.match`:

```yaml
notifications: |
  .input {$count :integer}
  .match $count
  0   {{You have no notifications.}}
  one {{You have {$count} notification.}}
  *   {{You have {$count} notifications.}}
```

## Common pitfalls

- **Porting `svelte-i18n` message files unchanged.** `svelte-i18n` uses
  ICU MessageFormat 1; sveltia-i18n requires MF2. `{count, plural, one {...}
  other {...}}` (ICU) is not valid MF2 — it needs rewriting as `.input` +
  `.match` (see [[unicode-messageformat]]).
- **Subscribing to `locale` with a `$` prefix** as if it were a Svelte
  store. It's a runes-based reactive object — use `locale.current` and
  `locale.set(...)`.
- **Setting locale in server `load` functions in an SSR deployment.**
  Singleton locale state can leak across concurrent requests; keep locale
  resolution client-side per the SSR caveat above.
- **Writing `{count}` instead of `{$count}`** in a message string — MF2
  variable references always have the `$` sigil.

## Learn more

- [sveltia-i18n on GitHub](https://github.com/sveltia/sveltia-i18n)
- [[unicode-messageformat]] for the MF2 syntax used by every message in this library.
- [[svelte-programming]] for Svelte/SvelteKit fundamentals this library builds on.
- [[locale]] for locale identifiers (BCP 47), locale-sensitive formatting, and i18n concepts independent of any library.
