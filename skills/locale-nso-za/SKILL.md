---
name: locale-nso-za
description: Use when working with the Northern Sotho (South Africa) locale (`nso-ZA`) — its endonym Sesotho sa Leboa (Afrika Borwa), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Northern Sotho (South Africa) (nso-ZA)

Reference data for the **Northern Sotho (South Africa)** locale — endonym **Sesotho sa Leboa (Afrika Borwa)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `nso-ZA`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `nso`
- **Script:** Latn (Latin)
- **Region:** ZA (South Africa)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,700,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 9,700,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 0..1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Northern Sotho (Sepedi, Sesotho sa Leboa) is a Sotho-Tswana Bantu language of South Africa, one of the official languages of the country. It is written disjunctively, with noun classes and tone. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Sepedi verbs carry subject, tense, and object markers as separate words in the written form (`ke a bala`). Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes with concord on adjectives, verbs, and possessives.
- Use approved Sepedi terminology (from PanSALB and the National Language Service) rather than raw English borrowings where one exists.
- Re-express idioms and proverbs (maele) by meaning.

**Grammar and register.**

- Writing is disjunctive. Do not join pronouns and verb markers.
- Polite address uses titles (`rra`, `mma`) and the plural. Greetings are important (`Thobela`, `Dumela`, `Thobelang`).

**Orthography and typography.**

- Follow the standard orthography for `š`, `ž`, `ŋ` where used, and for digraphs such as `tš`, `tlh`, `kg`.
- Currency rand (`R`); dates `17 Dibokwane 2026` (check the month name with a reviewer); check CLDR.

## Common pitfalls

- Writing conjunctively.
- Mixing Setswana or Sesotho forms.
- Dropping `š` and other special letters.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pan South African Language Board (PanSALB), the statutory body for the official languages of South Africa
