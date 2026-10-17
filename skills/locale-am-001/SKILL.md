---
name: locale-am-001
description: Use when working with the Amharic locale (`am-001`) — its endonym አማርኛ, Ethiopic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Amharic (am-001)

Reference data for the **Amharic** locale — endonym **አማርኛ**, written in the Ethiopic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `am-001`
- **ISO 639-1:** `am`
- **ISO 639-3:** `amh`
- **Script:** Ethi (Ethiopic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 33,700,000
- **L2 (additional):** 25,100,000
- **L1+L2 (total):** 58,800,000

## Regional variants

This is the base/macro locale for Amharic. Region-specific variants in this dataset:

- [[locale-am-et]] (Amharic (Ethiopia))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Amharic (አማርኛ) is a Semitic language, the working language of Ethiopia, written in the Ge'ez (Ethiopic) script, an abugida in which each character is a consonant-vowel syllable in one of seven orders. See [[locale-am-et]].

**Translate ideas, not words.**

- Amharic is subject-object-verb and verb-final. The verb carries subject agreement, tense, aspect, and often the object, and prepositions attach as prefixes. Restructure English sentences; do not translate word for word.
- Amharic expresses gender in verbs and pronouns: `አንተ` (you, masculine), `አንቺ` (you, feminine). The polite form `እርስዎ` is used for respect.
- Use established Amharic terms (from the Ethiopian language authorities and Microsoft glossaries) and avoid transliterating English terms where an Amharic term exists.
- Re-express idioms and proverbs (ምሳሌያዊ አነጋገር) by meaning.

**Register.**

- UI and public text use the polite form `እርስዎ` and polite verb forms (`እባክዎ`). Greetings and titles (`አቶ`, `ወይዘሮ`, `ዶክተር`) are customary in correspondence.

**Orthography and typography.**

- Ethiopic punctuation: `።` (full stop), `፣` (comma), `፤` (semicolon), and `፧` (question mark); modern text also uses Western `?` and `.`. Follow the project convention. Words are separated by spaces in modern text (the traditional `፡` separator is rare).
- Several Ethiopic letters represent the same sound (`ሀ`, `ሐ`, `ኀ`; `ሰ`, `ሠ`); use the standard spelling for each word.
- Ethiopic digits (`፩ ፪ ፫`) are rare in UI; Arabic digits are normal. Currency birr (`ብር`).
- The Ethiopian calendar is about seven to eight years behind the Gregorian (17 October 2026 is 7 Tikimt 2019), has 13 months, and the New Year is on 11 September. Ethiopian clock time counts hours from dawn, so 7:00 in the morning is `1 o'clock`. State which calendar and clock the text uses.

## Common pitfalls

- Mixing Ethiopian and Gregorian dates or clock conventions.
- Using the wrong homophone letter in spelling.
- Dropping the polite form in UI.
- Using transliterated English where an Amharic term exists.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Ethiopian Languages Academy and Amharic dictionaries
- Microsoft Localization Style Guide, Amharic (https://aka.ms/amharic-styleguide)
