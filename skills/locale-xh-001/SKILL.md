---
name: locale-xh-001
description: Use when working with the Xhosa locale (`xh-001`) — its endonym isiXhosa, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Xhosa (xh-001)

Reference data for the **Xhosa** locale — endonym **isiXhosa**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `xh-001`
- **ISO 639-1:** `xh`
- **ISO 639-3:** `xho`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 8,200,000
- **L2 (additional):** 11,800,000
- **L1+L2 (total):** 20,000,000

## Regional variants

This is the base/macro locale for Xhosa. Region-specific variants in this dataset:

- [[locale-xh-za]] (Xhosa (South Africa))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Xhosa (isiXhosa) is a Nguni Bantu language of South Africa, closely related to Zulu but with its own spelling and vocabulary, and it has click consonants. It is written conjunctively. See [[locale-xh-za]] and compare [[locale-zu-001]].

**Translate ideas, not words.**

- Xhosa verbs carry subject, tense, object, and mood in a single word. Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes with concord on adjectives, verbs, possessives, and demonstratives. Do not copy Zulu classes or forms; check Xhosa.
- Use established Xhosa terms (from PanSALB and the National Language Service) rather than raw English borrowings where one exists.
- Re-express idioms and proverbs (izaci) by meaning.

**Grammar and register.**

- Concord prefixes must match the noun class. Writing is conjunctive: do not split prefixes from stems.
- `Wena` is "you" (singular) and `nina` is the plural. Use the plural for elders (`Molo` to one, `Molweni` to more than one). Titles (`Tata`, `Mama`, `Mnumzana`) show respect.

**Orthography and typography.**

- Click consonants `c`, `q`, `x` and the combinations `gc`, `nc`, `ngc`, `ch`, `qh`, `xh` are letters; keep them. Tones are not written.
- Dates `17 Oktobha 2026`; currency rand (`R`).

## Common pitfalls

- Using Zulu spellings or forms.
- Splitting conjunctive words.
- Wrong noun-class concords.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pan South African Language Board (PanSALB), the statutory body for the official languages of South Africa
- Xhosa dictionaries and National Language Service terminology lists
