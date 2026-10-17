---
name: locale-fr-fr
description: Use when working with the French (France) locale (`fr-FR`) — its endonym Français (La France), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (France) (fr-FR)

Reference data for the **French (France)** locale — endonym **Français (La France)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-FR`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** FR (FR)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 64,000,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 68,000,000

## Base locale

This is a regional variant of [[locale-fr-001]] (French), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fr-001]] with the conventions of France.

- **Law and terminology:** French law (the loi Toubon of 1994) requires French in consumer information and product documentation in France; use official terms from FranceTerme where they exist (for example "courriel" is recommended for "email", although "e-mail" and "mail" are common in speech).
- **Typography:** non-breaking space before `: ; ! ?` and inside guillemets; decimal comma and narrow non-breaking space for thousands; euro after the amount ("12,50 €").
- **Vocabulary:** "ordinateur", "portable" (mobile or laptop), "week-end", "petit déjeuner / déjeuner / dîner" (breakfast, lunch, dinner), "nonante" is not used (France says "quatre-vingt-dix"; "soixante-dix").
- **Register:** "vous" is the default; consumer brands may use "tu". Official forms use "Madame, Monsieur".
- **Dates and times:** day/month/year; 24-hour clock; the week starts on Monday.

## Common pitfalls

- Using Canadian forms ("courriel", "magasiner", "fin de semaine") unintentionally, or Belgian/Swiss numbers ("septante").
- Omitting the space before `: ; ! ?`.
- The general pitfalls in [[locale-fr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, French (https://aka.ms/french-france-styleguide and https://aka.ms/french-canada-styleguide)
- Académie française, Dictionnaire de l'Académie française and its language guidance (https://www.academie-francaise.fr)
- FranceTerme, the official French terminology database of the Délégation générale à la langue française et aux langues de France
