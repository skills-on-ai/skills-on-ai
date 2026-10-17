---
name: locale-gsw-fr
description: Use when working with the Alsatian (France) locale (`gsw-FR`) — its endonym Elsässisch (Frankreich), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Alsatian (France) (gsw-FR)

Reference data for the **Alsatian (France)** locale — endonym **Elsässisch (Frankreich)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `gsw-FR`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `gsw`
- **Script:** Latn (Latin)
- **Region:** FR (France)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 900,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 1,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Alsatian (Elsässisch, Alsatian German) is an Alemannic German dialect spoken in Alsace. It has no single official orthography and is mostly spoken; written Alsatian is used in literature, theatre, cultural signs, and some education. Formal text in Alsace uses French or Standard German. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Write the way Alsatians speak, not Standard German with a few word swaps. Alsatian differs in vocabulary, pronunciation, and grammar; it has no preterite (the perfect is used for the past) and it has its own article and pronoun forms.
- French loanwords are common and natural in Alsatian. Use local words rather than Standard German calques.
- Re-express idioms by meaning.

**Orthography.**

- Several spelling proposals exist; ORTHAL (a standard proposed in the 1990s and 2000s) is widely cited for teaching. Choose one system and apply it consistently, and do not mix with Standard German spelling.
- Quotation marks and number formats follow French practice in France: guillemets `« »`, decimal comma, euro, day/month/year.

**Register.**

- Informal address is "du"; the polite form varies by locality and speaker. Confirm the form for the audience with a native reviewer.

## Common pitfalls

- Writing Standard German and calling it Alsatian.
- Mixing spelling systems.
- Using Swiss or Bavarian dialect forms.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Office pour la langue et les cultures d'Alsace (OLCA, https://www.olcalsace.org)
