---
name: locale-zh-cn
description: Use when working with the Chinese (Simplified, China) locale (`zh-CN`) — its endonym 简体中文 (中国), Han (Simplified) script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chinese (Simplified, China) (zh-CN)

Reference data for the **Chinese (Simplified, China)** locale — endonym **简体中文 (中国)**, written in the Han (Simplified) script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zh-CN`
- **ISO 639-1:** `zh`
- **ISO 639-3:** `cmn`
- **Script:** Hans (Han (Simplified))
- **Region:** CN (China)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 900,000,000
- **L2 (additional):** 238,000,000
- **L1+L2 (total):** 1,138,000,000

## Base locale

This is a regional variant of [[locale-zh-001]] (Chinese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-zh-001]] with Mainland China conventions (Simplified Chinese).

- **Script and standard:** Simplified characters per the national standard (通用规范汉字表); Putonghua is the spoken base. Use `zh-Hans-CN`.
- **Punctuation:** national standard GB/T 15834 defines Chinese punctuation; quotation marks “ ” and ‘ ’; the book-title marks are 《 》 and 〈 〉.
- **Vocabulary:** 软件 (software), 网络 (network), 默认 (default), 文件 (file), 信息 (information), 程序 (program), 服务器 (server), 用户 (user), 视频 (video), 鼠标 (mouse), 打印 (print), 菜单 (menu), 支持 (support), 数据 (data), 硬盘 (hard drive).
- **Numbers:** the national standard for numerals in publications is GB/T 15835; currency 人民币 (¥ or RMB), formatted ¥12.50 or 12.50元; day/month/year is not used, use 2026年10月17日.
- **Tone:** direct, concise, and polite; 您 is used for official and service text; celebratory marketing language is common, but should be factual in regulated areas.
- **Regulatory context:** content published in Mainland China is subject to local legal and content rules; check them before localizing sensitive text, maps, and terms about regions.

## Common pitfalls

- Using Taiwan or Hong Kong vocabulary (軟體, 預設, 資料).
- Using Traditional characters or 「」 quotation marks.
- The general pitfalls in [[locale-zh-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Chinese (Simplified) (https://aka.ms/chinese-simplified-styleguide)
- GB/T 15834-2011 Punctuation and GB/T 15835-2011 Numbers in publications
