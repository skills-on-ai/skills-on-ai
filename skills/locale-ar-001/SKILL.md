---
name: locale-ar-001
description: Use when working with the Arabic locale (`ar-001`) — its endonym العربية, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Arabic (ar-001)

Reference data for the **Arabic** locale — endonym **العربية**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ar-001`
- **ISO 639-1:** `ar`
- **ISO 639-3:** `ara`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 411,000,000
- **L2 (additional):** 70,000,000
- **L1+L2 (total):** 480,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Arabic. Region-specific variants in this dataset:

- [[locale-ar-ae]] (Arabic (United Arab Emirates))
- [[locale-ar-bh]] (Arabic (Bahrain))
- [[locale-ar-dz]] (Arabic (Algeria))
- [[locale-ar-eg]] (Arabic (Egypt))
- [[locale-ar-iq]] (Arabic (Iraq))
- [[locale-ar-jo]] (Arabic (Jordan))
- [[locale-ar-kw]] (Arabic (Kuwait))
- [[locale-ar-lb]] (Arabic (Lebanon))
- [[locale-ar-ly]] (Arabic (Libya))
- [[locale-ar-ma]] (Arabic (Morocco))
- [[locale-ar-om]] (Arabic (Oman))
- [[locale-ar-qa]] (Arabic (Qatar))
- [[locale-ar-sa]] (Arabic (Saudi Arabia))
- [[locale-ar-sd]] (Arabic (Sudan))
- [[locale-ar-sy]] (Arabic (Syria))
- [[locale-ar-tn]] (Arabic (Tunisia))
- [[locale-ar-ye]] (Arabic (Yemen))

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **two**, **few**, **many**, **other** (6 forms).

- **zero** — `n = 0` (e.g. 0)
- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n % 100 = 3..10` (e.g. 3~10, 103~110, 1003, …)
- **many** — `n % 100 = 11..99` (e.g. 11~26, 111, 1011, …)
- **other** — everything else (e.g. 100~102, 200~202, 300~302, 400~402, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Written Arabic is Modern Standard Arabic (MSA, الفصحى), shared by all Arab countries; spoken dialects (Egyptian, Levantine, Gulf, Maghrebi, and others) differ widely and are mostly unwritten in formal text. Use MSA for software, documentation, news, and legal text, and use this locale when the audience spans several countries. For a single country, use that country's regional skill (such as [[locale-ar-eg]], [[locale-ar-sa]], or [[locale-ar-ma]]).

**Translate ideas, not words.**

- Arabic favors long, connected sentences linked by و, ف, and ثم, where English splits ideas into short sentences. Join short English sentences so the logic stays visible, but split lists of instructions into steps.
- Arabic prefers verbs and verbal nouns (المصدر) over English noun stacks. Rework "user account settings page" as "صفحة إعدادات حساب المستخدم", using the genitive construct (الإضافة) in which only the last noun takes "ال".
- Avoid word-by-word calques that are common in machine translation: "قام بـ" + verbal noun for every action ("قام بحفظ الملف" for "saved the file" instead of "حفظ الملف"), "يتم" + verbal noun for every passive ("يتم حفظ الملف"), and "في حين أن" for every "while". The "يتم" passive is accepted in UI strings but is overused; prefer the active verb where the actor is known.
- Idioms and proverbs do not carry over; re-express by meaning. Religious phrases (إن شاء الله, بإذن الله, الحمد لله) are natural in Arab discourse but should not be added to commercial copy unless the brand voice calls for them.
- Word order: verb-subject-object is the classic order and is common in news and formal text; subject-verb-object is also standard and is closer to English. In verb-first sentences the verb agrees with the subject in gender but stays singular.

**Grammar that trips translators.**

- Gender: all nouns, adjectives, and verbs are masculine or feminine. Software conventionally addresses the user in the masculine ("سجّل الدخول"); address women with feminine forms ("سجّلي الدخول") only if the product knows the user's gender.
- Number: Arabic has singular, dual, and plural. Use the dual for two items (ملفان / ملفين) and for pairs. After numerals 3 to 10 the counted noun is plural and the numeral takes the opposite gender of the noun; after 11 to 99 the noun is singular and in the accusative (أحد عشر ملفًا). See [[unicode-messageformat]] for plural categories.
- Broken plurals follow patterns, not a rule; check a dictionary rather than adding "ات".
- Definiteness: the article "ال" attaches to the word; adjectives agree in definiteness (الكتاب الجديد). Non-human plurals take feminine singular agreement (الكتب الجديدة).
- Prepositions govern cases, and many verbs take fixed prepositions that differ from English.
- Case endings (إعراب) are not written in everyday text; add short vowel marks (تشكيل) only where meaning is ambiguous (for example in teaching materials or names).

**Register.**

- Arabic does not have a T-V pronoun split like French or Spanish; politeness is carried through titles, honorific nouns (حضرتك, سيادتكم, سعادتكم, معالي), and polite phrases (من فضلك, لو سمحت, يُرجى).
- For UI and support, use polite MSA with "يُرجى" (please) and the conventional masculine singular address, and avoid dialect forms. Marketing for a single country may borrow light dialect.
- Business Arabic opens with greetings and formulaic politeness (تحية طيبة وبعد); do not strip the greeting from a translated letter.

**Orthography and typography.**

- Arabic is written right to left; numbers and Latin text run left to right inside the line, which requires correct bidirectional handling. Never mirror numerals or reorder digits manually.
- There is no capitalization and no italics; use bold or quotation marks for emphasis, and never stretch letters with kashida in UI.
- Punctuation: use the Arabic comma `،`, the Arabic semicolon `؛`, and the Arabic question mark `؟`. Quotation marks are `«…»` (guillemets) or `"…"`.
- Digits: the Eastern Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩) and the Western digits (0123456789) are both in use, and the choice varies by country, brand, and medium. Follow the target country's convention and the CLDR data; the Maghreb typically uses Western digits.
- Dates: Gregorian is standard; Saudi Arabia also uses the Hijri calendar officially. Gregorian month names vary by region (يناير / فبراير in Egypt, the Gulf, and the Maghreb; كانون الثاني / شباط in the Levant and Iraq).
- The percent sign may appear as `٪` or `%`; place it according to the target country's practice.
- Names and brand terms: transliterate by pronunciation or keep the Latin form next to the Arabic on first use, following the project glossary.

**Choosing a region.** Pick MSA for pan-Arab content. For one country, apply that country's currency, numerals, calendar, month names, weekend, and polite forms, and consider light dialect only in marketing.

## Common pitfalls

- Word-by-word machine translation that preserves English word order, the passive voice, and noun stacks.
- Mixing MSA and a dialect in the same string.
- Wrong plural and numeral agreement ("3 ملفات" is correct; "3 ملف" is not).
- Breaking right-to-left display by concatenating strings with numbers or Latin words without bidirectional marks.
- Using Latin punctuation (`,` `;` `?`) in Arabic prose.
- Assuming one digit style, month names, or weekend for the whole Arab world.
- Stripping honorifics or greetings from formal correspondence.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Arabic (https://aka.ms/arabic-styleguide)
- Unicode CLDR locale data for digits, calendars, and currency formats (https://cldr.unicode.org)
- Academy of the Arabic Language in Cairo and the Arab League's unified terminology efforts (ALECSO) for standard terminology
- W3C Arabic layout requirements (https://www.w3.org/TR/alreq/)
