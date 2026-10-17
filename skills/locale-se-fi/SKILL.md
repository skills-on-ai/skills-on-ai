---
name: locale-se-fi
description: Use when working with the Northern Sami (Finland) locale (`se-FI`) — its endonym Davvisámegiella (Suoma), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Northern Sami (Finland) (se-FI)

Reference data for the **Northern Sami (Finland)** locale — endonym **Davvisámegiella (Suoma)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `se-FI`
- **ISO 639-1:** `se`
- **ISO 639-3:** `sme`
- **Script:** Latn (Latin)
- **Region:** FI (Finland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,000
- **L2 (additional):** 1,000
- **L1+L2 (total):** 3,000

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Northern Sámi (davvisámegiella) is the largest Sámi language and is written in Latin script with á, č, đ, ŋ, š, ŧ, ž. It is an official language in the Sámi homeland of Finland. Orthography and terminology are maintained by the Sámi language council (Sámi Giellagáldu) and the language technology resources of Divvun. This guidance covers Northern Sámi and applies to the country variants [[locale-se-no]] and [[locale-se-se]]. It is lower-confidence on fine points; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate through Finnish, Norwegian, or Swedish. Northern Sámi has its own grammar and a rich vocabulary for nature, reindeer herding, and traditional crafts; use Sámi terms for these and for modern concepts where the Giellagáldu term exists.
- Re-express idioms by meaning.

**Grammar.**

- Seven cases (nominative, accusative, genitive, illative, locative, comitative, essive), consonant gradation, no grammatical gender, and no articles.
- Singular, dual, and plural numbers in pronouns and verbs. Use the dual for two persons (`moai`, `doai`).
- A negative verb conjugates for person (`in`, `it`, `ii`) and is followed by the main verb in a special form.

**Register.**

- `Don` (singular) and `dii` (plural); there is no formal singular, and `don` is used with everyone. Politeness is carried by tone and phrasing.
- UI commands use the imperative or an infinitive-like form.

**Orthography and typography.**

- Use á, č, đ, ŋ, š, ŧ, ž (and their capitals); never replace them with ASCII look-alikes.
- Quotation marks vary: `”…”` in Finland, `«…»` in Norway; dates follow the country; decimal comma; euro in Finland.
- In Finland, the Sámi Parliament and the Sámi Language Act (2003) set official use.

## Common pitfalls

- Dropping Sámi letters.
- Translating through the majority language.
- Ignoring the dual number.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sámi Giellagáldu (Sámi language council), https://www.giellagaldu.org
- Divvun, UiT The Arctic University of Norway, language resources (https://divvun.no)
