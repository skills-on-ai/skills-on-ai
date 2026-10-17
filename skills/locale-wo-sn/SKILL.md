---
name: locale-wo-sn
description: Use when working with the Wolof (Senegal) locale (`wo-SN`) — its endonym Wolof (Senegaal), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Wolof (Senegal) (wo-SN)

Reference data for the **Wolof (Senegal)** locale — endonym **Wolof (Senegaal)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `wo-SN`
- **ISO 639-1:** `wo`
- **ISO 639-3:** `wol`
- **Script:** Latn (Latin)
- **Region:** SN (Senegal)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,500,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 10,500,000

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Wolof is a Niger-Congo language of Senegal, the Gambia, and Mauritania, the most widely spoken language of Senegal and its lingua franca. In Senegal it is written in the Latin script following the official orthography, and in the Arabic-based Wolofal (Ajami) script by many communities. French is the official language of Senegal. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Wolof does not have grammatical gender, and noun classes are reduced to determiners that show class (`b-`, `g-`, `j-`, `k-`, `l-`, `m-`, `s-`, `w-`): `kër gi` (the house), `xale bi` (the child). Choose the determiner that matches the noun.
- Wolof verbs are not conjugated for person; subject pronouns and focus markers carry the information (`Maa ngi`, `Dama`, `Dafa`). Restructure English sentences.
- Use Wolof terms where they exist; French loanwords are common in speech and in technical contexts. Prefer a standardized Wolof term if one is used by the Senegalese language authorities.
- Re-express idioms and proverbs by meaning.

**Register.**

- `Yaw` is "you" (singular) and `yéen` is the plural and respectful form. Greetings are essential and long (`Salaam aleekum`, `Nanga def?`, `Maa ngi fi`). Titles (`Boroom`, `Sëriñ`, `Mame`) show respect.

**Orthography and typography.**

- Use the Latin letters `ŋ`, `ñ`, `ë`, `é`, `ó`, `à` in the official orthography. Vowel length is written by doubling (`aa`, `ee`).
- Currency CFA franc (`F CFA`, `XOF`); dates in French or Wolof month names; decimal comma in Senegal (check CLDR).

## Common pitfalls

- Dropping special letters (`ŋ`, `ñ`, `ë`).
- Using the wrong determiner.
- Writing Wolof with French spelling.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Centre de linguistique appliquée de Dakar (CLAD)
- Senegalese official transcription of Wolof (Décret 71-566 and later texts)
