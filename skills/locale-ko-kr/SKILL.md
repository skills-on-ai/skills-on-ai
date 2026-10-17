---
name: locale-ko-kr
description: Use when working with the Korean (Korea) locale (`ko-KR`) — its endonym 한국어 (대한민국), Korean script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Korean (Korea) (ko-KR)

Reference data for the **Korean (Korea)** locale — endonym **한국어 (대한민국)**, written in the Korean script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ko-KR`
- **ISO 639-1:** `ko`
- **ISO 639-3:** `kor`
- **Script:** Kore (Korean)
- **Region:** KR (Korea)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 51,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 52,000,000

## Base locale

This is a regional variant of [[locale-ko-001]] (Korean), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ko-001]] with South Korean conventions. The standard language (표준어) of South Korea is based on Seoul speech; North Korean standard (문화어) differs in vocabulary, spelling, and spacing.

- **Formats:** year-month-day 2026년 10월 17일 (or 2026. 10. 17.), 24-hour clock, currency 원 (₩), thousands comma.
- **Names and titles:** family name first (김민수), with 님 or 씨 in correspondence; job titles follow the name.
- **Loanwords:** English loanwords are common in tech and marketing (앱, 로그인); use the National Institute's spelling of loanwords and check for official replacement terms.
- **Tone:** warm and polite; apology and thanks are frequent in customer service.
- **Hangul input:** use precomposed Hangul syllables (NFC) in text.

## Common pitfalls

- Using Pyongyang-standard vocabulary or spacing.
- Using English honorific order for names.
- The general pitfalls in [[locale-ko-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- National Institute of Korean Language, 국립국어원 (https://www.korean.go.kr)
