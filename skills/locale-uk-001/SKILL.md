---
name: locale-uk-001
description: Use when working with the Ukrainian locale (`uk-001`) — its endonym Українська, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Ukrainian (uk-001)

Reference data for the **Ukrainian** locale — endonym **Українська**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `uk-001`
- **ISO 639-1:** `uk`
- **ISO 639-3:** `ukr`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 32,000,000
- **L2 (additional):** 6,900,000
- **L1+L2 (total):** 39,000,000

## Regional variants

This is the base/macro locale for Ukrainian. Region-specific variants in this dataset:

- [[locale-uk-ua]] (Ukrainian (Ukraine))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Ukrainian is an East Slavic language written in Cyrillic with the letters ґ, є, і, ї. The current spelling is the 2019 edition of the Ukrainian orthography (Український правопис). Ukrainian is not a dialect of Russian; do not translate through Russian. See [[locale-uk-ua]].

**Translate ideas, not words.**

- Avoid Russisms and surzhyk (a Ukrainian-Russian mix): "приймати участь" is wrong, use "брати участь"; "на протязі" is wrong, use "протягом"; "вірний" meaning "correct" should be "правильний"; "слідуючий" should be "наступний"; "дякую" (not "спасибі") for thanks.
- Ukrainian prefers verbs and active forms. English passives become active: "Файл видалено" or "Ви видалили файл".
- Word order is flexible; new information goes to the end of the sentence.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Seven cases, including the vocative, which is used in direct address: "пане Іване", "друже". Use the vocative for names in greetings in letters and where natural.
- Euphony alternations: "у"/"в" ("в Україні", "у школі"), "і"/"й" ("я й ти"), "з"/"із"/"зі" ("зі Львова"). Follow the orthography's rules.
- Plurals: one, few, many, and other categories (`1 файл`, `2 файли`, `5 файлів`). See [[unicode-messageformat]].
- Verbs have aspect; the future tense has simple and compound forms.
- Prepositions: "в Україні" (not "на Україні"); "для" versus "щодо".

**Register.**

- "Ви" (capitalized in letters to one person) is the standard for UI, support, and public text; "ти" is used by youth brands. Do not mix.
- UI commands use the imperative (`Збережіть`) or the infinitive.

**Orthography and typography.**

- Apostrophe: use the typographic apostrophe `’` (or straight `'` consistently): `м’який`, `п’ять`.
- Quotation marks `«…»` with nested `„…“`. The em dash `—` with spaces in running text.
- Numbers: decimal comma, non-breaking space for thousands; hryvnia `₴` after the amount (`12,50 ₴`); dates `17 жовтня 2026 р.`; 24-hour clock.
- Place names follow Ukrainian forms and transliteration: Київ (Kyiv), Харків (Kharkiv), Львів (Lviv).
- The 2019 orthography allows feminine forms for professions ("авторка", "директорка"); they are supported in official guidance and increasingly used.

## Common pitfalls

- Using Russian forms (ы, э, ъ) or Russian vocabulary.
- Translating through Russian.
- Using "Kiev" instead of "Kyiv" in transliteration.
- Dropping the vocative in greetings.
- Missing the ґ letter or the apostrophe.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Український правопис (2019 edition) and the Institute of the Ukrainian Language, National Academy of Sciences of Ukraine
- Microsoft Localization Style Guide, Ukrainian (https://aka.ms/ukrainian-styleguide)
