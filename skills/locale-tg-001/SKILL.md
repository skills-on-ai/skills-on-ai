---
name: locale-tg-001
description: Use when working with the Tajik locale (`tg-001`) — its endonym Тоҷикӣ, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tajik (tg-001)

Reference data for the **Tajik** locale — endonym **Тоҷикӣ**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `tg-001`
- **ISO 639-1:** `tg`
- **ISO 639-3:** `tgk`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 10,500,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 12,000,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Tajik is a Persian language written in Cyrillic in Tajikistan (with the extra letters ғ, ӣ, қ, ӯ, ҳ, ҷ). It is the same language family as Persian (Farsi) and Dari but with its own standard, script, and Russian influence. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate through Russian or Persian word by word; Tajik has its own vocabulary and orthography. Use the Tajik terminology approved by the Academy of Sciences.
- Re-express idioms by meaning.

**Grammar and register.**

- No gender or case; the ezafe construction (`-и`) joins nouns and adjectives (`китоби нав`). Verbs agree with the subject in person and number; the plural suffix is `-ҳо`.
- `Шумо` is the polite form for UI and public text; `ту` is informal.

**Orthography and typography.**

- Use ғ, ӣ, қ, ӯ, ҳ, ҷ; never replace them with Russian look-alikes.
- Currency somoni; dates `17.10.2026`; decimal comma; 24-hour clock; quotation marks `«…»`.

## Common pitfalls

- Using Persian script spelling in a Cyrillic text.
- Using Russian look-alike letters.
- Using Russian syntax.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Rudaki Institute of Language and Literature, Academy of Sciences of Tajikistan
- Unicode CLDR locale data for tg (https://cldr.unicode.org)
