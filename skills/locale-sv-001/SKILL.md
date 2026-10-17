---
name: locale-sv-001
description: Use when working with the Swedish locale (`sv-001`) — its endonym Svenska, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Swedish (sv-001)

Reference data for the **Swedish** locale — endonym **Svenska**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sv-001`
- **ISO 639-1:** `sv`
- **ISO 639-3:** `swe`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 10,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 13,000,000

## Regional variants

This is the base/macro locale for Swedish. Region-specific variants in this dataset:

- [[locale-sv-fi]] (Swedish (Finland))
- [[locale-sv-se]] (Swedish (Sweden))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Swedish spelling and usage are guided by Språkrådet (the Language Council of Sweden), the Svenska Akademiens ordlista (SAOL), and the Svenska skrivregler. See [[locale-sv-se]] and [[locale-sv-fi]].

**Translate ideas, not words.**

- Swedish is direct and informal. Avoid American marketing exaggeration and over-politeness.
- Write compounds as one word ("användarkonto"). Splitting them ("särskrivning", for example "användar konto") is the best-known error in translated Swedish and changes meaning.
- English noun stacks become compounds or prepositional phrases.
- Re-express idioms by meaning: "it's a piece of cake" is "det är en barnlek" or "det är lätt som en plätt".

**Grammar that trips translators.**

- Two genders: common (en) and neuter (ett); the definite article is a suffix ("en bok, boken", "ett hus, huset") with a separate article before an adjective ("den stora boken").
- Verb second in main clauses; no person conjugation ("jag är", "du är", "vi är").
- Plurals and adjective agreement ("en röd bil", "ett rött hus").
- Passives with "-s" are common ("Filen sparas").
- The pronoun "hen" is accepted in Swedish public writing as a gender-neutral pronoun and is in SAOL.

**Register.**

- "Du" is used with everyone, including customers and officials (the "du-reform" of the 1960s). "Ni" can sound distant or even rude to one person; do not use it in UI.
- UI commands use the imperative ("Spara") or the infinitive; follow the project convention.

**Orthography and typography.**

- Keep å, ä, and ö; do not replace them with a, a, o.
- Quotation marks `”…”`; decimal comma, space for thousands; dates "17 oktober 2026" or "2026-10-17"; 24-hour clock ("kl. 17.30"); currency "12,50 kr" with a non-breaking space.
- Months, days, and nationalities are lowercase; titles use sentence case.

## Common pitfalls

- Splitting compounds (särskrivning).
- Using "ni" as a formal singular address.
- False friends: "eventuellt" is "possibly", "aktuell" is "current", "gift" is married or poison, "rolig" is "fun".
- Using English-style capitalization or month names.
- Direct translation of passive and noun phrases.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Språkrådet (https://www.sprakradet.se) and Svenska Akademiens ordlista (SAOL)
- Microsoft Localization Style Guide, Swedish (https://aka.ms/swedish-styleguide)
