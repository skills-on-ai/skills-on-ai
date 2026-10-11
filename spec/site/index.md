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
- **Design system:** Lily Design System, from the `@lilydesignsystem/` npm
  scope. The old unscoped `lily-design-system-svelte-*` packages are retired.
  Dependencies: `svelte-headless` (components), `svelte-picker-bar` (header
  controls: search, theme, language, text size, share), and
  `svelte-share-picker` (for its `ShareTarget` type).
- **Themes:** the 45 stylesheets in `static/themes/` are copied from
  `@lilydesignsystem/themes`. Refresh them when the package changes, because
  each release adds styling for new components (the search picker was
  unstyled until the 0.4.0 refresh).
- **Imports:** use `#lib/...` subpath imports (declared in `package.json`
  `imports`), not `$lib`. TypeScript modules are imported with a `.js`
  extension, for example `#lib/data/skills.js`.
- **Header, left to right:** brand and site navigation (Home, Categories,
  About), then the Home, LinkedIn, and GitHub icons, then the picker bar. The
  footer's category columns have no heading.
  Text size uses the picker bar's default seven steps (`largest`, `larger`,
  `large`, `normal`, `small`, `smaller`, `smallest`); `src/lib/styles/theme.css`
  maps each slug to a font scale.
- **State kept in the browser:** theme and text size persist to
  `localStorage` under `skills-on-ai-theme` and `skills-on-ai-text-size`;
  `src/app.html` applies them before first paint.
- **Search:** the header search picker navigates to `/?<terms>`; the home page
  reads those terms into its filter.
- **Machine-readable routes:** `/skills/<name>/SKILL.md` (raw skill),
  `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and `/llms.json`.
- **Accessibility:** target WCAG 2.2 AA or better; every control has an
  accessible name; skip link first.

## Detail sections

### Commands

```sh
npm ci                 # exact install from the lockfile (as CI does)
npm run check          # svelte-check, expected: 0 errors
npm run build          # static output in build/
npm run preview        # serve build/ locally
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
