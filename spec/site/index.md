# Site

**Summary.** `skills-on-ai.github.io/` is a SvelteKit site, built as static
files, that publishes the catalog at <https://skills-on-ai.org/>.

## Scope

Covers the site's stack, conventions, and tooling. Publishing mechanics are in
[monorepo-github-pages](../monorepo-github-pages/index.md); data generation is
in [catalog](../catalog/index.md).

## Principles and rules

- **Stack:** SvelteKit 3, Vite 8, Svelte 5, `@sveltejs/adapter-static`,
  TypeScript 6. Every route is prerendered.
- **Node 26.** `package.json` `engines`, `.npmrc` (`engine-strict=true`), and
  `.github/workflows/deploy.yml` must name the same Node major version; the
  Lily headless package requires it.
- **pnpm.** `package.json` `packageManager` pins the pnpm version; `pnpm-lock.yaml`
  is the only lockfile (no `package-lock.json`), and CI installs with
  `pnpm install --frozen-lockfile`.
- **Design system:** Lily Design System, from the `@lilydesignsystem/` npm
  scope. The old unscoped `lily-design-system-svelte-*` packages are retired.
  Dependencies: `svelte-headless` (components), `svelte-picker-bar` (header
  controls: search, theme, language, text size, share), and
  `svelte-share-picker` (for its `ShareTarget` type).
- **Themes:** the 45 Lily stylesheets in `static/themes/` are copied from
  `@lilydesignsystem/themes`. Refresh them when the package changes, because
  each release adds styling for new components (the search picker was
  unstyled until the 0.4.0 refresh).
- **Imports:** use `#lib/...` subpath imports (declared in `package.json`
  `imports`), not `$lib`. TypeScript modules are imported with a `.js`
  extension, for example `#lib/data/skills.js`.
- **Header, left to right:** brand and site navigation (Home, Categories,
  About), then the Home, LinkedIn, and GitHub icons, then the picker bar. The
  footer has only a "More" column (About, source, README); categories are
  listed on `/categories/`.
  Text size uses the picker bar's default seven steps (`largest`, `larger`,
  `large`, `normal`, `small`, `smaller`, `smallest`); `src/lib/styles/theme.css`
  maps each slug to a font scale.
- **Light/dark follows the browser by default.** The UI uses the browser's
  light/dark setting (`prefers-color-scheme`). The theme picker lists "Follow
  this device" first (the default, from the picker's `systemLabel` option,
  which also switches live when the device does), then "Light" and "Dark",
  then the other 42 Lily themes. No custom theme file is needed.
- **State kept in the browser:** the theme choice persists to the
  `skills-on-ai-theme` cookie, written by the theme picker (`cookieName`) only
  when the visitor changes it; its value is a theme slug or `system`. Text size
  persists to `localStorage` under `skills-on-ai-text-size`. `src/app.html`
  applies both before first paint.
- **Lily packages and overrides.** `svelte-picker-bar` depends on
  `svelte-theme-picker`; `pnpm-workspace.yaml` overrides it to a newer release
  than the bar allows (pnpm 12 ignores `pnpm.overrides` in `package.json`).
  Remove the override once the bar's own range includes it.
- **Search:** the header search picker navigates to `/?<terms>`; the home page
  reads those terms into its filter.
- **Machine-readable routes:** `/skills/<name>/SKILL.md` (raw skill),
  `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and `/llms.json`.
- **Accessibility:** target WCAG 2.2 AA or better; every control has an
  accessible name; skip link first.

## Detail sections

### Commands

```sh
pnpm install --frozen-lockfile   # exact install from pnpm-lock.yaml (as CI does)
pnpm run check         # svelte-check, expected: 0 errors
pnpm run build         # static output in build/
pnpm run preview       # serve build/ locally
```

### Known build output

Some skill bodies contain links that do not resolve to a route; the build
prints `prerender_http_error` warnings and continues
(`prerender.handleHttpError: 'warn'`). A build that fails outright is a bug.

## Related topics

- [catalog](../catalog/index.md)
- [monorepo-github-pages](../monorepo-github-pages/index.md)

## Sources

- [skills-on-ai.github.io/package.json](../../skills-on-ai.github.io/package.json)
- [skills-on-ai.github.io/vite.config.ts](../../skills-on-ai.github.io/vite.config.ts)
- [skills-on-ai.github.io/.github/workflows/deploy.yml](../../skills-on-ai.github.io/.github/workflows/deploy.yml)
