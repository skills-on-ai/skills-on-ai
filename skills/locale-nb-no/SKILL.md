---
name: locale-nb-no
description: Use when working with the Norwegian Bokmål (Norway) locale (`nb-NO`) — its endonym Norsk Bokmål (Norge), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Norwegian Bokmål (Norway) (nb-NO)

Reference data for the **Norwegian Bokmål (Norway)** locale — endonym **Norsk Bokmål (Norge)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `nb-NO`
- **ISO 639-1:** `nb`
- **ISO 639-3:** `nob`
- **Script:** Latn (Latin)
- **Region:** NO (Norway)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,000,000
- **L2 (additional):** 400,000
- **L1+L2 (total):** 4,400,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Norwegian Bokmål (bokmål) is the more widely used of the two official written standards of Norwegian. Spelling and grammar are set by the Språkrådet (Language Council of Norway); the Bokmålsordboka is the main dictionary. See also [[locale-nn-no]] for Nynorsk and [[locale-no-001]] for the macro locale.

**Translate ideas, not words.**

- Norwegian is direct and informal. Avoid exaggerated marketing language and over-politeness.
- Compounds are written as one word ("brukerkonto"); splitting them ("sær-skriving") is a frequent error in translated text.
- English noun stacks become compounds or prepositional phrases.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Three genders in Bokmål (masculine, feminine, neuter), though the masculine and feminine can be written as common gender. The definite article is a suffix ("boken", "huset").
- Verb second in main clauses; no person conjugation.
- Adjective agreement with gender, number, and definiteness ("en stor bil", "et stort hus", "den store bilen").

**Register.**

- "Du" is used with everyone. The polite "De" is archaic and no longer used in UI or standard writing.
- UI commands use the imperative ("Lagre") or the infinitive; follow the project convention.

**Orthography and typography.**

- Keep æ, ø, and å. Use `«…»` as quotation marks.
- Decimal comma, space for thousands; dates "17. oktober 2026"; 24-hour clock ("kl. 17.30"); currency "kr 12,50" or "12,50 kr" (follow the project convention).
- Months and days are lowercase; titles use sentence case.

## Common pitfalls

- Splitting compounds.
- Using "De" as a formal address.
- Mixing Bokmål and Nynorsk forms.
- False friends: "eventuelt" is "possibly", "gift" is married or poison, "rar" is "strange".

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Språkrådet (https://www.sprakradet.no) and Bokmålsordboka (https://ordbokene.no)
- Microsoft Localization Style Guide, Norwegian Bokmål (https://aka.ms/Norwegian-bokmal-styleguide)
