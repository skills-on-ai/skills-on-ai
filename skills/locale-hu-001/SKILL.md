---
name: locale-hu-001
description: Use when working with the Hungarian locale (`hu-001`) — its endonym Magyar, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hungarian (hu-001)

Reference data for the **Hungarian** locale — endonym **Magyar**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hu-001`
- **ISO 639-1:** `hu`
- **ISO 639-3:** `hun`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 12,500,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 14,000,000

## Regional variants

This is the base/macro locale for Hungarian. Region-specific variants in this dataset:

- [[locale-hu-hu]] (Hungarian (Hungary))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Hungarian is an agglutinative Uralic language, written in the Latin alphabet with á, é, í, ó, ö, ő, ú, ü, ű. The Hungarian Research Centre for Linguistics and the Hungarian Academy of Sciences publish the spelling rules (A magyar helyesírás szabályai). See [[locale-hu-hu]].

**Translate ideas, not words.**

- Hungarian attaches suffixes to stems for case, possession, number, and person. English prepositional phrases become case suffixes: `a fájlban`, `a felhasználótól`, `a mappa nevét`. Restructure English sentences, and put the focus before the verb.
- Hungarian has no gender and no "he"/"she" distinction (`ő` means both). Preserve that: do not add gender where the source does not.
- Possession is marked on the possessed noun (`a felhasználó fiókja`, "the user's account").
- Re-express idioms by meaning: "it's a piece of cake" is "gyerekjáték" or "ez csak fenékig tejföl".

**Grammar that trips translators.**

- Vowel harmony: suffix vowels agree with the stem (front/back, rounded/unrounded). Loanwords and acronyms follow their pronunciation.
- Definite and indefinite conjugation: the verb form changes with a definite object (`Olvasok egy fájlt` versus `Olvasom a fájlt`).
- After a numeral the noun is singular (`öt fájl`). Plural categories: one and other. See [[unicode-messageformat]].
- Names: Hungarian writes the family name first (`Nagy János`); the English order is used only in international contexts.

**Register.**

- Formal address uses `Ön` (singular) and `Önök` (plural), with third-person verbs; informal address uses `te` and `ti`. There is also a middle form with `maga`, which is rude or old-fashioned. UI and customer text commonly use `Ön` in banking and formal contexts and `te` in many consumer brands. Do not mix.
- UI commands use the imperative (`Mentse` with Ön, `Mentsd` with te) or the infinitive-like noun form (`Mentés`) for buttons.

**Orthography and typography.**

- The double-acute letters `ő` and `ű` are distinct from `õ` and `û`; fonts and legacy encodings (Latin-1) often substitute the wrong forms. Use the correct Unicode letters.
- Quotation marks `„…”` with nested `»…«`. Dates are year-first: `2026. október 17.` (period after the year, month lowercase, period after the day); 24-hour clock.
- Numbers: decimal comma, non-breaking space for thousands; currency `12,50 Ft` or `1 250 Ft` after the amount; sentence case for titles.

## Common pitfalls

- Using `õ` and `û` instead of `ő` and `ű`.
- Wrong vowel harmony in suffixes.
- Putting the plural after a numeral.
- Using English name order and date order.
- Mixing Ön and te.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- A magyar helyesírás szabályai (Hungarian Academy of Sciences), https://helyesiras.mta.hu
- Microsoft Localization Style Guide, Hungarian (https://aka.ms/hungarian-styleguide)
