---
name: locale-lv-001
description: Use when working with the Latvian locale (`lv-001`) — its endonym Latviešu, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Latvian (lv-001)

Reference data for the **Latvian** locale — endonym **Latviešu**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lv-001`
- **ISO 639-1:** `lv`
- **ISO 639-3:** `lav`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,500,000
- **L2 (additional):** 600,000
- **L1+L2 (total):** 2,100,000

## Regional variants

This is the base/macro locale for Latvian. Region-specific variants in this dataset:

- [[locale-lv-lv]] (Latvian (Latvia))

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **other** (3 forms).

- **zero** — `n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19` (e.g. 0, 10~20, 30, 40, …)
- **one** — `n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 2~9, 22~29, 102, 1002, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Latvian is a Baltic language written in the Latin alphabet with ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž. The Latvian Language Agency (Latviešu valodas aģentūra) and the Latvian Language Institute maintain the norm. See [[locale-lv-lv]].

**Translate ideas, not words.**

- Latvian is inflected, with seven cases and two genders (masculine and feminine). Restructure English sentences; do not translate word for word.
- Latvian prefers verbs and simple clauses. English noun stacks become genitive chains or compounds.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Plurals have three categories: zero, one, and other (`0 faili`, `1 fails`, `21 fails`, `2 faili`). The `one` category covers numbers ending in 1 except 11. See [[unicode-messageformat]].
- Names and loanwords are declined and take gender endings (`Jānis` becomes `Jāņa` in the genitive); women's surnames take -a or -e (`Bērziņa`). Forms must collect and show the gender-correct form.
- Verbs agree with the subject in person and number; the debitive mood (`jāsaglabā`) expresses necessity.

**Register.**

- `Tu` (informal) and `jūs` (polite or plural). Public text, banking, and customer service use `jūs`; consumer brands often use `tu`. Do not mix.
- UI commands use the imperative (`Saglabājiet` with jūs, `Saglabā` with tu) or the infinitive.

**Orthography and typography.**

- Use the macrons and cedillas (ā, ē, ī, ū, ģ, ķ, ļ, ņ); never replace them with ASCII.
- Quotation marks `„…“`; dates `2026. gada 17. oktobris` or `17.10.2026.`; decimal comma; non-breaking space for thousands; currency `12,50 €`.
- Follow the State Language Centre's requirements for official content in Latvia.

## Common pitfalls

- Dropping macrons and cedillas.
- Using Russian forms.
- Wrong plural category (`one` versus `other` for numbers ending in 11).
- Not declining names.
- Mixing tu and jūs.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Latviešu valodas aģentūra (https://valoda.lv) and the State Language Centre (Valsts valodas centrs)
- Microsoft Localization Style Guide, Latvian (https://aka.ms/latvian-styleguide)
