---
name: locale-be-001
description: Use when working with the Belarusian locale (`be-001`) — its endonym Беларуская, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Belarusian (be-001)

Reference data for the **Belarusian** locale — endonym **Беларуская**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `be-001`
- **ISO 639-1:** `be`
- **ISO 639-3:** `bel`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 1,300,000
- **L1+L2 (total):** 6,300,000

## Regional variants

This is the base/macro locale for Belarusian. Region-specific variants in this dataset:

- [[locale-be-by]] (Belarusian (Belarus))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `n % 10 = 1 and n % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `n % 10 = 2..4 and n % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Belarusian is an East Slavic language written in Cyrillic, with the letters і, ў, ’ (apostrophe). The official orthography is the 2008 version (so-called narkamaŭka), while the classical orthography (Taraškievica) is used in some communities and media. Choose the orthography before translating. See [[locale-be-by]].

**Translate ideas, not words.**

- Do not translate through Russian. Belarusian has its own vocabulary and grammar; Russian forms are errors.
- Belarusian spelling reflects pronunciation: akanne (unstressed "о" written as "а": "вада", "малако") and yakanne ("я" in unstressed positions: "вясна"). Spell by the standard, not by the Russian form.
- Re-express idioms by meaning.

**Grammar.**

- Six cases (the vocative survives in some forms) and three genders.
- Plurals: one, few, many, and other categories.
- The letter ў (short u) replaces "в" or "л" in certain positions after a vowel: "у школе", "праўда".

**Register.**

- "Вы" is the polite form; "ты" is informal. Use "вы" in UI and public text.

**Orthography and typography.**

- Quotation marks `«…»`; decimal comma; non-breaking space for thousands; currency Belarusian ruble (`Br`); dates `17 кастрычніка 2026 г.`.
- The apostrophe `’` appears in words like `аб’ява`. Do not replace it with Russian ъ.

## Common pitfalls

- Using Russian spelling or vocabulary.
- Dropping ў or the apostrophe.
- Mixing narkamaŭka and Taraškievica.
- Translating through Russian.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Правілы беларускай арфаграфіі і пунктуацыі (2008)
- Yakub Kolas Institute of Linguistics, National Academy of Sciences of Belarus
