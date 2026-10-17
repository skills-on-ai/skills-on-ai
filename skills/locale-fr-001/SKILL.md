---
name: locale-fr-001
description: Use when working with the French locale (`fr-001`) — its endonym Français, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (fr-001)

Reference data for the **French** locale — endonym **Français**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-001`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 75,000,000
- **L2 (additional):** 258,000,000
- **L1+L2 (total):** 334,000,000

## Regional variants

This is the base/macro locale for French. Region-specific variants in this dataset:

- [[locale-fr-be]] (French (Belgium))
- [[locale-fr-ca]] (French (Canada))
- [[locale-fr-ch]] (French (Switzerland))
- [[locale-fr-fr]] (French (France))
- [[locale-fr-lu]] (French (Luxembourg))
- [[locale-fr-mc]] (French (Monaco))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

French is a pluricentric language with a shared written standard. Choose the target country before translating and use this locale only when the audience spans several countries. For specifics see [[locale-fr-fr]], [[locale-fr-ca]], [[locale-fr-be]], [[locale-fr-ch]], [[locale-fr-lu]], and [[locale-fr-mc]].

**Translate ideas, not words.**

- French prefers abstract nouns, longer sentences, and explicit logical connectors (donc, en effet, toutefois, ainsi) where English uses short verbs and implication. Do not copy English phrasal verbs; use a precise French verb ("to log in" is "se connecter", "to set up" is "configurer").
- French avoids repeating the same word and favors synonyms and pronouns; English repeats nouns freely. Use "il", "celui-ci", or a synonym rather than repeating a noun in successive sentences.
- The English passive and "-ing" forms usually become an active verb, the impersonal "on", or a pronominal verb: "The file was deleted" becomes "Le fichier a été supprimé" or "Le fichier est supprimé"; "Searching..." becomes "Recherche en cours...".
- Re-express idioms by meaning: "it's a piece of cake" is "c'est simple comme bonjour" or "c'est un jeu d'enfant"; "to kill two birds with one stone" is "faire d'une pierre deux coups".
- French text commonly runs longer than English, so UI strings need room and abbreviations may be needed; avoid cutting articles to save space.

**Grammar that trips translators.**

- Every noun has a gender, and articles, adjectives, and past participles agree in gender and number. Check the gender of loanwords ("un e-mail" or "un courriel", "une application").
- Articles are mandatory where English drops them: "J'aime la musique", "Les utilisateurs doivent...". Use "de" alone in negative and plural-adjective forms ("Je n'ai pas de compte", "de nouveaux messages").
- Past participles agree with a preceding direct object ("les photos que j'ai prises") and with the subject after être.
- The subjunctive follows expressions of necessity, wish, or doubt ("Il faut que vous vous connectiez").
- Prepositions rarely map one to one: "dépendre de", "penser à", "être intéressé par", "sur" vs "dans".
- Compound tenses are formed with avoir or être; do not use "être" with most verbs.

**Register.**

- The tu/vous choice is the main decision. "Vous" is the default for UI, support, legal, banking, and public bodies. "Tu" is used in some youth, gaming, and startup brands; do not mix the two within one product.
- Imperative is common for UI actions ("Enregistrez", "Cliquez sur") and the infinitive is common for buttons and menus ("Enregistrer"). Pick a pattern and apply it consistently.
- French business writing is more formal than English: letters use formulas such as "Madame, Monsieur," and "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées"; emails are shorter but still polite ("Cordialement").

**Orthography and typography.**

- Use a non-breaking space before `:` `;` `!` `?` and inside guillemets `« … »`. In France the space before `; ! ?` is conventional; in Canada it is dropped, see [[locale-fr-ca]].
- Accents are mandatory, including on capitals (À, É, Ç). Capitalization is lighter than in English: sentence case for titles, lowercase days, months, languages, and adjectives of nationality.
- Numbers: decimal comma, thousands separated by a (narrow) non-breaking space ("1 234,56"). Currency follows the amount ("12,50 €"). Dates: "17 octobre 2026"; the first of the month is "1er". Times: 24-hour, "17 h 30" or "17:30".
- Abbreviations: "M.", "Mme", "n°", "p."; there is no period after "Mme" or "Mlle". Units and symbols are spaced ("10 km").
- Inclusive language is contested: the Académie française opposes the point médian ("étudiant·e·s") and French education authorities have discouraged it in schools. Prefer epicene wording ("le personnel", "les personnes utilisatrices") or the double form ("chers clients et chères clientes") where the project requires inclusivity.

## Common pitfalls

- Literal calques from English: "Sur une base régulière" (regularly: "régulièrement"), "impacter" overuse, "supporter" for "to support" (it means "to bear"; use "prendre en charge"), "opportunité" for "opportunity" ("occasion" or "possibilité"), "éventuellement" for "eventually" (it means "possibly"), "actuellement" for "actually" (it means "currently").
- Forgetting the non-breaking spaces before `: ; ! ?`, which causes ugly line breaks.
- Mixing tu and vous, or using "vous" inside a tutoiement brand voice.
- Dropping accents on capital letters or using English quotation marks.
- Wrong gender or agreement for loanwords and placeholders ("{count} nouveau(x) message(s)"); see [[unicode-messageformat]] for plural categories.
- Overlong UI strings that do not fit.
- Translating "you" as "tu" because the English source is casual without checking the brand voice.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, French (https://aka.ms/french-france-styleguide and https://aka.ms/french-canada-styleguide)
- Académie française, Dictionnaire de l'Académie française and its language guidance (https://www.academie-francaise.fr)
- FranceTerme and the Office québécois de la langue française terminology resources
