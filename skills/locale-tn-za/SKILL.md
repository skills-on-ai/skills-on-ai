---
name: locale-tn-za
description: Use when working with the Tswana (South Africa) locale (`tn-ZA`) — its endonym Setswana (Aforika Borwa), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tswana (South Africa) (tn-ZA)

Reference data for the **Tswana (South Africa)** locale — endonym **Setswana (Aforika Borwa)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `tn-ZA`
- **ISO 639-1:** `tn`
- **ISO 639-3:** `tsn`
- **Script:** Latn (Latin)
- **Region:** ZA (South Africa)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,200,000
- **L2 (additional):** 3,500,000
- **L1+L2 (total):** 7,700,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Setswana is a Sotho-Tswana Bantu language of Botswana and South Africa, one of the official languages of South Africa. It is written disjunctively, with noun classes and tone. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Setswana verbs carry subject, tense, and object markers as separate words in the written form (`ke a bala`). Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes with concord on adjectives, verbs, and possessives.
- Use approved Setswana terminology (from PanSALB and the National Language Service) rather than raw English borrowings where one exists.
- Re-express idioms and proverbs (diane) by meaning.

**Grammar and register.**

- Writing is disjunctive (compare conjunctive Nguni languages such as [[locale-zu-001]]). Do not join pronouns and verb markers into single words.
- Polite address uses titles (`rra`, `mma`) and the plural. Greetings are important (`Dumela`, `Dumelang`).

**Orthography and typography.**

- Follow the standard orthography for `ts`, `tsh`, `tl`, `tlh`, `kg`, `kgh`, and `ng`.
- Currency rand (`R`) in South Africa, pula in Botswana; dates `17 Diphalane 2026` (check the month name with a reviewer); check CLDR.

## Common pitfalls

- Writing conjunctively.
- Mixing Sesotho or Sepedi forms.
- Wrong noun-class concords.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pan South African Language Board (PanSALB), the statutory body for the official languages of South Africa
