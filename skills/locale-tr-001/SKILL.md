---
name: locale-tr-001
description: Use when working with the Turkish locale (`tr-001`) — its endonym Türkçe, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Turkish (tr-001)

Reference data for the **Turkish** locale — endonym **Türkçe**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `tr-001`
- **ISO 639-1:** `tr`
- **ISO 639-3:** `tur`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 85,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 91,000,000

## Regional variants

This is the base/macro locale for Turkish. Region-specific variants in this dataset:

- [[locale-tr-tr]] (Turkish (Turkey))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Turkish is an agglutinative Turkic language written in the Latin script, with vowel harmony, no grammatical gender, and subject-object-verb order. The Turkish Language Association (Türk Dil Kurumu, TDK) publishes the Yazım Kılavuzu (spelling guide) and the Güncel Türkçe Sözlük (https://sozluk.gov.tr). See [[locale-tr-tr]].

**Translate ideas, not words.**

- Turkish builds meaning with suffix chains on a stem, not with auxiliaries and prepositions. English prepositional phrases become case suffixes (`bilgisayarda`, `dosyadan`, `kullanıcı için`); English relative clauses become participial phrases before the noun (`kaydettiğiniz dosya` for "the file that you saved"). Do not keep the English order.
- Turkish relies on noun-verb compounds with `etmek` and `yapmak` (`kontrol etmek`, `ziyaret etmek`); use the natural verb, and avoid mechanical `yapmak` for "make" and "do".
- Turkish avoids the English passive when an active form is natural; where used, the passive is formed with -il/-in (`Dosya silindi`).
- Turkish drops subject pronouns (`Değişiklikleri kaydettik`).
- Re-express idioms by meaning: "it's a piece of cake" is "çocuk oyuncağı" or "bir su içimi kadar kolay".

**Grammar that trips translators.**

- Vowel harmony: suffix vowels follow the last vowel of the stem (front/back, rounded/unrounded) in `-lar/-ler`, `-da/-de`, `-ı/-i/-u/-ü`. Wrong harmony is a visible error, especially with loanwords and acronyms, whose harmony follows pronunciation.
- The plural suffix is not used after a numeral or quantifier (`iki dosya`, `birçok kullanıcı`). Plural categories: one and other. See [[unicode-messageformat]].
- Suffixes attach to proper names and acronyms with an apostrophe (`Ankara'da`, `TDK'nın`), but not to common nouns.
- The -miş past marks inferred or reported information, and -di marks directly witnessed events. Choose the one that fits.
- There is no grammatical gender and no articles; `bir` marks indefiniteness only where needed.

**Register.**

- `Siz` (polite or plural) is the default for UI, support, banking, and public text; `sen` (informal) appears in some youth, gaming, and consumer brands. Do not mix them. Imperative with `siz` is `Kaydedin`; with `sen` it is `Kaydet`.
- Turkish business writing is courteous: `Lütfen`, `Sayın` (Dear), `Saygılarımızla` (Sincerely). Add `Bey` and `Hanım` after first names.
- UI commands use the imperative or a noun form for buttons (`Kaydet`, `Kaydetme`).

**Orthography and typography.**

- Dotted and dotless i are separate letters: `I ı` and `İ i`. Case mapping is locale-sensitive: uppercase `i` is `İ`, and uppercase `ı` is `I`. Use a locale-aware case function, or `title` strings become wrong ("KİTAP", not "KITAP").
- Use ğ, ş, ç, ö, ü, ı, İ; never replace them with ASCII look-alikes.
- Numbers: decimal comma, period for thousands (`1.234,56`); currency `₺12,50` (symbol before the amount in CLDR); dates `17 Ekim 2026` or `17.10.2026`; 24-hour clock.
- Month and day names in specific dates are capitalized (`17 Ekim 2026`); check the TDK guide for other cases.
- Quotation marks `“…”` or `«…»`.

## Common pitfalls

- Missing vowel harmony or wrong suffix forms with loanwords.
- Using a plural after a numeral.
- Wrong casing of dotted and dotless i.
- Keeping English relative clauses and prepositions.
- Mixing siz and sen.
- Using an apostrophe with common nouns, or omitting it with proper names.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Türk Dil Kurumu (TDK), Yazım Kılavuzu and Güncel Türkçe Sözlük (https://sozluk.gov.tr)
- Microsoft Localization Style Guide, Turkish (https://aka.ms/turkish-styleguide)
