---
name: text-shortcut-system
description: Use when someone types the same phrases repeatedly (addresses, email replies, signatures, links) and wants text expansion or keyboard replacement shortcuts with a naming convention. Distinct from [[keyboard-shortcut]] (key combinations that trigger commands, not typed expansions), [[inbox-cleanup]] (reduces the mail itself), and [[3-21-0-inbox-system]] (a routine that these shortcuts speed up).
---

# Text Shortcut System

A text shortcut is a short abbreviation that expands into a longer
phrase as you type, using the keyboard's replacement feature on a phone
or a text expander on a computer. A small, well-named set removes
repetitive typing and typos. This skill finds what is worth expanding,
names it so it is memorable and safe, and builds the starter library.

## Input required

- **Devices and platforms** used for typing: phone, laptop, browser,
  and whether the user wants one library shared across them.
- **Repeated text**: addresses, standard replies, links, sign-offs,
  scheduling lines, code snippets, and similar.
- **Where it is typed**: email, chat, forms, documents.
- **Sensitivity**: what must never go into a snippet.
- **Available features**: the built-in text replacement on the phone or
  computer, or a separate expander.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered:

1. Which phrases or blocks of text do you type over and over?
2. On which devices and in which apps do you type them?
3. Do you want the same shortcuts on all your devices?
4. Do any of your messages include names, dates, or other pieces that
   change each time?
5. Have you used text replacement before, and what annoyed you?

## Method

1. **Collect candidates.** Look through sent mail, chat history, and
   recent forms for text typed three or more times. Rank by how often and
   how long. A long address is worth it; a short common word is not.
2. **Choose a naming convention.** The shortcut must not collide with
   normal words or expand by accident. A common approach is a marker
   prefix, such as a semicolon or double letter, then a short mnemonic:
   `;addr`, `;sig`, `;thx`. Keep one pattern throughout.
   - Use the same marker for all snippets.
   - Use consistent families, such as `;re-` for replies and `;ln-` for
     links.
   - Avoid markers you type often in ordinary text.
3. **Write the expansions.** Keep tone natural, edit the text for the
   typical case, and leave obvious blanks for the parts that change. If
   the tool supports fields, dates, or cursor placement, use them; if not,
   put a visible placeholder, such as `[name]`, that is hard to miss.
4. **Keep secrets out.** Do not store passwords, recovery codes, card or
   account numbers, or government identification numbers as snippets.
   Expansion text may be saved in plain form and synced through a cloud,
   and mistyped shortcuts can paste it into the wrong place. A password
   manager is the right tool for sensitive items (see
   [[password-manager]]).
5. **Install in the user's system.** Use the built-in phone and computer
   text replacement first; consider a dedicated expander only if the
   user needs cross-app snippets, fields, or sharing. Have the user enter
   the shortcuts in their own settings.
6. **Test in real apps.** Try each snippet in the places it will be used.
   Some apps, code editors, and password fields behave differently or
   ignore replacement.
7. **Keep the library healthy.** Review monthly: delete unused snippets,
   fix outdated text such as an old address or phone number, and add new
   candidates.

## Output format

- **Convention:** the marker and families, in two lines.
- **Starter library:** a table of shortcut, expansion, and use.
- **Excluded list:** what is deliberately not stored.
- **Setup steps** for each of the user's devices.
- **Monthly review checklist.**

Example rows:

| Shortcut | Expands to | Use |
|---|---|---|
| `;sig` | Thanks, then name and role | email sign-off |
| `;mtg` | A line offering meeting times | scheduling |

## Ground rules

- **No secrets in snippets.** State this rule and keep to it.
- **Keep personal data minimal.** A home address in a work-shared
  library may be inappropriate; keep personal and shared libraries
  separate.
- **Do not paste sensitive data to the agent.** Ask for the shape of a
  snippet, not the real values.
- **Tools are examples only,** and features differ by product.
- **Prefer short, mnemonic shortcuts** over clever ones.

## Self-check before answering

- Does the convention prevent accidental expansion?
- Are all expansions free of secrets and sensitive identifiers?
- Are placeholders visible for parts that change?
- Did I include a review for outdated text?
- Is the library small enough to remember?

## Common pitfalls

- **Shortcuts that are real words** — they expand when not wanted.
- **Too many snippets** — the user cannot remember them and stops.
- **Stale details** — an old address keeps being sent.
- **Storing credentials** — a mistyped shortcut can paste them anywhere.
- **Unedited boilerplate** — replies that sound canned or ignore the
  recipient.
- **Inconsistent markers** — nothing is guessable.

## Example prompt

> I type my address, my email signature, and a few stock replies all the
> time on my phone and laptop. Help me pick a naming convention, write a
> starter set of text shortcuts, and tell me what I should not store.

## Learn more

- [[keyboard-shortcut]] for key combinations that run commands.
- [[password-manager]] for storing the sensitive items that do not belong
  in snippets.
- [[3-21-0-inbox-system]] for the email routine these speed up.
- [[inbox-cleanup]] for reducing the mail you need to answer.
