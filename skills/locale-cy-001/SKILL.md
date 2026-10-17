---
name: locale-cy-001
description: Use when working with the Welsh locale (`cy-001`) — its endonym Cymraeg, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Welsh (cy-001)

Reference data for the **Welsh** locale — endonym **Cymraeg**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `cy-001`
- **ISO 639-1:** `cy`
- **ISO 639-3:** `cym`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 562,000
- **L2 (additional):** 338,000
- **L1+L2 (total):** 900,000

## Regional variants

This is the base/macro locale for Welsh. Region-specific variants in this dataset:

- [[locale-cy-gb]] (Welsh (United Kingdom))

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **two**, **few**, **many**, **other** (6 forms).

- **zero** — `n = 0` (e.g. 0)
- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n = 3` (e.g. 3)
- **many** — `n = 6` (e.g. 6)
- **other** — everything else (e.g. 4, 5, 7~20, 100, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Welsh (Cymraeg) is a Celtic language and an official language of Wales. The Welsh Language Commissioner, the Welsh Government, and Bangor and Cardiff universities produce terminology and style guidance. See [[locale-cy-gb]].

**Translate ideas, not words.**

- Welsh is verb-subject-object in its basic order, and in everyday sentences uses an auxiliary `bod` (to be) plus a verbal noun: `Mae'r ffeil wedi'i chadw` (is the file after-its saved). Reorder English sentences.
- Welsh text is not the translation of English text; the Welsh Language Standards require equal treatment. Treat both versions as parallel texts that mean the same, and review them together.
- Welsh has no single words for "yes" and "no"; the answer repeats the verb (`Ydy`, `Nac ydy`).
- Use Welsh terminology from the Welsh Government's Termcymru terminology portal where it exists.

**Grammar that trips translators.**

- Initial mutations: soft (`cath` to `gath`), nasal (`cath` to `nghath`), and aspirate (`cath` to `chath`) are triggered by articles, prepositions, numerals, and possessives. Missing mutations are the commonest machine-translation error.
- Two genders (masculine, feminine) that trigger mutations (feminine singular nouns lenite after the article).
- Inflected prepositions (`arnaf`, `ynddo`, `ohoni`) fuse a preposition and a pronoun.
- Numerals: nouns after numerals are singular; numbers use a decimal or traditional vigesimal system. Plural categories in CLDR: zero, one, two, few, many, and other. See [[unicode-messageformat]].
- Plural nouns have irregular forms (`ffeil`, `ffeiliau`).

**Register.**

- `Ti` (informal singular) and `chi` (formal or plural). Public bodies and service text use `chi`; friends and children use `ti`. Do not mix. UI commands use the imperative (`Cadwch` with chi, `Cadw` with ti) or the verbal noun.
- Welsh Government guidance promotes plain Welsh (Cymraeg clir) and avoids overly formal literary forms in public text.

**Orthography and typography.**

- Welsh digraphs `ch`, `dd`, `ff`, `ng`, `ll`, `ph`, `rh`, `th` are single letters in the alphabet. The circumflex (`â ê î ô û ŵ ŷ`) marks long vowels and the grave and acute accents appear in some words; keep them.
- Quotation marks `‘…’` or `“…”`; dates `17 Hydref 2026`; pound sterling (£); 24-hour clock.
- In bilingual material the Welsh text is normally presented first or in the first position (left or top), consistent with the Welsh Language Standards.

## Common pitfalls

- Missing mutations.
- Translating English word order.
- Dropping circumflexes (ŵ, ŷ).
- Writing the Welsh as a translation of the English instead of a parallel text.
- Relying on machine translation without a native reviewer.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Welsh Language Commissioner (https://www.welshlanguagecommissioner.wales)
- Welsh Government, Termcymru terminology portal
