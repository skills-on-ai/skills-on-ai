---
name: open-document-graphics
description: Use when asked about OpenDocument Graphics (`.odg`) files — the ISO/IEC 26300 ZIP+XML vector-drawing format, its multi-page/multi-layer document model, or how it differs from a single-image format like SVG — as distinct from sibling formats [[open-document-text]], [[open-document-spreadsheet]], [[open-document-presentation]].
---

# OpenDocument Graphics (ODG)

OpenDocument Graphics (**ODG**) is an open, vendor-neutral vector
drawing file format, standardized internationally as **ISO/IEC 26300**
(based on the OASIS OpenDocument Format, ODF). It's the drawing member
of the OpenDocument family alongside [[open-document-text]],
[[open-document-spreadsheet]], [[open-document-presentation]],
[[open-document-formula]], and [[open-document-database]]. Unlike the
others, ODG has no single dominant proprietary counterpart — it
overlaps loosely with Microsoft Visio's `.vsdx` (diagramming) and
Adobe Illustrator's `.ai` (vector art), without matching either
one-to-one.

## Package structure

Like every OpenDocument format, `.odg` is a ZIP archive of XML
sub-documents:

- **`mimetype`** — a plain-text file holding the string
  `application/vnd.oasis.opendocument.graphics`; it must be the
  *first* entry in the ZIP and stored **uncompressed**, so a reader
  can identify the format without inflating the whole archive.
- **`content.xml`** — the drawing's pages, shapes, and layers.
- **`styles.xml`** — graphic, presentation, and page styles shared
  across the drawing.
- **`meta.xml`** — metadata (author, creation/modification dates,
  editing statistics).
- **`settings.xml`** — application-specific state (current view, zoom,
  grid/snap settings).
- **`META-INF/manifest.xml`** — an index of every file in the package
  and its media type, plus encryption metadata if the file is
  password-protected.

## Content model

Inside `content.xml`, an `<office:drawing>` root holds one or more
`<draw:page>` elements — ODG documents are inherently **multi-page**
and support **layers** (`<draw:layer>`), unlike a single-image format.
Each page contains vector shapes: `<draw:rect>`, `<draw:ellipse>`,
`<draw:path>` (arbitrary vector paths), and `<draw:connector>`
(connector lines that stay attached to the shapes they link — the
building block for flowcharts and diagrams), plus text boxes and
grouped objects (`<draw:g>`).

## Template variant

`.otg` (OpenDocument Graphics **T**emplate,
`application/vnd.oasis.opendocument.graphics-template`) is the same
package structure flagged as a template — opening one starts a new,
unsaved drawing pre-loaded with its styles and layout rather than
editing the template file itself.

## Software compatibility

| Category | Software |
| --- | --- |
| Native/open-source | LibreOffice Draw (its default format), Apache OpenOffice Draw |
| Cloud-based | None with full native support — Google Workspace has no direct drawing-app equivalent for `.odg` the way Slides/Docs/Sheets cover `.odp`/`.odt`/`.ods` |
| Commercial | No mainstream commercial app opens `.odg` natively the way PowerPoint/Word/Excel open their ODF counterparts; interoperability with Visio or Illustrator goes through export/import conversion, not direct format support |

## ODG vs. SVG

Both are XML-based vector formats, but they solve different problems:
SVG describes a *single* image (one canvas, no built-in concept of
"pages"), while ODG is a full document package — multiple pages,
layers, embedded metadata, and a styles/content separation — closer in
spirit to a drawing *application's* native file than to an
image-interchange format. Exporting an ODG page to SVG collapses that
document structure down to one flat image.

## Common pitfalls

- **Treating ODG as a single-image format** — assuming one page/one
  canvas, when ODG documents routinely hold multiple pages and layers
  that a naive conversion (e.g. to SVG or PNG) will flatten or drop.
- **Expecting Visio-level diagram fidelity** — `.vsdx` diagrams
  (especially ones with Visio-specific shape data, stencils, or
  data-linked shapes) don't have a lossless path through `.odg`; expect
  visual-only fidelity, not a full semantic round-trip.
- **No cloud-native equivalent** — unlike the odt/ods/odp trio, there's
  no direct browser-based tool most teams already have that opens
  `.odg` natively, which can strand a drawing when only Google
  Workspace or web-only tools are available.

## Learn more

- [ISO/IEC 26300](https://www.iso.org/standard/66363.html) — the international standard defining OpenDocument Format.
- [OASIS OpenDocument Format](https://www.oasis-open.org/standard/opendocumentv1-3/) — the underlying OASIS specification ODG implements.
- [[open-document-text]], [[open-document-spreadsheet]], [[open-document-presentation]], [[open-document-formula]], [[open-document-database]] for the other members of the OpenDocument family.
