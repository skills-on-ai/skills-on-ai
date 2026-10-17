---
name: locale-lb-001
description: Use when working with the Luxembourgish locale (`lb-001`) — its endonym Lëtzebuergesch, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Luxembourgish (lb-001)

Reference data for the **Luxembourgish** locale — endonym **Lëtzebuergesch**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lb-001`
- **ISO 639-1:** `lb`
- **ISO 639-3:** `ltz`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 400,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 600,000

## Regional variants

This is the base/macro locale for Luxembourgish. Region-specific variants in this dataset:

- [[locale-lb-lu]] (Luxembourgish (Luxembourg))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Luxembourgish (Lëtzebuergesch) is a West Central German language and one of three official languages of Luxembourg. Written Luxembourgish follows the spelling reform of 1999 and its later updates. It is distinct from Standard German; do not treat it as a dialect of German in translation.

**Translate ideas, not words.**

- Do not translate through German or French word by word; Luxembourgish has its own idioms and many French loanwords. Use the Lëtzebuerger Online Dictionnaire (LOD, https://lod.lu) as the reference.
- Re-express English idioms by meaning.

**Grammar.**

- Three genders (masculine, feminine, neuter) and three cases (nominative, accusative, dative); the genitive is mostly gone.
- Verb is second in main clauses and final in subordinate clauses, as in German.
- The n-rule (Eifeler Regel): a final -n is dropped before most consonants ("hien" but "hie kënnt"); keep it before vowels and d, t, z, h, n.

**Register.**

- "Du" is the informal singular. "Dir" is the polite form and the plural. Public-facing text commonly uses "Dir" or an impersonal form.

**Orthography and typography.**

- The 1999 reform has been updated by the Zenter fir d'Lëtzebuerger Sprooch (ZLS); Luxembourgish spelling uses letters like ë and é: "Lëtzebuerg", "Mëttwoch".
- Quotation marks `„…“` or `«…»`; decimal comma; euro; dates "17. Oktober 2026".

## Common pitfalls

- Writing Standard German or French in place of Luxembourgish.
- Missing the n-rule.
- Using pre-1999 spellings.
- Using German genitive forms.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Lëtzebuerger Online Dictionnaire (LOD, https://lod.lu)
- Zenter fir d'Lëtzebuerger Sprooch (ZLS)
