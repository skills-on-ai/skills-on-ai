---
name: locale-sw-ke
description: Use when working with the Swahili (Kenya) locale (`sw-KE`) — its endonym Kiswahili (Kenya), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Swahili (Kenya) (sw-KE)

Reference data for the **Swahili (Kenya)** locale — endonym **Kiswahili (Kenya)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sw-KE`
- **ISO 639-1:** `sw`
- **ISO 639-3:** `swa`
- **Script:** Latn (Latin)
- **Region:** KE (Kenya)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,000,000
- **L2 (additional):** 15,000,000
- **L1+L2 (total):** 17,000,000

## Base locale

This is a regional variant of [[locale-sw-001]] (Swahili), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sw-001]] with the conventions of Kenya. Swahili and English are both official, and Swahili is the national language. Everyday Kenyan Swahili mixes in English and the urban slang Sheng, which should not appear in standard content.

- **Standard:** use Standard Swahili in product, government, and educational content. Kenyan writing tends to use more English loanwords than Tanzanian writing; prefer an established Swahili term where one exists and is widely understood.
- **Formats:** Kenyan shilling (`KSh`); dates `17 Oktoba 2026`; 24-hour clock; decimal point in many Kenyan publications (check CLDR `sw-KE`).
- **Context:** Kenya is multilingual; Swahili content should be complete and not a thin translation of English.
- **Tone:** warm and respectful, with greetings (`Karibu`, `Asante`) natural in service text.

## Common pitfalls

- Writing Sheng slang in formal content.
- Using English word order.
- The general pitfalls in [[locale-sw-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Chama cha Kiswahili cha Taifa (CHAKITA), Kenya
