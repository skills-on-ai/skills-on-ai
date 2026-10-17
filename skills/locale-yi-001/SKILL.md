---
name: locale-yi-001
description: Use when working with the Yiddish locale (`yi-001`) — its endonym ייִדיש, Hebrew script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Yiddish (yi-001)

Reference data for the **Yiddish** locale — endonym **ייִדיש**, written in the Hebrew script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `yi-001`
- **ISO 639-1:** `yi`
- **ISO 639-3:** `yid`
- **Script:** Hebr (Hebrew)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 600,000
- **L2 (additional):** 400,000
- **L1+L2 (total):** 1,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Yiddish is a Germanic language written in the Hebrew alphabet, right to left. The YIVO standard orthography (1937) is the common academic and secular standard; Hasidic communities use their own orthography with traditional Hebrew-Aramaic spellings. Choose the audience and orthography before translating.

**Translate ideas, not words.**

- Yiddish word order and idiom come from German, Slavic, and Hebrew sources; translate into Yiddish idiom instead of calquing English or Modern Hebrew.
- Words of Hebrew-Aramaic origin are spelled phonetically in the YIVO orthography and in the traditional Hebrew spelling in Hasidic usage; keep one system throughout.
- Re-express idioms by meaning; Yiddish has many proverbs and expressive formulas.

**Grammar.**

- Three genders (masculine, feminine, neuter), a case system reduced to nominative, accusative, and dative, and verb-second word order in main clauses.
- Use the correct diminutive and plural forms; there are many irregular plurals.

**Register.**

- "Du" is informal singular; "ir" is the polite/plural form. Printed text and public communication use "ir".

**Orthography and typography.**

- Right-to-left Hebrew script with niqqud-like pointing used sparingly (pointed letters such as `אַ` and `אָ` distinguish vowels).
- Use the Yiddish ligatures `ײ`, `ײַ`, `װ`, `יִ` where appropriate; Unicode has precomposed Yiddish digraphs.
- Quotation marks `„…“` or Hebrew-style `"…"`; numbers and Latin text run left to right inside the line.

## Common pitfalls

- Mixing YIVO and Hasidic orthographies.
- Using Hebrew grammar or modern Hebrew vocabulary where Yiddish has its own word.
- Breaking right-to-left rendering with unmarked Latin text or numerals.
- Writing German spellings in Hebrew letters.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- YIVO Institute for Jewish Research (https://yivo.org), Yiddish orthography
- Uriel Weinreich, Modern English-Yiddish Yiddish-English Dictionary
