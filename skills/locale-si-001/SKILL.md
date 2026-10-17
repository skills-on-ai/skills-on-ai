---
name: locale-si-001
description: Use when working with the Sinhala locale (`si-001`) — its endonym සිංහල, Sinhala script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Sinhala (si-001)

Reference data for the **Sinhala** locale — endonym **සිංහල**, written in the Sinhala script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `si-001`
- **ISO 639-1:** `si`
- **ISO 639-3:** `sin`
- **Script:** Sinh (Sinhala)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 18,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 20,000,000

## Regional variants

This is the base/macro locale for Sinhala. Region-specific variants in this dataset:

- [[locale-si-lk]] (Sinhala (Sri Lanka))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 0,1 or i = 0 and f = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Sinhala (සිංහල) is an Indo-Aryan language of Sri Lanka, written in the Sinhala script. It has a marked split between formal written Sinhala and colloquial spoken Sinhala. See [[locale-si-lk]].

**Translate ideas, not words.**

- Sinhala is subject-object-verb with postpositions. Reorder English sentences.
- The formal written style differs from speech in verb endings and vocabulary. Use the formal written style in official text, documentation, and UI; use the spoken style only in informal marketing.
- Accept established English loans in Sinhala script, and use the Department of Official Languages' glossaries where they exist.

**Grammar.**

- Nouns are animate or inanimate (not masculine/feminine in the European sense); verbs have different forms for animate and inanimate subjects in the formal style.
- Postpositions and case endings follow nouns.

**Register.**

- Sinhala pronouns have many levels. "ඔබ" is the polite and neutral "you" for UI and public text; "ඔයා" is informal. Use "ඔබ" consistently.
- UI commands use the polite imperative or infinitive.

**Orthography and typography.**

- Use Unicode Sinhala with correct ZWJ handling for conjuncts (rakaransaya and yansaya); look-alike characters create errors. The Sri Lanka standard SLS 1134 defines the Sinhala character set.
- Digits: Arabic digits in UI; Sinhala digits (෦-෯) are rare. Currency: rupee (රු). Dates DD/MM/YYYY.

## Common pitfalls

- Using the colloquial style in formal text.
- Wrong ZWJ or conjunct sequences.
- Mixing "ඔබ" and "ඔයා".

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Department of Official Languages, Sri Lanka
- SLS 1134 (Sinhala character set), Sri Lanka Standards Institution
