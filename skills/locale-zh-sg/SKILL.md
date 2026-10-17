---
name: locale-zh-sg
description: Use when working with the Chinese (Simplified, Singapore) locale (`zh-SG`) — its endonym 简体中文 (新加坡), Han (Simplified) script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chinese (Simplified, Singapore) (zh-SG)

Reference data for the **Chinese (Simplified, Singapore)** locale — endonym **简体中文 (新加坡)**, written in the Han (Simplified) script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zh-SG`
- **ISO 639-1:** `zh`
- **ISO 639-3:** `cmn`
- **Script:** Hans (Han (Simplified))
- **Region:** SG (Simplified, Singapore)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,200,000
- **L2 (additional):** 1,600,000
- **L1+L2 (total):** 2,800,000

## Base locale

This is a regional variant of [[locale-zh-001]] (Chinese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-zh-001]] with Singapore conventions (Simplified Chinese, Singapore). Mandarin is one of four official languages; the Singapore standard shares Mainland Simplified characters.

- **Script and standard:** Simplified characters, adopted in Singapore in the 1970s; use `zh-Hans-SG`.
- **Vocabulary:** mostly Mainland terms with local words for Singapore institutions and daily life (for example 组屋 for public housing). Government texts use official translations.
- **Punctuation:** “ ” quotation marks as in Mainland China; full-width punctuation.
- **Currency and formats:** Singapore dollar (S$ or 新元); day/month/year in bilingual notices; decimal point; English co-official, so mixed-language presentation is normal.
- **Tone:** courteous and clear; English terms are kept in parentheses in technical copy where local readers expect them.

## Common pitfalls

- Using Taiwan or Hong Kong vocabulary.
- Using RMB (¥) for Singapore prices.
- The general pitfalls in [[locale-zh-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Chinese (Simplified) (https://aka.ms/chinese-simplified-styleguide)
