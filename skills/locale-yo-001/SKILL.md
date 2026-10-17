---
name: locale-yo-001
description: Use when working with the Yoruba locale (`yo-001`) — its endonym Yorùbá, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Yoruba (yo-001)

Reference data for the **Yoruba** locale — endonym **Yorùbá**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `yo-001`
- **ISO 639-1:** `yo`
- **ISO 639-3:** `yor`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 48,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 50,000,000

## Regional variants

This is the base/macro locale for Yoruba. Region-specific variants in this dataset:

- [[locale-yo-ng]] (Yoruba (Nigeria))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Yoruba is a tonal Niger-Congo language of southwestern Nigeria, Benin, and Togo, written in the Latin script with diacritics for tone and subdots (ẹ, ọ, ṣ). The standard orthography was set by the 1966 Yoruba Orthography Committee. See [[locale-yo-ng]].

**Translate ideas, not words.**

- Yoruba is subject-verb-object, with serial verb constructions and tone-marked words; restructure English sentences.
- Yoruba has no grammatical gender and no articles; tense and aspect come from particles (`ti`, `ń`, `yóò`).
- Use established Yoruba terms where they exist, and adopt loanwords in Yoruba spelling.
- Re-express idioms and proverbs (òwe) by meaning; proverbs are central to Yoruba speech.

**Register.**

- Yoruba has a strong system of respect: `ẹ` (plural or respectful "you") is used for elders, strangers, and in formal text, while `o` is used for peers and juniors. Greetings change with time of day and situation (`Ẹ káàárọ̀`, `Ẹ káàsán`, `Ẹ kú`). Use `ẹ` forms in UI and public text.

**Orthography and typography.**

- Use the subdotted letters `ẹ ọ ṣ` and the tone marks (the acute accent for high tone, the grave accent for low tone, and no mark for mid tone). Tone is part of word identity: `ọkọ́` (husband), `oko` (farm), and `ọkọ̀` (vehicle) differ. Use properly composed Unicode (NFC) characters.
- Currency naira (`₦`); decimal point; dates `17 Oṣù Kẹ̀wá 2026` (Oṣù Kẹ̀wá is October).

## Common pitfalls

- Omitting subdots or tone marks.
- Using combining marks that do not render in a given font.
- Using `o` instead of `ẹ` in respectful text.
- Translating proverbs literally.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Yoruba Orthography Committee (1966) and Yoruba dictionaries
- Unicode Standard, Combining Diacritical Marks (Yoruba usage)
