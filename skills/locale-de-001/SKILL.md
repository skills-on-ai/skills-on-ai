---
name: locale-de-001
description: Use when working with the German locale (`de-001`) — its endonym Deutsch, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: German (de-001)

Reference data for the **German** locale — endonym **Deutsch**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `de-001`
- **ISO 639-1:** `de`
- **ISO 639-3:** `deu`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 95,000,000
- **L2 (additional):** 80,000,000
- **L1+L2 (total):** 175,000,000

## Regional variants

This is the base/macro locale for German. Region-specific variants in this dataset:

- [[locale-de-at]] (German (Austria))
- [[locale-de-ch]] (German (Switzerland))
- [[locale-de-de]] (German (Germany))
- [[locale-de-li]] (German (Liechtenstein))
- [[locale-de-lu]] (German (Luxembourg))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

German has one written standard (Hochdeutsch) with national variants in Germany, Austria, Switzerland, Liechtenstein, and Luxembourg. Choose the target country before translating, and use this locale only for pan-German content. See [[locale-de-de]], [[locale-de-at]], [[locale-de-ch]], [[locale-de-li]], and [[locale-de-lu]].

**Translate ideas, not words.**

- German builds long compound nouns and verb-final subordinate clauses, where English uses short phrases and prepositions. Restructure instead of translating word by word: "user account settings" becomes "Einstellungen für das Benutzerkonto" or "Kontoeinstellungen".
- English noun chains and verb-plus-particle pairs need a precise German verb: "to log in" is "sich anmelden", "to sign out" is "sich abmelden".
- Avoid Nominalstil (heavy abstract nouns) when a verb works: "eine Überprüfung durchführen" becomes "prüfen".
- Re-express idioms by meaning: "it's a piece of cake" is "das ist ein Kinderspiel"; "to kill two birds with one stone" is "zwei Fliegen mit einer Klappe schlagen".
- German text is typically longer than English; leave room in the UI and prefer compact verbs.
- Avoid the common anglicism "Sinn machen" (make sense); write "Sinn ergeben" or "sinnvoll sein".

**Grammar that trips translators.**

- Three genders (der, die, das) and four cases (nominative, accusative, dative, genitive); prepositions govern a case ("mit dem", "für den"). Loanwords need a gender decision ("die E-Mail", "das Update", "die App").
- Verb position: the conjugated verb is second in main clauses and last in subordinate clauses; separable verbs split ("Wir laden die Datei hoch").
- Adjective endings depend on article, gender, case, and number ("ein neuer Benutzer", "der neue Benutzer").
- Plural forms are irregular; check a dictionary ("Datei, Dateien"; "Benutzer" is unchanged).
- Tense: use the Perfekt for spoken-style text and the Präteritum in formal writing; the Konjunktiv II is used for politeness and reported speech.

**Register.**

- "Sie" (formal) versus "du" (informal) is the biggest decision. "Sie" is the default for business, banking, public bodies, legal, and enterprise software. "Du" is common in consumer apps, games, startups, and youth brands, and in many countries' tech and retail. Do not mix them in one product.
- Capitalize "Sie", "Ihnen", and "Ihr" (formal). "Du" and "dein" are lowercase in current spelling, except in letters where capitalization is optional.
- UI commands use the imperative ("Speichern Sie"; with "du": "Speichere") or the infinitive ("Speichern"); infinitive is the usual form for buttons and menu items.
- German business writing is more formal and structured than English: letters open with "Sehr geehrte Damen und Herren" and close with "Mit freundlichen Grüßen".

**Orthography and typography.**

- Capitalize all nouns, nominalized verbs and adjectives ("das Speichern"), and the formal pronoun; titles use sentence case.
- Compounds are written as one word, but use a hyphen to join an English or abbreviated part ("E-Mail-Adresse", "Cloud-Speicher", "USB-Anschluss").
- Quotation marks: `„…“` and `‚…‘` in Germany and Austria; `»…«` in some publications; `«…»` in Switzerland.
- Numbers: decimal comma, period or (narrow) space for thousands ("1.234,56"); currency after the amount with a non-breaking space ("12,50 €"); dates "17. Oktober 2026" or "17.10.2026"; 24-hour clock ("17:30 Uhr"); percent with a space ("10 %").
- Gender-inclusive writing is contested: the Rat für deutsche Rechtschreibung (Council for German Orthography) does not include the gender star (`Benutzer*innen`), colon, or underscore in the official spelling. Prefer neutral wording ("Nutzende", "die Nutzerschaft", "alle, die ...") or the double form ("Nutzerinnen und Nutzer") unless the client mandates a form.

## Common pitfalls

- Word-by-word translation that keeps English word order and the passive.
- Writing split compounds ("Benutzer Konto") or hyphenating too much.
- Mixing "Sie" and "du", or using "Sie" lowercased.
- False friends: "aktuell" is "current" (not "actual"), "eventuell" is "possibly", "Gift" is poison, "bekommen" is "to receive", "sensibel" is sensitive, "Handy" is a mobile phone.
- Using English quotation marks, decimal points, or month/day/year dates.
- Wrong gender or case for placeholders; see [[unicode-messageformat]] for plural categories.
- Overlong UI strings that do not fit.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Duden (https://www.duden.de) and Rat für deutsche Rechtschreibung, Amtliches Regelwerk (https://www.rechtschreibrat.com)
- Microsoft Localization Style Guide, German (https://aka.ms/german-styleguide)
