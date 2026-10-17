---
name: locale-so-001
description: Use when working with the Somali locale (`so-001`) — its endonym Soomaali, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Somali (so-001)

Reference data for the **Somali** locale — endonym **Soomaali**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `so-001`
- **ISO 639-1:** `so`
- **ISO 639-3:** `som`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 24,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 26,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Somali (Af Soomaali) is a Cushitic language of Somalia, Djibouti, Ethiopia, and Kenya, written in the Latin script since the 1972 official orthography. It has tone and vowel length, and uses grammatical gender and focus particles. See Microsoft's Somali style guide for software terms.

**Translate ideas, not words.**

- Somali has subject-object-verb order and marks focus with particles (`baa`, `ayaa`) placed after the focused element: `Faylka ayaan kaydiyay` (it is the file that I saved). Place the focus particle correctly; do not copy English subject-verb-object order.
- Somali has two genders (masculine, feminine) that affect the definite article suffix (`-ka`, `-ga`, `-ha`, `-da`), possessives, and verb agreement.
- Use established Somali terms where they exist, and adopt loanwords in Somali spelling.
- Re-express idioms and proverbs (maahmaah) by meaning.

**Register.**

- `Adiga` is "you" (singular) and `idinka` the plural. Politeness is carried by phrasing, titles (`Mudane`, `Marwo`, `Sheekh`), and greetings. Somali culture values poetry and indirect speech.

**Orthography and typography.**

- Use the 1972 orthography: `c` represents the voiced pharyngeal sound, `x` the voiceless pharyngeal, `q` the uvular stop, `kh` a fricative, and the apostrophe `'` marks the glottal stop. Do not use English-style respellings.
- Currency shilling (`Sh.So.`); dates `17 Oktoober 2026`; decimal point; 24-hour clock.

## Common pitfalls

- Using English letters (`h`, `k`) in place of `c`, `x`, `q`.
- Dropping the apostrophe.
- Placing focus particles incorrectly.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Somali (https://aka.ms/somali-Somalia-styleguide)
- Somali orthography of 1972 (official script)
