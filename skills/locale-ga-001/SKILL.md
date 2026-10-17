---
name: locale-ga-001
description: Use when working with the Irish locale (`ga-001`) — its endonym Gaeilge, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Irish (ga-001)

Reference data for the **Irish** locale — endonym **Gaeilge**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ga-001`
- **ISO 639-1:** `ga`
- **ISO 639-3:** `gle`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 170,000
- **L2 (additional):** 1,730,000
- **L1+L2 (total):** 1,900,000

## Regional variants

This is the base/macro locale for Irish. Region-specific variants in this dataset:

- [[locale-ga-ie]] (Irish (Ireland))

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **many**, **other** (5 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n = 3..6` (e.g. 3~6)
- **many** — `n = 7..10` (e.g. 7~10)
- **other** — everything else (e.g. 0, 11~25, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Irish (Gaeilge) is a Celtic language, the first official language of Ireland and an official EU language. Written Irish follows the Caighdeán Oifigiúil (Official Standard), and terminology comes from the national terminology database Tearma.ie (https://www.tearma.ie). See [[locale-ga-ie]].

**Translate ideas, not words.**

- Irish is verb-subject-object. English subject-verb-object sentences must be reordered: `Shábháil mé an comhad` (saved I the file).
- Irish has no verb "to have"; possession uses the preposition `ag` (`Tá comhad agam`, "a file is at me"). Irish has no single words for "yes" and "no"; the answer repeats the verb (`An bhfuil...? Tá / Níl`).
- Irish distinguishes two verbs for "to be": the substantive verb `bí` (`Tá an comhad mór`, states and locations) and the copula `is` (`Is comhad é`, identity and classification). English "is" must be mapped to the right one.
- English noun stacks become genitive chains: `socruithe cuntais an úsáideora` (settings of account of the user).
- Re-express idioms by meaning; Irish has rich idiomatic expression that does not map from English.

**Grammar that trips translators.**

- Initial mutations change the first letter of a word after certain words: lenition (séimhiú: `bád` to `bhád`, written with `h`) and eclipsis (urú: `bád` to `mbád`). Articles, prepositions, numerals, and possessives trigger them. Missing mutations are the commonest machine-translation error.
- Broad and slender consonants; vowels must agree ("caol le caol, leathan le leathan" in spelling).
- Verbal nouns replace the English infinitive and gerund (`ag seoladh`, `ag cur`).
- Prepositional pronouns fuse a preposition and a pronoun (`agam`, `agat`, `aige`, `aici`, `againn`).
- Numerals have a counting form (`a haon`, `a dó`) and a form used with nouns (`aon chomhad`, `dhá chomhad`). Nouns after numerals are singular. Plurals: one, two, few, many, and other. See [[unicode-messageformat]].

**Register.**

- Irish has `tú` (singular) and `sibh` (plural); there is no separate polite singular. Public text uses clear, plain forms of the standard.
- UI commands use the imperative (`Sábháil`) or the verbal noun (`Sábháil`, `Cuir`).

**Orthography and typography.**

- Keep the fada (á, é, í, ó, ú) on all vowels; omitting it changes meaning. In all-capital text, keep the fada.
- Quotation marks `“…”`; dates `17 Deireadh Fómhair 2026`; euro `€12.50` with a decimal point and comma thousands separator in Ireland; 24-hour clock.

## Common pitfalls

- Missing initial mutations.
- Using English word order.
- Confusing `is` and `tá`.
- Dropping the fada.
- Using plural nouns after numerals.
- Relying on machine translation without a native reviewer.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Tearma.ie, National Terminology Database for Irish (https://www.tearma.ie)
- Foras na Gaeilge and An Caighdeán Oifigiúil
