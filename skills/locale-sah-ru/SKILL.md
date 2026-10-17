---
name: locale-sah-ru
description: Use when working with the Sakha (Russia) locale (`sah-RU`) — its endonym Саха тыла (Россия), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Sakha (Russia) (sah-RU)

Reference data for the **Sakha (Russia)** locale — endonym **Саха тыла (Россия)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sah-RU`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `sah`
- **Script:** Cyrl (Cyrillic)
- **Region:** RU (Russia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 450,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 550,000

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Sakha (Yakut, саха тыла) is a Turkic language of the Sakha Republic (Yakutia) in Russia, written in Cyrillic with additional letters (ҕ, ҥ, ө, ү, һ and the digraph дь). It is an official language of the republic alongside Russian. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate through Russian. Sakha is agglutinative with subject-object-verb order, vowel harmony, and long suffix chains.
- Use Sakha terminology where it exists (from the Sakha Republic's language institutions), not raw Russian loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony; case suffixes; no grammatical gender. Sakha distinguishes informal and polite "you" forms; use the polite form in UI and public text and confirm it with a native reviewer.

**Orthography and typography.**

- Use ҕ, ҥ, ө, ү, һ and the digraph дь correctly; never replace them with Russian look-alikes.
- Long and short vowels (including diphthongs and long vowels written double) matter in spelling.
- Quotation marks `«…»`; decimal comma; ruble; dates as in Russian.

## Common pitfalls

- Replacing Sakha letters with Russian look-alikes.
- Using Russian syntax.
- Breaking vowel harmony.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institute for Humanitarian Research and Indigenous Peoples of the North, Siberian Branch of the Russian Academy of Sciences
- Unicode CLDR locale data for sah (https://cldr.unicode.org)
