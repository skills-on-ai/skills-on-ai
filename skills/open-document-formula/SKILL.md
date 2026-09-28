---
name: open-document-formula
description: Use when asked about OpenDocument Formula (`.odf`) files — the ISO/IEC 26300 ZIP+XML mathematical-equation format built on MathML, or its conversion to/from Word's equation editor — as distinct from "ODF" the umbrella acronym for the whole OpenDocument Format family, and from sibling formats [[open-document-text]], [[open-document-spreadsheet]], [[open-document-presentation]].
---

# OpenDocument Formula (ODF)

OpenDocument Formula (also written **`.odf`**) is an open,
vendor-neutral file format for mathematical equations, standardized as
part of **ISO/IEC 26300** (the OASIS OpenDocument Format). It's the
formula/equation member of the OpenDocument family alongside
[[open-document-text]], [[open-document-spreadsheet]],
[[open-document-presentation]], [[open-document-graphics]], and
[[open-document-database]].

**Naming note:** "ODF" is also the umbrella acronym for the entire
OpenDocument Format standard (the family this skill's sibling formats
all belong to) — most mentions of "ODF" in the wild refer to that
broader standard, not specifically to the `.odf` formula-document
extension. Context disambiguates; this skill covers the file
extension.

## Package structure

Like every OpenDocument format, an `.odf` file is a ZIP archive of XML
sub-documents:

- **`mimetype`** — a plain-text file holding the string
  `application/vnd.oasis.opendocument.formula`; it must be the *first*
  entry in the ZIP and stored **uncompressed**, so a reader can
  identify the format without inflating the whole archive.
- **`content.xml`** — the actual equation content.
- **`meta.xml`** — metadata (author, creation/modification dates).
- **`settings.xml`** — application-specific state.
- **`META-INF/manifest.xml`** — an index of every file in the package
  and its media type.

## Content model

Inside `content.xml`, the equation itself is expressed as
**MathML** — the W3C standard for marking up mathematical notation —
rather than a proprietary equation format. This is the format's most
distinctive design choice: it defers to an existing open standard for
math markup instead of defining its own.

## How it's typically used

Unlike `.odt`/`.ods`/`.odp`, a standalone `.odf` file is relatively
uncommon in practice — equations are more often created as *embedded
objects* inside an [[open-document-text]] or [[open-document-presentation]]
document (via LibreOffice/OpenOffice Math) than saved and shared as
their own top-level file.

## Software compatibility

| Category | Software |
| --- | --- |
| Native/open-source | LibreOffice Math, Apache OpenOffice Math |
| Cloud-based | No direct equivalent — Google Workspace's equation editors (in Docs/Slides) don't import or export `.odf` |
| Commercial | Microsoft's Office Math (Word/PowerPoint's built-in equation editor) doesn't natively open `.odf`; interoperability goes through copy/paste or manual re-entry, not direct format support |

## Common pitfalls

- **Confusing the acronym with the extension** — "ODF" almost always
  means the whole OpenDocument Format standard in conversation; only
  the literal `.odf` file extension refers to this specific
  formula/equation format.
- **Expecting lossless conversion to Word equations** — Word's
  equation editor uses **OMML** (Office Math Markup Language), a
  different XML math vocabulary from MathML; equations typically
  translate visually but aren't a byte-identical round-trip between
  the two.
- **Treating it as a common standalone file type** — most real-world
  math content lives embedded inside a larger odt/ods/odp document,
  not as an independently shared `.odf` file.

## Learn more

- [ISO/IEC 26300](https://www.iso.org/standard/66363.html) — the international standard defining OpenDocument Format.
- [MathML](https://www.w3.org/Math/) — the W3C math-markup standard ODF formula content is built on.
- [[open-document-text]], [[open-document-spreadsheet]], [[open-document-presentation]], [[open-document-graphics]], [[open-document-database]] for the other members of the OpenDocument family.
