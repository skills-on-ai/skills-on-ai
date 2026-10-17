---
name: locale-my-001
description: Use when working with the Burmese locale (`my-001`) — its endonym မြန်မာစာ, Myanmar script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Burmese (my-001)

Reference data for the **Burmese** locale — endonym **မြန်မာစာ**, written in the Myanmar script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `my-001`
- **ISO 639-1:** `my`
- **ISO 639-3:** `mya`
- **Script:** Mymr (Myanmar)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 32,900,000
- **L2 (additional):** 10,000,000
- **L1+L2 (total):** 42,900,000

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Burmese (Myanmar language) is a tonal language written in the Myanmar script. The language has a strong diglossia between formal literary and colloquial spoken forms, and legacy encoding issues (Zawgyi versus Unicode). This guidance is lower-confidence on fine points; have a native reviewer check it.

**Translate ideas, not words.**

- Burmese is subject-object-verb, with verb-final sentences and sentence-final particles. Reorder English sentences; do not translate word for word.
- Burmese drops pronouns when clear and uses titles and kinship terms (ဦး, ဒေါ်, ကို, မ) according to age and gender; avoid a direct "you".
- Re-express idioms by meaning.

**Grammar.**

- Postpositional particles mark case and relations. Verb endings and particles mark tense, mood, and politeness.
- Classifiers follow numerals (ဖိုင်တစ်ဖိုင်).

**Register.**

- Formal written Burmese uses literary particles (သည်, ၏, ၌); spoken and informal writing use colloquial particles (တယ်, ရဲ့, မှာ). Government and legal text use the formal register; UI text commonly uses the polite colloquial (-ပါတယ်, -ပါ). Choose one and be consistent.
- Honorific words and polite particles (ပါ) soften requests.

**Orthography and typography.**

- Use Unicode Myanmar text, not Zawgyi. Zawgyi is a legacy non-standard encoding that renders as garbage under Unicode fonts; convert Zawgyi sources to Unicode before translating.
- Spaces mark phrases and clauses, not words. Sentences end with the section sign (။); the little section sign (၊) marks clause breaks.
- Burmese digits (၀ to ၉) and Arabic digits are both used. Currency kyat (Ks).
- Spelling follows the Myanmar Language Commission's dictionary and orthography.

## Common pitfalls

- Using Zawgyi encoding or mixing it with Unicode.
- Mixing formal and colloquial registers.
- Using Latin punctuation instead of ၊ and ။.
- Translating "you" directly.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Myanmar Language Commission, Myanmar-English Dictionary and orthography
- Unicode Standard, Myanmar block
