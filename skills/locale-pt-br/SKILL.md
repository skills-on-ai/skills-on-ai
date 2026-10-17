---
name: locale-pt-br
description: Use when working with the Portuguese (Brazil) locale (`pt-BR`) — its endonym Português (O Brasil), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Portuguese (Brazil) (pt-BR)

Reference data for the **Portuguese (Brazil)** locale — endonym **Português (O Brasil)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pt-BR`
- **ISO 639-1:** `pt`
- **ISO 639-3:** `por`
- **Script:** Latn (Latin)
- **Region:** BR (Brazil)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 203,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 206,000,000

## Base locale

This is a regional variant of [[locale-pt-001]] (Portuguese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0..1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-pt-001]] with Brazilian conventions.

- **Address:** "você" is the singular informal and neutral form with third-person verbs ("Você pode salvar"); "tu" appears regionally (south and northeast) and is not standard in product text. Use "o senhor / a senhora" for formal text in some sectors. Plural is "vocês".
- **Vocabulary:** "arquivo", "tela", "mouse", "celular", "ônibus", "café da manhã", "time" (team), "usuário", "senha" (password), "baixar" (download), "e-mail", "aplicativo" ("app"). Use "R$" before the amount: "R$ 12,50".
- **Grammar:** the gerund progressive ("estou fazendo"), proclisis ("me liga"), and the loss of the second person verb forms.
- **Spelling:** AO90 has been mandatory since 2016 (no trema in "frequência", "ideia" without accent, "voo" without the circumflex, revised hyphen rules); verify doubtful words in the VOLP (Vocabulário Ortográfico da Língua Portuguesa).
- **Formats:** decimal comma, period for thousands ("1.234,56"), day/month/year, 24-hour clock in daily use, "17 de outubro de 2026".
- **Tone:** warmer and more conversational than European Portuguese; politeness formulas like "por favor" and "obrigado/obrigada" are usual.

## Common pitfalls

- Using European vocabulary ("ficheiro", "ecrã", "rato", "telemóvel", "autocarro").
- Using "tu" with third-person verbs, or "estou a fazer".
- Using enclitic pronouns in casual UI text ("diz-me") where Brazilian readers expect "me diz".
- The general pitfalls in [[locale-pt-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academia Brasileira de Letras, Vocabulário Ortográfico da Língua Portuguesa (https://www.academia.org.br)
- Microsoft Localization Style Guide, Portuguese (Brazil) (https://aka.ms/portuguese-brazil-styleguide)
