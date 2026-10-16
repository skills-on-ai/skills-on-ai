---
name: fitsm
description: Use when asked to set up lightweight IT service management with FitSM, a streamlined standard often described as "ITIL light", for small-to-medium organizations that want core process structure without heavy overhead. Distinct from [[itil-5]] (broader framework), [[iso-iec-20000]] (certifiable standard), and [[yasm]] (another simplified model).
---

# FitSM

FitSM is a lightweight, streamlined ITSM standard designed as an "ITIL light". It is best for small-to-medium-sized organizations that want core process structure without heavy or expensive overhead.

## Input required

- The organization's size, services, and current ways of working.
- Pain points: missed incidents, unmanaged changes, unclear ownership.
- The official FitSM material the user holds, and the version.
- Whether a later move to [[iso-iec-20000]] is expected.

## Questions to ask first

1. How large is the team, and which services does it run?
2. Which problems matter most today?
3. Who can own each process?
4. Is certification or alignment with another standard a future goal?
5. What tools are available?

## Method

1. **Assess the baseline.** List current practices and records.
2. **Pick a small core.** Start with the few processes that fix the worst problems, such as service portfolio, service level, incident and service request, change, and continual improvement. Check the official FitSM process list.
3. **Assign roles.** Name a process owner and a manager for each process, even if one person holds several roles.
4. **Write minimal procedures.** One page per process: purpose, steps, records, measures.
5. **Run and measure.** Use simple measures, and review them regularly.
6. **Improve.** Add processes as capacity grows.

## Output format

- Process list with owner and one-line purpose.
- One-page procedure per process.
- Roadmap for adding processes.

## Ground rules

- Do not quote FitSM requirement numbers or the exact process list unless the user supplied the official text.
- Keep it light; do not add ITIL complexity the organization cannot sustain.

## Self-check before answering

- Does each process have an owner and a record?
- Is the scope small enough to run?

## Common pitfalls

- **Starting with every process.**
- **Procedures nobody follows** because they are too long.
- **No owners.**

## Example prompt

"We are a 15-person IT team. Propose a FitSM starting set of processes and one-page procedures for the first three."

## Learn more

- Related: [[itil-5]], [[iso-iec-20000]], [[yasm]], [[service-catalog]], [[service-level-agreement]].
- Official source: [FitSM](https://www.fitsm.eu/).
