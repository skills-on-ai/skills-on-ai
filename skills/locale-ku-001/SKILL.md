---
name: locale-ku-001
description: Use when working with the Kurdish locale (`ku-001`) — its endonym Kurdî, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kurdish (ku-001)

Reference data for the **Kurdish** locale — endonym **Kurdî**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ku-001`
- **ISO 639-1:** `ku`
- **ISO 639-3:** `kur`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 29,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 35,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Kurdish is a group of languages. The `ku` tag generally refers to Kurmanji (Northern Kurdish), written in a Latin script (the Hawar alphabet) in Turkey and Syria; Sorani (Central Kurdish, `ckb`) uses an Arabic-based script in Iraq and Iran and has its own tag. Confirm the variety and script before translating. This guidance covers Kurmanji in Latin script and is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Kurmanji is subject-object-verb, with split ergativity (in the past tense the agent takes the oblique case and the verb agrees with the object).
- Do not translate through Turkish, Arabic, or Persian. Use Kurdish terminology from the Kurdish Institute of Paris and the Kurdish academic community where it exists.
- Re-express idioms by meaning.

**Grammar and register.**

- Two genders (masculine, feminine) and the ezafe construction (`-a`, `-ê`, `-ên`) linking nouns and adjectives (`pirtûka nû`).
- `Hûn` is the polite or plural "you" for UI and public text; `tu` is informal.

**Orthography and typography.**

- The Hawar alphabet has 31 letters including `ç ê î ş û`; never replace them with ASCII look-alikes.
- Currency and dates follow the country (Turkey, Syria); decimal comma.

## Common pitfalls

- Using Sorani (Arabic-script) forms in Kurmanji text.
- Using Turkish spelling for Kurdish names.
- Replacing special letters with ASCII.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Kurdish Institute of Paris (Institut kurde de Paris)
- Unicode CLDR locale data for ku and ckb (https://cldr.unicode.org)
