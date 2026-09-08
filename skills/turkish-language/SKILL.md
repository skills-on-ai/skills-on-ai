---
name: turkish-language
description: Use when asked to write, translate into, or check text in Turkish — a Latin-script agglutinative language with vowel harmony, a dotted/dotless I distinction that breaks naive text processing, and a formal/informal second person (siz/sen) split; official in Turkey and Cyprus, spoken natively by roughly 80 million people.
---

# Turkish Language

Turkish (Türkçe) is a Turkic language written in a Latin-based
alphabet. It is the official language of Turkey and one of the
official languages of Cyprus, and is spoken as a minority or heritage
language in several nearby countries and diaspora communities.

## Writing system

Turkish uses a Latin-based alphabet with several letters not found in
English: ç, ğ, ı, ö, ş, ü. The most important detail for text
processing is that Turkish has two distinct pairs of I/i letters: the
dotted İ/i and the dotless I/ı are genuinely different letters with
different sounds, not a capitalization variant of a single English-style
I/i pair. Dotted i uppercases to İ, and dotless ı uppercases to I —
software that assumes the standard English I/i case-folding rule (where
"i".toUpperCase() == "I") will silently corrupt Turkish text, mangling
words, breaking case-insensitive comparisons, and producing wrong
sorting and search results. This is a well-known, recurring source of
bugs (sometimes called "the Turkish I problem") in software that
doesn't use locale-aware case conversion.

## Agglutinative morphology

Turkish is strongly agglutinative: grammatical meaning (case,
possession, plurality, tense, negation, question marking, and more) is
built by stacking a sequence of suffixes onto a word stem, each suffix
contributing one clear piece of meaning. This produces long words that
correspond to entire phrases or clauses in English — a frequently cited
example is "Çekoslovakyalılaştıramadıklarımızdanmışsınız" (roughly,
"you are apparently one of those we could not turn into a
Czechoslovakian"), an extreme but real illustration of how much a
single word can carry. Translating into Turkish often means collapsing
an English phrase into one long word rather than a sequence of
separate words, and word-by-word alignment with English breaks down.

## Vowel harmony

Suffix vowels change to match qualities of the vowel that precedes
them, following consistent, rule-governed patterns rather than being
arbitrary or memorized case by case. Turkish vowels split along two
main axes — front/back and rounded/unrounded — and most suffixes have
multiple forms (typically two or four variants) selected automatically
based on the last vowel of the stem they attach to. For example, the
plural suffix appears as -lar or -ler depending on the preceding
vowel. Getting harmony wrong produces a suffix form that sounds and
reads as clearly foreign or broken to a native speaker, even when the
grammatical category chosen is otherwise correct.

## Formality: siz vs. sen

Turkish marks formality through the second-person pronoun: sen is
informal/singular, used with family, friends, children, and peers; siz
is used both as the formal singular (addressing a stranger, elder, or
superior respectfully) and as the standard plural "you" regardless of
formality. As with Russian's вы and similar systems, siz's dual role
means context determines whether a formal-singular or a plural reading
is meant. The choice also determines verb suffix forms, not just the
pronoun. Defaulting to siz is the safer choice when addressing someone
unfamiliar or in a professional context.

## Common pitfalls

- Applying English-style case folding to i/I, corrupting dotless ı/I
  and dotted i/İ — use locale-aware (Turkish-specific) case conversion
  in any code that processes Turkish text.
- Getting vowel harmony wrong when generating or editing suffixed
  forms, especially in text produced by naive rule-based or templated
  generation rather than by a fluent speaker.
- Translating word-for-word from English phrase structure instead of
  collapsing meaning into Turkish's characteristic long, suffixed
  words.
- Defaulting to sen in a formal or unfamiliar context where siz is
  expected, or missing that siz addressed to one person still takes
  the same form as siz addressed to several.
- Missing the extra Latin letters (ç, ğ, ı, ö, ş, ü) in fonts, sorting
  routines, or input validation that were built assuming a plain
  26-letter English alphabet.

## Learn more

- [[cross-cultural-communication]] for formality and register considerations beyond grammar.
- [[locale]] for the Turkish-specific locale case-folding behavior referenced above, and other regional formatting conventions.
- [[german-language]] for a contrasting European Latin-script language with a case system rather than agglutination.
