---
name: locale-uz-001
description: Use when working with the Uzbek locale (`uz-001`) — its endonym Oʻzbekcha, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Uzbek (uz-001)

Reference data for the **Uzbek** locale — endonym **Oʻzbekcha**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `uz-001`
- **ISO 639-1:** `uz`
- **ISO 639-3:** `uzb`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 36,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 38,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Uzbek is a Turkic language written officially in the Latin script (since the 1990s, revised in 2021), while Cyrillic remains in wide use. Choose the script before translating. This guidance covers the Latin alphabet.

**Translate ideas, not words.**

- Uzbek is agglutinative with subject-object-verb order. Do not translate through Russian; restructure English sentences.
- Use Uzbek terminology where it exists (from the Uzbek language institutions), not raw Russian loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- Six cases; no gender; no plural after numerals. Uzbek has weak vowel harmony compared with Turkish.
- `Siz` is the polite form for UI and public text; `sen` is informal.

**Orthography and typography.**

- The letters `oʻ` and `gʻ` use the modifier letter turned comma (U+02BB `ʻ`); the apostrophe-like mark in `maʼno` uses U+02BC `ʼ`. Do not use a straight apostrophe.
- Digraphs `sh`, `ch`, and `ng` represent single sounds.
- Currency soʻm; decimal comma; dates `2026-yil 17-oktabr`; 24-hour clock; quotation marks `“…”` or `«…»`.

## Common pitfalls

- Using straight apostrophes in `oʻ`, `gʻ`.
- Mixing Latin and Cyrillic scripts.
- Using Russian syntax.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Alisher Navoi Tashkent State University of Uzbek Language and Literature
- Microsoft Localization Style Guide, Uzbek (https://aka.ms/uzbek-styleguide)
