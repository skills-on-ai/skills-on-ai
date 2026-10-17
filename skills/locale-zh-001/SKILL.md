---
name: locale-zh-001
description: Use when working with the Chinese locale (`zh-001`) — its endonym 普通话, Han (Simplified) script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chinese (zh-001)

Reference data for the **Chinese** locale — endonym **普通话**, written in the Han (Simplified) script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zh-001`
- **ISO 639-1:** `zh`
- **ISO 639-3:** `cmn`
- **Script:** Hans (Han (Simplified))
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 941,000,000
- **L2 (additional):** 260,000,000
- **L1+L2 (total):** 1,201,000,000

## Regional variants

This is the base/macro locale for Chinese. Region-specific variants in this dataset:

- [[locale-zh-cn]] (Chinese (Simplified, China))
- [[locale-zh-hk]] (Chinese (Traditional, Hong Kong))
- [[locale-zh-mo]] (Chinese (Traditional, Macao))
- [[locale-zh-sg]] (Chinese (Simplified, Singapore))
- [[locale-zh-tw]] (Chinese (Traditional, Taiwan))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Chinese is written in two scripts and several regional standards: Simplified characters (Mainland China and Singapore) and Traditional characters (Taiwan, Hong Kong, and Macao). Spoken Mandarin, Cantonese, and other varieties share a written standard (Standard Written Chinese, baihua). Pick the target region first; do not convert Simplified to Traditional with a character mapping tool alone, because vocabulary and punctuation differ. See [[locale-zh-cn]], [[locale-zh-tw]], [[locale-zh-hk]], [[locale-zh-mo]], and [[locale-zh-sg]].

**Translate ideas, not words.**

- Chinese is topic-prominent and context-driven: subjects, pronouns, and connectors are frequently omitted when clear. English sentences with explicit subjects and many conjunctions read as translationese (欧化 "Europeanized" Chinese). Cut pronouns, split long sentences into short clauses joined by commas, and let word order carry the logic.
- Avoid the long left-branching modifier before a noun that mimics English relative clauses ("the file that you last edited yesterday in the shared folder"). Break it into two clauses.
- Chinese prefers verbs to abstract nominalizations: "进行分析" (carry out an analysis) is often better as "分析"; "进行设置" as "设置".
- The passive marker 被 often carries a negative or unfortunate nuance in Mainland usage; prefer an active sentence or 由…… in neutral technical text.
- Chinese reaches for four-character idioms (成语) and balanced phrases in formal writing; match the rhythm, but do not add 成语 to technical copy for decoration.
- Re-express idioms by meaning: "it's a piece of cake" is "小菜一碟" or "轻而易举".

**Grammar that trips translators.**

- No inflection: no plurals, no tense endings, no articles. Express time with adverbs and aspect particles 了, 过, 着, and number with numerals plus measure words (量词): 一个文件, 三份报告, 两台设备.
- Measure words must match the noun (个, 份, 张, 条, 台, 位); a generic 个 is a fallback but sounds weak in formal text.
- The particle 的 links modifiers to nouns; avoid chains of 的 and use verbal or adverbial forms where possible.
- Word order puts modifiers before the noun and adverbials before the verb; time and place come before the verb (我昨天在办公室打开了文件).
- Questions use particles (吗, 呢) or the verb-not-verb form; yes/no answers repeat the verb.

**Register.**

- Chinese has "你" (informal) and "您" (polite). UI and customer service often use "您" (formal brands) or avoid the pronoun altogether; either choice works if consistent. Marketing may use "你" for a friendly tone.
- UI commands are short verb phrases without a subject ("保存", "发送", "设置").
- Business writing is concise; salutations and courtesy forms depend on the region (see the regional skills).

**Orthography and typography.**

- Use full-width Chinese punctuation: 。，、；：？！ with no space after it. Do not use ASCII punctuation in Chinese sentences, except inside Latin text, URLs, and code.
- Quotation marks differ by region: Mainland China uses “ ” and ‘ ’; Taiwan uses 「 」 and 『 』; Hong Kong uses either; see the regional skills.
- Numbers: Arabic digits for quantities in UI; Chinese numerals in idioms and formal prose. Grouping follows the CLDR data; large numbers use 万 (10,000) and 亿 (100 million) in text, which is natural in Chinese but needs conversion from English millions and billions.
- Dates are year-month-day: 2026年10月17日; 24-hour clock is normal; the week traditionally starts on Monday in Mainland China, Sunday in some other regions (check CLDR).
- Spacing between Chinese and Latin letters or digits is recommended in many style guides (中文 English 123), but is not mandatory in Mainland Chinese typography; follow the project's style guide consistently.
- Use the correct language tags: `zh-Hans` for Simplified and `zh-Hant` for Traditional, with a region subtag.

## Common pitfalls

- Converting Simplified to Traditional (or the reverse) by script mapping alone, which produces wrong vocabulary (for example 软件 versus 軟體, 默认 versus 預設).
- Translationese: heavy use of 被, 进行, 的, and explicit pronouns.
- Using ASCII punctuation or the wrong quotation marks for the target region.
- Missing measure words or choosing the wrong one.
- Mixing Mainland and Taiwan terms for technology ("程序" versus "程式", "服务器" versus "伺服器").
- Keeping English word order in long noun phrases.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, Chinese (Simplified) and Chinese (Traditional) (https://aka.ms/chinese-simplified-styleguide, https://aka.ms/chinese-traditional-styleguide)
- GB/T 15834 (punctuation) and GB/T 15835 (numbers) in Mainland China; Taiwan Ministry of Education Chinese punctuation handbook
