---
name: locale-te-001
description: Use when working with the Telugu locale (`te-001`) — its endonym తెలుగు, Telugu script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Telugu (te-001)

Reference data for the **Telugu** locale — endonym **తెలుగు**, written in the Telugu script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `te-001`
- **ISO 639-1:** `te`
- **ISO 639-3:** `tel`
- **Script:** Telu (Telugu)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 83,000,000
- **L2 (additional):** 13,000,000
- **L1+L2 (total):** 96,000,000

## Regional variants

This is the base/macro locale for Telugu. Region-specific variants in this dataset:

- [[locale-te-in]] (Telugu (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Telugu (తెలుగు) is a Dravidian language of Andhra Pradesh and Telangana, written in the Telugu script. Written Telugu has a modern standard (the spoken-style standard, వ్యావహారికం) that replaced the older literary style. See [[locale-te-in]].

**Translate ideas, not words.**

- Telugu is agglutinative and subject-object-verb. Reorder English sentences.
- Use the modern standard written style in UI and documentation; the older literary style (గ్రాంథికం) is for literature.
- Use terms from the Telugu Akademi and the state governments where established; accept common English loans in Telugu script (ఫైల్, పాస్‌వర్డ్, యాప్).

**Grammar that trips translators.**

- Inclusive "మనం" (we including the listener) and exclusive "మేము" (we excluding the listener) are distinct.
- Nouns are masculine, feminine, or neuter in agreement; verbs agree in person, number, and gender. Postpositions follow nouns.

**Register.**

- "మీరు" is the polite or plural "you" for UI and public text; "నువ్వు" is informal. Use "మీరు" with polite verb endings ("సేవ్ చేయండి").

**Orthography and typography.**

- Use Unicode Telugu with correct virama and ZWJ handling. Follow the Telugu Akademi's spelling.
- Digits: Arabic digits in UI; Telugu digits (౦-౯) in some print. Currency ₹; Indian grouping.

## Common pitfalls

- Using the literary style in modern text.
- Confusing inclusive and exclusive "we".
- Wrong virama or conjunct sequences.
- Mixing Telangana and Andhra usage unintentionally.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Telugu Akademi (తెలుగు అకాడమీ)
