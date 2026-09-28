---
name: open-document-text
description: Use when asked about OpenDocument Text (`.odt`) files — the ISO/IEC 26300 ZIP+XML word-processing format, its package structure, or conversion to/from `.docx` — as distinct from [[microsoft-word]]'s proprietary format, [[google-docs]] (a tool that can import/export ODT, not the format itself), and sibling formats [[open-document-spreadsheet]], [[open-document-presentation]], [[open-document-graphics]].
---

# OpenDocument Text (ODT)

OpenDocument Text (**ODT**) is an open, vendor-neutral word-processing
file format, standardized internationally as **ISO/IEC 26300** (based
on the OASIS OpenDocument Format, ODF). It's the text-document member
of the OpenDocument family alongside [[open-document-spreadsheet]],
[[open-document-presentation]], [[open-document-graphics]],
[[open-document-formula]], and [[open-document-database]] — and it
exists as a royalty-free, standards-based alternative to Microsoft's
proprietary `.docx`.

## Package structure

Like every OpenDocument format, `.odt` is a ZIP archive of XML
sub-documents, not one monolithic file:

- **`mimetype`** — a plain-text file holding the string
  `application/vnd.oasis.opendocument.text`; it must be the *first*
  entry in the ZIP and stored **uncompressed**, so a reader can
  identify the format without inflating the whole archive.
- **`content.xml`** — the document's actual text and structure.
- **`styles.xml`** — paragraph, character, list, and page styles
  shared across the document, kept separate from content so a single
  style change updates every use of it at once.
- **`meta.xml`** — metadata (author, creation/modification dates,
  editing statistics).
- **`settings.xml`** — application-specific state (current view, print
  settings) that isn't part of the document's actual content.
- **`META-INF/manifest.xml`** — an index of every file in the package
  and its media type, plus encryption metadata if the file is
  password-protected.

## Content model

Inside `content.xml`, an `<office:text>` root element holds the
document body as a sequence of `<text:p>` (paragraph) and `<text:h>`
(heading) elements, each referencing a named style defined in
`styles.xml` — the same styles-over-direct-formatting model
[[microsoft-word]] uses, just expressed as an open XML vocabulary
instead of a proprietary binary or OOXML one.

## Template variant

`.ott` (OpenDocument Text **T**emplate,
`application/vnd.oasis.opendocument.text-template`) is the same
package structure flagged as a template rather than a document —
opening one starts a new, unsaved document pre-loaded with its styles,
margins, and boilerplate, rather than editing the template file
itself.

## Software compatibility

| Category | Software |
| --- | --- |
| Native/open-source | LibreOffice Writer (its default format), Apache OpenOffice Writer |
| Cloud-based | [[google-docs]] (imports and exports `.odt`) |
| Commercial | [[microsoft-word]] (Microsoft 365 can open, edit, and save directly to `.odt`) |

## Common pitfalls

- **Assuming perfect `.docx` round-trip fidelity** — track changes,
  complex tables, and custom fields can shift or lose formatting when
  converting between `.odt` and `.docx`, especially with
  vendor-specific features neither format's spec covers identically.
- **Manually formatting text instead of using styles** — the same
  pitfall as [[microsoft-word]]: direct formatting applied
  instance-by-instance makes global restyling and consistent structure
  much harder to maintain, regardless of which format the file is
  saved as.
- **Macro portability** — LibreOffice Basic macros embedded in an
  `.odt` file don't run in Word, and VBA macros in a `.docx` don't run
  in LibreOffice; macros are not part of what round-trips cleanly
  between the two ecosystems.

## Learn more

- [ISO/IEC 26300](https://www.iso.org/standard/66363.html) — the international standard defining OpenDocument Format.
- [OASIS OpenDocument Format](https://www.oasis-open.org/standard/opendocumentv1-3/) — the underlying OASIS specification ODT implements.
- [[microsoft-word]] for the closest proprietary equivalent, `.docx`.
- [[google-docs]] for a cloud-based tool that natively imports/exports `.odt`.
- [[open-document-spreadsheet]], [[open-document-presentation]], [[open-document-graphics]], [[open-document-formula]], [[open-document-database]] for the other members of the OpenDocument family.
