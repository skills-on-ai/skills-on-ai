---
name: locale-cs-001
description: Use when working with the Czech locale (`cs-001`) — its endonym Čeština, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Czech (cs-001)

Reference data for the **Czech** locale — endonym **Čeština**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `cs-001`
- **ISO 639-1:** `cs`
- **ISO 639-3:** `ces`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 9,800,000
- **L2 (additional):** 2,700,000
- **L1+L2 (total):** 12,000,000

## Regional variants

This is the base/macro locale for Czech. Region-specific variants in this dataset:

- [[locale-cs-cz]] (Czech (Czech Republic))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `i = 2..4 and v = 0` (e.g. 2~4)
- **many** — `v != 0`
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Czech is a West Slavic language written in the Latin script with many diacritics (á, č, ď, é, ě, í, ň, ó, ř, š, ť, ú, ů, ý, ž). The Institute of the Czech Language (Ústav pro jazyk český) and its Internetová jazyková příručka (https://prirucka.ujc.cas.cz) are the reference. See [[locale-cs-cz]].

**Translate ideas, not words.**

- Czech is highly inflected, with seven cases and three genders. Restructure English sentences; do not translate word for word.
- Czech prefers verbs and active constructions. Avoid long English-style noun phrases and the passive.
- Re-express idioms by meaning: "it's a piece of cake" is "je to brnkačka" or "je to hračka".
- Czech drops subject pronouns (`Uložili jsme změny`).

**Grammar that trips translators.**

- Plurals: one, few, many (decimals), and other categories (`1 soubor`, `2 soubory`, `5 souborů`, `1,5 souboru`). See [[unicode-messageformat]].
- The vocative case is used for direct address (`pane Nováku`, `Jano`).
- Women's surnames take -ová (`Nováková`); do not require identical surnames for couples in forms.
- Verbs have aspect; clitics occupy second position in the clause.

**Register.**

- Czech has "vykání" (formal "vy", with plural verb forms) and "tykání" (informal "ty"). UI, banking, support, and public text use "vy"; consumer apps and youth brands may use "ty". Do not mix. In letters, "Vy" is capitalized; in general text lowercase "vy" is standard.
- UI commands use the imperative (`Uložte`) or the infinitive (`Uložit`).

**Orthography and typography.**

- Quotation marks `„…“` and `‚…‘`. A non-breaking space is required after single-letter prepositions and conjunctions (`k`, `s`, `v`, `z`, `o`, `u`, `a`, `i`) and between a number and a unit or currency (`12,50 Kč`).
- Numbers: decimal comma, non-breaking space for thousands; dates `17. října 2026`; 24-hour clock; currency koruna `Kč` after the amount.
- Titles (Ing., Mgr., MUDr.) go before the name and are used in formal address.
- Months, days, and nationalities are lowercase.

## Common pitfalls

- Missing the non-breaking space after single-letter words.
- Wrong number forms (`2 souborů`).
- Mixing vy and ty.
- Forgetting the -ová suffix for women's surnames.
- Confusing Czech and Slovak spelling (`ě`, `ř`, `ů` are Czech).

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Ústav pro jazyk český, Internetová jazyková příručka (https://prirucka.ujc.cas.cz)
- Microsoft Localization Style Guide, Czech (https://aka.ms/czech-styleguide)
