---
name: locale-ne-001
description: Use when working with the Nepali locale (`ne-001`) — its endonym नेपाली, Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Nepali (ne-001)

Reference data for the **Nepali** locale — endonym **नेपाली**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ne-001`
- **ISO 639-1:** `ne`
- **ISO 639-3:** `nep`
- **Script:** Deva (Devanagari)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 19,000,000
- **L2 (additional):** 14,000,000
- **L1+L2 (total):** 33,000,000

## Regional variants

This is the base/macro locale for Nepali. Region-specific variants in this dataset:

- [[locale-ne-np]] (Nepali (Nepal))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Nepali (नेपाली) is the official language of Nepal, written in Devanagari. It is subject-object-verb with postpositions, and has an elaborate honorific system. See [[locale-ne-np]].

**Translate ideas, not words.**

- Reorder English sentences; do not translate word for word.
- Do not translate from Hindi. Nepali shares script and some words, but its grammar, verbs, and vocabulary differ.
- Accept established English loans in Devanagari (फाइल, पासवर्ड, एप) when readers use them; use Nepali terms from the Nepal Academy's glossaries when established.

**Grammar that trips translators.**

- Verbs agree with the subject in person, number, and honorific level. Nepali has no grammatical gender on nouns, but there are gendered verb forms in some second- and third-person positions.
- Postpositions follow nouns: लाई, मा, बाट, को/का/की.
- The ergative marker "ले" marks the agent in the past tense.

**Register.**

- Nepali has several levels of "you": तँ (very informal or rude), तिमी (informal), तपाईं (polite), and हजुर (very respectful). UI and public text use "तपाईं" with matching verb endings ("गर्नुहोस्"). Do not mix levels.

**Orthography and typography.**

- Follow the Nepal Academy's standard spelling (Nepali Brihat Shabdakosh).
- Punctuation: the danda (।) ends sentences. Digits: Devanagari (०-९) are common in Nepal; Arabic digits are used in UI. Currency: Nepalese rupee (रू). Check CLDR `ne` for number grouping.
- Dates: the Bikram Sambat calendar (2083 for 2026) is the official calendar of Nepal; show Gregorian alongside when needed.

## Common pitfalls

- Using Hindi grammar or the Hindi verb forms.
- Mixing तिमी and तपाईं.
- Showing only Gregorian dates on official forms.
- Transliterating English terms where a Nepali term exists.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Nepal Academy (नेपाल प्रज्ञा प्रतिष्ठान), Nepali Brihat Shabdakosh
