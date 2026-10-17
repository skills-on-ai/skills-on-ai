---
name: locale-sd-001
description: Use when working with the Sindhi locale (`sd-001`) — its endonym سنڌي, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Sindhi (sd-001)

Reference data for the **Sindhi** locale — endonym **سنڌي**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `sd-001`
- **ISO 639-1:** `sd`
- **ISO 639-3:** `snd`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 35,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 40,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Sindhi (سنڌي) is an Indo-Aryan language of Sindh (Pakistan) written in a Perso-Arabic script, and of Sindhi communities in India, where Devanagari is also used. The default `sd` script is Arabic, written right to left; confirm the script for the audience.

**Translate ideas, not words.**

- Sindhi is subject-object-verb with postpositions. Reorder English sentences.
- Do not translate from Urdu; Sindhi has its own grammar and vocabulary and uses many extra letters.
- Accept established English loans written in Sindhi script, and use Sindhi Language Authority terminology where it exists.

**Grammar and register.**

- Two genders (masculine, feminine); verbs and adjectives agree. Postpositions follow nouns.
- "اوهان" is the polite "you" for UI and public text; "تون" is informal.

**Orthography and typography.**

- Sindhi has more letters than Urdu or Arabic for implosive and retroflex sounds (ڄ ڃ ڙ ٺ ٽ ڀ ڏ ڌ ڊ ڍ ڦ ڇ ڻ); never replace them with Urdu look-alikes.
- Right-to-left; use the Arabic comma `،`, semicolon `؛`, and question mark `؟`. Digits: Arabic-Indic or Western digits per project convention.
- Follow the Sindhi Language Authority's standard orthography.

## Common pitfalls

- Substituting Urdu letters for Sindhi letters.
- Breaking right-to-left display.
- Using Urdu grammar or vocabulary.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sindhi Language Authority (سنڌي ٻوليءَ جو اٿارٽي)
- Unicode Standard, Arabic block (Sindhi letters)
