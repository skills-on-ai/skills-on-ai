---
name: locale-gd-001
description: Use when working with the Scottish Gaelic locale (`gd-001`) — its endonym Gàidhlig, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Scottish Gaelic (gd-001)

Reference data for the **Scottish Gaelic** locale — endonym **Gàidhlig**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `gd-001`
- **ISO 639-1:** `gd`
- **ISO 639-3:** `gla`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 20,000
- **L2 (additional):** 70,000
- **L1+L2 (total):** 90,000

## Regional variants

This is the base/macro locale for Scottish Gaelic. Region-specific variants in this dataset:

- [[locale-gd-gb]] (Scottish Gaelic (United Kingdom))

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **other** (4 forms).

- **one** — `n = 1,11` (e.g. 1, 11)
- **two** — `n = 2,12` (e.g. 2, 12)
- **few** — `n = 3..10,13..19` (e.g. 3~10, 13~19)
- **other** — everything else (e.g. 0, 20~34, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Scottish Gaelic (Gàidhlig) is a Celtic language of Scotland, closely related to Irish. Written Gaelic follows the Gaelic Orthographic Conventions (GOC) used in Scottish education and public bodies. See [[locale-gd-gb]]. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Scottish Gaelic is verb-subject-object. Reorder English sentences.
- Gaelic has no verb "to have"; possession uses `aig` (`Tha faidhle agam`, "a file is at me"). It has no single words for "yes" and "no"; the answer repeats the verb.
- Two verbs for "to be": `bi` (states, locations) and the copula `is` (identity, classification). Map English "is" correctly.
- Use terms from the Faclair na Pàrlamaid and other approved Gaelic resources where they exist.

**Grammar that trips translators.**

- Initial mutations: lenition (`bàta` to `bhàta`) and, less often, eclipsis; articles, prepositions, and possessives trigger them. Missing mutations are the commonest error.
- Broad and slender consonants; vowels must agree ("caol ri caol, leathann ri leathann").
- Prepositional pronouns fuse a preposition and a pronoun (`agam`, `agad`, `aige`, `aice`).
- Verbal nouns replace the English infinitive and gerund.

**Register.**

- `Thu` (singular) and `sibh` (plural or polite). Use `sibh` in public, formal, and service text; `thu` for friends and children. Do not mix.
- UI commands use the imperative or verbal noun.

**Orthography and typography.**

- Gaelic uses only the grave accent (à, è, ì, ò, ù) after the GOC; do not use acute accents, which belong to Irish.
- Quotation marks `‘…’` or `“…”`; dates `17 an Dàmhair 2026`; £; 24-hour clock.

## Common pitfalls

- Using Irish spelling or acute accents.
- Missing lenition.
- Using English word order.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Bòrd na Gàidhlig (https://www.gaidhlig.scot)
- Faclair na Pàrlamaid (Scottish Parliament Gaelic terminology)
