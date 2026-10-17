---
name: locale-nn-no
description: Use when working with the Norwegian Nynorsk (Norway) locale (`nn-NO`) — its endonym Norsk Nynorsk (Noreg), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Norwegian Nynorsk (Norway) (nn-NO)

Reference data for the **Norwegian Nynorsk (Norway)** locale — endonym **Norsk Nynorsk (Noreg)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `nn-NO`
- **ISO 639-1:** `nn`
- **ISO 639-3:** `nno`
- **Script:** Latn (Latin)
- **Region:** NO (Norway)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 600,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 1,100,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Norwegian Nynorsk (nynorsk) is the second official written standard, built on Norwegian dialects. State and public bodies in Norway must use both Bokmål and Nynorsk, and many municipalities use Nynorsk as their administrative language. The Språkrådet and the Nynorskordboka set the norm. See also [[locale-nb-no]].

**Translate ideas, not words.**

- Write Nynorsk forms, not Bokmål with a few word swaps. Nynorsk has its own vocabulary and inflection; converting a Bokmål text mechanically gives mixed, incorrect forms.
- Re-express idioms by meaning.

**Grammar.**

- Typical Nynorsk forms differ from Bokmål: "eg" for "jeg", "ikkje" for "ikke", "kva" for "hva", "ho" for "hun", "korleis" for "hvordan", a-infinitives ("å lesa") where Bokmål has "å lese", and feminine nouns with their own forms ("ei jente, jenta").
- Three genders; feminine nouns have their own forms ("ei bok, boka").
- Verb second in main clauses.

**Register.**

- "Du" is used with everyone. The polite "De" is archaic.

**Orthography and typography.**

- Keep æ, ø, and å. Use `«…»` as quotation marks.
- Decimal comma, space for thousands; dates "17. oktober 2026"; currency "kr 12,50".
- Use the dictionary Nynorskordboka (https://ordbokene.no) for approved forms; the norm allows several variants, so choose one set and keep it consistent.

## Common pitfalls

- Mixing Bokmål and Nynorsk forms.
- Using Bokmål word choices when a Nynorsk word exists.
- Using the wrong feminine or definite forms.
- Splitting compounds.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Språkrådet (https://www.sprakradet.no) and Nynorskordboka (https://ordbokene.no)
- Microsoft Localization Style Guide, Norwegian Nynorsk (https://aka.ms/Norwegian-nynorsk-styleguide)
