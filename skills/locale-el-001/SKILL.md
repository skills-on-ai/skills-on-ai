---
name: locale-el-001
description: Use when working with the Greek locale (`el-001`) — its endonym Ελληνικά, Greek script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Greek (el-001)

Reference data for the **Greek** locale — endonym **Ελληνικά**, written in the Greek script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `el-001`
- **ISO 639-1:** `el`
- **ISO 639-3:** `ell`
- **Script:** Grek (Greek)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 13,500,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 16,500,000

## Regional variants

This is the base/macro locale for Greek. Region-specific variants in this dataset:

- [[locale-el-cy]] (Greek (Cyprus))
- [[locale-el-gr]] (Greek (Greece))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Modern Greek is written in the Greek alphabet in the monotonic system (one accent mark, adopted in 1982). The Centre for the Greek Language (Κέντρο Ελληνικής Γλώσσας) and the Institute of Modern Greek Studies (Triantafyllidis Foundation) are the main references. See [[locale-el-gr]] and [[locale-el-cy]].

**Translate ideas, not words.**

- Greek is inflected, so word order is flexible and signals emphasis. Avoid English noun stacks; use genitive phrases and prepositional phrases: "user account settings" is "ρυθμίσεις λογαριασμού χρήστη" (settings of account of user).
- Greek drops subject pronouns (`Αποθηκεύσαμε τις αλλαγές`) and prefers active constructions.
- Avoid calques of English passive and noun-heavy phrases. Use a verb.
- Re-express idioms by meaning: "it's a piece of cake" is "είναι παιχνιδάκι".

**Grammar that trips translators.**

- Three genders and four cases (nominative, genitive, accusative, vocative); the dative has disappeared from everyday Greek. Articles (ο, η, το) are required and decline, even before proper names (`ο Γιάννης`).
- Adjectives, articles, and nouns agree in gender, number, and case. Placeholders need case-aware design.
- Verbs have aspect (perfective and imperfective) and several tense and mood forms; the subjunctive uses `να`.
- Plurals: one and other categories; see [[unicode-messageformat]].

**Register.**

- `Εσείς` (polite or plural) is the standard "you" in UI, support, banking, and public text; `εσύ` is informal and used in youth brands and many consumer apps. Do not mix them.
- UI commands use the imperative (`Αποθηκεύστε` with εσείς, `Αποθήκευσε` with εσύ) or the infinitive-like noun form for buttons (`Αποθήκευση`). Be consistent.

**Orthography and typography.**

- Stress is marked on every polysyllabic word with the tonos (ά, έ, ή, ί, ό, ύ, ώ). In all-capital text, the tonos is dropped (`ΚΑΛΗΜΕΡΑ`), but the dialytika stays (`ΠΡΟΪΟΝ`). Case conversion functions must handle this.
- The Greek question mark looks like a semicolon (`;`, U+037E); the ano teleia (`·`, U+0387) is the Greek semicolon. Quotation marks `«…»`.
- Numbers: decimal comma, period for thousands (`1.234,56`); euro `12,50 €`; dates `17 Οκτωβρίου 2026` (month in the genitive); 24-hour clock.
- Sentence case for titles; months and days lowercase except at the start of a sentence.

## Common pitfalls

- Missing the tonos or putting it in all-capital text.
- Using the nominative where the genitive or accusative is needed.
- Dropping the article before names.
- Mixing εσείς and εσύ.
- Transliterating English terms in Greek letters instead of using the Greek term (`κομπιούτερ` for `υπολογιστής`).

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Κέντρο Ελληνικής Γλώσσας, Greek language portal (https://www.greek-language.gr)
- Institute of Modern Greek Studies (Triantafyllidis Foundation), Λεξικό της Κοινής Νεοελληνικής
- Microsoft Localization Style Guide, Greek (https://aka.ms/greek-styleguide)
