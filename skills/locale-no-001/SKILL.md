---
name: locale-no-001
description: Use when working with the Norwegian locale (`no-001`) — its endonym Norsk, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Norwegian (no-001)

Reference data for the **Norwegian** locale — endonym **Norsk**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `no-001`
- **ISO 639-1:** `no`
- **ISO 639-3:** `nor`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,320,000
- **L2 (additional):** 420,000
- **L1+L2 (total):** 4,740,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Norwegian has two official written standards, Bokmål and Nynorsk, with the macro locale `no` generally resolving to Bokmål. Choose the standard before translating; Bokmål (see [[locale-nb-no]]) is the default for most consumer and business content, and Nynorsk (see [[locale-nn-no]]) is required for many public bodies, in some municipalities, and for audiences who prefer it.

**Choosing a standard.**

- Use Bokmål unless the project, client, or municipality requires Nynorsk or both. The Norwegian Language Act requires state bodies to use both forms in their publications for the public.
- Do not mix the two forms in one text.

**Shared features.**

- The general guidance applies to both: direct and informal tone, compounds written as one word, "du" for everyone, letters æ, ø, and å, `«…»` quotation marks, decimal comma, space for thousands, and 24-hour clock.
- Spelling and grammar follow the Språkrådet; follow its dictionaries (https://ordbokene.no) for the chosen standard.

## Common pitfalls

- Using Danish or Swedish spellings in Norwegian text.
- Mixing Bokmål and Nynorsk.
- Splitting compounds.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Språkrådet (https://www.sprakradet.no)
- Ordbøkene (https://ordbokene.no)
