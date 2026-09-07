---
name: privacy-policy
description: Use when asked to draft or review a privacy policy — the legal disclosure of what personal data a product collects, why, and how it's handled — for general guidance only, not legal advice; always direct the reader to consult a qualified lawyer for their specific situation, jurisdiction, and regulatory obligations (e.g. GDPR, CCPA). Distinct from a [[terms-of-service]], which governs usage rights and conduct rather than data handling.
---

# Privacy Policy

A privacy policy is the legal disclosure telling users what personal
data a product or service collects, why it collects it, who it shares
it with, how long it's kept, and what rights users have over their own
data. It's both a legal requirement in most jurisdictions and, in
effect, a public promise about actual data practices.

**This is general guidance for drafting a working document, not legal
advice.** Privacy law varies significantly by jurisdiction and by what
kind of data a product handles. Specific regulatory compliance — GDPR,
CCPA, HIPAA, or others that may apply — needs actual legal review, not
just a well-written policy document. Always direct the reader to
consult a qualified lawyer before publishing.

## Key components

- **What data is collected** — every category actually collected
  (account info, usage data, device data, location, payment info),
  not a generic list assembled from a template.
- **Purpose** — why each category of data is collected and used, tied
  to actual product functionality rather than vague catch-alls.
- **Third-party sharing** — who else receives the data (processors,
  analytics providers, ad networks, partners) and why, including
  vendors the product team may not think of as "sharing data" but that
  legally count (e.g. an embedded analytics SDK).
- **Retention** — how long data is kept, and what happens to it after
  that period or after account deletion.
- **User rights** — how a user can access, correct, export, or delete
  their own data, and how to actually exercise those rights, not just
  that they exist.
- **Contact for privacy questions** — a real, monitored channel for
  privacy questions or requests, not a dead email address.

## Why it must match actual practice, not aspirational practice

A privacy policy is a factual claim about what the organization does,
not a statement of intent. A policy that overpromises — claiming data
isn't shared when a third-party analytics tool is actually embedded, or
promising deletion the systems can't actually perform — creates real
liability the moment an audit, a user complaint, or an incident reveals
the gap between the document and reality. When in doubt, describe what
the product actually does today, and update the policy when the product
changes, rather than writing the policy the team wishes were true.

## Common pitfalls

- **Boilerplate that doesn't reflect what the product actually does** —
  a template policy copied from elsewhere routinely lists data
  categories the product doesn't collect and omits ones it does.
- **No process for handling data-rights requests despite promising one**
  — a policy that offers access or deletion rights with no actual
  internal process to fulfill them is a promise the organization can't
  keep, and a compliance gap waiting to surface.
- **Silent on third-party analytics or tracking tools actually in use**
  — embedded SDKs, ad pixels, and analytics tools are third-party data
  sharing even when no one thinks of them that way; leaving them out is
  one of the most common gaps between policy and practice.
- **Written once at launch and never revisited** — new features, new
  vendors, and new data flows routinely outpace an unmaintained policy.
- **Vague purpose statements** — "to improve our services" as the only
  stated purpose gives users no real basis to understand what's actually
  happening to their data.

## Learn more

- [[terms-of-service]] for the companion legal document governing usage
  rights and conduct rather than data handling.
- [[contract-review]] for the broader discipline of reviewing legal and
  contractual terms before they're published or signed.
- [[incident-response-plan]] for handling a breach or exposure of the
  data this policy describes.
