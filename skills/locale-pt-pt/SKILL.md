---
name: locale-pt-pt
description: Use when working with the Portuguese (Portugal) locale (`pt-PT`) — its endonym Português (Portugal), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Portuguese (Portugal) (pt-PT)

Reference data for the **Portuguese (Portugal)** locale — endonym **Português (Portugal)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pt-PT`
- **ISO 639-1:** `pt`
- **ISO 639-3:** `por`
- **Script:** Latn (Latin)
- **Region:** PT (Portugal)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 10,000,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 10,500,000

## Base locale

This is a regional variant of [[locale-pt-001]] (Portuguese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

(CLDR defines a region-specific override for `pt-PT`, distinct from the general `pt` rule.)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-pt-001]] with European Portuguese conventions.

- **Address:** "tu" is used for informal singular; "você" is avoided or can sound brusque, so use the verb in the third person with no pronoun, or "o senhor / a senhora" or a title ("Senhor Doutor") for formal text. Plural informal is "vocês".
- **Vocabulary:** "ficheiro", "ecrã", "rato", "telemóvel", "autocarro", "pequeno-almoço", "equipa", "utilizador", "palavra-passe", "descarregar" (download), "aplicação", "email". Use "€" after the amount: "12,50 €".
- **Grammar:** "estou a fazer" instead of the gerund; enclisis ("diz-me"); proclisis after negation and some conjunctions ("não me diz").
- **Spelling:** AO90 has been official in Portugal since the end of its transition period in 2015, though it is debated; silent consonants were dropped ("ação", "ótimo") and pronounced ones stay ("facto"). Check the Priberam dictionary or Ciberdúvidas for doubtful words.
- **Formats:** decimal comma, space (non-breaking) for thousands in CLDR `pt-PT`, day/month/year, 24-hour clock, "17 de outubro de 2026".
- **Tone:** more formal and reserved than Brazilian Portuguese; titles (Doutor, Engenheiro, Professor) are used frequently.

## Common pitfalls

- Using Brazilian vocabulary ("arquivo", "tela", "celular") or "você" as a default.
- Using the gerund progressive.
- Mixing AO90 and pre-AO90 spelling.
- The general pitfalls in [[locale-pt-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Priberam Dicionário (https://dicionario.priberam.org)
- Microsoft Localization Style Guide, Portuguese (Portugal) (https://aka.ms/portuguese-portugal-styleguide)
