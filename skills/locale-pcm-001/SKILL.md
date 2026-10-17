---
name: locale-pcm-001
description: Use when working with the Nigerian Pidgin locale (`pcm-001`) — its endonym Naijá, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Nigerian Pidgin (pcm-001)

Reference data for the **Nigerian Pidgin** locale — endonym **Naijá**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pcm-001`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `pcm`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 116,000,000
- **L1+L2 (total):** 121,000,000

## Regional variants

This is the base/macro locale for Nigerian Pidgin. Region-specific variants in this dataset:

- [[locale-pcm-ng]] (Nigerian Pidgin (Nigeria))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Nigerian Pidgin (Naijá) is an English-lexified creole widely spoken across Nigeria and used in media (for example BBC News Pidgin). It is a language in its own right with its own grammar, not broken English. There is no single legal orthography, but media style guides and community conventions have emerged. See [[locale-pcm-ng]]. This guidance is lower-confidence; have a Nigerian Pidgin speaker review it.

**Translate ideas, not words.**

- Write natural Pidgin, not English with a few word swaps. Pidgin uses short, direct sentences and markers for grammar: `dey` (progressive), `don` (perfect), `go` (future), `wan` (intention), `na` (focus or copula), `dem` (plural), `wey` (relative), `no` (negation).
- Examples: `I dey save di file` (I am saving the file), `I don save di file` (I have saved the file), `Di file no dey` (the file is not there).
- Re-express idioms by meaning; Pidgin has many proverbs and vivid expressions that do not map from English.
- Use a consistent register; avoid caricature or stereotype, and avoid exaggerated spellings.

**Grammar.**

- No verb inflection for tense or person; time and aspect are shown by markers and context. Plural is shown by `dem` after the noun (`di pikin dem`), not by English `-s`.
- Pronouns: `I`, `you`, `im` (he, she, it), `we`, `una` (you, plural), `dem` (they).

**Register.**

- Pidgin is informal and friendly. Do not use it for legal, medical, or formal contracts unless the audience requires it. For public service messages, Pidgin is useful for reach; keep the tone respectful.

**Orthography and typography.**

- Follow one style guide consistently (for example the BBC News Pidgin conventions for `dey`, `don`, `wey`, `di`, `na`). Do not mix English spellings for the same words.
- Nigerian formats: naira (`₦`), decimal point, comma thousands separator, dates in English or Pidgin form.

## Common pitfalls

- Translating word for word into English with Pidgin spellings.
- Using stereotyped or mocking spellings.
- Inconsistent spelling of the same word.
- Using inflected English forms (`goes`, `saved`) in Pidgin.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- BBC News Pidgin style and usage (https://www.bbc.com/pidgin)
- Nigerian Pidgin dictionaries and community orthography proposals
