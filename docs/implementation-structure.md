# HER MAGAZINE Implementation Structure

## File Structure

```text
.
├── .github
│   └── workflows
│       └── pages.yml
├── .nojekyll
├── index.html
├── style.css
├── script.js
├── README.md
├── assets
│   └── magazine-backdrop.jpg
└── docs
    ├── magazine-settings.md
    ├── implementation-summary.md
    └── implementation-structure.md
```

## HTML Structure

- `home-screen`: magazine-cover-style app title screen
- `mood-screen`: mood selection screen
- `result-screen`: diagnosis result cover screen

## JavaScript Structure

- `moods`: fixed mood categories
- `luckyItemsByMood`: mood-based lucky item candidates
- `results`: 30 diagnosis result objects
- `showScreen`: switches between app screens
- `showResult`: filters result candidates and chooses a random diagnosis and lucky item
- `renderResult`: writes selected result content into the cover layout

## CSS Structure

- Mobile-first layout with iPhone width as the main target
- Generated magazine-style background image layered under readable typography
- Shared magazine labels and buttons
- Dedicated styles for home cover, mood selection, and result cover
- Result theme classes for subtle cover color changes
- Small-width and taller-screen media queries for iPhone variation

## Deployment Structure

- `.github/workflows/pages.yml`: deploys the repository root to GitHub Pages with official Pages Actions
- `.nojekyll`: disables Jekyll processing for the static site
