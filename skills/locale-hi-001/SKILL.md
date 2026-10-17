---
name: locale-hi-001
description: Use when working with the Hindi locale (`hi-001`) — its endonym हिन्दी, Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hindi (hi-001)

Reference data for the **Hindi** locale — endonym **हिन्दी**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hi-001`
- **ISO 639-1:** `hi`
- **ISO 639-3:** `hin`
- **Script:** Deva (Devanagari)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 528,000,000
- **L2 (additional):** 274,000,000
- **L1+L2 (total):** 802,000,000

## Regional variants

This is the base/macro locale for Hindi. Region-specific variants in this dataset:

- [[locale-hi-in]] (Hindi (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Hindi is written in Devanagari, is the most widely spoken language of India, and shares much of its spoken grammar with Urdu. Written Hindi ranges from plain everyday vocabulary to heavily Sanskritized official Hindi; choose the register that readers use. See [[locale-hi-in]].

**Translate ideas, not words.**

- Hindi is subject-object-verb with postpositions (को, से, में, पर, का/की/के) rather than prepositions. Reorder English sentences; do not translate word for word.
- Prefer widely understood words. Pure Sanskrit coinages (such as "संगणक" for computer) are used in official texts but readers say "कंप्यूटर"; follow the audience, and accept common English loanwords written in Devanagari (फ़ाइल, पासवर्ड, ऐप, लॉग इन).
- Hindi uses compound verbs (उठा लेना, कर देना) and conjunct verbs ("प्रयोग करना", "सहेजना") where English has a single verb. Choose natural verbs instead of literal "बनाना" for "make".
- Re-express idioms by meaning: "it's a piece of cake" is "बाएँ हाथ का खेल" or "बहुत आसान है".
- English passives become active or the Hindi passive ("फ़ाइल सहेजी गई"); do not overuse "द्वारा" (by).

**Grammar that trips translators.**

- Two genders, masculine and feminine, which agree with adjectives, postpositions, and verbs. Loanwords need a gender (check a dictionary or usage; "पासवर्ड" is masculine).
- Ergative construction in the perfective tense: the subject takes "ने" and the verb agrees with the object ("उसने फ़ाइल खोली").
- Plurals and oblique forms: masculine nouns change (लड़का to लड़के, लड़कों); feminine nouns take -एँ or -यों.
- Postposition choice depends on the noun case; "में", "पर", and "से" rarely map to English prepositions one to one.

**Register.**

- "आप" is the polite form used in UI, customer service, and public text; "तुम" is informal; "तू" is intimate or rude. Use "आप" with plural verb agreement.
- UI commands use the polite imperative "-ें" ("सहेजें", "चुनें", "जारी रखें") or the infinitive; avoid the impolite "-ो" and the bare stem. Be consistent.
- Official Hindi follows the guidelines of the Commission for Scientific and Technical Terminology (CSTT), but simplicity is the stated aim of the Official Language Department.

**Orthography and typography.**

- The nukta letters (क़, ख़, ग़, ज़, फ़, ड़, ढ़) are used for loanword sounds; follow the Central Hindi Directorate's standard spelling.
- Punctuation: the danda (।) ends sentences in traditional printing; modern digital Hindi increasingly uses the period (.); follow the project's convention.
- Numbers: Arabic digits in UI; Devanagari digits (०-९) in some printed material; the Indian grouping system (12,34,567; lakh and crore) is used in India. Currency ₹. Dates DD/MM/YYYY, with Hindi month names (अक्टूबर).
- Quotation marks: “ ” or ‘ ’; spaces are used between words but not before a danda.

## Common pitfalls

- Overly Sanskritized wording that readers do not use.
- Wrong gender or missing agreement for loanwords.
- Missing the ergative "ने" agreement.
- Using "तू" or "तुम" in formal text, or mixing with "आप".
- Dropping nuktas or mismatching conjuncts.
- Translating "you" and "I" in every sentence.
- Wrong plural or oblique forms.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
- Central Hindi Directorate and Commission for Scientific and Technical Terminology (CSTT), Government of India
