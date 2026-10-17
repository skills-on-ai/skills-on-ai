---
name: locale-bs-001
description: Use when working with the Bosnian locale (`bs-001`) — its endonym Bosanski, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Bosnian (bs-001)

Reference data for the **Bosnian** locale — endonym **Bosanski**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `bs-001`
- **ISO 639-1:** `bs`
- **ISO 639-3:** `bos`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 3,100,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 3,600,000

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Bosnian is a South Slavic language written in the Latin script (Cyrillic is also official in Bosnia and Herzegovina). It uses ijekavian forms in the standard and differs from Croatian and Serbian in vocabulary, orthography, and some loanwords. The Institute for Language at the University of Sarajevo and the Bosnian orthography (Pravopis bosanskoga jezika) provide the norm.

**Translate ideas, not words.**

- Do not translate through Serbian or Croatian. Bosnian keeps the sound `h` in words like `kahva`, `hljeb`, `lahko`, and uses Turkish-origin words (`sat`, `čaršija`, `hiljada`) alongside Slavic ones.
- Use Bosnian forms: `historija`, `hiljada`, `sedmica`, `zrakoplov` or `avion`, `šta` (what) and `što` as accepted. The standard prefers the future with `ću` and either the infinitive or `da` plus present.
- Re-express idioms by meaning.

**Grammar and register.**

- Seven cases and three genders; plural categories one, few, and other; clitics in second position.
- "Ti" is informal and "Vi" is formal. UI and public text commonly use "Vi" or an impersonal style.

**Orthography and typography.**

- Latin letters č, ć, đ, š, ž and digraphs dž, lj, nj. Quotation marks `„…“`; dates `17. oktobra 2026.`; decimal comma; currency convertible mark (`KM`, `BAM`).
- Month names are Latin: `januar`, `februar`, `mart`, `april`, `maj`, `juni`, `juli`, `august`, `septembar`, `oktobar`, `novembar`, `decembar`.

## Common pitfalls

- Using Croatian month names or vocabulary (`siječanj`, `tisuća`).
- Using Serbian ekavian forms.
- Dropping the `h` sound in Bosnian words.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institut za jezik Univerziteta u Sarajevu
- Pravopis bosanskoga jezika (Halilović)
