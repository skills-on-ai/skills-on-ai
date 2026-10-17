---
name: locale-quz-pe
description: Use when working with the Quechua (Peru) locale (`quz-PE`) — its endonym Runasimi (Perú), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Quechua (Peru) (quz-PE)

Reference data for the **Quechua (Peru)** locale — endonym **Runasimi (Perú)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `quz-PE`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `quz`
- **Script:** Latn (Latin)
- **Region:** PE (Peru)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 3,800,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 4,100,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Cusco Quechua (Qusqu Qhichwa, `quz`) is a Southern Quechua variety of the Andes. Peru recognizes Quechua as an official language, and the official alphabet has three vowels (a, i, u) and the letters of the Quechua alphabet adopted in 1985. Southern Quechua differs from Ecuadorian Kichwa, Central Quechua, and the Quechua of other regions; confirm the variety before translating. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Quechua is agglutinative with subject-object-verb order and long suffix chains. Translate from the meaning; do not copy Spanish word order or prepositions. Spanish prepositions become case suffixes (`wasipi` in the house, `wasimanta` from the house).
- Quechua marks the speaker's source of knowledge with evidential suffixes: `-mi` (direct knowledge), `-si` (reported information), and `-chá` (conjecture). Choose the one that matches the intended meaning; do not drop it.
- Pronouns distinguish inclusive `ñuqanchik` (we including the listener) from exclusive `ñuqayku` (we excluding the listener).
- Use Quechua terminology from the Academia Mayor de la Lengua Quechua and language programs where it exists, and adapt unavoidable Spanish loanwords to Quechua spelling.
- Re-express idioms by meaning.

**Grammar.**

- Nouns take case suffixes (`-pa` genitive, `-ta` accusative, `-man` dative or direction, `-manta` ablative, `-pi` locative, `-wan` comitative or instrumental) and possessive suffixes. There is no grammatical gender and no articles.
- The plural suffix `-kuna` is optional and is not used after a numeral.

**Register.**

- `Qan` is "you" (singular); `qankuna` is plural. Politeness is carried by suffixes and polite phrasing; confirm the form for the audience with a native reviewer.

**Orthography and typography.**

- The official Southern Quechua alphabet writes three vowels (a, i, u), and uses `ch`, `chh`, `ch’`, `k`, `kh`, `k’`, `q`, `qh`, `q’`, `p`, `ph`, `p’`, `t`, `th`, `t’` for plain, aspirated, and ejective consonants. Do not respell with Spanish `c`, `qu`, `o`, or `e`.
- Peruvian conventions: sol (`S/`), decimal point, dates `17 de octubre de 2026` in Spanish; for Quechua use the Quechua month names where the project requires.

## Common pitfalls

- Writing Quechua with Spanish spellings (`o`, `e`, `c`, `qu`).
- Dropping ejective and aspirated marks.
- Omitting evidential suffixes.
- Copying Spanish word order.
- Using a variety (Kichwa, Ancash) that does not match the audience.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academia Mayor de la Lengua Quechua, Cusco
- Ministerio de Educación del Perú, Alfabeto oficial de la lengua quechua
