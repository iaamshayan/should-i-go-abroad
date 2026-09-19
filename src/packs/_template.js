/* Country pack TEMPLATE.
 *
 * Files starting with "_" are ignored by build.py. To add a country:
 *   1. Copy this file to src/packs/<country-id>.js
 *   2. Fill it in (every rule is noted below)
 *   3. Add the id to ORDER in build.py if you want it in a particular position
 *   4. Run: python build.py
 *
 * The two hard rules the app relies on:
 *   - Each section's `max` MUST equal the sum of the highest-scoring option
 *     across that section's questions.
 *   - Those section maxima MUST add up to 100.
 * The admin console shows a live tally for both and flags a mismatch in red.
 */
PACKS["country-id"] = {
  id: "country-id",              // must match the PACKS[...] key and the filename
  name: "Country Name",
  flag: "\u{1F1F5}\u{1F1F0}",    // regional-indicator pair, e.g. PK
  origin: "Pakistan",            // who this pack is written for
  authored: "research",          // "owner" = your expertise | "research" = drafted, needs review
  updated: "2026-09-08",

  intro: "One sentence framing the assessment for this destination.",

  /* ---------------------------------------------------------------
   * KNOCKOUTS — not scored. These are the things that ruin people
   * regardless of how well they score. A "stop" answer overrides the
   * band entirely and the result page leads with the warning.
   *
   * severity: "ok"   nothing shown
   *           "warn" shows warnTitle/warnBody under "Worth fixing"
   *           "stop" shows stopTitle/stopBody and forces the STOP verdict
   *
   * Every knockout needs at least one "ok" option, or the assessment
   * is unpassable. Write these from what actually goes wrong in THIS
   * country — they are the part that should differ most between packs.
   * --------------------------------------------------------------- */
  knockouts: [
    {
      id: "k-visa",
      text: "What visa will you actually travel on?",
      help: "Optional clarifying line, shown under the question.",
      options: [
        { label: "The correct work visa, arranged before travel", severity: "ok" },
        { label: "A visit visa I've been told will convert", severity: "stop" },
        { label: "I don't know yet", severity: "stop" }
      ],
      stopTitle: "Short, blunt headline",
      stopBody: "What goes wrong, why, and what to do instead. Two to four sentences.",
      warnTitle: "Only needed if any option is severity:\"warn\"",
      warnBody: "Shown under \"Worth fixing\" on the result page."
    }
    /* Six knockouts is the working number — enough to cover visa, contract,
       recruiter legitimacy, money, licensing and local labour-market risk. */
  ],

  /* ---------------------------------------------------------------
   * SECTIONS — scored, and must total 100 across all sections.
   * Weight them for THIS country: Arabic matters in Saudi Arabia and
   * barely registers in the UAE; network matters more in a closed
   * market than an open one. Do not just copy another pack's weights.
   * --------------------------------------------------------------- */
  sections: [
    {
      id: "A",                    // short, unique within the pack; shown as A1, A2...
      name: "Section name",
      max: 100,                   // MUST equal the sum of best options below
      questions: [
        {
          text: "The question, phrased as you would ask it out loud.",
          help: "Optional clarifying line.",
          options: [
            { label: "Best answer", points: 100 },
            { label: "Middle answer", points: 50 },
            { label: "Worst answer", points: 0 }
          ]
        }
      ],
      // Shown on the result page when this section scores under 70%.
      // Write it as advice, not as a restatement of the problem.
      gap: "What to actually do about a weak score in this section."
    }
  ],

  /* ---------------------------------------------------------------
   * BANDS — what a score means. Listed high to low; the app picks the
   * first band whose `min` the score reaches, so keep them descending.
   * tone drives the colour: "go" | "close" | "wait" | "stop"
   * --------------------------------------------------------------- */
  bands: [
    { min: 80, tone: "go",    title: "Ready — go, with a plan", body: "..." },
    { min: 65, tone: "close", title: "Nearly ready — close a few gaps first", body: "..." },
    { min: 50, tone: "wait",  title: "Not yet — give it 6–12 months", body: "..." },
    { min: 0,  tone: "stop",  title: "Do not go yet", body: "..." }
  ],

  /* Shown to everyone who finishes: what to do after landing. */
  first90: [
    { title: "Action headline", body: "What to do, and why it matters here specifically." }
  ],

  /* Shown to everyone: where effort pays back most in this country. */
  boosters: [
    { title: "Investment headline", body: "Why this one returns more than the alternatives." }
  ]
};
