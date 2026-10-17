---
name: locale-ja-001
description: Use when working with the Japanese locale (`ja-001`) — its endonym 日本語, Japanese script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Japanese (ja-001)

Reference data for the **Japanese** locale — endonym **日本語**, written in the Japanese script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ja-001`
- **ISO 639-1:** `ja`
- **ISO 639-3:** `jpn`
- **Script:** Jpan (Japanese)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 123,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 126,000,000

## Regional variants

This is the base/macro locale for Japanese. Region-specific variants in this dataset:

- [[locale-ja-jp]] (Japanese (Japan))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Japanese is written in a mix of kanji, hiragana, katakana, and Latin letters, with politeness built into verb forms. Translate for the reader's relationship to the speaker, not just the meaning. See [[locale-ja-jp]].

**Translate ideas, not words.**

- Japanese is subject-omitting and context-driven. English pronouns ("you", "we", "I") are usually dropped; do not translate "you" as あなた, which sounds distant or even rude. Address the user with a role (お客様, ユーザー) or leave the subject out.
- Sentence order is subject-object-verb with the verb last; modifiers precede the noun. Long English relative clauses should be split into sentences.
- Japanese prefers short, concrete verbs and noun-ending (体言止め) in UI and headings: "ファイルの保存".
- English passives and "can/will" statements become natural active forms: "You can save the file" is "ファイルを保存できます".
- Re-express idioms by meaning: "it's a piece of cake" is "朝飯前だ" or "簡単だ".
- Avoid excessive katakana loanwords when a common Japanese word exists, and avoid kanji compounds that are too formal for the audience.

**Grammar that trips translators.**

- Particles mark roles: は (topic), が (subject), を (object), に, で, へ, と. Mixing は and が changes the nuance.
- Counters: Japanese uses counters with numerals (1つ, 3人, 5枚, 2台).
- Verb forms encode politeness, tense, and mood; adjectives conjugate.
- Plurals are usually unmarked; use numerals or context.
- Tense: present/non-past and past; progressive with ている.

**Register.**

- Japanese has at least three politeness levels: plain form (だ・である), polite form (です・ます), and honorific/humble forms (keigo: 尊敬語, 謙譲語, 丁寧語). UI, manuals, and customer text normally use です・ます; official and technical documents may use だ・である; business emails use keigo.
- Do not mix です・ます and だ・である within one text. Use お客様 or 様 and avoid 〜さん in formal contexts.
- Japanese customer-facing text is more polite and apologetic than English: use cushion words (恐れ入りますが, 申し訳ございません) where tone requires.

**Orthography and typography.**

- Punctuation: 、 and 。 (full-width), quotation marks 「 」 and 『 』, and wave dash 〜. Use full-width brackets（ ） in Japanese sentences.
- Do not add spaces between Japanese words; there are no spaces between Japanese and Latin letters or digits in most Japanese style,.
- Numbers: Arabic digits in UI; kanji numerals in set phrases and vertical text. Dates: 2026年10月17日; 24-hour clock (17時30分).
- Katakana long vowel mark ー: Microsoft style keeps the final ー for words ending in -er, -or, -ar (ユーザー, サーバー), while JIS standards omit it (ユーザ). Follow the project's style consistently.
- Half-width katakana is not used; use full-width katakana and half-width alphanumerics.

## Common pitfalls

- Translating "you" as あなた or keeping every pronoun.
- Mixing です・ます with だ・である, or inconsistent keigo.
- Overusing katakana loanwords or kanji compounds.
- Using Western punctuation (`.` `,`) or Western quotes instead of 、。「」.
- Inconsistent use of the long vowel mark ー.
- Literal translations of English passives and "please" patterns.
- Breaking lines or applying line-breaking rules (kinsoku) incorrectly.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Japanese (https://aka.ms/japanese-styleguide)
- Agency for Cultural Affairs (Bunka-chō), 公用文作成の考え方 and 現代仮名遣い guidance
