---
name: locale-peer-id
description: Use when asked to track corresponding translated content across locales with a locale peer id, to create or check `.locale-peer-id` files, or to set up a locales directory layout for translation. Distinct from [[locale]], which covers locale codes and locale-sensitive data in code, and from the per-locale skills such as [[locale-en-001]], which give guidance for one locale.
---

# Locale peer id

A locale peer id lets a project keep track of corresponding content across
many languages. Each content directory holds a `.locale-peer-id` file, and
every translation of that directory holds the identical id, whatever its
language, dialect, or directory name. The id is the link; names and paths can
be translated freely.

## Definition

- A locale peer id is a secure randomly-generated 32-character lowercase
  hexadecimal string, for example `b82232cff8e5bb785fbc855b65a83653`.
- It is created from a secure random source such as `/dev/urandom`.
- It is not a UUID. A UUID has fixed version and variant bits, so even a
  version 4 UUID is not entirely random, and the UUID specification does not
  require a secure random generator.
- The `.locale-peer-id` file contains the id followed by one newline.

## Input required

- The project's locales directory, such as `locales/`.
- The content directory to translate, or the translation to check.
- The source and target locale codes (BCP 47), such as `en-us` and `zh-cn`.
- The slug format the project uses for directory names.

## Questions to ask first

Ask these in one batch, and skip any the user has already answered:

1. Which content directory is being added, translated, or checked?
2. Which source and target locales are involved?
3. Does the project already use `.locale-peer-id` files, and where?
4. What slug format do directory names use?
5. Should the work include scripts, or only the file layout?

## Directory layout

Name each locale subdirectory with a standard locale code, and translate the
content subdirectory names into the locale's language, using a slug format
that is friendly for reading, copying, pasting, typing, browsing, and
searching:

```txt
locales/
  en-us/
    hello-world/
      .locale-peer-id    b82232cff8e5bb785fbc855b65a83653 then newline
      index.html         English, United States dialect
  zh-cn/
    你好-世界/
      .locale-peer-id    b82232cff8e5bb785fbc855b65a83653 then newline
      index.html         Chinese, China mainland dialect
```

A region number can replace a region letter code. `*-001` means World and
`*-150` means Europe, so `en-001` is English for the world and `en-150` is
English for Europe. Prefer a specific locale such as `es-es` or `es-001` over
a bare language such as `es`.

## Method

1. **Find the source directory** and read its `.locale-peer-id`. If it has
   none, generate one and write it, so the source can be tracked.
2. **Generate an id when needed.** From a shell:

   ```sh
   printf "%s\n" $(LC_ALL=C < /dev/urandom tr -dc '0-9a-f' | head -c32)
   ```

3. **Create the target directory** under the target locale, named by
   translating the source directory name into a slug in the target language.
4. **Copy the same id** into the target directory's `.locale-peer-id`, with a
   trailing newline. Never generate a new id for a translation.
5. **Translate the content** into the target locale's language and dialect.
6. **Find all translations of a directory** by searching for its id:

   ```sh
   grep -r --include .locale-peer-id b82232cff8e5bb785fbc855b65a83653 locales
   ```

7. **Check consistency.** Every `.locale-peer-id` must contain exactly 32
   lowercase hexadecimal characters and a newline. Each id should appear at
   most once per locale. Report directories that lack the file, and ids that
   exist in only one locale.

## Output format

Give the answer as:

1. The id used, and whether it was reused or newly generated.
2. The directory paths created or checked, one per line.
3. The content of each `.locale-peer-id` file.
4. Any inconsistencies found, with the fix for each.

## Ground rules

- A translation must reuse the source directory's id exactly.
- Generate ids from a secure random source, never by hand, by hashing a name,
  or by copying an example.
- Do not reuse the example id in this skill for real content.
- Keep the file name exactly `.locale-peer-id`, with a leading dot.
- Translate directory names, but never the id.

## Self-check before answering

- Is the id 32 characters, lowercase hexadecimal, followed by a newline?
- Is the id identical across every translation of the directory?
- Is each locale directory named with a valid locale code?
- Were directory names translated and kept in the project's slug format?

## Common pitfalls

- Generating a fresh id for each translation, which breaks tracking.
- Using a UUID, which has hyphens and fixed bits.
- Uppercase hexadecimal, or a missing trailing newline.
- Putting the id in one file per locale instead of one `.locale-peer-id` per
  directory.
- Using a bare language code when a region such as `-001` is intended.
- Renaming a directory and losing the file that links it to its peers.

## Example prompt

> Add a French translation of `locales/en-001/getting-started/`. Reuse its
> locale peer id, name the directory in French, and tell me which other
> locales already have this id.

## Learn more

- Locale help, with the locale peer id tools `locale-peer-id` and
  `grep-locale-peer-id`: <https://github.com/sixarm/locale-help>
- BCP 47 language tags:
  <https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag>
- ISO 639-1 codes: <https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes>
