---
name: locale-st-001
description: Use when working with the Sesotho locale (`st-001`) — its endonym Sesotho, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Sesotho (st-001)

Reference data for the **Sesotho** locale — endonym **Sesotho**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `st-001`
- **ISO 639-1:** `st`
- **ISO 639-3:** `sot`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,600,000
- **L2 (additional):** 7,900,000
- **L1+L2 (total):** 13,500,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Sesotho (Southern Sotho) is a Bantu language of Lesotho and South Africa, one of the official languages of both countries. It has noun classes, tone, and a Latin spelling. Spelling conventions differ somewhat between Lesotho and South Africa, so confirm the target standard. It is written disjunctively. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Sesotho verbs carry subject, tense, and object markers. Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes with concord on adjectives, verbs, and possessives (`mosebetsi o moholo`).
- Use approved Sesotho terminology (from PanSALB, the National Language Service, and Lesotho's language authorities) rather than raw English borrowings where one exists.
- Re-express idioms and proverbs (maele) by meaning.

**Grammar and register.**

- Writing is disjunctive: pronouns, markers, and verb stems are written as separate words (`ke a bala`), unlike the conjunctive writing of Nguni languages such as Zulu ([[locale-zu-001]]).
- Polite address uses the plural and titles (`ntate`, `mme`, `ntate moholo`). Greetings are important (`Dumela`, `Dumelang`).

**Orthography and typography.**

- Follow the orthography of the target country, including the use of `ho`, `ts'`, `ph`, and `qh`; do not mix systems.
- Currency: loti (Lesotho) or rand (South Africa); dates `17 Mphalane 2026` (Mphalane is October); check CLDR.

## Common pitfalls

- Writing conjunctively.
- Mixing Lesotho and South African orthography.
- Wrong noun-class concords.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pan South African Language Board (PanSALB), the statutory body for the official languages of South Africa
- Sesotho National Language Board and Lesotho language authorities
