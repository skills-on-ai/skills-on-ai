---
name: locale-ps-001
description: Use when working with the Pashto locale (`ps-001`) — its endonym پښتو, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Pashto (ps-001)

Reference data for the **Pashto** locale — endonym **پښتو**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ps-001`
- **ISO 639-1:** `ps`
- **ISO 639-3:** `pus`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 40,000,000
- **L2 (additional):** 10,000,000
- **L1+L2 (total):** 50,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Pashto. Region-specific variants in this dataset:

- [[locale-ps-af]] (Pashto (Afghanistan))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Pashto (پښتو) is an Iranian language of Afghanistan and Pakistan, written in a Perso-Arabic script with additional letters. It is an official language of Afghanistan alongside Dari. See [[locale-ps-af]]. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Pashto is subject-object-verb. It is split-ergative: in the past tense the verb agrees with the object, not the subject. Do not mirror English subject-verb agreement.
- Do not translate through Dari or Urdu; Pashto has its own grammar and vocabulary. Use Pashto terminology (from the Pashto Academy) where it exists.
- Re-express idioms by meaning.

**Grammar and register.**

- Two genders (masculine, feminine) that agree with adjectives and verbs; oblique and direct case forms.
- `تاسو` is the polite or plural "you" for UI and public text; `ته` is informal.
- Dialects differ: southern (Kandahari) and northern (Yusufzai) varieties differ in sounds and some letters; use the standard written form.

**Orthography and typography.**

- Use the Pashto letters `ټ ډ ړ ږ ښ ڼ ځ څ ګ ې ۍ ئ`; never replace them with Arabic or Urdu look-alikes.
- Right-to-left; use the Arabic comma `،`, semicolon `؛`, and question mark `؟`; digits Persian (`۰-۹`) or Western per convention.

## Common pitfalls

- Using Dari or Urdu letters in place of Pashto letters.
- Mirroring English subject-verb agreement in past tense.
- Breaking right-to-left display.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pashto Academy (د پښتو اکاډمي), Kabul
- Unicode Standard, Arabic block (Pashto letters)
