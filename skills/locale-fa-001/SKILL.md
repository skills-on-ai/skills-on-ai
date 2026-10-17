---
name: locale-fa-001
description: Use when working with the Persian locale (`fa-001`) — its endonym فارسی, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Persian (fa-001)

Reference data for the **Persian** locale — endonym **فارسی**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `fa-001`
- **ISO 639-1:** `fa`
- **ISO 639-3:** `fas`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 91,000,000
- **L2 (additional):** 35,000,000
- **L1+L2 (total):** 127,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Persian. Region-specific variants in this dataset:

- [[locale-fa-ir]] (Persian (Iran))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Persian (Farsi) is written in a Perso-Arabic script from right to left. The Academy of Persian Language and Literature (فرهنگستان زبان و ادب فارسی) approves Persian equivalents for foreign terms. See [[locale-fa-ir]]. Dari (Afghanistan) and Tajik are related varieties; see [[locale-prs-af]] and [[locale-tg-001]].

**Translate ideas, not words.**

- Persian is subject-object-verb with prepositions and the ezafe construction (`-e`) linking nouns and adjectives (`کتابِ جدید`); the ezafe is normally not written. Reorder English sentences; do not translate word for word.
- Persian has no grammatical gender and no articles; indefiniteness is marked with `ی` or `یک`, definiteness of a direct object with `را`.
- Prefer Persian equivalents approved by the Academy where they are in use (`رایانه` for computer, `پیام‌رسان` for messenger); accept common loanwords (`فایل`, `اپلیکیشن`) when readers use them.
- Persian uses compound verbs (`انجام دادن`, `استفاده کردن`); choose natural verbs and avoid mechanical `کردن` for English "do".
- Re-express idioms by meaning: "it's a piece of cake" is "آب خوردن است" or "مثل آب خوردن است".

**Grammar that trips translators.**

- Plural is marked with `-ها` (things) or `-ان` (people), but not after a numeral: `سه فایل`, not `سه فایل‌ها`.
- The verb agrees with the subject in person and number. The prefix `می‌` marks the present and continuous aspect; `ب‌` marks the subjunctive and imperative.
- Zero-width non-joiner (ZWNJ, نیم‌فاصله, U+200C) is essential in Persian: in `می‌کنم`, `کتاب‌ها`, `خانه‌ام`. Missing ZWNJ is the commonest typographic error; using a space instead is also wrong.
- Politeness is built into verb and noun choices (ta'arof); see below.

**Register.**

- `شما` (polite or plural) is the standard "you" for UI, support, and public text; `تو` is informal. Use `شما` with plural verb forms and polite vocabulary (`لطفاً`, `خواهشمند است`).
- UI commands use the polite imperative or the infinitive (`ذخیره کنید`, `ذخیره`). Be consistent.
- Persian business and official writing is more formal and elaborate than English; courtesy phrases and honorific nouns are expected.

**Orthography and typography.**

- Use the Persian letters `ک` and `ی`, not the Arabic `ك` and `ي`; mixing them breaks searching and sorting. Persian adds `پ`, `چ`, `ژ`, `گ`.
- Persian digits (`۰۱۲۳۴۵۶۷۸۹`) differ from Arabic-Indic digits in the shapes of 4, 5, and 6 (`۴ ۵ ۶`). Use the Persian forms in Persian text, or Western digits per project convention.
- Punctuation: comma `،`, semicolon `؛`, question mark `؟`; quotation marks `«…»`.
- Calendar: the Solar Hijri (Jalali) calendar is the official calendar of Iran (17 October 2026 is 25 Mehr 1405); show Gregorian dates alongside when needed. The weekend is Friday (with Thursday off in many offices), and the week starts on Saturday.
- Currency: the official currency is the rial, but prices are commonly quoted in tomans (1 toman = 10 rials). State the unit clearly in prices.

## Common pitfalls

- Using Arabic `ك` and `ي` instead of `ک` and `ی`.
- Missing ZWNJ or using spaces instead.
- Adding the plural after a numeral.
- Showing prices in rials when readers expect tomans, or the reverse.
- Mixing `شما` and `تو`.
- Breaking right-to-left display with unmarked Latin text or numbers.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academy of Persian Language and Literature, approved equivalents
- Microsoft Localization Style Guide, Persian (https://aka.ms/persian-styleguide)
