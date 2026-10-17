---
name: locale-sma-no
description: Use when working with the Southern Sami (Norway) locale (`sma-NO`) — its endonym Åarjelsaemien gïele (Nöörje), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Southern Sami (Norway) (sma-NO)

Reference data for the **Southern Sami (Norway)** locale — endonym **Åarjelsaemien gïele (Nöörje)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sma-NO`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `sma`
- **Script:** Latn (Latin)
- **Region:** NO (Norway)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 300
- **L2 (additional):** 200
- **L1+L2 (total):** 500

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Southern Sámi (åarjelsaemien gïele) is a small Sámi language spoken in central Norway and Sweden, written in Latin script with additional letters (ï, ö, ä and in Swedish usage å, ö). It differs significantly from Northern Sámi and should not be translated from it. Orthography is maintained by Sámi language institutions in Norway and Sweden. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate from Northern Sámi or from the majority language word by word; Southern Sámi has its own vocabulary and grammar. Use Southern Sámi terms for reindeer herding, the landscape, and traditional crafts.
- Re-express idioms by meaning.

**Grammar and register.**

- Cases, consonant gradation, and a dual number as in other Sámi languages; no articles or grammatical gender; a negative verb.
- The pronoun system has singular, dual, and plural; there is no formal singular. Politeness is carried by tone.

**Orthography and typography.**

- Use the Southern Sámi letters (ï, ö, ä, and å where used by the target country); never replace them with ASCII look-alikes.
- Country conventions: Norway uses `«…»` and the Norwegian krone; Sweden uses `”…”` and the Swedish krona; decimal comma.

## Common pitfalls

- Using Northern Sámi letters or spelling.
- Dropping diacritics.
- Translating through Norwegian or Swedish.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sámi language institutions and the Sámi Parliaments of Norway and Sweden
- Divvun, UiT The Arctic University of Norway (https://divvun.no)
