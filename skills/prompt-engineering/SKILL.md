---
name: prompt-engineering
description: Use when asked to write, improve, or debug a prompt for a language model — getting reliable, intended behavior through specific instructions, examples, and context — as distinct from [[machine-learning-model-card]], which documents a trained model's capabilities and limits rather than shaping its behavior through the prompt.
---

# Prompt Engineering

Prompt engineering is the deliberate practice of designing and
iterating on the instructions given to a language model so it reliably
produces the intended behavior. It treats a prompt less like a one-off
question and more like a small piece of software: something written,
tested against real cases, and revised when it doesn't hold up.

## Key techniques

- **Be specific about the desired output format** — naming the exact
  structure wanted (a JSON schema, a fixed set of headings, a word
  limit) rather than leaving the model to guess a reasonable shape,
  which produces a different shape each time.
- **Provide examples when the task is ambiguous from instructions
  alone** — a few-shot example of the exact input/output pattern wanted
  resolves ambiguity that even a careful written instruction leaves
  open, especially for tasks defined more by "like this" than by rule.
- **Give the model relevant context rather than assuming it** — facts,
  constraints, or background the model has no way to know on its own
  (a company's terminology, a user's prior messages, a specific
  document) need to be stated in the prompt, not assumed to be inferred.
- **Iterate against real test cases** — running a candidate prompt
  against a representative set of inputs, checking the outputs, and
  revising the prompt based on where it actually fails, rather than
  judging it by how well it handled the one example used to write it.

## Why testing against a range beats testing against one example

A prompt tuned against a single input can look perfect and still fail
broadly, because that one example doesn't exercise the range of
phrasing, edge cases, and ambiguity the model will actually see in
practice. A short, oddly-phrased input, an input missing a field the
prompt assumed would be present, or an input that's technically valid
but unusual can all break a prompt that handled the original example
fine. Testing against a representative set — including a few
deliberately awkward or edge-case inputs — surfaces these failures
while they're still cheap to fix, instead of after the prompt is
already running against real traffic.

## Common pitfalls

- **Tuned against one example, never tested against the range of real
  inputs** — a prompt that handles the anecdote it was written against
  perfectly but breaks on inputs that differ from it in ways the author
  never tried.
- **Instructions so vague the model has to guess at intent** — asking
  for "a good summary" or "clean this up" without saying what "good" or
  "clean" means leaves the model filling in the gap with its own
  assumption, which won't reliably match what was actually wanted.
- **Changing a prompt in production with no way to measure the effect**
  — a tweak ships because it "seemed to help" on a quick check, with no
  before/after comparison against a consistent set of test cases to
  confirm it actually improved outputs rather than quietly regressing
  some other case.
- **No held-out or adversarial cases in the test set** — testing only
  against easy, well-formed inputs misses exactly the messy real-world
  inputs most likely to break the prompt.
- **Context dumped in without structure** — pasting in a wall of
  unstructured background material and expecting the model to pick out
  what's relevant, instead of organizing and labeling the context so
  it's clear what each piece is for.
- **Treating a prompt as finished once it works once** — no process for
  noticing when a prompt's real-world performance drifts as the
  inputs it's actually fed change over time.

## Learn more

- [[machine-learning-model-card]] for documenting a trained model's
  capabilities and limits, the complement to shaping its behavior
  through prompting.
- [[mlops]] for the operational discipline of monitoring and iterating
  on production LLM behavior over time, not just at initial prompt
  design.
- [[api-documentation]] for documenting how a prompt or model is meant
  to be called once it's built into an interface others integrate with.
