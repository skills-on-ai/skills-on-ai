# Catalog

**Summary.** The catalog is the set of all skills plus the structure that
groups them. Four artifacts must agree: the `skills/` folders, the root
`README.md` (categories), the manifest in `spec/index.md`, and the
generated site data.

## Scope

Covers categories, the root README, the manifest, and generated files. The
format of one skill is in [skill-format](../skill-format/index.md).

## Principles and rules

- **`skills/` is the source of truth for content.** The root `README.md` is
  the source of truth for grouping.
- **README structure is the category structure.** Each `## Heading` is a
  category; a `### Heading` beneath it is a sub-category, shown on the site as
  `Category › Sub-category`. A skill is listed once, as
  `- [name](skills/name/)`, in alphabetical order within its heading.
  Headings are sorted alphabetically, with sub-categories after their parent.
- **Every skill appears everywhere.** Each folder is listed in the README and
  in the manifest (`spec/index.md`). A skill missing from the README renders
  as "Uncategorized" on the site; the generator prints it.
- **The manifest** uses brace expansion to stay compact:
  `{a,b}-testing` means `a-testing` and `b-testing`. Locale skills are covered
  by the rule `locale-{language}-{region}`.
- **Generated files are never hand-edited.** `bin/generate-skills-data`
  writes `src/lib/data/skills.ts`, `src/lib/data/categories.ts`,
  `static/llms.txt`, and `static/llms.json` under `skills-on-ai.github.io/`.
  Rerun it after any change to `skills/` or the README.

## Detail sections

### Category: Decision making

`## Decision making` holds skills for choosing under uncertainty, conflict, or
bias: `adversary`, `decision-analysis`, `decision-journal`, `decision-tree`,
`expected-value-analysis`, `foresight`, `game-theory`, `ooda-loop`,
`premortem`, `prospect-theory`, `regret-minimization`,
`second-order-thinking`, `tripwire`, `two-way-door-decisions`, and
`weighted-decision-matrix`. Records of decisions already made
(`decision-records`, `architecture-decision-record`) live under Technology.

### Audit

`bin/generate-skills-data` reports uncategorized skills and `[[links]]` with
no target. Run it before every commit; the expected output has no `WARN` or
`UNCATEGORIZED` lines.

## Related topics

- [skill-format](../skill-format/index.md)
- [site](../site/index.md)

## Sources

- [README.md](../../README.md)
- [bin/generate-skills-data](../../bin/generate-skills-data)
