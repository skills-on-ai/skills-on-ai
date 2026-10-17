---
name: locale-bh-001
description: Use when working with the Bhojpuri locale (`bh-001`) — its endonym भोजपुरी, Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Bhojpuri (bh-001)

Reference data for the **Bhojpuri** locale — endonym **भोजपुरी**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `bh-001`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `bho`
- **Script:** Deva (Devanagari)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 52,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 57,000,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

The tag `bh` is the ISO 639 code for "Bihari languages", a collective code (a macro group) covering several distinct languages of Bihar and nearby regions, such as Bhojpuri, Maithili, and Magahi. It is not a single standard written language. Choose the specific language and its own tag (for example `bho` for Bhojpuri, `mai` for Maithili, `mag` for Magahi) when you translate.

**What to do.**

- Confirm the actual language with the client or audience. Translate into that language, not into a generic "Bihari".
- If the audience reads Hindi, localize into Hindi (see [[locale-hi-001]]); Hindi is the language of administration and education in Bihar.
- Most Bihari languages are written in Devanagari; Maithili was historically written in Tirhuta (Mithilakshar) and is now Devanagari; check the audience's preference.
- Translate with the language's own grammar and vocabulary; do not simply transliterate Hindi text into the target language.

**Register and typography.**

- Honorific levels (आप, तुहूँ) vary by language; confirm with a native reviewer.
- Digits: Arabic digits in UI; Devanagari digits in print. Currency ₹; Indian grouping.

## Common pitfalls

- Treating `bh` as one language.
- Substituting Hindi for the target language without saying so.
- Using the wrong script variant.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- ISO 639-2, Bihari languages (collective code)
- Linguistic Survey of India
