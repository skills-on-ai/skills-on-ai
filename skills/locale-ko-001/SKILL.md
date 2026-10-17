---
name: locale-ko-001
description: Use when working with the Korean locale (`ko-001`) — its endonym 한국어, Korean script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Korean (ko-001)

Reference data for the **Korean** locale — endonym **한국어**, written in the Korean script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ko-001`
- **ISO 639-1:** `ko`
- **ISO 639-3:** `kor`
- **Script:** Kore (Korean)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 77,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 82,000,000

## Regional variants

This is the base/macro locale for Korean. Region-specific variants in this dataset:

- [[locale-ko-kr]] (Korean (Korea))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Korean is written in Hangul (with rare Hanja), and politeness is built into verb endings. The National Institute of Korean Language (국립국어원) maintains the standard orthography and dictionaries. See [[locale-ko-kr]].

**Translate ideas, not words.**

- Korean is subject-omitting and context-driven. English pronouns ("you", "we", "I") are usually dropped; do not translate every "you" as 당신, which can sound confrontational. Address the user with a role (고객님, 회원님) or leave the subject out.
- Word order is subject-object-verb with the verb last; modifiers precede the noun. Break long English relative clauses into separate sentences.
- Avoid translationese: overuse of passive ("~에 의해", "~되어지다"), noun phrases ending in "~것", and "~를 통해" (through).
- English noun-heavy text is more natural as verbs: "perform a check" is "확인하다".
- Re-express idioms by meaning: "it's a piece of cake" is "식은 죽 먹기".

**Grammar that trips translators.**

- Particles mark roles: 은/는 (topic), 이/가 (subject), 을/를 (object), 에, 에서, 으로. The choice depends on whether the previous syllable ends in a consonant or a vowel.
- Counters with numerals: 한 개, 두 명, 세 장; native Korean numbers (하나, 둘) and Sino-Korean numbers (일, 이) are used for different things.
- Plurals are usually unmarked (the suffix 들 is optional).
- Verb endings encode politeness, tense, and mood; adjectives behave like verbs.

**Register.**

- Korean has speech levels. Written UI and customer text use polite levels: 합쇼체 (formal polite: ~합니다, ~하십시오) or 해요체 (soft polite: ~해요, ~하세요). Consumer apps increasingly use 해요체 for a friendly tone; banks, government, and enterprise software tend to use 합쇼체. Do not mix them.
- Do not use plain form (해라체, ~한다) in UI except for news headlines and technical documentation styles that use it.
- Honorific suffix 님 is added to names and titles (고객님); the honorific particle 께서 and verb suffix -시- mark respect to a subject.

**Orthography and typography.**

- Word spacing (띄어쓰기) follows the National Institute rules: words are separated by spaces, while particles and endings attach to the preceding word. Wrong spacing is a very visible error.
- Hanja are not used in UI. Loanwords are spelled by the 외래어 표기법 (loanword orthography); romanization uses Revised Romanization of Korean.
- Punctuation: Western punctuation (`.`, `,`, `?`, `!`) with quotation marks “ ” and ‘ ’; 「 」 in some publications.
- Numbers: Arabic digits; dates 2026년 10월 17일; 24-hour clock; currency 원 (₩), written 12,500원.

## Common pitfalls

- Translating "you" as 당신 or keeping every pronoun.
- Mixing 합쇼체 and 해요체.
- Wrong or missing spacing (띄어쓰기).
- Passive overuse and "~것" constructions.
- Wrong particle choice after consonants or vowels.
- Using North Korean vocabulary or spelling in South Korean text.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- National Institute of Korean Language (국립국어원), 표준국어대사전 and 우리말샘 (https://stdict.korean.go.kr)
- Microsoft Localization Style Guide, Korean (https://aka.ms/korean-styleguide)
