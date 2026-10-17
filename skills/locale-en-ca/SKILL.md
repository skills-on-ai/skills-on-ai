---
name: locale-en-ca
description: Use when working with the English (Canada) locale (`en-CA`) — its endonym English (Canada), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Canada) (en-CA)

Reference data for the **English (Canada)** locale — endonym **English (Canada)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-CA`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** CA (Canada)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 20,000,000
- **L2 (additional):** 10,000,000
- **L1+L2 (total):** 30,000,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Canadian conventions. Canadian English blends British and American usage.

- **Spelling:** -our ("colour", "favour"), -ize ("organize") in most publishing, -re ("centre", "theatre"), "licence" (noun) and "license" (verb), "cheque", "grey", "tire" and "curb" follow American forms, "program" is standard.
- **Dates and numbers:** the federal standard is YYYY-MM-DD; day/month/year and month/day/year both appear, so write the month in words to avoid ambiguity. The decimal marker in English-Canadian text is the point, with commas or spaces for thousands; $ stands for the Canadian dollar.
- **Bilingual context:** federal and Quebec materials appear in English and French; use the same terminology as the official French wording and do not translate official names (such as "Service Canada"). The federal Translation Bureau's Language Portal (Termium Plus) is the authority for Canadian government terms.
- **Vocabulary:** "postal code", "province", "washroom", "toque", "loonie", "toonie", "Prime Minister".
- **Tone:** polite and moderate; Canadians tend to read American-style hype as pushy.

## Common pitfalls

- Choosing pure American spellings for a Canadian audience.
- Writing "state" or "zip code" instead of "province" and "postal code".
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Language Portal of Canada (Termium Plus), https://www.btb.termiumplus.gc.ca
- Editing Canadian English (Editors Canada)
