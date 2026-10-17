---
name: locale-da-001
description: Use when working with the Danish locale (`da-001`) — its endonym Dansk, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Danish (da-001)

Reference data for the **Danish** locale — endonym **Dansk**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `da-001`
- **ISO 639-1:** `da`
- **ISO 639-3:** `dan`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,600,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 5,900,000

## Regional variants

This is the base/macro locale for Danish. Region-specific variants in this dataset:

- [[locale-da-dk]] (Danish (Denmark))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1 or t != 0 and i = 0,1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Danish is regulated in spelling by Dansk Sprognævn (the Danish Language Council), whose Retskrivningsordbogen is the official spelling dictionary. See [[locale-da-dk]].

**Translate ideas, not words.**

- Danish is direct, informal, and unpretentious. English marketing hype and flowery politeness sound exaggerated; use plain, factual language.
- Danish writes compound nouns as one word ("brugerkonto", "kaffekop"). Splitting compounds under English influence ("bruger konto") is the most visible error in translated text ("særskrivning").
- English noun stacks become compounds or prepositional phrases: "user account settings" is "indstillinger for brugerkonto" or "kontoindstillinger".
- Re-express idioms by meaning: "it's a piece of cake" is "det er en leg" or "det er børnelære".
- English passive constructions often become active or "man" forms ("Filen blev slettet" is fine; avoid long passive chains).

**Grammar that trips translators.**

- Two genders: common (en) and neuter (et). The definite article is a suffix ("en bog, bogen", "et hus, huset"), with a separate article before an adjective ("den store bog").
- Verb second in main clauses; verbs do not change with the person ("jeg er", "du er", "vi er").
- Plural endings (-er, -e, -r, or none) are irregular; check a dictionary.
- "Der" is the existential subject ("Der er en fejl"); reflexive possessive "sin/sit/sine" is used when the owner is the subject.

**Register.**

- "Du" is used to everyone, including customers and superiors. The polite "De" is archaic and now found only in formal letters or older generations. Do not use "De" in UI.
- UI commands use the imperative ("Gem") or the infinitive ("Gem ændringer"); follow the project convention.

**Orthography and typography.**

- The letter "å" (since 1948) replaced "aa", except in some names; nouns are written in lowercase (since 1948). Keep æ, ø, and å.
- Quotation marks `»…«` or `„…“`; follow the publication; decimal comma, period for thousands; dates "17. oktober 2026"; 24-hour clock ("kl. 17.30"); currency "12,50 kr.".
- Months, days, and nationalities are lowercase. Titles use sentence case.

## Common pitfalls

- Splitting compounds ("særskrivning").
- Using "De" or overly polite language.
- False friends: "eventuel" is "possible", "bekomme" is "to agree with" (not "to receive"), "gift" means married or poison.
- English capitalization and date formats.
- Overusing English loanwords where Danish has a term.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Dansk Sprognævn, Retskrivningsordbogen (https://sproget.dk)
- Microsoft Localization Style Guide, Danish (https://aka.ms/danish-styleguide)
