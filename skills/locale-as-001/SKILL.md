---
name: locale-as-001
description: Use when working with the Assamese locale (`as-001`) — its endonym অসমীয়া, Bengali script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Assamese (as-001)

Reference data for the **Assamese** locale — endonym **অসমীয়া**, written in the Bengali script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `as-001`
- **ISO 639-1:** `as`
- **ISO 639-3:** `asm`
- **Script:** Beng (Bengali)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 15,000,000
- **L2 (additional):** 8,300,000
- **L1+L2 (total):** 23,300,000

## Regional variants

This is the base/macro locale for Assamese. Region-specific variants in this dataset:

- [[locale-as-in]] (Assamese (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Assamese (অসমীয়া) is an Indo-Aryan language of Assam, written in the Assamese script, which is closely related to the Bengali script but has distinct letters. See [[locale-as-in]].

**Translate ideas, not words.**

- Assamese is subject-object-verb with postpositions. Reorder English sentences.
- Assamese relies heavily on classifiers after numerals (টা, খন, জন, গৰাকী, কণ); use the right one.
- Do not translate from Bengali; they share much script but differ in vocabulary, spelling, and grammar.
- Re-express idioms by meaning.

**Grammar and register.**

- No grammatical gender. Pronouns have levels: আপুনি (formal), তুমি (informal), তই (intimate). UI and public text use আপুনি.
- Verb forms mark the person and honorific level.

**Orthography and typography.**

- The letters ৰ (ra) and ৱ (wa) are distinct from Bengali র and the Bengali ব; use the Assamese letters. Do not substitute Bengali look-alikes.
- Punctuation: the dari (।). Digits: Assamese uses the same digit shapes as Bengali (০-৯); Arabic digits in UI.
- Follow the Asam Sahitya Sabha's standard spelling.

## Common pitfalls

- Using Bengali র/ব instead of ৰ/ৱ.
- Writing Bengali grammar or vocabulary.
- Missing classifiers.
- Mixing আপুনি and তুমি.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Asam Sahitya Sabha (অসম সাহিত্য সভা)
