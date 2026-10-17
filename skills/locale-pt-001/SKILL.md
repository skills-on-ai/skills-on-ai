---
name: locale-pt-001
description: Use when working with the Portuguese locale (`pt-001`) — its endonym Português, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Portuguese (pt-001)

Reference data for the **Portuguese** locale — endonym **Português**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pt-001`
- **ISO 639-1:** `pt`
- **ISO 639-3:** `por`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 230,000,000
- **L2 (additional):** 30,000,000
- **L1+L2 (total):** 260,000,000

## Regional variants

This is the base/macro locale for Portuguese. Region-specific variants in this dataset:

- [[locale-pt-br]] (Portuguese (Brazil))
- [[locale-pt-pt]] (Portuguese (Portugal))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0..1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Portuguese has two principal written norms, European (Portugal) and Brazilian, with a shared 1990 Orthographic Agreement (AO90) and several vocabulary and grammar differences. Choose the target country first. See [[locale-pt-br]] and [[locale-pt-pt]]; use this locale only for pan-lusophone content.

**Translate ideas, not words.**

- Portuguese favors verbs and full clauses over English noun stacks: "user account settings" is "definições da conta de utilizador" (PT) or "configurações da conta do usuário" (BR).
- The English passive often becomes the reflexive passive: "Vendem-se casas", "O ficheiro foi eliminado".
- Idioms must be re-expressed: "it's a piece of cake" is "é canja" (PT) or "é moleza" (BR).
- Subject pronouns are usually dropped; use the verb ending.
- Portuguese text tends to run longer than English.

**Grammar that trips translators.**

- Gender and number agreement; contractions of prepositions and articles (do, da, no, na, pelo, pela, num, numa).
- The personal infinitive ("Para eles saberem"), the future subjunctive ("Quando você fizer"), and subjunctive use.
- Tu vs você vs o senhor/a senhora: see the regional skills for the main difference.
- Clitic placement: enclisis ("diz-me") in European Portuguese; proclisis ("me diz") is typical in Brazil.
- Progressive: "estou a fazer" (PT) vs "estou fazendo" (BR).

**Register.**

- Formality is carried by the choice of second-person form and titles; see the regional skills for tu, você, and the formal "o senhor / a senhora". In UI, imperative ("Guarde", "Guardar") or infinitive are both used; choose one.

**Orthography and typography.**

- AO90 removed silent consonants (Portuguese "acção" became "ação", "óptimo" became "ótimo"); where the consonant is pronounced it stays ("facto" in Portugal, "fato" in Brazil). It is in force in Brazil and Portugal but still debated; verify doubtful words in the VOLP or a current dictionary.
- Accents are essential (á, â, ã, é, ê, í, ó, ô, õ, ú, ç); the hyphen rules were also reformed.
- Lowercase months, days of the week, and languages; sentence case for titles.
- Numbers: decimal comma, period or space for thousands; dates "17 de outubro de 2026".

## Common pitfalls

- Using Brazilian vocabulary or grammar in European Portuguese text and the reverse.
- False friends: "pretender" is "to intend", "assistir" can mean "to watch", "esquisito" is "strange", "puxar" is "to pull", "atualmente" is "currently", "eventualmente" is "possibly".
- Mixing pre- and post-AO90 spellings.
- Using the wrong second-person form for the audience.
- Dropping accents.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Priberam Dicionário (https://dicionario.priberam.org) and Portal da Língua Portuguesa (https://www.portaldalinguaportuguesa.org)
- Microsoft Localization Style Guides, Portuguese (Brazil and Portugal) (https://aka.ms/portuguese-brazil-styleguide, https://aka.ms/portuguese-portugal-styleguide)
