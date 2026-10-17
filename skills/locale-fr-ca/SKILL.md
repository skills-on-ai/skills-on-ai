---
name: locale-fr-ca
description: Use when working with the French (Canada) locale (`fr-CA`) — its endonym Français (Le Canada), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (Canada) (fr-CA)

Reference data for the **French (Canada)** locale — endonym **Français (Le Canada)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-CA`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** CA (Canada)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 7,800,000
- **L2 (additional):** 2,900,000
- **L1+L2 (total):** 10,700,000

## Base locale

This is a regional variant of [[locale-fr-001]] (French), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fr-001]] with Canadian (mostly Québécois) conventions. The Office québécois de la langue française (OQLF) is the reference for terminology and style in Quebec.

- **Law:** the Charter of the French Language requires French to be available in commercial communication in Quebec; check requirements for the product (including product labelling and websites) before finalizing.
- **Typography:** Canadian French does not insert a space before `; ! ?`; the non-breaking space is kept before the colon and inside guillemets. The OQLF writes time as "17 h 30" and amounts as "12,50 $" with a non-breaking space; check OQLF guidance for the project.
- **Terminology:** use Québécois technical terms from the OQLF: "courriel" (email), "clavardage" (chat), "téléverser" (upload), "télécharger" (download), "infolettre" (newsletter), "balado" (podcast), "magasiner" (shop), "fin de semaine" (weekend), "stationnement" (parking), "logiciel", "mot de passe".
- **Feminization:** feminine forms of job titles are the norm ("la ministre", "la directrice", "la présidente").
- **Register:** the tutoiement is more widely accepted in brand voice than in France; "vous" remains the default for formal contexts.
- **Anglicisms:** the OQLF discourages literal anglicisms ("faire du sens", "dans le but de", "opportunité").

## Common pitfalls

- Using France-only terms ("e-mail", "week-end", "parking") where the OQLF form exists.
- Using a space before `; ! ?`, or the 12-hour clock without justification.
- The general pitfalls in [[locale-fr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, French (https://aka.ms/french-france-styleguide and https://aka.ms/french-canada-styleguide)
- Office québécois de la langue française, Grand dictionnaire terminologique and Banque de dépannage linguistique (https://www.oqlf.gouv.qc.ca)
