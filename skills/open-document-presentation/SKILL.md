---
name: open-document-presentation
description: Use when asked about OpenDocument Presentation (`.odp`) files — the ISO/IEC 26300 ZIP+XML slide-deck format, its package structure, or conversion to/from `.pptx` — as distinct from [[microsoft-powerpoint]]'s proprietary format, [[google-slides]] (a tool that can import/export ODP, not the format itself), and sibling formats [[open-document-text]], [[open-document-spreadsheet]], [[open-document-graphics]].
---

# OpenDocument Presentation (ODP)

OpenDocument Presentation (**ODP**) is an open, vendor-neutral
slide-deck file format, standardized internationally as **ISO/IEC
26300** (based on the OASIS OpenDocument Format, ODF). It exists as
a royalty-free alternative to Microsoft's proprietary `.pptx`, and is
the presentation member of the OpenDocument family alongside
[[open-document-text]], [[open-document-spreadsheet]],
[[open-document-graphics]], [[open-document-formula]], and
[[open-document-database]].

## Package structure

An `.odp` file is a ZIP archive containing a set of XML sub-documents
rather than one monolithic file:

- **`mimetype`** — a plain-text file holding the string
  `application/vnd.oasis.opendocument.presentation`; per spec it must
  be the *first* entry in the ZIP and stored **uncompressed**, so a
  reader can identify the format without inflating the archive — the
  same trick EPUB borrows from ODF.
- **`content.xml`** — the actual slide content: text, shapes, and
  images, positioned per slide.
- **`styles.xml`** — styles and master-page (slide-master) definitions
  shared across the presentation, separated from content so the same
  visual design can be reused or swapped.
- **`meta.xml`** — document metadata (author, creation/modification
  dates, editing statistics).
- **`settings.xml`** — application-specific state (e.g. current view,
  print settings) that isn't part of the document's actual content.
- **`META-INF/manifest.xml`** — an index of every file in the package
  and its media type, plus encryption metadata if the file is
  password-protected.
- **`Thumbnails/thumbnail.png`** and a **`Pictures/`** (or similar)
  directory for the preview image and embedded media.

## Slide content model

Inside `content.xml`, an `<office:presentation>` element contains a
sequence of `<draw:page>` elements — one per slide — each holding
absolutely-positioned drawing shapes (text boxes, images, embedded
objects). Each `<draw:page>` references a `<style:master-page>` (from
`styles.xml`) that supplies the slide-master concept: background,
placeholder positions, and fonts inherited across every slide that
uses it, the same idea as PowerPoint's slide masters or Google
Slides' themes.

## Capabilities

Like `.pptx`, ODP supports rich text, images, embedded video and
audio, shapes, animations, and slide transitions — it's a
full-featured presentation format, not a stripped-down one.

## Software compatibility

| Category | Software |
| --- | --- |
| Native/open-source | LibreOffice Impress (its default format), Apache OpenOffice Impress, Calligra Stage |
| Cloud-based | [[google-slides]] (imports and exports `.odp`) |
| Commercial | [[microsoft-powerpoint]] (Microsoft 365 can open, edit, and save directly to `.odp`) |

## ODP vs. PPTX

Both are ZIP-compressed XML packages that work similarly under the
hood, but differ in:

- **Ownership and cost** — ODP is a freely implementable open
  standard with no licensing restrictions; historically, fully
  exercising every `.pptx` feature meant staying inside the
  Microsoft ecosystem or subscription.
- **Round-trip fidelity** — converting back and forth between `.pptx`
  and `.odp` can lose formatting, break animations, or shift layout
  when one file relies on a vendor-specific visual effect the other
  format doesn't model — the same class of risk as any lossy format
  conversion, not unique to ODP.

## Common pitfalls

- **Treating `.odp` and `.pptx` as perfectly interchangeable** —
  complex animations, custom fonts, and vendor-specific effects can
  shift or disappear on conversion; verify a converted deck visually
  rather than assuming byte-for-byte fidelity.
- **Editing the ZIP contents by hand without preserving the
  `mimetype` rule** — re-zipping the package with `mimetype`
  compressed, or not first in the archive, can produce a file some
  readers refuse to recognize as ODP.
- **Assuming ODP implies LibreOffice-only** — it's an open standard
  that Google Slides and Microsoft PowerPoint both read and write
  natively; a file arriving as `.odp` doesn't mean the author used
  LibreOffice.

## Learn more

- [ISO/IEC 26300](https://www.iso.org/standard/66363.html) — the international standard defining OpenDocument Format.
- [OASIS OpenDocument Format](https://www.oasis-open.org/standard/opendocumentv1-3/) — the underlying OASIS specification ODP implements.
- [[microsoft-powerpoint]] for the closest proprietary equivalent, `.pptx`.
- [[google-slides]] for a cloud-based tool that natively imports/exports `.odp`.
- [[open-document-text]], [[open-document-spreadsheet]], [[open-document-graphics]], [[open-document-formula]], [[open-document-database]] for the other members of the OpenDocument family.
