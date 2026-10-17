---
name: locale-id-001
description: Use when working with the Indonesian locale (`id-001`) — its endonym Bahasa Indonesia, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Indonesian (id-001)

Reference data for the **Indonesian** locale — endonym **Bahasa Indonesia**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `id-001`
- **ISO 639-1:** `id`
- **ISO 639-3:** `ind`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 76,000,000
- **L2 (additional):** 180,000,000
- **L1+L2 (total):** 256,000,000

## Regional variants

This is the base/macro locale for Indonesian. Region-specific variants in this dataset:

- [[locale-id-id]] (Indonesian (Indonesia))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Indonesian (bahasa Indonesia) is the national language of Indonesia, written in the Latin script. The language agency Badan Pengembangan dan Pembinaan Bahasa (Badan Bahasa) sets the spelling guidelines (Ejaan yang Disempurnakan, EYD, now in its fifth edition of 2022) and publishes the Kamus Besar Bahasa Indonesia (KBBI). See [[locale-id-id]]. Indonesian and Malay are closely related but not the same; see [[locale-ms-001]].

**Translate ideas, not words.**

- Indonesian is analytic with subject-verb-object order, but its meaning is carried by affixes (meN-, di-, ber-, ter-, -kan, -i, -an) rather than tense.
- Modifiers follow the noun: "user account" is "akun pengguna" (account user). Reverse English noun stacks.
- Use the passive with di- in formal and instructional text ("File dihapus"), where English would use the passive or an impersonal; use the active meN- form for human agents.
- Use the native term where one exists and is established: "unggah" (upload), "unduh" (download), "surel" (email, official, though "email" is more common in practice), "pengguna" (user), "pranala" (link, official), "perangkat lunak" (software). Accept widely used loanwords ("email", "aplikasi") when readers expect them.
- Re-express idioms by meaning: "it's a piece of cake" is "gampang sekali" or "semudah membalik telapak tangan".

**Grammar that trips translators.**

- No tense or grammatical gender; time comes from words like sudah, sedang, akan, and context.
- Reduplication marks plural ("buku-buku"), but it is not used after a numeral or quantifier ("tiga buku", "banyak buku").
- Pronouns: "saya" (I, formal), "kami" (we, exclusive), "kita" (we, inclusive). The choice between "kami" and "kita" carries meaning.
- "Yang" introduces relative clauses; overuse of "yang" imitates English "that"; prefer direct modification.
- Classifiers appear with numerals: "dua buah", "tiga orang", "lima ekor".

**Register.**

- Formal "Anda" (capitalized) is the standard UI and business form for "you". "Kamu" is informal and is used in youth brands and chat. Do not mix them. Government and legal text use impersonal wording and formal vocabulary.
- Titles and honorifics (Bapak, Ibu, Saudara/i) are used when addressing people by name; they can be added to the name in letters.
- Indonesian customer text is polite and warm; use "mohon" and "silakan" for requests ("Silakan masuk").

**Orthography and typography.**

- Follow the current EYD: foreign terms are italicized or adapted to Indonesian spelling; hyphenation of reduplication; "di" as a preposition is separate ("di rumah") but as a verb prefix it is attached ("dibuat").
- Numbers: decimal comma, period for thousands (1.234,56); currency "Rp12.500"; dates "17 Oktober 2026" with capitalized month names; 24-hour clock with a period or colon.
- Quotation marks “ ”; sentence case for titles.

## Common pitfalls

- Writing Malaysian forms ("muat turun", "perisian", "kereta") in Indonesian text.
- Splitting or joining "di" incorrectly.
- Using "kamu" in formal text or mixing it with "Anda".
- Over-reduplicating plural after numerals.
- Overusing "yang" and English word order.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Badan Pengembangan dan Pembinaan Bahasa, Kamus Besar Bahasa Indonesia
- Microsoft Localization Style Guide, Indonesian (https://aka.ms/indonesian-styleguide)
