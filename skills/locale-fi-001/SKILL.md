---
name: locale-fi-001
description: Use when working with the Finnish locale (`fi-001`) — its endonym Suomi, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Finnish (fi-001)

Reference data for the **Finnish** locale — endonym **Suomi**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fi-001`
- **ISO 639-1:** `fi`
- **ISO 639-3:** `fin`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,200,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 5,700,000

## Regional variants

This is the base/macro locale for Finnish. Region-specific variants in this dataset:

- [[locale-fi-fi]] (Finnish (Finland))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Finnish is an agglutinative Uralic language with fifteen cases and no grammatical gender or articles. The Institute for the Languages of Finland (Kotus) maintains the norm and the Kielitoimiston sanakirja (https://www.kielitoimistonsanakirja.fi) is the main dictionary. See [[locale-fi-fi]]. Finland also has Swedish as a national language; see [[locale-sv-fi]].

**Translate ideas, not words.**

- Finnish packs relations into case endings and compound words. English prepositions become case suffixes: `tiedostossa` (in the file), `tiedostosta` (from the file), `tiedostoon` (into the file). Restructure English sentences; do not translate word for word.
- Compound nouns are written as one word (`käyttäjätili`). Splitting them (`käyttäjä tili`) is a very visible error and changes meaning.
- Finnish prefers verbs to abstract nouns and drops subject pronouns where the verb ending shows them (`Tallensimme muutokset`).
- The Finnish passive is impersonal (`Tiedosto tallennettiin`), not a passive of the English sort. Use it for "someone did" without a subject.
- Re-express idioms by meaning: "it's a piece of cake" is "se on läpihuutojuttu" or "se on helppo nakki".

**Grammar that trips translators.**

- Fifteen cases, with the partitive used after numerals and for incomplete actions: `viisi tiedostoa`, not `viisi tiedostot`. Plural categories: one and other. See [[unicode-messageformat]].
- Consonant gradation changes the stem (`kauppa`, `kaupan`; `tieto`, `tiedon`). A placeholder that inserts a word into a sentence may need a different case form of that word.
- Vowel harmony: suffixes use front or back vowels (`-ssa/-ssä`, `-lla/-llä`) according to the stem.
- Possession is marked with suffixes (`tilini`, "my account") but often omitted in UI.

**Register.**

- Finnish has `sinä` (informal) and `te` (formal or plural). In practice, `sinä` is used far more widely than in many languages, including in customer service and consumer apps; `te` is reserved for formal letters, official contexts, and older audiences. UI text often avoids pronouns by using the imperative or impersonal forms (`Tallenna`, `Kirjaudu sisään`). Do not mix.
- Finnish business writing is direct and plain; flattery and long politeness formulas sound insincere.

**Orthography and typography.**

- Quotation marks `”…”` (the same mark opens and closes). Dates `17. lokakuuta 2026` (month in the partitive) or `17.10.2026`; times `klo 17.30`; decimal comma; non-breaking space for thousands; currency `12,50 €` with a non-breaking space.
- Colon before a suffix on abbreviations and numbers (`EU:n`, `1990-luvulla`, `3:ssa`). Months and days are lowercase.
- Use ä, ö, and å; never replace them with a, o. Sorting puts å, ä, ö after z.

## Common pitfalls

- Splitting compounds.
- Using the nominative plural after a numeral.
- Wrong case in placeholders (`Tallennettu tiedosto {name}` needs the right case form).
- Translating the English passive as the Finnish passive without need.
- Using `te` throughout a consumer app.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Kotus, Kielitoimiston ohjepankki (https://www.kielitoimistonohjepankki.fi) and Kielitoimiston sanakirja
- Microsoft Localization Style Guide, Finnish (https://aka.ms/finnish-styleguide)
