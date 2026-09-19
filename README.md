# Should I Go Abroad?

A free readiness check for Pakistani workers considering a job in **Saudi Arabia, the UAE or Qatar**.

Answer 40 questions and get:

- a verdict and a score out of 100
- warnings for the traps that sink people however well they score: the wrong visa, no registered contract, an unlicensed recruiter, cash demands, missing professional licensing
- your three weakest areas and what to do about them
- a first-90-days plan for after you land

Nothing you enter is saved or sent anywhere. The page runs entirely in your browser.

**This is a preparation check, not an immigration service.** Rules change, so confirm anything time-sensitive with the official source before you act on it.

## For maintainers

The page is built from `src/`: one app file and one data file per country.

```
python build.py      # writes docs/index.html, which GitHub Pages serves
```

To add or change a country, see `AUTHORING.md` and `src/packs/_template.js`.
