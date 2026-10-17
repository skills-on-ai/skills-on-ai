---
name: locale-ms-bn
description: Use when working with the Malay (Brunei) locale (`ms-BN`) — its endonym Bahasa Melayu (Brunei), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Malay (Brunei) (ms-BN)

Reference data for the **Malay (Brunei)** locale — endonym **Bahasa Melayu (Brunei)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ms-BN`
- **ISO 639-1:** `ms`
- **ISO 639-3:** `msa`
- **Script:** Latn (Latin)
- **Region:** BN (Brunei)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 280,000
- **L2 (additional):** 150,000
- **L1+L2 (total):** 430,000

## Base locale

This is a regional variant of [[locale-ms-001]] (Malay), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ms-001]] with the conventions of Brunei Darussalam. Bahasa Melayu is the official language, and the standard is guided by Dewan Bahasa dan Pustaka Brunei.

- **Script:** Rumi (Latin) and Jawi are both official; Jawi appears on signs and in official documents. Confirm which script the project needs.
- **Formats:** Brunei dollar (BND, B$); dates "17 Oktober 2026"; decimal point and comma thousands separator.
- **Tone:** formal and deferential; honorific titles for the Sultan and royal family follow protocol (for example "Kebawah Duli Yang Maha Mulia"); do not abbreviate or invent forms.
- **Vocabulary:** closely follows Malaysian Malay, with local terms for institutions and Islamic administration (the national philosophy is Melayu Islam Beraja, MIB).

## Common pitfalls

- Using inaccurate royal titles.
- Omitting Jawi where it is expected.
- The general pitfalls in [[locale-ms-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Dewan Bahasa dan Pustaka Brunei
- Unicode CLDR locale data for ms-BN (https://cldr.unicode.org)
