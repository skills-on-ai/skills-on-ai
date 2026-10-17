---
name: locale-gu-001
description: Use when working with the Gujarati locale (`gu-001`) — its endonym ગુજરાતી, Gujarati script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Gujarati (gu-001)

Reference data for the **Gujarati** locale — endonym **ગુજરાતી**, written in the Gujarati script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `gu-001`
- **ISO 639-1:** `gu`
- **ISO 639-3:** `guj`
- **Script:** Gujr (Gujarati)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 58,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 62,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Gujarati (ગુજરાતી) is an Indo-Aryan language of Gujarat, written in the Gujarati script (a Devanagari relative with no top line). See also [[locale-hi-001]] for contrast with neighbouring Hindi.

**Translate ideas, not words.**

- Gujarati is subject-object-verb with postpositions. Reorder English sentences.
- Gujarati has three genders (masculine, feminine, neuter), which agree with adjectives and verbs. Loanwords need a gender; neuter is the common choice for new borrowings.
- Ergative construction in the past tense with "એ" (the agent marker).
- Re-express idioms by meaning; accept common English loans in Gujarati script (ફાઇલ, પાસવર્ડ, એપ).

**Register.**

- "તમે" is the polite or plural "you" and is the standard in UI and public text; "તું" is informal or intimate. Use "તમે" and avoid "આપ" unless a very formal tone is required.
- UI commands use the polite imperative ("સાચવો") or infinitive.

**Orthography and typography.**

- Follow the spelling rules of the Gujarati Sahitya Parishad. Be careful with the anusvara and the use of short and long vowels.
- Punctuation: the period (.) is used (the danda is not common in modern Gujarati); digits are Gujarati (૦-૯) in some print and Arabic digits in UI; Indian grouping; currency ₹.

## Common pitfalls

- Using Hindi gender or postpositions in Gujarati text.
- Missing the neuter gender.
- Mixing "તમે" and "તું".
- Spelling inconsistencies with the anusvara.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Gujarati Sahitya Parishad and the Sarth Gujarati Jodani Kosh
