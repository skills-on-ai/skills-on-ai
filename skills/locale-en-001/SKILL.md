---
name: locale-en-001
description: Use when working with the English locale (`en-001`) — its endonym English, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (en-001)

Reference data for the **English** locale — endonym **English**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-001`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 372,000,000
- **L2 (additional):** 1,121,000,000
- **L1+L2 (total):** 1,493,000,000

## Regional variants

This is the base/macro locale for English. Region-specific variants in this dataset:

- [[locale-en-150]] (English (Europe))
- [[locale-en-au]] (English (Australia))
- [[locale-en-bz]] (English (Belize))
- [[locale-en-ca]] (English (Canada))
- [[locale-en-gb]] (English (Great Britain))
- [[locale-en-ie]] (English (Ireland))
- [[locale-en-in]] (English (India))
- [[locale-en-jm]] (English (Jamaica))
- [[locale-en-mt]] (English (Malta))
- [[locale-en-my]] (English (Malaysia))
- [[locale-en-nz]] (English (New Zealand))
- [[locale-en-ph]] (English (Philippines))
- [[locale-en-sg]] (English (Singapore))
- [[locale-en-tt]] (English (Trinidad and Tobago))
- [[locale-en-us]] (English (United States))
- [[locale-en-za]] (English (South Africa))
- [[locale-en-zw]] (English (Zimbabwe))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

English has no single written standard. Before translating into English, choose a target variant (US, UK, Australian, Canadian, Indian, and so on) and apply it consistently; use this locale only when the audience is international and no single variant fits. Regional skills are listed above.

**Translate ideas, not words.**

- English prefers the verb over the noun phrase. Rewrite nominalizations from the source ("make a decision" becomes "decide", "perform an analysis of" becomes "analyze").
- Prefer the active voice and put the actor first: "The system deleted the file" over "The file was deleted by the system", unless the actor is unknown or irrelevant.
- Put the main point first. Many languages build up context before the point; English readers expect the conclusion or instruction at the start of a sentence, paragraph, and email.
- English sentences are usually shorter than those in German, Russian, or Japanese business writing. Split long sentences, but connect them with "so", "because", "but", and "then" so the reasoning stays visible.
- Re-express idioms and metaphors from the source language by meaning. A literal translation of a proverb sounds foreign, and a native idiom can be wrong in tone. When no natural idiom exists, say it plainly.
- Avoid calques of the source grammar: "I am agree", "since three years" (for "for three years"), "actually" as "currently", "eventually" as "possibly", "sensible" as "sensitive", and "control" as "check".

**Grammar that trips translators.**

- Articles ("a", "an", "the", or none) are the most common error for speakers of languages without them. Uncountable nouns ("information", "advice", "feedback", "equipment") take no plural and no "a".
- Prepositions rarely map across languages: "depend on", "interested in", "different from", "arrive at/in".
- Tense and aspect: use the present simple for habits and schedules, the present perfect for recent relevance ("I have saved your file"), and the past simple for finished times.
- Word order is fixed (subject, verb, object); adverbs of frequency sit before the main verb ("always check"), not at the end.
- Phrasal verbs ("set up", "log in", "sign out") are natural in speech; as nouns they close up ("setup", "login"), as verbs they stay separate ("log in").

**Register.**

- English has no T-V distinction. Register is carried by word choice, contractions, and sentence length. For UI and support, use contractions ("you'll", "can't") and "you" to sound friendly; use fewer contractions in legal and formal documents.
- Politeness uses modals and softeners ("Could you...", "Please..."). A bare imperative in a button or instruction is fine, but in an email it can sound abrupt; "please" does not fix a commanding tone by itself.
- Avoid unnecessary flattery and excess exclamation marks; native business English is plain and understated.

**Orthography and typography.**

- Capitalize only the first word of UI labels and sentence-style headings, or follow the project's rule (title case is used by some US publications).
- Use a comma between independent clauses joined by a conjunction, and decide on the serial comma (Oxford comma) once for the project.
- Numerals: spell out one to nine in running prose (style guides vary), use digits for 10 and above and for measurements.
- Dates, times, currency, and spelling follow the chosen variant; see the regional skills.

**Choosing a variant.** US English for a US audience or a global software default; British English for the UK, Ireland, and much of Europe; Indian, Singapore, and other Commonwealth English follow British spelling. When unsure, ask for the target market, or follow the nearest regional skill.

## Common pitfalls

- Translating word by word and keeping the source word order.
- Dropping or doubling articles, or adding "a" before uncountable nouns.
- Overly formal vocabulary ("kindly revert", "utilize", "commence") where plain words ("reply", "use", "start") work.
- Mixing spelling variants (color and colour) in one document.
- Using a native idiom that the global audience will not know ("hit it out of the park", "ballpark") in a text meant for non-native readers.
- Leaving culture-specific references (holidays, sports, units) unexplained.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
- Merriam-Webster and Oxford English Dictionary for variant spelling and usage
