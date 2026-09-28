---
name: open-document-database
description: Use when asked about OpenDocument Database (`.odb`) files — the ISO/IEC 26300 database-document format that either embeds a database engine or merely stores connection settings/forms/reports pointing at an external database — as distinct from sibling formats [[open-document-text]], [[open-document-spreadsheet]], [[open-document-presentation]].
---

# OpenDocument Database (ODB)

OpenDocument Database (**ODB**) is an open, vendor-neutral database
document format, standardized as part of **ISO/IEC 26300** (the OASIS
OpenDocument Format). It's the database member of the OpenDocument
family alongside [[open-document-text]], [[open-document-spreadsheet]],
[[open-document-presentation]], [[open-document-graphics]], and
[[open-document-formula]] — and the closest OpenDocument counterpart
to Microsoft Access's `.accdb`/`.mdb`.

## Two very different things an `.odb` file can be

This is the most important thing to know about `.odb`, and the one
place it departs sharply from its sibling formats: an `.odb` file
doesn't always contain the actual data.

- **Embedded database** — the file bundles a real database engine and
  its data inside the package. LibreOffice Base's default embedded
  engine switched from **HSQLDB** (a Java-based engine) to
  **Firebird** starting around LibreOffice 7.1, largely to drop the
  Java runtime dependency and move to a more actively maintained
  engine; either way, the actual tables live inside the `.odb` ZIP.
- **Connection-only document** — the file stores forms, reports,
  queries, and *connection settings* (via JDBC/ODBC) pointing at an
  **external** database (MySQL, PostgreSQL, another server), but holds
  none of the actual data itself. Opening the file without access to
  that external database gets you the UI, not the rows.

## Package structure

Like every OpenDocument format, `.odb` is a ZIP archive:

- **`mimetype`** — a plain-text file holding the string
  `application/vnd.oasis.opendocument.database`; it must be the
  *first* entry in the ZIP and stored **uncompressed**.
- **`content.xml`** — forms, reports, and query definitions.
- **`settings.xml`** and **`database/`** — connection configuration
  and, for an embedded database, the actual engine files.
- **`META-INF/manifest.xml`** — an index of every file in the package
  and its media type.

## Software compatibility

| Category | Software |
| --- | --- |
| Native/open-source | LibreOffice Base (its default format), Apache OpenOffice Base |
| Cloud-based | No direct Google Workspace equivalent — there's no mainstream cloud desktop-database app comparable to Base/Access |
| Commercial | Microsoft Access doesn't natively open `.odb`, unlike PowerPoint/Word/Excel's direct ODF support; interoperability means exporting tables (e.g. to CSV or via [[sql]]) rather than opening the file directly |

## Common pitfalls

- **Assuming an `.odb` file always contains the data** — a
  connection-only file is just forms/reports/settings; losing access
  to the external database it points at makes the file effectively
  empty, even though it opens fine.
- **Expecting Access-level drop-in compatibility** — unlike the
  odt/ods/odp trio, there's no major commercial suite offering direct
  `.odb` support, so migrating between Base and Access means exporting
  and rebuilding, not just reopening the file.
- **Forgetting the embedded engine matters for portability** — an
  embedded HSQLDB-based `.odb` (older files) and a Firebird-based one
  (current default) aren't interchangeable at the engine level, even
  though both are valid `.odb` files; this rarely matters for normal
  use but can surprise anyone inspecting the package's internals.

## Learn more

- [ISO/IEC 26300](https://www.iso.org/standard/66363.html) — the international standard defining OpenDocument Format.
- [[sql]] for the query language used against the databases `.odb` files connect to or embed.
- [[open-document-text]], [[open-document-spreadsheet]], [[open-document-presentation]], [[open-document-graphics]], [[open-document-formula]] for the other members of the OpenDocument family.
