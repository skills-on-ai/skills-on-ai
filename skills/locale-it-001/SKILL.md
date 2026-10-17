---
name: locale-it-001
description: Use when working with the Italian locale (`it-001`) — its endonym Italiano, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Italian (it-001)

Reference data for the **Italian** locale — endonym **Italiano**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `it-001`
- **ISO 639-1:** `it`
- **ISO 639-3:** `ita`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 65,000,000
- **L2 (additional):** 20,000,000
- **L1+L2 (total):** 85,000,000

## Regional variants

This is the base/macro locale for Italian. Region-specific variants in this dataset:

- [[locale-it-ch]] (Italian (Switzerland))
- [[locale-it-it]] (Italian (Italy))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Italian has one written standard, with small differences between Italy, Switzerland, and the diaspora. See [[locale-it-it]] and [[locale-it-ch]].

**Translate ideas, not words.**

- Italian favors longer sentences with subordination and explicit connectors (quindi, tuttavia, inoltre), where English prefers short sentences. Join English fragments, but keep instructions in separate steps.
- English noun stacks and phrasal verbs become prepositional phrases and precise verbs: "user account settings" is "impostazioni dell'account utente"; "to log in" is "accedere".
- The English passive often becomes an active verb, the impersonal "si", or a reflexive: "The file was deleted" is "Il file è stato eliminato" or "Il file viene eliminato".
- Subject pronouns are usually dropped ("Salviamo le modifiche"), and Italian prefers verbs to nominal groups.
- Re-express idioms by meaning: "it's a piece of cake" is "è un gioco da ragazzi" or "è facilissimo".

**Grammar that trips translators.**

- Two genders (masculine, feminine) with articles that depend on the next sound: il, lo, l', la, i, gli, le, with one-sound rules ("lo studente", "gli studenti", "l'amico").
- Prepositions combine with articles (nel, sul, dal, del, alla), and English prepositions rarely map directly: "dipendere da", "interessato a", "pensare a".
- The subjunctive follows verbs of opinion, hope, and doubt ("Penso che sia utile"); the conditional is used for politeness.
- Loanwords stay invariable in the plural ("i file", "gli screenshot") and take a gender ("la password", "il database", "l'e-mail" is feminine).
- The "ed", "ad", and "od" forms are used before the same vowel ("ed" before "e"); the euphonic "d" is a style choice.

**Register.**

- "Tu" and "Lei" (polite singular, with a capital L in many styles) are the two options; consumer apps increasingly use "tu", whereas banks, public bodies, and legal texts use "Lei". "Voi" is the plural for both. Do not mix within a product.
- Commands in UI use the imperative ("Salva") or the infinitive ("Salvare"); keep one convention. Formal letters use "Gentile" or "Egregio", and close with "Cordiali saluti".

**Orthography and typography.**

- Use the accent on final stressed vowels: "è" (is) vs "e" (and); capital "È" (not "E'"). Apostrophes are curly or straight, never accents. Use "perché" with acute accent.
- Quotation marks are `« »` or `" "`; Italian text uses sentence case in titles and lowercases days, months, and languages.
- Numbers: decimal comma, period or space for thousands ("1.234,56"), currency after the amount ("12,50 €"). Dates: "17 ottobre 2026", with "1°" for the first.
- Inclusive language: the schwa (ə) and asterisk are discussed in Italy but are not recommended by the Accademia della Crusca for institutional text; prefer neutral wording ("il personale", "le persone").

## Common pitfalls

- Using English-style title case and capitalized months and days.
- False friends: "attualmente" is "currently", "eventualmente" is "possibly", "libreria" is a bookshop, "sensibile" is sensitive, "assumere" can mean "hire", "realizzare" means "to carry out", "camera" means "room".
- Dropping accents ("e" for "è") or using the apostrophe instead.
- Mixing tu and Lei.
- Gender and article mistakes with loanwords.
- Overlong calqued English noun phrases.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Accademia della Crusca (https://accademiadellacrusca.it) and Treccani dictionaries (https://www.treccani.it)
- Microsoft Localization Style Guide, Italian (https://aka.ms/italian-styleguide)
