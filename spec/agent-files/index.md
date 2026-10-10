# Agent files

**Summary.** Files that tell AI agents how to work in this repository
(`AGENTS.md`, `CLAUDE.md`) and how to consume the catalog (`llms.txt`,
`llms.json`). They summarize `spec/`; they never contradict it.

## Principles and rules

- **`spec/` is the single source of truth.** `AGENTS.md` states the working
  rules briefly and links to `spec/` topics; it does not restate them.
- **`AGENTS.md` is canonical; `CLAUDE.md` imports it** with `@AGENTS.md`, so
  both tools read the same rules.
- **Size:** each of `AGENTS.md`, `CLAUDE.md`, and any `AGENTS/*` file stays
  under 40,000 bytes. Keep them far smaller; link instead of copying.
- **`llms.txt` and `llms.json` are generated** by `bin/generate-skills-data`
  into `skills-on-ai.github.io/static/`, so they are served at the site root.
  They list every skill with its description and URLs. Never edit by hand.
- **No `*-skill` folders yet.** If a skill-for-this-repo is needed (for
  example "add a skill to the catalog"), create it as a `SKILL.md` and
  register it per [skill-format](../skill-format/index.md).

## Related topics

- [skill-format](../skill-format/index.md)
- [catalog](../catalog/index.md)
