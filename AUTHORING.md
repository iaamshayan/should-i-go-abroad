# Abroad readiness assessment: how it fits together

One source file, three places it runs.

| | Where | What it does |
|---|---|---|
| **Public site** | https://iaamshayan.github.io/should-i-go-abroad/ | GitHub Pages. Anyone opens it, no sign-in. Saves nothing. Share this one. |
| **Public artifact** | your claude.ai artifacts gallery | Same page, hosted on claude.ai. |
| **Console** | your claude.ai artifacts gallery | Edit questions, points and bands. Review saved submissions. |

Both claude.ai pages are owner-only; find them under `/artifacts` in Claude Code or at claude.ai/code/artifacts.

## Why two pages

A page that stores data becomes organisation-internal and cannot be shared publicly, because every viewer has to be signed in to your organisation. So public reach and saved submissions can't live on the same page. The app is identical in both; it asks the platform for a database at load time and gets one only in the console build. In the public build that request returns nothing and the page runs as an assessment with no admin button and no recording.

## Two things to know about the console

**Access is enforced by the server, not by the page.** A password typed into a web page is worthless, because anyone can read the page's source. Instead, the Admin button only appears if the platform lets you write to the artifact. That is decided by who you shared the artifact with: people given **edit** access can change questions; people given **view** access cannot, no matter what they do in the browser.

**Everyone who can open the console can read every saved submission.** There is no way to make one person's answers private from another's here, because the platform feature that would allow it isn't available on this account. That's fine while the console stays with you and your team, which is what it's for. Candidates should be sent the public link.

## Editing questions

Open the console → **Questions & scoring** → pick a country. You can change question wording, answer labels, the points each answer is worth, and the four verdict bands.

Two counters keep you honest, and they turn red when something is off:

- each section's options must add up to that section's stated total
- the section totals must add up to 100

**Save changes** writes to the console's database and takes effect immediately for the console. **It does not change the public pages.** The GitHub site and the public artifact carry the questions baked in at build time. To push edits there, tell Claude to copy your changes into the pack files, rebuild and push.

## Adding a country

Countries are data files, not code. `src/packs/_template.js` documents every field; copy it to `src/packs/<id>.js`, fill it in, and run:

```
python build.py
```

Then commit and push `docs/` to update the public site, and republish both files in `dist/` to update the claude.ai pages.

Weight each country for itself. The differences are the whole point. Arabic is worth 4 points in the Saudi pack and 2 in the UAE one, because most UAE workplaces run in English. Network connections are worth more in a closed market than an open one. Copying another pack's weights defeats the exercise.

The knockouts are where countries diverge most sharply. Getting these wrong is worse than getting a score wrong:

- **Saudi Arabia:** arriving on a visit or Umrah visa intending to work is a hard stop. It does not convert.
- **UAE:** a visit visa *can* legally become an employment visa, but only an employer can file it and you cannot work a day before it completes. That's a warning, not a stop.
- **Qatar:** the No-Objection Certificate is abolished, so a worker can change employers after serving notice. There is also a stated minimum wage (QAR 1,000 basic, +500 housing, +300 food where not provided) that an offer can be checked against.

## Where the content came from

**Saudi Arabia** is yours. The 28 questions and weights come from `Ksa Score table.xlsx`, rebalanced to make room for a legal/documentation section the original didn't have (A 15→12, B 25→20, C 15→12, F 15→16, plus a new H worth 10). Two defects in the spreadsheet are fixed here: Section D had no header row, and Section G was labelled 10 points but its items summed to 9.

**UAE and Qatar** were drafted from public research, not from your expertise. The console marks them so, and shows a review notice when you open one. Check them against what you know before you rely on them.

The knockouts and the post-arrival playbooks draw on Pakistan's Bureau of Emigration rules, Saudi Saudization/Nitaqat quotas, SCFHS/Dataflow licensing, UAE MOHRE and wage-protection rules, and Qatar's post-2020 labour reforms. Rules in all three countries change; re-check anything time-sensitive before a candidate acts on it.

## Files

```
src/app.html          the whole application: markup, styles, engine
src/packs/*.js        one file per country; _template.js is ignored by the build
build.py              writes dist/ and docs/ from the source
dist/                 the claude.ai builds (not committed)
docs/                 what GitHub Pages serves
```
