---
name: locale-kl-gl
description: Use when working with the Greenlandic (Greenland) locale (`kl-GL`) — its endonym Kalaallisut (Kalaallit Nunaat), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Greenlandic (Greenland) (kl-GL)

Reference data for the **Greenlandic (Greenland)** locale — endonym **Kalaallisut (Kalaallit Nunaat)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `kl-GL`
- **ISO 639-1:** `kl`
- **ISO 639-3:** `kal`
- **Script:** Latn (Latin)
- **Region:** GL (Greenland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 50,000
- **L2 (additional):** 7,000
- **L1+L2 (total):** 57,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Greenlandic (Kalaallisut, West Greenlandic) is an Eskimo-Aleut language and the sole official language of Greenland. It is polysynthetic: one word can express an entire English sentence. The Oqaasileriffik (Language Secretariat of Greenland) sets the spelling and terminology norm. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate word for word. A Greenlandic word is built from a root plus a chain of suffixes (derivational and inflectional), so an English phrase becomes one long word or a short phrase with a rich verb.
- Use Greenlandic terminology from Oqaasileriffik rather than Danish loanwords where a term exists.
- Re-express idioms by meaning.

**Grammar.**

- The language is ergative: the subject of a transitive verb takes the relative (ergative) case, and the subject of an intransitive verb takes the absolutive case.
- There are no articles or grammatical gender. Nouns have case endings and possessive suffixes; verbs agree with subject and object.
- Number is singular or plural, marked on both nouns and verbs.

**Register.**

- There is no T-V split: "illit" is "you" (singular) and "ilissi" is "you" (plural). Politeness is carried by tone and phrasing.

**Orthography and typography.**

- The 1973 reform replaced earlier spelling with a Latin system: the letters q and r represent uvular sounds, and a doubled consonant marks length. Keep the standard spelling.
- Danish loanwords and names use æ, ø, å. Quotation marks `»…«` or `„…“`; decimal comma; Danish krone.

## Common pitfalls

- Translating word by word, producing stilted compositional forms.
- Using Danish loanwords where an Oqaasileriffik term exists.
- Misspelling long words by splitting or omitting suffixes.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Oqaasileriffik, Language Secretariat of Greenland (https://oqaasileriffik.gl)
