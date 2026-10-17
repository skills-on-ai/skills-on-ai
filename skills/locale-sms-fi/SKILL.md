---
name: locale-sms-fi
description: Use when working with the Skolt Sami (Finland) locale (`sms-FI`) — its endonym Sääʹmǩiõll (Lääʹdd), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Skolt Sami (Finland) (sms-FI)

Reference data for the **Skolt Sami (Finland)** locale — endonym **Sääʹmǩiõll (Lääʹdd)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sms-FI`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `sms`
- **Script:** Latn (Latin)
- **Region:** FI (Finland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 300
- **L2 (additional):** 200
- **L1+L2 (total):** 500

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Skolt Sámi (nuõrttsääʹmǩiõll) is a Sámi language of Finland with few speakers, written in Latin script with additional letters (å, â, ǩ, ǯ, ʒ, ǧ, ǥ and the soft sign ʹ). It is an official language in the Sámi homeland of Finland. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate from Northern Sámi or Finnish word by word; Skolt Sámi has its own vocabulary and grammar. Use terms developed by the language community and the Sámi Parliament.
- Re-express idioms by meaning.

**Grammar and register.**

- Cases, consonant gradation, and a dual number; no articles or grammatical gender; a negative verb.
- No formal singular "you"; politeness is carried by tone.

**Orthography and typography.**

- The soft sign (U+02B9 `ʹ`) is a letter-like modifier that marks palatalization; do not replace it with an apostrophe or a quote mark.
- Use å, â, ǩ, ǯ, ʒ, ǧ, ǥ exactly; never replace them with ASCII look-alikes.
- Finnish conventions: euro, decimal comma, dates `17.10.2026`, quotation marks `”…”`.

## Common pitfalls

- Replacing the soft sign with an apostrophe.
- Replacing special letters with ASCII.
- Translating through Finnish.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sámi Parliament of Finland (Sámediggi)
- Divvun and Giellatekno, language technology resources (https://divvun.no)
