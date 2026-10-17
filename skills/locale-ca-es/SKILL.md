---
name: locale-ca-es
description: Use when working with the Catalan (Spain) locale (`ca-ES`) — its endonym Català (Espanya), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Catalan (Spain) (ca-ES)

Reference data for the **Catalan (Spain)** locale — endonym **Català (Espanya)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ca-ES`
- **ISO 639-1:** `ca`
- **ISO 639-3:** `cat`
- **Script:** Latn (Latin)
- **Region:** ES (Spain)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 10,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Catalan is a Romance language written by the Institut d'Estudis Catalans (IEC) norm. The Valencian variety follows the Acadèmia Valenciana de la Llengua (AVL) norm, and the Balearic varieties follow the IEC with local usage. Translate directly from the idea into Catalan; do not route through Spanish.

**Translate ideas, not words.**

- Catalan is under constant Spanish influence, so translators often write Castilian calques: "a nivell de" (use "pel que fa a" or "en"), "tampoc" misplaced, "entonces" for "aleshores", "pues" for "doncs", "bueno" for "bé", "donar-se compte" for "adonar-se".
- English noun stacks become prepositional phrases: "user account settings" is "configuració del compte d'usuari".
- Catalan has strong weak-pronoun clusters ("us ho dic", "me'l dones"); keep them rather than repeating full noun phrases, but do not overload UI text.
- Re-express idioms by meaning rather than literally.

**Grammar.**

- Gender and number agreement; apostrophe elision ("l'aigua", "d'un"); contractions "del", "al", "pel", "dels", "als", "pels".
- Ser versus estar differs from Spanish in some uses; "haver-hi" (there is) is the existential verb ("Hi ha tres fitxers").
- Passive with "ser" is rare; Catalan prefers the passive with "es" or an active reformulation ("El fitxer s'ha suprimit").
- Use "per" and "per a" correctly ("per a tu" for the beneficiary).

**Register.**

- "Tu" and "vostè" are the two second-person forms; consumer apps usually use "tu", and public administrations, banks, and formal contexts use "vostè". "Vós" is archaic.
- Imperative or infinitive for UI actions ("Desa", "Desar"). Choose one convention.

**Orthography and typography.**

- Keep the geminated l ("l·l", as in "col·lecció") with the middle dot (·, U+00B7); typing "l.l" is incorrect.
- Accents: grave and acute are both used (à, è, é, í, ò, ó, ú); the cedilla (ç) and the diaeresis (ï, ü) remain.
- Quotation marks: guillemets « » in the first level. Months and days are lowercase: "17 d'octubre de 2026".
- Numbers: decimal comma, period or space for thousands; currency after the amount ("12,50 €").
- Follow the Termcat terminology (Termcat, https://www.termcat.cat) for technical terms.

## Common pitfalls

- Writing Castilianisms in vocabulary or syntax.
- Using Spanish accentuation or punctuation (inverted marks) in Catalan.
- Typing "l.l" for the geminated l, or forgetting apostrophes.
- Mixing Valencian (AVL) and IEC spellings in one text.
- Using Spanish month and day capitalization.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institut d'Estudis Catalans, Diccionari de la llengua catalana (https://dlc.iec.cat)
- Termcat, Centre de Terminologia (https://www.termcat.cat)
- Microsoft Localization Style Guide, Catalan (https://aka.ms/catalan-styleguide)
