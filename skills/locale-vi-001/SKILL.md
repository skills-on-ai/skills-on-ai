---
name: locale-vi-001
description: Use when working with the Vietnamese locale (`vi-001`) — its endonym Tiếng Việt, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Vietnamese (vi-001)

Reference data for the **Vietnamese** locale — endonym **Tiếng Việt**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `vi-001`
- **ISO 639-1:** `vi`
- **ISO 639-3:** `vie`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 86,000,000
- **L2 (additional):** 11,000,000
- **L1+L2 (total):** 97,000,000

## Regional variants

This is the base/macro locale for Vietnamese. Region-specific variants in this dataset:

- [[locale-vi-vn]] (Vietnamese (Vietnam))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Vietnamese is an analytic, tonal language written in the Latin alphabet with many diacritics (quốc ngữ). It has no inflection, and its politeness comes from a rich system of kinship-based pronouns. See [[locale-vi-vn]].

**Translate ideas, not words.**

- Vietnamese has no single word for "you" and "I". English "you" must become a form that fits the relationship: "bạn" (neutral peer, common in UI), "quý khách" (formal customer), "anh/chị/em/cô/chú" (kinship terms by age and gender). Do not translate every "you" as "bạn" in formal or banking text; use "quý khách" or restructure the sentence.
- Word order is subject-verb-object, but modifiers follow the noun: "user account" is "tài khoản người dùng" (account user). Reverse English noun stacks.
- Vietnamese is topic-prominent and often drops subjects and objects when clear. Avoid literal copies of English pronouns and passive sentences.
- The "bị" passive implies something unfortunate and "được" implies something beneficial; choose correctly ("Tệp đã bị xóa" for an accident, "Bạn được cấp quyền" for a grant). Neutral text often avoids both.
- Re-express idioms by meaning: "it's a piece of cake" is "dễ như ăn kẹo" or "quá dễ".

**Grammar that trips translators.**

- No conjugation or declension; tense and aspect come from particles (đã for past, đang for ongoing, sẽ for future), which are often omitted when time is clear.
- Classifiers (loại từ) before nouns: "một cái bàn", "hai con mèo", "ba người". Use the right classifier.
- Plural is marked with "các" or "những" ("các tệp", "những tệp") or by numerals; do not add them everywhere.
- Adjectives follow nouns ("tệp mới" for new file), and questions use particles like "không" and "chưa".

**Register.**

- Choose the audience: UI strings commonly use "bạn" for a friendly tone and "quý khách" for customer service, banking, and formal text. Government and legal text use impersonal wording or "ông/bà". Be consistent.
- Politeness particles (ạ, dạ, vâng) belong to speech and personal messages; use sparingly in UI.

**Orthography and typography.**

- Every diacritic matters; tone marks and vowel marks change meaning (ma, má, mà, mả, mã, mạ). Use Unicode NFC (precomposed) text.
- Syllables are separated by spaces, and compound words are written as separate syllables ("máy tính"); only some loanwords are hyphenated. Proper names capitalize each syllable ("Hà Nội").
- Numbers: decimal comma, period for thousands (1.234,56); dates "ngày 17 tháng 10 năm 2026"; 24-hour clock; currency đồng "₫" or "VND" after the amount ("12.500 ₫").
- Quotation marks “ ”; sentence case in titles.

## Common pitfalls

- Translating every "you" as "bạn" regardless of tone.
- Keeping English noun order (modifier before head).
- Missing or wrong diacritics, or using decomposed Unicode.
- Adding plural markers or tense particles to every sentence.
- Mixing northern and southern vocabulary unintentionally.
- Using "bị" for neutral events.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Vietnamese (https://aka.ms/vietnamese-styleguide)
- Viện Ngôn ngữ học (Institute of Linguistics, Vietnam), Từ điển tiếng Việt
