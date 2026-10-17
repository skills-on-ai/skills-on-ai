---
name: locale-es-001
description: Use when working with the Spanish locale (`es-001`) — its endonym Español, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (es-001)

Reference data for the **Spanish** locale — endonym **Español**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-001`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 519,000,000
- **L2 (additional):** 117,000,000
- **L1+L2 (total):** 636,000,000

## Regional variants

This is the base/macro locale for Spanish. Region-specific variants in this dataset:

- [[locale-es-419]] (Spanish (Latin America))
- [[locale-es-ar]] (Spanish (Argentina))
- [[locale-es-bo]] (Spanish (Bolivia))
- [[locale-es-cl]] (Spanish (Chile))
- [[locale-es-co]] (Spanish (Colombia))
- [[locale-es-cr]] (Spanish (Costa Rica))
- [[locale-es-do]] (Spanish (Dominican Republic))
- [[locale-es-ec]] (Spanish (Ecuador))
- [[locale-es-es]] (Spanish (Spain))
- [[locale-es-gt]] (Spanish (Guatemala))
- [[locale-es-hn]] (Spanish (Honduras))
- [[locale-es-mx]] (Spanish (Mexico))
- [[locale-es-ni]] (Spanish (Nicaragua))
- [[locale-es-pa]] (Spanish (Panama))
- [[locale-es-pe]] (Spanish (Peru))
- [[locale-es-pr]] (Spanish (Puerto Rico))
- [[locale-es-py]] (Spanish (Paraguay))
- [[locale-es-sv]] (Spanish (El Salvador))
- [[locale-es-us]] (Spanish (United States))
- [[locale-es-uy]] (Spanish (Uruguay))
- [[locale-es-ve]] (Spanish (Venezuela))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Spanish is a pluricentric language with one shared written standard and real regional differences. `es-001` is the region-neutral standard; choose the target region before translating, and fall back to this neutral register only when the audience spans several countries (see [[locale-es-419]] for Latin America and [[locale-es-es]] for Spain).

**Translate ideas, not words.**

- English packs meaning into noun stacks and phrasal verbs; Spanish prefers a verb and a prepositional phrase. "User account settings page" becomes "Página de configuración de la cuenta de usuario", with the head noun first and each "de" making the relation explicit.
- Spanish text is usually longer than the English source; leave room in the UI and prefer short, direct verbs.
- Re-express idioms instead of translating them: "it's a piece of cake" becomes "es pan comido" or "es facilísimo", and "to kill two birds with one stone" becomes "matar dos pájaros de un tiro" (this one survives intact).
- English tends toward sentences that front the subject. Spanish often drops the subject pronoun ("Guardamos tus cambios", not "Nosotros guardamos tus cambios") and may move the new information to the end of the clause.

**Grammar that trips translators.**

- Gender and number agreement across article, noun, and adjective; "el agua fría" is feminine despite the masculine article. A feminine noun beginning with stressed "a" takes "el" in the singular only.
- Ser versus estar, the subjunctive after wishes, doubt, and "para que" ("Para que puedas continuar, inicia sesión"), and the preterite versus imperfect.
- Prepositions rarely map one to one: "depend on" is "depender de", "consist of" is "consistir en", "think about" is "pensar en".
- The personal "a" before human direct objects ("Invita a tus amigos").
- Clitic placement: attached to infinitives, gerunds, and affirmative commands ("Guárdalo"), before conjugated verbs ("Lo guardamos").

**Register.**

- Address is the biggest decision. Most Latin American and US products use informal "tú" for consumer apps (or the regional "vos" where relevant), and "usted" for banking, government, medical, and legal text. Spain uses "tú" in consumer products and "vosotros" for the plural, whereas Latin America uses "ustedes" for the plural everywhere.
- UI commands are normally the imperative in the "tú" form ("Guarda", "Selecciona"), or the infinitive for buttons and menu items ("Guardar", "Seleccionar"). Pick one convention and apply it consistently.
- Business writing is polite and warm, with fuller courtesy phrases than English ("le agradeceríamos que...", "quedamos a su disposición").

**Orthography and typography.**

- Follow the RAE orthography: accents on stress marks, no accent on "guion", "truhan", or the demonstrative pronouns "este" and "ese" (the RAE dropped the accent on them), and lowercase days, months, languages, and nationalities.
- Opening and closing question and exclamation marks: `¿Cómo estás?` and `¡Bienvenido!`.
- Quotation marks: guillemets `«…»` are the RAE-preferred first level, with `"…"` and `'…'` nested. In practice many Latin American and software sources use straight or curly English quotes; follow the project's existing choice.
- Numbers use a decimal comma and a period or thin space as the thousands separator in Spain and much of South America, but a decimal point and comma separator in Mexico, the US, and most of Central America. Check CLDR for each region.
- Dates run day-month-year ("17 de octubre de 2026"); the currency symbol position and the percent sign spacing vary by region.
- Inclusive language: the RAE accepts the masculine as the generic form and rejects "@", "x", and "e" endings as written standards ("todes"). Prefer neutral wording ("las personas usuarias", "quien", "toda la plantilla") when you must avoid a gendered plural.

**Choosing a region.** Pick the vocabulary of the target audience: "ordenador" versus "computadora" versus "computador", "móvil" versus "celular", "coche" versus "carro" versus "auto", "zumo" versus "jugo". See the regional variants listed in the Regional variants section above.

## Common pitfalls

- Copying English word order and the passive voice ("The file was deleted by the system" becomes "El sistema eliminó el archivo" or "Se eliminó el archivo").
- Capitalizing every word of a title or button the English way; Spanish capitalizes only the first word and proper nouns ("Configuración de la cuenta").
- Using the gerund as an English "-ing" noun or modifier ("una caja conteniendo ropa" instead of "una caja que contiene ropa").
- Mixing tú, usted, and vosotros or ustedes inside one product; pick one address form per audience and keep it everywhere.
- Translating false friends literally: "actualmente" is "currently", not "actually"; "eventualmente" is "possibly", not "eventually"; "librería" is a bookshop; "realizar" is "to carry out", not "to realize".
- Dropping the inverted marks (`¿` and `¡`) or the accents, which change meaning ("si" and "sí", "el" and "él", "te" and "té").
- Forgetting that nouns, adjectives, and articles must agree in gender and number after a string is inserted into a placeholder; avoid building sentences from fragments.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Microsoft Localization Style Guides, Spanish editions (https://aka.ms/spanish-neutral-styleguide, https://aka.ms/spanish-spain-styleguide, https://aka.ms/spanish-mexico-styleguide, https://aka.ms/spanish-us-styleguide)
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
