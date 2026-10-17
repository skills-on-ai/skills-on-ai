---
name: locale-ro-001
description: Use when working with the Romanian locale (`ro-001`) — its endonym Română, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Romanian (ro-001)

Reference data for the **Romanian** locale — endonym **Română**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ro-001`
- **ISO 639-1:** `ro`
- **ISO 639-3:** `ron`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 24,000,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 28,000,000

## Regional variants

This is the base/macro locale for Romanian. Region-specific variants in this dataset:

- [[locale-ro-ro]] (Romanian (Romania))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `v != 0 or n = 0 or n != 1 and n % 100 = 1..19` (e.g. 0, 2~16, 101, 1001, …)
- **other** — everything else (e.g. 20~35, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Romanian is a Romance language written in the Latin alphabet with ă, â, î, ș, ț. The Romanian Academy publishes the standard spelling and grammar dictionary (DOOM, Dicționarul ortografic, ortoepic și morfologic al limbii române). See [[locale-ro-ro]].

**Translate ideas, not words.**

- Romanian is inflected, with an enclitic definite article and flexible word order. Restructure English sentences; do not translate word for word.
- Prefer Romance vocabulary and avoid unnecessary English loanwords where a Romanian term exists and is used (`descărcare` for download, `parolă` for password), while accepting established loans (`mouse`, `e-mail`).
- Re-express idioms by meaning: "it's a piece of cake" is "este floare la ureche".

**Grammar that trips translators.**

- Three genders (masculine, feminine, neuter); the neuter takes masculine singular and feminine plural forms. The definite article is a suffix: `fișierul`, `pagina`, `fișierele`.
- Plurals: one, few, and other categories. After numerals of 20 and above (and ending in 0 or 2 to 19) the noun takes `de`: `1 fișier`, `2 fișiere`, `20 de fișiere`. See [[unicode-messageformat]].
- Cases: nominative-accusative, genitive-dative, vocative; the genitive-dative needs an article marker (`al`, `a`, `ai`, `ale`) with possessives.
- Subjunctive after `să`; the future is `va` + infinitive or `o să` + subjunctive.

**Register.**

- `Dumneavoastră` (polite) is the formal "you" and is the standard for UI, banking, support, and public text; `tu` is informal and used in youth, gaming, and consumer brands. Do not mix. The polite plural also uses `dumneavoastră`.
- UI commands use the imperative (`Salvați` with dumneavoastră, `Salvează` with tu) or the infinitive (`Salvare` as a noun for buttons).

**Orthography and typography.**

- Use comma-below `ș` and `ț` (U+0219 and U+021B), not cedilla `ş` and `ţ` (U+015F and U+0163), which are Turkish-style forms. Many fonts and legacy texts mix them; normalize to the comma-below.
- `â` is written inside words and `î` at the start and end (`în`, `a coborî`), with the exceptions of `român` and compounds.
- Quotation marks `„…”` with nested `«…»`; numbers: decimal comma, period or space for thousands; currency `12,50 lei`; dates `17 octombrie 2026`; 24-hour clock.
- Sentence case for titles; months and days lowercase.

## Common pitfalls

- Using cedilla `ş ţ` instead of comma-below `ș ț`.
- Missing the `de` after numerals (`20 fișiere`).
- Wrong â/î.
- Missing the definite article suffix.
- Mixing tu and dumneavoastră.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academia Română, Dicționarul ortografic, ortoepic și morfologic al limbii române (DOOM3)
- Microsoft Localization Style Guide, Romanian (https://aka.ms/romanian-styleguide)
