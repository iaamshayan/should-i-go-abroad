#!/usr/bin/env python3
"""Build every deployment from one source.

    python build.py

All outputs are the same application. They differ only in <title>, in the
capabilities declared when publishing, and in how they are wrapped:

    dist/abroad-check.html        no capabilities   -> public artifact, saves nothing
    dist/abroad-check-admin.html  db + downloads    -> org-internal, admin editor + submissions
    docs/index.html               standalone page   -> GitHub Pages (same as the public build)

The app calls `claude.use("db")` at runtime; it resolves null in the public
builds and the page runs in assessment-only mode. No build flag drives behaviour.
"""
import io
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")
PACKS = os.path.join(SRC, "packs")
DIST = os.path.join(HERE, "dist")
DOCS = os.path.join(HERE, "docs")

# Country order as shown in the picker. Anything not listed is appended A-Z.
ORDER = ["saudi-arabia", "uae", "qatar"]

BUILDS = [
    ("abroad-check.html", "Should I Go Abroad?"),
    ("abroad-check-admin.html", "Abroad Readiness Console"),
]

SITE_TITLE = "Should I Go Abroad?"
SITE_DESC = ("A free readiness check for Pakistani workers considering Saudi Arabia, "
             "the UAE or Qatar: a score out of 100, the traps that sink people, "
             "and what to do before you go and after you land.")
FAVICON = ("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>"
           "<text y='.9em' font-size='90'>\U0001F9ED</text></svg>")

STANDALONE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<link rel="icon" href="{icon}">
{head}
</head>
<body>
{body}
</body>
</html>
"""


def standalone(page):
    """Wrap the artifact body in a full document for plain static hosting.

    Artifacts are published as a body fragment and the host adds the doctype,
    charset and viewport. GitHub Pages serves files as-is, so add them here and
    move <title>/<link>/<style> into <head>.
    """
    cut = page.index("</style>") + len("</style>")
    return STANDALONE.format(desc=SITE_DESC, title=SITE_TITLE, icon=FAVICON,
                             head=page[:cut], body=page[cut:].strip())


def read(path):
    return io.open(path, encoding="utf-8").read()


def write(path, text):
    io.open(path, "w", encoding="utf-8", newline="\n").write(text)
    print("%-28s %6.1f KB" % (os.path.relpath(path, HERE), os.path.getsize(path) / 1024.0))


def main():
    app = read(os.path.join(SRC, "app.html"))
    if "/*__PACKS__*/" not in app or "__TITLE__" not in app:
        sys.exit("src/app.html is missing a __TITLE__ or /*__PACKS__*/ placeholder")

    names = [f for f in os.listdir(PACKS) if f.endswith(".js") and not f.startswith("_")]
    names.sort(key=lambda f: (ORDER.index(f[:-3]) if f[:-3] in ORDER else len(ORDER), f))
    if not names:
        sys.exit("no country packs found in src/packs/")

    bundle = "\n".join(read(os.path.join(PACKS, n)) for n in names)
    body = app.replace("/*__PACKS__*/", bundle)

    for d in (DIST, DOCS):
        if not os.path.isdir(d):
            os.makedirs(d)

    for filename, title in BUILDS:
        write(os.path.join(DIST, filename), body.replace("__TITLE__", title))

    write(os.path.join(DOCS, "index.html"), standalone(body.replace("__TITLE__", SITE_TITLE)))
    # .nojekyll: GitHub Pages serves the files as-is instead of running Jekyll
    io.open(os.path.join(DOCS, ".nojekyll"), "w").close()

    print("packs: " + ", ".join(n[:-3] for n in names))


if __name__ == "__main__":
    main()
