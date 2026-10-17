---
name: locale-smj-no
description: Use when working with the Lule Sami (Norway) locale (`smj-NO`) — its endonym Julevsámegiella (Vuodna), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Lule Sami (Norway) (smj-NO)

Reference data for the **Lule Sami (Norway)** locale — endonym **Julevsámegiella (Vuodna)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `smj-NO`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `smj`
- **Script:** Latn (Latin)
- **Region:** NO (Norway)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 500
- **L2 (additional):** 300
- **L1+L2 (total):** 800

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Lule Sámi (julevsámegiella) is a Sámi language of the Lule region in Sweden and Norway, written in Latin script with additional letters (á, ŋ and others). It has its own orthography and should not be translated from Northern Sámi. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate from Northern Sámi or the majority language word by word. Lule Sámi has its own vocabulary and grammar; use Lule Sámi terms for local nature and culture.
- Re-express idioms by meaning.

**Grammar and register.**

- Cases, consonant gradation, and a dual number as in other Sámi languages; no articles or grammatical gender; a negative verb.
- Singular, dual, and plural pronouns; no formal singular. Politeness is carried by tone.

**Orthography and typography.**

- Use á, ŋ, and the other Lule Sámi letters; never replace them with ASCII look-alikes.
- Country conventions: Norway uses `«…»` and the Norwegian krone; Sweden uses `”…”` and the Swedish krona; decimal comma.

## Common pitfalls

- Using Northern Sámi letters or spelling.
- Dropping diacritics.
- Translating through Norwegian or Swedish.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sámi Parliaments of Norway and Sweden
- Divvun, UiT The Arctic University of Norway (https://divvun.no)
