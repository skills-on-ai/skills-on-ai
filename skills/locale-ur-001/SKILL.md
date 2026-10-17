---
name: locale-ur-001
description: Use when working with the Urdu locale (`ur-001`) — its endonym اردو, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Urdu (ur-001)

Reference data for the **Urdu** locale — endonym **اردو**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ur-001`
- **ISO 639-1:** `ur`
- **ISO 639-3:** `urd`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 78,000,000
- **L2 (additional):** 230,000,000
- **L1+L2 (total):** 308,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Urdu. Region-specific variants in this dataset:

- [[locale-ur-pk]] (Urdu (Pakistan))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Urdu (اردو) is the national language of Pakistan and a scheduled language of India, written in a Perso-Arabic script, usually in Nastaliq style, right to left. Its spoken grammar is nearly identical to Hindi, while its vocabulary draws on Persian and Arabic. See [[locale-ur-pk]] and compare [[locale-hi-001]].

**Translate ideas, not words.**

- Urdu is subject-object-verb with postpositions (کو، سے، میں، پر، کا/کی/کے). Reorder English sentences.
- Use Persian-Arabic vocabulary where Urdu readers expect it ("شکریہ", "براہِ مہربانی", "معذرت"), and not Sanskritic Hindi words. Do not translate from Hindi by transliteration.
- Use established English loans in Urdu script (فائل، پاس ورڈ، ایپ) and Urdu technical terms from the National Language Authority where established.
- Re-express idioms by meaning; poetic and Persianized expressions are natural in formal Urdu.

**Grammar that trips translators.**

- Two genders, masculine and feminine, which agree with adjectives, postpositions, and verbs; ergative "نے" in perfective transitive verbs.
- Plurals and oblique forms change the noun (لڑکا, لڑکے, لڑکوں). Izafat (ِ) joins Persian-style compounds ("زبانِ اردو") and is not normally written with a mark.

**Register.**

- "آپ" is the polite "you" for UI and public text; "تم" is informal; "تو" is intimate or rude. Use "آپ" with plural verb agreement.
- UI commands use the polite imperative ("محفوظ کریں", "منتخب کریں"). Honorific suffixes (صاحب, محترم) are used in letters.

**Orthography and typography.**

- Right to left. Use Urdu punctuation: comma `،`, semicolon `؛`, question mark `؟`, and full stop `۔` (U+06D4).
- Urdu digits (۰۱۲۳۴۵۶۷۸۹) differ from Arabic-Indic digits in shapes for 4, 5, and 6; Arabic (Western) digits are also common in UI. Do not mix them.
- Nastaliq is the traditional style; if a Naskh font is used, accept that spacing differs. Use Unicode Urdu letters (ے, ہ, ھ, ں, ٹ, ڈ, ڑ) and avoid Arabic look-alikes (ي, ك, ه).
- Currency: Pakistani rupee (Rs or روپے). Check CLDR `ur-PK` for number grouping.

## Common pitfalls

- Using Hindi (Sanskrit) vocabulary or Devanagari.
- Using Arabic look-alike letters (ي, ك) instead of Urdu ی, ک.
- Breaking right-to-left display with unmarked Latin text or numbers.
- Using "تم" in formal text.
- Missing the ergative agreement.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- National Language Authority of Pakistan (Muqtadira Qaumi Zaban)
- Microsoft Localization Style Guide, Urdu (https://aka.ms/urdu-styleguide)
