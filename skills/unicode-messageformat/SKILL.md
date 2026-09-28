---
name: unicode-messageformat
description: Use when reading, writing, or debugging Unicode MessageFormat 2 (MF2) message syntax — the Unicode Consortium's standard for localizable messages with placeholders, plural/selection matching, and formatting functions. Independent of any library; see [[sveltia-i18n]] for a Svelte library built on it and [[locale]] for broader i18n/l10n concepts.
---

# Unicode MessageFormat 2 (MF2)

**MessageFormat 2 (MF2)** is the Unicode Consortium's standard message
syntax for localizable, dynamic messages — the successor to the older ICU
MessageFormat ("MessageFormat 1"). It standardizes how a message
interpolates values, applies locale-aware formatting, and selects among
grammatical variants (plurals, gender, ordinals) — solving the same
problem [[locale]] describes generally (don't hand-roll plural logic or
string concatenation across a translated phrase), but as a concrete,
parseable syntax rather than a set of principles.

## Simple messages

A message with no placeholders is just text:

```
Hello, world!
```

Two characters are special and need escaping if used literally: `{`, `}`,
and `\`.

## Placeholders, variables, and functions

A placeholder is `{$variableName}`; a function transforms it with a
`:functionName` annotation and optional `key=value` options:

```
Today is {$date :datetime weekday=long}.
```

Built-in functions include `:number`, `:integer`, `:percent`, `:currency`,
`:string`, `:date`, `:time`, `:datetime` — each accepts options like
`style=long` or `minimumFractionDigits=2` that control formatting, the
same way `Intl.NumberFormat`/`Intl.DateTimeFormat` options do (see
[[locale]] for the underlying `Intl` APIs).

## Complex messages: `.input` and `.local`

A message that needs to declare or compute values before the message body
uses a **complex message** form — a `.` declaration section followed by
the message text in `{{...}}`:

```
.input {$date :datetime weekday=long month=medium day=short}
.local $numPigs = {$pigs :integer}
{{On {$date} you had this many pigs: {$numPigs}}}
```

- `.input {$var :function options}` declares an external variable and
  annotates it with a function up front, so the annotation isn't repeated
  everywhere the variable is used.
- `.local $name = {expression}` binds a computed value to a local variable
  for reuse in the message body.

## Matching: `.match`

`.match` selects among message variants based on one or more values —
this is how MF2 expresses plurals, gender, and other selection logic
without a hand-written `count === 1 ? ... : ...` ternary:

```
.input {$count :integer}
.match $count
0   {{You have no notifications.}}
one {{You have {$count} notification.}}
*   {{You have {$count} notifications.}}
```

`.match` supports:

- **Plural/ordinal categories** — CLDR's `zero`, `one`, `two`, `few`,
  `many`, `other` (a locale only uses the subset that applies to it — see
  [[locale]]'s pluralization section for why English's two-category system
  doesn't generalize), plus exact-number matches like literal `0` above.
- **String/enum matching** — case-sensitive matching against literal
  string values (e.g. a `$gender` variable matched against `female`,
  `male`, and a catch-all).
- **Multiple selectors** — matching on more than one variable at once,
  with one variant key per selector per line.
- **The catch-all `*`** — required as the final variant so every possible
  value has somewhere to fall through to.

## Markup

MF2 also defines application-defined markup tags for rich formatting
inside a message, e.g. `{#bold}text{/bold}` — the tags themselves carry no
built-in meaning; the consuming application decides what `#bold` maps to
(bold text, a `<strong>` element, a terminal escape code, etc.).

## Common pitfalls

- **Writing ICU MessageFormat 1 syntax and expecting it to work as MF2.**
  `{count, plural, one {# item} other {# items}}` is ICU MF1 syntax, not
  valid MF2 — MF2 needs `.input {$count :integer}` / `.match $count` with
  `one {{...}}` / `* {{...}}` variants instead.
- **Referencing a variable without the `$` sigil.** `{count}` is not a
  valid MF2 placeholder; it's `{$count}`.
- **Omitting the `*` catch-all variant** in a `.match` block — every
  `.match` needs a default fallback, since real-world plural category sets
  vary by locale and an incomplete variant list will fail to match on some
  locale/value combination.
- **Assuming every locale needs all six plural categories.** Most
  languages use two or three; over-specifying variants a locale never
  selects is harmless but unnecessary, while under-specifying variants a
  locale *does* select breaks that locale.

## Learn more

- [MessageFormat 2 quick start](https://messageformat.unicode.org/docs/quick-start/)
- [MF2 specification](https://github.com/unicode-org/message-format-wg) (Unicode's working group repository)
- [[sveltia-i18n]] for a Svelte library that uses MF2 as its message syntax.
- [[locale]] for broader i18n/l10n concepts (BCP 47, CLDR, RTL) independent of MF2.
