---
name: locale-ha-001
description: Use when working with the Hausa locale (`ha-001`) — its endonym Harshen Hausa, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hausa (ha-001)

Reference data for the **Hausa** locale — endonym **Harshen Hausa**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ha-001`
- **ISO 639-1:** `ha`
- **ISO 639-3:** `hau`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 58,000,000
- **L2 (additional):** 36,000,000
- **L1+L2 (total):** 94,000,000

## Regional variants

This is the base/macro locale for Hausa. Region-specific variants in this dataset:

- [[locale-ha-ng]] (Hausa (Nigeria))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Hausa is a Chadic language of Nigeria and Niger, written in the Latin script (boko) with hooked letters ɓ, ɗ, ƙ, ƴ, and historically in the Arabic-based Ajami script. See [[locale-ha-ng]].

**Translate ideas, not words.**

- Hausa has subject-verb-object order and uses aspect-marking pronoun sets (completive, continuous, subjunctive) instead of English tenses: `Na adana fayil` (I saved a file), `Ina adana fayil` (I am saving a file). Choose the aspect that matches the meaning.
- Hausa has two genders (masculine, feminine). The second person singular distinguishes masculine `kai` from feminine `ke`; the plural is `ku`. UI text commonly avoids the gender by using a plural or an impersonal form.
- Use established Hausa terms where they exist (from Bayero University's Centre for the Study of Nigerian Languages and Hausa media) and adopt loanwords in Hausa spelling (`kwamfuta`, `intanet`).
- Re-express idioms and proverbs by meaning.

**Register.**

- Hausa culture values courtesy and greetings (`Sannu`, `Ina kwana`, `Barka`); formal text uses the plural forms and honorifics (`Malam`, `Alhaji`, `Hajiya`, `Dr.`).
- UI commands use the imperative or an impersonal form; keep one convention.

**Orthography and typography.**

- Use the hooked letters `ɓ ɗ ƙ ƴ` and the glottal stop (`'`); substituting b, d, k, and y' changes words. Standard orthography does not mark tone or vowel length; add them only in teaching material.
- Currency naira (`₦`); decimal point; comma thousands separator; dates `17 ga Oktoba, 2026`.

## Common pitfalls

- Substituting ordinary b, d, k, and y for ɓ, ɗ, ƙ, and ƴ.
- Mixing the aspect markers incorrectly.
- Using the wrong gender for "you".

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Centre for the Study of Nigerian Languages, Bayero University Kano
- Ƙamus ɗin Hausa (Hausa dictionary by Bargery or Newman)
