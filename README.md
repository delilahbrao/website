# delilahbrao.com

The official website of [Delilah Brao](https://delilahbrao.com) — indie-pop
singer-songwriter from Boston, based in Los Angeles.

Built as a plain static site (HTML/CSS/JS, no framework, no build step) and
deployed with GitHub Pages.

## Structure

| Path | Page |
|---|---|
| `index.html` | Home — new music from the upcoming debut album |
| `since-youre-in-new-york/` | *Since You're In New York* (2024 EP) |
| `lately-i-dont-feel-right/` | *lately i don't feel right* (2025 EP) |
| `about/` | About |
| `faq/` | FAQ |
| `music/<release>/` | Release info pages (credits, tracklists, links) |
| `profile/` | Legacy URL — redirects to `/about/` |
| `styles.css` / `script.js` | Shared styles and progressive enhancements |
| `assets/` | Favicons and imagery (`.jpg` with `.webp`/`.avif` siblings) |

Each release page is themed after its cover art — colors, typography, and
background textures are all derived from the artwork.

## Running locally

Any static file server works. From the repo root:

```sh
npx --yes serve@14 -l 4173
# or
python3 -m http.server 4173
```

Then open http://127.0.0.1:4173. Don't open `index.html` via `file://` —
the subdirectory pages won't resolve.

## Editing notes

- The site intentionally has zero runtime dependencies — please keep it that way.
- Images ship as `.jpg` plus `.webp`/`.avif` variants; if you replace a `.jpg`,
  regenerate the siblings (`cwebp`, `avifenc`) so browsers keep the fast paths.
- `CNAME` points the GitHub Pages deployment at the custom domain — don't
  delete it.
