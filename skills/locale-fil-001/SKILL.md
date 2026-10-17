---
name: locale-fil-001
description: Use when working with the Filipino locale (`fil-001`) — its endonym Filipino, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Filipino (fil-001)

Reference data for the **Filipino** locale — endonym **Filipino**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fil-001`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `fil`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 29,000,000
- **L2 (additional):** 54,000,000
- **L1+L2 (total):** 83,000,000

## Regional variants

This is the base/macro locale for Filipino. Region-specific variants in this dataset:

- [[locale-fil-ph]] (Filipino (Philippines))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9` (e.g. 0~3, 5, 7, 8, …)
- **other** — everything else (e.g. 4, 6, 9, 14, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Filipino is the national language of the Philippines, based on Tagalog, with the Komisyon sa Wikang Filipino (KWF) setting the orthography. English is also official, and Filipino text often mixes in English words (Taglish). See [[locale-fil-ph]].

**Translate ideas, not words.**

- Filipino has a verb-initial (predicate-first) sentence order: "Binuksan ko ang file" (opened I the file). English subject-verb-object order must be reworked.
- Filipino uses a voice (focus) system with affixes that mark the actor, object, location, or beneficiary (-um-, mag-, -in, i-, -an). Choose the affix that matches the focus of the sentence, not just a plain verb.
- Verbs mark aspect (completed, started, not started), not tense; time words are optional.
- Technical terms are often kept in English or Filipinized ("i-click", "mag-log in", "i-download"); use the Filipino term where one is established and clear. Avoid forced neologisms that readers do not use.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Case markers ang, ng (mga for plural), and sa mark topics and relations.
- Pronouns have inclusive and exclusive "we" (tayo includes the listener; kami excludes the listener).
- Linkers na and -ng join modifiers to nouns ("magandang araw", "bagong file").
- Plural is marked by "mga" before the noun, not by suffixes; do not use it with numerals.

**Register.**

- "Ikaw" (singular informal) and "kayo" (plural or polite) are the main second-person forms; the particles "po" and "ho" mark respect to elders and in formal service. UI text commonly uses "ka"/"ikaw" in a friendly tone or "kayo" with "po" in customer service. Choose one and be consistent.
- Filipino is warm and relational; abrupt phrasing can sound rude.

**Orthography and typography.**

- Spelling follows the KWF Ortograpiya ng Wikang Filipino; English words are spelled as in English or in an adapted form ("kompyuter", "telepono").
- Numbers: decimal point, comma thousands (as in the US); dates often month-day-year ("Oktubre 17, 2026"); currency peso (₱).
- Quotation marks “ ”.

## Common pitfalls

- Copying English subject-verb-object order.
- Using the wrong focus affix.
- Omitting "po/ho" in respectful service text.
- Confusing "tayo" and "kami".
- Inventing deep Tagalog terms that readers do not use.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Komisyon sa Wikang Filipino, Ortograpiya ng Wikang Filipino (https://kwf.gov.ph)
- Microsoft Localization Style Guide, Filipino (https://aka.ms/filipino-styleguide)
