---
name: locale-gl-es
description: Use when working with the Galician (Spain) locale (`gl-ES`) — its endonym Galego (España), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Galician (Spain) (gl-ES)

Reference data for the **Galician (Spain)** locale — endonym **Galego (España)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `gl-ES`
- **ISO 639-1:** `gl`
- **ISO 639-3:** `glg`
- **Script:** Latn (Latin)
- **Region:** ES (Spain)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,400,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 3,400,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Galician is a Romance language in Galicia, written in the Real Academia Galega (RAG) norm, as the official norm of 1982 and 2003. Reintegrationist norms (AGAL) bring Galician closer to Portuguese but are not the official norm. Translate directly, not through Spanish.

**Translate ideas, not words.**

- Avoid Spanish calques in vocabulary and syntax: write "entón" (not "entonces"), "tamén" (not "también"), "cidade" (not "ciudad"), and "ano" (not "año").
- Galician prefers the infinitive and the personal infinitive in some constructions; do not overuse the gerund as in Spanish.
- Re-express idioms by meaning.

**Grammar.**

- Gender and number agreement; the article is required with possessives ("o meu libro"); contractions "do", "da", "no", "na", "polo", "pola".
- Pronoun placement: clitics follow the verb in affirmative main clauses ("Dime") and precede it after negation or conjunctions ("Non me digas").
- Personal infinitive is common ("para ti poderes ver").

**Register.**

- "Ti" (tú) is the informal singular and "vostede" the formal; consumer apps typically use "ti" and administrations use "vostede".

**Orthography and typography.**

- Galician keeps "ñ" and "ll", but the letter "x" stands for the sound [ʃ] ("xente", "xornal") and "j" does not occur in native Galician words. Accents follow the RAG orthography.
- Quotation marks: guillemets « » first level. Months and days lowercase: "17 de outubro de 2026".
- Numbers: decimal comma, period or space for thousands.
- Use the terminology of the Xunta de Galicia's linguistic normalization service and the RAG for technical terms.

## Common pitfalls

- Using Spanish spelling ("ciudad", "año" instead of "cidade", "ano").
- Mixing RAG and reintegrationist norms.
- Using Spanish punctuation (inverted marks).
- Overusing the gerund.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Galega, Normas ortográficas e morfolóxicas do idioma galego (https://academia.gal)
- Microsoft Localization Style Guide, Galician (https://aka.ms/galician-styleguide)
