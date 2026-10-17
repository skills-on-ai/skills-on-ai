---
name: locale-ru-001
description: Use when working with the Russian locale (`ru-001`) — its endonym Русский, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Russian (ru-001)

Reference data for the **Russian** locale — endonym **Русский**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ru-001`
- **ISO 639-1:** `ru`
- **ISO 639-3:** `rus`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 150,000,000
- **L2 (additional):** 105,000,000
- **L1+L2 (total):** 255,000,000

## Regional variants

This is the base/macro locale for Russian. Region-specific variants in this dataset:

- [[locale-ru-ru]] (Russian (Russia))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Russian is a highly inflected East Slavic language written in Cyrillic. The standard is maintained by the Institute of the Russian Language (RAS) and its dictionaries; Rosenthal's handbook and the portal Gramota.ru are standard references. See [[locale-ru-ru]].

**Translate ideas, not words.**

- Russian tolerates long sentences with participial phrases and heavy bureaucratic nouns, but modern UI and marketing copy prefers short, active, plain sentences. Avoid the bureaucratic style: "осуществлять" (carry out), "является" (is), "данный" (this), and long chains of genitive nouns ("осуществление проверки правильности").
- Verbal nouns and passives from English become verbs: "The file was deleted" is "Файл удалён" or "Вы удалили файл".
- Word order is flexible and signals emphasis: new information goes to the end of the sentence. Do not copy English subject-verb-object order mechanically.
- Re-express idioms by meaning: "it's a piece of cake" is "это проще простого" or "это пара пустяков".
- Russian has no articles; do not add demonstratives where English uses "the".

**Grammar that trips translators.**

- Six cases (nominative, genitive, dative, accusative, instrumental, prepositional) and three genders. Placeholders and interpolated nouns need case-aware design.
- Plurals: one, few, many, and other categories. Numerals take specific forms: 1 файл, 2 файла, 5 файлов, 21 файл, 2,5 файла (genitive singular for decimals). See [[unicode-messageformat]].
- Verbs have aspect (perfective and imperfective); choose the aspect that matches completion: "Сохранить" (to save, perfective) in buttons, "Сохранение" for progress.
- Motion verbs and prefixes carry meaning ("войти", "зайти", "выйти").
- Adjectives and participles agree with nouns in gender, number, and case.

**Register.**

- "Вы" (formal or plural) is the standard for UI, support, banking, and public text. "Ты" is used by some youth, gaming, and social brands. Do not mix them. In letters to one person, "Вы" is capitalized; in UI and general text lowercase "вы" is common.
- UI commands use the imperative ("Сохраните" with "вы", "Сохрани" with "ты") or the infinitive ("Сохранить") for buttons. Pick one convention.
- Russian customer text is more formal and less cheerful than American English. Avoid exclamation marks and excessive friendliness unless the brand voice requires them.

**Orthography and typography.**

- Quotation marks: `«…»` with nested `„…“`. Use the em dash with spaces in running text (`слово — слово`), and a non-breaking space before the dash.
- The letter "ё" is usually written as "е" in print, but use "ё" in names, dictionaries, children's text, and where it avoids ambiguity (все/всё).
- Numbers: decimal comma, non-breaking space for thousands (`1 234,56`); currency after the amount (`12,50 ₽`); dates `17 октября 2026 г.` or `17.10.2026`; 24-hour clock; percent with a space (`10 %`).
- Months, days of the week, and nationalities are lowercase; titles use sentence case.
- Gender-inclusive language is contested: the masculine form is the standard generic, and new feminine forms ("авторка") are not accepted by the Institute's norms. Use neutral wording ("пользователь или пользовательница" only where required).

## Common pitfalls

- Translating word by word and keeping English syntax or articles.
- False friends: "актуальный" is "relevant" (not "actual"), "фабрика" is a factory, "магазин" is a shop, "материал" can mean fabric or document, "эвентуально" does not mean "eventually".
- Wrong case or number agreement in placeholders.
- Mixing вы and ты.
- Using English quotation marks, decimal points, or month-first dates.
- Overlong UI strings; Russian text is typically longer than English.
- Overusing the passive and bureaucratic nouns.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Gramota.ru (https://gramota.ru) and Institute of the Russian Language, Russian Academy of Sciences
- Microsoft Localization Style Guide, Russian (https://aka.ms/russian-styleguide)
