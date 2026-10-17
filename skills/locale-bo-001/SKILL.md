---
name: locale-bo-001
description: Use when working with the Tibetan locale (`bo-001`) — its endonym བོད་སྐད་, Tibetan script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tibetan (bo-001)

Reference data for the **Tibetan** locale — endonym **བོད་སྐད་**, written in the Tibetan script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `bo-001`
- **ISO 639-1:** `bo`
- **ISO 639-3:** `bod`
- **Script:** Tibt (Tibetan)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 6,000,000

## Regional variants

This is the base/macro locale for Tibetan. Region-specific variants in this dataset:

- [[locale-bo-cn]] (Tibetan (China))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Tibetan (བོད་སྐད་) is written in the Tibetan script, an abugida that runs left to right. The written standard (Classical/Literary Tibetan) differs from the spoken Lhasa-based Standard Tibetan, and Tibetan has a rich honorific register. See [[locale-bo-cn]].

**Translate ideas, not words.**

- Write in the literary standard for formal texts and use colloquial forms only in informal content. Some modern terms are coined by calques from Chinese or by new compounds; use established terminology databases.
- Re-express idioms by meaning.

**Grammar.**

- Word order is subject-object-verb. Tibetan is ergative: the agent of a transitive verb takes the ergative particle. Case particles follow the noun.
- Honorific vocabulary: separate honorific words (ཞེ་ས) exist for body parts, actions, and possessions of respected people; use honorific forms for addressees of higher status, and plain forms for oneself.

**Register.**

- Use the honorific register for officials, teachers, and religious figures. In UI, use polite imperative forms and avoid curt commands.

**Orthography and typography.**

- Syllables are separated by the tsek (་) and sentences end with the shad (།); there are no spaces between words. Line breaking must happen at syllable boundaries.
- Use Unicode Tibetan (U+0F00 to U+0FFF) in normalized form; stacked consonants are built with subjoined characters, and wrong input order creates rendering errors.
- Tibetan digits (༠ to ༩) exist but Arabic digits are common in UI; Wylie transliteration is a scholarly convention, not a spelling system for users.

## Common pitfalls

- Using Chinese word order or punctuation.
- Using spaces between words instead of the tsek.
- Using plain forms to address respected people.
- Using incorrect Unicode stacking order.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Tibetan and Himalayan Library (https://www.thlib.org)
- Unicode Standard, Tibetan block
