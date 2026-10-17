---
name: locale-prs-af
description: Use when working with the Dari (Afghanistan) locale (`prs-AF`) — its endonym دری (افغانستان), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Dari (Afghanistan) (prs-AF)

Reference data for the **Dari (Afghanistan)** locale — endonym **دری (افغانستان)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `prs-AF`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `prs`
- **Script:** Arab (Arabic)
- **Region:** AF (Afghanistan)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 12,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 18,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fa-001]] to Dari (Afghan Persian), which is an official language of Afghanistan alongside Pashto. Dari is a variety of Persian with its own vocabulary, pronunciation, and conventions, written in the same Perso-Arabic script.

- **Vocabulary:** Dari uses some words that differ from Iranian Persian (for example `بادنجان رومی` for tomato in Afghan use versus `گوجه‌فرنگی` in Iran); verify terms with a native Dari reviewer.
- **Calendar:** the Solar Hijri calendar is official in Afghanistan, with Dari or Pashto month names (حمل, ثور, جوزا, سرطان, اسد, سنبله, میزان, عقرب, قوس, جدی, دلو, حوت) rather than the Iranian names (فروردین, اردیبهشت, ...). Use the Afghan names.
- **Currency and digits:** afghani (`؋`); Persian digits are common; the weekend is Friday.
- **Register:** `شما` is the polite form; `تو` is informal. Religious greetings are customary in correspondence.
- **ZWNJ and letters:** the same rules as Persian apply (`ک`, `ی`, ZWNJ).

## Common pitfalls

- Using Iranian month names or tomans.
- Using Iranian slang or Iranian-only terms.
- The general pitfalls in [[locale-fa-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academy of Sciences of Afghanistan, Dari language resources
- Unicode CLDR locale data for fa-AF (https://cldr.unicode.org)
