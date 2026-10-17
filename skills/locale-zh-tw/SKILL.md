---
name: locale-zh-tw
description: Use when working with the Chinese (Traditional, Taiwan) locale (`zh-TW`) — its endonym 繁體中文 (台灣), Han (Traditional) script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chinese (Traditional, Taiwan) (zh-TW)

Reference data for the **Chinese (Traditional, Taiwan)** locale — endonym **繁體中文 (台灣)**, written in the Han (Traditional) script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zh-TW`
- **ISO 639-1:** `zh`
- **ISO 639-3:** `cmn`
- **Script:** Hant (Han (Traditional))
- **Region:** TW (Taiwan)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 14,000,000
- **L2 (additional):** 6,600,000
- **L1+L2 (total):** 21,000,000

## Base locale

This is a regional variant of [[locale-zh-001]] (Chinese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-zh-001]] with Taiwan conventions (Traditional Chinese, Taiwan).

- **Script and standard:** Traditional characters per the Ministry of Education's standard forms; the Mandarin spoken base is Guoyu. Use `zh-Hant-TW`. Zhuyin (Bopomofo) is the phonetic system, not Pinyin.
- **Punctuation:** the Ministry of Education's 重訂標點符號手冊 sets the rules; quotation marks 「 」 and 『 』; book-title marks 《 》 and 〈 〉; use full-width forms.
- **Vocabulary:** 軟體 (software), 網路 (network), 預設 (default), 檔案 (file), 資訊 (information), 程式 (program), 伺服器 (server), 使用者 (user), 影片 (video), 滑鼠 (mouse), 列印 (print), 選單 (menu), 支援 (support), 資料 (data), 硬碟 (hard drive).
- **Dates and currency:** Gregorian dates in daily use; the Republic of China era year is used in government documents (民國115年 is 2026). Currency New Taiwan dollar (NT$, 新臺幣 元).
- **Tone:** polite, softer, and more indirect than Mainland copy; 您 is used for formal service.
- **Spoken variety:** Taiwanese Hokkien and Hakka are separate languages; do not write them in Traditional Chinese localization unless the project requires it.

## Common pitfalls

- Using Mainland terms (软件, 默认, 信息) written in Traditional characters.
- Using Simplified characters or “ ” quotation marks.
- The general pitfalls in [[locale-zh-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Chinese (Traditional) (https://aka.ms/chinese-traditional-styleguide)
- Taiwan Ministry of Education, 重編國語辭典修訂本 (Revised Mandarin Chinese Dictionary)
