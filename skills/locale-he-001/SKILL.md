---
name: locale-he-001
description: Use when working with the Hebrew locale (`he-001`) — its endonym עברית, Hebrew script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hebrew (he-001)

Reference data for the **Hebrew** locale — endonym **עברית**, written in the Hebrew script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `he-001`
- **ISO 639-1:** `he`
- **ISO 639-3:** `heb`
- **Script:** Hebr (Hebrew)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 6,500,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 10,500,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Hebrew. Region-specific variants in this dataset:

- [[locale-he-il]] (Hebrew (Israel))

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `i = 1 and v = 0 or i = 0 and v != 0` (e.g. 1)
- **two** — `i = 2 and v = 0` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Hebrew is a Semitic language written from right to left in the Hebrew alphabet, usually without vowel points. The Academy of the Hebrew Language (האקדמיה ללשון העברית) sets the norm and approves new terms. See [[locale-he-il]].

**Translate ideas, not words.**

- Hebrew builds words from three-consonant roots and verb patterns; prefer a natural verb to an English noun phrase. Reorder English sentences, and keep them short; Hebrew business text is direct.
- Hebrew has no verb "to have"; possession uses `יש ל‑` (`יש לי קובץ`). The present tense of "to be" is omitted (`הקובץ גדול`).
- Use approved Hebrew terms where readers know them, and loanwords where they are standard (`קובץ` file, `סיסמה` password, `אפליקציה` app).
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Gender is everywhere: nouns, adjectives, verbs, and second-person pronouns have masculine and feminine forms. UI text commonly uses the masculine, or an inclusive form (`לחץ/י`, `בחר/י`) or the plural or an impersonal form to avoid it. Pick one policy for the product.
- Numerals agree in gender with the noun in the opposite way (`שלושה קבצים`, `שלוש תמונות`), and the counted noun has a plural form. Plural categories: one, two, and other. See [[unicode-messageformat]].
- Prefixes attach to words: `ה‑` (the), `ב‑` (in), `ל‑` (to), `מ‑` (from), `ש‑` (that), `ו‑` (and). With Latin names or numbers, add a hyphen: `ב‑Google`, `ל‑2026`.
- The definite article `ה` marks definiteness; adjectives repeat it (`הקובץ החדש`).

**Register.**

- Hebrew has no T-V distinction. Register comes from vocabulary and tone. Israeli business and product text is direct, informal, and short; excessive politeness sounds stiff.
- UI commands use the imperative (`שמור`, `שמרו` plural) or the infinitive (`לשמור`). Be consistent.

**Orthography and typography.**

- Standard text is unvocalized and uses the full spelling (ktiv male) with `ו` and `י` as vowel letters, as set by the Academy. Niqqud (vowel points) is used only in teaching, poetry, and liturgy.
- Quotation marks `"…"` or `„…”`; gershayim `"` marks acronyms (`צה"ל`) and gerash `'` marks abbreviations; maqaf `־` joins words in some constructions.
- Numbers: decimal point, comma for thousands (`1,234.56`); currency shekel `₪` (CLDR places the symbol after the number with a right-to-left mark); dates `17 באוקטובר 2026`; 24-hour clock; the week starts on Sunday and the weekend is Friday-Saturday.
- Right-to-left display requires attention to punctuation and numbers inside Latin text; use Unicode bidi controls where needed.

## Common pitfalls

- Mixing gendered forms or addressing all users as masculine without a policy.
- Wrong gender agreement between numerals and nouns.
- Forgetting the hyphen before Latin names and numerals.
- Breaking right-to-left display.
- Using decimal commas as in Europe.
- Translating English idioms literally.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academy of the Hebrew Language (https://hebrew-academy.org.il)
- Microsoft Localization Style Guide, Hebrew (https://aka.ms/hebrew-styleguide)
