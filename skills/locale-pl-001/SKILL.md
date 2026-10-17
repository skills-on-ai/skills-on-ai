---
name: locale-pl-001
description: Use when working with the Polish locale (`pl-001`) — its endonym Polski, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Polish (pl-001)

Reference data for the **Polish** locale — endonym **Polski**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pl-001`
- **ISO 639-1:** `pl`
- **ISO 639-3:** `pol`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 40,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 43,000,000

## Regional variants

This is the base/macro locale for Polish. Region-specific variants in this dataset:

- [[locale-pl-pl]] (Polish (Poland))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Polish is a West Slavic language written in the Latin script with the letters ą, ć, ę, ł, ń, ó, ś, ź, ż. The Council for the Polish Language (Rada Języka Polskiego) and the PWN dictionaries (https://sjp.pwn.pl) are the references. See [[locale-pl-pl]].

**Translate ideas, not words.**

- Polish is highly inflected, with seven cases and gendered nouns (including a masculine personal category). Restructure English sentences.
- Polish prefers verbs and active constructions; avoid English noun stacks and heavy nominalizations in new text.
- Re-express idioms by meaning: "it's a piece of cake" is "to betka" or "to pestka".
- Polish drops subject pronouns (`Zapisaliśmy zmiany`).

**Grammar that trips translators.**

- Plurals: one, few, many, and other categories (`1 plik`, `2 pliki`, `5 plików`, `1,5 pliku`). See [[unicode-messageformat]].
- The vocative is used in direct address (`Panie Janie`, `Aniu`).
- Gendered verb forms in the past tense (`zapisałem` for a man, `zapisałam` for a woman) require knowing the speaker; UI text often avoids first-person past forms.
- Women's job titles (feminatywy such as `programistka`, `dyrektorka`) are increasingly used but still debated; follow the client's policy.

**Register.**

- Formal address uses third-person forms with `Pan`, `Pani`, or `Państwo` (`Czy Pan chce zapisać?`); informal address uses `ty`. UI and customer text commonly use `Ty/ty` or an impersonal style in consumer apps, and `Pan/Pani/Państwo` in banking, legal, and enterprise. In letters, `Pan`, `Pani`, `Państwo`, and `Ty` are capitalized.
- UI commands use the imperative (`Zapisz`) or the infinitive (`Zapisz`, `Zapisać`).

**Orthography and typography.**

- Quotation marks `„…”` with nested `«…»`. Use a non-breaking space after single-letter words (`i`, `a`, `o`, `u`, `w`, `z`) to avoid orphan letters at line ends (`sierotki`).
- Numbers: decimal comma, non-breaking space for thousands; currency `12,50 zł` with a non-breaking space; dates `17 października 2026 r.`; 24-hour clock.
- Months, days, and nationalities are lowercase; titles use sentence case.

## Common pitfalls

- Wrong number forms after numerals (`5 plik`).
- Missing the non-breaking space after single-letter words.
- Mixing ty and Pan/Pani.
- Wrong gender in first-person past verbs.
- Dropping Polish diacritics.
- Calques from English (`aplikować` for `to apply to`).

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Rada Języka Polskiego (https://rjp.pl) and Słownik języka polskiego PWN (https://sjp.pwn.pl)
- Microsoft Localization Style Guide, Polish (https://aka.ms/polish-styleguide)
