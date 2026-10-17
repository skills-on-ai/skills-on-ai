---
name: locale-rm-ch
description: Use when working with the Romansh (Switzerland) locale (`rm-CH`) — its endonym Rumantsch (Svizra), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Romansh (Switzerland) (rm-CH)

Reference data for the **Romansh (Switzerland)** locale — endonym **Rumantsch (Svizra)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `rm-CH`
- **ISO 639-1:** `rm`
- **ISO 639-3:** `roh`
- **Script:** Latn (Latin)
- **Region:** CH (Switzerland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 40,000
- **L2 (additional):** 20,000
- **L1+L2 (total):** 60,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Romansh is the fourth national language of Switzerland, spoken in Graubünden. It has five regional written idioms (Sursilvan, Sutsilvan, Surmiran, Puter, and Vallader) and a pan-regional standard, Rumantsch Grischun (RG), created by the Lia Rumantscha. Federal and cantonal documents use RG, while schools and local media use the idioms. Choose the target idiom or RG before translating.

**Translate ideas, not words.**

- Translate into the chosen idiom, not through German; Romansh is under heavy German influence and German calques are common. Check phrases with a native editor.
- Re-express idioms and proverbs by meaning.

**Grammar and register.**

- Nouns are masculine or feminine, with agreement in articles and adjectives.
- Informal "ti" and formal "Vus" are used in the address; check the idiom, since forms differ.
- Word order follows Romance patterns with some influence from German in verb placement.

**Orthography and typography.**

- Use the orthography of the chosen idiom or RG, and the terminology databases of the Lia Rumantscha (Pledari Grond: https://www.pledari.ch).
- Quotation marks: guillemets `« »` or `„ “` follow the publication's convention.
- Numbers: decimal point is common in Swiss use; currency CHF.

## Common pitfalls

- Writing Rumantsch Grischun in a context that expects a local idiom, or the reverse.
- Following German word order and calquing German compounds.
- Mixing idioms in one text.
- Assuming that any Romansh speaker reads all idioms equally.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Lia Rumantscha (https://www.liarumantscha.ch)
- Pledari Grond online dictionary and terminology (https://www.pledari.ch)
