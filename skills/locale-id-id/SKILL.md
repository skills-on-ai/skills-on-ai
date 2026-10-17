---
name: locale-id-id
description: Use when working with the Indonesian (Indonesia) locale (`id-ID`) — its endonym Bahasa Indonesia (Indonesia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Indonesian (Indonesia) (id-ID)

Reference data for the **Indonesian (Indonesia)** locale — endonym **Bahasa Indonesia (Indonesia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `id-ID`
- **ISO 639-1:** `id`
- **ISO 639-3:** `ind`
- **Script:** Latn (Latin)
- **Region:** ID (Indonesia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 75,000,000
- **L2 (additional):** 177,000,000
- **L1+L2 (total):** 252,000,000

## Base locale

This is a regional variant of [[locale-id-001]] (Indonesian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-id-001]] with the conventions of Indonesia.

- **Formats:** rupiah "Rp12.500" with no space; decimal comma; dates "17 Oktober 2026"; 24-hour clock; Indonesia spans three time zones (WIB, WITA, WIT).
- **Terminology:** use Indonesian government terminology (Badan Bahasa's Glosarium) for official text.
- **Names:** many Indonesians have a single name; do not require a family name in forms.
- **Tone:** polite, communal, and indirect; avoid blunt refusal.
- **Regional languages:** Javanese, Sundanese, and others are mother tongues for many; Indonesian remains the language of national content (see [[locale-jv-001]] for Javanese).

## Common pitfalls

- Requiring a family name in forms.
- Using Malay vocabulary or currency formats.
- The general pitfalls in [[locale-id-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Badan Bahasa, Glosarium (terminology glossary)
