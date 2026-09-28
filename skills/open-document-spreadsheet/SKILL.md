---
name: open-document-spreadsheet
description: Use when asked about OpenDocument Spreadsheet (`.ods`) files — the ISO/IEC 26300 ZIP+XML spreadsheet format, its OpenFormula formula syntax, or conversion to/from `.xlsx` — as distinct from [[microsoft-excel]]'s proprietary format, [[google-sheets]] (a tool that can import/export ODS, not the format itself), and sibling formats [[open-document-text]], [[open-document-presentation]], [[open-document-graphics]].
---

# OpenDocument Spreadsheet (ODS)

OpenDocument Spreadsheet (**ODS**) is an open, vendor-neutral
spreadsheet file format, standardized internationally as **ISO/IEC
26300** (based on the OASIS OpenDocument Format, ODF). It's the
spreadsheet member of the OpenDocument family alongside
[[open-document-text]], [[open-document-presentation]],
[[open-document-graphics]], [[open-document-formula]], and
[[open-document-database]] — and it exists as a royalty-free,
standards-based alternative to Microsoft's proprietary `.xlsx`.

## Package structure

Like every OpenDocument format, `.ods` is a ZIP archive of XML
sub-documents:

- **`mimetype`** — a plain-text file holding the string
  `application/vnd.oasis.opendocument.spreadsheet`; it must be the
  *first* entry in the ZIP and stored **uncompressed**, so a reader
  can identify the format without inflating the whole archive.
- **`content.xml`** — the sheets, cells, and formulas.
- **`styles.xml`** — cell, column, row, and page styles shared across
  the workbook.
- **`meta.xml`** — metadata (author, creation/modification dates,
  editing statistics).
- **`settings.xml`** — application-specific state (active sheet,
  view/zoom settings, print ranges).
- **`META-INF/manifest.xml`** — an index of every file in the package
  and its media type, plus encryption metadata if the file is
  password-protected.

## Content model

Inside `content.xml`, an `<office:spreadsheet>` root holds one
`<table:table>` per sheet, each containing `<table:table-row>` and
`<table:table-cell>` elements. A formula-bearing cell stores its
formula under `table:formula`, prefixed `of:` for **OpenFormula** —
the ODF 1.2+ standardized formula grammar (e.g. `of:=SUM([.A1:.A10])`)
— which is *not* byte-identical to Excel's formula syntax, so a
spreadsheet application translates formulas on import/export rather
than passing the text through unchanged.

## Template variant

`.ots` (OpenDocument Spreadsheet **T**emplate,
`application/vnd.oasis.opendocument.spreadsheet-template`) is the same
package structure flagged as a template — opening one starts a new,
unsaved workbook pre-loaded with its styles and layout rather than
editing the template file itself.

## Software compatibility

| Category | Software |
| --- | --- |
| Native/open-source | LibreOffice Calc (its default format), Apache OpenOffice Calc |
| Cloud-based | [[google-sheets]] (imports and exports `.ods`) |
| Commercial | [[microsoft-excel]] (Microsoft 365 can open, edit, and save directly to `.ods`) |

## Common pitfalls

- **Assuming formula syntax round-trips unchanged** — OpenFormula and
  Excel's formula language overlap heavily but aren't identical;
  unusual functions or locale-specific formatting can translate
  imperfectly across `.ods`/`.xlsx` conversion.
- **Macro portability** — LibreOffice Basic macros in an `.ods` file
  don't run in Excel, and VBA macros in an `.xlsx` don't run in
  LibreOffice Calc; macros are not part of what round-trips cleanly.
- **PivotTable/Pivot Table feature gaps** — Calc's pivot-table
  equivalent doesn't implement every Excel PivotTable feature, so a
  complex pivot built in one may need rebuilding, not just reopening,
  in the other.

## Learn more

- [ISO/IEC 26300](https://www.iso.org/standard/66363.html) — the international standard defining OpenDocument Format.
- [OASIS OpenFormula](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office-formula) — the standardized formula grammar ODS spreadsheets use.
- [[microsoft-excel]] for the closest proprietary equivalent, `.xlsx`.
- [[google-sheets]] for a cloud-based tool that natively imports/exports `.ods`.
- [[open-document-text]], [[open-document-presentation]], [[open-document-graphics]], [[open-document-formula]], [[open-document-database]] for the other members of the OpenDocument family.
