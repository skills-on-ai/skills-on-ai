---
name: locale-sw-001
description: Use when working with the Swahili locale (`sw-001`) — its endonym Kiswahili, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Swahili (sw-001)

Reference data for the **Swahili** locale — endonym **Kiswahili**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sw-001`
- **ISO 639-1:** `sw`
- **ISO 639-3:** `swa`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 18,000,000
- **L2 (additional):** 130,000,000
- **L1+L2 (total):** 148,000,000

## Regional variants

This is the base/macro locale for Swahili. Region-specific variants in this dataset:

- [[locale-sw-ke]] (Swahili (Kenya))
- [[locale-sw-tz]] (Swahili (Tanzania))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Swahili (Kiswahili) is a Bantu language and a lingua franca of East Africa, an official language of Tanzania, Kenya, Uganda, and the African Union. Standard Swahili (Kiswahili sanifu) is based on the Zanzibar dialect. See [[locale-sw-tz]] and [[locale-sw-ke]].

**Translate ideas, not words.**

- Swahili expresses subject, tense, object, and mood through verb prefixes and extensions: `Nimehifadhi faili` (I-have-saved the file). Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes (m-/wa-, ki-/vi-, m-/mi-, n-, ji-/ma-, u-, pa-/ku-/mu-). The class governs agreement on adjectives, verbs, possessives, and demonstratives: `kitabu kikubwa` (big book), `vitabu vikubwa` (big books). A class error shows up in every agreeing word.
- Use established Swahili terms from BAKITA and TUKI (`faili`, `nenosiri` for password, `programu` for app, `tovuti` for website, `barua pepe` for email) rather than raw English borrowings where a term is in use.
- Re-express idioms and proverbs (methali) by meaning.

**Grammar that trips translators.**

- Agreement prefixes must match the noun class of the subject and object. Placeholders that insert a noun into a sentence need class-aware design.
- Plurals: one and other categories. Numerals one to five take class concord (`vitabu vitatu`, three books).
- Possessives agree with the possessed noun (`kitabu changu`, `vitabu vyangu`).
- Time words use "Swahili time": hours are counted from sunrise at 6:00, so `saa moja asubuhi` means 7:00 a.m. in Swahili time. Clarify the clock convention in any time expression.

**Register.**

- `Wewe` is the singular "you" and `ninyi` is the plural. Polite and formal texts use the plural verb forms (`mnahitaji`) or an impersonal construction. UI commands use the imperative; the plural imperative ends in `-ni` (`Hifadhini`) and is also used to show courtesy. Add `tafadhali` (please) where needed.
- Public and business Swahili is formal and courteous; greetings are important (`Hujambo`, `Habari`, `Karibu`).

**Orthography and typography.**

- Swahili has a regular Latin spelling with no tone marks. Keep the apostrophe in `ng'` (`ng'ombe`), which is a different sound from `ng`.
- Dates `17 Oktoba 2026`; month names are capitalized in running text; currency `TSh` (Tanzania) or `KSh` (Kenya); 24-hour clock with Swahili-time caution; check CLDR `sw` for separators.
- Quotation marks `“…”`.

## Common pitfalls

- Wrong noun-class agreement.
- Translating English time (7 a.m.) literally as `saa saba` (the Swahili 1 o'clock).
- Dropping the `ng'` apostrophe.
- Leaving English terms where an established Swahili term exists.
- Mixing standard Swahili with Sheng or slang in formal content.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- BAKITA (Baraza la Kiswahili la Taifa, Tanzania) and TUKI (Taasisi ya Taaluma za Kiswahili), Kamusi ya Kiswahili Sanifu
- Microsoft Localization Style Guides (https://learn.microsoft.com/globalization/reference/microsoft-style-guides), where available
