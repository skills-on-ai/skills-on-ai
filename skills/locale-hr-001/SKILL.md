---
name: locale-hr-001
description: Use when working with the Croatian locale (`hr-001`) — its endonym Hrvatski, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Croatian (hr-001)

Reference data for the **Croatian** locale — endonym **Hrvatski**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hr-001`
- **ISO 639-1:** `hr`
- **ISO 639-3:** `hrv`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,100,000
- **L2 (additional):** 1,400,000
- **L1+L2 (total):** 6,500,000

## Regional variants

This is the base/macro locale for Croatian. Region-specific variants in this dataset:

- [[locale-hr-ba]] (Croatian (Bosnia and Herzegovina))
- [[locale-hr-hr]] (Croatian (Croatia))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Croatian is a South Slavic language written in the Latin script (with č, ć, đ, š, ž and the digraphs dž, lj, nj). It uses ijekavian forms in the standard. The Institute of Croatian Language and Linguistics (Institut za hrvatski jezik i jezikoslovlje) maintains the norm. See [[locale-hr-hr]] and [[locale-hr-ba]].

**Translate ideas, not words.**

- Croatian is highly inflected, with seven cases and three genders. Restructure English sentences.
- Prefer Croatian vocabulary to Serbian or loan forms: `tisuća` (not `hiljada`), `zrakoplov`, `vlak`, `glazba`, `kolodvor`, `točno`. Month names are Croatian: `siječanj`, `veljača`, `ožujak`, `travanj`, `svibanj`, `lipanj`, `srpanj`, `kolovoz`, `rujan`, `listopad`, `studeni`, `prosinac`.
- The future tense uses `ću` plus infinitive (`Spremit ću`), and the standard prefers the infinitive over `da` plus present.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Plurals: one, few, and other categories (`1 datoteka`, `2 datoteke`, `5 datoteka`). See [[unicode-messageformat]].
- Clitics occupy second position in the clause (`Datoteka je spremljena`).
- Adjectives and nouns agree in gender, number, and case.

**Register.**

- "Ti" is informal and "Vi" is formal (capitalized in letters to one person); UI and public text commonly use "Vi" or an impersonal style, though consumer apps increasingly use "ti". Do not mix.
- UI commands use the imperative (`Spremite`) or the infinitive (`Spremi`).

**Orthography and typography.**

- Croatian orthography is phonemic and morphological: `ije/je` follows the jat reflex (`lijepo`, `mlijeko`, `rijeka`, `vrijeme`).
- Quotation marks `„…“`; dates `17. listopada 2026.` (periods after the day and year); decimal comma; period or space for thousands; the euro (`12,50 €`) is the currency since 1 January 2023.
- Use Croatian terminology from the Institute's Hrvatski jezični portal (HJP) and Jezični savjetnik.

## Common pitfalls

- Using Serbian forms (ekavian, `hiljada`, `šta`) in Croatian text.
- Using `da` plus present where the infinitive is standard.
- Using the kuna for current prices (the euro replaced it in 2023).
- Dropping the period in ordinal dates.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institut za hrvatski jezik i jezikoslovlje, Hrvatski jezični portal (https://hjp.znanje.hr)
- Microsoft Localization Style Guide, Croatian (https://aka.ms/croatian-styleguide)
