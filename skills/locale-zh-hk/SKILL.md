---
name: locale-zh-hk
description: Use when working with the Chinese (Traditional, Hong Kong) locale (`zh-HK`) — its endonym 繁體中文 (香港), Han (Traditional) script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chinese (Traditional, Hong Kong) (zh-HK)

Reference data for the **Chinese (Traditional, Hong Kong)** locale — endonym **繁體中文 (香港)**, written in the Han (Traditional) script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zh-HK`
- **ISO 639-1:** `zh`
- **ISO 639-3:** `cmn`
- **Script:** Hant (Han (Traditional))
- **Region:** HK (Hong Kong)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 6,600,000
- **L2 (additional):** 410,000
- **L1+L2 (total):** 7,000,000

## Base locale

This is a regional variant of [[locale-zh-001]] (Chinese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-zh-001]] with Hong Kong conventions (Traditional Chinese, Hong Kong). Hong Kong writing follows Standard Written Chinese with Cantonese-influenced vocabulary, while spoken Cantonese is the daily language and is sometimes written (with characters such as 嘅, 咗, 係) in informal contexts only.

- **Script and standard:** Traditional characters with the Hong Kong Supplementary Character Set (HKSCS) for names and Cantonese characters. Use `zh-Hant-HK`.
- **Vocabulary:** HK tech terms often differ from both Taiwan and the Mainland: 軟件 (software), 網絡 (network), 電腦 (computer), 檔案 (file), 短訊 (SMS), 預設 (default). Check the HK Government's and Microsoft's terminology.
- **Punctuation:** 「 」 and 『 』 are common; “ ” is also used in HK publications; follow the project style.
- **Bilingualism:** English is co-official and many brand and product names stay in English; present Chinese and English side by side as the client does.
- **Currency and formats:** Hong Kong dollar (HK$, 港元); day/month/year in bilingual notices; 24-hour clock.
- **Formal writing:** formal HK documents use Written Chinese, not Cantonese colloquial; informal social copy may use Cantonese words if the brand does.

## Common pitfalls

- Writing Cantonese colloquialisms in formal copy.
- Using Taiwan or Mainland tech terms without checking HK usage.
- The general pitfalls in [[locale-zh-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Hong Kong Supplementary Character Set (HKSCS), Government of the HKSAR
- Microsoft Localization Style Guide, Chinese (Traditional) (https://aka.ms/chinese-traditional-styleguide)
