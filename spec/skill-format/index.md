# Skill format

**Summary.** A skill is one folder, `skills/<name>/`, holding one file,
`SKILL.md`: YAML frontmatter followed by a Markdown body. This topic is the
single source of truth for what that file must contain.

## Scope

Covers the structure and wording rules of `SKILL.md`. It does not cover how
skills are grouped into categories (see [catalog](../catalog/index.md)) or how
the site renders them (see [site](../site/index.md)).

## Principles and rules

- **One folder, one skill.** The folder name is the skill name: lowercase
  letters, digits, and hyphens only, for example `weighted-decision-matrix`.
  The frontmatter `name` must equal the folder name.
- **Frontmatter has two fields:** `name` and `description`. Both are single
  lines. `description` starts with "Use when" (or "Use this skill when") and
  states the trigger conditions, because an agent decides whether to load the
  skill from the description alone. It names the nearest neighbouring skills
  with `[[wikilinks]]` and says how this one differs.
- **Body structure** for practice and method skills, in this order:
  1. `# Title`, then a short introduction.
  2. `## Input required`, then `## Questions to ask first`: at most five
     questions, asked in one batch.
  3. The method, as numbered steps.
  4. `## Output format`.
  5. `## Ground rules`, `## Self-check before answering`, and
     `## Common pitfalls`.
  6. `## Example prompt`, then `## Learn more`.
  Reference skills (a language, a tool, a locale) may use topic-specific
  headings, but still end with `## Common pitfalls` and `## Learn more`.
- **Cross-references use `[[skill-name]]`.** Every link target must be an
  existing skill folder. `bin/generate-skills-data` warns about dangling
  links and renders a wikilink as a link only when its target exists.
  Literal double brackets (for example TOML's `[[table]]`) go inside code
  spans or fences.
- **Prose style:** plain English, serial comma (see
  [serial-comma](../serial-comma/index.md)), no filler, no claims that are not
  grounded in the topic. Never invent standards, statistics, certificates, or
  citations.
- **Size:** each `SKILL.md` stays under 40,000 bytes.
- **Name families.** Care skills end `-care`, assessments `-assessment`, and
  testing types `-testing`. Locale skills are `locale-<language>-<region>`
  (BCP 47). Medical documentation skills start `medical-`. Lily Design System
  skills start `lily-design-system-`.

## Detail sections

### Example frontmatter

```yaml
---
name: tripwire
description: Use when asked to turn failure modes into tripwires ... Distinct from [[key-risk-indicators]] and [[risk-register]].
---
```

### Adding a skill

1. Create `skills/<name>/SKILL.md` following the rules above.
2. Add `- [<name>](skills/<name>/)` to the right section of the root
   `README.md`, in alphabetical order.
3. Add the name to the manifest in [spec/index.md](../index.md).
4. Run `bin/generate-skills-data` and fix any warning.
5. Commit, push, and publish (see the workflow in [spec/index.md](../index.md)).

## Related topics

- [catalog](../catalog/index.md)
- [agent-files](../agent-files/index.md)

## Sources

- [bin/generate-skills-data](../../bin/generate-skills-data)
- `skills/tripwire/SKILL.md` as a reference implementation.
