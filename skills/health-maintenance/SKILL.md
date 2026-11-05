---
name: health-maintenance
description: Use when asked to set up a personal calendar of routine care (dentist, eye checks, vaccinations, screenings, physical exams) and a one-page health summary, or when someone cannot remember when they last had a check. Distinct from [[important-docs-vault]] (where the records themselves are stored), [[adulting-day]] (a recurring block to run errands like booking these), and [[birthday-reminders]] (the same reminder mechanics for dates). This is a scheduling system, not medical advice.
---

# Health Maintenance

Routine care is easy to miss because nothing hurts and nothing is due
until someone says so. This skill builds a small system: a list of the
routine appointments one person needs, a calendar that prompts the
booking, and a one-page health summary to carry to any appointment.

It is a scheduling system, not medical advice. The agent never decides
which checks a person needs.

## Input required

- **Country and health system**, because services, funding, and
  national guidance differ.
- **Known routine care** already set by a clinician, dentist, or optician,
  with the interval they gave and the date of the last visit if known.
- **Existing calendar** the user actually looks at.
- **Who to include**: only the user, or also a partner or children.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered:

1. Which country are you in, and how do you usually get care (public,
   insurance, or paying directly)?
2. What routine care do you already have intervals for, and when was
   each last done?
3. Which calendar and reminder app do you check daily?
4. Do you have a regular doctor, dentist, and eye care provider, or do
   you need to find them?
5. Is anyone else's care you want in the same system?

## Method

1. **List the categories.** Dentist and hygiene, eye check, vaccinations,
   screenings, general physical or check-up, and any condition-specific
   follow-up the user's clinician has set.
2. **Fill intervals from the right source only.** Use the interval the
   user's own clinician or provider gave. For anything else, point the
   user to their clinician or their country's official health guidance.
   Do not state which screening is needed at which age: schedules vary
   by country, age, sex, family history, and personal history.
3. **Mark unknowns honestly.** Write "ask at next visit" where the
   interval is not known. Turning unknowns into one question for a
   clinician is a valid result.
4. **Create the recurring entries.** One calendar entry per category,
   dated for the next due month, titled with the action ("Book dentist
   check"), not the topic. Set the reminder a few weeks before, because
   booking often takes weeks.
5. **Add a booking step.** Each entry carries the provider name and
   phone or booking link, so it can be done in a single sitting.
6. **After each visit, update three things:** the last-done date, the
   next due date, and any note from the clinician.
7. **Write the one-page summary** (below) and refresh it after any
   change. Keep it where the user can reach it from a phone.

### The one-page summary

Contents: name and date of birth; allergies and reactions; current
medicines and doses as written on the label; conditions and past
surgeries; vaccinations with dates; providers and contacts; emergency
contact; insurance or health service reference name (not the full
number if the page will be shared). Keep it factual and copied from
labels or records, never guessed.

## Output format

- **Care calendar table:** category, provider, interval (with source),
  last done, next due, calendar entry created yes or no.
- **Questions for the clinician:** the unknown intervals.
- **One-page health summary** as a fill-in template.
- **Refresh rule:** update after each visit and review twice a year.

| Category | Interval (source) | Last done | Next due |
|---|---|---|---|
| Dentist | Per dentist | Ask user | Ask user |

## Ground rules

- **Not medical advice.** Never state which screening or vaccine
  someone needs or when. Direct the user to a clinician or official
  national guidance.
- **Symptoms are not routine care.** New, worsening, or worrying
  symptoms mean contacting a clinician now, or emergency services if
  severe. Do not wait for the calendar.
- **Privacy.** Do not ask the user to paste government ID, insurance,
  or patient numbers. Leave those as "stored in vault".
- **Do not interpret results.** Test results go to the clinician.
- **Keep it small.** A system that tracks twenty things will be dropped.

## Self-check before answering

- Did I avoid naming any age-based screening schedule?
- Does every interval have a source (clinician, provider, or "ask")?
- Are calendar entries action-titled and set early enough to book?
- Is the summary copied from user-supplied facts only?
- Did I ask the user's country rather than assume it?

## Common pitfalls

- **Entering a date without a booking link**, so the reminder sits
  unanswered.
- **Reminder on the due date**, when the next free appointment is weeks
  away.
- **Copying a schedule from a website** for another country or another
  kind of person.
- **A summary that goes stale**, with an old medicine list that misleads
  a clinician.
- **Tracking only the user** when a child or parent depends on them.

## Example prompt

> Set up a routine-care calendar for me. I live in Canada, my last dental
> visit was about a year ago, and I do not know what else is due. Build
> the calendar, list what to ask my doctor, and draft my one-page health
> summary.

## Learn more

- [[important-docs-vault]] for storing records and the summary safely.
- [[adulting-day]] for a recurring block in which to make the bookings.
- [[birthday-reminders]] for the same recurring-reminder mechanics.
- [[sleep-rhythm-system]] for another health habit with a routine.
