---
name: locale-zh-mo
description: Use when working with the Chinese (Traditional, Macao) locale (`zh-MO`) — its endonym 繁體中文 (澳門), Han (Traditional) script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chinese (Traditional, Macao) (zh-MO)

Reference data for the **Chinese (Traditional, Macao)** locale — endonym **繁體中文 (澳門)**, written in the Han (Traditional) script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zh-MO`
- **ISO 639-1:** `zh`
- **ISO 639-3:** `cmn`
- **Script:** Hant (Han (Traditional))
- **Region:** MO (Traditional, Macao)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 400,000
- **L2 (additional):** 80,000
- **L1+L2 (total):** 480,000

## Base locale

This is a regional variant of [[locale-zh-001]] (Chinese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-zh-001]] with Macao conventions (Traditional Chinese, Macao). Chinese and Portuguese are the official languages.

- **Script and standard:** Traditional characters; Cantonese is the daily spoken language and Written Chinese is the formal standard. Use `zh-Hant-MO`.
- **Vocabulary:** closer to Hong Kong usage than Taiwan; Portuguese names and street names are transcribed in Chinese by the Macao SAR government forms (for example 澳門, 氹仔, 路環).
- **Currency:** Macao pataca (MOP$, 澳門元); the Hong Kong dollar is also widely accepted.
- **Bilingualism:** official notices appear in both Chinese and Portuguese; do not translate Portuguese proper names and institution names that have an official Chinese form.

## Common pitfalls

- Using Mainland or Taiwan place-name forms for Macao.
- Dropping the Portuguese form where bilingual presentation is required.
- The general pitfalls in [[locale-zh-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for zh-Hant-MO (https://cldr.unicode.org)
