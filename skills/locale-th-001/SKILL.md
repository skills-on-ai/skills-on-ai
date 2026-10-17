---
name: locale-th-001
description: Use when working with the Thai locale (`th-001`) — its endonym ไทย, Thai script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Thai (th-001)

Reference data for the **Thai** locale — endonym **ไทย**, written in the Thai script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `th-001`
- **ISO 639-1:** `th`
- **ISO 639-3:** `tha`
- **Script:** Thai (Thai)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 27,000,000
- **L2 (additional):** 44,000,000
- **L1+L2 (total):** 71,000,000

## Regional variants

This is the base/macro locale for Thai. Region-specific variants in this dataset:

- [[locale-th-th]] (Thai (Thailand))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Thai is a tonal language written in the Thai script, with no spaces between words, no capitalization, and politeness carried by particles. See [[locale-th-th]].

**Translate ideas, not words.**

- Thai omits subjects and pronouns when clear, and uses titles or names instead of "you". Avoid translating every English "you" and "I"; Thai pronouns signal status and relationship, and several are inappropriate to strangers.
- Word order is subject-verb-object, with modifiers following the noun: "user account" is "บัญชีผู้ใช้" (account user).
- Thai has no inflection, so English tense, plural, and article distinctions are expressed through context, time words, and classifiers.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Classifiers follow numerals: "ไฟล์สามไฟล์", "คนสองคน".
- Aspect markers (แล้ว, กำลัง, จะ) show completion, progress, or future when needed.
- Questions use particles (ไหม, หรือ, หรือเปล่า).
- Do not add English-style plural markers.

**Register.**

- Sentence-final polite particles mark gender and politeness: ครับ (male speaker), ค่ะ (female, statements) and คะ (female, questions). UI text normally avoids gendered particles; use a neutral polite wording and address the user as คุณ.
- Thai has registers for formal, informal, and royal vocabulary (ราชาศัพท์). Do not use royal vocabulary except in content that concerns the royal family.
- Customer-facing text is polite and indirect; avoid blunt commands (use กรุณา, โปรด, "ขอ").

**Orthography and typography.**

- Thai has no word spaces; a space marks a phrase, clause, or sentence end. Line breaking needs a Thai-aware word breaker (ICU). Never insert spaces between words to force wrapping.
- Tone marks and vowel signs must be in the correct Unicode order; use normalized text.
- Years are Buddhist Era (พ.ศ. 2569 for 2026) in official and daily Thai use; Gregorian years appear in international contexts. Dates: 17 ตุลาคม 2569.
- Thai digits (๐ to ๙) and Arabic digits are both used; Arabic digits are normal in UI. Currency: บาท or ฿ after the amount.
- Follow the Royal Society (ราชบัณฑิตยสภา) dictionary for spelling and for the Romanization of Thai.

## Common pitfalls

- Translating every "you" and "I" with a pronoun.
- Inserting spaces between words or breaking lines in the middle of words.
- Using the wrong gendered particle (ครับ/ค่ะ).
- Writing the Gregorian year when a Buddhist Era year is expected.
- Using royal vocabulary outside its context.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Royal Society of Thailand (ราชบัณฑิตยสภา), พจนานุกรม ฉบับราชบัณฑิตยสภา
- Microsoft Localization Style Guide, Thai (https://aka.ms/thai-styleguide)
