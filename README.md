# Portfolio

Personal portfolio site, hosted with GitHub Pages.

## Structure

```
index.html                              - landing page, lists all 7 projects
css/style.css                           - shared styles (all pages use this one file)
js/main.js                              - footer year + scrollspy for sidenav

projects/
  flock-cameras-pia.html                - paper: Flock cameras privacy impact assessment
  gt-privacy-compliance.html            - paper: GT website privacy policy compliance review
  ransac-segmentation.html              - RANSAC object segmentation pipeline
  monte-carlo-localization.html         - particle filter localization (Webots)
  rag-chatbot.html                      - RAG chatbot (team project)
  tensorflow-classifier.html            - TensorFlow image classifier
  cybersecurity-homelab.html            - pfSense / Nessus / Wazuh homelab (multi-section)

  project-template.html                 - blank starting point for a new code/software project
  paper-template.html                   - blank starting point for a new paper/write-up page

assets/
  papers/                               - put PDF write-ups here
  img/<project-name>/                   - put project screenshots here
```

## Filling in your real content

Every page has `<!-- TODO -->` comments marking what to edit - mainly your
name, tags/categories, and the overview text (I drafted the overview
paragraphs from the project descriptions you gave me, but you know the
actual details, so treat them as a first draft to correct).

**Papers (Flock cameras, GT privacy review):**
1. Put the PDF file in `assets/papers/`, matching the filename already
   referenced in the page (`flock-cameras-pia.pdf`, `gt-privacy-compliance.pdf`),
   or update the `src`/`href` in the page if you name it differently.
2. That's it - the page embeds it in an inline viewer with a "open in new
   tab" fallback link (some mobile browsers don't render inline PDFs well).

**Screenshots (RANSAC, MCL, RAG chatbot, TensorFlow, homelab):**
1. Drop image files into the matching `assets/img/<project-name>/` folder.
2. In the page, find the `.screenshot` block you want to fill and replace:
   ```html
   <div class="screenshot">
     <span class="screenshot__label">screenshot: shot-1.png</span>
   </div>
   ```
   with:
   ```html
   <div class="screenshot">
     <img src="../assets/img/ransac-segmentation/shot-1.png" alt="describe what's shown">
   </div>
   ```
   The dashed placeholder box automatically becomes a solid image frame
   once it contains an `<img>` - no other CSS changes needed.
3. Add or remove `<div>` blocks inside `.screenshot-grid` for however many
   screenshots you actually have.

**GitHub repo links:** each page has a `Links` section near the bottom with
a placeholder `#` - swap in the real repo URL for each project (they can
each live in their own repo; this portfolio repo doesn't need to contain
the project code itself).

**RAG chatbot demo:** there's a note on that page about the PythonAnywhere
demo possibly being asleep/offline - check if it's still up, and either
link it or delete the note.

## Adding a new project later

1. Copy `projects/project-template.html` (for a code project) or
   `projects/paper-template.html` (for a write-up) to a new filename.
2. Fill in the `TODO`s.
3. Add a new `<li class="scan-row">` entry to `index.html`'s project list,
   picking a `--dot-color` from the legend (`--c-web`, `--c-robotics`,
   `--c-data`, `--c-security`, `--c-paper`) that matches the project's category.

## Running locally

No build step - just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
