---
name: locale-ta-001
description: Use when working with the Tamil locale (`ta-001`) — its endonym தமிழ், Tamil script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tamil (ta-001)

Reference data for the **Tamil** locale — endonym **தமிழ்**, written in the Tamil script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ta-001`
- **ISO 639-1:** `ta`
- **ISO 639-3:** `tam`
- **Script:** Taml (Tamil)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 79,000,000
- **L2 (additional):** 7,000,000
- **L1+L2 (total):** 86,000,000

## Regional variants

This is the base/macro locale for Tamil. Region-specific variants in this dataset:

- [[locale-ta-in]] (Tamil (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Tamil (தமிழ்) is a Dravidian language of Tamil Nadu, Sri Lanka, and Singapore, written in the Tamil script. It has a strong diglossia between literary Tamil and spoken Tamil. See [[locale-ta-in]].

**Translate ideas, not words.**

- Tamil is agglutinative and subject-object-verb. Case suffixes, postpositions, and verb endings attach to stems. Reorder English sentences.
- Use the standard written style for UI, documentation, and official text; use the colloquial style only in informal marketing.
- Use Tamil terms from the Tamil Virtual Academy and the Tamil Nadu government where established; accept common English loans in Tamil script (கோப்பு for file, கடவுச்சொல் for password, செயலி for app are established terms).
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Pronouns distinguish inclusive "நாம்" (we including the listener) from exclusive "நாங்கள்" (we excluding the listener).
- Nouns are classified as rational (உயர்திணை) or non-rational (அஃறிணை); verb endings and pronouns follow.
- Verbs agree with the subject in person, number, and gender in the formal style.

**Register.**

- "நீங்கள்" is the polite or plural "you" for UI and public text; "நீ" is informal. Use "நீங்கள்" with polite verb endings ("சேமிக்கவும்", "செய்யுங்கள்").

**Orthography and typography.**

- Grantha letters (ஜ, ஷ, ஸ, ஹ, க்ஷ) appear in loanwords; some publishers avoid them in favor of native Tamil letters. Choose one policy and apply it consistently.
- Digits: Arabic digits in UI; Tamil digits (௦-௯) are historic. Currency: rupee (₹) in India, Sri Lankan rupee (ரூ) in Sri Lanka. Indian grouping in India.
- Spelling follows the Tamil Lexicon and the Tamil Virtual Academy.

## Common pitfalls

- Using the colloquial style in formal text.
- Confusing inclusive and exclusive "we".
- Inconsistent Grantha-letter policy.
- Missing the rational/non-rational distinction.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Tamil Virtual Academy and the Tamil Lexicon (University of Madras)
