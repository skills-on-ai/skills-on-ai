---
name: united-kingdom-national-health-service-digital-technology-assessment-criteria
description: Use when asked to complete, review, or prepare evidence for the UK NHS Digital Technology Assessment Criteria (DTAC) form v2.0 — the baseline questionnaire a digital health technology manufacturer gives to NHS and social care buyers, covering company information, value proposition, clinical safety (DCB0129), data protection, technical security, interoperability, and usability and accessibility — or to check a supplier's DTAC answers as a buyer. Distinct from [[medical-clinical-audit]] (auditing care delivery), [[accessibility-testing]] (the WCAG testing that feeds section D1), and [[penetration-testing]] (the test that feeds section C3).
---

# UK NHS Digital Technology Assessment Criteria (DTAC)

DTAC is the national baseline that digital health technology (DHT) must
meet before health and care organisations in England adopt it. This skill
follows **DTAC Form v2.0 (24 February 2026)**. From 6 April 2026
manufacturers must provide this form, instead of v1.0, whenever a health or
care organisation asks for it. Forms and thresholds change; confirm against
the current official NHS England form before submitting or relying on an
answer.

## How the form is structured

| Section | Topic | Status |
|---|---|---|
| A | Company information | Context only, not assessed |
| B | Value proposition | Context only, not assessed |
| C1 | Clinical safety | **Assessed, must pass** |
| C2 | Data protection | **Assessed, must pass** |
| C3 | Technical security | **Assessed, must pass** |
| C4 | Interoperability | **Assessed, must pass** |
| D1 | Usability and accessibility | Scored for comparison, not pass/fail |

- The **manufacturer** of the DHT completes the form. If the seller is not
  the manufacturer, they work together.
- Answer for the **specific product and version** under assessment, not the
  organisation in general.
- Label each supporting document with company name, question number, and
  submission date.

## Input required

- **The product and exact version**, and its type: standalone software or
  mobile app, wearable, SaaS, or other.
- **Role of the user**: manufacturer completing the form, or buyer or
  assessor reviewing one.
- **Existing evidence**: DCB0129 safety case, hazard log, DPIA, DSPT
  status, ICO registration, Cyber Essentials certificate, penetration test
  report, accessibility statement.
- **Whether it touches patient data**, is used directly by patients, exposes
  APIs, or ships with hardware.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. Are you the manufacturer completing the form, or a buyer assessing one?
2. What is the product, its version, and its type (app, wearable, SaaS)?
3. Does it influence direct care, process personal data, expose APIs, or
   serve patients directly?
4. Which evidence do you already hold (safety case, DPIA, Cyber Essentials,
   pen test, accessibility statement)?
5. Where is data stored and processed, and who can access it, including
   support staff and sub-processors?

## Section A — Company information (A1–A12)

Name, product, version, product type (A4: standalone software or mobile app,
wearable, SaaS, other), key contact name, email and phone, registered
address and country, Companies House or charity number, and, if required to
register with the CQC, the date of the last assessment (A11) and latest
report (A12).

## Section B — Value proposition (B1–B4)

Intended use (B1: patient care or support, diagnostics, clinical support,
workforce support or management, other); a clear description of what the
product does (B2); intended users and the intended or proven benefits, with
how they were validated, including evaluations or trials (B3); and a data
flow between the product and the Health IT system, with a user journey map
where applicable (B4, may be part of the DPIA).

## Section C1 — Clinical safety

Documentation covers the specific version assessed. If hardware ships with
the product, DCB0129 documentation covers the whole Health IT system. If you
treat C1 as not applicable, submit your rationale.

1. **C1.1.1** — Is any component Software or AI as a Medical Device under the
   UK Medical Devices Regulations 2002? If yes, provide a completed
   pre-acquisition questionnaire (PAQ). If no, go to C1.2.
2. **C1.1.2** — Is it classified as a standalone medical device? Read the
   DCB0129 / DCB0160 applicability guidance first. If yes, go to C2; if no,
   go to C1.2.
3. **C1.2** — Does it provide electronic information that influences,
   supports or manages real-time or near-real-time direct care? If yes, go to
   C1.2.2. If no, justify why it is out of scope of DCB0129 (C1.2.1,
   commissioners can challenge this), then go to C2.
4. **C1.2.2** — Have you carried out clinical risk management complying with
   DCB0129? Pass: the manufacturer confirms compliance.
5. **C1.2.3** — Detail your clinical risk management system. Pass: a
   DCB0129-compliant system exists, was followed through development, and
   shows risks identified, evaluated and mitigated across the lifecycle.
6. **C1.2.4** — Supply the Clinical Safety Case Report and Hazard Log.
   Pass: both comply with DCB0129 and are proportionate to the product's
   scale and clinical functionality. The report covers:
   - scope of the assessment and a summary of the risk management approach;
   - the hazard assessment: risks, evaluation, mitigations considered and
     implemented;
   - a test summary (functional and non-functional) and test issues;
   - hazards needing user or commissioner action (training, process change);
   - the hazard log, the risk scoring scheme used, and residual clinical
     risks with operational constraints;
   - hazards transferred to the deploying organisation, with declared
     controls;
   - outstanding test issues with possible safety impact, and hazards that
     could not be mitigated as low as reasonably practicable.
7. **C1.2.5** — Name, profession and registration details of your Clinical
   Safety Officer (CSO): a suitably qualified and experienced clinician with
   current professional registration, knowledge of clinical risk management,
   and enough responsibility to ensure DCB0129 is followed. Pass: a named
   CSO (may be outsourced). The v1.0 requirement for NHS DTAC-specific CSO
   training no longer applies, though suitable training is recommended.

## Section C2 — Data protection

1. **C2.1** — If you have direct or remote access to patient data or NHS
   systems, confirm your Data Security and Protection Toolkit (DSPT) status.
   Pass: Standards Met or Exceeded for the current year (or previous year if
   no current return yet). Assessors validate against the DSPT database.
2. **C2.2** — Does the product or service process personal data or data about
   deceased individuals, including by a sub-processor? If no, go to C3. You
   may answer no only if you have no role in operating or hosting the product
   and no means of access to its data, including remote support access.
3. **C2.2.1** — Evidence of current ICO registration, with expiry date.
   Validated against the ICO Register of Fee Payers.
4. **C2.2.2** — A Data Protection Impact Assessment covering: product
   summary and processing; data fields; data flows in, within and out;
   end-user security controls (on/off-boarding, access limits); technical and
   organisational measures in transit and at rest; countries where data is
   stored or passes through; manufacturer staff access and legal basis;
   controller for each element; retention and disposal; processors and
   sub-processors with binding agreements; confidentiality, availability and
   integrity risks and mitigations; and support for data subject rights.
5. **C2.2.3** — Transparency information (privacy notice) available to the
   buyer to help meet UK GDPR transparency duties.
6. **C2.2.4** — Terms and conditions on use of user data, EULA or
   equivalent (or state why not applicable). Pass: clear and fair on privacy
   and data use.
7. **C2.2.5 / C2.2.6** — Where data is stored and processed, including
   third-party components: UK only, or outside the UK. If outside, name the
   country and state how the arrangement complies with current legislation
   (UK adequacy, an International Data Transfer Agreement, or binding
   corporate rules). Non-adequacy routes need a transfer risk assessment.

## Section C3 — Technical security

1. **C3.1** — Attach a valid, in-date Cyber Essentials certificate (12-month
   validity), checked against the IASME database.
2. **C3.2** — Have you signed the Cyber Security Charter for Suppliers to the
   NHS? If yes, skip the rest of C3. If no, answer C3.3 to C3.6.
3. **C3.3** — For internet-based or internet-accessible products, provide the
   summary of an external, third-party penetration test from the last 12
   months covering the OWASP Top 10. Pass: no vulnerabilities scoring 7.0 or
   above on CVSS.
4. **C3.4** — Confirm the software was produced in line with the DSIT/NCSC
   Software Security Code of Practice and that you commit to its principles
   (secure design and development, secure build environment, secure
   deployment and maintenance, communication with customers).
5. **C3.5 / C3.5.1** — Confirm a plan for multi-factor authentication for all
   account types, preferably via identity federation; and that supplier
   accounts with privileged access have MFA, or equivalent MFA at the remote
   end (not needed to be enforced on the product itself), or that the
   supplier has no access.
6. **C3.6** — Confirm logging and reporting requirements are defined. To
   answer yes, logging such as audit trails of all access must be in place.

## Section C4 — Interoperability

1. **C4.1** — Does the product expose APIs or integration channels for other
   health or social care products? If yes: **C4.1.1** list the international
   or industry standards used and why they fit; **C4.1.2** confirm the APIs
   follow GDS Open API best practice and are openly documented and freely
   available to third parties; **C4.1.3** if you cannot, set out the basis on
   which they are documented and made available.
2. **C4.2** — Does it share or receive data with national or local care or
   administrative systems where patient identity matters? If no, go to Section D.
   If yes:
   - **C4.2.1** — Can it use the NHS number to identify patient data?
   - **C4.2.2** — Does it integrate with the NHS Personal Demographics
     Service (or other local record systems) to establish or validate the NHS
     number?
   - **C4.2.3** — If either is no, describe how you identify records
     correctly and keep data quality. Pass: yes, or a sound alternative.
   - **C4.2.4** — If patients use it directly, do you use NHS login to verify
     and authenticate users? Pass: yes, or adequate protection in C4.2.6.
   - **C4.2.5** — If public health or adult social care organisations use it
     to deliver care, does it support the DAPB3051 identity verification and
     authentication standard?
   - **C4.2.6** — If you do not use NHS login, describe how you authenticate
     users and the data protection measures. Pass: the approach protects user
     privacy.

## Section D1 — Usability and accessibility (scored, not pass/fail)

- **D1.1** — How the product fits existing systems or care pathways (user
  journey or instructions for use).
- **D1.2** — Do you test with intended users to validate usability?
- **D1.3** — Confirm you have read and considered the Accessible Information
  Standard.
- **D1.4** — Is it a web or mobile application? If yes: **D1.4.1** does it
  meet WCAG 2.2 AA or higher (yes; no but with a plan and timeline; no)?
  **D1.4.2** timescale if you have a plan; **D1.4.3** link to your published
  accessibility statement.
- **D1.5** — Average service availability over the past 12 months, as a
  percentage to two decimal places.

## Supporting documents to attach

| Question | Document |
|---|---|
| A12 | CQC report |
| B4 | User journeys and data flows |
| C1.1.1 | Pre-acquisition questionnaire (PAQ) |
| C1.2.3, C1.2.4 | Clinical risk management system and Clinical Safety Case Report |
| C1.2.4 | Hazard Log |
| C2.2.1 | ICO registration |
| C2.2.2 | DPIA |
| C2.2.3 | Transparency information (privacy notice) |
| C2.2.4 | Terms and conditions on use of user data, or EULA |
| C3.1 | Cyber Essentials certificate |
| C3.3 | External penetration test summary |
| D1.1 | User journeys or pathway fit |

## How to help

**For a manufacturer completing the form**

1. Establish product, version, type, and which branches apply (medical
   device, direct care, personal data, internet-facing, APIs, patient
   identity, web or mobile).
2. Walk the sections in order, applying the skip logic above, and mark each
   question *answer*, *skip (reason)*, or *not applicable (rationale)*.
3. For each assessed question, state the pass criterion, the evidence
   needed, and whether the user's existing evidence meets it.
4. Draft free-text answers (B2, B3, C1.2.1, C2.2.6, C4.1.1, C4.2.3,
   C4.2.6) from facts the user provided; never invent standards,
   certificates, test results, or registration numbers.
5. Produce a gap list: missing documents, expired certificates, items at
   risk of failing, with an owner and a date.

**For a buyer or assessor**

1. Check each assessed answer against its pass criterion and validate
   externally checkable items: DSPT, ICO register, Cyber Essentials (IASME).
2. Test any "not in scope" justification (C1.2.1) and any alternative
   approaches offered in place of NHS number, NHS login, or MFA.
3. Treat section D as comparison data, not a gate.
4. Record outcome per question: *pass*, *fail*, or *clarification needed*.

## Output format

A table per section:

| Code | Applies? | Answer | Pass criterion | Evidence | Status |
|---|---|---|---|---|---|
| C3.1 | Yes | Provided | Valid, in date | Certificate exp. 2027-03 | Pass |

Then: the **overall result** (all of C1–C4 passed, or the failing items),
the **gap list**, and the **documents to attach**.

## Ground rules

- **Version-specific answers.** If the product changes materially, answers
  and evidence may need refreshing.
- **Evidence over assertion.** A "yes" without the supporting document or
  validated record is not a pass.
- **Don't fabricate.** Leave unknowns as gaps.
- **Not legal or clinical advice.** Clinical safety sign-off belongs to the
  named CSO; data protection judgments to the DPO or legal advisers.
- **Check currency.** Thresholds, links, and dates come from the form as
  supplied; verify against NHS England's current version.

## Self-check before answering

- Was the skip logic followed, so no inapplicable question is answered or
  unanswered applicable one is missed?
- Does every assessed question have a pass criterion and evidence status?
- Are certificates and registrations in date, and is the pen test within 12
  months?
- Are free-text answers grounded in what the user actually provided?

## Common pitfalls

- **Answering for the company, not the product version.**
- **Claiming C2.2 "No"** while support staff can remotely access data.
- **Out-of-scope claims for DCB0129** with no justification a commissioner
  could accept.
- **Expired Cyber Essentials or stale pen test** (over 12 months).
- **A pen test finding scoring CVSS 7.0 or above** left unresolved.
- **No named CSO**, or a CSO without current professional registration.
- **Missing transfer risk assessment** for data stored outside the UK on a
  non-adequacy route.
- **Claiming WCAG 2.2 AA without an accessibility statement.**
- **Unlabelled documents**, missing company name, question number, or date.

## Example prompt

> We make a patient-facing SaaS app that stores data in the UK and
> exposes a FHIR API. Walk me through the DTAC v2.0 form, tell me which
> questions apply, what evidence passes each assessed one, and what we're
> missing.

## Learn more

- [[penetration-testing]] for the external test behind C3.3.
- [[accessibility-testing]] for WCAG 2.2 evidence behind D1.4.
- [[medical-clinical-incident-report]] and [[medical-adverse-event-review]]
  for clinical safety adjacent practice.
- [[premortem]] and [[tripwire]] for stress-testing a submission plan.
