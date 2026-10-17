---
name: locale-ar-dz
description: Use when working with the Arabic (Algeria) locale (`ar-DZ`) — its endonym العربية (الجزائر), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Arabic (Algeria) (ar-DZ)

Reference data for the **Arabic (Algeria)** locale — endonym **العربية (الجزائر)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ar-DZ`
- **ISO 639-1:** `ar`
- **ISO 639-3:** `ara`
- **Script:** Arab (Arabic)
- **Region:** DZ (Algeria)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 40,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 43,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-ar-001]] (Arabic), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **two**, **few**, **many**, **other** (6 forms).

- **zero** — `n = 0` (e.g. 0)
- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n % 100 = 3..10` (e.g. 3~10, 103~110, 1003, …)
- **many** — `n % 100 = 11..99` (e.g. 11~26, 111, 1011, …)
- **other** — everything else (e.g. 100~102, 200~202, 300~302, 400~402, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ar-001]] with these Algerian conventions. Arabic and Tamazight (Berber) are official; spoken Algerian Arabic (Darija) is far from MSA and is rarely written formally. French is widely used in business and education.

- **Currency and numbers:** Algerian dinar (DZD, د.ج); Western digits (0-9) are the norm in Algeria. Check CLDR `ar-DZ`.
- **Month names:** French-derived names (جانفي, فيفري, مارس, أفريل, ماي, جوان, جويلية, أوت, سبتمبر, أكتوبر, نوفمبر, ديسمبر) are the everyday forms in Algeria; MSA يناير / فبراير forms are used in some official or international contexts. Pick the form that matches the audience.
- **French loans:** terms such as "ordinateur" and "internet" appear in speech; in writing prefer MSA terms (حاسوب, الإنترنت) unless the project glossary says otherwise.
- **Tamazight:** if the product includes Tamazight, Tifinagh script and Latin script are both used; do not translate Berber names into Arabic spellings carelessly.

## Common pitfalls

- Using Eastern Arabic-Indic digits by default.
- Mixing Darija expressions into formal text.
- The general pitfalls in [[locale-ar-001]] (calques, passive overuse, bidirectional text, and gender agreement) also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Arabic (https://aka.ms/arabic-styleguide)
- Unicode CLDR locale data for digits, calendars, and currency formats (https://cldr.unicode.org)
