# AGENTS.md

Guidance for AI agents working in this repository. The single source of truth
is [`spec/`](spec/index.md); this file summarizes it and links to it.

## What this repo is

Skills on AI: a catalog of 1,100+ agent skills (`skills/<name>/SKILL.md`) and
the SvelteKit site that publishes it at <https://skills-on-ai.org/>
(`skills-on-ai.github.io/`).

## Layout

- `skills/` — one folder per skill, each with a `SKILL.md`.
- `README.md` — the category structure (every skill listed once).
- `spec/` — specifications; read the relevant topic before changing things.
- `bin/` — `generate-skills-data`, `git-subtree-push`, `make-github-pages`.
- `skills-on-ai.github.io/` — the site subproject (edit here).

## Rules

- Follow [skill-format](spec/skill-format/index.md) for every `SKILL.md`:
  name equals folder, description starts "Use when", `[[links]]` point at real
  skills, serial comma in prose, under 40,000 bytes.
- A new skill needs three entries: its folder, a README line in the right
  category (alphabetical), and a name in `spec/index.md`.
- Never hand-edit generated files: `skills-on-ai.github.io/src/lib/data/*.ts`,
  `static/llms.txt`, `static/llms.json`. Run `bin/generate-skills-data`
  instead, and fix any `WARN` or `UNCATEGORIZED` output.
- Site work follows [site](spec/site/index.md): Node 26, `#lib/` imports,
  `@lilydesignsystem/` packages, and `npm ci` must pass.
- Don't invent facts, standards, certificates, or citations in skills.

## Workflow

For ordinary skill-content changes: regenerate data, commit, push `main`, run
`make github-pages`, then confirm the deploy succeeded
(`gh run list -R skills-on-ai/skills-on-ai.github.io -L 1`). Ask before
anything structural or destructive: rewriting history, force-pushing,
deleting skills, or changing remotes.

## Checks before committing

```sh
bin/generate-skills-data              # no WARN / UNCATEGORIZED lines
cd skills-on-ai.github.io && npm run check && npm run build
```
